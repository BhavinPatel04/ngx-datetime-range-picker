import { Injectable } from "@angular/core";
import { NgxDatetimeRangePickerConstants as Constants } from "./ngx-datetime-range-picker.constants";
import { getNotAvailableText, cloneDeep, isNil } from "./ngx-datetime-range-picker.utils";
import {
  AriaLabelsOptions,
  Options,
  Settings,
  CalendarSides,
  State,
  RowItemVariables,
  RowItemOptions,
  DateSide,
  ActiveItemSide,
  DateCharacteristics,
  Config,
  RowOptions,
  RowVariables
} from "./interfaces/index";
import { Moment } from "moment";

declare var require: any;
const moment = require("moment");

const DEFAULT_TYPE = Constants.DEFAULT.TYPE;
const DEFAULT_INPUT_CLASS = Constants.DEFAULT.INPUT_CLASS;
const DEFAULT_DATE_FORMAT = Constants.DEFAULT.DATE_FORMAT;
const DEFAULT_TIME_FORMAT = Constants.DEFAULT.TIME_FORMAT;
const DEFAULT_START_DATE = Constants.DEFAULT.START_DATE;
const DEFAULT_END_DATE = Constants.DEFAULT.END_DATE;
const DEFAULT_MIN_DATE = Constants.DEFAULT.MIN_DATE;
const DEFAULT_MAX_DATE = Constants.DEFAULT.MAX_DATE;
const DEFAULT_START_TIME = Constants.DEFAULT.START_TIME;
const DEFAULT_END_TIME = Constants.DEFAULT.END_TIME;
const DEFAULT_MODEL_KEYS = Constants.DEFAULT.MODEL_KEYS;
const MONTHS_AVAILABLE = Constants.CONSTANT.MONTHS_AVAILABLE;
const DEFAULT_TIMEZONE_CODE = Constants.DEFAULT.TZ_CODE;
const EU_TZ_CODE = Constants.CONSTANT.EU_TZ_CODE;
const TZ_NAMES = Constants.CONSTANT.TZ_NAMES;
const TZ_CODES = Constants.CONSTANT.TZ_CODES;
const WEEKDAYS_AVAILABLE = Constants.CONSTANT.WEEKDAYS_AVAILABLE;
const TIMES_AVAILABLE = Constants.CONSTANT.TIMES_AVAILABLE;
const DEFAULT_RANGES = Constants.DEFAULT.RANGES;
const MOMENT_CONVERSION_MAP = Constants.CONSTANT.MOMENT_CONVERSION_MAP;

@Injectable({
  providedIn: "root"
})
export class NgxDatetimeRangePickerService {
  getDefaultAriaLabelOptions(): AriaLabelsOptions {
    return {
      inputField: "Date Range Input Field"
    };
  }

  getDefaultOptions(): Options {
    return {
      dateArray: [],
      startDate: DEFAULT_START_DATE,
      endDate: DEFAULT_END_DATE,
      minDate: DEFAULT_MIN_DATE,
      maxDate: DEFAULT_MAX_DATE,
      startTime: DEFAULT_START_TIME,
      endTime: DEFAULT_END_TIME
    };
  }

  getDefaultSettings(): Settings {
    return {
      type: DEFAULT_TYPE,
      modelKeys: DEFAULT_MODEL_KEYS,
      showTimezoneSelect: false,
      useLocalTimezone: false,
      timePicker: false,
      inputClass: DEFAULT_INPUT_CLASS,
      inputDateFormat: null,
      viewDateFormat: DEFAULT_DATE_FORMAT,
      outputDateFormat: DEFAULT_DATE_FORMAT,
      singleDatePicker: false,
      componentDisabled: false,
      placeholder: "Select Date",
      showRowNumber: false,
      availableRanges: {},
      showRanges: true,
      disableWeekends: false,
      disableWeekdays: false,
      retailCalendar: false,
      displayBeginDate: false,
      displayEndDate: false,
      ariaLabels: this.getDefaultAriaLabelOptions()
    };
  }

