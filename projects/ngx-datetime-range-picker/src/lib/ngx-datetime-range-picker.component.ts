import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation,
  Renderer2
} from "@angular/core";
import { Observable } from "rxjs";
import { NgxDatetimeRangePickerConstants as Constants } from "./ngx-datetime-range-picker.constants";
import { NgxDatetimeRangePickerService } from "./ngx-datetime-range-picker.service";
import { cloneDeep, isEmpty, mergeDeep, isNil } from "./ngx-datetime-range-picker.utils";
import {
  Options,
  Settings,
  State,
  RowItemVariables,
  RowOptions,
  RowItemOptions,
  DateSide,
  ActiveItemSide,
  DateCharacteristics,
  DateRangeModel,
  Config,
  TimeSide,
  DateRow,
  RowVariables
} from "./interfaces/index";

declare var require: any;
const moment = require("moment");

enum InputFocusBlur {
  focus = 1,
  blur = 2
}

const DEFAULT_DATE_FORMAT = Constants.DEFAULT.DATE_FORMAT;
const DEFAULT_TIME_FORMAT = Constants.DEFAULT.TIME_FORMAT;
const DEFAULT_START_DATE = Constants.DEFAULT.START_DATE;
const DEFAULT_END_DATE = Constants.DEFAULT.END_DATE;
const DEFAULT_MIN_DATE = Constants.DEFAULT.MIN_DATE;
const DEFAULT_MAX_DATE = Constants.DEFAULT.MAX_DATE;
const USA_TZ_CODE = Constants.CONSTANT.USA_TZ_CODE;

