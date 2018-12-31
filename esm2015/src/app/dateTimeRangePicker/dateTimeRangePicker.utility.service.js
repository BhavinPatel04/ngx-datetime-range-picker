/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from "@angular/core";
import { DateRangePickerConstants } from "./dateTimeRangePicker.constants";
/** @type {?} */
const moment = require("moment");
/** @type {?} */
const _ = require("lodash");
/** @type {?} */
const DEFAULT_TYPE = DateRangePickerConstants.DEFAULT.TYPE;
/** @type {?} */
const DEFAULT_INPUT_CLASS = DateRangePickerConstants.DEFAULT.INPUT_CLASS;
/** @type {?} */
const DEFAULT_DATE_FROMAT = DateRangePickerConstants.DEFAULT.DATE_FROMAT;
/** @type {?} */
const DEFAULT_TIME_FORMAT = DateRangePickerConstants.DEFAULT.TIME_FORMAT;
/** @type {?} */
const DEFAULT_START_DATE = DateRangePickerConstants.DEFAULT.START_DATE;
/** @type {?} */
const DEFAULT_END_DATE = DateRangePickerConstants.DEFAULT.END_DATE;
/** @type {?} */
const DEFAULT_MIN_DATE = DateRangePickerConstants.DEFAULT.MIN_DATE;
/** @type {?} */
const DEFAULT_MAX_DATE = DateRangePickerConstants.DEFAULT.MAX_DATE;
/** @type {?} */
const DEFAULT_START_TIME = DateRangePickerConstants.DEFAULT.START_TIME;
/** @type {?} */
const DEFAULT_END_TIME = DateRangePickerConstants.DEFAULT.END_TIME;
/** @type {?} */
const DEFAULT_MODEL_KEYS = DateRangePickerConstants.DEFAULT.MODEL_KEYS;
/** @type {?} */
const MONTHS_AVAILABLE = DateRangePickerConstants.CONSTANT.MONTHS_AVAILABLE;
/** @type {?} */
const DEFAULT_TIMEZONE_CODE = DateRangePickerConstants.DEFAULT.TZ_CODE;
/** @type {?} */
const EU_TZ_CODE = DateRangePickerConstants.CONSTANT.EU_TZ_CODE;
/** @type {?} */
const TZ_NAMES = DateRangePickerConstants.CONSTANT.TZ_NAMES;
export class DateTimeRangePickerUtilityService {
  /**
   * @return {?}
   */
  getNotAvailableText() {
    return "N/A";
  }
  /**
   * @return {?}
   */
  getDefaultAriaLabelOptions() {
    return {
      inputField: /** @type {?} */ ("Date Range Input Field")
    };
  }
  /**
   * @return {?}
   */
  getDefaultOptions() {
    return {
      dateArray: /** @type {?} */ ([]),
      startDate: /** @type {?} */ (DEFAULT_START_DATE),
      endDate: /** @type {?} */ (DEFAULT_END_DATE),
      minDate: /** @type {?} */ (DEFAULT_MIN_DATE),
      maxDate: /** @type {?} */ (DEFAULT_MAX_DATE),
      startTime: /** @type {?} */ (DEFAULT_START_TIME),
      endTime: /** @type {?} */ (DEFAULT_END_TIME)
    };
  }
  /**
   * @return {?}
   */
  getDefaultSettings() {
    return {
      type: /** @type {?} */ (DEFAULT_TYPE),
      modelKeys: /** @type {?} */ (DEFAULT_MODEL_KEYS),
      selectedModel: /** @type {?} */ (undefined),
      showTimezoneSelect: /** @type {?} */ (false),
      useLocalTimezone: /** @type {?} */ (false),
      timePicker: /** @type {?} */ (false),
      inputClass: /** @type {?} */ (DEFAULT_INPUT_CLASS),
      inputDateFormat: /** @type {?} */ (null),
      viewDateFormat: /** @type {?} */ (DEFAULT_DATE_FROMAT),
      outputDateFormat: /** @type {?} */ (DEFAULT_DATE_FROMAT),
      singleDatePicker: /** @type {?} */ (false),
      componentDisabled: /** @type {?} */ (false),
      placeholder: /** @type {?} */ ("Select Date"),
      showRowNumber: /** @type {?} */ (true),
      availableRanges: /** @type {?} */ ({}),
      showRanges: /** @type {?} */ (true),
      disableWeekends: /** @type {?} */ (false),
      disableWeekdays: /** @type {?} */ (false),
      retailCalendar: /** @type {?} */ (false),
      displayBeginDate: /** @type {?} */ (false),
      displayEndDate: /** @type {?} */ (false),
      ariaLabels: /** @type {?} */ (this.getDefaultAriaLabelOptions())
    };
  }
  /**
   * @param {?} date
   * @param {?=} format
   * @return {?}
   */
  formatDateToDefaultFormat(date, format = DEFAULT_DATE_FROMAT) {
    /** @type {?} */
    let fromattedDate = null;
    if (date) {
      if (!isNaN(Number(date))) {
        fromattedDate = moment(date).format(DEFAULT_DATE_FROMAT);
      } else {
        if (!format) {
          format = moment(date)._f;
        } else {
          if (format != moment(date)._f) {
            console.warn(
              "M1 Date Range Picker: The provided Input Date Format and provided Date are not in same format"
            );
          }
        }
        if (!format) {
          console.warn(
            "M1 Date Range Picker: The provided date is not in any known format. Please pass the format or pass the date in any known format"
          );
        }
        fromattedDate = moment(date, format).format(DEFAULT_DATE_FROMAT);
      }
    }
    return fromattedDate;
  }
  /**
   * @param {?} time
   * @return {?}
   */
  formatTimeToDefaultFormat(time) {
    /** @type {?} */
    let formattedTime = null;
    if (time) {
      if (time.indexOf(":") > -1) {
        if (time.indexOf("AM") > -1 || time.indexOf("PM") > -1) {
          formattedTime = moment(time, "h:mm A").format(DEFAULT_TIME_FORMAT);
        } else {
          formattedTime = time;
        }
      } else {
        console.warn("M1 Date Range Picker: The provided time is not in correct format. Format: HH:mm or hh:mm A");
      }
    }
    return formattedTime;
  }
  /**
   * @param {?} type
   * @return {?}
   */
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
  /**
   * @param {?} type
   * @param {?} number
   * @return {?}
   */
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
  /**
   * @param {?} config
   * @return {?}
   */
  createDefaultRanges(config) {
    /** @type {?} */
    const ranges = {};
    /** @type {?} */
    const type = config.type;
    /** @type {?} */
    const maxDate = _.cloneDeep(config.maxDate);
    /** @type {?} */
    const formattedMaxDate = this.formatDateToDefaultFormat(maxDate, DEFAULT_DATE_FROMAT);
    if (type == "daily") {
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
    } else if (type == "weekly") {
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
    } else if (type == "monthly") {
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
    } else if (type == "quarterly") {
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
    } else if (type == "yearly") {
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
  /**
   * @param {?} config
   * @return {?}
   */
  getSanitizedDateArray(config) {
    /** @type {?} */
    const sanitizedDateArray = [];
    /** @type {?} */
    const type = config.type;
    /** @type {?} */
    const dateArray = config.dateArray;
    /** @type {?} */
    const inputDateFormat = config.inputDateFormat;
    // dateArray can have nulls
    _.forEach(dateArray, (date) => {
      if (date) {
        /** @type {?} */
        let format = null;
        if (isNaN(Number(date))) {
          if (inputDateFormat) {
            format = inputDateFormat;
          } else {
            format = moment(date)._f;
          }
        }
        if (inputDateFormat != moment(date)._f) {
          console.warn(
            "M1 Date Range Picker: Provided inputDateFormat != Date Format in dateArray. Converted dates might not be as expected"
          );
        }
        /** @type {?} */
        let value = format ? moment(date, format).format(format) : moment(date).valueOf();
        if (type == "weekly") {
          value = format
            ? moment(date, format)
                .endOf("week")
                .format(format)
            : moment(date)
                .endOf("week")
                .valueOf();
        } else if (type == "monthly") {
          value = format
            ? moment(date, format)
                .endOf("month")
                .format(format)
            : moment(date)
                .endOf("month")
                .valueOf();
        } else if (type == "quarterly") {
          value = format
            ? moment(date, format)
                .endOf("quarter")
                .format(format)
            : moment(date)
                .endOf("quarter")
                .valueOf();
        } else if (type == "yearly") {
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
            "M1 Date Range Picker: Values in Date Array are not in any known format. Please pass the format or pass the dates in any known format"
          );
        }
      }
    });
    return _.uniqBy(sanitizedDateArray);
  }
  /**
   * @param {?} date
   * @return {?}
   */
  getNumberOfWeeks(date) {
    /** @type {?} */
    let numberOfWeeks = null;
    if (date) {
      /** @type {?} */
      const monthStart = moment(date, DEFAULT_DATE_FROMAT)
        .startOf("month")
        .day();
      /** @type {?} */
      const monthEnd = Number(
        moment(date, DEFAULT_DATE_FROMAT)
          .endOf("month")
          .format("D")
      );
      numberOfWeeks = Math.ceil((monthStart + monthEnd) / 7);
    }
    return numberOfWeeks;
  }
  /**
   * @param {?} year
   * @param {?=} retailCalendar
   * @return {?}
   */
  getYearlyWeekCount(year, retailCalendar) {
    /** @type {?} */
    let weekCount = null;
    if (year) {
      /** @type {?} */
      const yearStartDate = moment(year, "YYYY")
        .startOf("year")
        .format(DEFAULT_DATE_FROMAT);
      /** @type {?} */
      const yearEndDate = moment(year, "YYYY")
        .endOf("year")
        .format(DEFAULT_DATE_FROMAT);
      /** @type {?} */
      const yearEndWeekEndDate = moment(yearEndDate, DEFAULT_DATE_FROMAT)
        .startOf("week")
        .format(DEFAULT_DATE_FROMAT);
      /** @type {?} */
      const yearStartWeekEndDate = moment(yearStartDate, DEFAULT_DATE_FROMAT)
        .endOf("week")
        .format(DEFAULT_DATE_FROMAT);
      /** @type {?} */
      const yearSartWeekNumber = this.getWeekNumber(yearStartWeekEndDate);
      /** @type {?} */
      const yearEndWeekNumber = this.getWeekNumber(yearEndWeekEndDate);
      weekCount = yearEndWeekNumber - yearSartWeekNumber + 1;
    }
    return weekCount;
  }
  /**
   * @param {?} minDate
   * @param {?} maxDate
   * @param {?} selectedYear
   * @return {?}
   */
  getMonthsAvailable(minDate, maxDate, selectedYear) {
    /** @type {?} */
    const months = [];
    if (minDate && maxDate && selectedYear) {
      /** @type {?} */
      let minDatems = moment(minDate, DEFAULT_DATE_FROMAT).valueOf();
      /** @type {?} */
      let maxDatems = moment(maxDate, DEFAULT_DATE_FROMAT).valueOf();
      /** @type {?} */
      const yearStartms = moment()
        .year(selectedYear)
        .startOf("year")
        .valueOf();
      /** @type {?} */
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
      /** @type {?} */
      let minDateMonthNumber = moment(minDatems).month();
      /** @type {?} */
      const diff = moment(maxDatems).diff(moment(minDatems), "months");
      /** @type {?} */
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
  /**
   * @param {?} config
   * @return {?}
   */
  getYearsAvailable(config) {
    /** @type {?} */
    const minDate = config ? config.minDate : "";
    /** @type {?} */
    const maxDate = config ? config.maxDate : "";
    /** @type {?} */
    const years = [];
    if (minDate && maxDate) {
      /** @type {?} */
      const minYear = Number(this.getSelectedYear(config, minDate, "left"));
      /** @type {?} */
      const maxYear = Number(this.getSelectedYear(config, maxDate, "right"));
      /** @type {?} */
      const diff = maxYear - minYear;
      for (let i = 0; i <= diff; i++) {
        years.push(`${minYear + i}`);
      }
    }
    return years.reverse();
  }
  /**
   * @param {?} date
   * @param {?} minDate
   * @param {?} maxDate
   * @param {?} startDate
   * @param {?} endDate
   * @param {?} monthStartDate
   * @param {?} monthEndDate
   * @param {?} config
   * @return {?}
   */
  isDateAvailable(date, minDate, maxDate, startDate, endDate, monthStartDate, monthEndDate, config) {
    /** @type {?} */
    let available = false;
    /** @type {?} */
    const type = config.type;
    /** @type {?} */
    const dateArray = config.dateArray ? config.dateArray : [];
    /** @type {?} */
    const inputDateFormat = config.inputDateFormat;
    /** @type {?} */
    const disableWeekends = config.disableWeekends;
    /** @type {?} */
    const disableWeekdays = config.disableWeekdays;
    if (type == "daily") {
      minDate = minDate > monthStartDate ? minDate : monthStartDate;
      maxDate = maxDate < monthEndDate ? maxDate : monthEndDate;
    }
    // if(date == minDate
    //     || date == maxDate) {
    //   available = true;
    // }
    if (date >= minDate && date <= maxDate) {
      if (dateArray.length > 0) {
        available = _.some(dateArray, (d) => {
          /** @type {?} */
          let format = null;
          if (isNaN(Number(date))) {
            if (inputDateFormat) {
              format = inputDateFormat;
            } else {
              format = moment(date)._f;
            }
          }
          return moment(d, format).valueOf() == date;
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
  /**
   * @param {?} date
   * @param {?} minDate
   * @param {?} maxDate
   * @param {?} startDate
   * @param {?} endDate
   * @param {?} monthStartDate
   * @param {?} monthEndDate
   * @param {?} available
   * @param {?} config
   * @return {?}
   */
  isDateInRange(date, minDate, maxDate, startDate, endDate, monthStartDate, monthEndDate, available, config) {
    /** @type {?} */
    let inRange = false;
    /** @type {?} */
    const type = config.type;
    /** @type {?} */
    const singleDatePicker = config.singleDatePicker;
    if (!singleDatePicker) {
      if (type == "daily") {
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
  /**
   * @param {?} date
   * @param {?} startDate
   * @param {?} endDate
   * @param {?} side
   * @return {?}
   */
  isDateActive(date, startDate, endDate, side) {
    /** @type {?} */
    let active = false;
    if ((date == startDate && side == "left") || (date == endDate && side == "right")) {
      active = true;
    }
    return active;
  }
  /**
   * @param {?} date
   * @param {?} config
   * @return {?}
   */
  isDateToday(date, config) {
    /** @type {?} */
    let today = false;
    /** @type {?} */
    const todayDate = moment()
      .startOf("day")
      .valueOf();
    /** @type {?} */
    const type = config.type;
    /** @type {?} */
    const firstLastDay = this.getFirstLastDay(moment(todayDate).format(DEFAULT_DATE_FROMAT), type);
    /** @type {?} */
    const firstDay = moment(firstLastDay.firstDay, DEFAULT_DATE_FROMAT).valueOf();
    /** @type {?} */
    const lastDay = moment(firstLastDay.lastDay, DEFAULT_DATE_FROMAT).valueOf();
    if (date >= firstDay && date <= lastDay) {
      today = true;
    }
    return today;
  }
  /**
   * @param {?} date
   * @param {?=} format
   * @return {?}
   */
  isWeekday(date, format) {
    return !this.isWeekend(date, format);
  }
  /**
   * @param {?} date
   * @param {?=} format
   * @return {?}
   */
  isWeekend(date, format) {
    if (!format) {
      format = null;
    }
    /** @type {?} */
    const day = moment(date, format).day();
    return day == 0 || day == 6 ? true : false;
  }
  /**
   * @param {?} options
   * @return {?}
   */
  getCalendarRowVariables(options) {
    /** @type {?} */
    const variables = {};
    /** @type {?} */
    const type = options.type;
    /** @type {?} */
    const monthStartWeekNumber = options.monthStartWeekNumber;
    /** @type {?} */
    const dateRows = options.dateRows;
    /** @type {?} */
    const year = `${options.year}`;
    if (type == "daily") {
      variables.rowNumber = monthStartWeekNumber + dateRows;
      variables.columns = 6;
    } else if (type == "weekly") {
      // variables.rowNumber = `${(dateRows*2)+1} - ${(dateRows*2)+2}`;
      variables.rowNumber = ``;
      variables.columns = 6;
    } else if (type == "monthly") {
      variables.rowNumber = dateRows + 1;
      variables.columns = 2;
    } else if (type == "quarterly") {
      variables.rowNumber = year.charAt(dateRows);
      variables.columns = 0;
    } else if (type == "yearly") {
      variables.rowNumber = "";
      variables.columns = 0;
    }
    return variables;
  }
  /**
   * @param {?} options
   * @return {?}
   */
  getCalendarRowItemVariables(options) {
    /** @type {?} */
    const variables = {
      currentItemDate: "",
      rowItemText: "",
      itemCount: null
    };
    /** @type {?} */
    const type = options.type;
    /** @type {?} */
    const monthStartWeekNumber = options.monthStartWeekNumber;
    /** @type {?} */
    const yearStartDate = options.yearStartDate;
    /** @type {?} */
    const year = options.year;
    /** @type {?} */
    const rowItem = options.rowItem;
    /** @type {?} */
    const dateRows = options.dateRows;
    /** @type {?} */
    const columns = options.columns;
    /** @type {?} */
    const itemCount = rowItem + dateRows * columns + dateRows;
    /** @type {?} */
    let currentItemDate = "";
    /** @type {?} */
    let rowItemText = "";
    /** @type {?} */
    let firstLastDayObject = {};
    if (type == "daily") {
      if (!_.isNil(monthStartWeekNumber) && !_.isNil(dateRows) && !_.isNil(year)) {
        /** @type {?} */
        const yearStartDate = moment()
          .year(year)
          .startOf("year")
          .format(DEFAULT_DATE_FROMAT);
        currentItemDate = moment(yearStartDate, DEFAULT_DATE_FROMAT)
          .add(monthStartWeekNumber + dateRows - 1, "week")
          .startOf("week")
          .add(rowItem, "day")
          .format(DEFAULT_DATE_FROMAT);
        rowItemText = moment(currentItemDate, DEFAULT_DATE_FROMAT).format("D");
      }
    } else if (type == "weekly") {
      if (!_.isNil(yearStartDate) && !_.isNil(itemCount)) {
        currentItemDate = moment(yearStartDate, DEFAULT_DATE_FROMAT)
          .add(itemCount, "week")
          .endOf("week")
          .format(DEFAULT_DATE_FROMAT);
        /** @type {?} */
        const weekNumber = itemCount + 1;
        rowItemText = `W${weekNumber}`;
      }
    } else if (type == "monthly") {
      if (!_.isNil(itemCount) && !_.isNil(year)) {
        currentItemDate = moment()
          .year(year)
          .month(itemCount)
          .endOf("month")
          .format(DEFAULT_DATE_FROMAT);
        rowItemText = moment(currentItemDate, DEFAULT_DATE_FROMAT).format("MMM");
      }
    } else if (type == "quarterly") {
      if (!_.isNil(itemCount) && !_.isNil(year)) {
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
  /**
   * @param {?} options
   * @return {?}
   */
  isRowIemValid(options) {
    /** @type {?} */
    let valid = false;
    /** @type {?} */
    const type = options.type;
    /** @type {?} */
    const year = options.year;
    /** @type {?} */
    const itemCount = options.itemCount;
    /** @type {?} */
    const retailCalendar = options.retailCalendar;
    /** @type {?} */
    const validWeekCount = this.getYearlyWeekCount(year, retailCalendar);
    if (type == "daily") {
      valid = true;
    } else if (type == "weekly") {
      if (itemCount < validWeekCount) {
        valid = true;
      }
    } else if (type == "monthly") {
      return true;
    } else if (type == "quarterly") {
      return true;
    }
    return valid;
  }
  /**
   * @param {?} config
   * @param {?} returnFormat
   * @return {?}
   */
  formatStartDate(config, returnFormat) {
    /** @type {?} */
    const startDate = config ? config.startDate : null;
    /** @type {?} */
    const type = config ? config.type : "";
    /** @type {?} */
    let formattedStartDate = null;
    if (startDate) {
      formattedStartDate = moment(startDate, DEFAULT_DATE_FROMAT).format(returnFormat);
      if (type == "weekly") {
        formattedStartDate = moment(startDate, DEFAULT_DATE_FROMAT)
          .startOf("week")
          .format(returnFormat);
      } else if (type == "monthly") {
        formattedStartDate = moment(startDate, DEFAULT_DATE_FROMAT)
          .startOf("month")
          .format(returnFormat);
      } else if (type == "quarterly") {
        formattedStartDate = moment(startDate, DEFAULT_DATE_FROMAT)
          .startOf("quarter")
          .format(returnFormat);
      } else if (type == "yearly") {
        formattedStartDate = moment(startDate, DEFAULT_DATE_FROMAT)
          .startOf("year")
          .format(returnFormat);
      }
    }
    return formattedStartDate;
  }
  /**
   * @param {?} config
   * @param {?} date
   * @param {?} side
   * @return {?}
   */
  getSelectedYear(config, date, side) {
    return moment(date, DEFAULT_DATE_FROMAT).format("YYYY");
  }
  /**
   * @param {?} date
   * @param {?} type
   * @return {?}
   */
  getFirstLastDay(date, type) {
    /** @type {?} */
    let firstDay = "";
    /** @type {?} */
    let lastDay = "";
    if (type == "daily") {
      firstDay = lastDay = date;
    } else if (type == "weekly") {
      firstDay = moment(date, DEFAULT_DATE_FROMAT)
        .startOf("week")
        .format(DEFAULT_DATE_FROMAT);
      lastDay = moment(date, DEFAULT_DATE_FROMAT)
        .endOf("week")
        .format(DEFAULT_DATE_FROMAT);
    } else if (type == "monthly") {
      firstDay = moment(date, DEFAULT_DATE_FROMAT)
        .startOf("month")
        .format(DEFAULT_DATE_FROMAT);
      lastDay = moment(date, DEFAULT_DATE_FROMAT)
        .endOf("month")
        .format(DEFAULT_DATE_FROMAT);
    } else if (type == "quarterly") {
      firstDay = moment(date, DEFAULT_DATE_FROMAT)
        .startOf("quarter")
        .format(DEFAULT_DATE_FROMAT);
      lastDay = moment(date, DEFAULT_DATE_FROMAT)
        .endOf("quarter")
        .format(DEFAULT_DATE_FROMAT);
    } else if (type == "yearly") {
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
  /**
   * @return {?}
   */
  getLocalTimezone() {
    /** @type {?} */
    let tz = /\((.*)\)/.exec(new Date().toString())[1];
    if (tz == "Central Europe Standard Time") {
      tz = EU_TZ_CODE;
    } else {
      tz = DEFAULT_TIMEZONE_CODE;
    }
    return tz;
  }
  /**
   * @param {?} tz
   * @param {?} format
   * @param {?=} date
   * @return {?}
   */
  getZoneDate(tz, format, date) {
    if (date) {
      date = moment(date, format)
        .startOf("day")
        .valueOf();
    } else {
      date = moment().valueOf();
    }
    /** @type {?} */
    let today = new Date(date).toLocaleString("en-US", {
      timeZone: TZ_NAMES[tz]
    });
    today = moment(today, "MM/DD/YYYY, hh:mm:ss A");
    return today;
  }
  /**
   * @param {?} tz
   * @param {?} viewDateFormat
   * @return {?}
   */
  getZoneToday(tz, viewDateFormat) {
    /** @type {?} */
    const today = this.getZoneDate(tz, viewDateFormat);
    return moment(today).format(`${viewDateFormat}  hh:mm A`);
  }
  /**
   * @param {?} tz
   * @param {?} format
   * @param {?} date
   * @return {?}
   */
  formatToZoneDate(tz, format, date) {
    /** @type {?} */
    const formattedDate = this.getZoneDate(tz, format, date);
    return moment(formattedDate).format(`${format}`);
  }
  /**
   * @param {?} item
   * @return {?}
   */
  convertToViewTimeItem(item) {
    /** @type {?} */
    let stringified_item = item + "";
    if (stringified_item.length == 1) {
      stringified_item = `0${stringified_item}`;
    }
    return stringified_item;
  }
  /**
   * @param {?} date
   * @return {?}
   */
  getWeekNumber(date) {
    if (date) {
      /** @type {?} */
      const year = moment(date, "YYYY-MM-DD").year();
      /** @type {?} */
      const month = moment(date, "YYYY-MM-DD").month();
      /** @type {?} */
      const day = Number(moment(date, "YYYY-MM-DD").format("D"));
      /** @type {?} */
      const yearStartms = new Date(year, 0, 1);
      /** @type {?} */
      const datems = new Date(year, month, day);
      return Math.ceil(((datems.getTime() - yearStartms.getTime()) / 86400000 + yearStartms.getDay() + 1) / 7);
    } else {
      console.warn("getWeekNumber: Invalid date");
      return this.getNotAvailableText();
    }
  }
}
DateTimeRangePickerUtilityService.decorators = [{ type: Injectable }];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZVRpbWVSYW5nZVBpY2tlci51dGlsaXR5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZGF0ZXRpbWUtcmFuZ2UtcGlja2VyLyIsInNvdXJjZXMiOlsic3JjL2FwcC9kYXRlVGltZVJhbmdlUGlja2VyL2RhdGVUaW1lUmFuZ2VQaWNrZXIudXRpbGl0eS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOztNQUlyRSxNQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQzs7TUFDMUIsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUM7O01BRXJCLFlBQVksR0FBRyx3QkFBd0IsQ0FBQyxPQUFPLENBQUMsSUFBSTs7TUFDcEQsbUJBQW1CLEdBQUcsd0JBQXdCLENBQUMsT0FBTyxDQUFDLFdBQVc7O01BQ2xFLG1CQUFtQixHQUFHLHdCQUF3QixDQUFDLE9BQU8sQ0FBQyxXQUFXOztNQUNsRSxtQkFBbUIsR0FBRyx3QkFBd0IsQ0FBQyxPQUFPLENBQUMsV0FBVzs7TUFDbEUsa0JBQWtCLEdBQUcsd0JBQXdCLENBQUMsT0FBTyxDQUFDLFVBQVU7O01BQ2hFLGdCQUFnQixHQUFHLHdCQUF3QixDQUFDLE9BQU8sQ0FBQyxRQUFROztNQUM1RCxnQkFBZ0IsR0FBRyx3QkFBd0IsQ0FBQyxPQUFPLENBQUMsUUFBUTs7TUFDNUQsZ0JBQWdCLEdBQUcsd0JBQXdCLENBQUMsT0FBTyxDQUFDLFFBQVE7O01BQzVELGtCQUFrQixHQUFHLHdCQUF3QixDQUFDLE9BQU8sQ0FBQyxVQUFVOztNQUNoRSxnQkFBZ0IsR0FBRyx3QkFBd0IsQ0FBQyxPQUFPLENBQUMsUUFBUTs7TUFDNUQsa0JBQWtCLEdBQUcsd0JBQXdCLENBQUMsT0FBTyxDQUFDLFVBQVU7O01BQ2hFLGdCQUFnQixHQUFHLHdC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QUFHLE1BQU0sQ0FBQyxJQUFJLEVBQUUsWUFBWSxDQUFDLENBQUMsSUFBSSxFQUFFOztrQkFDeEMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLEVBQUUsWUFBWSxDQUFDLENBQUMsS0FBSyxFQUFFOztrQkFDMUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQzs7a0JBRXBELFdBQVcsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQzs7a0JBQ2xDLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQztZQUN6QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsR0FBRyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUMsR0FBRyxRQUFRLEdBQUcsV0FBVyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQzFHO2FBQU07WUFDTCxPQUFPLENBQUMsSUFBSSxDQUFDLDZCQUE2QixDQUFDLENBQUM7WUFDNUMsT0FBTyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztTQUNuQztJQUNILENBQUM7OztZQXp1QkYsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgRGF0ZVJhbmdlUGlja2VyQ29uc3RhbnRzIH0gZnJvbSBcIi4vZGF0ZVRpbWVSYW5nZVBpY2tlci5jb25zdGFudHNcIjtcbmltcG9ydCB7IEFyaWFMYWJlbHNPcHRpb25zLCBEYXRlVGltZVJhbmdlUGlja2VyT3B0aW9ucywgRGF0ZVRpbWVSYW5nZVBpY2tlclNldHRpbmdzIH0gZnJvbSBcIi4vaW50ZXJmYWNlcy9pbmRleFwiO1xuXG5kZWNsYXJlIHZhciByZXF1aXJlOiBhbnk7XG5jb25zdCBtb21lbnQgPSByZXF1aXJlKFwibW9tZW50XCIpO1xuY29uc3QgXyA9IHJlcXVpcmUoXCJsb2Rhc2hcIik7XG5cbmNvbnN0IERFRkFVTFRfVFlQRSA9IERhdGVSYW5nZVBpY2tlckNvbnN0YW50cy5ERUZBVUxULlRZUEU7XG5jb25zdCBERUZBVUxUX0lOUFVUX0NMQVNTID0gRGF0ZVJhbmdlUGlja2VyQ29uc3RhbnRzLkRFRkFVTFQuSU5QVVRfQ0xBU1M7XG5jb25zdCBERUZBVUxUX0RBVEVfRlJPTUFUID0gRGF0ZVJhbmdlUGlja2VyQ29uc3RhbnRzLkRFRkFVTFQuREFURV9GUk9NQVQ7XG5jb25zdCBERUZBVUxUX1RJTUVfRk9STUFUID0gRGF0ZVJhbmdlUGlja2VyQ29uc3RhbnRzLkRFRkFVTFQuVElNRV9GT1JNQVQ7XG5jb25zdCBERUZBVUxUX1NUQVJUX0RBVEUgPSBEYXRlUmFuZ2VQaWNrZXJDb25zdGFudHMuREVGQVVMVC5TVEFSVF9EQVRFO1xuY29uc3QgREVGQVVMVF9FTkRfREFURSA9IERhdGVSYW5nZVBpY2tlckNvbnN0YW50cy5ERUZBVUxULkVORF9EQVRFO1xuY29uc3QgREVGQVVMVF9NSU5fREFURSA9IERhdGVSYW5nZVBpY2tlckNvbnN0YW50cy5ERUZBVUxULk1JTl9EQVRFO1xuY29uc3QgREVGQVVMVF9NQVhfREFURSA9IERhdGVSYW5nZVBpY2tlckNvbnN0YW50cy5ERUZBVUxULk1BWF9EQVRFO1xuY29uc3QgREVGQVVMVF9TVEFSVF9USU1FID0gRGF0ZVJhbmdlUGlja2VyQ29uc3RhbnRzLkRFRkFVTFQuU1RBUlRfVElNRTtcbmNvbnN0IERFRkFVTFRfRU5EX1RJTUUgPSBEYXRlUmFuZ2VQaWNrZXJDb25zdGFudHMuREVGQVVMVC5FTkRfVElNRTtcbmNvbnN0IERFRkFVTFRfTU9ERUxfS0VZUyA9IERhdGVSYW5nZVBpY2tlckNvbnN0YW50cy5ERUZBVUxULk1PREVMX0tFWVM7XG5jb25zdCBNT05USFNfQVZBSUxBQkxFID0gRGF0ZVJhbmdlUGlja2VyQ29uc3RhbnRzLkNPTlNUQU5ULk1PTlRIU19BVkFJTEFCTEU7XG5jb25zdCBERUZBVUxUX1RJTUVaT05FX0NPREUgPSBEYXRlUmFuZ2VQaWNrZXJDb25zdGFudHMuREVGQVVMVC5UWl9DT0RFO1xuY29uc3QgRVVfVFpfQ09ERSA9IERhdGVSYW5nZVBpY2tlckNvbnN0YW50cy5DT05TVEFOVC5FVV9UWl9DT0RFO1xuY29uc3QgVFpfTkFNRVMgPSBEYXRlUmFuZ2VQaWNrZXJDb25zdGFudHMuQ09OU1RBTlQuVFpfTkFNRVM7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEYXRlVGltZVJhbmdlUGlja2VyVXRpbGl0eVNlcnZpY2Uge1xuICBwdWJsaWMgZ2V0Tm90QXZhaWxhYmxlVGV4dCgpOiBzdHJpbmcge1xuICAgIHJldHVybiBcIk4vQVwiO1xuICB9XG4gIHB1YmxpYyBnZXREZWZhdWx0QXJpYUxhYmVsT3B0aW9ucygpOiBBcmlhTGFiZWxzT3B0aW9ucyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlucHV0RmllbGQ6IFwiRGF0ZSBSYW5nZSBJbnB1dCBGaWVsZFwiIGFzIHN0cmluZyxcbiAgICB9O1xuICB9XG5cbiAgcHVibGljIGdldERlZmF1bHRPcHRpb25zKCk6IERhdGVUaW1lUmFuZ2VQaWNrZXJPcHRpb25zIHtcbiAgICByZXR1cm4ge1xuICAgICAgZGF0ZUFycmF5OiBbXSBhcyBzdHJpbmdbXSxcbiAgICAgIHN0YXJ0RGF0ZTogREVGQVVMVF9TVEFSVF9EQVRFIGFzIHN0cmluZyxcbiAgICAgIGVuZERhdGU6IERFRkFVTFRfRU5EX0RBVEUgYXMgc3RyaW5nLFxuICAgICAgbWluRGF0ZTogREVGQVVMVF9NSU5fREFURSBhcyBzdHJpbmcsXG4gICAgICBtYXhEYXRlOiBERUZBVUxUX01BWF9EQVRFIGFzIHN0cmluZyxcbiAgICAgIHN0YXJ0VGltZTogREVGQVVMVF9TVEFSVF9USU1FIGFzIHN0cmluZyxcbiAgICAgIGVuZFRpbWU6IERFRkFVTFRfRU5EX1RJTUUgYXMgc3RyaW5nLFxuICAgIH07XG4gIH1cblxuICBwdWJsaWMgZ2V0RGVmYXVsdFNldHRpbmdzKCk6IERhdGVUaW1lUmFuZ2VQaWNrZXJTZXR0aW5ncyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IERFRkFVTFRfVFlQRSBhcyBzdHJpbmcsXG4gICAgICBtb2RlbEtleXM6IERFRkFVTFRfTU9ERUxfS0VZUyBhcyBzdHJpbmdbXSxcbiAgICAgIHNlbGVjdGVkTW9kZWw6IHVuZGVmaW5lZCBhcyBzdHJpbmcsXG4gICAgICBzaG93VGltZXpvbmVTZWxlY3Q6IGZhbHNlIGFzIGJvb2xlYW4sXG4gICAgICB1c2VMb2NhbFRpbWV6b25lOiBmYWxzZSBhcyBib29sZWFuLFxuICAgICAgdGltZVBpY2tlcjogZmFsc2UgYXMgYm9vbGVhbixcbiAgICAgIGlucHV0Q2xhc3M6IERFRkFVTFRfSU5QVVRfQ0xBU1MgYXMgc3RyaW5nLFxuICAgICAgaW5wdXREYXRlRm9ybWF0OiBudWxsIGFzIHN0cmluZyxcbiAgICAgIHZpZXdEYXRlRm9ybWF0OiBERUZBVUxUX0RBVEVfRlJPTUFUIGFzIHN0cmluZyxcbiAgICAgIG91dHB1dERhdGVGb3JtYXQ6IERFRkFVTFRfREFURV9GUk9NQVQgYXMgc3RyaW5nLFxuICAgICAgc2luZ2xlRGF0ZVBpY2tlcjogZmFsc2UgYXMgYm9vbGVhbixcbiAgICAgIGNvbXBvbmVudERpc2FibGVkOiBmYWxzZSBhcyBib29sZWFuLFxuICAgICAgcGxhY2Vob2xkZXI6IFwiU2VsZWN0IERhdGVcIiBhcyBzdHJpbmcsXG4gICAgICBzaG93Um93TnVtYmVyOiB0cnVlIGFzIGJvb2xlYW4sXG4gICAgICBhdmFpbGFibGVSYW5nZXM6IHt9IGFzIE9iamVjdCxcbiAgICAgIHNob3dSYW5nZXM6IHRydWUgYXMgYm9vbGVhbixcbiAgICAgIGRpc2FibGVXZWVrZW5kczogZmFsc2UgYXMgYm9vbGVhbixcbiAgICAgIGRpc2FibGVXZWVrZGF5czogZmFsc2UgYXMgYm9vbGVhbixcbiAgICAgIHJldGFpbENhbGVuZGFyOiBmYWxzZSBhcyBib29sZWFuLFxuICAgICAgZGlzcGxheUJlZ2luRGF0ZTogZmFsc2UgYXMgYm9vbGVhbixcbiAgICAgIGRpc3BsYXlFbmREYXRlOiBmYWxzZSBhcyBib29sZWFuLFxuICAgICAgYXJpYUxhYmVsczogdGhpcy5nZXREZWZhdWx0QXJpYUxhYmVsT3B0aW9ucygpIGFzIEFyaWFMYWJlbHNPcHRpb25zLFxuICAgIH07XG4gIH1cblxuICBwdWJsaWMgZm9ybWF0RGF0ZVRvRGVmYXVsdEZvcm1hdChkYXRlLCBmb3JtYXQgPSBERUZBVUxUX0RBVEVfRlJPTUFUKTogc3RyaW5nIHtcbiAgICBsZXQgZnJvbWF0dGVkRGF0ZSA9IG51bGw7XG4gICAgaWYgKGRhdGUpIHtcbiAgICAgIGlmICghaXNOYU4oTnVtYmVyKGRhdGUpKSkge1xuICAgICAgICBmcm9tYXR0ZWREYXRlID0gbW9tZW50KGRhdGUpLmZvcm1hdChERUZBVUxUX0RBVEVfRlJPTUFUKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghZm9ybWF0KSB7XG4gICAgICAgICAgZm9ybWF0ID0gbW9tZW50KGRhdGUpLl9mO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChmb3JtYXQgIT0gbW9tZW50KGRhdGUpLl9mKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIFwiTTEgRGF0ZSBSYW5nZSBQaWNrZXI6IFRoZSBwcm92aWRlZCBJbnB1dCBEYXRlIEZvcm1hdCBhbmQgcHJvdmlkZWQgRGF0ZSBhcmUgbm90IGluIHNhbWUgZm9ybWF0XCIsXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIWZvcm1hdCkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIFwiTTEgRGF0ZSBSYW5nZSBQaWNrZXI6IFRoZSBwcm92aWRlZCBkYXRlIGlzIG5vdCBpbiBhbnkga25vd24gZm9ybWF0LiBQbGVhc2UgcGFzcyB0aGUgZm9ybWF0IG9yIHBhc3MgdGhlIGRhdGUgaW4gYW55IGtub3duIGZvcm1hdFwiLFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgZnJvbWF0dGVkRGF0ZSA9IG1vbWVudChkYXRlLCBmb3JtYXQpLmZvcm1hdChERUZBVUxUX0RBVEVfRlJPTUFUKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZnJvbWF0dGVkRGF0ZTtcbiAgfVxuXG4gIHB1YmxpYyBmb3JtYXRUaW1lVG9EZWZhdWx0Rm9ybWF0KHRpbWUpIHtcbiAgICBsZXQgZm9ybWF0dGVkVGltZSA9IG51bGw7XG4gICAgaWYgKHRpbWUpIHtcbiAgICAgIGlmICh0aW1lLmluZGV4T2YoXCI6XCIpID4gLTEpIHtcbiAgICAgICAgaWYgKHRpbWUuaW5kZXhPZihcIkFNXCIpID4gLTEgfHwgdGltZS5pbmRleE9mKFwiUE1cIikgPiAtMSkge1xuICAgICAgICAgIGZvcm1hdHRlZFRpbWUgPSBtb21lbnQodGltZSwgXCJoOm1tIEFcIikuZm9ybWF0KERFRkFVTFRfVElNRV9GT1JNQVQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZvcm1hdHRlZFRpbWUgPSB0aW1lO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLndhcm4oXCJNMSBEYXRlIFJhbmdlIFBpY2tlcjogVGhlIHByb3ZpZGVkIHRpbWUgaXMgbm90IGluIGNvcnJlY3QgZm9ybWF0LiBGb3JtYXQ6IEhIOm1tIG9yIGhoOm1tIEFcIik7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmb3JtYXR0ZWRUaW1lO1xuICB9XG5cbiAgcHVibGljIGdldEZyZXF1ZW5jeUNvbHVtbkhlYWRlcih0eXBlKSB7XG4gICAgcmV0dXJuICgoKSA9PiB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSBcImRhaWx5XCI6XG4gICAgICAgICAgcmV0dXJuIFwiVyNcIjtcbiAgICAgICAgY2FzZSBcIndlZWtseVwiOlxuICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgICBjYXNlIFwibW9udGhseVwiOlxuICAgICAgICAgIHJldHVybiBcIlEjXCI7XG4gICAgICAgIGNhc2UgXCJxdWFydGVybHlcIjpcbiAgICAgICAgICByZXR1cm4gXCJZZWFyXCI7XG4gICAgICAgIGNhc2UgXCJ5ZWFybHlcIjpcbiAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgIH1cbiAgICB9KSgpO1xuICB9XG5cbiAgcHVibGljIGdldENhbGVuZGFyUm93TnVtYmVyVGV4dCh0eXBlLCBudW1iZXIpIHtcbiAgICByZXR1cm4gKCgpID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlIFwiZGFpbHlcIjpcbiAgICAgICAgICByZXR1cm4gYFcke251bWJlcn1gO1xuICAgICAgICBjYXNlIFwid2Vla2x5XCI6XG4gICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgIGNhc2UgXCJtb250aGx5XCI6XG4gICAgICAgICAgcmV0dXJuIGBRJHtudW1iZXJ9YDtcbiAgICAgICAgY2FzZSBcInF1YXJ0ZXJseVwiOlxuICAgICAgICAgIHJldHVybiBgJHtudW1iZXJ9YDtcbiAgICAgICAgY2FzZSBcInllYXJseVwiOlxuICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgfVxuICAgIH0pKCk7XG4gIH1cblxuICBwdWJsaWMgY3JlYXRlRGVmYXVsdFJhbmdlcyhjb25maWcpOiBPYmplY3Qge1xuICAgIGNvbnN0IHJhbmdlcyA9IHt9O1xuICAgIGNvbnN0IHR5cGUgPSBjb25maWcudHlwZTtcbiAgICBjb25zdCBtYXhEYXRlID0gXy5jbG9uZURlZXAoY29uZmlnLm1heERhdGUpO1xuICAgIGNvbnN0IGZvcm1hdHRlZE1heERhdGUgPSB0aGlzLmZvcm1hdERhdGVUb0RlZmF1bHRGb3JtYXQobWF4RGF0ZSwgREVGQVVMVF9EQVRFX0ZST01BVCk7XG5cbiAgICBpZiAodHlwZSA9PSBcImRhaWx5XCIpIHtcbiAgICAgIHJhbmdlc1tcIkxhc3QgNyBEYXlzXCJdID0ge1xuICAgICAgICBzdGFydERhdGU6IG1vbWVudChmb3JtYXR0ZWRNYXhEYXRlLCBERUZBVUxUX0RBVEVfRlJPTUFUKVxuICAgICAgICAgIC5zdWJ0cmFjdCg2LCBcImRheXNcIilcbiAgICAgICAgICAuZm9ybWF0KERFRkFVTFRfREFURV9GUk9NQVQpLFxuICAgICAgICBlbmREYXRlOiBmb3JtYXR0ZWRNYXhEYXRlLFxuICAgICAgfTtcbiAgICAgIHJhbmdlc1tcIkxhc3QgMzAgRGF5c1wiXSA9IHtcbiAgICAgICAgc3RhcnREYXRlOiBtb21lbnQoZm9ybWF0dGVkTWF4RGF0ZSwgREVGQVVMVF9EQVRFX0ZST01BVClcbiAgICAgICAgICAuc3VidHJhY3QoMjksIFwiZGF5c1wiKVxuICAgICAgICAgIC5mb3JtYXQoREVGQVVMVF9EQVRFX0ZST01BVCksXG4gICAgICAgIGVuZERhdGU6IGZvcm1hdHRlZE1heERhdGUsXG4gICAgICB9O1xuICAgICAgcmFuZ2VzW1wiTGFzdCA5MCBEYXlzXCJdID0ge1xuICAgICAgICBzdGFydERhdGU6IG1vbWVudChmb3JtYXR0ZWRNYXhEYXRlLCBERUZBVUxUX0RBVEVfRlJPTUFUKVxuICAgICAgICAgIC5zdWJ0cmFjdCg4OSwgXCJkYXlzXCIpXG4gICAgICAgICAgLmZvcm1hdChERUZBVUxUX0RBVEVfRlJPTUFUKSxcbiAgICAgICAgZW5kRGF0ZTogZm9ybWF0dGVkTWF4RGF0ZSxcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmICh0eXBlID09IFwid2Vla2x5XCIpIHtcbiAgICAgIHJhbmdlc1tcIkxhc3QgNCBXZWVrc1wiXSA9IHtcbiAgICAgICAgc3RhcnREYXRlOiBtb21lbnQoZm9ybWF0dGVkTWF4RGF0ZSwgREVGQVVMVF9EQVRFX0ZST01BVClcbiAgICAgICAgICAuc3VidHJhY3QoMywgXCJ3ZWVrc1wiKVxuICAgICAgICAgIC5mb3JtYXQoREVGQVVMVF9EQVRFX0ZST01BVCksXG4gICAgICAgIGVuZERhdGU6IGZvcm1hdHRlZE1heERhdGUsXG4gICAgICB9O1xuICAgICAgcmFuZ2VzW1wiTGFzdCAxMyBXZWVrc1wiXSA9IHtcbiAgICAgICAgc3RhcnREYXRlOiBtb21lbnQoZm9ybWF0dGVkTWF4RGF0ZSwgREVGQVVMVF9EQVRFX0ZST01BVClcbiAgICAgICAgICAuc3VidHJhY3QoMTIsIFwid2Vla3NcIilcbiAgICAgICAgICAuZm9ybWF0KERFRkFVTFRfREFURV9GUk9NQVQpLFxuICAgICAgICBlbmREYXRlOiBmb3JtYXR0ZWRNYXhEYXRlLFxuICAgICAgfTtcbiAgICAgIHJhbmdlc1tcIkxhc3QgMjYgV2Vla3NcIl0gPSB7XG4gICAgICAgIHN0YXJ0RGF0ZTogbW9tZW50KGZvcm1hdHRlZE1heERhdGUsIERFRkFVTFRfREFURV9GUk9NQVQpXG4gICAgICAgICAgLnN1YnRyYWN0KDI1LCBcIndlZWtzXCIpXG4gICAgICAgICAgLmZvcm1hdChERUZBVUxUX0RBVEVfRlJPTUFUKSxcbiAgICAgICAgZW5kRGF0ZTogZm9ybWF0dGVkTWF4RGF0ZSxcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmICh0eXBlID09IFwibW9udGhseVwiKSB7XG4gICAgICAvLyBpZihyZXRhaWxDYWxlbmRhcikgPyBzdWJ0cmFjdCgzLCAnbW9udGhzJykuLi4uc28gb24gZm9yICdMYXN0IDMgTW9udGhzJy4uLi5zbyBvblxuICAgICAgcmFuZ2VzW1wiTGFzdCAzIE1vbnRoc1wiXSA9IHtcbiAgICAgICAgc3RhcnREYXRlOiBtb21lbnQoZm9ybWF0dGVkTWF4RGF0ZSwgREVGQVVMVF9EQVRFX0ZST01BVClcbiAgICAgICAgICAuc3VidHJhY3QoMiwgXCJtb250aHNcIilcbiAgICAgICAgICAuZm9ybWF0KERFRkFVTFRfREFURV9GUk9NQVQpLFxuICAgICAgICBlbmREYXRlOiBmb3JtYXR0ZWRNYXhEYXRlLFxuICAgICAgfTtcbiAgICAgIHJhbmdlc1tcIkxhc3QgNiBNb250aHNcIl0gPSB7XG4gICAgICAgIHN0YXJ0RGF0ZTogbW9tZW50KGZvcm1hdHRlZE1heERhdGUsIERFRkFVTFRfREFURV9GUk9NQVQpXG4gICAgICAgICAgLnN1YnRyYWN0KDUsIFwibW9udGhzXCIpXG4gICAgICAgICAgLmZvcm1hdChERUZBVUxUX0RBVEVfRlJPTUFUKSxcbiAgICAgICAgZW5kRGF0ZTogZm9ybWF0dGVkTWF4RGF0ZSxcbiAgICAgIH07XG4gICAgICByYW5nZXNbXCJMYXN0IDkgTW9udGhzXCJdID0ge1xuICAgICAgICBzdGFydERhdGU6IG1vbWVudChmb3JtYXR0ZWRNYXhEYXRlLCBERUZBVUxUX0RBVEVfRlJPTUFUKVxuICAgICAgICAgIC5zdWJ0cmFjdCg4LCBcIm1vbnRoc1wiKVxuICAgICAgICAgIC5mb3JtYXQoREVGQVVMVF9EQVRFX0ZST01BVCksXG4gICAgICAgIGVuZERhdGU6IGZvcm1hdHRlZE1heERhdGUsXG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PSBcInF1YXJ0ZXJseVwiKSB7XG4gICAgICAvLyBpZihyZXRhaWxDYWxlbmRhcikgPyBzdWJ0cmFjdCgxLCAncXVhcnRlcnMnKS4uLi5zbyBvbiBmb3IgJ0xhc3QgMiBRdWFydGVycycuLi4uc28gb25cbiAgICAgIHJhbmdlc1tcIkxhc3QgMiBRdWFydGVyc1wiXSA9IHtcbiAgICAgICAgc3RhcnREYXRlOiBtb21lbnQoZm9ybWF0dGVkTWF4RGF0ZSwgREVGQVVMVF9EQVRFX0ZST01BVClcbiAgICAgICAgICAuc3VidHJhY3QoMSwgXCJxdWFydGVyc1wiKVxuICAgICAgICAgIC5mb3JtYXQoREVGQVVMVF9EQVRFX0ZST01BVCksXG4gICAgICAgIGVuZERhdGU6IGZvcm1hdHRlZE1heERhdGUsXG4gICAgICB9O1xuICAgICAgcmFuZ2VzW1wiTGFzdCA0IFF1YXJ0ZXJzXCJdID0ge1xuICAgICAgICBzdGFydERhdGU6IG1vbWVudChmb3JtYXR0ZWRNYXhEYXRlLCBERUZBVUxUX0RBVEVfRlJPTUFUKVxuICAgICAgICAgIC5zdWJ0cmFjdCgzLCBcInF1YXJ0ZXJzXCIpXG4gICAgICAgICAgLmZvcm1hdChERUZBVUxUX0RBVEVfRlJPTUFUKSxcbiAgICAgICAgZW5kRGF0ZTogZm9ybWF0dGVkTWF4RGF0ZSxcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmICh0eXBlID09IFwieWVhcmx5XCIpIHtcbiAgICAgIHJhbmdlc1tcIkxhc3QgWWVhclwiXSA9IHtcbiAgICAgICAgc3RhcnREYXRlOiBtb21lbnQoZm9ybWF0dGVkTWF4RGF0ZSwgREVGQVVMVF9EQVRFX0ZST01BVClcbiAgICAgICAgICAuc3VidHJhY3QoMSwgXCJ5ZWFyXCIpXG4gICAgICAgICAgLmZvcm1hdChERUZBVUxUX0RBVEVfRlJPTUFUKSxcbiAgICAgICAgZW5kRGF0ZTogZm9ybWF0dGVkTWF4RGF0ZSxcbiAgICAgIH07XG4gICAgfVxuICAgIHJhbmdlc1tcIkN1c3RvbSBSYW5nZVwiXSA9IHsgc3RhcnREYXRlOiBudWxsLCBlbmREYXRlOiBudWxsIH07XG4gICAgcmV0dXJuIHJhbmdlcztcbiAgfVxuXG4gIHB1YmxpYyBnZXRTYW5pdGl6ZWREYXRlQXJyYXkoY29uZmlnKSB7XG4gICAgY29uc3Qgc2FuaXRpemVkRGF0ZUFycmF5ID0gW107XG4gICAgY29uc3QgdHlwZSA9IGNvbmZpZy50eXBlO1xuICAgIGNvbnN0IGRhdGVBcnJheSA9IGNvbmZpZy5kYXRlQXJyYXk7XG4gICAgY29uc3QgaW5wdXREYXRlRm9ybWF0ID0gY29uZmlnLmlucHV0RGF0ZUZvcm1hdDtcblxuICAgIC8vIGRhdGVBcnJheSBjYW4gaGF2ZSBudWxsc1xuICAgIF8uZm9yRWFjaChkYXRlQXJyYXksIChkYXRlKSA9PiB7XG4gICAgICBpZiAoZGF0ZSkge1xuICAgICAgICBsZXQgZm9ybWF0ID0gbnVsbDtcbiAgICAgICAgaWYgKGlzTmFOKE51bWJlcihkYXRlKSkpIHtcbiAgICAgICAgICBpZiAoaW5wdXREYXRlRm9ybWF0KSB7XG4gICAgICAgICAgICBmb3JtYXQgPSBpbnB1dERhdGVGb3JtYXQ7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvcm1hdCA9IG1vbWVudChkYXRlKS5fZjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW5wdXREYXRlRm9ybWF0ICE9IG1vbWVudChkYXRlKS5fZikge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIFwiTTEgRGF0ZSBSYW5nZSBQaWNrZXI6IFByb3ZpZGVkIGlucHV0RGF0ZUZvcm1hdCAhPSBEYXRlIEZvcm1hdCBpbiBkYXRlQXJyYXkuIENvbnZlcnRlZCBkYXRlcyBtaWdodCBub3QgYmUgYXMgZXhwZWN0ZWRcIixcbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHZhbHVlID0gZm9ybWF0ID8gbW9tZW50KGRhdGUsIGZvcm1hdCkuZm9ybWF0KGZvcm1hdCkgOiBtb21lbnQoZGF0ZSkudmFsdWVPZigpO1xuICAgICAgICBpZiAodHlwZSA9PSBcIndlZWtseVwiKSB7XG4gICAgICAgICAgdmFsdWUgPSBmb3JtYXRcbiAgICAgICAgICAgID8gbW9tZW50KGRhdGUsIGZvcm1hdClcbiAgICAgICAgICAgICAgICAuZW5kT2YoXCJ3ZWVrXCIpXG4gICAgICAgICAgICAgICAgLmZvcm1hdChmb3JtYXQpXG4gICAgICAgICAgICA6IG1vbWVudChkYXRlKVxuICAgICAgICAgICAgICAgIC5lbmRPZihcIndlZWtcIilcbiAgICAgICAgICAgICAgICAudmFsdWVPZigpO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT0gXCJtb250aGx5XCIpIHtcbiAgICAgICAgICB2YWx1ZSA9IGZvcm1hdFxuICAgICAgICAgICAgPyBtb21lbnQoZGF0ZSwgZm9ybWF0KVxuICAgICAgICAgICAgICAgIC5lbmRPZihcIm1vbnRoXCIpXG4gICAgICAgICAgICAgICAgLmZvcm1hdChmb3JtYXQpXG4gICAgICAgICAgICA6IG1vbWVudChkYXRlKVxuICAgICAgICAgICAgICAgIC5lbmRPZihcIm1vbnRoXCIpXG4gICAgICAgICAgICAgICAgLnZhbHVlT2YoKTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09IFwicXVhcnRlcmx5XCIpIHtcbiAgICAgICAgICB2YWx1ZSA9IGZvcm1hdFxuICAgICAgICAgICAgPyBtb21lbnQoZGF0ZSwgZm9ybWF0KVxuICAgICAgICAgICAgICAgIC5lbmRPZihcInF1YXJ0ZXJcIilcbiAgICAgICAgICAgICAgICAuZm9ybWF0KGZvcm1hdClcbiAgICAgICAgICAgIDogbW9tZW50KGRhdGUpXG4gICAgICAgICAgICAgICAgLmVuZE9mKFwicXVhcnRlclwiKVxuICAgICAgICAgICAgICAgIC52YWx1ZU9mKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PSBcInllYXJseVwiKSB7XG4gICAgICAgICAgdmFsdWUgPSBmb3JtYXRcbiAgICAgICAgICAgID8gbW9tZW50KGRhdGUsIGZvcm1hdClcbiAgICAgICAgICAgICAgICAuZW5kT2YoXCJ5ZWFyXCIpXG4gICAgICAgICAgICAgICAgLmZvcm1hdChmb3JtYXQpXG4gICAgICAgICAgICA6IG1vbWVudChkYXRlKVxuICAgICAgICAgICAgICAgIC5lbmRPZihcInllYXJcIilcbiAgICAgICAgICAgICAgICAudmFsdWVPZigpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgIHNhbml0aXplZERhdGVBcnJheS5wdXNoKHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBcIk0xIERhdGUgUmFuZ2UgUGlja2VyOiBWYWx1ZXMgaW4gRGF0ZSBBcnJheSBhcmUgbm90IGluIGFueSBrbm93biBmb3JtYXQuIFBsZWFzZSBwYXNzIHRoZSBmb3JtYXQgb3IgcGFzcyB0aGUgZGF0ZXMgaW4gYW55IGtub3duIGZvcm1hdFwiLFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBfLnVuaXFCeShzYW5pdGl6ZWREYXRlQXJyYXkpO1xuICB9XG5cbiAgcHVibGljIGdldE51bWJlck9mV2Vla3MoZGF0ZSk6IG51bWJlciB7XG4gICAgbGV0IG51bWJlck9mV2Vla3MgPSBudWxsO1xuICAgIGlmIChkYXRlKSB7XG4gICAgICBjb25zdCBtb250aFN0YXJ0OiBudW1iZXIgPSBtb21lbnQoZGF0ZSwgREVGQVVMVF9EQVRFX0ZST01BVClcbiAgICAgICAgLnN0YXJ0T2YoXCJtb250aFwiKVxuICAgICAgICAuZGF5KCk7XG4gICAgICBjb25zdCBtb250aEVuZDogbnVtYmVyID0gTnVtYmVyKFxuICAgICAgICBtb21lbnQoZGF0ZSwgREVGQVVMVF9EQVRFX0ZST01BVClcbiAgICAgICAgICAuZW5kT2YoXCJtb250aFwiKVxuICAgICAgICAgIC5mb3JtYXQoXCJEXCIpLFxuICAgICAgKTtcbiAgICAgIG51bWJlck9mV2Vla3MgPSBNYXRoLmNlaWwoKG1vbnRoU3RhcnQgKyBtb250aEVuZCkgLyA3KTtcbiAgICB9XG4gICAgcmV0dXJuIG51bWJlck9mV2Vla3M7XG4gIH1cblxuICBwdWJsaWMgZ2V0WWVhcmx5V2Vla0NvdW50KHllYXIsIHJldGFpbENhbGVuZGFyPykge1xuICAgIGxldCB3ZWVrQ291bnQ6IG51bWJlciA9IG51bGw7XG4gICAgaWYgKHllYXIpIHtcbiAgICAgIGNvbnN0IHllYXJTdGFydERhdGUgPSBtb21lbnQoeWVhciwgXCJZWVlZXCIpXG4gICAgICAgIC5zdGFydE9mKFwieWVhclwiKVxuICAgICAgICAuZm9ybWF0KERFRkFVTFRfREFURV9GUk9NQVQpO1xuICAgICAgY29uc3QgeWVhckVuZERhdGUgPSBtb21lbnQoeWVhciwgXCJZWVlZXCIpXG4gICAgICAgIC5lbmRPZihcInllYXJcIilcbiAgICAgICAgLmZvcm1hdChERUZBVUxUX0RBVEVfRlJPTUFUKTtcbiAgICAgIGNvbnN0IHllYXJFbmRXZWVrRW5kRGF0ZSA9IG1vbWVudCh5ZWFyRW5kRGF0ZSwgREVGQVVMVF9EQVRFX0ZST01BVClcbiAgICAgICAgLnN0YXJ0T2YoXCJ3ZWVrXCIpXG4gICAgICAgIC5mb3JtYXQoREVGQVVMVF9EQVRFX0ZST01BVCk7XG5cbiAgICAgIGNvbnN0IHllYXJTdGFydFdlZWtFbmREYXRlID0gbW9tZW50KHllYXJTdGFydERhdGUsIERFRkFVTFRfREFURV9GUk9NQVQpXG4gICAgICAgIC5lbmRPZihcIndlZWtcIilcbiAgICAgICAgLmZvcm1hdChERUZBVUxUX0RBVEVfRlJPTUFUKTtcblxuICAgICAgY29uc3QgeWVhclNhcnRXZWVrTnVtYmVyID0gdGhpcy5nZXRXZWVrTnVtYmVyKHllYXJTdGFydFdlZWtFbmREYXRlKTtcbiAgICAgIGNvbnN0IHllYXJFbmRXZWVrTnVtYmVyID0gdGhpcy5nZXRXZWVrTnVtYmVyKHllYXJFbmRXZWVrRW5kRGF0ZSk7XG4gICAgICB3ZWVrQ291bnQgPSB5ZWFyRW5kV2Vla051bWJlciAtIHllYXJTYXJ0V2Vla051bWJlciArIDE7XG4gICAgfVxuICAgIHJldHVybiB3ZWVrQ291bnQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0TW9udGhzQXZhaWxhYmxlKG1pbkRhdGUsIG1heERhdGUsIHNlbGVjdGVkWWVhcikge1xuICAgIGNvbnN0IG1vbnRocyA9IFtdO1xuICAgIGlmIChtaW5EYXRlICYmIG1heERhdGUgJiYgc2VsZWN0ZWRZZWFyKSB7XG4gICAgICBsZXQgbWluRGF0ZW1zID0gbW9tZW50KG1pbkRhdGUsIERFRkFVTFRfREFURV9GUk9NQVQpLnZhbHVlT2YoKTtcbiAgICAgIGxldCBtYXhEYXRlbXMgPSBtb21lbnQobWF4RGF0ZSwgREVGQVVMVF9EQVRFX0ZST01BVCkudmFsdWVPZigpO1xuICAgICAgY29uc3QgeWVhclN0YXJ0bXMgPSBtb21lbnQoKVxuICAgICAgICAueWVhcihzZWxlY3RlZFllYXIpXG4gICAgICAgIC5zdGFydE9mKFwieWVhclwiKVxuICAgICAgICAudmFsdWVPZigpO1xuICAgICAgY29uc3QgeWVhckVuZG1zID0gbW9tZW50KClcbiAgICAgICAgLnllYXIoc2VsZWN0ZWRZZWFyKVxuICAgICAgICAuZW5kT2YoXCJ5ZWFyXCIpXG4gICAgICAgIC52YWx1ZU9mKCk7XG5cbiAgICAgIGlmIChtaW5EYXRlbXMgPCB5ZWFyU3RhcnRtcykge1xuICAgICAgICBtaW5EYXRlbXMgPSB5ZWFyU3RhcnRtcztcbiAgICAgIH1cbiAgICAgIGlmIChtYXhEYXRlbXMgPiB5ZWFyRW5kbXMpIHtcbiAgICAgICAgbWF4RGF0ZW1zID0geWVhckVuZG1zO1xuICAgICAgfVxuXG4gICAgICBsZXQgbWluRGF0ZU1vbnRoTnVtYmVyID0gbW9tZW50KG1pbkRhdGVtcykubW9udGgoKTtcbiAgICAgIGNvbnN0IGRpZmY6IG51bWJlciA9IG1vbWVudChtYXhEYXRlbXMpLmRpZmYobW9tZW50KG1pbkRhdGVtcyksIFwibW9udGhzXCIpO1xuICAgICAgY29uc3QgbWF4TW9udGhzID0gZGlmZiA8IE1PTlRIU19BVkFJTEFCTEUubGVuZ3RoID8gZGlmZiA6IE1PTlRIU19BVkFJTEFCTEUubGVuZ3RoO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBtYXhNb250aHM7IGkrKykge1xuICAgICAgICBpZiAobWluRGF0ZU1vbnRoTnVtYmVyID49IE1PTlRIU19BVkFJTEFCTEUubGVuZ3RoKSB7XG4gICAgICAgICAgbW9udGhzLnB1c2goTU9OVEhTX0FWQUlMQUJMRVttaW5EYXRlTW9udGhOdW1iZXIgLSBNT05USFNfQVZBSUxBQkxFLmxlbmd0aF0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1vbnRocy5wdXNoKE1PTlRIU19BVkFJTEFCTEVbbWluRGF0ZU1vbnRoTnVtYmVyXSk7XG4gICAgICAgIH1cbiAgICAgICAgbWluRGF0ZU1vbnRoTnVtYmVyKys7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtb250aHM7XG4gIH1cblxuICBwdWJsaWMgZ2V0WWVhcnNBdmFpbGFibGUoY29uZmlnKSB7XG4gICAgY29uc3QgbWluRGF0ZSA9IGNvbmZpZyA/IGNvbmZpZy5taW5EYXRlIDogXCJcIjtcbiAgICBjb25zdCBtYXhEYXRlID0gY29uZmlnID8gY29uZmlnLm1heERhdGUgOiBcIlwiO1xuICAgIGNvbnN0IHllYXJzID0gW107XG4gICAgaWYgKG1pbkRhdGUgJiYgbWF4RGF0ZSkge1xuICAgICAgY29uc3QgbWluWWVhciA9IE51bWJlcih0aGlzLmdldFNlbGVjdGVkWWVhcihjb25maWcsIG1pbkRhdGUsIFwibGVmdFwiKSk7XG4gICAgICBjb25zdCBtYXhZZWFyID0gTnVtYmVyKHRoaXMuZ2V0U2VsZWN0ZWRZZWFyKGNvbmZpZywgbWF4RGF0ZSwgXCJyaWdodFwiKSk7XG4gICAgICBjb25zdCBkaWZmID0gbWF4WWVhciAtIG1pblllYXI7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IGRpZmY7IGkrKykge1xuICAgICAgICB5ZWFycy5wdXNoKGAke21pblllYXIgKyBpfWApO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4geWVhcnMucmV2ZXJzZSgpO1xuICB9XG5cbiAgcHVibGljIGlzRGF0ZUF2YWlsYWJsZShkYXRlLCBtaW5EYXRlLCBtYXhEYXRlLCBzdGFydERhdGUsIGVuZERhdGUsIG1vbnRoU3RhcnREYXRlLCBtb250aEVuZERhdGUsIGNvbmZpZyk6IGJvb2xlYW4ge1xuICAgIGxldCBhdmFpbGFibGUgPSBmYWxzZTtcbiAgICBjb25zdCB0eXBlID0gY29uZmlnLnR5cGU7XG4gICAgY29uc3QgZGF0ZUFycmF5ID0gY29uZmlnLmRhdGVBcnJheSA/IGNvbmZpZy5kYXRlQXJyYXkgOiBbXTtcbiAgICBjb25zdCBpbnB1dERhdGVGb3JtYXQgPSBjb25maWcuaW5wdXREYXRlRm9ybWF0O1xuICAgIGNvbnN0IGRpc2FibGVXZWVrZW5kcyA9IGNvbmZpZy5kaXNhYmxlV2Vla2VuZHM7XG4gICAgY29uc3QgZGlzYWJsZVdlZWtkYXlzID0gY29uZmlnLmRpc2FibGVXZWVrZGF5cztcbiAgICBpZiAodHlwZSA9PSBcImRhaWx5XCIpIHtcbiAgICAgIG1pbkRhdGUgPSBtaW5EYXRlID4gbW9udGhTdGFydERhdGUgPyBtaW5EYXRlIDogbW9udGhTdGFydERhdGU7XG4gICAgICBtYXhEYXRlID0gbWF4RGF0ZSA8IG1vbnRoRW5kRGF0ZSA/IG1heERhdGUgOiBtb250aEVuZERhdGU7XG4gICAgfVxuXG4gICAgLy8gaWYoZGF0ZSA9PSBtaW5EYXRlXG4gICAgLy8gICAgIHx8IGRhdGUgPT0gbWF4RGF0ZSkge1xuICAgIC8vICAgYXZhaWxhYmxlID0gdHJ1ZTtcbiAgICAvLyB9XG5cbiAgICBpZiAoZGF0ZSA+PSBtaW5EYXRlICYmIGRhdGUgPD0gbWF4RGF0ZSkge1xuICAgICAgaWYgKGRhdGVBcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGF2YWlsYWJsZSA9IF8uc29tZShkYXRlQXJyYXksIChkKSA9PiB7XG4gICAgICAgICAgbGV0IGZvcm1hdCA9IG51bGw7XG4gICAgICAgICAgaWYgKGlzTmFOKE51bWJlcihkYXRlKSkpIHtcbiAgICAgICAgICAgIGlmIChpbnB1dERhdGVGb3JtYXQpIHtcbiAgICAgICAgICAgICAgZm9ybWF0ID0gaW5wdXREYXRlRm9ybWF0O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZm9ybWF0ID0gbW9tZW50KGRhdGUpLl9mO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbW9tZW50KGQsIGZvcm1hdCkudmFsdWVPZigpID09IGRhdGU7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXZhaWxhYmxlID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGF2YWlsYWJsZSkge1xuICAgICAgICBpZiAoZGlzYWJsZVdlZWtlbmRzKSB7XG4gICAgICAgICAgYXZhaWxhYmxlID0gIXRoaXMuaXNXZWVrZW5kKGRhdGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkaXNhYmxlV2Vla2RheXMpIHtcbiAgICAgICAgICBhdmFpbGFibGUgPSAhdGhpcy5pc1dlZWtkYXkoZGF0ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGF2YWlsYWJsZTtcbiAgfVxuXG4gIHB1YmxpYyBpc0RhdGVJblJhbmdlKFxuICAgIGRhdGUsXG4gICAgbWluRGF0ZSxcbiAgICBtYXhEYXRlLFxuICAgIHN0YXJ0RGF0ZSxcbiAgICBlbmREYXRlLFxuICAgIG1vbnRoU3RhcnREYXRlLFxuICAgIG1vbnRoRW5kRGF0ZSxcbiAgICBhdmFpbGFibGUsXG4gICAgY29uZmlnLFxuICApOiBib29sZWFuIHtcbiAgICBsZXQgaW5SYW5nZSA9IGZhbHNlO1xuICAgIGNvbnN0IHR5cGUgPSBjb25maWcudHlwZTtcbiAgICBjb25zdCBzaW5nbGVEYXRlUGlja2VyID0gY29uZmlnLnNpbmdsZURhdGVQaWNrZXI7XG4gICAgaWYgKCFzaW5nbGVEYXRlUGlja2VyKSB7XG4gICAgICBpZiAodHlwZSA9PSBcImRhaWx5XCIpIHtcbiAgICAgICAgbWluRGF0ZSA9IG1vbnRoU3RhcnREYXRlO1xuICAgICAgICBtYXhEYXRlID0gbW9udGhFbmREYXRlO1xuICAgICAgfVxuICAgICAgaWYgKGRhdGUgPj0gc3RhcnREYXRlICYmIGRhdGUgPD0gZW5kRGF0ZSAmJiBkYXRlID49IG1pbkRhdGUgJiYgZGF0ZSA8PSBtYXhEYXRlKSB7XG4gICAgICAgIGlmIChhdmFpbGFibGUpIHtcbiAgICAgICAgICBpblJhbmdlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaW5SYW5nZTtcbiAgfVxuXG4gIHB1YmxpYyBpc0RhdGVBY3RpdmUoZGF0ZSwgc3RhcnREYXRlLCBlbmREYXRlLCBzaWRlKTogYm9vbGVhbiB7XG4gICAgbGV0IGFjdGl2ZSA9IGZhbHNlO1xuICAgIGlmICgoZGF0ZSA9PSBzdGFydERhdGUgJiYgc2lkZSA9PSBcImxlZnRcIikgfHwgKGRhdGUgPT0gZW5kRGF0ZSAmJiBzaWRlID09IFwicmlnaHRcIikpIHtcbiAgICAgIGFjdGl2ZSA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiBhY3RpdmU7XG4gIH1cblxuICBwdWJsaWMgaXNEYXRlVG9kYXkoZGF0ZSwgY29uZmlnKTogYm9vbGVhbiB7XG4gICAgbGV0IHRvZGF5ID0gZmFsc2U7XG4gICAgY29uc3QgdG9kYXlEYXRlID0gbW9tZW50KClcbiAgICAgIC5zdGFydE9mKFwiZGF5XCIpXG4gICAgICAudmFsdWVPZigpO1xuICAgIGNvbnN0IHR5cGUgPSBjb25maWcudHlwZTtcbiAgICBjb25zdCBmaXJzdExhc3REYXkgPSB0aGlzLmdldEZpcnN0TGFzdERheShtb21lbnQodG9kYXlEYXRlKS5mb3JtYXQoREVGQVVMVF9EQVRFX0ZST01BVCksIHR5cGUpO1xuICAgIGNvbnN0IGZpcnN0RGF5ID0gbW9tZW50KGZpcnN0TGFzdERheS5maXJzdERheSwgREVGQVVMVF9EQVRFX0ZST01BVCkudmFsdWVPZigpO1xuICAgIGNvbnN0IGxhc3REYXkgPSBtb21lbnQoZmlyc3RMYXN0RGF5Lmxhc3REYXksIERFRkFVTFRfREFURV9GUk9NQVQpLnZhbHVlT2YoKTtcbiAgICBpZiAoZGF0ZSA+PSBmaXJzdERheSAmJiBkYXRlIDw9IGxhc3REYXkpIHtcbiAgICAgIHRvZGF5ID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHRvZGF5O1xuICB9XG5cbiAgcHVibGljIGlzV2Vla2RheShkYXRlLCBmb3JtYXQ/KSB7XG4gICAgcmV0dXJuICF0aGlzLmlzV2Vla2VuZChkYXRlLCBmb3JtYXQpO1xuICB9XG5cbiAgcHVibGljIGlzV2Vla2VuZChkYXRlLCBmb3JtYXQ/KSB7XG4gICAgaWYgKCFmb3JtYXQpIHtcbiAgICAgIGZvcm1hdCA9IG51bGw7XG4gICAgfVxuICAgIGNvbnN0IGRheSA9IG1vbWVudChkYXRlLCBmb3JtYXQpLmRheSgpO1xuICAgIHJldHVybiBkYXkgPT0gMCB8fCBkYXkgPT0gNiA/IHRydWUgOiBmYWxzZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRDYWxlbmRhclJvd1ZhcmlhYmxlcyhvcHRpb25zKSB7XG4gICAgY29uc3QgdmFyaWFibGVzOiBhbnkgPSB7fTtcbiAgICBjb25zdCB0eXBlID0gb3B0aW9ucy50eXBlO1xuICAgIGNvbnN0IG1vbnRoU3RhcnRXZWVrTnVtYmVyID0gb3B0aW9ucy5tb250aFN0YXJ0V2Vla051bWJlcjtcbiAgICBjb25zdCBkYXRlUm93cyA9IG9wdGlvbnMuZGF0ZVJvd3M7XG4gICAgY29uc3QgeWVhciA9IGAke29wdGlvbnMueWVhcn1gO1xuXG4gICAgaWYgKHR5cGUgPT0gXCJkYWlseVwiKSB7XG4gICAgICB2YXJpYWJsZXMucm93TnVtYmVyID0gbW9udGhTdGFydFdlZWtOdW1iZXIgKyBkYXRlUm93cztcbiAgICAgIHZhcmlhYmxlcy5jb2x1bW5zID0gNjtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT0gXCJ3ZWVrbHlcIikge1xuICAgICAgLy8gdmFyaWFibGVzLnJvd051bWJlciA9IGAkeyhkYXRlUm93cyoyKSsxfSAtICR7KGRhdGVSb3dzKjIpKzJ9YDtcbiAgICAgIHZhcmlhYmxlcy5yb3dOdW1iZXIgPSBgYDtcbiAgICAgIHZhcmlhYmxlcy5jb2x1bW5zID0gNjtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT0gXCJtb250aGx5XCIpIHtcbiAgICAgIHZhcmlhYmxlcy5yb3dOdW1iZXIgPSBkYXRlUm93cyArIDE7XG4gICAgICB2YXJpYWJsZXMuY29sdW1ucyA9IDI7XG4gICAgfSBlbHNlIGlmICh0eXBlID09IFwicXVhcnRlcmx5XCIpIHtcbiAgICAgIHZhcmlhYmxlcy5yb3dOdW1iZXIgPSB5ZWFyLmNoYXJBdChkYXRlUm93cyk7XG4gICAgICB2YXJpYWJsZXMuY29sdW1ucyA9IDA7XG4gICAgfSBlbHNlIGlmICh0eXBlID09IFwieWVhcmx5XCIpIHtcbiAgICAgIHZhcmlhYmxlcy5yb3dOdW1iZXIgPSBcIlwiO1xuICAgICAgdmFyaWFibGVzLmNvbHVtbnMgPSAwO1xuICAgIH1cblxuICAgIHJldHVybiB2YXJpYWJsZXM7XG4gIH1cblxuICBwdWJsaWMgZ2V0Q2FsZW5kYXJSb3dJdGVtVmFyaWFibGVzKG9wdGlvbnMpIHtcbiAgICBjb25zdCB2YXJpYWJsZXM6IGFueSA9IHtcbiAgICAgIGN1cnJlbnRJdGVtRGF0ZTogXCJcIixcbiAgICAgIHJvd0l0ZW1UZXh0OiBcIlwiLFxuICAgICAgaXRlbUNvdW50OiBudWxsLFxuICAgIH07XG4gICAgY29uc3QgdHlwZSA9IG9wdGlvbnMudHlwZTtcbiAgICBjb25zdCBtb250aFN0YXJ0V2Vla051bWJlciA9IG9wdGlvbnMubW9udGhTdGFydFdlZWtOdW1iZXI7XG4gICAgY29uc3QgeWVhclN0YXJ0RGF0ZSA9IG9wdGlvbnMueWVhclN0YXJ0RGF0ZTtcbiAgICBjb25zdCB5ZWFyID0gb3B0aW9ucy55ZWFyO1xuICAgIGNvbnN0IHJvd0l0ZW0gPSBvcHRpb25zLnJvd0l0ZW07XG4gICAgY29uc3QgZGF0ZVJvd3MgPSBvcHRpb25zLmRhdGVSb3dzO1xuICAgIGNvbnN0IGNvbHVtbnMgPSBvcHRpb25zLmNvbHVtbnM7XG4gICAgY29uc3QgaXRlbUNvdW50ID0gcm93SXRlbSArIGRhdGVSb3dzICogY29sdW1ucyArIGRhdGVSb3dzO1xuICAgIGxldCBjdXJyZW50SXRlbURhdGUgPSBcIlwiO1xuICAgIGxldCByb3dJdGVtVGV4dCA9IFwiXCI7XG4gICAgbGV0IGZpcnN0TGFzdERheU9iamVjdDogYW55ID0ge307XG5cbiAgICBpZiAodHlwZSA9PSBcImRhaWx5XCIpIHtcbiAgICAgIGlmICghXy5pc05pbChtb250aFN0YXJ0V2Vla051bWJlcikgJiYgIV8uaXNOaWwoZGF0ZVJvd3MpICYmICFfLmlzTmlsKHllYXIpKSB7XG4gICAgICAgIGNvbnN0IHllYXJTdGFydERhdGUgPSBtb21lbnQoKVxuICAgICAgICAgIC55ZWFyKHllYXIpXG4gICAgICAgICAgLnN0YXJ0T2YoXCJ5ZWFyXCIpXG4gICAgICAgICAgLmZvcm1hdChERUZBVUxUX0RBVEVfRlJPTUFUKTtcbiAgICAgICAgY3VycmVudEl0ZW1EYXRlID0gbW9tZW50KHllYXJTdGFydERhdGUsIERFRkFVTFRfREFURV9GUk9NQVQpXG4gICAgICAgICAgLmFkZChtb250aFN0YXJ0V2Vla051bWJlciArIGRhdGVSb3dzIC0gMSwgXCJ3ZWVrXCIpXG4gICAgICAgICAgLnN0YXJ0T2YoXCJ3ZWVrXCIpXG4gICAgICAgICAgLmFkZChyb3dJdGVtLCBcImRheVwiKVxuICAgICAgICAgIC5mb3JtYXQoREVGQVVMVF9EQVRFX0ZST01BVCk7XG4gICAgICAgIHJvd0l0ZW1UZXh0ID0gbW9tZW50KGN1cnJlbnRJdGVtRGF0ZSwgREVGQVVMVF9EQVRFX0ZST01BVCkuZm9ybWF0KFwiRFwiKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGUgPT0gXCJ3ZWVrbHlcIikge1xuICAgICAgaWYgKCFfLmlzTmlsKHllYXJTdGFydERhdGUpICYmICFfLmlzTmlsKGl0ZW1Db3VudCkpIHtcbiAgICAgICAgY3VycmVudEl0ZW1EYXRlID0gbW9tZW50KHllYXJTdGFydERhdGUsIERFRkFVTFRfREFURV9GUk9NQVQpXG4gICAgICAgICAgLmFkZChpdGVtQ291bnQsIFwid2Vla1wiKVxuICAgICAgICAgIC5lbmRPZihcIndlZWtcIilcbiAgICAgICAgICAuZm9ybWF0KERFRkFVTFRfREFURV9GUk9NQVQpO1xuICAgICAgICBjb25zdCB3ZWVrTnVtYmVyOiBhbnkgPSBpdGVtQ291bnQgKyAxO1xuICAgICAgICByb3dJdGVtVGV4dCA9IGBXJHt3ZWVrTnVtYmVyfWA7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0eXBlID09IFwibW9udGhseVwiKSB7XG4gICAgICBpZiAoIV8uaXNOaWwoaXRlbUNvdW50KSAmJiAhXy5pc05pbCh5ZWFyKSkge1xuICAgICAgICBjdXJyZW50SXRlbURhdGUgPSBtb21lbnQoKVxuICAgICAgICAgIC55ZWFyKHllYXIpXG4gICAgICAgICAgLm1vbnRoKGl0ZW1Db3VudClcbiAgICAgICAgICAuZW5kT2YoXCJtb250aFwiKVxuICAgICAgICAgIC5mb3JtYXQoREVGQVVMVF9EQVRFX0ZST01BVCk7XG4gICAgICAgIHJvd0l0ZW1UZXh0ID0gbW9tZW50KGN1cnJlbnRJdGVtRGF0ZSwgREVGQVVMVF9EQVRFX0ZST01BVCkuZm9ybWF0KFwiTU1NXCIpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZSA9PSBcInF1YXJ0ZXJseVwiKSB7XG4gICAgICBpZiAoIV8uaXNOaWwoaXRlbUNvdW50KSAmJiAhXy5pc05pbCh5ZWFyKSkge1xuICAgICAgICBjdXJyZW50SXRlbURhdGUgPSBtb21lbnQoKVxuICAgICAgICAgIC55ZWFyKHllYXIpXG4gICAgICAgICAgLnF1YXJ0ZXIoaXRlbUNvdW50ICsgMSlcbiAgICAgICAgICAuZW5kT2YoXCJxdWFydGVyXCIpXG4gICAgICAgICAgLmZvcm1hdChERUZBVUxUX0RBVEVfRlJPTUFUKTtcbiAgICAgICAgcm93SXRlbVRleHQgPSBgUXVhcnRlciAke2l0ZW1Db3VudCArIDF9YDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmaXJzdExhc3REYXlPYmplY3QgPSB0aGlzLmdldEZpcnN0TGFzdERheShjdXJyZW50SXRlbURhdGUsIHR5cGUpO1xuXG4gICAgdmFyaWFibGVzLml0ZW1Db3VudCA9IGl0ZW1Db3VudDtcbiAgICB2YXJpYWJsZXMuY3VycmVudEl0ZW1EYXRlID0gY3VycmVudEl0ZW1EYXRlO1xuICAgIHZhcmlhYmxlcy5yb3dJdGVtVGV4dCA9IHJvd0l0ZW1UZXh0O1xuICAgIHZhcmlhYmxlcy5maXJzdERheSA9IGZpcnN0TGFzdERheU9iamVjdC5maXJzdERheTtcbiAgICB2YXJpYWJsZXMubGFzdERheSA9IGZpcnN0TGFzdERheU9iamVjdC5sYXN0RGF5O1xuICAgIHJldHVybiB2YXJpYWJsZXM7XG4gIH1cblxuICBwdWJsaWMgaXNSb3dJZW1WYWxpZChvcHRpb25zKTogYm9vbGVhbiB7XG4gICAgbGV0IHZhbGlkID0gZmFsc2U7XG4gICAgY29uc3QgdHlwZSA9IG9wdGlvbnMudHlwZTtcbiAgICBjb25zdCB5ZWFyID0gb3B0aW9ucy55ZWFyO1xuICAgIGNvbnN0IGl0ZW1Db3VudCA9IG9wdGlvbnMuaXRlbUNvdW50O1xuICAgIGNvbnN0IHJldGFpbENhbGVuZGFyID0gb3B0aW9ucy5yZXRhaWxDYWxlbmRhcjtcbiAgICBjb25zdCB2YWxpZFdlZWtDb3VudCA9IHRoaXMuZ2V0WWVhcmx5V2Vla0NvdW50KHllYXIsIHJldGFpbENhbGVuZGFyKTtcblxuICAgIGlmICh0eXBlID09IFwiZGFpbHlcIikge1xuICAgICAgdmFsaWQgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PSBcIndlZWtseVwiKSB7XG4gICAgICBpZiAoaXRlbUNvdW50IDwgdmFsaWRXZWVrQ291bnQpIHtcbiAgICAgICAgdmFsaWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZSA9PSBcIm1vbnRobHlcIikge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIGlmICh0eXBlID09IFwicXVhcnRlcmx5XCIpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZDtcbiAgfVxuXG4gIHB1YmxpYyBmb3JtYXRTdGFydERhdGUoY29uZmlnLCByZXR1cm5Gb3JtYXQpIHtcbiAgICBjb25zdCBzdGFydERhdGUgPSBjb25maWcgPyBjb25maWcuc3RhcnREYXRlIDogbnVsbDtcbiAgICBjb25zdCB0eXBlID0gY29uZmlnID8gY29uZmlnLnR5cGUgOiBcIlwiO1xuICAgIGxldCBmb3JtYXR0ZWRTdGFydERhdGUgPSBudWxsO1xuXG4gICAgaWYgKHN0YXJ0RGF0ZSkge1xuICAgICAgZm9ybWF0dGVkU3RhcnREYXRlID0gbW9tZW50KHN0YXJ0RGF0ZSwgREVGQVVMVF9EQVRFX0ZST01BVCkuZm9ybWF0KHJldHVybkZvcm1hdCk7XG4gICAgICBpZiAodHlwZSA9PSBcIndlZWtseVwiKSB7XG4gICAgICAgIGZvcm1hdHRlZFN0YXJ0RGF0ZSA9IG1vbWVudChzdGFydERhdGUsIERFRkFVTFRfREFURV9GUk9NQVQpXG4gICAgICAgICAgLnN0YXJ0T2YoXCJ3ZWVrXCIpXG4gICAgICAgICAgLmZvcm1hdChyZXR1cm5Gb3JtYXQpO1xuICAgICAgfSBlbHNlIGlmICh0eXBlID09IFwibW9udGhseVwiKSB7XG4gICAgICAgIGZvcm1hdHRlZFN0YXJ0RGF0ZSA9IG1vbWVudChzdGFydERhdGUsIERFRkFVTFRfREFURV9GUk9NQVQpXG4gICAgICAgICAgLnN0YXJ0T2YoXCJtb250aFwiKVxuICAgICAgICAgIC5mb3JtYXQocmV0dXJuRm9ybWF0KTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PSBcInF1YXJ0ZXJseVwiKSB7XG4gICAgICAgIGZvcm1hdHRlZFN0YXJ0RGF0ZSA9IG1vbWVudChzdGFydERhdGUsIERFRkFVTFRfREFURV9GUk9NQVQpXG4gICAgICAgICAgLnN0YXJ0T2YoXCJxdWFydGVyXCIpXG4gICAgICAgICAgLmZvcm1hdChyZXR1cm5Gb3JtYXQpO1xuICAgICAgfSBlbHNlIGlmICh0eXBlID09IFwieWVhcmx5XCIpIHtcbiAgICAgICAgZm9ybWF0dGVkU3RhcnREYXRlID0gbW9tZW50KHN0YXJ0RGF0ZSwgREVGQVVMVF9EQVRFX0ZST01BVClcbiAgICAgICAgICAuc3RhcnRPZihcInllYXJcIilcbiAgICAgICAgICAuZm9ybWF0KHJldHVybkZvcm1hdCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZvcm1hdHRlZFN0YXJ0RGF0ZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRTZWxlY3RlZFllYXIoY29uZmlnLCBkYXRlLCBzaWRlKTogc3RyaW5nIHtcbiAgICByZXR1cm4gbW9tZW50KGRhdGUsIERFRkFVTFRfREFURV9GUk9NQVQpLmZvcm1hdChcIllZWVlcIik7XG4gIH1cblxuICBwdWJsaWMgZ2V0Rmlyc3RMYXN0RGF5KGRhdGUsIHR5cGUpIHtcbiAgICBsZXQgZmlyc3REYXkgPSBcIlwiO1xuICAgIGxldCBsYXN0RGF5ID0gXCJcIjtcblxuICAgIGlmICh0eXBlID09IFwiZGFpbHlcIikge1xuICAgICAgZmlyc3REYXkgPSBsYXN0RGF5ID0gZGF0ZTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT0gXCJ3ZWVrbHlcIikge1xuICAgICAgZmlyc3REYXkgPSBtb21lbnQoZGF0ZSwgREVGQVVMVF9EQVRFX0ZST01BVClcbiAgICAgICAgLnN0YXJ0T2YoXCJ3ZWVrXCIpXG4gICAgICAgIC5mb3JtYXQoREVGQVVMVF9EQVRFX0ZST01BVCk7XG4gICAgICBsYXN0RGF5ID0gbW9tZW50KGRhdGUsIERFRkFVTFRfREFURV9GUk9NQVQpXG4gICAgICAgIC5lbmRPZihcIndlZWtcIilcbiAgICAgICAgLmZvcm1hdChERUZBVUxUX0RBVEVfRlJPTUFUKTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT0gXCJtb250aGx5XCIpIHtcbiAgICAgIGZpcnN0RGF5ID0gbW9tZW50KGRhdGUsIERFRkFVTFRfREFURV9GUk9NQVQpXG4gICAgICAgIC5zdGFydE9mKFwibW9udGhcIilcbiAgICAgICAgLmZvcm1hdChERUZBVUxUX0RBVEVfRlJPTUFUKTtcbiAgICAgIGxhc3REYXkgPSBtb21lbnQoZGF0ZSwgREVGQVVMVF9EQVRFX0ZST01BVClcbiAgICAgICAgLmVuZE9mKFwibW9udGhcIilcbiAgICAgICAgLmZvcm1hdChERUZBVUxUX0RBVEVfRlJPTUFUKTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT0gXCJxdWFydGVybHlcIikge1xuICAgICAgZmlyc3REYXkgPSBtb21lbnQoZGF0ZSwgREVGQVVMVF9EQVRFX0ZST01BVClcbiAgICAgICAgLnN0YXJ0T2YoXCJxdWFydGVyXCIpXG4gICAgICAgIC5mb3JtYXQoREVGQVVMVF9EQVRFX0ZST01BVCk7XG4gICAgICBsYXN0RGF5ID0gbW9tZW50KGRhdGUsIERFRkFVTFRfREFURV9GUk9NQVQpXG4gICAgICAgIC5lbmRPZihcInF1YXJ0ZXJcIilcbiAgICAgICAgLmZvcm1hdChERUZBVUxUX0RBVEVfRlJPTUFUKTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT0gXCJ5ZWFybHlcIikge1xuICAgICAgZmlyc3REYXkgPSBtb21lbnQoZGF0ZSwgREVGQVVMVF9EQVRFX0ZST01BVClcbiAgICAgICAgLnN0YXJ0T2YoXCJ5ZWFyXCIpXG4gICAgICAgIC5mb3JtYXQoREVGQVVMVF9EQVRFX0ZST01BVCk7XG4gICAgICBsYXN0RGF5ID0gbW9tZW50KGRhdGUsIERFRkFVTFRfREFURV9GUk9NQVQpXG4gICAgICAgIC5lbmRPZihcInllYXJcIilcbiAgICAgICAgLmZvcm1hdChERUZBVUxUX0RBVEVfRlJPTUFUKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgZmlyc3REYXksXG4gICAgICBsYXN0RGF5LFxuICAgIH07XG4gIH1cblxuICBwdWJsaWMgZ2V0TG9jYWxUaW1lem9uZSgpIHtcbiAgICBsZXQgdHogPSAvXFwoKC4qKVxcKS8uZXhlYyhuZXcgRGF0ZSgpLnRvU3RyaW5nKCkpWzFdO1xuXG4gICAgaWYgKHR6ID09IFwiQ2VudHJhbCBFdXJvcGUgU3RhbmRhcmQgVGltZVwiKSB7XG4gICAgICB0eiA9IEVVX1RaX0NPREU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHR6ID0gREVGQVVMVF9USU1FWk9ORV9DT0RFO1xuICAgIH1cblxuICAgIHJldHVybiB0ejtcbiAgfVxuXG4gIHB1YmxpYyBnZXRab25lRGF0ZSh0eiwgZm9ybWF0LCBkYXRlPykge1xuICAgIGlmIChkYXRlKSB7XG4gICAgICBkYXRlID0gbW9tZW50KGRhdGUsIGZvcm1hdClcbiAgICAgICAgLnN0YXJ0T2YoXCJkYXlcIilcbiAgICAgICAgLnZhbHVlT2YoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0ZSA9IG1vbWVudCgpLnZhbHVlT2YoKTtcbiAgICB9XG5cbiAgICBsZXQgdG9kYXkgPSBuZXcgRGF0ZShkYXRlKS50b0xvY2FsZVN0cmluZyhcImVuLVVTXCIsIHtcbiAgICAgIHRpbWVab25lOiBUWl9OQU1FU1t0el0sXG4gICAgfSk7XG4gICAgdG9kYXkgPSBtb21lbnQodG9kYXksIFwiTU0vREQvWVlZWSwgaGg6bW06c3MgQVwiKTtcbiAgICByZXR1cm4gdG9kYXk7XG4gIH1cblxuICBwdWJsaWMgZ2V0Wm9uZVRvZGF5KHR6LCB2aWV3RGF0ZUZvcm1hdCkge1xuICAgIGNvbnN0IHRvZGF5ID0gdGhpcy5nZXRab25lRGF0ZSh0eiwgdmlld0RhdGVGb3JtYXQpO1xuICAgIHJldHVybiBtb21lbnQodG9kYXkpLmZvcm1hdChgJHt2aWV3RGF0ZUZvcm1hdH0gIGhoOm1tIEFgKTtcbiAgfVxuXG4gIHB1YmxpYyBmb3JtYXRUb1pvbmVEYXRlKHR6LCBmb3JtYXQsIGRhdGUpIHtcbiAgICBjb25zdCBmb3JtYXR0ZWREYXRlID0gdGhpcy5nZXRab25lRGF0ZSh0eiwgZm9ybWF0LCBkYXRlKTtcbiAgICByZXR1cm4gbW9tZW50KGZvcm1hdHRlZERhdGUpLmZvcm1hdChgJHtmb3JtYXR9YCk7XG4gIH1cblxuICBwdWJsaWMgY29udmVydFRvVmlld1RpbWVJdGVtKGl0ZW0pIHtcbiAgICBsZXQgc3RyaW5naWZpZWRfaXRlbSA9IGl0ZW0gKyBcIlwiO1xuICAgIGlmIChzdHJpbmdpZmllZF9pdGVtLmxlbmd0aCA9PSAxKSB7XG4gICAgICBzdHJpbmdpZmllZF9pdGVtID0gYDAke3N0cmluZ2lmaWVkX2l0ZW19YDtcbiAgICB9XG4gICAgcmV0dXJuIHN0cmluZ2lmaWVkX2l0ZW07XG4gIH1cblxuICBwdWJsaWMgZ2V0V2Vla051bWJlcihkYXRlKTogYW55IHtcbiAgICBpZiAoZGF0ZSkge1xuICAgICAgY29uc3QgeWVhciA9IG1vbWVudChkYXRlLCBcIllZWVktTU0tRERcIikueWVhcigpO1xuICAgICAgY29uc3QgbW9udGggPSBtb21lbnQoZGF0ZSwgXCJZWVlZLU1NLUREXCIpLm1vbnRoKCk7XG4gICAgICBjb25zdCBkYXkgPSBOdW1iZXIobW9tZW50KGRhdGUsIFwiWVlZWS1NTS1ERFwiKS5mb3JtYXQoXCJEXCIpKTtcblxuICAgICAgY29uc3QgeWVhclN0YXJ0bXMgPSBuZXcgRGF0ZSh5ZWFyLCAwLCAxKTtcbiAgICAgIGNvbnN0IGRhdGVtcyA9IG5ldyBEYXRlKHllYXIsIG1vbnRoLCBkYXkpO1xuICAgICAgcmV0dXJuIE1hdGguY2VpbCgoKGRhdGVtcy5nZXRUaW1lKCkgLSB5ZWFyU3RhcnRtcy5nZXRUaW1lKCkpIC8gODY0MDAwMDAgKyB5ZWFyU3RhcnRtcy5nZXREYXkoKSArIDEpIC8gNyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUud2FybihcImdldFdlZWtOdW1iZXI6IEludmFsaWQgZGF0ZVwiKTtcbiAgICAgIHJldHVybiB0aGlzLmdldE5vdEF2YWlsYWJsZVRleHQoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==
