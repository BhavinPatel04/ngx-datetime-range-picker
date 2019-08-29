import { Injectable } from "@angular/core";
import { NgxDatetimeRangePickerConstants } from "./ngx-datetime-range-picker.constants";
import { getNotAvailableText, cloneDeep, isNil } from "./ngx-datetime-range-picker.utils";
import {
  AriaLabelsOptions,
  NgxDatetimeRangePickerOptions,
  NgxDatetimeRangePickerSettings,
  CalendarSides
} from "./interfaces/index";

declare var require: any;
const moment = require("moment");

const DEFAULT_TYPE = NgxDatetimeRangePickerConstants.DEFAULT.TYPE;
const DEFAULT_INPUT_CLASS = NgxDatetimeRangePickerConstants.DEFAULT.INPUT_CLASS;
const DEFAULT_DATE_FROMAT = NgxDatetimeRangePickerConstants.DEFAULT.DATE_FROMAT;
const DEFAULT_TIME_FORMAT = NgxDatetimeRangePickerConstants.DEFAULT.TIME_FORMAT;
const DEFAULT_START_DATE = NgxDatetimeRangePickerConstants.DEFAULT.START_DATE;
const DEFAULT_END_DATE = NgxDatetimeRangePickerConstants.DEFAULT.END_DATE;
const DEFAULT_MIN_DATE = NgxDatetimeRangePickerConstants.DEFAULT.MIN_DATE;
const DEFAULT_MAX_DATE = NgxDatetimeRangePickerConstants.DEFAULT.MAX_DATE;
const DEFAULT_START_TIME = NgxDatetimeRangePickerConstants.DEFAULT.START_TIME;
const DEFAULT_END_TIME = NgxDatetimeRangePickerConstants.DEFAULT.END_TIME;
const DEFAULT_MODEL_KEYS = NgxDatetimeRangePickerConstants.DEFAULT.MODEL_KEYS;
const MONTHS_AVAILABLE = NgxDatetimeRangePickerConstants.CONSTANT.MONTHS_AVAILABLE;
const DEFAULT_TIMEZONE_CODE = NgxDatetimeRangePickerConstants.DEFAULT.TZ_CODE;
const EU_TZ_CODE = NgxDatetimeRangePickerConstants.CONSTANT.EU_TZ_CODE;
const TZ_NAMES = NgxDatetimeRangePickerConstants.CONSTANT.TZ_NAMES;

@Injectable({
  providedIn: "root"
})
export class NgxDatetimeRangePickerService {
  getDefaultAriaLabelOptions(): AriaLabelsOptions {
    return {
      inputField: "Date Range Input Field" as string
    };
  }

  getDefaultOptions(): NgxDatetimeRangePickerOptions {
    return {
      dateArray: [] as string[],
      startDate: DEFAULT_START_DATE as string,
      endDate: DEFAULT_END_DATE as string,
      minDate: DEFAULT_MIN_DATE as string,
      maxDate: DEFAULT_MAX_DATE as string,
      startTime: DEFAULT_START_TIME as string,
      endTime: DEFAULT_END_TIME as string
    };
  }

  getDefaultSettings(): NgxDatetimeRangePickerSettings {
    return {
      type: DEFAULT_TYPE as string,
      modelKeys: DEFAULT_MODEL_KEYS as string[],
      selectedModel: undefined as string,
      showTimezoneSelect: false as boolean,
      useLocalTimezone: false as boolean,
      timePicker: false as boolean,
      inputClass: DEFAULT_INPUT_CLASS as string,
      inputDateFormat: null as string,
      viewDateFormat: DEFAULT_DATE_FROMAT as string,
      outputDateFormat: DEFAULT_DATE_FROMAT as string,
      singleDatePicker: false as boolean,
      componentDisabled: false as boolean,
      placeholder: "Select Date" as string,
      showRowNumber: true as boolean,
      availableRanges: {} as Object,
      showRanges: true as boolean,
      disableWeekends: false as boolean,
      disableWeekdays: false as boolean,
      retailCalendar: false as boolean,
      displayBeginDate: false as boolean,
      displayEndDate: false as boolean,
      ariaLabels: this.getDefaultAriaLabelOptions() as AriaLabelsOptions
    };
  }

