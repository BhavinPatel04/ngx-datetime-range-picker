import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  Renderer,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation
} from "@angular/core";
import { Observable } from "rxjs";
import { NgxDatetimeRangePickerConstants } from "./ngx-datetime-range-picker.constants";
import { NgxDatetimeRangePickerService } from "./ngx-datetime-range-picker.service";
import {
  CalendarSides,
  DateRangeModelItem,
  DateTimeRangePickerOptions,
  DateTimeRangePickerSettings
} from "./interfaces/index";

declare var require: any;
const moment = require("moment");
const _ = require("lodash");

enum InputFocusBlur {
  focus = 1,
  blur = 2
}

const DEFAULT_DATE_FROMAT = NgxDatetimeRangePickerConstants.DEFAULT.DATE_FROMAT;
const DEFAULT_TIME_FORMAT = NgxDatetimeRangePickerConstants.DEFAULT.TIME_FORMAT;
const DEFAULT_START_DATE = NgxDatetimeRangePickerConstants.DEFAULT.START_DATE;
const DEFAULT_END_DATE = NgxDatetimeRangePickerConstants.DEFAULT.END_DATE;
const DEFAULT_MIN_DATE = NgxDatetimeRangePickerConstants.DEFAULT.MIN_DATE;
const DEFAULT_MAX_DATE = NgxDatetimeRangePickerConstants.DEFAULT.MAX_DATE;
const DEFAULT_START_TIME = NgxDatetimeRangePickerConstants.DEFAULT.START_TIME;
const DEFAULT_END_TIME = NgxDatetimeRangePickerConstants.DEFAULT.END_TIME;
const TZ_CODES = NgxDatetimeRangePickerConstants.CONSTANT.TZ_CODES;
const USA_TZ_CODE = NgxDatetimeRangePickerConstants.CONSTANT.USA_TZ_CODE;

