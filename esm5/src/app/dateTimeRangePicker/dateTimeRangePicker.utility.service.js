/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from "@angular/core";
import { DateRangePickerConstants } from "./dateTimeRangePicker.constants";
/** @type {?} */
var moment = require("moment");
/** @type {?} */
var _ = require("lodash");
/** @type {?} */
var DEFAULT_TYPE = DateRangePickerConstants.DEFAULT.TYPE;
/** @type {?} */
var DEFAULT_INPUT_CLASS = DateRangePickerConstants.DEFAULT.INPUT_CLASS;
/** @type {?} */
var DEFAULT_DATE_FROMAT = DateRangePickerConstants.DEFAULT.DATE_FROMAT;
/** @type {?} */
var DEFAULT_TIME_FORMAT = DateRangePickerConstants.DEFAULT.TIME_FORMAT;
/** @type {?} */
var DEFAULT_START_DATE = DateRangePickerConstants.DEFAULT.START_DATE;
/** @type {?} */
var DEFAULT_END_DATE = DateRangePickerConstants.DEFAULT.END_DATE;
/** @type {?} */
var DEFAULT_MIN_DATE = DateRangePickerConstants.DEFAULT.MIN_DATE;
/** @type {?} */
var DEFAULT_MAX_DATE = DateRangePickerConstants.DEFAULT.MAX_DATE;
/** @type {?} */
var DEFAULT_START_TIME = DateRangePickerConstants.DEFAULT.START_TIME;
/** @type {?} */
var DEFAULT_END_TIME = DateRangePickerConstants.DEFAULT.END_TIME;
/** @type {?} */
var DEFAULT_MODEL_KEYS = DateRangePickerConstants.DEFAULT.MODEL_KEYS;
/** @type {?} */
var MONTHS_AVAILABLE = DateRangePickerConstants.CONSTANT.MONTHS_AVAILABLE;
/** @type {?} */
var DEFAULT_TIMEZONE_CODE = DateRangePickerConstants.DEFAULT.TZ_CODE;
/** @type {?} */
var EU_TZ_CODE = DateRangePickerConstants.CONSTANT.EU_TZ_CODE;
/** @type {?} */
var TZ_NAMES = DateRangePickerConstants.CONSTANT.TZ_NAMES;
var DateTimeRangePickerUtilityService = /** @class */ (function() {
  function DateTimeRangePickerUtilityService() {}
  /**
   * @return {?}
   */
  DateTimeRangePickerUtilityService.prototype.getNotAvailableText
  /**
   * @return {?}
   */ = function() {
    return "N/A";
  };
  /**
   * @return {?}
   */
  DateTimeRangePickerUtilityService.prototype.getDefaultAriaLabelOptions
  /**
   * @return {?}
   */ = function() {
    return {
      inputField: /** @type {?} */ ("Date Range Input Field")
    };
  };
  /**
   * @return {?}
   */
  DateTimeRangePickerUtilityService.prototype.getDefaultOptions
  /**
   * @return {?}
   */ = function() {
    return {
      dateArray: /** @type {?} */ ([]),
      startDate: /** @type {?} */ (DEFAULT_START_DATE),
      endDate: /** @type {?} */ (DEFAULT_END_DATE),
      minDate: /** @type {?} */ (DEFAULT_MIN_DATE),
      maxDate: /** @type {?} */ (DEFAULT_MAX_DATE),
      startTime: /** @type {?} */ (DEFAULT_START_TIME),
      endTime: /** @type {?} */ (DEFAULT_END_TIME)
    };
  };
  /**
   * @return {?}
   */
  DateTimeRangePickerUtilityService.prototype.getDefaultSettings
  /**
   * @return {?}
   */ = function() {
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
  };
  /**
   * @param {?} date
   * @param {?=} format
   * @return {?}
   */
  DateTimeRangePickerUtilityService.prototype.formatDateToDefaultFormat
  /**
   * @param {?} date
   * @param {?=} format
   * @return {?}
   */ = function(date, format) {
    if (format === void 0) {
      format = DEFAULT_DATE_FROMAT;
    }
    /** @type {?} */
    var fromattedDate = null;
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
  };
  /**
   * @param {?} time
   * @return {?}
   */
  DateTimeRangePickerUtilityService.prototype.formatTimeToDefaultFormat
  /**
   * @param {?} time
   * @return {?}
   */ = function(time) {
    /** @type {?} */
    var formattedTime = null;
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
  };
  /**
   * @param {?} type
   * @return {?}
   */
  DateTimeRangePickerUtilityService.prototype.getFrequencyColumnHeader
  /**
   * @param {?} type
   * @return {?}
   */ = function(type) {
    return (function() {
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
  };
  /**
   * @param {?} type
   * @param {?} number
   * @return {?}
   */
  DateTimeRangePickerUtilityService.prototype.getCalendarRowNumberText
  /**
   * @param {?} type
   * @param {?} number
   * @return {?}
   */ = function(type, number) {
    return (function() {
      switch (type) {
        case "daily":
          return "W" + number;
        case "weekly":
          return "";
        case "monthly":
          return "Q" + number;
        case "quarterly":
          return "" + number;
        case "yearly":
          return "";
      }
    })();
  };
  /**
   * @param {?} config
   * @return {?}
   */
  DateTimeRangePickerUtilityService.prototype.createDefaultRanges
  /**
   * @param {?} config
   * @return {?}
   */ = function(config) {
    /** @type {?} */
    var ranges = {};
    /** @type {?} */
    var type = config.type;
    /** @type {?} */
    var maxDate = _.cloneDeep(config.maxDate);
    /** @type {?} */
    var formattedMaxDate = this.formatDateToDefaultFormat(maxDate, DEFAULT_DATE_FROMAT);
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
  };
  /**
   * @param {?} config
   * @return {?}
   */
  DateTimeRangePickerUtilityService.prototype.getSanitizedDateArray
  /**
   * @param {?} config
   * @return {?}
   */ = function(config) {
    /** @type {?} */
    var sanitizedDateArray = [];
    /** @type {?} */
    var type = config.type;
    /** @type {?} */
    var dateArray = config.dateArray;
    /** @type {?} */
    var inputDateFormat = config.inputDateFormat;
    // dateArray can have nulls
    _.forEach(dateArray, function(date) {
      if (date) {
        /** @type {?} */
        var format = null;
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
        var value = format ? moment(date, format).format(format) : moment(date).valueOf();
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
  };
  /**
   * @param {?} date
   * @return {?}
   */
  DateTimeRangePickerUtilityService.prototype.getNumberOfWeeks
  /**
   * @param {?} date
   * @return {?}
   */ = function(date) {
    /** @type {?} */
    var numberOfWeeks = null;
    if (date) {
      /** @type {?} */
      var monthStart = moment(date, DEFAULT_DATE_FROMAT)
        .startOf("month")
        .day();
      /** @type {?} */
      var monthEnd = Number(
        moment(date, DEFAULT_DATE_FROMAT)
          .endOf("month")
          .format("D")
      );
      numberOfWeeks = Math.ceil((monthStart + monthEnd) / 7);
    }
    return numberOfWeeks;
  };
  /**
   * @param {?} year
   * @param {?=} retailCalendar
   * @return {?}
   */
  DateTimeRangePickerUtilityService.prototype.getYearlyWeekCount
  /**
   * @param {?} year
   * @param {?=} retailCalendar
   * @return {?}
   */ = function(year, retailCalendar) {
    /** @type {?} */
    var weekCount = null;
    if (year) {
      /** @type {?} */
      var yearStartDate = moment(year, "YYYY")
        .startOf("year")
        .format(DEFAULT_DATE_FROMAT);
      /** @type {?} */
      var yearEndDate = moment(year, "YYYY")
        .endOf("year")
        .format(DEFAULT_DATE_FROMAT);
      /** @type {?} */
      var yearEndWeekEndDate = moment(yearEndDate, DEFAULT_DATE_FROMAT)
        .startOf("week")
        .format(DEFAULT_DATE_FROMAT);
      /** @type {?} */
      var yearStartWeekEndDate = moment(yearStartDate, DEFAULT_DATE_FROMAT)
        .endOf("week")
        .format(DEFAULT_DATE_FROMAT);
      /** @type {?} */
      var yearSartWeekNumber = this.getWeekNumber(yearStartWeekEndDate);
      /** @type {?} */
      var yearEndWeekNumber = this.getWeekNumber(yearEndWeekEndDate);
      weekCount = yearEndWeekNumber - yearSartWeekNumber + 1;
    }
    return weekCount;
  };
  /**
   * @param {?} minDate
   * @param {?} maxDate
   * @param {?} selectedYear
   * @return {?}
   */
  DateTimeRangePickerUtilityService.prototype.getMonthsAvailable
  /**
   * @param {?} minDate
   * @param {?} maxDate
   * @param {?} selectedYear
   * @return {?}
   */ = function(minDate, maxDate, selectedYear) {
    /** @type {?} */
    var months = [];
    if (minDate && maxDate && selectedYear) {
      /** @type {?} */
      var minDatems = moment(minDate, DEFAULT_DATE_FROMAT).valueOf();
      /** @type {?} */
      var maxDatems = moment(maxDate, DEFAULT_DATE_FROMAT).valueOf();
      /** @type {?} */
      var yearStartms = moment()
        .year(selectedYear)
        .startOf("year")
        .valueOf();
      /** @type {?} */
      var yearEndms = moment()
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
      var minDateMonthNumber = moment(minDatems).month();
      /** @type {?} */
      var diff = moment(maxDatems).diff(moment(minDatems), "months");
      /** @type {?} */
      var maxMonths = diff < MONTHS_AVAILABLE.length ? diff : MONTHS_AVAILABLE.length;
      for (var i = 0; i <= maxMonths; i++) {
        if (minDateMonthNumber >= MONTHS_AVAILABLE.length) {
          months.push(MONTHS_AVAILABLE[minDateMonthNumber - MONTHS_AVAILABLE.length]);
        } else {
          months.push(MONTHS_AVAILABLE[minDateMonthNumber]);
        }
        minDateMonthNumber++;
      }
    }
    return months;
  };
  /**
   * @param {?} config
   * @return {?}
   */
  DateTimeRangePickerUtilityService.prototype.getYearsAvailable
  /**
   * @param {?} config
   * @return {?}
   */ = function(config) {
    /** @type {?} */
    var minDate = config ? config.minDate : "";
    /** @type {?} */
    var maxDate = config ? config.maxDate : "";
    /** @type {?} */
    var years = [];
    if (minDate && maxDate) {
      /** @type {?} */
      var minYear = Number(this.getSelectedYear(config, minDate, "left"));
      /** @type {?} */
      var maxYear = Number(this.getSelectedYear(config, maxDate, "right"));
      /** @type {?} */
      var diff = maxYear - minYear;
      for (var i = 0; i <= diff; i++) {
        years.push("" + (minYear + i));
      }
    }
    return years.reverse();
  };
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
  DateTimeRangePickerUtilityService.prototype.isDateAvailable
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
   */ = function(date, minDate, maxDate, startDate, endDate, monthStartDate, monthEndDate, config) {
    /** @type {?} */
    var available = false;
    /** @type {?} */
    var type = config.type;
    /** @type {?} */
    var dateArray = config.dateArray ? config.dateArray : [];
    /** @type {?} */
    var inputDateFormat = config.inputDateFormat;
    /** @type {?} */
    var disableWeekends = config.disableWeekends;
    /** @type {?} */
    var disableWeekdays = config.disableWeekdays;
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
        available = _.some(dateArray, function(d) {
          /** @type {?} */
          var format = null;
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
  };
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
  DateTimeRangePickerUtilityService.prototype.isDateInRange
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
   */ = function(date, minDate, maxDate, startDate, endDate, monthStartDate, monthEndDate, available, config) {
    /** @type {?} */
    var inRange = false;
    /** @type {?} */
    var type = config.type;
    /** @type {?} */
    var singleDatePicker = config.singleDatePicker;
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
  };
  /**
   * @param {?} date
   * @param {?} startDate
   * @param {?} endDate
   * @param {?} side
   * @return {?}
   */
  DateTimeRangePickerUtilityService.prototype.isDateActive
  /**
   * @param {?} date
   * @param {?} startDate
   * @param {?} endDate
   * @param {?} side
   * @return {?}
   */ = function(date, startDate, endDate, side) {
    /** @type {?} */
    var active = false;
    if ((date == startDate && side == "left") || (date == endDate && side == "right")) {
      active = true;
    }
    return active;
  };
  /**
   * @param {?} date
   * @param {?} config
   * @return {?}
   */
  DateTimeRangePickerUtilityService.prototype.isDateToday
  /**
   * @param {?} date
   * @param {?} config
   * @return {?}
   */ = function(date, config) {
    /** @type {?} */
    var today = false;
    /** @type {?} */
    var todayDate = moment()
      .startOf("day")
      .valueOf();
    /** @type {?} */
    var type = config.type;
    /** @type {?} */
    var firstLastDay = this.getFirstLastDay(moment(todayDate).format(DEFAULT_DATE_FROMAT), type);
    /** @type {?} */
    var firstDay = moment(firstLastDay.firstDay, DEFAULT_DATE_FROMAT).valueOf();
    /** @type {?} */
    var lastDay = moment(firstLastDay.lastDay, DEFAULT_DATE_FROMAT).valueOf();
    if (date >= firstDay && date <= lastDay) {
      today = true;
    }
    return today;
  };
  /**
   * @param {?} date
   * @param {?=} format
   * @return {?}
   */
  DateTimeRangePickerUtilityService.prototype.isWeekday
  /**
   * @param {?} date
   * @param {?=} format
   * @return {?}
   */ = function(date, format) {
    return !this.isWeekend(date, format);
  };
  /**
   * @param {?} date
   * @param {?=} format
   * @return {?}
   */
  DateTimeRangePickerUtilityService.prototype.isWeekend
  /**
   * @param {?} date
   * @param {?=} format
   * @return {?}
   */ = function(date, format) {
    if (!format) {
      format = null;
    }
    /** @type {?} */
    var day = moment(date, format).day();
    return day == 0 || day == 6 ? true : false;
  };
  /**
   * @param {?} options
   * @return {?}
   */
  DateTimeRangePickerUtilityService.prototype.getCalendarRowVariables
  /**
   * @param {?} options
   * @return {?}
   */ = function(options) {
    /** @type {?} */
    var variables = {};
    /** @type {?} */
    var type = options.type;
    /** @type {?} */
    var monthStartWeekNumber = options.monthStartWeekNumber;
    /** @type {?} */
    var dateRows = options.dateRows;
    /** @type {?} */
    var year = "" + options.year;
    if (type == "daily") {
      variables.rowNumber = monthStartWeekNumber + dateRows;
      variables.columns = 6;
    } else if (type == "weekly") {
      // variables.rowNumber = `${(dateRows*2)+1} - ${(dateRows*2)+2}`;
      variables.rowNumber = "";
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
  };
  /**
   * @param {?} options
   * @return {?}
   */
  DateTimeRangePickerUtilityService.prototype.getCalendarRowItemVariables
  /**
   * @param {?} options
   * @return {?}
   */ = function(options) {
    /** @type {?} */
    var variables = {
      currentItemDate: "",
      rowItemText: "",
      itemCount: null
    };
    /** @type {?} */
    var type = options.type;
    /** @type {?} */
    var monthStartWeekNumber = options.monthStartWeekNumber;
    /** @type {?} */
    var yearStartDate = options.yearStartDate;
    /** @type {?} */
    var year = options.year;
    /** @type {?} */
    var rowItem = options.rowItem;
    /** @type {?} */
    var dateRows = options.dateRows;
    /** @type {?} */
    var columns = options.columns;
    /** @type {?} */
    var itemCount = rowItem + dateRows * columns + dateRows;
    /** @type {?} */
    var currentItemDate = "";
    /** @type {?} */
    var rowItemText = "";
    /** @type {?} */
    var firstLastDayObject = {};
    if (type == "daily") {
      if (!_.isNil(monthStartWeekNumber) && !_.isNil(dateRows) && !_.isNil(year)) {
        /** @type {?} */
        var yearStartDate_1 = moment()
          .year(year)
          .startOf("year")
          .format(DEFAULT_DATE_FROMAT);
        currentItemDate = moment(yearStartDate_1, DEFAULT_DATE_FROMAT)
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
        var weekNumber = itemCount + 1;
        rowItemText = "W" + weekNumber;
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
        rowItemText = "Quarter " + (itemCount + 1);
      }
    }
    firstLastDayObject = this.getFirstLastDay(currentItemDate, type);
    variables.itemCount = itemCount;
    variables.currentItemDate = currentItemDate;
    variables.rowItemText = rowItemText;
    variables.firstDay = firstLastDayObject.firstDay;
    variables.lastDay = firstLastDayObject.lastDay;
    return variables;
  };
  /**
   * @param {?} options
   * @return {?}
   */
  DateTimeRangePickerUtilityService.prototype.isRowIemValid
  /**
   * @param {?} options
   * @return {?}
   */ = function(options) {
    /** @type {?} */
    var valid = false;
    /** @type {?} */
    var type = options.type;
    /** @type {?} */
    var year = options.year;
    /** @type {?} */
    var itemCount = options.itemCount;
    /** @type {?} */
    var retailCalendar = options.retailCalendar;
    /** @type {?} */
    var validWeekCount = this.getYearlyWeekCount(year, retailCalendar);
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
  };
  /**
   * @param {?} config
   * @param {?} returnFormat
   * @return {?}
   */
  DateTimeRangePickerUtilityService.prototype.formatStartDate
  /**
   * @param {?} config
   * @param {?} returnFormat
   * @return {?}
   */ = function(config, returnFormat) {
    /** @type {?} */
    var startDate = config ? config.startDate : null;
    /** @type {?} */
    var type = config ? config.type : "";
    /** @type {?} */
    var formattedStartDate = null;
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
  };
  /**
   * @param {?} config
   * @param {?} date
   * @param {?} side
   * @return {?}
   */
  DateTimeRangePickerUtilityService.prototype.getSelectedYear
  /**
   * @param {?} config
   * @param {?} date
   * @param {?} side
   * @return {?}
   */ = function(config, date, side) {
    return moment(date, DEFAULT_DATE_FROMAT).format("YYYY");
  };
  /**
   * @param {?} date
   * @param {?} type
   * @return {?}
   */
  DateTimeRangePickerUtilityService.prototype.getFirstLastDay
  /**
   * @param {?} date
   * @param {?} type
   * @return {?}
   */ = function(date, type) {
    /** @type {?} */
    var firstDay = "";
    /** @type {?} */
    var lastDay = "";
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
      firstDay: firstDay,
      lastDay: lastDay
    };
  };
  /**
   * @return {?}
   */
  DateTimeRangePickerUtilityService.prototype.getLocalTimezone
  /**
   * @return {?}
   */ = function() {
    /** @type {?} */
    var tz = /\((.*)\)/.exec(new Date().toString())[1];
    if (tz == "Central Europe Standard Time") {
      tz = EU_TZ_CODE;
    } else {
      tz = DEFAULT_TIMEZONE_CODE;
    }
    return tz;
  };
  /**
   * @param {?} tz
   * @param {?} format
   * @param {?=} date
   * @return {?}
   */
  DateTimeRangePickerUtilityService.prototype.getZoneDate
  /**
   * @param {?} tz
   * @param {?} format
   * @param {?=} date
   * @return {?}
   */ = function(tz, format, date) {
    if (date) {
      date = moment(date, format)
        .startOf("day")
        .valueOf();
    } else {
      date = moment().valueOf();
    }
    /** @type {?} */
    var today = new Date(date).toLocaleString("en-US", {
      timeZone: TZ_NAMES[tz]
    });
    today = moment(today, "MM/DD/YYYY, hh:mm:ss A");
    return today;
  };
  /**
   * @param {?} tz
   * @param {?} viewDateFormat
   * @return {?}
   */
  DateTimeRangePickerUtilityService.prototype.getZoneToday
  /**
   * @param {?} tz
   * @param {?} viewDateFormat
   * @return {?}
   */ = function(tz, viewDateFormat) {
    /** @type {?} */
    var today = this.getZoneDate(tz, viewDateFormat);
    return moment(today).format(viewDateFormat + "  hh:mm A");
  };
  /**
   * @param {?} tz
   * @param {?} format
   * @param {?} date
   * @return {?}
   */
  DateTimeRangePickerUtilityService.prototype.formatToZoneDate
  /**
   * @param {?} tz
   * @param {?} format
   * @param {?} date
   * @return {?}
   */ = function(tz, format, date) {
    /** @type {?} */
    var formattedDate = this.getZoneDate(tz, format, date);
    return moment(formattedDate).format("" + format);
  };
  /**
   * @param {?} item
   * @return {?}
   */
  DateTimeRangePickerUtilityService.prototype.convertToViewTimeItem
  /**
   * @param {?} item
   * @return {?}
   */ = function(item) {
    /** @type {?} */
    var stringified_item = item + "";
    if (stringified_item.length == 1) {
      stringified_item = "0" + stringified_item;
    }
    return stringified_item;
  };
  /**
   * @param {?} date
   * @return {?}
   */
  DateTimeRangePickerUtilityService.prototype.getWeekNumber
  /**
   * @param {?} date
   * @return {?}
   */ = function(date) {
    if (date) {
      /** @type {?} */
      var year = moment(date, "YYYY-MM-DD").year();
      /** @type {?} */
      var month = moment(date, "YYYY-MM-DD").month();
      /** @type {?} */
      var day = Number(moment(date, "YYYY-MM-DD").format("D"));
      /** @type {?} */
      var yearStartms = new Date(year, 0, 1);
      /** @type {?} */
      var datems = new Date(year, month, day);
      return Math.ceil(((datems.getTime() - yearStartms.getTime()) / 86400000 + yearStartms.getDay() + 1) / 7);
    } else {
      console.warn("getWeekNumber: Invalid date");
      return this.getNotAvailableText();
    }
  };
  DateTimeRangePickerUtilityService.decorators = [{ type: Injectable }];
  return DateTimeRangePickerUtilityService;
})();
export { DateTimeRangePickerUtilityService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZVRpbWVSYW5nZVBpY2tlci51dGlsaXR5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZGF0ZXRpbWUtcmFuZ2UtcGlja2VyLyIsInNvdXJjZXMiOlsic3JjL2FwcC9kYXRlVGltZVJhbmdlUGlja2VyL2RhdGVUaW1lUmFuZ2VQaWNrZXIudXRpbGl0eS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOztJQUlyRSxNQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQzs7SUFDMUIsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUM7O0lBRXJCLFlBQVksR0FBRyx3QkFBd0IsQ0FBQyxPQUFPLENBQUMsSUFBSTs7SUFDcEQsbUJBQW1CLEdBQUcsd0JBQXdCLENBQUMsT0FBTyxDQUFDLFdBQVc7O0lBQ2xFLG1CQUFtQixHQUFHLHdCQUF3QixDQUFDLE9BQU8sQ0FBQyxXQUFXOztJQUNsRSxtQkFBbUIsR0FBRyx3QkFBd0IsQ0FBQyxPQUFPLENBQUMsV0FBVzs7SUFDbEUsa0JBQWtCLEdBQUcsd0JBQXdCLENBQUMsT0FBTyxDQUFDLFVBQVU7O0lBQ2hFLGdCQUFnQixHQUFHLHdCQUF3QixDQUFDLE9BQU8sQ0FBQyxRQUFROztJQUM1RCxnQkFBZ0IsR0FBRyx3QkFBd0IsQ0FBQyxPQUFPLENBQUMsUUFBUTs7SUFDNUQsZ0JBQWdCLEdBQUcsd0JBQXdCLENBQUMsT0FBTyxDQUFDLFFBQVE7O0lBQzVELGtCQUFrQixHQUFHLHdCQUF3QixDQUFDLE9BQU8sQ0FBQyxVQUFVOztJQUNoRSxnQkFBZ0IsR0FBRyx3QkFBd0IsQ0FBQyxPQUFPLENBQUMsUUFBUTs7SUFDNUQsa0JBQWtCLEdBQUcsd0JBQXdCLENBQUMsT0FBTyxDQUFDLFVBQVU7O0lBQ2hFLGdCQUFnQixHQUFHLHdC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QVU7O0lBMHVCWCx3Q0FBQztDQUFBLEFBMXVCRCxJQTB1QkM7U0F6dUJZLGlDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgRGF0ZVJhbmdlUGlja2VyQ29uc3RhbnRzIH0gZnJvbSBcIi4vZGF0ZVRpbWVSYW5nZVBpY2tlci5jb25zdGFudHNcIjtcbmltcG9ydCB7IEFyaWFMYWJlbHNPcHRpb25zLCBEYXRlVGltZVJhbmdlUGlja2VyT3B0aW9ucywgRGF0ZVRpbWVSYW5nZVBpY2tlclNldHRpbmdzIH0gZnJvbSBcIi4vaW50ZXJmYWNlcy9pbmRleFwiO1xuXG5kZWNsYXJlIHZhciByZXF1aXJlOiBhbnk7XG5jb25zdCBtb21lbnQgPSByZXF1aXJlKFwibW9tZW50XCIpO1xuY29uc3QgXyA9IHJlcXVpcmUoXCJsb2Rhc2hcIik7XG5cbmNvbnN0IERFRkFVTFRfVFlQRSA9IERhdGVSYW5nZVBpY2tlckNvbnN0YW50cy5ERUZBVUxULlRZUEU7XG5jb25zdCBERUZBVUxUX0lOUFVUX0NMQVNTID0gRGF0ZVJhbmdlUGlja2VyQ29uc3RhbnRzLkRFRkFVTFQuSU5QVVRfQ0xBU1M7XG5jb25zdCBERUZBVUxUX0RBVEVfRlJPTUFUID0gRGF0ZVJhbmdlUGlja2VyQ29uc3RhbnRzLkRFRkFVTFQuREFURV9GUk9NQVQ7XG5jb25zdCBERUZBVUxUX1RJTUVfRk9STUFUID0gRGF0ZVJhbmdlUGlja2VyQ29uc3RhbnRzLkRFRkFVTFQuVElNRV9GT1JNQVQ7XG5jb25zdCBERUZBVUxUX1NUQVJUX0RBVEUgPSBEYXRlUmFuZ2VQaWNrZXJDb25zdGFudHMuREVGQVVMVC5TVEFSVF9EQVRFO1xuY29uc3QgREVGQVVMVF9FTkRfREFURSA9IERhdGVSYW5nZVBpY2tlckNvbnN0YW50cy5ERUZBVUxULkVORF9EQVRFO1xuY29uc3QgREVGQVVMVF9NSU5fREFURSA9IERhdGVSYW5nZVBpY2tlckNvbnN0YW50cy5ERUZBVUxULk1JTl9EQVRFO1xuY29uc3QgREVGQVVMVF9NQVhfREFURSA9IERhdGVSYW5nZVBpY2tlckNvbnN0YW50cy5ERUZBVUxULk1BWF9EQVRFO1xuY29uc3QgREVGQVVMVF9TVEFSVF9USU1FID0gRGF0ZVJhbmdlUGlja2VyQ29uc3RhbnRzLkRFRkFVTFQuU1RBUlRfVElNRTtcbmNvbnN0IERFRkFVTFRfRU5EX1RJTUUgPSBEYXRlUmFuZ2VQaWNrZXJDb25zdGFudHMuREVGQVVMVC5FTkRfVElNRTtcbmNvbnN0IERFRkFVTFRfTU9ERUxfS0VZUyA9IERhdGVSYW5nZVBpY2tlckNvbnN0YW50cy5ERUZBVUxULk1PREVMX0tFWVM7XG5jb25zdCBNT05USFNfQVZBSUxBQkxFID0gRGF0ZVJhbmdlUGlja2VyQ29uc3RhbnRzLkNPTlNUQU5ULk1PTlRIU19BVkFJTEFCTEU7XG5jb25zdCBERUZBVUxUX1RJTUVaT05FX0NPREUgPSBEYXRlUmFuZ2VQaWNrZXJDb25zdGFudHMuREVGQVVMVC5UWl9DT0RFO1xuY29uc3QgRVVfVFpfQ09ERSA9IERhdGVSYW5nZVBpY2tlckNvbnN0YW50cy5DT05TVEFOVC5FVV9UWl9DT0RFO1xuY29uc3QgVFpfTkFNRVMgPSBEYXRlUmFuZ2VQaWNrZXJDb25zdGFudHMuQ09OU1RBTlQuVFpfTkFNRVM7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEYXRlVGltZVJhbmdlUGlja2VyVXRpbGl0eVNlcnZpY2Uge1xuICBwdWJsaWMgZ2V0Tm90QXZhaWxhYmxlVGV4dCgpOiBzdHJpbmcge1xuICAgIHJldHVybiBcIk4vQVwiO1xuICB9XG4gIHB1YmxpYyBnZXREZWZhdWx0QXJpYUxhYmVsT3B0aW9ucygpOiBBcmlhTGFiZWxzT3B0aW9ucyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlucHV0RmllbGQ6IFwiRGF0ZSBSYW5nZSBJbnB1dCBGaWVsZFwiIGFzIHN0cmluZyxcbiAgICB9O1xuICB9XG5cbiAgcHVibGljIGdldERlZmF1bHRPcHRpb25zKCk6IERhdGVUaW1lUmFuZ2VQaWNrZXJPcHRpb25zIHtcbiAgICByZXR1cm4ge1xuICAgICAgZGF0ZUFycmF5OiBbXSBhcyBzdHJpbmdbXSxcbiAgICAgIHN0YXJ0RGF0ZTogREVGQVVMVF9TVEFSVF9EQVRFIGFzIHN0cmluZyxcbiAgICAgIGVuZERhdGU6IERFRkFVTFRfRU5EX0RBVEUgYXMgc3RyaW5nLFxuICAgICAgbWluRGF0ZTogREVGQVVMVF9NSU5fREFURSBhcyBzdHJpbmcsXG4gICAgICBtYXhEYXRlOiBERUZBVUxUX01BWF9EQVRFIGFzIHN0cmluZyxcbiAgICAgIHN0YXJ0VGltZTogREVGQVVMVF9TVEFSVF9USU1FIGFzIHN0cmluZyxcbiAgICAgIGVuZFRpbWU6IERFRkFVTFRfRU5EX1RJTUUgYXMgc3RyaW5nLFxuICAgIH07XG4gIH1cblxuICBwdWJsaWMgZ2V0RGVmYXVsdFNldHRpbmdzKCk6IERhdGVUaW1lUmFuZ2VQaWNrZXJTZXR0aW5ncyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IERFRkFVTFRfVFlQRSBhcyBzdHJpbmcsXG4gICAgICBtb2RlbEtleXM6IERFRkFVTFRfTU9ERUxfS0VZUyBhcyBzdHJpbmdbXSxcbiAgICAgIHNlbGVjdGVkTW9kZWw6IHVuZGVmaW5lZCBhcyBzdHJpbmcsXG4gICAgICBzaG93VGltZXpvbmVTZWxlY3Q6IGZhbHNlIGFzIGJvb2xlYW4sXG4gICAgICB1c2VMb2NhbFRpbWV6b25lOiBmYWxzZSBhcyBib29sZWFuLFxuICAgICAgdGltZVBpY2tlcjogZmFsc2UgYXMgYm9vbGVhbixcbiAgICAgIGlucHV0Q2xhc3M6IERFRkFVTFRfSU5QVVRfQ0xBU1MgYXMgc3RyaW5nLFxuICAgICAgaW5wdXREYXRlRm9ybWF0OiBudWxsIGFzIHN0cmluZyxcbiAgICAgIHZpZXdEYXRlRm9ybWF0OiBERUZBVUxUX0RBVEVfRlJPTUFUIGFzIHN0cmluZyxcbiAgICAgIG91dHB1dERhdGVGb3JtYXQ6IERFRkFVTFRfREFURV9GUk9NQVQgYXMgc3RyaW5nLFxuICAgICAgc2luZ2xlRGF0ZVBpY2tlcjogZmFsc2UgYXMgYm9vbGVhbixcbiAgICAgIGNvbXBvbmVudERpc2FibGVkOiBmYWxzZSBhcyBib29sZWFuLFxuICAgICAgcGxhY2Vob2xkZXI6IFwiU2VsZWN0IERhdGVcIiBhcyBzdHJpbmcsXG4gICAgICBzaG93Um93TnVtYmVyOiB0cnVlIGFzIGJvb2xlYW4sXG4gICAgICBhdmFpbGFibGVSYW5nZXM6IHt9IGFzIE9iamVjdCxcbiAgICAgIHNob3dSYW5nZXM6IHRydWUgYXMgYm9vbGVhbixcbiAgICAgIGRpc2FibGVXZWVrZW5kczogZmFsc2UgYXMgYm9vbGVhbixcbiAgICAgIGRpc2FibGVXZWVrZGF5czogZmFsc2UgYXMgYm9vbGVhbixcbiAgICAgIHJldGFpbENhbGVuZGFyOiBmYWxzZSBhcyBib29sZWFuLFxuICAgICAgZGlzcGxheUJlZ2luRGF0ZTogZmFsc2UgYXMgYm9vbGVhbixcbiAgICAgIGRpc3BsYXlFbmREYXRlOiBmYWxzZSBhcyBib29sZWFuLFxuICAgICAgYXJpYUxhYmVsczogdGhpcy5nZXREZWZhdWx0QXJpYUxhYmVsT3B0aW9ucygpIGFzIEFyaWFMYWJlbHNPcHRpb25zLFxuICAgIH07XG4gIH1cblxuICBwdWJsaWMgZm9ybWF0RGF0ZVRvRGVmYXVsdEZvcm1hdChkYXRlLCBmb3JtYXQgPSBERUZBVUxUX0RBVEVfRlJPTUFUKTogc3RyaW5nIHtcbiAgICBsZXQgZnJvbWF0dGVkRGF0ZSA9IG51bGw7XG4gICAgaWYgKGRhdGUpIHtcbiAgICAgIGlmICghaXNOYU4oTnVtYmVyKGRhdGUpKSkge1xuICAgICAgICBmcm9tYXR0ZWREYXRlID0gbW9tZW50KGRhdGUpLmZvcm1hdChERUZBVUxUX0RBVEVfRlJPTUFUKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghZm9ybWF0KSB7XG4gICAgICAgICAgZm9ybWF0ID0gbW9tZW50KGRhdGUpLl9mO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChmb3JtYXQgIT0gbW9tZW50KGRhdGUpLl9mKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIFwiTTEgRGF0ZSBSYW5nZSBQaWNrZXI6IFRoZSBwcm92aWRlZCBJbnB1dCBEYXRlIEZvcm1hdCBhbmQgcHJvdmlkZWQgRGF0ZSBhcmUgbm90IGluIHNhbWUgZm9ybWF0XCIsXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIWZvcm1hdCkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIFwiTTEgRGF0ZSBSYW5nZSBQaWNrZXI6IFRoZSBwcm92aWRlZCBkYXRlIGlzIG5vdCBpbiBhbnkga25vd24gZm9ybWF0LiBQbGVhc2UgcGFzcyB0aGUgZm9ybWF0IG9yIHBhc3MgdGhlIGRhdGUgaW4gYW55IGtub3duIGZvcm1hdFwiLFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgZnJvbWF0dGVkRGF0ZSA9IG1vbWVudChkYXRlLCBmb3JtYXQpLmZvcm1hdChERUZBVUxUX0RBVEVfRlJPTUFUKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZnJvbWF0dGVkRGF0ZTtcbiAgfVxuXG4gIHB1YmxpYyBmb3JtYXRUaW1lVG9EZWZhdWx0Rm9ybWF0KHRpbWUpIHtcbiAgICBsZXQgZm9ybWF0dGVkVGltZSA9IG51bGw7XG4gICAgaWYgKHRpbWUpIHtcbiAgICAgIGlmICh0aW1lLmluZGV4T2YoXCI6XCIpID4gLTEpIHtcbiAgICAgICAgaWYgKHRpbWUuaW5kZXhPZihcIkFNXCIpID4gLTEgfHwgdGltZS5pbmRleE9mKFwiUE1cIikgPiAtMSkge1xuICAgICAgICAgIGZvcm1hdHRlZFRpbWUgPSBtb21lbnQodGltZSwgXCJoOm1tIEFcIikuZm9ybWF0KERFRkFVTFRfVElNRV9GT1JNQVQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZvcm1hdHRlZFRpbWUgPSB0aW1lO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLndhcm4oXCJNMSBEYXRlIFJhbmdlIFBpY2tlcjogVGhlIHByb3ZpZGVkIHRpbWUgaXMgbm90IGluIGNvcnJlY3QgZm9ybWF0LiBGb3JtYXQ6IEhIOm1tIG9yIGhoOm1tIEFcIik7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmb3JtYXR0ZWRUaW1lO1xuICB9XG5cbiAgcHVibGljIGdldEZyZXF1ZW5jeUNvbHVtbkhlYWRlcih0eXBlKSB7XG4gICAgcmV0dXJuICgoKSA9PiB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSBcImRhaWx5XCI6XG4gICAgICAgICAgcmV0dXJuIFwiVyNcIjtcbiAgICAgICAgY2FzZSBcIndlZWtseVwiOlxuICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgICBjYXNlIFwibW9udGhseVwiOlxuICAgICAgICAgIHJldHVybiBcIlEjXCI7XG4gICAgICAgIGNhc2UgXCJxdWFydGVybHlcIjpcbiAgICAgICAgICByZXR1cm4gXCJZZWFyXCI7XG4gICAgICAgIGNhc2UgXCJ5ZWFybHlcIjpcbiAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgIH1cbiAgICB9KSgpO1xuICB9XG5cbiAgcHVibGljIGdldENhbGVuZGFyUm93TnVtYmVyVGV4dCh0eXBlLCBudW1iZXIpIHtcbiAgICByZXR1cm4gKCgpID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlIFwiZGFpbHlcIjpcbiAgICAgICAgICByZXR1cm4gYFcke251bWJlcn1gO1xuICAgICAgICBjYXNlIFwid2Vla2x5XCI6XG4gICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgIGNhc2UgXCJtb250aGx5XCI6XG4gICAgICAgICAgcmV0dXJuIGBRJHtudW1iZXJ9YDtcbiAgICAgICAgY2FzZSBcInF1YXJ0ZXJseVwiOlxuICAgICAgICAgIHJldHVybiBgJHtudW1iZXJ9YDtcbiAgICAgICAgY2FzZSBcInllYXJseVwiOlxuICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgfVxuICAgIH0pKCk7XG4gIH1cblxuICBwdWJsaWMgY3JlYXRlRGVmYXVsdFJhbmdlcyhjb25maWcpOiBPYmplY3Qge1xuICAgIGNvbnN0IHJhbmdlcyA9IHt9O1xuICAgIGNvbnN0IHR5cGUgPSBjb25maWcudHlwZTtcbiAgICBjb25zdCBtYXhEYXRlID0gXy5jbG9uZURlZXAoY29uZmlnLm1heERhdGUpO1xuICAgIGNvbnN0IGZvcm1hdHRlZE1heERhdGUgPSB0aGlzLmZvcm1hdERhdGVUb0RlZmF1bHRGb3JtYXQobWF4RGF0ZSwgREVGQVVMVF9EQVRFX0ZST01BVCk7XG5cbiAgICBpZiAodHlwZSA9PSBcImRhaWx5XCIpIHtcbiAgICAgIHJhbmdlc1tcIkxhc3QgNyBEYXlzXCJdID0ge1xuICAgICAgICBzdGFydERhdGU6IG1vbWVudChmb3JtYXR0ZWRNYXhEYXRlLCBERUZBVUxUX0RBVEVfRlJPTUFUKVxuICAgICAgICAgIC5zdWJ0cmFjdCg2LCBcImRheXNcIilcbiAgICAgICAgICAuZm9ybWF0KERFRkFVTFRfREFURV9GUk9NQVQpLFxuICAgICAgICBlbmREYXRlOiBmb3JtYXR0ZWRNYXhEYXRlLFxuICAgICAgfTtcbiAgICAgIHJhbmdlc1tcIkxhc3QgMzAgRGF5c1wiXSA9IHtcbiAgICAgICAgc3RhcnREYXRlOiBtb21lbnQoZm9ybWF0dGVkTWF4RGF0ZSwgREVGQVVMVF9EQVRFX0ZST01BVClcbiAgICAgICAgICAuc3VidHJhY3QoMjksIFwiZGF5c1wiKVxuICAgICAgICAgIC5mb3JtYXQoREVGQVVMVF9EQVRFX0ZST01BVCksXG4gICAgICAgIGVuZERhdGU6IGZvcm1hdHRlZE1heERhdGUsXG4gICAgICB9O1xuICAgICAgcmFuZ2VzW1wiTGFzdCA5MCBEYXlzXCJdID0ge1xuICAgICAgICBzdGFydERhdGU6IG1vbWVudChmb3JtYXR0ZWRNYXhEYXRlLCBERUZBVUxUX0RBVEVfRlJPTUFUKVxuICAgICAgICAgIC5zdWJ0cmFjdCg4OSwgXCJkYXlzXCIpXG4gICAgICAgICAgLmZvcm1hdChERUZBVUxUX0RBVEVfRlJPTUFUKSxcbiAgICAgICAgZW5kRGF0ZTogZm9ybWF0dGVkTWF4RGF0ZSxcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmICh0eXBlID09IFwid2Vla2x5XCIpIHtcbiAgICAgIHJhbmdlc1tcIkxhc3QgNCBXZWVrc1wiXSA9IHtcbiAgICAgICAgc3RhcnREYXRlOiBtb21lbnQoZm9ybWF0dGVkTWF4RGF0ZSwgREVGQVVMVF9EQVRFX0ZST01BVClcbiAgICAgICAgICAuc3VidHJhY3QoMywgXCJ3ZWVrc1wiKVxuICAgICAgICAgIC5mb3JtYXQoREVGQVVMVF9EQVRFX0ZST01BVCksXG4gICAgICAgIGVuZERhdGU6IGZvcm1hdHRlZE1heERhdGUsXG4gICAgICB9O1xuICAgICAgcmFuZ2VzW1wiTGFzdCAxMyBXZWVrc1wiXSA9IHtcbiAgICAgICAgc3RhcnREYXRlOiBtb21lbnQoZm9ybWF0dGVkTWF4RGF0ZSwgREVGQVVMVF9EQVRFX0ZST01BVClcbiAgICAgICAgICAuc3VidHJhY3QoMTIsIFwid2Vla3NcIilcbiAgICAgICAgICAuZm9ybWF0KERFRkFVTFRfREFURV9GUk9NQVQpLFxuICAgICAgICBlbmREYXRlOiBmb3JtYXR0ZWRNYXhEYXRlLFxuICAgICAgfTtcbiAgICAgIHJhbmdlc1tcIkxhc3QgMjYgV2Vla3NcIl0gPSB7XG4gICAgICAgIHN0YXJ0RGF0ZTogbW9tZW50KGZvcm1hdHRlZE1heERhdGUsIERFRkFVTFRfREFURV9GUk9NQVQpXG4gICAgICAgICAgLnN1YnRyYWN0KDI1LCBcIndlZWtzXCIpXG4gICAgICAgICAgLmZvcm1hdChERUZBVUxUX0RBVEVfRlJPTUFUKSxcbiAgICAgICAgZW5kRGF0ZTogZm9ybWF0dGVkTWF4RGF0ZSxcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmICh0eXBlID09IFwibW9udGhseVwiKSB7XG4gICAgICAvLyBpZihyZXRhaWxDYWxlbmRhcikgPyBzdWJ0cmFjdCgzLCAnbW9udGhzJykuLi4uc28gb24gZm9yICdMYXN0IDMgTW9udGhzJy4uLi5zbyBvblxuICAgICAgcmFuZ2VzW1wiTGFzdCAzIE1vbnRoc1wiXSA9IHtcbiAgICAgICAgc3RhcnREYXRlOiBtb21lbnQoZm9ybWF0dGVkTWF4RGF0ZSwgREVGQVVMVF9EQVRFX0ZST01BVClcbiAgICAgICAgICAuc3VidHJhY3QoMiwgXCJtb250aHNcIilcbiAgICAgICAgICAuZm9ybWF0KERFRkFVTFRfREFURV9GUk9NQVQpLFxuICAgICAgICBlbmREYXRlOiBmb3JtYXR0ZWRNYXhEYXRlLFxuICAgICAgfTtcbiAgICAgIHJhbmdlc1tcIkxhc3QgNiBNb250aHNcIl0gPSB7XG4gICAgICAgIHN0YXJ0RGF0ZTogbW9tZW50KGZvcm1hdHRlZE1heERhdGUsIERFRkFVTFRfREFURV9GUk9NQVQpXG4gICAgICAgICAgLnN1YnRyYWN0KDUsIFwibW9udGhzXCIpXG4gICAgICAgICAgLmZvcm1hdChERUZBVUxUX0RBVEVfRlJPTUFUKSxcbiAgICAgICAgZW5kRGF0ZTogZm9ybWF0dGVkTWF4RGF0ZSxcbiAgICAgIH07XG4gICAgICByYW5nZXNbXCJMYXN0IDkgTW9udGhzXCJdID0ge1xuICAgICAgICBzdGFydERhdGU6IG1vbWVudChmb3JtYXR0ZWRNYXhEYXRlLCBERUZBVUxUX0RBVEVfRlJPTUFUKVxuICAgICAgICAgIC5zdWJ0cmFjdCg4LCBcIm1vbnRoc1wiKVxuICAgICAgICAgIC5mb3JtYXQoREVGQVVMVF9EQVRFX0ZST01BVCksXG4gICAgICAgIGVuZERhdGU6IGZvcm1hdHRlZE1heERhdGUsXG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PSBcInF1YXJ0ZXJseVwiKSB7XG4gICAgICAvLyBpZihyZXRhaWxDYWxlbmRhcikgPyBzdWJ0cmFjdCgxLCAncXVhcnRlcnMnKS4uLi5zbyBvbiBmb3IgJ0xhc3QgMiBRdWFydGVycycuLi4uc28gb25cbiAgICAgIHJhbmdlc1tcIkxhc3QgMiBRdWFydGVyc1wiXSA9IHtcbiAgICAgICAgc3RhcnREYXRlOiBtb21lbnQoZm9ybWF0dGVkTWF4RGF0ZSwgREVGQVVMVF9EQVRFX0ZST01BVClcbiAgICAgICAgICAuc3VidHJhY3QoMSwgXCJxdWFydGVyc1wiKVxuICAgICAgICAgIC5mb3JtYXQoREVGQVVMVF9EQVRFX0ZST01BVCksXG4gICAgICAgIGVuZERhdGU6IGZvcm1hdHRlZE1heERhdGUsXG4gICAgICB9O1xuICAgICAgcmFuZ2VzW1wiTGFzdCA0IFF1YXJ0ZXJzXCJdID0ge1xuICAgICAgICBzdGFydERhdGU6IG1vbWVudChmb3JtYXR0ZWRNYXhEYXRlLCBERUZBVUxUX0RBVEVfRlJPTUFUKVxuICAgICAgICAgIC5zdWJ0cmFjdCgzLCBcInF1YXJ0ZXJzXCIpXG4gICAgICAgICAgLmZvcm1hdChERUZBVUxUX0RBVEVfRlJPTUFUKSxcbiAgICAgICAgZW5kRGF0ZTogZm9ybWF0dGVkTWF4RGF0ZSxcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmICh0eXBlID09IFwieWVhcmx5XCIpIHtcbiAgICAgIHJhbmdlc1tcIkxhc3QgWWVhclwiXSA9IHtcbiAgICAgICAgc3RhcnREYXRlOiBtb21lbnQoZm9ybWF0dGVkTWF4RGF0ZSwgREVGQVVMVF9EQVRFX0ZST01BVClcbiAgICAgICAgICAuc3VidHJhY3QoMSwgXCJ5ZWFyXCIpXG4gICAgICAgICAgLmZvcm1hdChERUZBVUxUX0RBVEVfRlJPTUFUKSxcbiAgICAgICAgZW5kRGF0ZTogZm9ybWF0dGVkTWF4RGF0ZSxcbiAgICAgIH07XG4gICAgfVxuICAgIHJhbmdlc1tcIkN1c3RvbSBSYW5nZVwiXSA9IHsgc3RhcnREYXRlOiBudWxsLCBlbmREYXRlOiBudWxsIH07XG4gICAgcmV0dXJuIHJhbmdlcztcbiAgfVxuXG4gIHB1YmxpYyBnZXRTYW5pdGl6ZWREYXRlQXJyYXkoY29uZmlnKSB7XG4gICAgY29uc3Qgc2FuaXRpemVkRGF0ZUFycmF5ID0gW107XG4gICAgY29uc3QgdHlwZSA9IGNvbmZpZy50eXBlO1xuICAgIGNvbnN0IGRhdGVBcnJheSA9IGNvbmZpZy5kYXRlQXJyYXk7XG4gICAgY29uc3QgaW5wdXREYXRlRm9ybWF0ID0gY29uZmlnLmlucHV0RGF0ZUZvcm1hdDtcblxuICAgIC8vIGRhdGVBcnJheSBjYW4gaGF2ZSBudWxsc1xuICAgIF8uZm9yRWFjaChkYXRlQXJyYXksIChkYXRlKSA9PiB7XG4gICAgICBpZiAoZGF0ZSkge1xuICAgICAgICBsZXQgZm9ybWF0ID0gbnVsbDtcbiAgICAgICAgaWYgKGlzTmFOKE51bWJlcihkYXRlKSkpIHtcbiAgICAgICAgICBpZiAoaW5wdXREYXRlRm9ybWF0KSB7XG4gICAgICAgICAgICBmb3JtYXQgPSBpbnB1dERhdGVGb3JtYXQ7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvcm1hdCA9IG1vbWVudChkYXRlKS5fZjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW5wdXREYXRlRm9ybWF0ICE9IG1vbWVudChkYXRlKS5fZikge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIFwiTTEgRGF0ZSBSYW5nZSBQaWNrZXI6IFByb3ZpZGVkIGlucHV0RGF0ZUZvcm1hdCAhPSBEYXRlIEZvcm1hdCBpbiBkYXRlQXJyYXkuIENvbnZlcnRlZCBkYXRlcyBtaWdodCBub3QgYmUgYXMgZXhwZWN0ZWRcIixcbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHZhbHVlID0gZm9ybWF0ID8gbW9tZW50KGRhdGUsIGZvcm1hdCkuZm9ybWF0KGZvcm1hdCkgOiBtb21lbnQoZGF0ZSkudmFsdWVPZigpO1xuICAgICAgICBpZiAodHlwZSA9PSBcIndlZWtseVwiKSB7XG4gICAgICAgICAgdmFsdWUgPSBmb3JtYXRcbiAgICAgICAgICAgID8gbW9tZW50KGRhdGUsIGZvcm1hdClcbiAgICAgICAgICAgICAgICAuZW5kT2YoXCJ3ZWVrXCIpXG4gICAgICAgICAgICAgICAgLmZvcm1hdChmb3JtYXQpXG4gICAgICAgICAgICA6IG1vbWVudChkYXRlKVxuICAgICAgICAgICAgICAgIC5lbmRPZihcIndlZWtcIilcbiAgICAgICAgICAgICAgICAudmFsdWVPZigpO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT0gXCJtb250aGx5XCIpIHtcbiAgICAgICAgICB2YWx1ZSA9IGZvcm1hdFxuICAgICAgICAgICAgPyBtb21lbnQoZGF0ZSwgZm9ybWF0KVxuICAgICAgICAgICAgICAgIC5lbmRPZihcIm1vbnRoXCIpXG4gICAgICAgICAgICAgICAgLmZvcm1hdChmb3JtYXQpXG4gICAgICAgICAgICA6IG1vbWVudChkYXRlKVxuICAgICAgICAgICAgICAgIC5lbmRPZihcIm1vbnRoXCIpXG4gICAgICAgICAgICAgICAgLnZhbHVlT2YoKTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09IFwicXVhcnRlcmx5XCIpIHtcbiAgICAgICAgICB2YWx1ZSA9IGZvcm1hdFxuICAgICAgICAgICAgPyBtb21lbnQoZGF0ZSwgZm9ybWF0KVxuICAgICAgICAgICAgICAgIC5lbmRPZihcInF1YXJ0ZXJcIilcbiAgICAgICAgICAgICAgICAuZm9ybWF0KGZvcm1hdClcbiAgICAgICAgICAgIDogbW9tZW50KGRhdGUpXG4gICAgICAgICAgICAgICAgLmVuZE9mKFwicXVhcnRlclwiKVxuICAgICAgICAgICAgICAgIC52YWx1ZU9mKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PSBcInllYXJseVwiKSB7XG4gICAgICAgICAgdmFsdWUgPSBmb3JtYXRcbiAgICAgICAgICAgID8gbW9tZW50KGRhdGUsIGZvcm1hdClcbiAgICAgICAgICAgICAgICAuZW5kT2YoXCJ5ZWFyXCIpXG4gICAgICAgICAgICAgICAgLmZvcm1hdChmb3JtYXQpXG4gICAgICAgICAgICA6IG1vbWVudChkYXRlKVxuICAgICAgICAgICAgICAgIC5lbmRPZihcInllYXJcIilcbiAgICAgICAgICAgICAgICAudmFsdWVPZigpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgIHNhbml0aXplZERhdGVBcnJheS5wdXNoKHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBcIk0xIERhdGUgUmFuZ2UgUGlja2VyOiBWYWx1ZXMgaW4gRGF0ZSBBcnJheSBhcmUgbm90IGluIGFueSBrbm93biBmb3JtYXQuIFBsZWFzZSBwYXNzIHRoZSBmb3JtYXQgb3IgcGFzcyB0aGUgZGF0ZXMgaW4gYW55IGtub3duIGZvcm1hdFwiLFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBfLnVuaXFCeShzYW5pdGl6ZWREYXRlQXJyYXkpO1xuICB9XG5cbiAgcHVibGljIGdldE51bWJlck9mV2Vla3MoZGF0ZSk6IG51bWJlciB7XG4gICAgbGV0IG51bWJlck9mV2Vla3MgPSBudWxsO1xuICAgIGlmIChkYXRlKSB7XG4gICAgICBjb25zdCBtb250aFN0YXJ0OiBudW1iZXIgPSBtb21lbnQoZGF0ZSwgREVGQVVMVF9EQVRFX0ZST01BVClcbiAgICAgICAgLnN0YXJ0T2YoXCJtb250aFwiKVxuICAgICAgICAuZGF5KCk7XG4gICAgICBjb25zdCBtb250aEVuZDogbnVtYmVyID0gTnVtYmVyKFxuICAgICAgICBtb21lbnQoZGF0ZSwgREVGQVVMVF9EQVRFX0ZST01BVClcbiAgICAgICAgICAuZW5kT2YoXCJtb250aFwiKVxuICAgICAgICAgIC5mb3JtYXQoXCJEXCIpLFxuICAgICAgKTtcbiAgICAgIG51bWJlck9mV2Vla3MgPSBNYXRoLmNlaWwoKG1vbnRoU3RhcnQgKyBtb250aEVuZCkgLyA3KTtcbiAgICB9XG4gICAgcmV0dXJuIG51bWJlck9mV2Vla3M7XG4gIH1cblxuICBwdWJsaWMgZ2V0WWVhcmx5V2Vla0NvdW50KHllYXIsIHJldGFpbENhbGVuZGFyPykge1xuICAgIGxldCB3ZWVrQ291bnQ6IG51bWJlciA9IG51bGw7XG4gICAgaWYgKHllYXIpIHtcbiAgICAgIGNvbnN0IHllYXJTdGFydERhdGUgPSBtb21lbnQoeWVhciwgXCJZWVlZXCIpXG4gICAgICAgIC5zdGFydE9mKFwieWVhclwiKVxuICAgICAgICAuZm9ybWF0KERFRkFVTFRfREFURV9GUk9NQVQpO1xuICAgICAgY29uc3QgeWVhckVuZERhdGUgPSBtb21lbnQoeWVhciwgXCJZWVlZXCIpXG4gICAgICAgIC5lbmRPZihcInllYXJcIilcbiAgICAgICAgLmZvcm1hdChERUZBVUxUX0RBVEVfRlJPTUFUKTtcbiAgICAgIGNvbnN0IHllYXJFbmRXZWVrRW5kRGF0ZSA9IG1vbWVudCh5ZWFyRW5kRGF0ZSwgREVGQVVMVF9EQVRFX0ZST01BVClcbiAgICAgICAgLnN0YXJ0T2YoXCJ3ZWVrXCIpXG4gICAgICAgIC5mb3JtYXQoREVGQVVMVF9EQVRFX0ZST01BVCk7XG5cbiAgICAgIGNvbnN0IHllYXJTdGFydFdlZWtFbmREYXRlID0gbW9tZW50KHllYXJTdGFydERhdGUsIERFRkFVTFRfREFURV9GUk9NQVQpXG4gICAgICAgIC5lbmRPZihcIndlZWtcIilcbiAgICAgICAgLmZvcm1hdChERUZBVUxUX0RBVEVfRlJPTUFUKTtcblxuICAgICAgY29uc3QgeWVhclNhcnRXZWVrTnVtYmVyID0gdGhpcy5nZXRXZWVrTnVtYmVyKHllYXJTdGFydFdlZWtFbmREYXRlKTtcbiAgICAgIGNvbnN0IHllYXJFbmRXZWVrTnVtYmVyID0gdGhpcy5nZXRXZWVrTnVtYmVyKHllYXJFbmRXZWVrRW5kRGF0ZSk7XG4gICAgICB3ZWVrQ291bnQgPSB5ZWFyRW5kV2Vla051bWJlciAtIHllYXJTYXJ0V2Vla051bWJlciArIDE7XG4gICAgfVxuICAgIHJldHVybiB3ZWVrQ291bnQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0TW9udGhzQXZhaWxhYmxlKG1pbkRhdGUsIG1heERhdGUsIHNlbGVjdGVkWWVhcikge1xuICAgIGNvbnN0IG1vbnRocyA9IFtdO1xuICAgIGlmIChtaW5EYXRlICYmIG1heERhdGUgJiYgc2VsZWN0ZWRZZWFyKSB7XG4gICAgICBsZXQgbWluRGF0ZW1zID0gbW9tZW50KG1pbkRhdGUsIERFRkFVTFRfREFURV9GUk9NQVQpLnZhbHVlT2YoKTtcbiAgICAgIGxldCBtYXhEYXRlbXMgPSBtb21lbnQobWF4RGF0ZSwgREVGQVVMVF9EQVRFX0ZST01BVCkudmFsdWVPZigpO1xuICAgICAgY29uc3QgeWVhclN0YXJ0bXMgPSBtb21lbnQoKVxuICAgICAgICAueWVhcihzZWxlY3RlZFllYXIpXG4gICAgICAgIC5zdGFydE9mKFwieWVhclwiKVxuICAgICAgICAudmFsdWVPZigpO1xuICAgICAgY29uc3QgeWVhckVuZG1zID0gbW9tZW50KClcbiAgICAgICAgLnllYXIoc2VsZWN0ZWRZZWFyKVxuICAgICAgICAuZW5kT2YoXCJ5ZWFyXCIpXG4gICAgICAgIC52YWx1ZU9mKCk7XG5cbiAgICAgIGlmIChtaW5EYXRlbXMgPCB5ZWFyU3RhcnRtcykge1xuICAgICAgICBtaW5EYXRlbXMgPSB5ZWFyU3RhcnRtcztcbiAgICAgIH1cbiAgICAgIGlmIChtYXhEYXRlbXMgPiB5ZWFyRW5kbXMpIHtcbiAgICAgICAgbWF4RGF0ZW1zID0geWVhckVuZG1zO1xuICAgICAgfVxuXG4gICAgICBsZXQgbWluRGF0ZU1vbnRoTnVtYmVyID0gbW9tZW50KG1pbkRhdGVtcykubW9udGgoKTtcbiAgICAgIGNvbnN0IGRpZmY6IG51bWJlciA9IG1vbWVudChtYXhEYXRlbXMpLmRpZmYobW9tZW50KG1pbkRhdGVtcyksIFwibW9udGhzXCIpO1xuICAgICAgY29uc3QgbWF4TW9udGhzID0gZGlmZiA8IE1PTlRIU19BVkFJTEFCTEUubGVuZ3RoID8gZGlmZiA6IE1PTlRIU19BVkFJTEFCTEUubGVuZ3RoO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBtYXhNb250aHM7IGkrKykge1xuICAgICAgICBpZiAobWluRGF0ZU1vbnRoTnVtYmVyID49IE1PTlRIU19BVkFJTEFCTEUubGVuZ3RoKSB7XG4gICAgICAgICAgbW9udGhzLnB1c2goTU9OVEhTX0FWQUlMQUJMRVttaW5EYXRlTW9udGhOdW1iZXIgLSBNT05USFNfQVZBSUxBQkxFLmxlbmd0aF0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1vbnRocy5wdXNoKE1PTlRIU19BVkFJTEFCTEVbbWluRGF0ZU1vbnRoTnVtYmVyXSk7XG4gICAgICAgIH1cbiAgICAgICAgbWluRGF0ZU1vbnRoTnVtYmVyKys7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtb250aHM7XG4gIH1cblxuICBwdWJsaWMgZ2V0WWVhcnNBdmFpbGFibGUoY29uZmlnKSB7XG4gICAgY29uc3QgbWluRGF0ZSA9IGNvbmZpZyA/IGNvbmZpZy5taW5EYXRlIDogXCJcIjtcbiAgICBjb25zdCBtYXhEYXRlID0gY29uZmlnID8gY29uZmlnLm1heERhdGUgOiBcIlwiO1xuICAgIGNvbnN0IHllYXJzID0gW107XG4gICAgaWYgKG1pbkRhdGUgJiYgbWF4RGF0ZSkge1xuICAgICAgY29uc3QgbWluWWVhciA9IE51bWJlcih0aGlzLmdldFNlbGVjdGVkWWVhcihjb25maWcsIG1pbkRhdGUsIFwibGVmdFwiKSk7XG4gICAgICBjb25zdCBtYXhZZWFyID0gTnVtYmVyKHRoaXMuZ2V0U2VsZWN0ZWRZZWFyKGNvbmZpZywgbWF4RGF0ZSwgXCJyaWdodFwiKSk7XG4gICAgICBjb25zdCBkaWZmID0gbWF4WWVhciAtIG1pblllYXI7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IGRpZmY7IGkrKykge1xuICAgICAgICB5ZWFycy5wdXNoKGAke21pblllYXIgKyBpfWApO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4geWVhcnMucmV2ZXJzZSgpO1xuICB9XG5cbiAgcHVibGljIGlzRGF0ZUF2YWlsYWJsZShkYXRlLCBtaW5EYXRlLCBtYXhEYXRlLCBzdGFydERhdGUsIGVuZERhdGUsIG1vbnRoU3RhcnREYXRlLCBtb250aEVuZERhdGUsIGNvbmZpZyk6IGJvb2xlYW4ge1xuICAgIGxldCBhdmFpbGFibGUgPSBmYWxzZTtcbiAgICBjb25zdCB0eXBlID0gY29uZmlnLnR5cGU7XG4gICAgY29uc3QgZGF0ZUFycmF5ID0gY29uZmlnLmRhdGVBcnJheSA/IGNvbmZpZy5kYXRlQXJyYXkgOiBbXTtcbiAgICBjb25zdCBpbnB1dERhdGVGb3JtYXQgPSBjb25maWcuaW5wdXREYXRlRm9ybWF0O1xuICAgIGNvbnN0IGRpc2FibGVXZWVrZW5kcyA9IGNvbmZpZy5kaXNhYmxlV2Vla2VuZHM7XG4gICAgY29uc3QgZGlzYWJsZVdlZWtkYXlzID0gY29uZmlnLmRpc2FibGVXZWVrZGF5cztcbiAgICBpZiAodHlwZSA9PSBcImRhaWx5XCIpIHtcbiAgICAgIG1pbkRhdGUgPSBtaW5EYXRlID4gbW9udGhTdGFydERhdGUgPyBtaW5EYXRlIDogbW9udGhTdGFydERhdGU7XG4gICAgICBtYXhEYXRlID0gbWF4RGF0ZSA8IG1vbnRoRW5kRGF0ZSA/IG1heERhdGUgOiBtb250aEVuZERhdGU7XG4gICAgfVxuXG4gICAgLy8gaWYoZGF0ZSA9PSBtaW5EYXRlXG4gICAgLy8gICAgIHx8IGRhdGUgPT0gbWF4RGF0ZSkge1xuICAgIC8vICAgYXZhaWxhYmxlID0gdHJ1ZTtcbiAgICAvLyB9XG5cbiAgICBpZiAoZGF0ZSA+PSBtaW5EYXRlICYmIGRhdGUgPD0gbWF4RGF0ZSkge1xuICAgICAgaWYgKGRhdGVBcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGF2YWlsYWJsZSA9IF8uc29tZShkYXRlQXJyYXksIChkKSA9PiB7XG4gICAgICAgICAgbGV0IGZvcm1hdCA9IG51bGw7XG4gICAgICAgICAgaWYgKGlzTmFOKE51bWJlcihkYXRlKSkpIHtcbiAgICAgICAgICAgIGlmIChpbnB1dERhdGVGb3JtYXQpIHtcbiAgICAgICAgICAgICAgZm9ybWF0ID0gaW5wdXREYXRlRm9ybWF0O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZm9ybWF0ID0gbW9tZW50KGRhdGUpLl9mO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbW9tZW50KGQsIGZvcm1hdCkudmFsdWVPZigpID09IGRhdGU7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXZhaWxhYmxlID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGF2YWlsYWJsZSkge1xuICAgICAgICBpZiAoZGlzYWJsZVdlZWtlbmRzKSB7XG4gICAgICAgICAgYXZhaWxhYmxlID0gIXRoaXMuaXNXZWVrZW5kKGRhdGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkaXNhYmxlV2Vla2RheXMpIHtcbiAgICAgICAgICBhdmFpbGFibGUgPSAhdGhpcy5pc1dlZWtkYXkoZGF0ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGF2YWlsYWJsZTtcbiAgfVxuXG4gIHB1YmxpYyBpc0RhdGVJblJhbmdlKFxuICAgIGRhdGUsXG4gICAgbWluRGF0ZSxcbiAgICBtYXhEYXRlLFxuICAgIHN0YXJ0RGF0ZSxcbiAgICBlbmREYXRlLFxuICAgIG1vbnRoU3RhcnREYXRlLFxuICAgIG1vbnRoRW5kRGF0ZSxcbiAgICBhdmFpbGFibGUsXG4gICAgY29uZmlnLFxuICApOiBib29sZWFuIHtcbiAgICBsZXQgaW5SYW5nZSA9IGZhbHNlO1xuICAgIGNvbnN0IHR5cGUgPSBjb25maWcudHlwZTtcbiAgICBjb25zdCBzaW5nbGVEYXRlUGlja2VyID0gY29uZmlnLnNpbmdsZURhdGVQaWNrZXI7XG4gICAgaWYgKCFzaW5nbGVEYXRlUGlja2VyKSB7XG4gICAgICBpZiAodHlwZSA9PSBcImRhaWx5XCIpIHtcbiAgICAgICAgbWluRGF0ZSA9IG1vbnRoU3RhcnREYXRlO1xuICAgICAgICBtYXhEYXRlID0gbW9udGhFbmREYXRlO1xuICAgICAgfVxuICAgICAgaWYgKGRhdGUgPj0gc3RhcnREYXRlICYmIGRhdGUgPD0gZW5kRGF0ZSAmJiBkYXRlID49IG1pbkRhdGUgJiYgZGF0ZSA8PSBtYXhEYXRlKSB7XG4gICAgICAgIGlmIChhdmFpbGFibGUpIHtcbiAgICAgICAgICBpblJhbmdlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaW5SYW5nZTtcbiAgfVxuXG4gIHB1YmxpYyBpc0RhdGVBY3RpdmUoZGF0ZSwgc3RhcnREYXRlLCBlbmREYXRlLCBzaWRlKTogYm9vbGVhbiB7XG4gICAgbGV0IGFjdGl2ZSA9IGZhbHNlO1xuICAgIGlmICgoZGF0ZSA9PSBzdGFydERhdGUgJiYgc2lkZSA9PSBcImxlZnRcIikgfHwgKGRhdGUgPT0gZW5kRGF0ZSAmJiBzaWRlID09IFwicmlnaHRcIikpIHtcbiAgICAgIGFjdGl2ZSA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiBhY3RpdmU7XG4gIH1cblxuICBwdWJsaWMgaXNEYXRlVG9kYXkoZGF0ZSwgY29uZmlnKTogYm9vbGVhbiB7XG4gICAgbGV0IHRvZGF5ID0gZmFsc2U7XG4gICAgY29uc3QgdG9kYXlEYXRlID0gbW9tZW50KClcbiAgICAgIC5zdGFydE9mKFwiZGF5XCIpXG4gICAgICAudmFsdWVPZigpO1xuICAgIGNvbnN0IHR5cGUgPSBjb25maWcudHlwZTtcbiAgICBjb25zdCBmaXJzdExhc3REYXkgPSB0aGlzLmdldEZpcnN0TGFzdERheShtb21lbnQodG9kYXlEYXRlKS5mb3JtYXQoREVGQVVMVF9EQVRFX0ZST01BVCksIHR5cGUpO1xuICAgIGNvbnN0IGZpcnN0RGF5ID0gbW9tZW50KGZpcnN0TGFzdERheS5maXJzdERheSwgREVGQVVMVF9EQVRFX0ZST01BVCkudmFsdWVPZigpO1xuICAgIGNvbnN0IGxhc3REYXkgPSBtb21lbnQoZmlyc3RMYXN0RGF5Lmxhc3REYXksIERFRkFVTFRfREFURV9GUk9NQVQpLnZhbHVlT2YoKTtcbiAgICBpZiAoZGF0ZSA+PSBmaXJzdERheSAmJiBkYXRlIDw9IGxhc3REYXkpIHtcbiAgICAgIHRvZGF5ID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHRvZGF5O1xuICB9XG5cbiAgcHVibGljIGlzV2Vla2RheShkYXRlLCBmb3JtYXQ/KSB7XG4gICAgcmV0dXJuICF0aGlzLmlzV2Vla2VuZChkYXRlLCBmb3JtYXQpO1xuICB9XG5cbiAgcHVibGljIGlzV2Vla2VuZChkYXRlLCBmb3JtYXQ/KSB7XG4gICAgaWYgKCFmb3JtYXQpIHtcbiAgICAgIGZvcm1hdCA9IG51bGw7XG4gICAgfVxuICAgIGNvbnN0IGRheSA9IG1vbWVudChkYXRlLCBmb3JtYXQpLmRheSgpO1xuICAgIHJldHVybiBkYXkgPT0gMCB8fCBkYXkgPT0gNiA/IHRydWUgOiBmYWxzZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRDYWxlbmRhclJvd1ZhcmlhYmxlcyhvcHRpb25zKSB7XG4gICAgY29uc3QgdmFyaWFibGVzOiBhbnkgPSB7fTtcbiAgICBjb25zdCB0eXBlID0gb3B0aW9ucy50eXBlO1xuICAgIGNvbnN0IG1vbnRoU3RhcnRXZWVrTnVtYmVyID0gb3B0aW9ucy5tb250aFN0YXJ0V2Vla051bWJlcjtcbiAgICBjb25zdCBkYXRlUm93cyA9IG9wdGlvbnMuZGF0ZVJvd3M7XG4gICAgY29uc3QgeWVhciA9IGAke29wdGlvbnMueWVhcn1gO1xuXG4gICAgaWYgKHR5cGUgPT0gXCJkYWlseVwiKSB7XG4gICAgICB2YXJpYWJsZXMucm93TnVtYmVyID0gbW9udGhTdGFydFdlZWtOdW1iZXIgKyBkYXRlUm93cztcbiAgICAgIHZhcmlhYmxlcy5jb2x1bW5zID0gNjtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT0gXCJ3ZWVrbHlcIikge1xuICAgICAgLy8gdmFyaWFibGVzLnJvd051bWJlciA9IGAkeyhkYXRlUm93cyoyKSsxfSAtICR7KGRhdGVSb3dzKjIpKzJ9YDtcbiAgICAgIHZhcmlhYmxlcy5yb3dOdW1iZXIgPSBgYDtcbiAgICAgIHZhcmlhYmxlcy5jb2x1bW5zID0gNjtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT0gXCJtb250aGx5XCIpIHtcbiAgICAgIHZhcmlhYmxlcy5yb3dOdW1iZXIgPSBkYXRlUm93cyArIDE7XG4gICAgICB2YXJpYWJsZXMuY29sdW1ucyA9IDI7XG4gICAgfSBlbHNlIGlmICh0eXBlID09IFwicXVhcnRlcmx5XCIpIHtcbiAgICAgIHZhcmlhYmxlcy5yb3dOdW1iZXIgPSB5ZWFyLmNoYXJBdChkYXRlUm93cyk7XG4gICAgICB2YXJpYWJsZXMuY29sdW1ucyA9IDA7XG4gICAgfSBlbHNlIGlmICh0eXBlID09IFwieWVhcmx5XCIpIHtcbiAgICAgIHZhcmlhYmxlcy5yb3dOdW1iZXIgPSBcIlwiO1xuICAgICAgdmFyaWFibGVzLmNvbHVtbnMgPSAwO1xuICAgIH1cblxuICAgIHJldHVybiB2YXJpYWJsZXM7XG4gIH1cblxuICBwdWJsaWMgZ2V0Q2FsZW5kYXJSb3dJdGVtVmFyaWFibGVzKG9wdGlvbnMpIHtcbiAgICBjb25zdCB2YXJpYWJsZXM6IGFueSA9IHtcbiAgICAgIGN1cnJlbnRJdGVtRGF0ZTogXCJcIixcbiAgICAgIHJvd0l0ZW1UZXh0OiBcIlwiLFxuICAgICAgaXRlbUNvdW50OiBudWxsLFxuICAgIH07XG4gICAgY29uc3QgdHlwZSA9IG9wdGlvbnMudHlwZTtcbiAgICBjb25zdCBtb250aFN0YXJ0V2Vla051bWJlciA9IG9wdGlvbnMubW9udGhTdGFydFdlZWtOdW1iZXI7XG4gICAgY29uc3QgeWVhclN0YXJ0RGF0ZSA9IG9wdGlvbnMueWVhclN0YXJ0RGF0ZTtcbiAgICBjb25zdCB5ZWFyID0gb3B0aW9ucy55ZWFyO1xuICAgIGNvbnN0IHJvd0l0ZW0gPSBvcHRpb25zLnJvd0l0ZW07XG4gICAgY29uc3QgZGF0ZVJvd3MgPSBvcHRpb25zLmRhdGVSb3dzO1xuICAgIGNvbnN0IGNvbHVtbnMgPSBvcHRpb25zLmNvbHVtbnM7XG4gICAgY29uc3QgaXRlbUNvdW50ID0gcm93SXRlbSArIGRhdGVSb3dzICogY29sdW1ucyArIGRhdGVSb3dzO1xuICAgIGxldCBjdXJyZW50SXRlbURhdGUgPSBcIlwiO1xuICAgIGxldCByb3dJdGVtVGV4dCA9IFwiXCI7XG4gICAgbGV0IGZpcnN0TGFzdERheU9iamVjdDogYW55ID0ge307XG5cbiAgICBpZiAodHlwZSA9PSBcImRhaWx5XCIpIHtcbiAgICAgIGlmICghXy5pc05pbChtb250aFN0YXJ0V2Vla051bWJlcikgJiYgIV8uaXNOaWwoZGF0ZVJvd3MpICYmICFfLmlzTmlsKHllYXIpKSB7XG4gICAgICAgIGNvbnN0IHllYXJTdGFydERhdGUgPSBtb21lbnQoKVxuICAgICAgICAgIC55ZWFyKHllYXIpXG4gICAgICAgICAgLnN0YXJ0T2YoXCJ5ZWFyXCIpXG4gICAgICAgICAgLmZvcm1hdChERUZBVUxUX0RBVEVfRlJPTUFUKTtcbiAgICAgICAgY3VycmVudEl0ZW1EYXRlID0gbW9tZW50KHllYXJTdGFydERhdGUsIERFRkFVTFRfREFURV9GUk9NQVQpXG4gICAgICAgICAgLmFkZChtb250aFN0YXJ0V2Vla051bWJlciArIGRhdGVSb3dzIC0gMSwgXCJ3ZWVrXCIpXG4gICAgICAgICAgLnN0YXJ0T2YoXCJ3ZWVrXCIpXG4gICAgICAgICAgLmFkZChyb3dJdGVtLCBcImRheVwiKVxuICAgICAgICAgIC5mb3JtYXQoREVGQVVMVF9EQVRFX0ZST01BVCk7XG4gICAgICAgIHJvd0l0ZW1UZXh0ID0gbW9tZW50KGN1cnJlbnRJdGVtRGF0ZSwgREVGQVVMVF9EQVRFX0ZST01BVCkuZm9ybWF0KFwiRFwiKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGUgPT0gXCJ3ZWVrbHlcIikge1xuICAgICAgaWYgKCFfLmlzTmlsKHllYXJTdGFydERhdGUpICYmICFfLmlzTmlsKGl0ZW1Db3VudCkpIHtcbiAgICAgICAgY3VycmVudEl0ZW1EYXRlID0gbW9tZW50KHllYXJTdGFydERhdGUsIERFRkFVTFRfREFURV9GUk9NQVQpXG4gICAgICAgICAgLmFkZChpdGVtQ291bnQsIFwid2Vla1wiKVxuICAgICAgICAgIC5lbmRPZihcIndlZWtcIilcbiAgICAgICAgICAuZm9ybWF0KERFRkFVTFRfREFURV9GUk9NQVQpO1xuICAgICAgICBjb25zdCB3ZWVrTnVtYmVyOiBhbnkgPSBpdGVtQ291bnQgKyAxO1xuICAgICAgICByb3dJdGVtVGV4dCA9IGBXJHt3ZWVrTnVtYmVyfWA7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0eXBlID09IFwibW9udGhseVwiKSB7XG4gICAgICBpZiAoIV8uaXNOaWwoaXRlbUNvdW50KSAmJiAhXy5pc05pbCh5ZWFyKSkge1xuICAgICAgICBjdXJyZW50SXRlbURhdGUgPSBtb21lbnQoKVxuICAgICAgICAgIC55ZWFyKHllYXIpXG4gICAgICAgICAgLm1vbnRoKGl0ZW1Db3VudClcbiAgICAgICAgICAuZW5kT2YoXCJtb250aFwiKVxuICAgICAgICAgIC5mb3JtYXQoREVGQVVMVF9EQVRFX0ZST01BVCk7XG4gICAgICAgIHJvd0l0ZW1UZXh0ID0gbW9tZW50KGN1cnJlbnRJdGVtRGF0ZSwgREVGQVVMVF9EQVRFX0ZST01BVCkuZm9ybWF0KFwiTU1NXCIpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZSA9PSBcInF1YXJ0ZXJseVwiKSB7XG4gICAgICBpZiAoIV8uaXNOaWwoaXRlbUNvdW50KSAmJiAhXy5pc05pbCh5ZWFyKSkge1xuICAgICAgICBjdXJyZW50SXRlbURhdGUgPSBtb21lbnQoKVxuICAgICAgICAgIC55ZWFyKHllYXIpXG4gICAgICAgICAgLnF1YXJ0ZXIoaXRlbUNvdW50ICsgMSlcbiAgICAgICAgICAuZW5kT2YoXCJxdWFydGVyXCIpXG4gICAgICAgICAgLmZvcm1hdChERUZBVUxUX0RBVEVfRlJPTUFUKTtcbiAgICAgICAgcm93SXRlbVRleHQgPSBgUXVhcnRlciAke2l0ZW1Db3VudCArIDF9YDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmaXJzdExhc3REYXlPYmplY3QgPSB0aGlzLmdldEZpcnN0TGFzdERheShjdXJyZW50SXRlbURhdGUsIHR5cGUpO1xuXG4gICAgdmFyaWFibGVzLml0ZW1Db3VudCA9IGl0ZW1Db3VudDtcbiAgICB2YXJpYWJsZXMuY3VycmVudEl0ZW1EYXRlID0gY3VycmVudEl0ZW1EYXRlO1xuICAgIHZhcmlhYmxlcy5yb3dJdGVtVGV4dCA9IHJvd0l0ZW1UZXh0O1xuICAgIHZhcmlhYmxlcy5maXJzdERheSA9IGZpcnN0TGFzdERheU9iamVjdC5maXJzdERheTtcbiAgICB2YXJpYWJsZXMubGFzdERheSA9IGZpcnN0TGFzdERheU9iamVjdC5sYXN0RGF5O1xuICAgIHJldHVybiB2YXJpYWJsZXM7XG4gIH1cblxuICBwdWJsaWMgaXNSb3dJZW1WYWxpZChvcHRpb25zKTogYm9vbGVhbiB7XG4gICAgbGV0IHZhbGlkID0gZmFsc2U7XG4gICAgY29uc3QgdHlwZSA9IG9wdGlvbnMudHlwZTtcbiAgICBjb25zdCB5ZWFyID0gb3B0aW9ucy55ZWFyO1xuICAgIGNvbnN0IGl0ZW1Db3VudCA9IG9wdGlvbnMuaXRlbUNvdW50O1xuICAgIGNvbnN0IHJldGFpbENhbGVuZGFyID0gb3B0aW9ucy5yZXRhaWxDYWxlbmRhcjtcbiAgICBjb25zdCB2YWxpZFdlZWtDb3VudCA9IHRoaXMuZ2V0WWVhcmx5V2Vla0NvdW50KHllYXIsIHJldGFpbENhbGVuZGFyKTtcblxuICAgIGlmICh0eXBlID09IFwiZGFpbHlcIikge1xuICAgICAgdmFsaWQgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PSBcIndlZWtseVwiKSB7XG4gICAgICBpZiAoaXRlbUNvdW50IDwgdmFsaWRXZWVrQ291bnQpIHtcbiAgICAgICAgdmFsaWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZSA9PSBcIm1vbnRobHlcIikge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIGlmICh0eXBlID09IFwicXVhcnRlcmx5XCIpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZDtcbiAgfVxuXG4gIHB1YmxpYyBmb3JtYXRTdGFydERhdGUoY29uZmlnLCByZXR1cm5Gb3JtYXQpIHtcbiAgICBjb25zdCBzdGFydERhdGUgPSBjb25maWcgPyBjb25maWcuc3RhcnREYXRlIDogbnVsbDtcbiAgICBjb25zdCB0eXBlID0gY29uZmlnID8gY29uZmlnLnR5cGUgOiBcIlwiO1xuICAgIGxldCBmb3JtYXR0ZWRTdGFydERhdGUgPSBudWxsO1xuXG4gICAgaWYgKHN0YXJ0RGF0ZSkge1xuICAgICAgZm9ybWF0dGVkU3RhcnREYXRlID0gbW9tZW50KHN0YXJ0RGF0ZSwgREVGQVVMVF9EQVRFX0ZST01BVCkuZm9ybWF0KHJldHVybkZvcm1hdCk7XG4gICAgICBpZiAodHlwZSA9PSBcIndlZWtseVwiKSB7XG4gICAgICAgIGZvcm1hdHRlZFN0YXJ0RGF0ZSA9IG1vbWVudChzdGFydERhdGUsIERFRkFVTFRfREFURV9GUk9NQVQpXG4gICAgICAgICAgLnN0YXJ0T2YoXCJ3ZWVrXCIpXG4gICAgICAgICAgLmZvcm1hdChyZXR1cm5Gb3JtYXQpO1xuICAgICAgfSBlbHNlIGlmICh0eXBlID09IFwibW9udGhseVwiKSB7XG4gICAgICAgIGZvcm1hdHRlZFN0YXJ0RGF0ZSA9IG1vbWVudChzdGFydERhdGUsIERFRkFVTFRfREFURV9GUk9NQVQpXG4gICAgICAgICAgLnN0YXJ0T2YoXCJtb250aFwiKVxuICAgICAgICAgIC5mb3JtYXQocmV0dXJuRm9ybWF0KTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PSBcInF1YXJ0ZXJseVwiKSB7XG4gICAgICAgIGZvcm1hdHRlZFN0YXJ0RGF0ZSA9IG1vbWVudChzdGFydERhdGUsIERFRkFVTFRfREFURV9GUk9NQVQpXG4gICAgICAgICAgLnN0YXJ0T2YoXCJxdWFydGVyXCIpXG4gICAgICAgICAgLmZvcm1hdChyZXR1cm5Gb3JtYXQpO1xuICAgICAgfSBlbHNlIGlmICh0eXBlID09IFwieWVhcmx5XCIpIHtcbiAgICAgICAgZm9ybWF0dGVkU3RhcnREYXRlID0gbW9tZW50KHN0YXJ0RGF0ZSwgREVGQVVMVF9EQVRFX0ZST01BVClcbiAgICAgICAgICAuc3RhcnRPZihcInllYXJcIilcbiAgICAgICAgICAuZm9ybWF0KHJldHVybkZvcm1hdCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZvcm1hdHRlZFN0YXJ0RGF0ZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRTZWxlY3RlZFllYXIoY29uZmlnLCBkYXRlLCBzaWRlKTogc3RyaW5nIHtcbiAgICByZXR1cm4gbW9tZW50KGRhdGUsIERFRkFVTFRfREFURV9GUk9NQVQpLmZvcm1hdChcIllZWVlcIik7XG4gIH1cblxuICBwdWJsaWMgZ2V0Rmlyc3RMYXN0RGF5KGRhdGUsIHR5cGUpIHtcbiAgICBsZXQgZmlyc3REYXkgPSBcIlwiO1xuICAgIGxldCBsYXN0RGF5ID0gXCJcIjtcblxuICAgIGlmICh0eXBlID09IFwiZGFpbHlcIikge1xuICAgICAgZmlyc3REYXkgPSBsYXN0RGF5ID0gZGF0ZTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT0gXCJ3ZWVrbHlcIikge1xuICAgICAgZmlyc3REYXkgPSBtb21lbnQoZGF0ZSwgREVGQVVMVF9EQVRFX0ZST01BVClcbiAgICAgICAgLnN0YXJ0T2YoXCJ3ZWVrXCIpXG4gICAgICAgIC5mb3JtYXQoREVGQVVMVF9EQVRFX0ZST01BVCk7XG4gICAgICBsYXN0RGF5ID0gbW9tZW50KGRhdGUsIERFRkFVTFRfREFURV9GUk9NQVQpXG4gICAgICAgIC5lbmRPZihcIndlZWtcIilcbiAgICAgICAgLmZvcm1hdChERUZBVUxUX0RBVEVfRlJPTUFUKTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT0gXCJtb250aGx5XCIpIHtcbiAgICAgIGZpcnN0RGF5ID0gbW9tZW50KGRhdGUsIERFRkFVTFRfREFURV9GUk9NQVQpXG4gICAgICAgIC5zdGFydE9mKFwibW9udGhcIilcbiAgICAgICAgLmZvcm1hdChERUZBVUxUX0RBVEVfRlJPTUFUKTtcbiAgICAgIGxhc3REYXkgPSBtb21lbnQoZGF0ZSwgREVGQVVMVF9EQVRFX0ZST01BVClcbiAgICAgICAgLmVuZE9mKFwibW9udGhcIilcbiAgICAgICAgLmZvcm1hdChERUZBVUxUX0RBVEVfRlJPTUFUKTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT0gXCJxdWFydGVybHlcIikge1xuICAgICAgZmlyc3REYXkgPSBtb21lbnQoZGF0ZSwgREVGQVVMVF9EQVRFX0ZST01BVClcbiAgICAgICAgLnN0YXJ0T2YoXCJxdWFydGVyXCIpXG4gICAgICAgIC5mb3JtYXQoREVGQVVMVF9EQVRFX0ZST01BVCk7XG4gICAgICBsYXN0RGF5ID0gbW9tZW50KGRhdGUsIERFRkFVTFRfREFURV9GUk9NQVQpXG4gICAgICAgIC5lbmRPZihcInF1YXJ0ZXJcIilcbiAgICAgICAgLmZvcm1hdChERUZBVUxUX0RBVEVfRlJPTUFUKTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT0gXCJ5ZWFybHlcIikge1xuICAgICAgZmlyc3REYXkgPSBtb21lbnQoZGF0ZSwgREVGQVVMVF9EQVRFX0ZST01BVClcbiAgICAgICAgLnN0YXJ0T2YoXCJ5ZWFyXCIpXG4gICAgICAgIC5mb3JtYXQoREVGQVVMVF9EQVRFX0ZST01BVCk7XG4gICAgICBsYXN0RGF5ID0gbW9tZW50KGRhdGUsIERFRkFVTFRfREFURV9GUk9NQVQpXG4gICAgICAgIC5lbmRPZihcInllYXJcIilcbiAgICAgICAgLmZvcm1hdChERUZBVUxUX0RBVEVfRlJPTUFUKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgZmlyc3REYXksXG4gICAgICBsYXN0RGF5LFxuICAgIH07XG4gIH1cblxuICBwdWJsaWMgZ2V0TG9jYWxUaW1lem9uZSgpIHtcbiAgICBsZXQgdHogPSAvXFwoKC4qKVxcKS8uZXhlYyhuZXcgRGF0ZSgpLnRvU3RyaW5nKCkpWzFdO1xuXG4gICAgaWYgKHR6ID09IFwiQ2VudHJhbCBFdXJvcGUgU3RhbmRhcmQgVGltZVwiKSB7XG4gICAgICB0eiA9IEVVX1RaX0NPREU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHR6ID0gREVGQVVMVF9USU1FWk9ORV9DT0RFO1xuICAgIH1cblxuICAgIHJldHVybiB0ejtcbiAgfVxuXG4gIHB1YmxpYyBnZXRab25lRGF0ZSh0eiwgZm9ybWF0LCBkYXRlPykge1xuICAgIGlmIChkYXRlKSB7XG4gICAgICBkYXRlID0gbW9tZW50KGRhdGUsIGZvcm1hdClcbiAgICAgICAgLnN0YXJ0T2YoXCJkYXlcIilcbiAgICAgICAgLnZhbHVlT2YoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0ZSA9IG1vbWVudCgpLnZhbHVlT2YoKTtcbiAgICB9XG5cbiAgICBsZXQgdG9kYXkgPSBuZXcgRGF0ZShkYXRlKS50b0xvY2FsZVN0cmluZyhcImVuLVVTXCIsIHtcbiAgICAgIHRpbWVab25lOiBUWl9OQU1FU1t0el0sXG4gICAgfSk7XG4gICAgdG9kYXkgPSBtb21lbnQodG9kYXksIFwiTU0vREQvWVlZWSwgaGg6bW06c3MgQVwiKTtcbiAgICByZXR1cm4gdG9kYXk7XG4gIH1cblxuICBwdWJsaWMgZ2V0Wm9uZVRvZGF5KHR6LCB2aWV3RGF0ZUZvcm1hdCkge1xuICAgIGNvbnN0IHRvZGF5ID0gdGhpcy5nZXRab25lRGF0ZSh0eiwgdmlld0RhdGVGb3JtYXQpO1xuICAgIHJldHVybiBtb21lbnQodG9kYXkpLmZvcm1hdChgJHt2aWV3RGF0ZUZvcm1hdH0gIGhoOm1tIEFgKTtcbiAgfVxuXG4gIHB1YmxpYyBmb3JtYXRUb1pvbmVEYXRlKHR6LCBmb3JtYXQsIGRhdGUpIHtcbiAgICBjb25zdCBmb3JtYXR0ZWREYXRlID0gdGhpcy5nZXRab25lRGF0ZSh0eiwgZm9ybWF0LCBkYXRlKTtcbiAgICByZXR1cm4gbW9tZW50KGZvcm1hdHRlZERhdGUpLmZvcm1hdChgJHtmb3JtYXR9YCk7XG4gIH1cblxuICBwdWJsaWMgY29udmVydFRvVmlld1RpbWVJdGVtKGl0ZW0pIHtcbiAgICBsZXQgc3RyaW5naWZpZWRfaXRlbSA9IGl0ZW0gKyBcIlwiO1xuICAgIGlmIChzdHJpbmdpZmllZF9pdGVtLmxlbmd0aCA9PSAxKSB7XG4gICAgICBzdHJpbmdpZmllZF9pdGVtID0gYDAke3N0cmluZ2lmaWVkX2l0ZW19YDtcbiAgICB9XG4gICAgcmV0dXJuIHN0cmluZ2lmaWVkX2l0ZW07XG4gIH1cblxuICBwdWJsaWMgZ2V0V2Vla051bWJlcihkYXRlKTogYW55IHtcbiAgICBpZiAoZGF0ZSkge1xuICAgICAgY29uc3QgeWVhciA9IG1vbWVudChkYXRlLCBcIllZWVktTU0tRERcIikueWVhcigpO1xuICAgICAgY29uc3QgbW9udGggPSBtb21lbnQoZGF0ZSwgXCJZWVlZLU1NLUREXCIpLm1vbnRoKCk7XG4gICAgICBjb25zdCBkYXkgPSBOdW1iZXIobW9tZW50KGRhdGUsIFwiWVlZWS1NTS1ERFwiKS5mb3JtYXQoXCJEXCIpKTtcblxuICAgICAgY29uc3QgeWVhclN0YXJ0bXMgPSBuZXcgRGF0ZSh5ZWFyLCAwLCAxKTtcbiAgICAgIGNvbnN0IGRhdGVtcyA9IG5ldyBEYXRlKHllYXIsIG1vbnRoLCBkYXkpO1xuICAgICAgcmV0dXJuIE1hdGguY2VpbCgoKGRhdGVtcy5nZXRUaW1lKCkgLSB5ZWFyU3RhcnRtcy5nZXRUaW1lKCkpIC8gODY0MDAwMDAgKyB5ZWFyU3RhcnRtcy5nZXREYXkoKSArIDEpIC8gNyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUud2FybihcImdldFdlZWtOdW1iZXI6IEludmFsaWQgZGF0ZVwiKTtcbiAgICAgIHJldHVybiB0aGlzLmdldE5vdEF2YWlsYWJsZVRleHQoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==