  formatDateToDefaultFormat(date, format = DEFAULT_DATE_FROMAT): string {
    let fromattedDate = null;
    if (date) {
      if (!isNaN(Number(date))) {
        fromattedDate = moment(date).format(DEFAULT_DATE_FROMAT);
      } else {
        if (!format) {
          format = moment(date)._f;
        } else {
          if (format !== moment(date)._f) {
            console.warn("ERR_NGX_DATETIME_RANGE_PICKER: inputDateFormat !== dateFormat");
          }
        }
        if (!format) {
          console.warn(
            "ERR_NGX_DATETIME_RANGE_PICKER: The provided date is in unknown format. Pass the format or pass the date in known format"
          );
        }
        fromattedDate = moment(date, format).format(DEFAULT_DATE_FROMAT);
      }
    }

    return fromattedDate;
  }

  formatTimeToDefaultFormat(time) {
    let formattedTime = null;
    if (time) {
      if (time.indexOf(":") > -1) {
        if (time.indexOf("AM") > -1 || time.indexOf("PM") > -1) {
          formattedTime = moment(time, "h:mm A").format(DEFAULT_TIME_FORMAT);
        } else {
          formattedTime = time;
        }
      } else {
        console.warn(
          "ERR_NGX_DATETIME_RANGE_PICKER: The provided time is not in correct format. Format: HH:mm or hh:mm A"
        );
      }
    }
    return formattedTime;
  }