  getDefaultState(): State {
    return {
      activeEndDate: null,
      activeItem: {
        left: {} as ActiveItemSide,
        right: {} as ActiveItemSide
      },
      activeRange: null,
      activeStartDate: null,
      calendarAvailable: {
        left: false,
        right: false
      },
      customRange: false,
      dates: {
        left: {} as DateSide,
        right: {} as DateSide
      },
      dateTitleText: {
        left: "",
        right: ""
      },
      frequencyColumnHeader: null,
      isCalendarVisible: false,
      isValidFilter: false,
      isUserModelChange: true,
      localTimezone: this.getLocalTimezone(),
      selectedDateText: "",
      selectedHour: {
        left: "",
        right: ""
      },
      selectedMeridian: {
        left: "",
        right: ""
      },
      selectedMinute: {
        left: "",
        right: ""
      },
      selectedMonth: {
        left: "",
        right: ""
      },
      selectedTimezone: undefined, // Since 'useLocalTimezone: false' by default;
      selectedYear: {
        left: "",
        right: ""
      },
      sides: [],
      timeItems: TIMES_AVAILABLE,
      times: {
        left: "",
        right: ""
      },
      timeZones: TZ_CODES,
      todayTime: "",
      weekDayOptions: WEEKDAYS_AVAILABLE
    };
  }

  formatDateToDefaultFormat(date: string | number, format: string): string {
    let formattedDate = null;
    if (!date) {
      return;
    }

    if (!isNaN(Number(date))) {
      formattedDate = moment(date).format(DEFAULT_DATE_FORMAT);
    } else {
      formattedDate = moment(date, format).format(DEFAULT_DATE_FORMAT);
    }

    return formattedDate;
  }

  formatTimeToDefaultFormat(time: string) {
    let formattedTime = null;
    if (!time) {
      return;
    }

    if (time.indexOf(":") > -1) {
      if (time.indexOf("AM") > -1 || time.indexOf("PM") > -1) {
        formattedTime = moment(time, "h:mm A").format(DEFAULT_TIME_FORMAT);
      } else {
        formattedTime = time;
      }
    } else {
      console.warn(
        `WARN_NGX_DATETIME_RANGE_PICKER:
            The provided time is not in correct format.
            Format: HH:mm or hh:mm A
        `
      );
    }
    return formattedTime;
  }

  getCalendarRowNumberText(type, number) {
    return (() => {
      switch (type) {
        case "daily":
          return `W${number}`;
        case "weekly":
          return "";
        case "monthly":
          return `Q${number}`;
        case "quarterly":
          return `${number}`;
        case "yearly":
          return "";
      }
    })();
  }

  createDefaultRanges(config: Config): Object {
    const ranges = {};
    const type: string = config.type;
    const maxDate: string = cloneDeep(config.maxDate) as string;

    DEFAULT_RANGES[type].forEach((rangeInfo: { label: string; count: number }) => {
      ranges[rangeInfo.label] = {
        startDate: moment(maxDate, DEFAULT_DATE_FORMAT)
          .subtract(rangeInfo.count, MOMENT_CONVERSION_MAP[type])
          .format(DEFAULT_DATE_FORMAT),
        endDate: maxDate
      };
    });

    ranges["Custom Range"] = { startDate: null, endDate: null };
    return ranges;
  }

  getSanitizedDateArray(config: Config): string[] {
    const sanitizedDateArray: string[] = [];
    const type = config.type;
    const dateArray = config.dateArray;
    const inputDateFormat = config.inputDateFormat;

    // dateArray can have nulls
    dateArray.forEach((date) => {
      if (!date) {
        return;
      }

      let format: string = null;

      if (isNaN(Number(date))) {
        if (inputDateFormat) {
          format = inputDateFormat;
        } else {
          format = moment(date)._f; // moment does not support this
        }
      }

      if (inputDateFormat !== moment(date)._f) {
        console.warn(
          `ERR_NGX_DATETIME_RANGE_PICKER:
              inputDateFormat !== dateFormat in dateArray.
              Converted dates might not be as expected
            `
        );
      }

      const value: Moment = format ? moment(date, format) : moment(date);

      if (value) {
        const formattedDate = value.endOf(MOMENT_CONVERSION_MAP[type]).format(DEFAULT_DATE_FORMAT);
        sanitizedDateArray.push(formattedDate);
      } else {
        console.warn(
          `ERR_NGX_DATETIME_RANGE_PICKER:
              dateArray values are in unknown format.
              Pass the format or pass the dates in known format
            `
        );
      }
    });

    return [...new Set(sanitizedDateArray)];
  }