@Component({
  selector: "ngx-datetime-range-picker",
  templateUrl: "./ngx-datetime-range-picker.component.html",
  styleUrls: ["./ngx-datetime-range-picker.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class NgxDatetimeRangePickerComponent implements OnChanges {
  @Input() public options: DateTimeRangePickerOptions;
  @Input() public settings: DateTimeRangePickerSettings;
  @Input() public optionService: Observable<any>;
  @Input() public dateRangeModel: Object;
  @Input() public canBeEmpty = false;
  @Output() public dateRangeModelChange: EventEmitter<Object> = new EventEmitter<Object>();
  @Output() public dateRangeChanged: EventEmitter<DateRangeModelItem> = new EventEmitter<DateRangeModelItem>();
  @Output() public inputFocusBlur: EventEmitter<Object> = new EventEmitter<Object>();
  @Output() public selectedDate: EventEmitter<Object> = new EventEmitter<Object>();
  @ViewChild("filterInputBox") public filterInputBox: any;

  public sides: string[] = [];
  public dates: CalendarSides = {
    left: {} as Object,
    right: {} as Object
  };
  public calendarAvailable: CalendarSides = {
    left: false as boolean,
    right: false as boolean
  };
  public showCalendar = false;
  public customRange = false;
  public selectedDateText = "";
  public dateTitleText: CalendarSides = {
    left: "" as string,
    right: "" as string
  };
  public weekDayOptions: string[] = ["su", "mo", "tu", "we", "th", "fr", "sa"];
  public selectedMonth: CalendarSides = {
    left: "" as string,
    right: "" as string
  };
  public selectedYear: CalendarSides = {
    left: "" as string,
    right: "" as string
  };
  public activeItem: CalendarSides = {
    left: "" as string,
    right: "" as string
  };
  public activeStartDate: string = null;
  public activeEndDate: string = null;
  public activeRange: string = null;
  public frequencyColumnHeader: string = null;

  public config: any = {};

  public isValidFilter = false;
  public isUserModelChange = true;

  public timezones: string[] = TZ_CODES;
  public localTimezone: string = this.ngxDateTimeRangePickerService.getLocalTimezone();
  // Since 'useLocalTimezone: false' byDefault;
  public selectedTimezone: string;
  public todayTime = "";

  public timeItems: string[] = ["hour", "minute"];
  public times: CalendarSides = {
    left: "" as string,
    right: "" as string
  };
  public selectedHour: CalendarSides = {
    left: "" as string,
    right: "" as string
  };
  public selectedMinute: CalendarSides = {
    left: "" as string,
    right: "" as string
  };
  public selectedMeridian: CalendarSides = {
    left: "" as string,
    right: "" as string
  };

  constructor(
    public element: ElementRef,
    private renderer: Renderer,
    private ngxDateTimeRangePickerService: NgxDatetimeRangePickerService
  ) {
    this.options = this.ngxDateTimeRangePickerService.getDefaultOptions();
    this.settings = this.ngxDateTimeRangePickerService.getDefaultSettings();
    this.config = Object.assign(this.options, this.settings);

    this.todayTime = this.ngxDateTimeRangePickerService.getZoneToday(this.selectedTimezone, this.config.viewDateFormat);

    this.renderer.listenGlobal("document", "click", (event: any) => {
      if (
        this.showCalendar &&
        event.target &&
        event.target.className !== "mat-option-text" &&
        this.element.nativeElement !== event.target &&
        !this.element.nativeElement.contains(event.target)
      ) {
        this.onCalendarClose(event);
      }
    });
  }

  public ngOnChanges(changes: SimpleChanges) {
    this.isUserModelChange = true;

    if (changes.canBeEmpty) {
      this.canBeEmpty = changes.canBeEmpty.currentValue;
    }

    if (changes.settings) {
      this.settings = _.merge(this.settings, changes.settings.currentValue);
    }

    if (changes.dateRangeModel) {
      this.dateRangeModel = changes.dateRangeModel.currentValue;
    }

    // this.settings.selectedModel = (this.settings.selectedModel) ? this.settings.selectedModel : this.settings.type;

    if (changes.dateRangeModel && !changes.dateRangeModel.firstChange) {
      const previousValue = changes.dateRangeModel.previousValue[this.config.selectedModel];
      const currentValue = changes.dateRangeModel.currentValue[this.config.selectedModel];
      if (
        previousValue &&
        currentValue &&
        previousValue.startDate === currentValue.startDate &&
        previousValue.endDate === currentValue.endDate
      ) {
        this.isUserModelChange = false;
      }
    }

    if (changes.optionService && changes.optionService.currentValue) {
      changes.optionService.currentValue.subscribe(
        (dateOptions: any) => {
          if (_.isObject(dateOptions) && !_.isArray(dateOptions)) {
            this.options = dateOptions.plain ? dateOptions.plain() : dateOptions;
          }
        },
        (err) => {
          console.error("DateRangePickerComponent | Filter Call Failure: ", err);
        },
        () => {
          this.init();
        }
      );
    }

    if (changes.options) {
      this.options = changes.options ? changes.options.currentValue : this.options;
    }

    if (!changes.optionService) {
      this.init();
    }
  }

  // Events
  public onDateRangeInputChange(value: string) {
    this.dateRangeSelected();
  }

  public setDisabledState(disabled: boolean): void {
    this.config.componentDisabled = disabled;
  }

  public onComponentClick(): void {
    this.showCalendar = !this.showCalendar;
  }

  public onFocusInput(event: any): void {
    this.inputFocusBlur.emit({
      reason: InputFocusBlur.focus,
      value: event.target.value
    });
  }

  public onBlurInput(event: any): void {
    this.selectedDateText = event.target.value;
    this.inputFocusBlur.emit({
      reason: InputFocusBlur.blur,
      value: event.target.value
    });
  }

  public onCalendarClose(event: any): void {
    if (this.config.startDate && this.config.endDate) {
      this.filterInputBox.nativeElement.classList.remove("empty-filter");
      this.showCalendar = false;
    } else {
      // this.filterInputBox.nativeElement.classList.add('empty-filter');
    }
  }

  public isPrevAvailale(month) {
    const minDate = this.ngxDateTimeRangePickerService.formatDateToDefaultFormat(
      this.config.minDate,
      DEFAULT_DATE_FROMAT
    );
    const currentMonthStartDate = moment(month, "MMM YYYY")
      .startOf("month")
      .valueOf();
    if (
      currentMonthStartDate >
      moment(minDate, DEFAULT_DATE_FROMAT)
        .startOf("month")
        .valueOf()
    ) {
      return true;
    } else {
      return false;
    }
  }

  public isNextAvailale(month) {
    const maxDate = this.ngxDateTimeRangePickerService.formatDateToDefaultFormat(
      this.config.maxDate,
      DEFAULT_DATE_FROMAT
    );
    const currentMonthEndDate = moment(month, "MMM YYYY")
      .endOf("month")
      .valueOf();
    if (
      currentMonthEndDate <
      moment(maxDate, DEFAULT_DATE_FROMAT)
        .endOf("month")
        .valueOf()
    ) {
      return true;
    } else {
      return false;
    }
  }

  public getCalendarColspan() {
    if (this.config.type === "daily") {
      return 6;
    } else if (this.config.type === "weekly") {
      return 8;
    } else if (this.config.type === "monthly") {
      return 3;
    } else if (this.config.type === "quarterly") {
      return 1;
    } else if (this.config.type === "yearly") {
      return 1;
    }
  }

  public getCalendarRowItemColspan() {
    if (this.config.type === "monthly") {
      return 3;
    } else if (this.config.type === "quarterly") {
      return 6;
    } else if (this.config.type === "yearly") {
      return 6;
    }
  }

  public getDatecharacteristics(date, month, side) {
    const currentDate = moment(date, DEFAULT_DATE_FROMAT)
      .startOf("day")
      .valueOf();
    const minDate = moment(
      this.ngxDateTimeRangePickerService.formatDateToDefaultFormat(this.config.minDate, DEFAULT_DATE_FROMAT),
      DEFAULT_DATE_FROMAT
    )
      .startOf("day")
      .valueOf();
    const maxDate = moment(
      this.ngxDateTimeRangePickerService.formatDateToDefaultFormat(this.config.maxDate, DEFAULT_DATE_FROMAT),
      DEFAULT_DATE_FROMAT
    )
      .startOf("day")
      .valueOf();
    const startDate = moment(
      this.ngxDateTimeRangePickerService.formatDateToDefaultFormat(this.config.startDate, DEFAULT_DATE_FROMAT),
      DEFAULT_DATE_FROMAT
    )
      .startOf("day")
      .valueOf();
    const endDate = moment(
      this.ngxDateTimeRangePickerService.formatDateToDefaultFormat(this.config.endDate, DEFAULT_DATE_FROMAT),
      DEFAULT_DATE_FROMAT
    )
      .startOf("day")
      .valueOf();
    const currentMonthStartDate = moment(month, "MMM YYYY")
      .startOf("month")
      .startOf("day")
      .valueOf();
    const currentMonthEndDate = moment(month, "MMM YYYY")
      .endOf("month")
      .startOf("day")
      .valueOf();

    const available: boolean = this.ngxDateTimeRangePickerService.isDateAvailable(
      currentDate,
      minDate,
      maxDate,
      startDate,
      endDate,
      currentMonthStartDate,
      currentMonthEndDate,
      this.config
    );
    const inRange: boolean = this.ngxDateTimeRangePickerService.isDateInRange(
      currentDate,
      minDate,
      maxDate,
      startDate,
      endDate,
      currentMonthStartDate,
      currentMonthEndDate,
      available,
      this.config
    );
    const active: boolean = this.ngxDateTimeRangePickerService.isDateActive(currentDate, startDate, endDate, side);
    const today: boolean = this.ngxDateTimeRangePickerService.isDateToday(currentDate, this.config);

    // Active
    if (currentDate === startDate && side === "left") {
      this.activeStartDate = date;
    } else if (currentDate === endDate && side === "right") {
      this.activeEndDate = date;
    }

    return {
      available,
      inRange,
      active,
      today
    };
  }

  public onClickPrevious(month, side) {
    const startDate = moment(month, "MMM YYYY")
      .subtract(1, "month")
      .startOf("month")
      .format(DEFAULT_DATE_FROMAT);
    this.dates[side] = this.generateCalendar(startDate, side);
  }

  public onClickNext(month, side) {
    const endDate = moment(month, "MMM YYYY")
      .add(1, "month")
      .endOf("month")
      .format(DEFAULT_DATE_FROMAT);
    this.dates[side] = this.generateCalendar(endDate, side);
  }

  public onCellClick(item, itemCell, side) {
    const date = item.date ? moment(item.date, DEFAULT_DATE_FROMAT).valueOf() : item.date;
    const startDate = this.config.startDate
      ? moment(this.config.startDate, DEFAULT_DATE_FROMAT).valueOf()
      : this.config.startDate;
    const endDate = this.config.endDate
      ? moment(this.config.endDate, DEFAULT_DATE_FROMAT).valueOf()
      : this.config.endDate;
    const minDate = this.config.minDate
      ? moment(this.config.minDate, DEFAULT_DATE_FROMAT).valueOf()
      : this.config.minDate;
    const maxDate = this.config.maxDate
      ? moment(this.config.maxDate, DEFAULT_DATE_FROMAT).valueOf()
      : this.config.maxDate;

    if (!item.available) {
      if (date < minDate || date > maxDate) {
        return;
      }
      this.dates[side] = this.generateCalendar(item.date, side);
    }

    if (endDate || date < startDate) {
      this.config.endDate = null;
      this.config.startDate = item.date;
      this.activeItem.left = item;
    } else if (!endDate && date < startDate) {
      this.config.endDate = _.cloneDeep(this.config.startDate);
      this.activeItem.right = item;
    } else {
      this.config.endDate = item.date;
      this.activeItem.right = item;
    }

    if (this.config.singleDatePicker) {
      this.config.endDate = _.cloneDeep(this.config.startDate);
      this.activeItem.right = this.activeItem.left = item;
    }

    this.doApply();
  }

  public onCellMouseEnter(item, itemCell): void {
    if (!item.available) {
      return;
    }

    const date = item.date ? moment(item.date, DEFAULT_DATE_FROMAT).valueOf() : item.date;
    const startDate = this.config.startDate
      ? moment(this.config.startDate, DEFAULT_DATE_FROMAT).valueOf()
      : this.config.startDate;
    const endDate = this.config.endDate
      ? moment(this.config.endDate, DEFAULT_DATE_FROMAT).valueOf()
      : this.config.endDate;
    let hoverItemFirstDate = itemCell ? itemCell.getAttribute("firstDay") : "";
    let hoverItemLastDate = itemCell ? itemCell.getAttribute("lastDay") : "";
    const hoverItemText = itemCell ? itemCell.innerText : "";
    hoverItemFirstDate = moment(hoverItemFirstDate, DEFAULT_DATE_FROMAT).format(this.config.viewDateFormat);
    hoverItemLastDate = moment(hoverItemLastDate, DEFAULT_DATE_FROMAT).format(this.config.viewDateFormat);

    let activeItemInputFieldText = `${hoverItemText} (${hoverItemFirstDate} - ${hoverItemLastDate})`;

    if (this.config.type === "daily") {
      activeItemInputFieldText = `${hoverItemLastDate}`;
    }

    if (!endDate) {
      _.forOwn(this.dates, (sideDates, side) => {
        _.forEach(sideDates.itemRows, (rows) => {
          _.forEach(rows.items, (rowItem) => {
            if (rowItem.available) {
              const hoverItemDate = rowItem.date ? moment(rowItem.date, DEFAULT_DATE_FROMAT).valueOf() : rowItem.date;
              if ((hoverItemDate > startDate && hoverItemDate < date) || date === hoverItemDate) {
                rowItem.inRange = true;
                this.dateTitleText.right = activeItemInputFieldText;
              }
            }
          });
        });
      });
    } else {
      if (this.config.singleDatePicker) {
        this.dateTitleText.right = activeItemInputFieldText;
      } else {
        this.dateTitleText.left = activeItemInputFieldText;
      }
    }
  }

  public onCellMouseLeave(): void {
    if (!this.config.endDate) {
      _.forOwn(this.dates, (sideDates, side) => {
        _.forEach(sideDates.itemRows, (rows) => {
          _.forEach(rows.items, (item) => {
            item.inRange = false;
          });
        });
      });
    } else {
      this.updateActiveItemInputField();
    }
  }

  public onRangeClick(rangeLabel, dateRangeModel: any) {
    this.activeRange = rangeLabel;
    if (rangeLabel === "Custom Range") {
      this.customRange = !this.customRange;
      if (this.customRange) {
        this.updateCalendar();
      } else {
        this.sides.length = 0;
        this.dates = {};
        if (this.config.timePicker) {
          this.times = {};
        }
      }
    } else {
      this.config.startDate = dateRangeModel.startDate;
      this.config.endDate = dateRangeModel.endDate;
      if (this.config.timePicker) {
        // _.forEach(this.sides, (side) => {
        //   this.times[side] = this.generateTimePicker(null, side);
        // })
        if (this.config.timePicker) {
          this.times = {};
        }
        this.updateCalendar();
      }
      this.setActiveItemOnRangeClick();
    }
  }

  public updateCalendar() {
    this.sides.length = 0;
    this.dates = {};
    // takes 223 milliSeconds
    // Order is important left - right
    if (!this.config.singleDatePicker) {
      this.sides.push("left");
      this.dates.left = this.generateCalendar(this.config.startDate, "left");
      if (this.config.timePicker) {
        this.times.left = this.generateTimePicker(this.config.startTime, "left");
      }
    }
    this.sides.push("right");
    this.dates.right = this.generateCalendar(this.config.endDate, "right");
    if (this.config.timePicker) {
      this.times.right = this.generateTimePicker(this.config.endTime, "right");
    }
  }

  public onCalendarLabelChange(label, side, type) {
    this.showCalendar = true;
    if (type === "month") {
      this.selectedMonth[side] = label;
    } else if (type === "year") {
      this.selectedYear[side] = label;
    }

    if (this.config.type !== "daily") {
      this.selectedMonth[side] = "Jun";
    }

    if (this.config.type !== "yearly") {
      const selectedMonth = `${this.selectedMonth[side]} ${this.selectedYear[side]}`;
      const date = moment(selectedMonth, "MMM YYYY")
        .startOf("month")
        .format(DEFAULT_DATE_FROMAT);
      this.dates[side] = this.generateCalendar(date, side);
    } else {
      if (this.selectedYear.left <= this.selectedYear.right && side === "right") {
        this.config.startDate = moment(this.selectedYear.left, "YYYY")
          .startOf("year")
          .format(DEFAULT_DATE_FROMAT);
        this.config.endDate = moment(this.selectedYear.right, "YYYY")
          .endOf("year")
          .format(DEFAULT_DATE_FROMAT);

        this.doApply();
      }
      const config = {
        startDate: moment(this.selectedYear.left, "YYYY")
          .startOf("year")
          .format(DEFAULT_DATE_FROMAT),
        type: "yearly"
      };
      const startDate = this.ngxDateTimeRangePickerService.formatStartDate(config, this.config.viewDateFormat);
      const endDate = this.config.endDate
        ? moment(this.config.endDate, DEFAULT_DATE_FROMAT).format(this.config.viewDateFormat)
        : "";
      this.dateTitleText.left = `${startDate}`;
      this.dateTitleText.right = `${endDate}`;
    }
  }

  public onTimeLabelChange(timeItem, side, item) {
    let time = null;
    if (side === "left") {
      time = this.config.startTime.split(":");
      if (timeItem === "hour") {
        this.config.startTime = `${item}:${time[1]}`;
      } else {
        this.config.startTime = `${time[0]}:${item}`;
      }

      const startDateEpoch = moment(this.config.startDate, DEFAULT_DATE_FROMAT).valueOf();
      const endDateEpoch = moment(this.config.endDate, DEFAULT_DATE_FROMAT).valueOf();
      if (startDateEpoch === endDateEpoch) {
        this.times.right = this.generateTimePicker(this.config.startTime, "right");
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
      this.selectedHour[side] = this.ngxDateTimeRangePickerService.convertToViewTimeItem(item);
    } else {
      this.selectedMinute[side] = this.ngxDateTimeRangePickerService.convertToViewTimeItem(item);
    }
  }

  public onTimeApply() {
    this.dateRangeSelected();
    this.updateInputField();
  }

  // Helpers
  public init() {
    if (this.isUserModelChange) {
      this.isValidFilter = false;
      this.config = Object.assign(
        this.ngxDateTimeRangePickerService.getDefaultOptions(),
        this.ngxDateTimeRangePickerService.getDefaultSettings()
      );
      this.initialize();
      this.parseOptions();
      this.updateInputField();
    }
  }

  public initialize() {
    this.sides.length = 0;
    this.dates = {};
    this.calendarAvailable = {
      left: false as boolean,
      right: false as boolean
    };
    this.showCalendar = false;
    this.selectedDateText = "";
    this.dateTitleText = {
      left: "" as string,
      right: "" as string
    };
    this.weekDayOptions = ["su", "mo", "tu", "we", "th", "fr", "sa"];
    this.selectedMonth = {
      left: "" as string,
      right: "" as string
    };
    this.selectedYear = {
      left: "" as string,
      right: "" as string
    };
    // this.activeItem = {
    //   'left': <string> '',
    //   'right': <string> ''
    // };
    this.times = {
      left: "" as string,
      right: "" as string
    };
    this.activeStartDate = null;
    this.activeEndDate = null;
    this.frequencyColumnHeader = null;
    this.customRange = false;
    this.activeRange = "";
  }

  public parseOptions(): void {
    if (this.options !== undefined) {
      Object.keys(this.options).forEach((k) => {
        this.config[k] = this.options[k];
      });
    }
    if (this.settings !== undefined) {
      Object.keys(this.settings).forEach((k) => {
        this.config[k] = this.settings[k];
      });
    }

    this.config.selectedModel = this.config.selectedModel ? this.config.selectedModel : this.config.type;

    if (this.config.type === "weekly" || this.config.type === "yearly") {
      this.config.showRowNumber = false;
    }
    if (this.config.singleDatePicker) {
      this.config.startDate = _.cloneDeep(this.config.endDate);
    }

    this.selectTimeZone();
    this.parseOptionsToDefaultDateFormat();
    this.processDateRangeModel();
    this.handleDateArray();
    this.sanitizeDates();
    this.processRanges();
    this.doDateRangeModelChange();
    // this.config.selectedModel = undefined;
  }

  public selectTimeZone() {
    if (this.config.timezoneSupport) {
      if (!this.config.defaultTimezone) {
        this.config.defaultTimezone = USA_TZ_CODE;
      }
      this.selectedTimezone = this.config.defaultTimezone;
    }

    if (this.config.useLocalTimezone) {
      this.selectedTimezone = this.localTimezone;
    }
    this.onTimezoneChange(this.selectedTimezone);
  }

  public parseOptionsToDefaultDateFormat() {
    this.config.minDate = this.config.minDate
      ? this.ngxDateTimeRangePickerService.formatDateToDefaultFormat(this.config.minDate, this.config.inputDateFormat)
      : DEFAULT_MIN_DATE;
    this.config.maxDate = this.config.maxDate
      ? this.ngxDateTimeRangePickerService.formatDateToDefaultFormat(this.config.maxDate, this.config.inputDateFormat)
      : DEFAULT_MAX_DATE;
    this.config.startDate = this.config.startDate
      ? this.ngxDateTimeRangePickerService.formatDateToDefaultFormat(this.config.startDate, this.config.inputDateFormat)
      : DEFAULT_START_DATE;
    this.config.endDate = this.config.endDate
      ? this.ngxDateTimeRangePickerService.formatDateToDefaultFormat(this.config.endDate, this.config.inputDateFormat)
      : DEFAULT_END_DATE;

    if (this.config.timePicker) {
      this.config.minTime = this.config.minTime
        ? this.ngxDateTimeRangePickerService.formatTimeToDefaultFormat(this.config.minTime)
        : DEFAULT_START_TIME;
      this.config.maxTime = this.config.maxTime
        ? this.ngxDateTimeRangePickerService.formatTimeToDefaultFormat(this.config.maxTime)
        : DEFAULT_END_TIME;
      this.config.startTime = this.config.startTime
        ? this.ngxDateTimeRangePickerService.formatTimeToDefaultFormat(this.config.startTime)
        : DEFAULT_START_TIME;
      this.config.endTime = this.config.endTime
        ? this.ngxDateTimeRangePickerService.formatTimeToDefaultFormat(this.config.endTime)
        : DEFAULT_END_TIME;
    }
  }

  /**
   * @desc sets startDate, endDate
   */
  public processDateRangeModel() {
    if (undefined !== this.dateRangeModel && !_.isEmpty(this.dateRangeModel)) {
      if (this.dateRangeModel[this.config.selectedModel]) {
        const dateRangeMinDate = this.dateRangeModel[this.config.selectedModel].minDate;
        const dateRangeMaxDate = this.dateRangeModel[this.config.selectedModel].maxDate;
        const dateRangeStartDate = this.dateRangeModel[this.config.selectedModel].startDate;
        const dateRangeEndDate = this.dateRangeModel[this.config.selectedModel].endDate;
        const dateRangeDateArray = this.dateRangeModel[this.config.selectedModel].dateArray;

        this.config.dateArray = dateRangeDateArray ? dateRangeDateArray : this.config.dateArray;
        this.config.minDate = dateRangeMinDate
          ? this.ngxDateTimeRangePickerService.formatDateToDefaultFormat(dateRangeMinDate, this.config.inputDateFormat)
          : this.config.minDate;
        this.config.maxDate = dateRangeMaxDate
          ? this.ngxDateTimeRangePickerService.formatDateToDefaultFormat(dateRangeMaxDate, this.config.inputDateFormat)
          : this.config.maxDate;
        this.config.startDate = dateRangeStartDate
          ? this.ngxDateTimeRangePickerService.formatDateToDefaultFormat(
              dateRangeStartDate,
              this.config.inputDateFormat
            )
          : this.config.startDate;
        this.config.endDate = dateRangeEndDate
          ? this.ngxDateTimeRangePickerService.formatDateToDefaultFormat(dateRangeEndDate, this.config.inputDateFormat)
          : this.config.endDate;

        if (this.config.timePicker) {
          const dateRangeMinTime = this.dateRangeModel[this.config.selectedModel].minTime;
          const dateRangeMaxTime = this.dateRangeModel[this.config.selectedModel].maxTime;
          const dateRangeStartTime = this.dateRangeModel[this.config.selectedModel].startTime;
          const dateRangeEndTime = this.dateRangeModel[this.config.selectedModel].endTime;
          this.config.minTime = this.config.minTime
            ? this.ngxDateTimeRangePickerService.formatTimeToDefaultFormat(dateRangeMinTime)
            : this.config.minTime;
          this.config.maxTime = this.config.maxTime
            ? this.ngxDateTimeRangePickerService.formatTimeToDefaultFormat(dateRangeMaxTime)
            : this.config.maxTime;
          this.config.startTime = this.config.startTime
            ? this.ngxDateTimeRangePickerService.formatTimeToDefaultFormat(dateRangeStartTime)
            : this.config.startTime;
          this.config.endTime = this.config.endTime
            ? this.ngxDateTimeRangePickerService.formatTimeToDefaultFormat(dateRangeEndTime)
            : this.config.endTime;
        }
      }
    }
  }

  /**
   * @desc sets minDate, maxDate, startDate, endDate if not passed
   */
  public handleDateArray() {
    if (this.config.dateArray && this.config.dateArray.length > 0) {
      this.config.dateArray = this.ngxDateTimeRangePickerService.getSanitizedDateArray(this.config);

      // sort in asc order
      this.config.dateArray = _.sortBy(this.config.dateArray, (date) => {
        let format = null;
        if (isNaN(Number(date))) {
          if (this.config.inputDateFormat) {
            format = this.config.inputDateFormat;
          } else {
            format = moment(date)._f;
          }
        }
        const value = moment(date, format).valueOf();
        if (!isNaN(value)) {
          return value;
        } else {
          console.warn(
            "ERR_NGX_DATETIME_RANGE_PICKER: dateArray values are in unknown format. Pass the format or pass the dates in known format"
          );
        }
      });

      const minDate = this.config.dateArray[0];
      const maxDate = this.config.dateArray[this.config.dateArray.length - 1];

      if (
        moment(this.config.minDate, DEFAULT_DATE_FROMAT).valueOf() ===
        moment(DEFAULT_MIN_DATE, DEFAULT_DATE_FROMAT).valueOf()
      ) {
        this.config.minDate = this.ngxDateTimeRangePickerService.formatDateToDefaultFormat(
          minDate,
          this.config.inputDateFormat
        );
      }
      if (
        moment(this.config.maxDate, DEFAULT_DATE_FROMAT).valueOf() ===
        moment(DEFAULT_MAX_DATE, DEFAULT_DATE_FROMAT).valueOf()
      ) {
        this.config.maxDate = this.ngxDateTimeRangePickerService.formatDateToDefaultFormat(
          maxDate,
          this.config.inputDateFormat
        );
      }
      if (
        moment(this.config.startDate, DEFAULT_DATE_FROMAT).valueOf() ===
        moment(DEFAULT_START_DATE, DEFAULT_DATE_FROMAT).valueOf()
      ) {
        this.config.startDate = this.ngxDateTimeRangePickerService.formatDateToDefaultFormat(
          minDate,
          this.config.inputDateFormat
        );
      }
      if (
        moment(this.config.endDate, DEFAULT_DATE_FROMAT).valueOf() ===
        moment(DEFAULT_END_DATE, DEFAULT_DATE_FROMAT).valueOf()
      ) {
        this.config.endDate = this.ngxDateTimeRangePickerService.formatDateToDefaultFormat(
          maxDate,
          this.config.inputDateFormat
        );
      }
    }
  }

  public sanitizeDates() {
    const subtractWeekCount = 0;
    if (this.config.type === "monthly") {
      this.config.minDate = moment(this.config.minDate, DEFAULT_DATE_FROMAT)
        .endOf("month")
        .format(DEFAULT_DATE_FROMAT);
      this.config.maxDate = moment(this.config.maxDate, DEFAULT_DATE_FROMAT)
        .subtract(subtractWeekCount, "week")
        .endOf("month")
        .format(DEFAULT_DATE_FROMAT);
      this.config.startDate = moment(this.config.startDate, DEFAULT_DATE_FROMAT)
        .endOf("month")
        .format(DEFAULT_DATE_FROMAT);
      this.config.endDate = moment(this.config.endDate, DEFAULT_DATE_FROMAT)
        .subtract(subtractWeekCount, "week")
        .endOf("month")
        .format(DEFAULT_DATE_FROMAT);
    } else if (this.config.type === "quarterly") {
      this.config.minDate = moment(this.config.minDate, DEFAULT_DATE_FROMAT)
        .endOf("quarter")
        .format(DEFAULT_DATE_FROMAT);
      this.config.maxDate = moment(this.config.maxDate, DEFAULT_DATE_FROMAT)
        .subtract(subtractWeekCount, "week")
        .endOf("quarter")
        .format(DEFAULT_DATE_FROMAT);
      this.config.startDate = moment(this.config.startDate, DEFAULT_DATE_FROMAT)
        .endOf("quarter")
        .format(DEFAULT_DATE_FROMAT);
      this.config.endDate = moment(this.config.endDate, DEFAULT_DATE_FROMAT)
        .subtract(subtractWeekCount, "week")
        .endOf("quarter")
        .format(DEFAULT_DATE_FROMAT);
    }

    if (this.config.type === "weekly") {
      this.config.minDate = moment(this.config.minDate, DEFAULT_DATE_FROMAT)
        .endOf("week")
        .format(DEFAULT_DATE_FROMAT);
      this.config.maxDate = moment(this.config.maxDate, DEFAULT_DATE_FROMAT)
        .endOf("week")
        .format(DEFAULT_DATE_FROMAT);
      this.config.startDate = moment(this.config.startDate, DEFAULT_DATE_FROMAT)
        .endOf("week")
        .format(DEFAULT_DATE_FROMAT);
      this.config.endDate = moment(this.config.endDate, DEFAULT_DATE_FROMAT)
        .endOf("week")
        .format(DEFAULT_DATE_FROMAT);

      if (this.config.type === "yearly") {
        const minDate = moment(this.config.minDate, DEFAULT_DATE_FROMAT).format(DEFAULT_DATE_FROMAT);
        const startDate = moment(this.config.startDate, DEFAULT_DATE_FROMAT).format(DEFAULT_DATE_FROMAT);
        this.config.minDate = minDate;
        this.config.startDate = startDate;
      }
    }

    if (
      moment(this.config.startDate, DEFAULT_DATE_FROMAT).valueOf() <
      moment(this.config.minDate, DEFAULT_DATE_FROMAT).valueOf()
    ) {
      this.config.minDate = this.config.startDate;
    }

    if (
      moment(this.config.endDate, DEFAULT_DATE_FROMAT).valueOf() >
      moment(this.config.maxDate, DEFAULT_DATE_FROMAT).valueOf()
    ) {
      this.config.maxDate = this.config.endDate;
    }
  }

  public processRanges() {
    if (this.config.showRanges && !this.config.singleDatePicker) {
      if (_.isEmpty(this.config.availableRanges)) {
        this.config.availableRanges = this.ngxDateTimeRangePickerService.createDefaultRanges(this.config);
      }
      this.selectActiveRange();
    } else {
      this.activeRange = "Custom Range";
      this.onRangeClick(this.activeRange, null);
    }
  }

  public selectActiveRange() {
    _.forOwn(this.config.availableRanges, (rangeModel, range) => {
      if (this.config.startDate === rangeModel.startDate && this.config.endDate === rangeModel.endDate) {
        this.activeRange = range;
        this.updateActiveItem();
      }
    });

    if (!this.activeRange) {
      this.activeRange = "Custom Range";
      this.onRangeClick(this.activeRange, null);
    }
  }

  public generateCalendar(date, side) {
    this.selectedMonth[side] = moment(date, DEFAULT_DATE_FROMAT).format("MMM");
    this.selectedYear[side] = this.ngxDateTimeRangePickerService.getSelectedYear(this.config, date, side);
    const calendarLabel = `${this.selectedMonth[side]} ${this.selectedYear[side]}`;

    const dates = {
      label: calendarLabel as string,
      months: this.ngxDateTimeRangePickerService.getMonthsAvailable(
        this.config.minDate,
        this.config.maxDate,
        this.selectedYear[side]
      ),
      years: this.ngxDateTimeRangePickerService.getYearsAvailable(this.config),
      itemRows: [] as Object[]
    };

    this.weekDayOptions = [""];

    if (this.config.type !== "yearly") {
      // moment returns wrong week number
      const monthStartWeekNumber: number = moment(date, DEFAULT_DATE_FROMAT)
        .year(this.selectedYear[side])
        .startOf("month")
        .week(); // previousMonthLastWeek
      const yearStartDate = moment(this.selectedYear[side], "YYYY")
        .startOf("year")
        .format(DEFAULT_DATE_FROMAT);
      let numberOfRows = 1;
      let rowNumber: any = 0;
      let columns: any = 0;
      let currentItemDate = "";
      let datecharacteristics: any = {};
      let rowItemText = "";
      let rowVariables: any = {};
      let rowItemVariables: any = {};
      let firstDay = "";
      let lastDay = "";

      if (this.config.type === "daily") {
        numberOfRows = this.ngxDateTimeRangePickerService.getNumberOfWeeks(date);
        this.weekDayOptions = ["su", "mo", "tu", "we", "th", "fr", "sa"];
      } else if (this.config.type === "weekly") {
        numberOfRows = 8;
        this.weekDayOptions = ["", "", "", "", "", "", ""];
      } else if (this.config.type === "monthly") {
        numberOfRows = 4;
        this.weekDayOptions = ["", "", ""];
      } else if (this.config.type === "quarterly") {
        numberOfRows = 4;
        this.weekDayOptions = [""];
      }

      for (let dateRows = 0; dateRows < numberOfRows; dateRows++) {
        const dateRowObj = {
          rowNumber: null as string,
          rowNumberText: null as string,
          items: [] as Object[]
        };

        const rowOptions: any = {};
        rowOptions.type = this.config.type;
        rowOptions.monthStartWeekNumber = monthStartWeekNumber;
        rowOptions.dateRows = dateRows;
        rowOptions.year = this.selectedYear[side];
        rowVariables = this.ngxDateTimeRangePickerService.getCalendarRowVariables(rowOptions);

        rowNumber = rowVariables.rowNumber;
        columns = rowVariables.columns;

        dateRowObj.rowNumber = rowNumber;
        dateRowObj.rowNumberText = this.ngxDateTimeRangePickerService.getCalendarRowNumberText(
          this.config.type,
          rowNumber
        );

        for (let rowItem = 0; rowItem <= columns; rowItem++) {
          const rowItemOptions: any = {};
          rowItemOptions.type = this.config.type;
          rowItemOptions.monthStartWeekNumber = monthStartWeekNumber;
          rowItemOptions.dateRows = dateRows;
          rowItemOptions.rowNumber = rowNumber;
          rowItemOptions.yearStartDate = yearStartDate;
          rowItemOptions.year = this.selectedYear[side];
          rowItemOptions.rowItem = rowItem;
          rowItemOptions.columns = columns;
          rowItemOptions.year = this.selectedYear[side];
          rowItemVariables = this.ngxDateTimeRangePickerService.getCalendarRowItemVariables(rowItemOptions);

          currentItemDate = rowItemVariables.currentItemDate;
          rowItemText = rowItemVariables.rowItemText;
          firstDay = rowItemVariables.firstDay;
          lastDay = rowItemVariables.lastDay;
          rowOptions.itemCount = rowItemVariables.itemCount;
          datecharacteristics = this.getDatecharacteristics(currentItemDate, calendarLabel, side);

          const itemObj = {
            date: currentItemDate,
            rowItemText,
            firstDay,
            lastDay,
            available: datecharacteristics.available,
            inRange: datecharacteristics.inRange,
            active: datecharacteristics.active,
            today: datecharacteristics.today
          };
          if (this.ngxDateTimeRangePickerService.isRowIemValid(rowOptions)) {
            if (datecharacteristics.active) {
              this.activeItem[side] = itemObj;
            }
            dateRowObj.items.push(itemObj);
          }
        }
        dates.itemRows.push(dateRowObj);
      }
    }

    this.calendarAvailable[side] = true;
    return dates;
  }

  public generateTimePicker(time, side) {
    const timeObject = {
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
    const startDateEpoch = moment(this.config.startDate, DEFAULT_DATE_FROMAT).valueOf();
    const endDateEpoch = moment(this.config.endDate, DEFAULT_DATE_FROMAT).valueOf();

    if (time) {
      selectedHour = moment(time, DEFAULT_TIME_FORMAT).format("H");
      selectedMinute = moment(time, DEFAULT_TIME_FORMAT).format("m");

      if (side === "right" && startDateEpoch === endDateEpoch) {
        startHour = selectedHour;
        startMinute = selectedMinute;
      }
    }

    // let dateOptions = {
    //   timeZone: TZ_NAMES[this.selectedTimezone],
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
      const stringified_h = this.ngxDateTimeRangePickerService.convertToViewTimeItem(h);
      timeObject.hour.push(stringified_h);
    }
    for (let m = startMinute; m <= 59; m++) {
      const stringified_m = this.ngxDateTimeRangePickerService.convertToViewTimeItem(m);
      timeObject.minute.push(stringified_m);
    }

    this.selectedHour[side] = this.ngxDateTimeRangePickerService.convertToViewTimeItem(selectedHour);
    this.selectedMinute[side] = this.ngxDateTimeRangePickerService.convertToViewTimeItem(selectedMinute);

    if (side === "left") {
      this.config.startTime = `${this.selectedHour[side]}:${this.selectedMinute[side]}`;
    } else if (side === "right") {
      this.config.endTime = `${this.selectedHour[side]}:${this.selectedMinute[side]}`;
    }

    return timeObject;
  }

  public capitalize(day) {
    return _.capitalize(day);
  }

  public updateInputField() {
    const startDate = this.ngxDateTimeRangePickerService.formatStartDate(this.config, this.config.viewDateFormat);
    const endDate = this.config.endDate
      ? moment(this.config.endDate, DEFAULT_DATE_FROMAT).format(this.config.viewDateFormat)
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

      this.selectedDateText = dateText;
    } else {
      let startDateText = startDate;
      let endDataText = endDate;

      if (this.config.timePicker) {
        startDateText = `${startDate} ${this.config.startTime}`;
        endDataText = `${endDate} ${this.config.endTime}`;
      }

      this.selectedDateText = `${startDateText} - ${endDataText}`;
    }

    if (this.canBeEmpty || this.selectedDateText.indexOf("nvalid") < 0) {
      this.isValidFilter = true;
    }

    if (this.config.type === "yearly") {
      this.dateTitleText.left = `${startDate}`;
      this.dateTitleText.right = `${endDate}`;
    } else {
      this.updateActiveItemInputField();
    }
  }

  public updateActiveItemInputField() {
    let itemFirstDate = "";
    let itemLastDate = "";
    let itemText = "";
    if (!this.config.singleDatePicker) {
      itemFirstDate = this.activeItem.left.firstDay;
      itemLastDate = this.activeItem.left.lastDay;
      itemText = this.activeItem.left.rowItemText;
      itemFirstDate = moment(itemFirstDate, DEFAULT_DATE_FROMAT).format(this.config.viewDateFormat);
      itemLastDate = moment(itemLastDate, DEFAULT_DATE_FROMAT).format(this.config.viewDateFormat);
      if (this.config.type !== "daily") {
        this.dateTitleText.left = `${itemText} (${itemFirstDate} - ${itemLastDate})`;
      } else {
        this.dateTitleText.left = `${itemFirstDate}`;
      }
    }

    itemFirstDate = this.activeItem.right.firstDay;
    itemLastDate = this.activeItem.right.lastDay;
    itemText = this.activeItem.right.rowItemText;
    itemFirstDate = moment(itemFirstDate, DEFAULT_DATE_FROMAT).format(this.config.viewDateFormat);
    itemLastDate = moment(itemLastDate, DEFAULT_DATE_FROMAT).format(this.config.viewDateFormat);
    if (this.config.type !== "daily") {
      this.dateTitleText.right = `${itemText} (${itemFirstDate} - ${itemLastDate})`;
    } else {
      this.dateTitleText.right = `${itemFirstDate}`;
    }
  }

  public dateRangeSelected() {
    const dateRangeModel: DateRangeModelItem = this.getDateRangeModelItem();
    this.showCalendar = false;
    this.filterInputBox.nativeElement.classList.remove("empty-filter");
    this.doDateRangeModelChange();
    this.dateRangeChanged.emit(dateRangeModel);
  }

  public getDateRangeModel(format?) {
    let dRModel = {};
    if (undefined !== this.dateRangeModel && !_.isEmpty(this.dateRangeModel)) {
      dRModel = _.cloneDeep(this.dateRangeModel);
    }
    dRModel[this.config.selectedModel] = this.getDateRangeModelItem(format);
    return dRModel;
  }

  public getDateRangeModelItem(format?): DateRangeModelItem {
    let dateRangeModelItem: DateRangeModelItem;
    let outputDateFormat = this.config.outputDateFormat;
    if (undefined !== format) {
      outputDateFormat = format;
    }
    let startDate = this.ngxDateTimeRangePickerService.formatStartDate(this.config, outputDateFormat);
    let endDate = moment(this.config.endDate, DEFAULT_DATE_FROMAT).format(outputDateFormat);

    if (this.config.selectedTimezone) {
      startDate = this.ngxDateTimeRangePickerService.formatToZoneDate(
        this.config.selectedTimezone,
        outputDateFormat,
        startDate
      );
      endDate = this.ngxDateTimeRangePickerService.formatToZoneDate(
        this.config.selectedTimezone,
        outputDateFormat,
        endDate
      );
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

  public doApply() {
    const startDate = this.config.startDate;
    const endDate = this.config.endDate;

    this.activeStartDate = startDate as string;
    this.activeEndDate = endDate as string;

    if (this.config.startDate && this.config.endDate) {
      if (!this.config.timePicker) {
        this.dateRangeSelected();
      } else {
        if (this.config.timePicker) {
          _.forEach(this.sides, (side) => {
            this.times[side] = this.generateTimePicker(null, side);
          });
        }
      }
    }

    let outputStartDate = startDate ? moment(startDate, DEFAULT_DATE_FROMAT).valueOf() : null;
    let outputEndDate = endDate ? moment(endDate, DEFAULT_DATE_FROMAT).valueOf() : null;
    if (this.config.outputDateFormat) {
      outputStartDate = startDate ? moment(startDate, DEFAULT_DATE_FROMAT).format(this.config.outputDateFormat) : null;
      outputEndDate = endDate ? moment(endDate, DEFAULT_DATE_FROMAT).format(this.config.outputDateFormat) : null;
    }
    this.selectedDate.emit({
      startDate: outputStartDate,
      endDate: outputEndDate
    });

    this.updateInputField();
  }

  public doDateRangeModelChange() {
    const dateRangeModel = this.getDateRangeModel(this.config.inputDateFormat);
    this.dateRangeModelChange.emit(dateRangeModel);
  }

  public onTimezoneChange(tz) {
    this.selectedTimezone = tz;
    this.todayTime = this.ngxDateTimeRangePickerService.getZoneToday(this.selectedTimezone, this.config.viewDateFormat);

    this.parseOptionsToDefaultDateFormat();
    _.forEach(this.sides, (side) => {
      let date = this.config.startDate;
      let time = this.config.startTime;
      if (side === "right") {
        date = this.config.endDate;
        time = this.config.endTime;
      }
      this.dates[side] = this.generateCalendar(date, side);
      if (this.config.timePicker) {
        this.times[side] = this.generateTimePicker(time, side);
      }
    });
  }

  public getSelectedTimeItemText(item, side) {
    if (item === "hour") {
      return this.selectedHour[side];
    } else if (item === "minute") {
      return this.selectedMinute[side];
    }
  }

  public setActiveItemOnRangeClick() {
    this.updateActiveItem();
    this.doApply();
  }

  public updateActiveItem() {
    const startDate: any = this.ngxDateTimeRangePickerService.getFirstLastDay(this.config.startDate, this.config.type);
    const endDate: any = this.ngxDateTimeRangePickerService.getFirstLastDay(this.config.endDate, this.config.type);

    if (this.config.type === "weekly") {
      startDate.rowItemText = `W${this.ngxDateTimeRangePickerService.getWeekNumber(startDate.firstDay)}`;
      endDate.rowItemText = `W${this.ngxDateTimeRangePickerService.getWeekNumber(endDate.firstDay)}`;
    } else if (this.config.type === "monthly") {
      startDate.rowItemText = `${moment(startDate.firstDay, DEFAULT_DATE_FROMAT).format("MMM")}`;
      endDate.rowItemText = `${moment(endDate.firstDay, DEFAULT_DATE_FROMAT).format("MMM")}`;
    } else if (this.config.type === "quarterly") {
      startDate.rowItemText = `Quarter ${moment(startDate.firstDay, DEFAULT_DATE_FROMAT).quarter()}`;
      endDate.rowItemText = `Quarter ${moment(endDate.firstDay, DEFAULT_DATE_FROMAT).quarter()}`;
    }

    this.activeItem.left = startDate;
    this.activeItem.right = endDate;

    // this.doApply();
  }
}