  getFrequencyColumnHeader(type) {
    return (() => {
      switch (type) {
        case "daily":
          return "W#";
        case "weekly":
          return "";
        case "monthly":
          return "Q#";
        case "quarterly":
          return "Year";
        case "yearly":
          return "";
      }
    })();
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

  createDefaultRanges(config): Object {
    const ranges = {};
    const type = config.type;
    const maxDate = cloneDeep(config.maxDate);
    const formattedMaxDate = this.formatDateToDefaultFormat(maxDate, DEFAULT_DATE_FROMAT);

    if (type === "daily") {
      ranges["Last 7 Days"] = {
        startDate: moment(formattedMaxDate, DEFAULT_DATE_FROMAT)
          .subtract(6, "days")
          .format(DEFAULT_DATE_FROMAT),
        endDate: formattedMaxDate
      };
      ranges["Last 30 Days"] = {
        startDate: moment(formattedMaxDate, DEFAULT_DATE_FROMAT)
          .subtract(29, "days")
          .format(DEFAULT_DATE_FROMAT),
        endDate: formattedMaxDate
      };
      ranges["Last 90 Days"] = {
        startDate: moment(formattedMaxDate, DEFAULT_DATE_FROMAT)
          .subtract(89, "days")
          .format(DEFAULT_DATE_FROMAT),
        endDate: formattedMaxDate
      };
    } else if (type === "weekly") {
      ranges["Last 4 Weeks"] = {
        startDate: moment(formattedMaxDate, DEFAULT_DATE_FROMAT)
          .subtract(3, "weeks")
          .format(DEFAULT_DATE_FROMAT),
        endDate: formattedMaxDate
      };
      ranges["Last 13 Weeks"] = {
        startDate: moment(formattedMaxDate, DEFAULT_DATE_FROMAT)
          .subtract(12, "weeks")
          .format(DEFAULT_DATE_FROMAT),
        endDate: formattedMaxDate
      };
      ranges["Last 26 Weeks"] = {
        startDate: moment(formattedMaxDate, DEFAULT_DATE_FROMAT)
          .subtract(25, "weeks")
          .format(DEFAULT_DATE_FROMAT),
        endDate: formattedMaxDate
      };
    } else if (type === "monthly") {
      // if(retailCalendar) ? subtract(3, 'months')....so on for 'Last 3 Months'....so on
      ranges["Last 3 Months"] = {
        startDate: moment(formattedMaxDate, DEFAULT_DATE_FROMAT)
          .subtract(2, "months")
          .format(DEFAULT_DATE_FROMAT),
        endDate: formattedMaxDate
      };
      ranges["Last 6 Months"] = {
        startDate: moment(formattedMaxDate, DEFAULT_DATE_FROMAT)
          .subtract(5, "months")
          .format(DEFAULT_DATE_FROMAT),
        endDate: formattedMaxDate
      };
      ranges["Last 9 Months"] = {
        startDate: moment(formattedMaxDate, DEFAULT_DATE_FROMAT)
          .subtract(8, "months")
          .format(DEFAULT_DATE_FROMAT),
        endDate: formattedMaxDate
      };
    } else if (type === "quarterly") {
      // if(retailCalendar) ? subtract(1, 'quarters')....so on for 'Last 2 Quarters'....so on
      ranges["Last 2 Quarters"] = {
        startDate: moment(formattedMaxDate, DEFAULT_DATE_FROMAT)
          .subtract(1, "quarters")
          .format(DEFAULT_DATE_FROMAT),
        endDate: formattedMaxDate
      };
      ranges["Last 4 Quarters"] = {
        startDate: moment(formattedMaxDate, DEFAULT_DATE_FROMAT)
          .subtract(3, "quarters")
          .format(DEFAULT_DATE_FROMAT),
        endDate: formattedMaxDate
      };
    } else if (type === "yearly") {
      ranges["Last Year"] = {
        startDate: moment(formattedMaxDate, DEFAULT_DATE_FROMAT)
          .subtract(1, "year")
          .format(DEFAULT_DATE_FROMAT),
        endDate: formattedMaxDate
      };
    }
    ranges["Custom Range"] = { startDate: null, endDate: null };
    return ranges;
  }

  getSanitizedDateArray(config) {
    const sanitizedDateArray: Array<number> = [];
    const type = config.type;
    const dateArray = config.dateArray;
    const inputDateFormat = config.inputDateFormat;

    // dateArray can have nulls
    dateArray.forEach((date) => {
      if (date) {
        let format = null;
        if (isNaN(Number(date))) {
          if (inputDateFormat) {
            format = inputDateFormat;
          } else {
            format = moment(date)._f;
          }
        }

        if (inputDateFormat !== moment(date)._f) {
          console.warn(
            "ERR_NGX_DATETIME_RANGE_PICKER: inputDateFormat !== dateFormat in dateArray. Converted dates might not be as expected"
          );
        }

        let value = format ? moment(date, format).format(format) : moment(date).valueOf();
        if (type === "weekly") {
          value = format
            ? moment(date, format)
                .endOf("week")
                .format(format)
            : moment(date)
                .endOf("week")
                .valueOf();
        } else if (type === "monthly") {
          value = format
            ? moment(date, format)
                .endOf("month")
                .format(format)
            : moment(date)
                .endOf("month")
                .valueOf();
        } else if (type === "quarterly") {
          value = format
            ? moment(date, format)
                .endOf("quarter")
                .format(format)
            : moment(date)
                .endOf("quarter")
                .valueOf();
        } else if (type === "yearly") {
          value = format
            ? moment(date, format)
                .endOf("year")
                .format(format)
            : moment(date)
                .endOf("year")
                .valueOf();
        }
        if (value) {
          sanitizedDateArray.push(value);
        } else {
          console.warn(
            `ERR_NGX_DATETIME_RANGE_PICKER: dateArray values are in unknown format. Pass the format or pass the dates in known format`
          );
        }
      }
    });

    return [...new Set(sanitizedDateArray)];
  }

  getNumberOfWeeks(date): number {
    let numberOfWeeks = null;
    if (date) {
      const monthStart: number = moment(date, DEFAULT_DATE_FROMAT)
        .startOf("month")
        .day();
      const monthEnd: number = Number(
        moment(date, DEFAULT_DATE_FROMAT)
          .endOf("month")
          .format("D")
      );
      numberOfWeeks = Math.ceil((monthStart + monthEnd) / 7);
    }
    return numberOfWeeks;
  }

  getYearlyWeekCount(year, retailCalendar?) {
    let weekCount: number = null;
    if (year) {
      const yearStartDate = moment(year, "YYYY")
        .startOf("year")
        .format(DEFAULT_DATE_FROMAT);
      const yearEndDate = moment(year, "YYYY")
        .endOf("year")
        .format(DEFAULT_DATE_FROMAT);
      const yearEndWeekEndDate = moment(yearEndDate, DEFAULT_DATE_FROMAT)
        .startOf("week")
        .format(DEFAULT_DATE_FROMAT);

      const yearStartWeekEndDate = moment(yearStartDate, DEFAULT_DATE_FROMAT)
        .endOf("week")
        .format(DEFAULT_DATE_FROMAT);

      const yearSartWeekNumber = this.getWeekNumber(yearStartWeekEndDate);
      const yearEndWeekNumber = this.getWeekNumber(yearEndWeekEndDate);
      weekCount = yearEndWeekNumber - yearSartWeekNumber + 1;
    }
    return weekCount;
  }

  getMonthsAvailable(minDate, maxDate, selectedYear) {
    const months = [];
    if (minDate && maxDate && selectedYear) {
      let minDatems = moment(minDate, DEFAULT_DATE_FROMAT).valueOf();
      let maxDatems = moment(maxDate, DEFAULT_DATE_FROMAT).valueOf();
      const yearStartms = moment()
        .year(selectedYear)
        .startOf("year")
        .valueOf();
      const yearEndms = moment()
        .year(selectedYear)
        .endOf("year")
        .valueOf();

      if (minDatems < yearStartms) {
        minDatems = yearStartms;
      }
      if (maxDatems > yearEndms) {
        maxDatems = yearEndms;
      }

      let minDateMonthNumber = moment(minDatems).month();
      const diff: number = moment(maxDatems).diff(moment(minDatems), "months");
      const maxMonths = diff < MONTHS_AVAILABLE.length ? diff : MONTHS_AVAILABLE.length;

      for (let i = 0; i <= maxMonths; i++) {
        if (minDateMonthNumber >= MONTHS_AVAILABLE.length) {
          months.push(MONTHS_AVAILABLE[minDateMonthNumber - MONTHS_AVAILABLE.length]);
        } else {
          months.push(MONTHS_AVAILABLE[minDateMonthNumber]);
        }
        minDateMonthNumber++;
      }
    }
    return months;
  }

  getYearsAvailable(config) {
    const minDate = config ? config.minDate : "";
    const maxDate = config ? config.maxDate : "";
    const years = [];
    if (minDate && maxDate) {
      const minYear = Number(this.getSelectedYear(config, minDate, "left"));
      const maxYear = Number(this.getSelectedYear(config, maxDate, "right"));
      const diff = maxYear - minYear;

      for (let i = 0; i <= diff; i++) {
        years.push(`${minYear + i}`);
      }
    }
    return years.reverse();
  }

  isDateAvailable(date, minDate, maxDate, startDate, endDate, monthStartDate, monthEndDate, config): boolean {
    let available = false;
    const type = config.type;
    const dateArray = config.dateArray ? config.dateArray : [];
    const inputDateFormat = config.inputDateFormat;
    const disableWeekends = config.disableWeekends;
    const disableWeekdays = config.disableWeekdays;
    if (type === "daily") {
      minDate = minDate > monthStartDate ? minDate : monthStartDate;
      maxDate = maxDate < monthEndDate ? maxDate : monthEndDate;
    }

    // if(date === minDate
    //     || date === maxDate) {
    //   available = true;
    // }

    if (date >= minDate && date <= maxDate) {
      if (dateArray.length > 0) {
        available = dateArray.some((d) => {
          let format = null;
          if (isNaN(Number(date))) {
            if (inputDateFormat) {
              format = inputDateFormat;
            } else {
              format = moment(date)._f;
            }
          }
          return moment(d, format).valueOf() === date;
        });
      } else {
        available = true;
      }

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

  isDateInRange(date, minDate, maxDate, startDate, endDate, monthStartDate, monthEndDate, available, config): boolean {
    let inRange = false;
    const type = config.type;
    const singleDatePicker = config.singleDatePicker;
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

  isDateActive(date, startDate, endDate, side): boolean {
    let active = false;
    if ((date === startDate && side === "left") || (date === endDate && side === "right")) {
      active = true;
    }
    return active;
  }

  isDateToday(date, config): boolean {
    let today = false;
    const todayDate = moment()
      .startOf("day")
      .valueOf();
    const type = config.type;
    const firstLastDay = this.getFirstLastDay(moment(todayDate).format(DEFAULT_DATE_FROMAT), type);
    const firstDay = moment(firstLastDay.firstDay, DEFAULT_DATE_FROMAT).valueOf();
    const lastDay = moment(firstLastDay.lastDay, DEFAULT_DATE_FROMAT).valueOf();
    if (date >= firstDay && date <= lastDay) {
      today = true;
    }
    return today;
  }

  isWeekday(date, format?) {
    return !this.isWeekend(date, format);
  }

  isWeekend(date, format?) {
    if (!format) {
      format = null;
    }
    const day = moment(date, format).day();
    return day === 0 || day === 6 ? true : false;
  }

  getCalendarRowVariables(options) {
    const variables: any = {};
    const type = options.type;
    const monthStartWeekNumber = options.monthStartWeekNumber;
    const dateRows = options.dateRows;
    const year = `${options.year}`;

    if (type === "daily") {
      variables.rowNumber = monthStartWeekNumber + dateRows;
      variables.columns = 6;
    } else if (type === "weekly") {
      // variables.rowNumber = `${(dateRows*2)+1} - ${(dateRows*2)+2}`;
      variables.rowNumber = ``;
      variables.columns = 6;
    } else if (type === "monthly") {
      variables.rowNumber = dateRows + 1;
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

  getCalendarRowItemVariables(options) {
    const variables: any = {
      currentItemDate: "",
      rowItemText: "",
      itemCount: null
    };
    const type = options.type;
    const monthStartWeekNumber = options.monthStartWeekNumber;
    const yearStartDate = options.yearStartDate;
    const year = options.year;
    const rowItem = options.rowItem;
    const dateRows = options.dateRows;
    const columns = options.columns;
    const itemCount = rowItem + dateRows * columns + dateRows;
    let currentItemDate = "";
    let rowItemText = "";
    let firstLastDayObject: any = {};

    if (type === "daily") {
      if (!isNil(monthStartWeekNumber) && !isNil(dateRows) && !isNil(year)) {
        const yearStartDateDaily = moment()
          .year(year)
          .startOf("year")
          .format(DEFAULT_DATE_FROMAT);
        currentItemDate = moment(yearStartDateDaily, DEFAULT_DATE_FROMAT)
          .add(monthStartWeekNumber + dateRows - 1, "week")
          .startOf("week")
          .add(rowItem, "day")
          .format(DEFAULT_DATE_FROMAT);
        rowItemText = moment(currentItemDate, DEFAULT_DATE_FROMAT).format("D");
      }
    } else if (type === "weekly") {
      if (!isNil(yearStartDate) && !isNil(itemCount)) {
        currentItemDate = moment(yearStartDate, DEFAULT_DATE_FROMAT)
          .add(itemCount, "week")
          .endOf("week")
          .format(DEFAULT_DATE_FROMAT);
        const weekNumber: any = itemCount + 1;
        rowItemText = `W${weekNumber}`;
      }
    } else if (type === "monthly") {
      if (!isNil(itemCount) && !isNil(year)) {
        currentItemDate = moment()
          .year(year)
          .month(itemCount)
          .endOf("month")
          .format(DEFAULT_DATE_FROMAT);
        rowItemText = moment(currentItemDate, DEFAULT_DATE_FROMAT).format("MMM");
      }
    } else if (type === "quarterly") {
      if (!isNil(itemCount) && !isNil(year)) {
        currentItemDate = moment()
          .year(year)
          .quarter(itemCount + 1)
          .endOf("quarter")
          .format(DEFAULT_DATE_FROMAT);
        rowItemText = `Quarter ${itemCount + 1}`;
      }
    }

    firstLastDayObject = this.getFirstLastDay(currentItemDate, type);

    variables.itemCount = itemCount;
    variables.currentItemDate = currentItemDate;
    variables.rowItemText = rowItemText;
    variables.firstDay = firstLastDayObject.firstDay;
    variables.lastDay = firstLastDayObject.lastDay;
    return variables;
  }

  isRowIemValid(options): boolean {
    let valid = false;
    const type = options.type;
    const year = options.year;
    const itemCount = options.itemCount;
    const retailCalendar = options.retailCalendar;
    const validWeekCount = this.getYearlyWeekCount(year, retailCalendar);

    if (type === "daily") {
      valid = true;
    } else if (type === "weekly") {
      if (itemCount < validWeekCount) {
        valid = true;
      }
    } else if (type === "monthly") {
      return true;
    } else if (type === "quarterly") {
      return true;
    }

    return valid;
  }

  formatStartDate(config, returnFormat) {
    const startDate = config ? config.startDate : null;
    const type = config ? config.type : "";
    let formattedStartDate = null;

    if (startDate) {
      formattedStartDate = moment(startDate, DEFAULT_DATE_FROMAT).format(returnFormat);
      if (type === "weekly") {
        formattedStartDate = moment(startDate, DEFAULT_DATE_FROMAT)
          .startOf("week")
          .format(returnFormat);
      } else if (type === "monthly") {
        formattedStartDate = moment(startDate, DEFAULT_DATE_FROMAT)
          .startOf("month")
          .format(returnFormat);
      } else if (type === "quarterly") {
        formattedStartDate = moment(startDate, DEFAULT_DATE_FROMAT)
          .startOf("quarter")
          .format(returnFormat);
      } else if (type === "yearly") {
        formattedStartDate = moment(startDate, DEFAULT_DATE_FROMAT)
          .startOf("year")
          .format(returnFormat);
      }
    }

    return formattedStartDate;
  }

  getSelectedYear(config, date, side): string {
    return moment(date, DEFAULT_DATE_FROMAT).format("YYYY");
  }

  getFirstLastDay(date, type) {
    let firstDay = "";
    let lastDay = "";

    if (type === "daily") {
      firstDay = lastDay = date;
    } else if (type === "weekly") {
      firstDay = moment(date, DEFAULT_DATE_FROMAT)
        .startOf("week")
        .format(DEFAULT_DATE_FROMAT);
      lastDay = moment(date, DEFAULT_DATE_FROMAT)
        .endOf("week")
        .format(DEFAULT_DATE_FROMAT);
    } else if (type === "monthly") {
      firstDay = moment(date, DEFAULT_DATE_FROMAT)
        .startOf("month")
        .format(DEFAULT_DATE_FROMAT);
      lastDay = moment(date, DEFAULT_DATE_FROMAT)
        .endOf("month")
        .format(DEFAULT_DATE_FROMAT);
    } else if (type === "quarterly") {
      firstDay = moment(date, DEFAULT_DATE_FROMAT)
        .startOf("quarter")
        .format(DEFAULT_DATE_FROMAT);
      lastDay = moment(date, DEFAULT_DATE_FROMAT)
        .endOf("quarter")
        .format(DEFAULT_DATE_FROMAT);
    } else if (type === "yearly") {
      firstDay = moment(date, DEFAULT_DATE_FROMAT)
        .startOf("year")
        .format(DEFAULT_DATE_FROMAT);
      lastDay = moment(date, DEFAULT_DATE_FROMAT)
        .endOf("year")
        .format(DEFAULT_DATE_FROMAT);
    }

    return {
      firstDay,
      lastDay
    };
  }

  getLocalTimezone() {
    let tz = /\((.*)\)/.exec(new Date().toString())[1];

    if (tz === "Central Europe Standard Time") {
      tz = EU_TZ_CODE;
    } else {
      tz = DEFAULT_TIMEZONE_CODE;
    }

    return tz;
  }

  getZoneDate(tz, format, date?) {
    if (date) {
      date = moment(date, format)
        .startOf("day")
        .valueOf();
    } else {
      date = moment().valueOf();
    }

    let today = new Date(date).toLocaleString("en-US", {
      timeZone: TZ_NAMES[tz]
    });
    today = moment(today, "MM/DD/YYYY, hh:mm:ss A");
    return today;
  }

  getZoneToday(tz, viewDateFormat) {
    const today = this.getZoneDate(tz, viewDateFormat);
    return moment(today).format(`${viewDateFormat}  hh:mm A`);
  }

  formatToZoneDate(tz, format, date) {
    const formattedDate = this.getZoneDate(tz, format, date);
    return moment(formattedDate).format(`${format}`);
  }

  convertToViewTimeItem(item) {
    let stringified_item = item + "";
    if (stringified_item.length === 1) {
      stringified_item = `0${stringified_item}`;
    }
    return stringified_item;
  }

  getWeekNumber(date): any {
    if (date) {
      const year = moment(date, "YYYY-MM-DD").year();
      const month = moment(date, "YYYY-MM-DD").month();
      const day = Number(moment(date, "YYYY-MM-DD").format("D"));

      const yearStartms = new Date(year, 0, 1);
      const datems = new Date(year, month, day);
      return Math.ceil(((datems.getTime() - yearStartms.getTime()) / 86400000 + yearStartms.getDay() + 1) / 7);
    } else {
      console.warn("getWeekNumber: Invalid date");
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
}