  getNumberOfWeeks(date): number {
    if (!date) {
      return;
    }

    const monthStart: number = moment(date, DEFAULT_DATE_FORMAT)
      .startOf("month")
      .day();
    const monthEnd: number = Number(
      moment(date, DEFAULT_DATE_FORMAT)
        .endOf("month")
        .format("D")
    );
    return Math.ceil((monthStart + monthEnd) / 7);
  }

  getYearlyWeekCount(year: string): number {
    if (!year) {
      return;
    }

    const yearStartDate: string = moment(year, "YYYY")
      .startOf("year")
      .format(DEFAULT_DATE_FORMAT);
    const yearEndDate: string = moment(year, "YYYY")
      .endOf("year")
      .format(DEFAULT_DATE_FORMAT);
    const yearEndWeekEndDate: string = moment(yearEndDate, DEFAULT_DATE_FORMAT)
      .startOf("week")
      .format(DEFAULT_DATE_FORMAT);
    const yearStartWeekEndDate: string = moment(yearStartDate, DEFAULT_DATE_FORMAT)
      .endOf("week")
      .format(DEFAULT_DATE_FORMAT);

    const yearStartWeekNumber: number = this.getWeekNumber(yearStartWeekEndDate) as number;
    const yearEndWeekNumber: number = this.getWeekNumber(yearEndWeekEndDate) as number;

    return yearEndWeekNumber - yearStartWeekNumber + 1;
  }

  getMonthsAvailable(minDate, maxDate, selectedYear): string[] {
    const months: string[] = [];

    if (!minDate || !maxDate || !selectedYear) {
      return;
    }

    let minDatems: number = moment(minDate, DEFAULT_DATE_FORMAT).valueOf();
    let maxDatems: number = moment(maxDate, DEFAULT_DATE_FORMAT).valueOf();
    const yearStartms: number = moment()
      .year(selectedYear)
      .startOf("year")
      .valueOf();
    const yearEndms: number = moment()
      .year(selectedYear)
      .endOf("year")
      .valueOf();

    if (minDatems < yearStartms) {
      minDatems = yearStartms;
    }
    if (maxDatems > yearEndms) {
      maxDatems = yearEndms;
    }

    let minDateMonthNumber: number = moment(minDatems).month();
    const diff: number = moment(maxDatems).diff(moment(minDatems), "months");
    const maxMonths: number = diff < MONTHS_AVAILABLE.length ? diff : MONTHS_AVAILABLE.length;

    for (let i = 0; i <= maxMonths; i++) {
      if (minDateMonthNumber >= MONTHS_AVAILABLE.length) {
        months.push(MONTHS_AVAILABLE[minDateMonthNumber - MONTHS_AVAILABLE.length]);
      } else {
        months.push(MONTHS_AVAILABLE[minDateMonthNumber]);
      }
      minDateMonthNumber++;
    }

    return months;
  }

  getYearsAvailable(config: Config): string[] {
    const minDate: string | number = config ? config.minDate : "";
    const maxDate: string | number = config ? config.maxDate : "";
    const years: string[] = [];

    if (minDate && maxDate) {
      const minYear: number = Number(this.getSelectedYear(minDate));
      const maxYear: number = Number(this.getSelectedYear(maxDate));
      const diff = maxYear - minYear;

      for (let i = 0; i <= diff; i++) {
        years.push(`${minYear + i}`);
      }
    }
    return years.reverse();
  }

  isDateAvailable(
    date: number,
    minDate: number,
    maxDate: number,
    startDate: number,
    endDate: number,
    monthStartDate: number,
    monthEndDate: number,
    config: Config
  ): boolean {
    let available = false;
    const type: string = config.type;
    const disableWeekends: boolean = config.disableWeekends;
    const disableWeekdays: boolean = config.disableWeekdays;

    if (type === "daily") {
      minDate = minDate > monthStartDate ? minDate : monthStartDate;
      maxDate = maxDate < monthEndDate ? maxDate : monthEndDate;
    }

    if (date >= minDate && date <= maxDate) {
      available = true;

      if (available) {
        if (disableWeekends) {
          available = !this.isWeekend(date);
        }
        if (disableWeekdays) {
          available = !this.isWeekday(date);
        }
      }
    }
    return available;
  }