@Component({
  selector: "ngx-datetime-range-picker",
  templateUrl: "./ngx-datetime-range-picker.component.html",
  styleUrls: ["./ngx-datetime-range-picker.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class NgxDatetimeRangePickerComponent implements OnChanges {
  @Input() options: Options;
  @Input() settings: Settings;
  @Input() optionService: Observable<any>;
  @Input() dateRangeModel: Options | DateRangeModel;
  @Input() canBeEmpty = false;
  @Output() dateRangeModelChange: EventEmitter<Options | DateRangeModel> = new EventEmitter<Options | DateRangeModel>();
  @Output() dateRangeChanged: EventEmitter<Options> = new EventEmitter<Options>();
  @Output() inputFocusBlur: EventEmitter<Object> = new EventEmitter<Object>();
  @Output() selectedDate: EventEmitter<Options> = new EventEmitter<Options>();
  @ViewChild("filterInputBox") filterInputBox: any;

  state: State = this.service.getDefaultState();

  config: Config;

  constructor(public element: ElementRef, private renderer: Renderer2, private service: NgxDatetimeRangePickerService) {
    this.options = this.service.getDefaultOptions();
    this.settings = this.service.getDefaultSettings();
    this.config = Object.assign(this.options, this.settings);

    this.state.todayTime = this.service.getZoneToday(this.state.selectedTimezone, this.config.viewDateFormat);

    this.renderer.listen("document", "click", (event: MouseEvent) => {
      if (
        this.state.isCalendarVisible &&
        event.target &&
        (<HTMLElement>event.target).className !== "mat-option-text" &&
        this.element.nativeElement !== event.target &&
        !this.element.nativeElement.contains(event.target)
      ) {
        this.onCalendarClose(event);
      }
    });
  }

  public ngOnChanges(changes: SimpleChanges) {
    const { canBeEmpty, settings, dateRangeModel, optionService, options } = changes;

    if (canBeEmpty) {
      this.canBeEmpty = canBeEmpty.currentValue;
    }

    if (settings) {
      this.settings = mergeDeep(this.settings, settings.currentValue);
    }

    if (dateRangeModel) {
      this.dateRangeModel = dateRangeModel.currentValue;
    }

    if (dateRangeModel && !dateRangeModel.firstChange) {
      const previousValue = dateRangeModel.previousValue[this.config.type];
      const currentValue = dateRangeModel.currentValue[this.config.type];
      if (
        previousValue &&
        currentValue &&
        previousValue.startDate === currentValue.startDate &&
        previousValue.endDate === currentValue.endDate
      ) {
        return;
      }
    }

    if (optionService && optionService.currentValue) {
      optionService.currentValue.subscribe(
        (dateOptions: any) => {
          if (typeof dateOptions === "object" && !Array.isArray(dateOptions)) {
            this.options = dateOptions.plain ? dateOptions.plain() : dateOptions;
          }
        },
        (err) => {
          console.error(`ERR_NGX_DATETIME_RANGE_PICKER:
            Filter Call Failure:
            ${err}
          `);
        },
        () => {
          this.init();
        }
      );
    }

    if (options) {
      this.options = options ? options.currentValue : this.options;
    }

    if (!optionService) {
      this.init();
    }
  }

  // Events
  onDateRangeInputChange(value: string) {
    this.dateRangeSelected();
  }

  setDisabledState(disabled: boolean): void {
    this.config.componentDisabled = disabled;
  }

  onComponentClick(): void {
    this.state.isCalendarVisible = !this.state.isCalendarVisible;
  }

  onFocusInput(event: MouseEvent): void {
    this.inputFocusBlur.emit({
      reason: InputFocusBlur.focus,
      value: (<HTMLInputElement>event.target).value
    });
  }

  onBlurInput(event: MouseEvent): void {
    const value = (<HTMLInputElement>event.target).value;
    this.state.selectedDateText = value;
    this.inputFocusBlur.emit({
      reason: InputFocusBlur.blur,
      value
    });
  }

  onCalendarClose(event: MouseEvent): void {
    if (this.config.startDate && this.config.endDate) {
      this.filterInputBox.nativeElement.classList.remove("empty-filter");
      this.state.isCalendarVisible = false;
    } else {
      // this.filterInputBox.nativeElement.classList.add('empty-filter');
    }
  }

  isPrevAvailable(month: string): boolean {
    return (
      moment(month, "MMM YYYY")
        .startOf("month")
        .valueOf() >
      moment(this.config.minDate, DEFAULT_DATE_FORMAT)
        .startOf("month")
        .valueOf()
    );
  }

  isNextAvailable(month: string): boolean {
    return (
      moment(month, "MMM YYYY")
        .endOf("month")
        .valueOf() <
      moment(this.config.maxDate, DEFAULT_DATE_FORMAT)
        .endOf("month")
        .valueOf()
    );
  }

  getCalendarColspan() {
    return this.service.getCalendarColspan(this.config.type);
  }

  getCalendarRowItemColspan() {
    return this.service.getCalendarRowItemColspan(this.config.type);
  }

  onClickPrevious(month: string, side: string) {
    const startDate = moment(month, "MMM YYYY")
      .subtract(1, "month")
      .startOf("month")
      .format(DEFAULT_DATE_FORMAT);
    this.state.dates[side] = this.generateCalendar(startDate, side);
  }

  onClickNext(month: string, side: string) {
    const endDate = moment(month, "MMM YYYY")
      .add(1, "month")
      .endOf("month")
      .format(DEFAULT_DATE_FORMAT);
    this.state.dates[side] = this.generateCalendar(endDate, side);
  }

  onCellClick(item: DateCharacteristics, itemCell, side: string) {
    const date: number = moment(item.date, DEFAULT_DATE_FORMAT).valueOf();
    const startDate: number = moment(this.config.startDate, DEFAULT_DATE_FORMAT).valueOf();
    const endDate: number = moment(this.config.endDate, DEFAULT_DATE_FORMAT).valueOf();
    const minDate: number = moment(this.config.minDate, DEFAULT_DATE_FORMAT).valueOf();
    const maxDate: number = moment(this.config.maxDate, DEFAULT_DATE_FORMAT).valueOf();

    if (!item.available) {
      if (date < minDate || date > maxDate) {
        return;
      }
      this.state.dates[side] = this.generateCalendar(item.date, side);
    }

    if (endDate || date < startDate) {
      this.config.endDate = null;
      this.config.startDate = item.date;
      this.state.activeItem.left = item;
    } else if (!endDate && date < startDate) {
      this.config.endDate = cloneDeep(this.config.startDate) as string;
      this.state.activeItem.right = item;
    } else {
      this.config.endDate = item.date;
      this.state.activeItem.right = item;
    }

    if (this.config.singleDatePicker) {
      this.config.endDate = cloneDeep(this.config.startDate) as string;
      this.state.activeItem.right = this.state.activeItem.left = item;
    }

    this.doApply();
  }

  onCellMouseEnter(item: DateCharacteristics, itemCell) {
    if (!item.available) {
      return;
    }

    const date: number = moment(item.date, DEFAULT_DATE_FORMAT).valueOf();
    const startDate: number = moment(this.config.startDate, DEFAULT_DATE_FORMAT).valueOf();
    const endDate: number = moment(this.config.endDate, DEFAULT_DATE_FORMAT).valueOf();
    const hoverItemText: string = itemCell ? itemCell.innerText : "";
    let hoverItemFirstDate: string = itemCell ? itemCell.getAttribute("firstDay") : "";
    let hoverItemLastDate: string = itemCell ? itemCell.getAttribute("lastDay") : "";

    hoverItemFirstDate = moment(hoverItemFirstDate, DEFAULT_DATE_FORMAT).format(this.config.viewDateFormat);
    hoverItemLastDate = moment(hoverItemLastDate, DEFAULT_DATE_FORMAT).format(this.config.viewDateFormat);

    let activeItemInputFieldText = `${hoverItemText} (${hoverItemFirstDate} - ${hoverItemLastDate})`;

    if (this.config.type === "daily") {
      activeItemInputFieldText = `${hoverItemLastDate}`;
    }

    if (!endDate) {
      const func = (rowItem) => {
        if (rowItem.available) {
          const hoverItemDate = rowItem.date ? moment(rowItem.date, DEFAULT_DATE_FORMAT).valueOf() : rowItem.date;
          if ((hoverItemDate > startDate && hoverItemDate < date) || date === hoverItemDate) {
            rowItem.inRange = true;
            this.state.dateTitleText.right = activeItemInputFieldText;
          }
        }
      };

      this.service.iterateOverDateObj(this.state.dates, func.bind(this));
    } else {
      if (this.config.singleDatePicker) {
        this.state.dateTitleText.right = activeItemInputFieldText;
      } else {
        this.state.dateTitleText.left = activeItemInputFieldText;
      }
    }
  }

  onCellMouseLeave() {
    if (!this.config.endDate) {
      const func = (rowItem) => {
        rowItem.inRange = false;
      };
      this.service.iterateOverDateObj(this.state.dates, func.bind(this));
    } else {
      this.updateActiveItemInputField();
    }
  }

  onRangeClick(rangeLabel: string, dateRangeModel: Options) {
    this.state.activeRange = rangeLabel;
    if (rangeLabel === "Custom Range") {
      this.state.customRange = !this.state.customRange;
      if (this.state.customRange) {
        this.updateCalendar();
      } else {
        this.state.sides.length = 0;
        this.state.dates = {};
        if (this.config.timePicker) {
          this.state.times = {};
        }
      }
    } else {
      this.config.startDate = dateRangeModel.startDate;
      this.config.endDate = dateRangeModel.endDate;
      if (this.config.timePicker) {
        // this.state.sides.forEach((side) => {
        //   this.state.times[side] = this.generateTimePicker(null, side);
        // })
        if (this.config.timePicker) {
          this.state.times = {};
        }
        this.updateCalendar();
      }
      this.setActiveItemOnRangeClick();
    }
  }

  updateCalendar() {
    this.state.sides.length = 0;
    this.state.dates = {};
    // takes 223 milliSeconds
    // Order is important left - right
    if (!this.config.singleDatePicker) {
      this.state.sides.push("left");
      this.state.dates.left = this.generateCalendar(this.config.startDate, "left");
      if (this.config.timePicker) {
        this.state.times.left = this.generateTimePicker(this.config.startTime, "left");
      }
    }
    this.state.sides.push("right");
    this.state.dates.right = this.generateCalendar(this.config.endDate, "right");
    if (this.config.timePicker) {
      this.state.times.right = this.generateTimePicker(this.config.endTime, "right");
    }
  }

  onCalendarLabelChange(label: string, side: string, type: string) {
    this.state.isCalendarVisible = true;
    if (type === "month") {
      this.state.selectedMonth[side] = label;
    } else if (type === "year") {
      this.state.selectedYear[side] = label;
    }

    if (this.config.type !== "daily") {
      this.state.selectedMonth[side] = "Jun";
    }

    if (this.config.type !== "yearly") {
      const selectedMonth = `${this.state.selectedMonth[side]} ${this.state.selectedYear[side]}`;
      const date: string = moment(selectedMonth, "MMM YYYY")
        .startOf("month")
        .format(DEFAULT_DATE_FORMAT);
      this.state.dates[side] = this.generateCalendar(date, side);
    } else {
      if (this.state.selectedYear.left <= this.state.selectedYear.right && side === "right") {
        this.config.startDate = moment(this.state.selectedYear.left, "YYYY")
          .startOf("year")
          .format(DEFAULT_DATE_FORMAT);
        this.config.endDate = moment(this.state.selectedYear.right, "YYYY")
          .endOf("year")
          .format(DEFAULT_DATE_FORMAT);

        this.doApply();
      }
      const config = {
        startDate: moment(this.state.selectedYear.left, "YYYY")
          .startOf("year")
          .format(DEFAULT_DATE_FORMAT),
        type: "yearly"
      };
      const startDate: string = this.service.formatStartDate(config, this.config.viewDateFormat);
      const endDate: string = this.config.endDate
        ? moment(this.config.endDate, DEFAULT_DATE_FORMAT).format(this.config.viewDateFormat)
        : "";
      this.state.dateTitleText.left = `${startDate}`;
      this.state.dateTitleText.right = `${endDate}`;
    }
  }

  onTimeLabelChange(timeItem: string, side: string, item: string) {
    let time = null;
    if (side === "left") {
      time = this.config.startTime.split(":");
      if (timeItem === "hour") {
        this.config.startTime = `${item}:${time[1]}`;
      } else {
        this.config.startTime = `${time[0]}:${item}`;
      }

      const startDateEpoch: number = moment(this.config.startDate, DEFAULT_DATE_FORMAT).valueOf();
      const endDateEpoch: number = moment(this.config.endDate, DEFAULT_DATE_FORMAT).valueOf();
      if (startDateEpoch === endDateEpoch) {
        this.state.times.right = this.generateTimePicker(this.config.startTime, "right");
      }
    } else {
      time = this.config.endTime.split(":");
      if (timeItem === "hour") {
        this.config.endTime = `${item}:${time[1]}`;
      } else {
        this.config.endTime = `${time[0]}:${item}`;
      }
    }

    if (timeItem === "hour") {
      this.state.selectedHour[side] = this.service.convertToViewTimeItem(item);
    } else {
      this.state.selectedMinute[side] = this.service.convertToViewTimeItem(item);
    }
  }

  onTimeApply() {
    this.dateRangeSelected();
    this.updateInputField();
  }

  // Helpers
  init() {
    this.state.isValidFilter = false;
    if (!this.config) {
      this.config = Object.assign(this.service.getDefaultOptions(), this.service.getDefaultSettings());
    }
    this.initialize();
    this.parseOptions();
    this.updateInputField();
  }

  initialize() {
    this.state = this.service.getDefaultState();
  }

  parseOptions() {
    if (this.options !== undefined) {
      Object.keys(this.options).forEach((k) => {
        if (!isNil(this.options[k])) {
          this.config[k] = this.options[k];
        } else {
          console.warn(`WARN_NGX_DATETIME_RANGE_PICKER:
            'options.${k}' is undefined or null. Setting default value.
          `);
        }
      });
    }
    if (this.settings !== undefined) {
      Object.keys(this.settings).forEach((k) => {
        if (!isNil(this.settings[k])) {
          this.config[k] = this.settings[k];
        } else {
          console.warn(`WARN_NGX_DATETIME_RANGE_PICKER:
            'settings.${k}' is undefined or null. Setting default value.
          `);
        }
      });
    }

    // check if inputDateFormat is provided
    if (!this.config.inputDateFormat) {
      console.warn(`WARN_NGX_DATETIME_RANGE_PICKER:
        'inputDateFormat' is required to convert dates.
        'inputDateFormat' not provided. Setting it to YYYY-MM-DD.
      `);
      this.config.inputDateFormat = DEFAULT_DATE_FORMAT;
    }

    if (this.config.type === "weekly" || this.config.type === "yearly") {
      this.config.showRowNumber = false;
    }
    if (this.config.singleDatePicker) {
      this.config.startDate = cloneDeep(this.config.endDate) as string;
    }

    this.selectTimeZone();
    this.parseOptionsToDefaultDateFormat();
    this.processDateRangeModel();
    this.handleDateArray();
    this.sanitizeDates();
    this.processRanges();
    this.doDateRangeModelChange();
  }

  selectTimeZone() {
    if (this.config.timezoneSupport) {
      if (!this.config.defaultTimezone) {
        this.config.defaultTimezone = USA_TZ_CODE;
      }
      this.state.selectedTimezone = this.config.defaultTimezone;
    }

    if (this.config.useLocalTimezone) {
      this.state.selectedTimezone = this.state.localTimezone;
    }
    this.onTimezoneChange(this.state.selectedTimezone);
  }

  parseOptionsToDefaultDateFormat() {
    this.config.minDate = this.service.formatDateToDefaultFormat(this.config.minDate, this.config.inputDateFormat);
    this.config.maxDate = this.service.formatDateToDefaultFormat(this.config.maxDate, this.config.inputDateFormat);
    this.config.startDate = this.service.formatDateToDefaultFormat(this.config.startDate, this.config.inputDateFormat);
    this.config.endDate = this.service.formatDateToDefaultFormat(this.config.endDate, this.config.inputDateFormat);

    if (this.config.timePicker) {
      this.config.minTime = this.service.formatTimeToDefaultFormat(this.config.minTime);
      this.config.maxTime = this.service.formatTimeToDefaultFormat(this.config.maxTime);
      this.config.startTime = this.service.formatTimeToDefaultFormat(this.config.startTime);
      this.config.endTime = this.service.formatTimeToDefaultFormat(this.config.endTime);
    }
  }

  /**
   * @desc sets startDate, endDate
   */
  processDateRangeModel() {
    if (undefined === this.dateRangeModel || isEmpty(this.dateRangeModel)) {
      return;
    }

    if (!this.dateRangeModel[this.config.type]) {
      const _optionsKeys: string[] = Object.keys(this.service.getDefaultOptions());
      const _model = {};
      Object.keys(this.dateRangeModel).forEach((key: string) => {
        if (_optionsKeys.includes(key)) {
          _model[key] = this.dateRangeModel[key];
          delete this.dateRangeModel[key];
        }
      });
      this.dateRangeModel[this.config.type] = _model;
      if (!this.dateRangeModel[this.config.type]) {
        return;
      }
    }

    const dateRangeMinDate = this.dateRangeModel[this.config.type].minDate || this.config.minDate;
    const dateRangeMaxDate = this.dateRangeModel[this.config.type].maxDate || this.config.maxDate;
    const dateRangeStartDate = this.dateRangeModel[this.config.type].startDate || this.config.startDate;
    const dateRangeEndDate = this.dateRangeModel[this.config.type].endDate || this.config.endDate;

    this.config.dateArray = this.dateRangeModel[this.config.type].dateArray || this.config.dateArray;

    this.config.minDate = this.service.formatDateToDefaultFormat(dateRangeMinDate, this.config.inputDateFormat);
    this.config.maxDate = this.service.formatDateToDefaultFormat(dateRangeMaxDate, this.config.inputDateFormat);
    this.config.startDate = this.service.formatDateToDefaultFormat(dateRangeStartDate, this.config.inputDateFormat);
    this.config.endDate = this.service.formatDateToDefaultFormat(dateRangeEndDate, this.config.inputDateFormat);

    if (this.config.timePicker) {
      const dateRangeMinTime = this.dateRangeModel[this.config.type].minTime || this.config.minTime;
      const dateRangeMaxTime = this.dateRangeModel[this.config.type].maxTime || this.config.maxTime;
      const dateRangeStartTime = this.dateRangeModel[this.config.type].startTime || this.config.startTime;
      const dateRangeEndTime = this.dateRangeModel[this.config.type].endTime || this.config.endTime;

      this.config.minTime = this.service.formatTimeToDefaultFormat(dateRangeMinTime);
      this.config.maxTime = this.service.formatTimeToDefaultFormat(dateRangeMaxTime);
      this.config.startTime = this.service.formatTimeToDefaultFormat(dateRangeStartTime);
      this.config.endTime = this.service.formatTimeToDefaultFormat(dateRangeEndTime);
    }
  }

  /**
   * @desc sets minDate, maxDate, startDate, endDate if not passed
   */
  handleDateArray() {
    if (this.config.dateArray && this.config.dateArray.length > 0) {
      // converts all the dates to DEFAULT_DATE_FORMAT
      this.config.dateArray = this.service.getSanitizedDateArray(this.config);

      // sort in asc order
      this.config.dateArray = this.config.dateArray.sort((date1, date2) => {
        const value1: number = moment(date1, DEFAULT_DATE_FORMAT).valueOf();
        const value2: number = moment(date2, DEFAULT_DATE_FORMAT).valueOf();
        return value1 - value2;
      });

      const minDate = this.config.dateArray[0];
      const maxDate = this.config.dateArray[this.config.dateArray.length - 1];

      const setDate = (dateType: string, defaultDate: string, date: string) => {
        if (
          moment(this.config[dateType], DEFAULT_DATE_FORMAT).valueOf() ===
          moment(defaultDate, DEFAULT_DATE_FORMAT).valueOf()
        ) {
          this.config[dateType] = date;
        }
      };

      setDate.bind(this)("minDate", DEFAULT_MIN_DATE, minDate);
      setDate.bind(this)("maxDate", DEFAULT_MAX_DATE, maxDate);
      setDate.bind(this)("startDate", DEFAULT_START_DATE, minDate);
      setDate.bind(this)("endDate", DEFAULT_END_DATE, maxDate);
    }
  }

  sanitizeDates() {
    const subtractWeekCount = 0;
    const setDate = (type: string) => {
      this.config.minDate = moment(this.config.minDate, DEFAULT_DATE_FORMAT)
        .endOf(type)
        .format(DEFAULT_DATE_FORMAT);
      this.config.maxDate =
        type === "week"
          ? moment(this.config.maxDate, DEFAULT_DATE_FORMAT)
              .subtract(subtractWeekCount, "week")
              .endOf(type)
              .format(DEFAULT_DATE_FORMAT)
          : moment(this.config.maxDate, DEFAULT_DATE_FORMAT)
              .endOf(type)
              .format(DEFAULT_DATE_FORMAT);
      this.config.startDate = moment(this.config.startDate, DEFAULT_DATE_FORMAT)
        .endOf(type)
        .format(DEFAULT_DATE_FORMAT);
      this.config.endDate =
        type === "week"
          ? moment(this.config.endDate, DEFAULT_DATE_FORMAT)
              .subtract(subtractWeekCount, "week")
              .endOf(type)
              .format(DEFAULT_DATE_FORMAT)
          : moment(this.config.endDate, DEFAULT_DATE_FORMAT)
              .endOf(type)
              .format(DEFAULT_DATE_FORMAT);
    };

    if (this.config.type === "weekly") {
      setDate.bind(this)("week");
    } else if (this.config.type === "monthly") {
      setDate.bind(this)("month");
    } else if (this.config.type === "quarterly") {
      setDate.bind(this)("quarter");
    } else if (this.config.type === "yearly") {
      setDate.bind(this)("year");
    }

    if (
      moment(this.config.startDate, DEFAULT_DATE_FORMAT).valueOf() <
      moment(this.config.minDate, DEFAULT_DATE_FORMAT).valueOf()
    ) {
      this.config.minDate = this.config.startDate;
    }

    if (
      moment(this.config.endDate, DEFAULT_DATE_FORMAT).valueOf() >
      moment(this.config.maxDate, DEFAULT_DATE_FORMAT).valueOf()
    ) {
      this.config.maxDate = this.config.endDate;
    }
  }

  processRanges() {
    if (this.config.showRanges && !this.config.singleDatePicker) {
      if (isEmpty(this.config.availableRanges)) {
        this.config.availableRanges = this.service.createDefaultRanges(this.config);
      }
      this.selectActiveRange();
    } else {
      this.state.activeRange = "Custom Range";
      this.onRangeClick(this.state.activeRange, null);
    }
  }

  selectActiveRange() {
    for (const range in this.config.availableRanges) {
      if (range) {
        const rangeModel = this.config.availableRanges[range];
        if (this.config.startDate === rangeModel.startDate && this.config.endDate === rangeModel.endDate) {
          this.state.activeRange = range;
          this.updateActiveItem();
        }
      }
    }

    if (!this.state.activeRange) {
      this.state.activeRange = "Custom Range";
      this.onRangeClick(this.state.activeRange, null);
    }
  }

  generateCalendar(date: string | number, side: string): DateSide {
    this.state.selectedMonth[side] = moment(date, DEFAULT_DATE_FORMAT).format("MMM");
    this.state.selectedYear[side] = this.service.getSelectedYear(date);
    const calendarLabel = `${this.state.selectedMonth[side]} ${this.state.selectedYear[side]}`;

    const dates: DateSide = {
      label: calendarLabel,
      months: this.service.getMonthsAvailable(this.config.minDate, this.config.maxDate, this.state.selectedYear[side]),
      years: this.service.getYearsAvailable(this.config),
      itemRows: [] as Object[]
    };

    this.state.weekDayOptions = [""];

    if (this.config.type !== "yearly") {
      // moment returns wrong week number
      const monthStartWeekNumber: number = moment(date, DEFAULT_DATE_FORMAT)
        .year(this.state.selectedYear[side])
        .startOf("month")
        .week(); // previousMonthLastWeek
      const yearStartDate = moment(this.state.selectedYear[side], "YYYY")
        .startOf("year")
        .format(DEFAULT_DATE_FORMAT);
      let numberOfRows = 1;

      if (this.config.type === "daily") {
        numberOfRows = this.service.getNumberOfWeeks(date);
        this.state.weekDayOptions = ["su", "mo", "tu", "we", "th", "fr", "sa"];
      } else if (this.config.type === "weekly") {
        numberOfRows = 8;
        this.state.weekDayOptions = ["", "", "", "", "", "", ""];
      } else if (this.config.type === "monthly") {
        numberOfRows = 4;
        this.state.weekDayOptions = ["", "", ""];
      } else if (this.config.type === "quarterly") {
        numberOfRows = 4;
        this.state.weekDayOptions = [""];
      }

      for (let dateRows = 0; dateRows < numberOfRows; dateRows++) {
        const dateRowObj: DateRow = {
          rowNumber: null as string,
          rowNumberText: null as string,
          items: [] as DateCharacteristics[]
        };

        const rowOptions: RowOptions = {
          type: this.config.type,
          monthStartWeekNumber: monthStartWeekNumber,
          dateRows: dateRows,
          year: this.state.selectedYear[side],
          itemCount: null
        };

        const { rowNumber, columns }: RowVariables = this.service.getCalendarRowVariables(rowOptions);

        dateRowObj.rowNumber = rowNumber;
        dateRowObj.rowNumberText = this.service.getCalendarRowNumberText(this.config.type, rowNumber);

        for (let rowItem = 0; rowItem <= columns; rowItem++) {
          const rowItemOptions: RowItemOptions = {
            type: this.config.type,
            monthStartWeekNumber,
            dateRows,
            rowNumber,
            yearStartDate,
            year: this.state.selectedYear[side],
            rowItem,
            columns
          };

          const {
            currentItemDate,
            rowItemText,
            firstDay,
            lastDay,
            itemCount
          }: RowItemVariables = this.service.getCalendarRowItemVariables(rowItemOptions);

          rowOptions.itemCount = itemCount;

          const { available, inRange, active, today }: DateCharacteristics = this.service.getDateCharacteristics(
            this.config,
            this.state,
            currentItemDate,
            calendarLabel,
            side
          );

          const itemObj: ActiveItemSide = {
            date: currentItemDate,
            rowItemText,
            firstDay,
            lastDay,
            available,
            inRange,
            active,
            today
          };
          if (this.service.isRowIemValid(rowOptions)) {
            if (active) {
              this.state.activeItem[side] = itemObj;
            }
            dateRowObj.items.push(itemObj);
          }
        }
        dates.itemRows.push(dateRowObj);
      }
    }

    this.state.calendarAvailable[side] = true;
    return dates;
  }

  generateTimePicker(time: string, side: string): TimeSide {
    const timeObject: TimeSide = {
      hour: [],
      minute: [],
      meridian: []
    };

    let startHour = 0;
    const endHour = 23;
    let startMinute = 0;
    const endMinute = 59;
    let selectedHour = side === "left" ? startHour : endHour;
    let selectedMinute = side === "left" ? startMinute : endMinute;
    const startDateEpoch = moment(this.config.startDate, DEFAULT_DATE_FORMAT).valueOf();
    const endDateEpoch = moment(this.config.endDate, DEFAULT_DATE_FORMAT).valueOf();

    if (time) {
      selectedHour = moment(time, DEFAULT_TIME_FORMAT).format("H");
      selectedMinute = moment(time, DEFAULT_TIME_FORMAT).format("m");

      if (side === "right" && startDateEpoch === endDateEpoch) {
        startHour = selectedHour;
        startMinute = selectedMinute;
      }
    }

    // let dateOptions = {
    //   timeZone: TZ_NAMES[this.state.selectedTimezone],
    //   timeZoneName: 'short',
    //   hour12: false
    // }
    // let startDateObj = new Date(`Jan 1 1970 ${startHour}:${startMinute}:00 GMT-0700 (Mountain Standard Time)`);
    // let endDateObj = new Date(`Jan 1 1970 ${endHour}:${endMinute}:00 GMT-0700 (Mountain Standard Time)`);
    // startTime = startDateObj.toLocaleTimeString('en-US', dateOptions);
    // endTime = endDateObj.toLocaleTimeString('en-US', dateOptions);

    // startHour = moment(startTime, 'HH:mm:ss').format('H');
    // endHour = moment(endTime, 'HH:mm:ss').format('H');
    // startMinute = moment(startTime, 'HH:mm:ss').format('m');
    // endMinute = moment(endTime, 'HH:mm:ss').format('m');

    for (let h = startHour; h <= 23; h++) {
      const stringified_h = this.service.convertToViewTimeItem(h);
      timeObject.hour.push(stringified_h);
    }
    for (let m = startMinute; m <= 59; m++) {
      const stringified_m = this.service.convertToViewTimeItem(m);
      timeObject.minute.push(stringified_m);
    }

    this.state.selectedHour[side] = this.service.convertToViewTimeItem(selectedHour);
    this.state.selectedMinute[side] = this.service.convertToViewTimeItem(selectedMinute);

    if (side === "left") {
      this.config.startTime = `${this.state.selectedHour[side]}:${this.state.selectedMinute[side]}`;
    } else if (side === "right") {
      this.config.endTime = `${this.state.selectedHour[side]}:${this.state.selectedMinute[side]}`;
    }

    return timeObject;
  }

  updateInputField() {
    const startDate = this.service.formatStartDate(this.config, this.config.viewDateFormat);
    const endDate = this.config.endDate
      ? moment(this.config.endDate, DEFAULT_DATE_FORMAT).format(this.config.viewDateFormat)
      : "";

    if (this.config.singleDatePicker) {
      let startDateText = startDate;
      let endDataText = endDate;
      let dateText = "";

      if (this.config.timePicker) {
        startDateText = `${startDate} ${this.config.startTime}`;
        endDataText = `${endDate} ${this.config.endTime}`;
      }
      if (this.config.displayBeginDate) {
        dateText = `${startDateText}`;
      } else if (this.config.displayEndDate) {
        dateText = `${endDataText}`;
      } else {
        dateText = `${startDateText} - ${endDataText}`;
      }

      this.state.selectedDateText = dateText;
    } else {
      let startDateText = startDate;
      let endDataText = endDate;

      if (this.config.timePicker) {
        startDateText = `${startDate} ${this.config.startTime}`;
        endDataText = `${endDate} ${this.config.endTime}`;
      }

      this.state.selectedDateText = `${startDateText} - ${endDataText}`;
    }

    if (this.canBeEmpty || this.state.selectedDateText.indexOf("nvalid") < 0) {
      this.state.isValidFilter = true;
    }

    if (this.config.type === "yearly") {
      this.state.dateTitleText.left = `${startDate}`;
      this.state.dateTitleText.right = `${endDate}`;
    } else {
      this.updateActiveItemInputField();
    }
  }

  updateActiveItemInputField() {
    if (!this.config.singleDatePicker) {
      this.updateSide("left");
    }
    this.updateSide("right");
  }

  updateSide(side: string) {
    let itemFirstDate = this.state.activeItem[side].firstDay;
    let itemLastDate = this.state.activeItem[side].lastDay;
    const itemText = this.state.activeItem[side].rowItemText;
    itemFirstDate = moment(itemFirstDate, DEFAULT_DATE_FORMAT).format(this.config.viewDateFormat);
    itemLastDate = moment(itemLastDate, DEFAULT_DATE_FORMAT).format(this.config.viewDateFormat);
    if (this.config.type !== "daily") {
      this.state.dateTitleText[side] = `${itemText} (${itemFirstDate} - ${itemLastDate})`;
    } else {
      this.state.dateTitleText[side] = `${itemFirstDate}`;
    }
  }

  dateRangeSelected() {
    const dateRangeModel: Options = this.getNgxDatetimeRangePickerModelItem();
    this.state.isCalendarVisible = false;
    this.filterInputBox.nativeElement.classList.remove("empty-filter");
    this.doDateRangeModelChange();
    this.dateRangeChanged.emit(dateRangeModel);
  }

  getDateRangeModel(format?: string): DateRangeModel {
    let dRModel: DateRangeModel = {};
    if (undefined !== this.dateRangeModel && !isEmpty(this.dateRangeModel)) {
      dRModel = cloneDeep(this.dateRangeModel) as {};
    }
    dRModel[this.config.type] = this.getNgxDatetimeRangePickerModelItem(format);
    return dRModel;
  }

  getNgxDatetimeRangePickerModelItem(format?: string): Options {
    let dateRangeModelItem: Options;
    let outputDateFormat: string = this.config.outputDateFormat;
    if (undefined !== format) {
      outputDateFormat = format;
    }
    let startDate = this.service.formatStartDate(this.config, outputDateFormat);
    let endDate = moment(this.config.endDate, DEFAULT_DATE_FORMAT).format(outputDateFormat);

    if (this.config.selectedTimezone) {
      startDate = this.service.formatToZoneDate(this.config.selectedTimezone, outputDateFormat, startDate);
      endDate = this.service.formatToZoneDate(this.config.selectedTimezone, outputDateFormat, endDate);
    }

    dateRangeModelItem = { startDate, endDate };

    if (this.config.timePicker) {
      const startTime = this.config.startTime;
      const endTime = this.config.endTime;

      dateRangeModelItem = {
        startDate,
        endDate,
        startTime,
        endTime
      };
    }

    return dateRangeModelItem;
  }

  doApply() {
    const startDate = this.config.startDate;
    const endDate = this.config.endDate;

    this.state.activeStartDate = startDate as string;
    this.state.activeEndDate = endDate as string;

    if (this.config.startDate && this.config.endDate) {
      if (!this.config.timePicker) {
        this.dateRangeSelected();
      } else {
        if (this.config.timePicker) {
          this.state.sides.forEach((side) => {
            this.state.times[side] = this.generateTimePicker(null, side);
          });
        }
      }
    }

    let outputStartDate = startDate ? moment(startDate, DEFAULT_DATE_FORMAT).valueOf() : null;
    let outputEndDate = endDate ? moment(endDate, DEFAULT_DATE_FORMAT).valueOf() : null;
    if (this.config.outputDateFormat) {
      outputStartDate = startDate ? moment(startDate, DEFAULT_DATE_FORMAT).format(this.config.outputDateFormat) : null;
      outputEndDate = endDate ? moment(endDate, DEFAULT_DATE_FORMAT).format(this.config.outputDateFormat) : null;
    }
    this.selectedDate.emit({
      startDate: outputStartDate,
      endDate: outputEndDate
    });

    this.updateInputField();
  }

  doDateRangeModelChange() {
    const dateRangeModel: DateRangeModel = this.getDateRangeModel(this.config.inputDateFormat);
    this.dateRangeModelChange.emit(dateRangeModel);
  }

  onTimezoneChange(tz: string) {
    this.state.selectedTimezone = tz;
    this.state.todayTime = this.service.getZoneToday(this.state.selectedTimezone, this.config.viewDateFormat);

    this.parseOptionsToDefaultDateFormat();
    this.state.sides.forEach((side) => {
      let date = this.config.startDate;
      let time = this.config.startTime;
      if (side === "right") {
        date = this.config.endDate;
        time = this.config.endTime;
      }
      this.state.dates[side] = this.generateCalendar(date, side);
      if (this.config.timePicker) {
        this.state.times[side] = this.generateTimePicker(time, side);
      }
    });
  }

  getSelectedTimeItemText(item: string, side: string) {
    if (item === "hour") {
      return this.state.selectedHour[side];
    } else if (item === "minute") {
      return this.state.selectedMinute[side];
    }
  }

  setActiveItemOnRangeClick() {
    this.updateActiveItem();
    this.doApply();
  }

  updateActiveItem() {
    const startDate: ActiveItemSide = this.service.getFirstLastDay(this.config.startDate as string, this.config.type);
    const endDate: ActiveItemSide = this.service.getFirstLastDay(this.config.endDate as string, this.config.type);

    if (this.config.type === "weekly") {
      startDate.rowItemText = `W${this.service.getWeekNumber(startDate.firstDay)}`;
      endDate.rowItemText = `W${this.service.getWeekNumber(endDate.firstDay)}`;
    } else if (this.config.type === "monthly") {
      startDate.rowItemText = `${moment(startDate.firstDay, DEFAULT_DATE_FORMAT).format("MMM")}`;
      endDate.rowItemText = `${moment(endDate.firstDay, DEFAULT_DATE_FORMAT).format("MMM")}`;
    } else if (this.config.type === "quarterly") {
      startDate.rowItemText = `Quarter ${moment(startDate.firstDay, DEFAULT_DATE_FORMAT).quarter()}`;
      endDate.rowItemText = `Quarter ${moment(endDate.firstDay, DEFAULT_DATE_FORMAT).quarter()}`;
    }

    this.state.activeItem.left = startDate;
    this.state.activeItem.right = endDate;

    // this.doApply();
  }
}