  isDateInRange(
    date: number,
    minDate: number,
    maxDate: number,
    startDate: number,
    endDate: number,
    monthStartDate: number,
    monthEndDate: number,
    available: boolean,
    config: Config
  ): boolean {
    let inRange = false;
    const type: string = config.type;
    const singleDatePicker: boolean = config.singleDatePicker;

    if (!singleDatePicker) {
      if (type === "daily") {
        minDate = monthStartDate;
        maxDate = monthEndDate;
      }
      if (date >= startDate && date <= endDate && date >= minDate && date <= maxDate) {
        if (available) {
          inRange = true;
        }
      }
    }
    return inRange;
  }

  isDateActive(date: number, startDate: number, endDate: number, side: string): boolean {
    return (date === startDate && side === "left") || (date === endDate && side === "right");
  }

  isDateToday(dateMs: number, config): boolean {
    const todayDate: string = moment().format(DEFAULT_DATE_FORMAT);
    const type: string = config.type;
    const { firstDay, lastDay } = this.getFirstLastDay(todayDate, type);
    const firstDayMs: number = moment(firstDay, DEFAULT_DATE_FORMAT).valueOf();
    const lastDayMs: number = moment(lastDay, DEFAULT_DATE_FORMAT).valueOf();
    return dateMs >= firstDayMs && dateMs <= lastDayMs;
  }

  isWeekday(date: number, format?: string): boolean {
    return !this.isWeekend(date, format);
  }

  isWeekend(date: number, format?: string): boolean {
    if (!format) {
      format = null;
    }
    const day = moment(date, format).day();
    return day === 0 || day === 6;
  }

  getCalendarRowVariables(options: RowOptions): RowVariables {
    const variables: RowVariables = {
      rowNumber: "",
      columns: 0
    };
    const type: string = options.type;
    const monthStartWeekNumber: number = options.monthStartWeekNumber;
    const dateRows: number = options.dateRows;
    const year = `${options.year}`;

    if (type === "daily") {
      variables.rowNumber = `${monthStartWeekNumber + dateRows}`;
      variables.columns = 6;
    } else if (type === "weekly") {
      variables.rowNumber = ``;
      variables.columns = 6;
    } else if (type === "monthly") {
      variables.rowNumber = `${dateRows + 1}`;
      variables.columns = 2;
    } else if (type === "quarterly") {
      variables.rowNumber = year.charAt(dateRows);
      variables.columns = 0;
    } else if (type === "yearly") {
      variables.rowNumber = "";
      variables.columns = 0;
    }

    return variables;
  }

  getCalendarRowItemVariables(options: RowItemOptions): RowItemVariables {
    const { type, monthStartWeekNumber, yearStartDate, year, rowItem, dateRows, columns } = options;

    const itemCount: number = rowItem + dateRows * columns + dateRows;
    let currentItemDate = "";
    let rowItemText = "";

    if (type === "daily") {
      if (!isNil(monthStartWeekNumber) && !isNil(dateRows) && !isNil(year)) {
        const yearStartDateDaily = moment()
          .year(year)
          .startOf("year")
          .format(DEFAULT_DATE_FORMAT);
        currentItemDate = moment(yearStartDateDaily, DEFAULT_DATE_FORMAT)
          .add(monthStartWeekNumber + dateRows - 1, "week")
          .startOf("week")
          .add(rowItem, "day")
          .format(DEFAULT_DATE_FORMAT);
        rowItemText = moment(currentItemDate, DEFAULT_DATE_FORMAT).format("D");
      }
    } else if (type === "weekly") {
      if (!isNil(yearStartDate) && !isNil(itemCount)) {
        currentItemDate = moment(yearStartDate, DEFAULT_DATE_FORMAT)
          .add(itemCount, "week")
          .endOf("week")
          .format(DEFAULT_DATE_FORMAT);
        const weekNumber: any = itemCount + 1;
        rowItemText = `W${weekNumber}`;
      }
    } else if (type === "monthly") {
      if (!isNil(itemCount) && !isNil(year)) {
        currentItemDate = moment()
          .year(year)
          .month(itemCount)
          .endOf("month")
          .format(DEFAULT_DATE_FORMAT);
        rowItemText = moment(currentItemDate, DEFAULT_DATE_FORMAT).format("MMM");
      }
    } else if (type === "quarterly") {
      if (!isNil(itemCount) && !isNil(year)) {
        currentItemDate = moment()
          .year(year)
          .quarter(itemCount + 1)
          .endOf("quarter")
          .format(DEFAULT_DATE_FORMAT);
        rowItemText = `Quarter ${itemCount + 1}`;
      }
    }

    const { firstDay, lastDay } = this.getFirstLastDay(currentItemDate, type);

    return {
      itemCount,
      currentItemDate,
      rowItemText,
      firstDay,
      lastDay
    };
  }

  isRowIemValid(options: RowOptions): boolean {
    let valid = false;
    const type: string = options.type;
    const year: string = options.year;
    const itemCount: number = options.itemCount;
    const validWeekCount: number = this.getYearlyWeekCount(year);

    if (type === "daily") {
      valid = true;
    } else if (type === "weekly") {
      if (itemCount < validWeekCount) {
        valid = true;
      }
    } else if (type === "monthly") {
      valid = true;
    } else if (type === "quarterly") {
      valid = true;
    }

    return valid;
  }

  formatStartDate(config: Config, returnFormat: string): string {
    const startDate: string | number = config ? config.startDate : null;
    const type: string = config ? config.type : "";
    let formattedStartDate: string = null;

    if (startDate) {
      formattedStartDate = moment(startDate, DEFAULT_DATE_FORMAT)
        .startOf(MOMENT_CONVERSION_MAP[type])
        .format(returnFormat);
    }

    return formattedStartDate;
  }

  getSelectedYear(date: string | number): number {
    return moment(date, DEFAULT_DATE_FORMAT).format("YYYY");
  }

  getFirstLastDay(date: string, type: string): { firstDay: string; lastDay: string } {
    let firstDay = "";
    let lastDay = "";

    if (type === "daily") {
      firstDay = lastDay = date;
    } else if (type === "weekly") {
      firstDay = moment(date, DEFAULT_DATE_FORMAT)
        .startOf("week")
        .format(DEFAULT_DATE_FORMAT);
      lastDay = moment(date, DEFAULT_DATE_FORMAT)
        .endOf("week")
        .format(DEFAULT_DATE_FORMAT);
    } else if (type === "monthly") {
      firstDay = moment(date, DEFAULT_DATE_FORMAT)
        .startOf("month")
        .format(DEFAULT_DATE_FORMAT);
      lastDay = moment(date, DEFAULT_DATE_FORMAT)
        .endOf("month")
        .format(DEFAULT_DATE_FORMAT);
    } else if (type === "quarterly") {
      firstDay = moment(date, DEFAULT_DATE_FORMAT)
        .startOf("quarter")
        .format(DEFAULT_DATE_FORMAT);
      lastDay = moment(date, DEFAULT_DATE_FORMAT)
        .endOf("quarter")
        .format(DEFAULT_DATE_FORMAT);
    } else if (type === "yearly") {
      firstDay = moment(date, DEFAULT_DATE_FORMAT)
        .startOf("year")
        .format(DEFAULT_DATE_FORMAT);
      lastDay = moment(date, DEFAULT_DATE_FORMAT)
        .endOf("year")
        .format(DEFAULT_DATE_FORMAT);
    }

    return { firstDay, lastDay };
  }

  getLocalTimezone(): string {
    const tz: string = /\((.*)\)/.exec(new Date().toString())[1];

    if (tz === "Central Europe Standard Time") {
      return EU_TZ_CODE;
    } else {
      return DEFAULT_TIMEZONE_CODE;
    }
  }

  getZoneDate(tz: string, format: string, date?: string): Moment {
    let _date: number = moment().valueOf();

    if (date) {
      _date = moment(date, format)
        .startOf("day")
        .valueOf();
    }

    const today = new Date(_date).toLocaleString("en-US", {
      timeZone: TZ_NAMES[tz]
    });

    return moment(today, "MM/DD/YYYY, hh:mm:ss A");
  }

  getZoneToday(tz: string, viewDateFormat: string): string {
    const today: Moment = this.getZoneDate(tz, viewDateFormat);
    return moment(today).format(`${viewDateFormat}  hh:mm A`);
  }

  formatToZoneDate(tz: string, format: string, date: string): string {
    const formattedDate: Moment = this.getZoneDate(tz, format, date);
    return moment(formattedDate).format(`${format}`);
  }

  convertToViewTimeItem(item: string | number): string {
    let stringified_item = item + "";
    if (stringified_item.length === 1) {
      stringified_item = `0${stringified_item}`;
    }
    return stringified_item;
  }

  getWeekNumber(date: string): string | number {
    if (date) {
      const year: number = moment(date, "YYYY-MM-DD").year();
      const month: number = moment(date, "YYYY-MM-DD").month();
      const day: number = Number(moment(date, "YYYY-MM-DD").format("D"));

      const yearStartms: Date = new Date(year, 0, 1);
      const datems: Date = new Date(year, month, day);
      return Math.ceil(((datems.getTime() - yearStartms.getTime()) / 86400000 + yearStartms.getDay() + 1) / 7);
    } else {
      console.warn(`
        WARN_NGX_DATETIME_RANGE_PICKER | getWeekNumber:
        Invalid date
      `);
      return getNotAvailableText();
    }
  }

  iterateOverDateObj(dates: CalendarSides, func) {
    for (const side in dates) {
      if (side) {
        const sideDates = dates[side];
        sideDates.itemRows.forEach((rows) => {
          rows.items.forEach((rowItem) => {
            func(rowItem);
          });
        });
      }
    }
  }

  getCalendarColspan(type: string): number {
    if (type === "daily") {
      return 6;
    } else if (type === "weekly") {
      return 8;
    } else if (type === "monthly") {
      return 3;
    } else if (type === "quarterly") {
      return 1;
    } else if (type === "yearly") {
      return 1;
    }
  }

  getCalendarRowItemColspan(type: string): number {
    if (type === "monthly") {
      return 3;
    } else if (type === "quarterly") {
      return 6;
    } else if (type === "yearly") {
      return 6;
    }
  }

  getDateCharacteristics(config: Config, state: State, date: string, month: string, side: string): DateCharacteristics {
    const currentDate: number = moment(date, DEFAULT_DATE_FORMAT)
      .startOf("day")
      .valueOf();

    let _date: string = this.formatDateToDefaultFormat(config.minDate, DEFAULT_DATE_FORMAT);
    const minDate: number = moment(_date, DEFAULT_DATE_FORMAT)
      .startOf("day")
      .valueOf();

    _date = this.formatDateToDefaultFormat(config.maxDate, DEFAULT_DATE_FORMAT);
    const maxDate: number = moment(_date, DEFAULT_DATE_FORMAT)
      .startOf("day")
      .valueOf();

    _date = this.formatDateToDefaultFormat(config.startDate, DEFAULT_DATE_FORMAT);
    const startDate: number = moment(_date, DEFAULT_DATE_FORMAT)
      .startOf("day")
      .valueOf();

    _date = this.formatDateToDefaultFormat(config.endDate, DEFAULT_DATE_FORMAT);
    const endDate: number = moment(_date, DEFAULT_DATE_FORMAT)
      .startOf("day")
      .valueOf();

    const currentMonthStartDate: number = moment(month, "MMM YYYY")
      .startOf("month")
      .startOf("day")
      .valueOf();
    const currentMonthEndDate: number = moment(month, "MMM YYYY")
      .endOf("month")
      .startOf("day")
      .valueOf();

    const available: boolean = this.isDateAvailable(
      currentDate,
      minDate,
      maxDate,
      startDate,
      endDate,
      currentMonthStartDate,
      currentMonthEndDate,
      config
    );
    const inRange: boolean = this.isDateInRange(
      currentDate,
      minDate,
      maxDate,
      startDate,
      endDate,
      currentMonthStartDate,
      currentMonthEndDate,
      available,
      config
    );
    const active: boolean = this.isDateActive(currentDate, startDate, endDate, side);
    const today: boolean = this.isDateToday(currentDate, config);

    // Active
    if (currentDate === startDate && side === "left") {
      state.activeStartDate = date;
    } else if (currentDate === endDate && side === "right") {
      state.activeEndDate = date;
    }

    return { available, inRange, active, today };
  }

  getLabelProps(
    state: State,
    calendarType: string,
    side: string
  ): { label: string; labelFormat: string; type: string } {
    let label: string, labelFormat: string, type: string;

    if (calendarType === "daily") {
      label = `${state.selectedMonth[side]} ${state.selectedYear[side]}`;
      labelFormat = "MMM YYYY";
      type = "month";
    } else {
      label = `${state.selectedYear[side]}`;
      labelFormat = "YYYY";
      type = "year";
    }

    return { label, labelFormat, type };
  }
}
