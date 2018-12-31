(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined"
    ? factory(
        exports,
        require("@angular/forms"),
        require("@angular/material"),
        require("@angular/platform-browser"),
        require("@angular/platform-browser/animations"),
        require("@angular/core")
      )
    : typeof define === "function" && define.amd
    ? define("ngx-datetime-range-picker", [
        "exports",
        "@angular/forms",
        "@angular/material",
        "@angular/platform-browser",
        "@angular/platform-browser/animations",
        "@angular/core"
      ], factory)
    : factory(
        (global["ngx-datetime-range-picker"] = {}),
        global.ng.forms,
        global.ng.material,
        global.ng.platformBrowser,
        global.ng.platformBrowser.animations,
        global.ng.core
      );
})(this, function(exports, forms, material, platformBrowser, animations, core) {
  "use strict";

  /**
   * @fileoverview added by tsickle
   * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
   */
  /**
   * Iterate over {key: value}
   * Returns the keys of the object
   * Usage:
   *    let objKey of obj | ObjNgFor
   * Example:
   *    let obj = {a: 1, b: 2};
   *    *ngFor="let key of obj | ObjNgFor"
   *    {{keys}}: {{obj[key]}}
   */
  var ObjNgFor = /** @class */ (function() {
    function ObjNgFor() {}
    /**
     * @param {?} value
     * @param {?=} args
     * @return {?}
     */
    ObjNgFor.prototype.transform
    /**
     * @param {?} value
     * @param {?=} args
     * @return {?}
     */ = function(value, args) {
      if (args === void 0) {
        args = null;
      }
      return Object.keys(value); // .map(key => value[key]);
    };
    ObjNgFor.decorators = [{ type: core.Pipe, args: [{ name: "ObjNgFor", pure: false }] }];
    return ObjNgFor;
  })();

  var _a, _b;
  /**
   * @fileoverview added by tsickle
   * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
   */
  /** @type {?} */
  var moment = require("moment");
  /** @type {?} */
  var USA_MST_TZ_CODE = "MST";
  /** @type {?} */
  var USA_TZ_CODE = "PST";
  /** @type {?} */
  var EU_TZ_CODE = "CET";
  /** @type {?} */
  var DateRangePickerConstants = {
    DEFAULT: {
      TYPE: "daily",
      INPUT_CLASS: "m1drp",
      DATE_FROMAT: "YYYY-MM-DD",
      TIME_FORMAT: "HH:mm",
      START_DATE: moment().format("YYYY-MM-DD"),
      END_DATE: moment().format("YYYY-MM-DD"),
      MIN_DATE: moment()
        .subtract(2, "year")
        .startOf("year")
        .format("YYYY-MM-DD"),
      MAX_DATE: moment().format("YYYY-MM-DD"),
      START_TIME: "00:00",
      END_TIME: "23:59",
      MODEL_KEYS: ["daily", "weekly", "monthly", "quarterly", "yearly"],
      TZ_CODE: USA_MST_TZ_CODE
    },
    CONSTANT: {
      MONTHS_AVAILABLE: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      USA_MST_TZ_CODE: USA_MST_TZ_CODE,
      USA_TZ_CODE: USA_TZ_CODE,
      EU_TZ_CODE: EU_TZ_CODE,
      TZ_CODES: [USA_TZ_CODE, EU_TZ_CODE],
      OFFSETS: ((_a = {}),
      (_a[USA_TZ_CODE] = {
        SO: -7,
        WO: -8
      }),
      (_a[EU_TZ_CODE] = {
        SO: 1,
        WO: 0
      }),
      _a),
      TZ_NAMES: ((_b = {}),
      (_b[USA_MST_TZ_CODE] = "America/Phoenix"),
      (_b[USA_TZ_CODE] = "America/Los_Angeles"),
      (_b[EU_TZ_CODE] = "Europe/Berlin"),
      _b)
    }
  };

  /**
   * @fileoverview added by tsickle
   * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
   */
  /** @type {?} */
  var moment$1 = require("moment");
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
  var EU_TZ_CODE$1 = DateRangePickerConstants.CONSTANT.EU_TZ_CODE;
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
          fromattedDate = moment$1(date).format(DEFAULT_DATE_FROMAT);
        } else {
          if (!format) {
            format = moment$1(date)._f;
          } else {
            if (format != moment$1(date)._f) {
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
          fromattedDate = moment$1(date, format).format(DEFAULT_DATE_FROMAT);
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
            formattedTime = moment$1(time, "h:mm A").format(DEFAULT_TIME_FORMAT);
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
          startDate: moment$1(formattedMaxDate, DEFAULT_DATE_FROMAT)
            .subtract(6, "days")
            .format(DEFAULT_DATE_FROMAT),
          endDate: formattedMaxDate
        };
        ranges["Last 30 Days"] = {
          startDate: moment$1(formattedMaxDate, DEFAULT_DATE_FROMAT)
            .subtract(29, "days")
            .format(DEFAULT_DATE_FROMAT),
          endDate: formattedMaxDate
        };
        ranges["Last 90 Days"] = {
          startDate: moment$1(formattedMaxDate, DEFAULT_DATE_FROMAT)
            .subtract(89, "days")
            .format(DEFAULT_DATE_FROMAT),
          endDate: formattedMaxDate
        };
      } else if (type == "weekly") {
        ranges["Last 4 Weeks"] = {
          startDate: moment$1(formattedMaxDate, DEFAULT_DATE_FROMAT)
            .subtract(3, "weeks")
            .format(DEFAULT_DATE_FROMAT),
          endDate: formattedMaxDate
        };
        ranges["Last 13 Weeks"] = {
          startDate: moment$1(formattedMaxDate, DEFAULT_DATE_FROMAT)
            .subtract(12, "weeks")
            .format(DEFAULT_DATE_FROMAT),
          endDate: formattedMaxDate
        };
        ranges["Last 26 Weeks"] = {
          startDate: moment$1(formattedMaxDate, DEFAULT_DATE_FROMAT)
            .subtract(25, "weeks")
            .format(DEFAULT_DATE_FROMAT),
          endDate: formattedMaxDate
        };
      } else if (type == "monthly") {
        // if(retailCalendar) ? subtract(3, 'months')....so on for 'Last 3 Months'....so on
        ranges["Last 3 Months"] = {
          startDate: moment$1(formattedMaxDate, DEFAULT_DATE_FROMAT)
            .subtract(2, "months")
            .format(DEFAULT_DATE_FROMAT),
          endDate: formattedMaxDate
        };
        ranges["Last 6 Months"] = {
          startDate: moment$1(formattedMaxDate, DEFAULT_DATE_FROMAT)
            .subtract(5, "months")
            .format(DEFAULT_DATE_FROMAT),
          endDate: formattedMaxDate
        };
        ranges["Last 9 Months"] = {
          startDate: moment$1(formattedMaxDate, DEFAULT_DATE_FROMAT)
            .subtract(8, "months")
            .format(DEFAULT_DATE_FROMAT),
          endDate: formattedMaxDate
        };
      } else if (type == "quarterly") {
        // if(retailCalendar) ? subtract(1, 'quarters')....so on for 'Last 2 Quarters'....so on
        ranges["Last 2 Quarters"] = {
          startDate: moment$1(formattedMaxDate, DEFAULT_DATE_FROMAT)
            .subtract(1, "quarters")
            .format(DEFAULT_DATE_FROMAT),
          endDate: formattedMaxDate
        };
        ranges["Last 4 Quarters"] = {
          startDate: moment$1(formattedMaxDate, DEFAULT_DATE_FROMAT)
            .subtract(3, "quarters")
            .format(DEFAULT_DATE_FROMAT),
          endDate: formattedMaxDate
        };
      } else if (type == "yearly") {
        ranges["Last Year"] = {
          startDate: moment$1(formattedMaxDate, DEFAULT_DATE_FROMAT)
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
              format = moment$1(date)._f;
            }
          }
          if (inputDateFormat != moment$1(date)._f) {
            console.warn(
              "M1 Date Range Picker: Provided inputDateFormat != Date Format in dateArray. Converted dates might not be as expected"
            );
          }
          /** @type {?} */
          var value = format ? moment$1(date, format).format(format) : moment$1(date).valueOf();
          if (type == "weekly") {
            value = format
              ? moment$1(date, format)
                  .endOf("week")
                  .format(format)
              : moment$1(date)
                  .endOf("week")
                  .valueOf();
          } else if (type == "monthly") {
            value = format
              ? moment$1(date, format)
                  .endOf("month")
                  .format(format)
              : moment$1(date)
                  .endOf("month")
                  .valueOf();
          } else if (type == "quarterly") {
            value = format
              ? moment$1(date, format)
                  .endOf("quarter")
                  .format(format)
              : moment$1(date)
                  .endOf("quarter")
                  .valueOf();
          } else if (type == "yearly") {
            value = format
              ? moment$1(date, format)
                  .endOf("year")
                  .format(format)
              : moment$1(date)
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
        var monthStart = moment$1(date, DEFAULT_DATE_FROMAT)
          .startOf("month")
          .day();
        /** @type {?} */
        var monthEnd = Number(
          moment$1(date, DEFAULT_DATE_FROMAT)
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
        var yearStartDate = moment$1(year, "YYYY")
          .startOf("year")
          .format(DEFAULT_DATE_FROMAT);
        /** @type {?} */
        var yearEndDate = moment$1(year, "YYYY")
          .endOf("year")
          .format(DEFAULT_DATE_FROMAT);
        /** @type {?} */
        var yearEndWeekEndDate = moment$1(yearEndDate, DEFAULT_DATE_FROMAT)
          .startOf("week")
          .format(DEFAULT_DATE_FROMAT);
        /** @type {?} */
        var yearStartWeekEndDate = moment$1(yearStartDate, DEFAULT_DATE_FROMAT)
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
        var minDatems = moment$1(minDate, DEFAULT_DATE_FROMAT).valueOf();
        /** @type {?} */
        var maxDatems = moment$1(maxDate, DEFAULT_DATE_FROMAT).valueOf();
        /** @type {?} */
        var yearStartms = moment$1()
          .year(selectedYear)
          .startOf("year")
          .valueOf();
        /** @type {?} */
        var yearEndms = moment$1()
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
        var minDateMonthNumber = moment$1(minDatems).month();
        /** @type {?} */
        var diff = moment$1(maxDatems).diff(moment$1(minDatems), "months");
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
                format = moment$1(date)._f;
              }
            }
            return moment$1(d, format).valueOf() == date;
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
      var todayDate = moment$1()
        .startOf("day")
        .valueOf();
      /** @type {?} */
      var type = config.type;
      /** @type {?} */
      var firstLastDay = this.getFirstLastDay(moment$1(todayDate).format(DEFAULT_DATE_FROMAT), type);
      /** @type {?} */
      var firstDay = moment$1(firstLastDay.firstDay, DEFAULT_DATE_FROMAT).valueOf();
      /** @type {?} */
      var lastDay = moment$1(firstLastDay.lastDay, DEFAULT_DATE_FROMAT).valueOf();
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
      var day = moment$1(date, format).day();
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
          var yearStartDate_1 = moment$1()
            .year(year)
            .startOf("year")
            .format(DEFAULT_DATE_FROMAT);
          currentItemDate = moment$1(yearStartDate_1, DEFAULT_DATE_FROMAT)
            .add(monthStartWeekNumber + dateRows - 1, "week")
            .startOf("week")
            .add(rowItem, "day")
            .format(DEFAULT_DATE_FROMAT);
          rowItemText = moment$1(currentItemDate, DEFAULT_DATE_FROMAT).format("D");
        }
      } else if (type == "weekly") {
        if (!_.isNil(yearStartDate) && !_.isNil(itemCount)) {
          currentItemDate = moment$1(yearStartDate, DEFAULT_DATE_FROMAT)
            .add(itemCount, "week")
            .endOf("week")
            .format(DEFAULT_DATE_FROMAT);
          /** @type {?} */
          var weekNumber = itemCount + 1;
          rowItemText = "W" + weekNumber;
        }
      } else if (type == "monthly") {
        if (!_.isNil(itemCount) && !_.isNil(year)) {
          currentItemDate = moment$1()
            .year(year)
            .month(itemCount)
            .endOf("month")
            .format(DEFAULT_DATE_FROMAT);
          rowItemText = moment$1(currentItemDate, DEFAULT_DATE_FROMAT).format("MMM");
        }
      } else if (type == "quarterly") {
        if (!_.isNil(itemCount) && !_.isNil(year)) {
          currentItemDate = moment$1()
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
        formattedStartDate = moment$1(startDate, DEFAULT_DATE_FROMAT).format(returnFormat);
        if (type == "weekly") {
          formattedStartDate = moment$1(startDate, DEFAULT_DATE_FROMAT)
            .startOf("week")
            .format(returnFormat);
        } else if (type == "monthly") {
          formattedStartDate = moment$1(startDate, DEFAULT_DATE_FROMAT)
            .startOf("month")
            .format(returnFormat);
        } else if (type == "quarterly") {
          formattedStartDate = moment$1(startDate, DEFAULT_DATE_FROMAT)
            .startOf("quarter")
            .format(returnFormat);
        } else if (type == "yearly") {
          formattedStartDate = moment$1(startDate, DEFAULT_DATE_FROMAT)
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
      return moment$1(date, DEFAULT_DATE_FROMAT).format("YYYY");
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
        firstDay = moment$1(date, DEFAULT_DATE_FROMAT)
          .startOf("week")
          .format(DEFAULT_DATE_FROMAT);
        lastDay = moment$1(date, DEFAULT_DATE_FROMAT)
          .endOf("week")
          .format(DEFAULT_DATE_FROMAT);
      } else if (type == "monthly") {
        firstDay = moment$1(date, DEFAULT_DATE_FROMAT)
          .startOf("month")
          .format(DEFAULT_DATE_FROMAT);
        lastDay = moment$1(date, DEFAULT_DATE_FROMAT)
          .endOf("month")
          .format(DEFAULT_DATE_FROMAT);
      } else if (type == "quarterly") {
        firstDay = moment$1(date, DEFAULT_DATE_FROMAT)
          .startOf("quarter")
          .format(DEFAULT_DATE_FROMAT);
        lastDay = moment$1(date, DEFAULT_DATE_FROMAT)
          .endOf("quarter")
          .format(DEFAULT_DATE_FROMAT);
      } else if (type == "yearly") {
        firstDay = moment$1(date, DEFAULT_DATE_FROMAT)
          .startOf("year")
          .format(DEFAULT_DATE_FROMAT);
        lastDay = moment$1(date, DEFAULT_DATE_FROMAT)
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
        tz = EU_TZ_CODE$1;
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
        date = moment$1(date, format)
          .startOf("day")
          .valueOf();
      } else {
        date = moment$1().valueOf();
      }
      /** @type {?} */
      var today = new Date(date).toLocaleString("en-US", {
        timeZone: TZ_NAMES[tz]
      });
      today = moment$1(today, "MM/DD/YYYY, hh:mm:ss A");
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
      return moment$1(today).format(viewDateFormat + "  hh:mm A");
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
      return moment$1(formattedDate).format("" + format);
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
        var year = moment$1(date, "YYYY-MM-DD").year();
        /** @type {?} */
        var month = moment$1(date, "YYYY-MM-DD").month();
        /** @type {?} */
        var day = Number(moment$1(date, "YYYY-MM-DD").format("D"));
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
    DateTimeRangePickerUtilityService.decorators = [{ type: core.Injectable }];
    return DateTimeRangePickerUtilityService;
  })();

  /**
   * @fileoverview added by tsickle
   * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
   */
  /** @type {?} */
  var moment$2 = require("moment");
  /** @type {?} */
  var _$1 = require("lodash");
  /** @enum {number} */
  var InputFocusBlur = {
    focus: 1,
    blur: 2
  };
  InputFocusBlur[InputFocusBlur.focus] = "focus";
  InputFocusBlur[InputFocusBlur.blur] = "blur";
  /** @type {?} */
  var DEFAULT_DATE_FROMAT$1 = DateRangePickerConstants.DEFAULT.DATE_FROMAT;
  /** @type {?} */
  var DEFAULT_TIME_FORMAT$1 = DateRangePickerConstants.DEFAULT.TIME_FORMAT;
  /** @type {?} */
  var DEFAULT_START_DATE$1 = DateRangePickerConstants.DEFAULT.START_DATE;
  /** @type {?} */
  var DEFAULT_END_DATE$1 = DateRangePickerConstants.DEFAULT.END_DATE;
  /** @type {?} */
  var DEFAULT_MIN_DATE$1 = DateRangePickerConstants.DEFAULT.MIN_DATE;
  /** @type {?} */
  var DEFAULT_MAX_DATE$1 = DateRangePickerConstants.DEFAULT.MAX_DATE;
  /** @type {?} */
  var DEFAULT_START_TIME$1 = DateRangePickerConstants.DEFAULT.START_TIME;
  /** @type {?} */
  var DEFAULT_END_TIME$1 = DateRangePickerConstants.DEFAULT.END_TIME;
  /** @type {?} */
  var TZ_CODES = DateRangePickerConstants.CONSTANT.TZ_CODES;
  /** @type {?} */
  var USA_TZ_CODE$1 = DateRangePickerConstants.CONSTANT.USA_TZ_CODE;
  var DateTimeRangePickerComponent = /** @class */ (function() {
    function DateTimeRangePickerComponent(element, renderer, dateTimeRangePickerUtilityService) {
      var _this = this;
      this.element = element;
      this.renderer = renderer;
      this.dateTimeRangePickerUtilityService = dateTimeRangePickerUtilityService;
      this.canBeEmpty = false;
      this.dateRangeModelChange = new core.EventEmitter();
      this.dateRangeChanged = new core.EventEmitter();
      this.inputFocusBlur = new core.EventEmitter();
      this.selectedDate = new core.EventEmitter();
      this.sides = [];
      this.dates = {
        left: /** @type {?} */ ({}),
        right: /** @type {?} */ ({})
      };
      this.calendarAvailable = {
        left: /** @type {?} */ (false),
        right: /** @type {?} */ (false)
      };
      this.showCalendar = false;
      this.customRange = false;
      this.selectedDateText = "";
      this.dateTitleText = {
        left: /** @type {?} */ (""),
        right: /** @type {?} */ ("")
      };
      this.weekDayOptions = ["su", "mo", "tu", "we", "th", "fr", "sa"];
      this.selectedMonth = {
        left: /** @type {?} */ (""),
        right: /** @type {?} */ ("")
      };
      this.selectedYear = {
        left: /** @type {?} */ (""),
        right: /** @type {?} */ ("")
      };
      this.activeItem = {
        left: /** @type {?} */ (""),
        right: /** @type {?} */ ("")
      };
      this.activeStartDate = null;
      this.activeEndDate = null;
      this.activeRange = null;
      this.frequencyColumnHeader = null;
      this.config = {};
      this.isValidFilter = false;
      this.isUserModelChange = true;
      this.timezones = TZ_CODES;
      this.localTimezone = this.dateTimeRangePickerUtilityService.getLocalTimezone();
      this.todayTime = "";
      this.timeItems = ["hour", "minute"];
      this.times = {
        left: /** @type {?} */ (""),
        right: /** @type {?} */ ("")
      };
      this.selectedHour = {
        left: /** @type {?} */ (""),
        right: /** @type {?} */ ("")
      };
      this.selectedMinute = {
        left: /** @type {?} */ (""),
        right: /** @type {?} */ ("")
      };
      this.selectedMeridian = {
        left: /** @type {?} */ (""),
        right: /** @type {?} */ ("")
      };
      this.options = this.dateTimeRangePickerUtilityService.getDefaultOptions();
      this.settings = this.dateTimeRangePickerUtilityService.getDefaultSettings();
      this.config = Object.assign(this.options, this.settings);
      this.todayTime = this.dateTimeRangePickerUtilityService.getZoneToday(
        this.selectedTimezone,
        this.config.viewDateFormat
      );
      this.renderer.listenGlobal("document", "click", function(event) {
        if (
          _this.showCalendar &&
          event.target &&
          event.target.className != "mat-option-text" &&
          _this.element.nativeElement !== event.target &&
          !_this.element.nativeElement.contains(event.target)
        ) {
          _this.onCalendarClose(event);
        }
      });
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    DateTimeRangePickerComponent.prototype.ngOnChanges
    /**
     * @param {?} changes
     * @return {?}
     */ = function(changes) {
      var _this = this;
      this.isUserModelChange = true;
      if (changes.canBeEmpty) {
        this.canBeEmpty = changes.canBeEmpty.currentValue;
      }
      if (changes.settings) {
        this.settings = _$1.merge(this.settings, changes.settings.currentValue);
      }
      if (changes.dateRangeModel) {
        this.dateRangeModel = changes.dateRangeModel.currentValue;
      }
      // this.settings.selectedModel = (this.settings.selectedModel) ? this.settings.selectedModel : this.settings.type;
      if (changes.dateRangeModel && !changes.dateRangeModel.firstChange) {
        /** @type {?} */
        var previousValue = changes.dateRangeModel.previousValue[this.config.selectedModel];
        /** @type {?} */
        var currentValue = changes.dateRangeModel.currentValue[this.config.selectedModel];
        if (
          previousValue &&
          currentValue &&
          previousValue.startDate == currentValue.startDate &&
          previousValue.endDate == currentValue.endDate
        ) {
          this.isUserModelChange = false;
        }
      }
      if (changes.optionService && changes.optionService.currentValue) {
        changes.optionService.currentValue.subscribe(
          function(dateOptions) {
            if (_$1.isObject(dateOptions) && !_$1.isArray(dateOptions)) {
              _this.options = dateOptions.plain ? dateOptions.plain() : dateOptions;
            }
          },
          function(err) {
            console.error("DateRangePickerComponent | Filter Call Failure: ", err);
          },
          function() {
            _this.init();
          }
        );
      }
      if (changes.options) {
        this.options = changes.options ? changes.options.currentValue : this.options;
      }
      if (!changes.optionService) {
        this.init();
      }
    };
    // Events
    // Events
    /**
     * @param {?} value
     * @return {?}
     */
    DateTimeRangePickerComponent.prototype.onDateRangeInputChange =
      // Events
      /**
       * @param {?} value
       * @return {?}
       */
      function(value) {
        this.dateRangeSelected();
      };
    /**
     * @param {?} disabled
     * @return {?}
     */
    DateTimeRangePickerComponent.prototype.setDisabledState
    /**
     * @param {?} disabled
     * @return {?}
     */ = function(disabled) {
      this.config.componentDisabled = disabled;
    };
    /**
     * @return {?}
     */
    DateTimeRangePickerComponent.prototype.onComponentClick
    /**
     * @return {?}
     */ = function() {
      this.showCalendar = !this.showCalendar;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DateTimeRangePickerComponent.prototype.onFocusInput
    /**
     * @param {?} event
     * @return {?}
     */ = function(event) {
      this.inputFocusBlur.emit({
        reason: InputFocusBlur.focus,
        value: event.target.value
      });
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DateTimeRangePickerComponent.prototype.onBlurInput
    /**
     * @param {?} event
     * @return {?}
     */ = function(event) {
      this.selectedDateText = event.target.value;
      this.inputFocusBlur.emit({
        reason: InputFocusBlur.blur,
        value: event.target.value
      });
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DateTimeRangePickerComponent.prototype.onCalendarClose
    /**
     * @param {?} event
     * @return {?}
     */ = function(event) {
      if (this.config.startDate && this.config.endDate) {
        this.filterInputBox.nativeElement.classList.remove("empty-filter");
        this.showCalendar = false;
      }
    };
    /**
     * @param {?} month
     * @return {?}
     */
    DateTimeRangePickerComponent.prototype.isPrevAvailale
    /**
     * @param {?} month
     * @return {?}
     */ = function(month) {
      /** @type {?} */
      var minDate = this.dateTimeRangePickerUtilityService.formatDateToDefaultFormat(
        this.config.minDate,
        DEFAULT_DATE_FROMAT$1
      );
      /** @type {?} */
      var currentMonthStartDate = moment$2(month, "MMM YYYY")
        .startOf("month")
        .valueOf();
      if (
        currentMonthStartDate >
        moment$2(minDate, DEFAULT_DATE_FROMAT$1)
          .startOf("month")
          .valueOf()
      ) {
        return true;
      } else {
        return false;
      }
    };
    /**
     * @param {?} month
     * @return {?}
     */
    DateTimeRangePickerComponent.prototype.isNextAvailale
    /**
     * @param {?} month
     * @return {?}
     */ = function(month) {
      /** @type {?} */
      var maxDate = this.dateTimeRangePickerUtilityService.formatDateToDefaultFormat(
        this.config.maxDate,
        DEFAULT_DATE_FROMAT$1
      );
      /** @type {?} */
      var currentMonthEndDate = moment$2(month, "MMM YYYY")
        .endOf("month")
        .valueOf();
      if (
        currentMonthEndDate <
        moment$2(maxDate, DEFAULT_DATE_FROMAT$1)
          .endOf("month")
          .valueOf()
      ) {
        return true;
      } else {
        return false;
      }
    };
    /**
     * @return {?}
     */
    DateTimeRangePickerComponent.prototype.getCalendarColspan
    /**
     * @return {?}
     */ = function() {
      if (this.config.type == "daily") {
        return 6;
      } else if (this.config.type == "weekly") {
        return 8;
      } else if (this.config.type == "monthly") {
        return 3;
      } else if (this.config.type == "quarterly") {
        return 1;
      } else if (this.config.type == "yearly") {
        return 1;
      }
    };
    /**
     * @return {?}
     */
    DateTimeRangePickerComponent.prototype.getCalendarRowItemColspan
    /**
     * @return {?}
     */ = function() {
      if (this.config.type == "monthly") {
        return 3;
      } else if (this.config.type == "quarterly") {
        return 6;
      } else if (this.config.type == "yearly") {
        return 6;
      }
    };
    /**
     * @param {?} date
     * @param {?} month
     * @param {?} side
     * @return {?}
     */
    DateTimeRangePickerComponent.prototype.getDatecharacteristics
    /**
     * @param {?} date
     * @param {?} month
     * @param {?} side
     * @return {?}
     */ = function(date, month, side) {
      /** @type {?} */
      var currentDate = moment$2(date, DEFAULT_DATE_FROMAT$1)
        .startOf("day")
        .valueOf();
      /** @type {?} */
      var minDate = moment$2(
        this.dateTimeRangePickerUtilityService.formatDateToDefaultFormat(this.config.minDate, DEFAULT_DATE_FROMAT$1),
        DEFAULT_DATE_FROMAT$1
      )
        .startOf("day")
        .valueOf();
      /** @type {?} */
      var maxDate = moment$2(
        this.dateTimeRangePickerUtilityService.formatDateToDefaultFormat(this.config.maxDate, DEFAULT_DATE_FROMAT$1),
        DEFAULT_DATE_FROMAT$1
      )
        .startOf("day")
        .valueOf();
      /** @type {?} */
      var startDate = moment$2(
        this.dateTimeRangePickerUtilityService.formatDateToDefaultFormat(this.config.startDate, DEFAULT_DATE_FROMAT$1),
        DEFAULT_DATE_FROMAT$1
      )
        .startOf("day")
        .valueOf();
      /** @type {?} */
      var endDate = moment$2(
        this.dateTimeRangePickerUtilityService.formatDateToDefaultFormat(this.config.endDate, DEFAULT_DATE_FROMAT$1),
        DEFAULT_DATE_FROMAT$1
      )
        .startOf("day")
        .valueOf();
      /** @type {?} */
      var currentMonthStartDate = moment$2(month, "MMM YYYY")
        .startOf("month")
        .startOf("day")
        .valueOf();
      /** @type {?} */
      var currentMonthEndDate = moment$2(month, "MMM YYYY")
        .endOf("month")
        .startOf("day")
        .valueOf();
      /** @type {?} */
      var available = this.dateTimeRangePickerUtilityService.isDateAvailable(
        currentDate,
        minDate,
        maxDate,
        startDate,
        endDate,
        currentMonthStartDate,
        currentMonthEndDate,
        this.config
      );
      /** @type {?} */
      var inRange = this.dateTimeRangePickerUtilityService.isDateInRange(
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
      /** @type {?} */
      var active = this.dateTimeRangePickerUtilityService.isDateActive(currentDate, startDate, endDate, side);
      /** @type {?} */
      var today = this.dateTimeRangePickerUtilityService.isDateToday(currentDate, this.config);
      // Active
      if (currentDate == startDate && side == "left") {
        this.activeStartDate = date;
      } else if (currentDate == endDate && side == "right") {
        this.activeEndDate = date;
      }
      return {
        available: available,
        inRange: inRange,
        active: active,
        today: today
      };
    };
    /**
     * @param {?} month
     * @param {?} side
     * @return {?}
     */
    DateTimeRangePickerComponent.prototype.onClickPrevious
    /**
     * @param {?} month
     * @param {?} side
     * @return {?}
     */ = function(month, side) {
      /** @type {?} */
      var startDate = moment$2(month, "MMM YYYY")
        .subtract(1, "month")
        .startOf("month")
        .format(DEFAULT_DATE_FROMAT$1);
      this.dates[side] = this.generateCalendar(startDate, side);
    };
    /**
     * @param {?} month
     * @param {?} side
     * @return {?}
     */
    DateTimeRangePickerComponent.prototype.onClickNext
    /**
     * @param {?} month
     * @param {?} side
     * @return {?}
     */ = function(month, side) {
      /** @type {?} */
      var endDate = moment$2(month, "MMM YYYY")
        .add(1, "month")
        .endOf("month")
        .format(DEFAULT_DATE_FROMAT$1);
      this.dates[side] = this.generateCalendar(endDate, side);
    };
    /**
     * @param {?} item
     * @param {?} itemCell
     * @param {?} side
     * @return {?}
     */
    DateTimeRangePickerComponent.prototype.onCellClick
    /**
     * @param {?} item
     * @param {?} itemCell
     * @param {?} side
     * @return {?}
     */ = function(item, itemCell, side) {
      /** @type {?} */
      var date = item.date ? moment$2(item.date, DEFAULT_DATE_FROMAT$1).valueOf() : item.date;
      /** @type {?} */
      var startDate = this.config.startDate
        ? moment$2(this.config.startDate, DEFAULT_DATE_FROMAT$1).valueOf()
        : this.config.startDate;
      /** @type {?} */
      var endDate = this.config.endDate
        ? moment$2(this.config.endDate, DEFAULT_DATE_FROMAT$1).valueOf()
        : this.config.endDate;
      /** @type {?} */
      var minDate = this.config.minDate
        ? moment$2(this.config.minDate, DEFAULT_DATE_FROMAT$1).valueOf()
        : this.config.minDate;
      /** @type {?} */
      var maxDate = this.config.maxDate
        ? moment$2(this.config.maxDate, DEFAULT_DATE_FROMAT$1).valueOf()
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
        this.config.endDate = _$1.cloneDeep(this.config.startDate);
        this.activeItem.right = item;
      } else {
        this.config.endDate = item.date;
        this.activeItem.right = item;
      }
      if (this.config.singleDatePicker) {
        this.config.endDate = _$1.cloneDeep(this.config.startDate);
        this.activeItem.right = this.activeItem.left = item;
      }
      this.doApply();
    };
    /**
     * @param {?} item
     * @param {?} itemCell
     * @return {?}
     */
    DateTimeRangePickerComponent.prototype.onCellMouseEnter
    /**
     * @param {?} item
     * @param {?} itemCell
     * @return {?}
     */ = function(item, itemCell) {
      var _this = this;
      if (!item.available) {
        return;
      }
      /** @type {?} */
      var date = item.date ? moment$2(item.date, DEFAULT_DATE_FROMAT$1).valueOf() : item.date;
      /** @type {?} */
      var startDate = this.config.startDate
        ? moment$2(this.config.startDate, DEFAULT_DATE_FROMAT$1).valueOf()
        : this.config.startDate;
      /** @type {?} */
      var endDate = this.config.endDate
        ? moment$2(this.config.endDate, DEFAULT_DATE_FROMAT$1).valueOf()
        : this.config.endDate;
      /** @type {?} */
      var hoverItemFirstDate = itemCell ? itemCell.getAttribute("firstDay") : "";
      /** @type {?} */
      var hoverItemLastDate = itemCell ? itemCell.getAttribute("lastDay") : "";
      /** @type {?} */
      var hoverItemText = itemCell ? itemCell.innerText : "";
      hoverItemFirstDate = moment$2(hoverItemFirstDate, DEFAULT_DATE_FROMAT$1).format(this.config.viewDateFormat);
      hoverItemLastDate = moment$2(hoverItemLastDate, DEFAULT_DATE_FROMAT$1).format(this.config.viewDateFormat);
      /** @type {?} */
      var activeItemInputFieldText = hoverItemText + " (" + hoverItemFirstDate + " - " + hoverItemLastDate + ")";
      if (this.config.type == "daily") {
        activeItemInputFieldText = "" + hoverItemLastDate;
      }
      if (!endDate) {
        _$1.forOwn(this.dates, function(sideDates, side) {
          _$1.forEach(sideDates.itemRows, function(rows) {
            _$1.forEach(rows.items, function(item) {
              if (item.available) {
                /** @type {?} */
                var hoverItemDate = item.date ? moment$2(item.date, DEFAULT_DATE_FROMAT$1).valueOf() : item.date;
                if ((hoverItemDate > startDate && hoverItemDate < date) || date == hoverItemDate) {
                  item.inRange = true;
                  _this.dateTitleText.right = activeItemInputFieldText;
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
    };
    /**
     * @return {?}
     */
    DateTimeRangePickerComponent.prototype.onCellMouseLeave
    /**
     * @return {?}
     */ = function() {
      if (!this.config.endDate) {
        _$1.forOwn(this.dates, function(sideDates, side) {
          _$1.forEach(sideDates.itemRows, function(rows) {
            _$1.forEach(rows.items, function(item) {
              item.inRange = false;
            });
          });
        });
      } else {
        this.updateActiveItemInputField();
      }
    };
    /**
     * @param {?} rangeLabel
     * @param {?} dateRangeModel
     * @return {?}
     */
    DateTimeRangePickerComponent.prototype.onRangeClick
    /**
     * @param {?} rangeLabel
     * @param {?} dateRangeModel
     * @return {?}
     */ = function(rangeLabel, dateRangeModel) {
      this.activeRange = rangeLabel;
      if (rangeLabel == "Custom Range") {
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
    };
    /**
     * @return {?}
     */
    DateTimeRangePickerComponent.prototype.updateCalendar
    /**
     * @return {?}
     */ = function() {
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
    };
    /**
     * @param {?} label
     * @param {?} side
     * @param {?} type
     * @return {?}
     */
    DateTimeRangePickerComponent.prototype.onCalendarLabelChange
    /**
     * @param {?} label
     * @param {?} side
     * @param {?} type
     * @return {?}
     */ = function(label, side, type) {
      this.showCalendar = true;
      if (type == "month") {
        this.selectedMonth[side] = label;
      } else if (type == "year") {
        this.selectedYear[side] = label;
      }
      if (this.config.type != "daily") {
        this.selectedMonth[side] = "Jun";
      }
      if (this.config.type != "yearly") {
        /** @type {?} */
        var selectedMonth = this.selectedMonth[side] + " " + this.selectedYear[side];
        /** @type {?} */
        var date = moment$2(selectedMonth, "MMM YYYY")
          .startOf("month")
          .format(DEFAULT_DATE_FROMAT$1);
        this.dates[side] = this.generateCalendar(date, side);
      } else {
        if (this.selectedYear.left <= this.selectedYear.right && side == "right") {
          this.config.startDate = moment$2(this.selectedYear.left, "YYYY")
            .startOf("year")
            .format(DEFAULT_DATE_FROMAT$1);
          this.config.endDate = moment$2(this.selectedYear.right, "YYYY")
            .endOf("year")
            .format(DEFAULT_DATE_FROMAT$1);
          this.doApply();
        }
        /** @type {?} */
        var config = {
          startDate: moment$2(this.selectedYear.left, "YYYY")
            .startOf("year")
            .format(DEFAULT_DATE_FROMAT$1),
          type: "yearly"
        };
        /** @type {?} */
        var startDate = this.dateTimeRangePickerUtilityService.formatStartDate(config, this.config.viewDateFormat);
        /** @type {?} */
        var endDate = this.config.endDate
          ? moment$2(this.config.endDate, DEFAULT_DATE_FROMAT$1).format(this.config.viewDateFormat)
          : "";
        this.dateTitleText.left = "" + startDate;
        this.dateTitleText.right = "" + endDate;
      }
    };
    /**
     * @param {?} timeItem
     * @param {?} side
     * @param {?} item
     * @return {?}
     */
    DateTimeRangePickerComponent.prototype.onTimeLabelChange
    /**
     * @param {?} timeItem
     * @param {?} side
     * @param {?} item
     * @return {?}
     */ = function(timeItem, side, item) {
      /** @type {?} */
      var time = null;
      if (side == "left") {
        time = this.config.startTime.split(":");
        if (timeItem == "hour") {
          this.config.startTime = item + ":" + time[1];
        } else {
          this.config.startTime = time[0] + ":" + item;
        }
        /** @type {?} */
        var startDateEpoch = moment$2(this.config.startDate, DEFAULT_DATE_FROMAT$1).valueOf();
        /** @type {?} */
        var endDateEpoch = moment$2(this.config.endDate, DEFAULT_DATE_FROMAT$1).valueOf();
        if (startDateEpoch == endDateEpoch) {
          this.times.right = this.generateTimePicker(this.config.startTime, "right");
        }
      } else {
        time = this.config.endTime.split(":");
        if (timeItem == "hour") {
          this.config.endTime = item + ":" + time[1];
        } else {
          this.config.endTime = time[0] + ":" + item;
        }
      }
      if (timeItem == "hour") {
        this.selectedHour[side] = this.dateTimeRangePickerUtilityService.convertToViewTimeItem(item);
      } else {
        this.selectedMinute[side] = this.dateTimeRangePickerUtilityService.convertToViewTimeItem(item);
      }
    };
    /**
     * @return {?}
     */
    DateTimeRangePickerComponent.prototype.onTimeApply
    /**
     * @return {?}
     */ = function() {
      this.dateRangeSelected();
      this.updateInputField();
    };
    // Helpers
    // Helpers
    /**
     * @return {?}
     */
    DateTimeRangePickerComponent.prototype.init =
      // Helpers
      /**
       * @return {?}
       */
      function() {
        if (this.isUserModelChange) {
          this.isValidFilter = false;
          this.config = Object.assign(
            this.dateTimeRangePickerUtilityService.getDefaultOptions(),
            this.dateTimeRangePickerUtilityService.getDefaultSettings()
          );
          this.initialize();
          this.parseOptions();
          this.updateInputField();
        }
      };
    /**
     * @return {?}
     */
    DateTimeRangePickerComponent.prototype.initialize
    /**
     * @return {?}
     */ = function() {
      this.sides.length = 0;
      this.dates = {};
      this.calendarAvailable = {
        left: /** @type {?} */ (false),
        right: /** @type {?} */ (false)
      };
      this.showCalendar = false;
      this.selectedDateText = "";
      this.dateTitleText = {
        left: /** @type {?} */ (""),
        right: /** @type {?} */ ("")
      };
      this.weekDayOptions = ["su", "mo", "tu", "we", "th", "fr", "sa"];
      this.selectedMonth = {
        left: /** @type {?} */ (""),
        right: /** @type {?} */ ("")
      };
      this.selectedYear = {
        left: /** @type {?} */ (""),
        right: /** @type {?} */ ("")
      };
      // this.activeItem = {
      //   'left': <string> '',
      //   'right': <string> ''
      // };
      this.times = {
        left: /** @type {?} */ (""),
        right: /** @type {?} */ ("")
      };
      this.activeStartDate = null;
      this.activeEndDate = null;
      this.frequencyColumnHeader = null;
      this.customRange = false;
      this.activeRange = "";
    };
    /**
     * @return {?}
     */
    DateTimeRangePickerComponent.prototype.parseOptions
    /**
     * @return {?}
     */ = function() {
      var _this = this;
      if (this.options !== undefined) {
        Object.keys(this.options).forEach(function(k) {
          _this.config[k] = _this.options[k];
        });
      }
      if (this.settings !== undefined) {
        Object.keys(this.settings).forEach(function(k) {
          _this.config[k] = _this.settings[k];
        });
      }
      this.config.selectedModel = this.config.selectedModel ? this.config.selectedModel : this.config.type;
      if (this.config.type == "weekly" || this.config.type == "yearly") {
        this.config.showRowNumber = false;
      }
      if (this.config.singleDatePicker) {
        this.config.startDate = _$1.cloneDeep(this.config.endDate);
      }
      this.selectTimeZone();
      this.parseOptionsToDefaultDateFormat();
      this.processDateRangeModel();
      this.handleDateArray();
      this.sanitizeDates();
      this.processRanges();
      this.doDateRangeModelChange();
      // this.config.selectedModel = undefined;
    };
    /**
     * @return {?}
     */
    DateTimeRangePickerComponent.prototype.selectTimeZone
    /**
     * @return {?}
     */ = function() {
      if (this.config.timezoneSupport) {
        if (!this.config.defaultTimezone) {
          this.config.defaultTimezone = USA_TZ_CODE$1;
        }
        this.selectedTimezone = this.config.defaultTimezone;
      }
      if (this.config.useLocalTimezone) {
        this.selectedTimezone = this.localTimezone;
      }
      this.onTimezoneChange(this.selectedTimezone);
    };
    /**
     * @return {?}
     */
    DateTimeRangePickerComponent.prototype.parseOptionsToDefaultDateFormat
    /**
     * @return {?}
     */ = function() {
      this.config.minDate = this.config.minDate
        ? this.dateTimeRangePickerUtilityService.formatDateToDefaultFormat(
            this.config.minDate,
            this.config.inputDateFormat
          )
        : DEFAULT_MIN_DATE$1;
      this.config.maxDate = this.config.maxDate
        ? this.dateTimeRangePickerUtilityService.formatDateToDefaultFormat(
            this.config.maxDate,
            this.config.inputDateFormat
          )
        : DEFAULT_MAX_DATE$1;
      this.config.startDate = this.config.startDate
        ? this.dateTimeRangePickerUtilityService.formatDateToDefaultFormat(
            this.config.startDate,
            this.config.inputDateFormat
          )
        : DEFAULT_START_DATE$1;
      this.config.endDate = this.config.endDate
        ? this.dateTimeRangePickerUtilityService.formatDateToDefaultFormat(
            this.config.endDate,
            this.config.inputDateFormat
          )
        : DEFAULT_END_DATE$1;
      if (this.config.timePicker) {
        this.config.minTime = this.config.minTime
          ? this.dateTimeRangePickerUtilityService.formatTimeToDefaultFormat(this.config.minTime)
          : DEFAULT_START_TIME$1;
        this.config.maxTime = this.config.maxTime
          ? this.dateTimeRangePickerUtilityService.formatTimeToDefaultFormat(this.config.maxTime)
          : DEFAULT_END_TIME$1;
        this.config.startTime = this.config.startTime
          ? this.dateTimeRangePickerUtilityService.formatTimeToDefaultFormat(this.config.startTime)
          : DEFAULT_START_TIME$1;
        this.config.endTime = this.config.endTime
          ? this.dateTimeRangePickerUtilityService.formatTimeToDefaultFormat(this.config.endTime)
          : DEFAULT_END_TIME$1;
      }
    };
    /**
     * @desc sets startDate, endDate
     */
    /**
     * @desc sets startDate, endDate
     * @return {?}
     */
    DateTimeRangePickerComponent.prototype.processDateRangeModel
    /**
     * @desc sets startDate, endDate
     * @return {?}
     */ = function() {
      if (undefined != this.dateRangeModel && !_$1.isEmpty(this.dateRangeModel)) {
        if (this.dateRangeModel[this.config.selectedModel]) {
          /** @type {?} */
          var dateRangeMinDate = this.dateRangeModel[this.config.selectedModel].minDate;
          /** @type {?} */
          var dateRangeMaxDate = this.dateRangeModel[this.config.selectedModel].maxDate;
          /** @type {?} */
          var dateRangeStartDate = this.dateRangeModel[this.config.selectedModel].startDate;
          /** @type {?} */
          var dateRangeEndDate = this.dateRangeModel[this.config.selectedModel].endDate;
          /** @type {?} */
          var dateRangeDateArray = this.dateRangeModel[this.config.selectedModel].dateArray;
          this.config.dateArray = dateRangeDateArray ? dateRangeDateArray : this.config.dateArray;
          this.config.minDate = dateRangeMinDate
            ? this.dateTimeRangePickerUtilityService.formatDateToDefaultFormat(
                dateRangeMinDate,
                this.config.inputDateFormat
              )
            : this.config.minDate;
          this.config.maxDate = dateRangeMaxDate
            ? this.dateTimeRangePickerUtilityService.formatDateToDefaultFormat(
                dateRangeMaxDate,
                this.config.inputDateFormat
              )
            : this.config.maxDate;
          this.config.startDate = dateRangeStartDate
            ? this.dateTimeRangePickerUtilityService.formatDateToDefaultFormat(
                dateRangeStartDate,
                this.config.inputDateFormat
              )
            : this.config.startDate;
          this.config.endDate = dateRangeEndDate
            ? this.dateTimeRangePickerUtilityService.formatDateToDefaultFormat(
                dateRangeEndDate,
                this.config.inputDateFormat
              )
            : this.config.endDate;
          if (this.config.timePicker) {
            /** @type {?} */
            var dateRangeMinTime = this.dateRangeModel[this.config.selectedModel].minTime;
            /** @type {?} */
            var dateRangeMaxTime = this.dateRangeModel[this.config.selectedModel].maxTime;
            /** @type {?} */
            var dateRangeStartTime = this.dateRangeModel[this.config.selectedModel].startTime;
            /** @type {?} */
            var dateRangeEndTime = this.dateRangeModel[this.config.selectedModel].endTime;
            this.config.minTime = this.config.minTime
              ? this.dateTimeRangePickerUtilityService.formatTimeToDefaultFormat(dateRangeMinTime)
              : this.config.minTime;
            this.config.maxTime = this.config.maxTime
              ? this.dateTimeRangePickerUtilityService.formatTimeToDefaultFormat(dateRangeMaxTime)
              : this.config.maxTime;
            this.config.startTime = this.config.startTime
              ? this.dateTimeRangePickerUtilityService.formatTimeToDefaultFormat(dateRangeStartTime)
              : this.config.startTime;
            this.config.endTime = this.config.endTime
              ? this.dateTimeRangePickerUtilityService.formatTimeToDefaultFormat(dateRangeEndTime)
              : this.config.endTime;
          }
        }
      }
    };
    /**
     * @desc sets minDate, maxDate, startDate, endDate if not passed
     */
    /**
     * @desc sets minDate, maxDate, startDate, endDate if not passed
     * @return {?}
     */
    DateTimeRangePickerComponent.prototype.handleDateArray
    /**
     * @desc sets minDate, maxDate, startDate, endDate if not passed
     * @return {?}
     */ = function() {
      var _this = this;
      if (this.config.dateArray && this.config.dateArray.length > 0) {
        this.config.dateArray = this.dateTimeRangePickerUtilityService.getSanitizedDateArray(this.config);
        // sort in asc order
        this.config.dateArray = _$1.sortBy(this.config.dateArray, function(date) {
          /** @type {?} */
          var format = null;
          if (isNaN(Number(date))) {
            if (_this.config.inputDateFormat) {
              format = _this.config.inputDateFormat;
            } else {
              format = moment$2(date)._f;
            }
          }
          /** @type {?} */
          var value = moment$2(date, format).valueOf();
          if (!isNaN(value)) {
            return value;
          } else {
            console.warn(
              "M1 Date Range Picker: Values in Date Array are not in any known format. Please pass the format or pass the dates in any known format"
            );
          }
        });
        /** @type {?} */
        var minDate = this.config.dateArray[0];
        /** @type {?} */
        var maxDate = this.config.dateArray[this.config.dateArray.length - 1];
        if (
          moment$2(this.config.minDate, DEFAULT_DATE_FROMAT$1).valueOf() ==
          moment$2(DEFAULT_MIN_DATE$1, DEFAULT_DATE_FROMAT$1).valueOf()
        ) {
          this.config.minDate = this.dateTimeRangePickerUtilityService.formatDateToDefaultFormat(
            minDate,
            this.config.inputDateFormat
          );
        }
        if (
          moment$2(this.config.maxDate, DEFAULT_DATE_FROMAT$1).valueOf() ==
          moment$2(DEFAULT_MAX_DATE$1, DEFAULT_DATE_FROMAT$1).valueOf()
        ) {
          this.config.maxDate = this.dateTimeRangePickerUtilityService.formatDateToDefaultFormat(
            maxDate,
            this.config.inputDateFormat
          );
        }
        if (
          moment$2(this.config.startDate, DEFAULT_DATE_FROMAT$1).valueOf() ==
          moment$2(DEFAULT_START_DATE$1, DEFAULT_DATE_FROMAT$1).valueOf()
        ) {
          this.config.startDate = this.dateTimeRangePickerUtilityService.formatDateToDefaultFormat(
            minDate,
            this.config.inputDateFormat
          );
        }
        if (
          moment$2(this.config.endDate, DEFAULT_DATE_FROMAT$1).valueOf() ==
          moment$2(DEFAULT_END_DATE$1, DEFAULT_DATE_FROMAT$1).valueOf()
        ) {
          this.config.endDate = this.dateTimeRangePickerUtilityService.formatDateToDefaultFormat(
            maxDate,
            this.config.inputDateFormat
          );
        }
      }
    };
    /**
     * @return {?}
     */
    DateTimeRangePickerComponent.prototype.sanitizeDates
    /**
     * @return {?}
     */ = function() {
      /** @type {?} */
      var subtractWeekCount = 0;
      if (this.config.type == "monthly") {
        this.config.minDate = moment$2(this.config.minDate, DEFAULT_DATE_FROMAT$1)
          .endOf("month")
          .format(DEFAULT_DATE_FROMAT$1);
        this.config.maxDate = moment$2(this.config.maxDate, DEFAULT_DATE_FROMAT$1)
          .subtract(subtractWeekCount, "week")
          .endOf("month")
          .format(DEFAULT_DATE_FROMAT$1);
        this.config.startDate = moment$2(this.config.startDate, DEFAULT_DATE_FROMAT$1)
          .endOf("month")
          .format(DEFAULT_DATE_FROMAT$1);
        this.config.endDate = moment$2(this.config.endDate, DEFAULT_DATE_FROMAT$1)
          .subtract(subtractWeekCount, "week")
          .endOf("month")
          .format(DEFAULT_DATE_FROMAT$1);
      } else if (this.config.type == "quarterly") {
        this.config.minDate = moment$2(this.config.minDate, DEFAULT_DATE_FROMAT$1)
          .endOf("quarter")
          .format(DEFAULT_DATE_FROMAT$1);
        this.config.maxDate = moment$2(this.config.maxDate, DEFAULT_DATE_FROMAT$1)
          .subtract(subtractWeekCount, "week")
          .endOf("quarter")
          .format(DEFAULT_DATE_FROMAT$1);
        this.config.startDate = moment$2(this.config.startDate, DEFAULT_DATE_FROMAT$1)
          .endOf("quarter")
          .format(DEFAULT_DATE_FROMAT$1);
        this.config.endDate = moment$2(this.config.endDate, DEFAULT_DATE_FROMAT$1)
          .subtract(subtractWeekCount, "week")
          .endOf("quarter")
          .format(DEFAULT_DATE_FROMAT$1);
      }
      if (this.config.type == "weekly") {
        this.config.minDate = moment$2(this.config.minDate, DEFAULT_DATE_FROMAT$1)
          .endOf("week")
          .format(DEFAULT_DATE_FROMAT$1);
        this.config.maxDate = moment$2(this.config.maxDate, DEFAULT_DATE_FROMAT$1)
          .endOf("week")
          .format(DEFAULT_DATE_FROMAT$1);
        this.config.startDate = moment$2(this.config.startDate, DEFAULT_DATE_FROMAT$1)
          .endOf("week")
          .format(DEFAULT_DATE_FROMAT$1);
        this.config.endDate = moment$2(this.config.endDate, DEFAULT_DATE_FROMAT$1)
          .endOf("week")
          .format(DEFAULT_DATE_FROMAT$1);
        if (this.config.type == "yearly") {
          /** @type {?} */
          var minDate = moment$2(this.config.minDate, DEFAULT_DATE_FROMAT$1).format(DEFAULT_DATE_FROMAT$1);
          /** @type {?} */
          var startDate = moment$2(this.config.startDate, DEFAULT_DATE_FROMAT$1).format(DEFAULT_DATE_FROMAT$1);
          this.config.minDate = minDate;
          this.config.startDate = startDate;
        }
      }
      if (
        moment$2(this.config.startDate, DEFAULT_DATE_FROMAT$1).valueOf() <
        moment$2(this.config.minDate, DEFAULT_DATE_FROMAT$1).valueOf()
      ) {
        this.config.minDate = this.config.startDate;
      }
      if (
        moment$2(this.config.endDate, DEFAULT_DATE_FROMAT$1).valueOf() >
        moment$2(this.config.maxDate, DEFAULT_DATE_FROMAT$1).valueOf()
      ) {
        this.config.maxDate = this.config.endDate;
      }
    };
    /**
     * @return {?}
     */
    DateTimeRangePickerComponent.prototype.processRanges
    /**
     * @return {?}
     */ = function() {
      if (this.config.showRanges && !this.config.singleDatePicker) {
        if (_$1.isEmpty(this.config.availableRanges)) {
          this.config.availableRanges = this.dateTimeRangePickerUtilityService.createDefaultRanges(this.config);
        }
        this.selectActiveRange();
      } else {
        this.activeRange = "Custom Range";
        this.onRangeClick(this.activeRange, null);
      }
    };
    /**
     * @return {?}
     */
    DateTimeRangePickerComponent.prototype.selectActiveRange
    /**
     * @return {?}
     */ = function() {
      var _this = this;
      _$1.forOwn(this.config.availableRanges, function(rangeModel, range) {
        if (_this.config.startDate == rangeModel.startDate && _this.config.endDate == rangeModel.endDate) {
          _this.activeRange = range;
          _this.updateActiveItem();
        }
      });
      if (!this.activeRange) {
        this.activeRange = "Custom Range";
        this.onRangeClick(this.activeRange, null);
      }
    };
    /**
     * @param {?} date
     * @param {?} side
     * @return {?}
     */
    DateTimeRangePickerComponent.prototype.generateCalendar
    /**
     * @param {?} date
     * @param {?} side
     * @return {?}
     */ = function(date, side) {
      this.selectedMonth[side] = moment$2(date, DEFAULT_DATE_FROMAT$1).format("MMM");
      this.selectedYear[side] = this.dateTimeRangePickerUtilityService.getSelectedYear(this.config, date, side);
      /** @type {?} */
      var calendarLabel = this.selectedMonth[side] + " " + this.selectedYear[side];
      /** @type {?} */
      var dates = {
        label: /** @type {?} */ (calendarLabel),
        months: this.dateTimeRangePickerUtilityService.getMonthsAvailable(
          this.config.minDate,
          this.config.maxDate,
          this.selectedYear[side]
        ),
        years: this.dateTimeRangePickerUtilityService.getYearsAvailable(this.config),
        itemRows: /** @type {?} */ ([])
      };
      this.weekDayOptions = [""];
      if (this.config.type != "yearly") {
        // moment returns wrong week number
        /** @type {?} */
        var monthStartWeekNumber = moment$2(date, DEFAULT_DATE_FROMAT$1)
          .year(this.selectedYear[side])
          .startOf("month")
          .week();
        // previousMonthLastWeek
        /** @type {?} */
        var yearStartDate = moment$2(this.selectedYear[side], "YYYY")
          .startOf("year")
          .format(DEFAULT_DATE_FROMAT$1);
        /** @type {?} */
        var numberOfRows = 1;
        /** @type {?} */
        var rowNumber = 0;
        /** @type {?} */
        var columns = 0;
        /** @type {?} */
        var currentItemDate = "";
        /** @type {?} */
        var datecharacteristics = {};
        /** @type {?} */
        var rowItemText = "";
        /** @type {?} */
        var rowVariables = {};
        /** @type {?} */
        var rowItemVariables = {};
        /** @type {?} */
        var firstDay = "";
        /** @type {?} */
        var lastDay = "";
        if (this.config.type == "daily") {
          numberOfRows = this.dateTimeRangePickerUtilityService.getNumberOfWeeks(date);
          this.weekDayOptions = ["su", "mo", "tu", "we", "th", "fr", "sa"];
        } else if (this.config.type == "weekly") {
          numberOfRows = 8;
          this.weekDayOptions = ["", "", "", "", "", "", ""];
        } else if (this.config.type == "monthly") {
          numberOfRows = 4;
          this.weekDayOptions = ["", "", ""];
        } else if (this.config.type == "quarterly") {
          numberOfRows = 4;
          this.weekDayOptions = [""];
        }
        for (var dateRows = 0; dateRows < numberOfRows; dateRows++) {
          /** @type {?} */
          var dateRowObj = {
            rowNumber: /** @type {?} */ (null),
            rowNumberText: /** @type {?} */ (null),
            items: /** @type {?} */ ([])
          };
          /** @type {?} */
          var rowOptions = {};
          rowOptions.type = this.config.type;
          rowOptions.monthStartWeekNumber = monthStartWeekNumber;
          rowOptions.dateRows = dateRows;
          rowOptions.year = this.selectedYear[side];
          rowVariables = this.dateTimeRangePickerUtilityService.getCalendarRowVariables(rowOptions);
          rowNumber = rowVariables.rowNumber;
          columns = rowVariables.columns;
          dateRowObj.rowNumber = rowNumber;
          dateRowObj.rowNumberText = this.dateTimeRangePickerUtilityService.getCalendarRowNumberText(
            this.config.type,
            rowNumber
          );
          for (var rowItem = 0; rowItem <= columns; rowItem++) {
            /** @type {?} */
            var rowItemOptions = {};
            rowItemOptions.type = this.config.type;
            rowItemOptions.monthStartWeekNumber = monthStartWeekNumber;
            rowItemOptions.dateRows = dateRows;
            rowItemOptions.rowNumber = rowNumber;
            rowItemOptions.yearStartDate = yearStartDate;
            rowItemOptions.year = this.selectedYear[side];
            rowItemOptions.rowItem = rowItem;
            rowItemOptions.columns = columns;
            rowItemOptions.year = this.selectedYear[side];
            rowItemVariables = this.dateTimeRangePickerUtilityService.getCalendarRowItemVariables(rowItemOptions);
            currentItemDate = rowItemVariables.currentItemDate;
            rowItemText = rowItemVariables.rowItemText;
            firstDay = rowItemVariables.firstDay;
            lastDay = rowItemVariables.lastDay;
            rowOptions.itemCount = rowItemVariables.itemCount;
            datecharacteristics = this.getDatecharacteristics(currentItemDate, calendarLabel, side);
            /** @type {?} */
            var itemObj = {
              date: currentItemDate,
              rowItemText: rowItemText,
              firstDay: firstDay,
              lastDay: lastDay,
              available: datecharacteristics.available,
              inRange: datecharacteristics.inRange,
              active: datecharacteristics.active,
              today: datecharacteristics.today
            };
            if (this.dateTimeRangePickerUtilityService.isRowIemValid(rowOptions)) {
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
    };
    /**
     * @param {?} time
     * @param {?} side
     * @return {?}
     */
    DateTimeRangePickerComponent.prototype.generateTimePicker
    /**
     * @param {?} time
     * @param {?} side
     * @return {?}
     */ = function(time, side) {
      /** @type {?} */
      var timeObject = {
        hour: [],
        minute: [],
        meridian: []
      };
      /** @type {?} */
      var startHour = 0;
      /** @type {?} */
      var endHour = 23;
      /** @type {?} */
      var startMinute = 0;
      /** @type {?} */
      var endMinute = 59;
      /** @type {?} */
      var selectedHour = side == "left" ? startHour : endHour;
      /** @type {?} */
      var selectedMinute = side == "left" ? startMinute : endMinute;
      /** @type {?} */
      var startDateEpoch = moment$2(this.config.startDate, DEFAULT_DATE_FROMAT$1).valueOf();
      /** @type {?} */
      var endDateEpoch = moment$2(this.config.endDate, DEFAULT_DATE_FROMAT$1).valueOf();
      if (time) {
        selectedHour = moment$2(time, DEFAULT_TIME_FORMAT$1).format("H");
        selectedMinute = moment$2(time, DEFAULT_TIME_FORMAT$1).format("m");
        if (side == "right" && startDateEpoch == endDateEpoch) {
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
      for (var h = startHour; h <= 23; h++) {
        /** @type {?} */
        var stringified_h = this.dateTimeRangePickerUtilityService.convertToViewTimeItem(h);
        timeObject.hour.push(stringified_h);
      }
      for (var m = startMinute; m <= 59; m++) {
        /** @type {?} */
        var stringified_m = this.dateTimeRangePickerUtilityService.convertToViewTimeItem(m);
        timeObject.minute.push(stringified_m);
      }
      this.selectedHour[side] = this.dateTimeRangePickerUtilityService.convertToViewTimeItem(selectedHour);
      this.selectedMinute[side] = this.dateTimeRangePickerUtilityService.convertToViewTimeItem(selectedMinute);
      if (side == "left") {
        this.config.startTime = this.selectedHour[side] + ":" + this.selectedMinute[side];
      } else if (side == "right") {
        this.config.endTime = this.selectedHour[side] + ":" + this.selectedMinute[side];
      }
      return timeObject;
    };
    /**
     * @param {?} day
     * @return {?}
     */
    DateTimeRangePickerComponent.prototype.capitalize
    /**
     * @param {?} day
     * @return {?}
     */ = function(day) {
      return _$1.capitalize(day);
    };
    /**
     * @return {?}
     */
    DateTimeRangePickerComponent.prototype.updateInputField
    /**
     * @return {?}
     */ = function() {
      /** @type {?} */
      var startDate = this.dateTimeRangePickerUtilityService.formatStartDate(this.config, this.config.viewDateFormat);
      /** @type {?} */
      var endDate = this.config.endDate
        ? moment$2(this.config.endDate, DEFAULT_DATE_FROMAT$1).format(this.config.viewDateFormat)
        : "";
      if (this.config.singleDatePicker) {
        /** @type {?} */
        var startDateText = startDate;
        /** @type {?} */
        var endDataText = endDate;
        /** @type {?} */
        var dateText = "";
        if (this.config.timePicker) {
          startDateText = startDate + " " + this.config.startTime;
          endDataText = endDate + " " + this.config.endTime;
        }
        if (this.config.displayBeginDate) {
          dateText = "" + startDateText;
        } else if (this.config.displayEndDate) {
          dateText = "" + endDataText;
        } else {
          dateText = startDateText + " - " + endDataText;
        }
        this.selectedDateText = dateText;
      } else {
        /** @type {?} */
        var startDateText = startDate;
        /** @type {?} */
        var endDataText = endDate;
        if (this.config.timePicker) {
          startDateText = startDate + " " + this.config.startTime;
          endDataText = endDate + " " + this.config.endTime;
        }
        this.selectedDateText = startDateText + " - " + endDataText;
      }
      if (this.canBeEmpty || this.selectedDateText.indexOf("nvalid") < 0) {
        this.isValidFilter = true;
      }
      if (this.config.type == "yearly") {
        this.dateTitleText.left = "" + startDate;
        this.dateTitleText.right = "" + endDate;
      } else {
        this.updateActiveItemInputField();
      }
    };
    /**
     * @return {?}
     */
    DateTimeRangePickerComponent.prototype.updateActiveItemInputField
    /**
     * @return {?}
     */ = function() {
      /** @type {?} */
      var itemFirstDate = "";
      /** @type {?} */
      var itemLastDate = "";
      /** @type {?} */
      var itemText = "";
      if (!this.config.singleDatePicker) {
        itemFirstDate = this.activeItem.left.firstDay;
        itemLastDate = this.activeItem.left.lastDay;
        itemText = this.activeItem.left.rowItemText;
        itemFirstDate = moment$2(itemFirstDate, DEFAULT_DATE_FROMAT$1).format(this.config.viewDateFormat);
        itemLastDate = moment$2(itemLastDate, DEFAULT_DATE_FROMAT$1).format(this.config.viewDateFormat);
        if (this.config.type != "daily") {
          this.dateTitleText.left = itemText + " (" + itemFirstDate + " - " + itemLastDate + ")";
        } else {
          this.dateTitleText.left = "" + itemFirstDate;
        }
      }
      itemFirstDate = this.activeItem.right.firstDay;
      itemLastDate = this.activeItem.right.lastDay;
      itemText = this.activeItem.right.rowItemText;
      itemFirstDate = moment$2(itemFirstDate, DEFAULT_DATE_FROMAT$1).format(this.config.viewDateFormat);
      itemLastDate = moment$2(itemLastDate, DEFAULT_DATE_FROMAT$1).format(this.config.viewDateFormat);
      if (this.config.type != "daily") {
        this.dateTitleText.right = itemText + " (" + itemFirstDate + " - " + itemLastDate + ")";
      } else {
        this.dateTitleText.right = "" + itemFirstDate;
      }
    };
    /**
     * @return {?}
     */
    DateTimeRangePickerComponent.prototype.dateRangeSelected
    /**
     * @return {?}
     */ = function() {
      /** @type {?} */
      var dateRangeModel = this.getDateRangeModelItem();
      this.showCalendar = false;
      this.filterInputBox.nativeElement.classList.remove("empty-filter");
      this.doDateRangeModelChange();
      this.dateRangeChanged.emit(dateRangeModel);
    };
    /**
     * @param {?=} format
     * @return {?}
     */
    DateTimeRangePickerComponent.prototype.getDateRangeModel
    /**
     * @param {?=} format
     * @return {?}
     */ = function(format) {
      /** @type {?} */
      var dRModel = {};
      if (undefined != this.dateRangeModel && !_$1.isEmpty(this.dateRangeModel)) {
        dRModel = _$1.cloneDeep(this.dateRangeModel);
      }
      dRModel[this.config.selectedModel] = this.getDateRangeModelItem(format);
      return dRModel;
    };
    /**
     * @param {?=} format
     * @return {?}
     */
    DateTimeRangePickerComponent.prototype.getDateRangeModelItem
    /**
     * @param {?=} format
     * @return {?}
     */ = function(format) {
      /** @type {?} */
      var dateRangeModelItem;
      /** @type {?} */
      var outputDateFormat = this.config.outputDateFormat;
      if (undefined != format) {
        outputDateFormat = format;
      }
      /** @type {?} */
      var startDate = this.dateTimeRangePickerUtilityService.formatStartDate(this.config, outputDateFormat);
      /** @type {?} */
      var endDate = moment$2(this.config.endDate, DEFAULT_DATE_FROMAT$1).format(outputDateFormat);
      if (this.config.selectedTimezone) {
        startDate = this.dateTimeRangePickerUtilityService.formatToZoneDate(
          this.config.selectedTimezone,
          outputDateFormat,
          startDate
        );
        endDate = this.dateTimeRangePickerUtilityService.formatToZoneDate(
          this.config.selectedTimezone,
          outputDateFormat,
          endDate
        );
      }
      dateRangeModelItem = { startDate: startDate, endDate: endDate };
      if (this.config.timePicker) {
        /** @type {?} */
        var startTime = this.config.startTime;
        /** @type {?} */
        var endTime = this.config.endTime;
        dateRangeModelItem = {
          startDate: startDate,
          endDate: endDate,
          startTime: startTime,
          endTime: endTime
        };
      }
      return dateRangeModelItem;
    };
    /**
     * @return {?}
     */
    DateTimeRangePickerComponent.prototype.doApply
    /**
     * @return {?}
     */ = function() {
      var _this = this;
      /** @type {?} */
      var startDate = this.config.startDate;
      /** @type {?} */
      var endDate = this.config.endDate;
      this.activeStartDate = /** @type {?} */ (startDate);
      this.activeEndDate = /** @type {?} */ (endDate);
      if (this.config.startDate && this.config.endDate) {
        if (!this.config.timePicker) {
          this.dateRangeSelected();
        } else {
          if (this.config.timePicker) {
            _$1.forEach(this.sides, function(side) {
              _this.times[side] = _this.generateTimePicker(null, side);
            });
          }
        }
      }
      /** @type {?} */
      var outputStartDate = startDate ? moment$2(startDate, DEFAULT_DATE_FROMAT$1).valueOf() : null;
      /** @type {?} */
      var outputEndDate = endDate ? moment$2(endDate, DEFAULT_DATE_FROMAT$1).valueOf() : null;
      if (this.config.outputDateFormat) {
        outputStartDate = startDate
          ? moment$2(startDate, DEFAULT_DATE_FROMAT$1).format(this.config.outputDateFormat)
          : null;
        outputEndDate = endDate ? moment$2(endDate, DEFAULT_DATE_FROMAT$1).format(this.config.outputDateFormat) : null;
      }
      this.selectedDate.emit({
        startDate: outputStartDate,
        endDate: outputEndDate
      });
      this.updateInputField();
    };
    /**
     * @return {?}
     */
    DateTimeRangePickerComponent.prototype.doDateRangeModelChange
    /**
     * @return {?}
     */ = function() {
      /** @type {?} */
      var dateRangeModel = this.getDateRangeModel(this.config.inputDateFormat);
      this.dateRangeModelChange.emit(dateRangeModel);
    };
    /**
     * @param {?} tz
     * @return {?}
     */
    DateTimeRangePickerComponent.prototype.onTimezoneChange
    /**
     * @param {?} tz
     * @return {?}
     */ = function(tz) {
      var _this = this;
      this.selectedTimezone = tz;
      this.todayTime = this.dateTimeRangePickerUtilityService.getZoneToday(
        this.selectedTimezone,
        this.config.viewDateFormat
      );
      this.parseOptionsToDefaultDateFormat();
      _$1.forEach(this.sides, function(side) {
        /** @type {?} */
        var date = _this.config.startDate;
        /** @type {?} */
        var time = _this.config.startTime;
        if (side == "right") {
          date = _this.config.endDate;
          time = _this.config.endTime;
        }
        _this.dates[side] = _this.generateCalendar(date, side);
        if (_this.config.timePicker) {
          _this.times[side] = _this.generateTimePicker(time, side);
        }
      });
    };
    /**
     * @param {?} item
     * @param {?} side
     * @return {?}
     */
    DateTimeRangePickerComponent.prototype.getSelectedTimeItemText
    /**
     * @param {?} item
     * @param {?} side
     * @return {?}
     */ = function(item, side) {
      if (item == "hour") {
        return this.selectedHour[side];
      } else if (item == "minute") {
        return this.selectedMinute[side];
      }
    };
    /**
     * @return {?}
     */
    DateTimeRangePickerComponent.prototype.setActiveItemOnRangeClick
    /**
     * @return {?}
     */ = function() {
      this.updateActiveItem();
      this.doApply();
    };
    /**
     * @return {?}
     */
    DateTimeRangePickerComponent.prototype.updateActiveItem
    /**
     * @return {?}
     */ = function() {
      /** @type {?} */
      var startDate = this.dateTimeRangePickerUtilityService.getFirstLastDay(this.config.startDate, this.config.type);
      /** @type {?} */
      var endDate = this.dateTimeRangePickerUtilityService.getFirstLastDay(this.config.endDate, this.config.type);
      if (this.config.type == "weekly") {
        startDate.rowItemText = "W" + this.dateTimeRangePickerUtilityService.getWeekNumber(startDate.firstDay);
        endDate.rowItemText = "W" + this.dateTimeRangePickerUtilityService.getWeekNumber(endDate.firstDay);
      } else if (this.config.type == "monthly") {
        startDate.rowItemText = "" + moment$2(startDate.firstDay, DEFAULT_DATE_FROMAT$1).format("MMM");
        endDate.rowItemText = "" + moment$2(endDate.firstDay, DEFAULT_DATE_FROMAT$1).format("MMM");
      } else if (this.config.type == "quarterly") {
        startDate.rowItemText = "Quarter " + moment$2(startDate.firstDay, DEFAULT_DATE_FROMAT$1).quarter();
        endDate.rowItemText = "Quarter " + moment$2(endDate.firstDay, DEFAULT_DATE_FROMAT$1).quarter();
      }
      this.activeItem.left = startDate;
      this.activeItem.right = endDate;
      // this.doApply();
    };
    DateTimeRangePickerComponent.decorators = [
      {
        type: core.Component,
        args: [
          {
            selector: "b-date-range-picker",
            template:
              '<div class="m1-date-range-picker">\n  <div class="">\n    <mat-form-field class="full-width">\n      <span matPrefix>\n        <mat-icon fontSet="fa" fontIcon="fa-calendar"></mat-icon>\n        &nbsp;&nbsp;\n      </span>\n\n      <span matPrefix *ngIf="selectedTimezone" class="timezone-info active-timezone"> {{ selectedTimezone }} </span>\n      <input\n        matInput\n        #filterInputBox\n        type="text"\n        [ngClass]="{\n          \'config.inputClass\': \'config.inputClass\'\n        }"\n        class="dateSelect"\n        [attr.aria-label]="config.ariaLabels.inputField"\n        (click)="onComponentClick()"\n        placeholder="{{ config.placeholder }}"\n        [ngModel]="selectedDateText"\n        (ngModelChange)="onDateRangeInputChange($event)"\n        (keyup)="onCalendarClose($event)"\n        (focus)="onFocusInput($event)"\n        (blur)="onBlurInput($event)"\n        [value]="selectedDateText"\n        [disabled]="config.componentDisabled"\n        autocomplete="off"\n        spellcheck="false"\n        autocorrect="off"\n        readonly\n      />\n    </mat-form-field>\n  </div>\n  <div *ngIf="showCalendar" class="calendar-view">\n    <div class="date-select">\n      <div *ngIf="customRange" style="position: relative;">\n        <div *ngIf="config.timezoneSupport" class="list-inline timezone-select">\n          <div class="timezones">\n            <div\n              *ngFor="let tz of timezones; let last = last"\n              class="timezone"\n              [ngClass]="{\n                \'border-separator\': !last,\n                \'active-timezone\': selectedTimezone == tz\n              }"\n              (click)="onTimezoneChange(tz)"\n            >\n              {{ tz }}\n            </div>\n          </div>\n          <div class="currentTime">\n            <span class="today-text">Today</span>: <span class="active-timezone">{{ todayTime }}</span>\n          </div>\n        </div>\n        <ul class="list-inline calendar-container">\n          <li *ngFor="let side of sides; let lastSide = last" class="calendar" [ngClass]="side">\n            <div class="dateTitleInput">\n              <mat-form-field class="full-width">\n                <input matInput type="text" class="dateSelect" [ngModel]="dateTitleText[side]" readonly />\n              </mat-form-field>\n            </div>\n            <div class="calendar-table">\n              <div *ngIf="!calendarAvailable[side]" class="calendar-loading"><!-- <m-loading></m-loading> --></div>\n              <table *ngIf="calendarAvailable[side]" style="table-layout: fixed; min-width: 250px; position: relative;">\n                <thead>\n                  <tr>\n                    <th class="prev">\n                      <mat-icon\n                        [ngClass]="{\n                          disabled: !isPrevAvailale(dates[side][\'label\']),\n                          available: isPrevAvailale(dates[side][\'label\'])\n                        }"\n                        fontSet="fa"\n                        fontIcon="fa-chevron-left"\n                        (click)="onClickPrevious(dates[side][\'label\'], side)"\n                      ></mat-icon>\n                    </th>\n                    <th [attr.colspan]="getCalendarColspan()" class="calendar-label">\n                      <div class="date-dropdown-container" style="position: relative;">\n                        <div *ngIf="config.type == \'daily\'" class="date-dropdown">\n                          <mat-form-field>\n                            <mat-select\n                              class="month-select"\n                              [value]="selectedMonth[side]"\n                              (selectionChange)="onCalendarLabelChange($event.value, side, \'month\')"\n                            >\n                              <mat-option\n                                class="dropdown-item"\n                                *ngFor="let month of dates[side][\'months\']"\n                                [value]="month"\n                              >\n                                {{ month }}\n                              </mat-option>\n                            </mat-select>\n                          </mat-form-field>\n                        </div>\n                        <div class="date-dropdown">\n                          <mat-form-field>\n                            <mat-select\n                              class="year-select"\n                              [value]="selectedYear[side]"\n                              (selectionChange)="onCalendarLabelChange($event.value, side, \'year\')"\n                            >\n                              <mat-option\n                                class="dropdown-item"\n                                *ngFor="let year of dates[side][\'years\']"\n                                [value]="year"\n                              >\n                                {{ year }}\n                              </mat-option>\n                            </mat-select>\n                          </mat-form-field>\n                        </div>\n                      </div>\n                    </th>\n                    <th class="next">\n                      <mat-icon\n                        [ngClass]="{\n                          disabled: !isNextAvailale(dates[side][\'label\']),\n                          available: isNextAvailale(dates[side][\'label\'])\n                        }"\n                        fontSet="fa"\n                        fontIcon="fa-chevron-right"\n                        (click)="onClickNext(dates[side][\'label\'], side)"\n                      ></mat-icon>\n                    </th>\n                  </tr>\n                  <tr>\n                    <th *ngIf="config.showRowNumber" class="rowNumber"></th>\n                    <th *ngIf="!config.showRowNumber" class="rowNumberPlaceholder"></th>\n                    <th *ngFor="let day of weekDayOptions" class="calendar-week-day">{{ capitalize(day) }}</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor="let row of dates[side][\'itemRows\']">\n                    <td *ngIf="config.showRowNumber && row.rowNumberText" class="rowNumber">{{ row.rowNumberText }}</td>\n                    <td *ngIf="!config.showRowNumber" class="rowNumberPlaceholder"></td>\n                    <td\n                      #itemCell\n                      *ngFor="let item of row.items"\n                      [attr.firstDay]="item.firstDay"\n                      [attr.lastDay]="item.lastDay"\n                      [ngClass]="{\n                        available: item.available,\n                        \'in-range\': item.inRange,\n                        active:\n                          (activeStartDate == item.date && side == \'left\') ||\n                          (activeEndDate == item.date && side == \'right\'),\n                        today: item.today\n                      }"\n                      (click)="onCellClick(item, itemCell, side)"\n                      (mouseover)="onCellMouseEnter(item, itemCell)"\n                      (mouseleave)="onCellMouseLeave()"\n                    >\n                      <div>{{ item.rowItemText }}</div>\n                      <div *ngIf="item.today" class="todayDate">\n                        <mat-icon\n                          [ngClass]="{\n                            active:\n                              (activeStartDate == item.date && side == \'left\') ||\n                              (activeEndDate == item.date && side == \'right\')\n                          }"\n                          fontSet="fa"\n                          fontIcon="fa-circle"\n                          aria-hidden="true"\n                        >\n                        </mat-icon>\n                      </div>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </li>\n        </ul>\n        <ul *ngIf="config.timePicker" class="list-inline time-picker-container">\n          <li *ngFor="let side of sides; let lastSide = last" class="time-select" [ngClass]="side">\n            <div class="clock-icon-container">\n              <mat-icon fontSet="fa" fontIcon="fa-clock-o" class="fa-lg" aria-hidden="true"></mat-icon>\n            </div>\n            <div *ngFor="let timeItem of timeItems" class="d-inline-block time-item-container">\n              <mat-form-field>\n                <mat-select\n                  class="year-select"\n                  [value]="getSelectedTimeItemText(timeItem, side)"\n                  (selectionChange)="onTimeLabelChange(timeItem, side, $event.value)"\n                >\n                  <mat-option class="dropdown-item" *ngFor="let item of times[side][timeItem]" [value]="item">\n                    {{ item }}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n          </li>\n        </ul>\n      </div>\n      <div *ngIf="(!config.singleDatePicker && config.showRanges) || config.timePicker" class="ranges">\n        <button\n          mat-button\n          *ngFor="let range of (config.availableRanges | ObjNgFor)"\n          class="calendar-range"\n          [ngClass]="{ \'active-range\': range == activeRange }"\n          (click)="onRangeClick(range, config.availableRanges[range])"\n        >\n          {{ range }}\n        </button>\n        <div\n          *ngIf="config.timePicker && customRange"\n          class="range-select-button-container"\n          [ngClass]="{\n            \'range-select-button-bottom\': (config.availableRanges | json) != \'{}\'\n          }"\n        >\n          <button mat-button class="range-select-button range-select-apply-button" (click)="onTimeApply()">\n            Apply\n          </button>\n          <button mat-button class="range-select-button range-select-cancel-button" (click)="onTimeApply()">\n            Cancel\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n',
            encapsulation: core.ViewEncapsulation.None,
            styles: [
              '@charset "UTF-8";/*!\n * Bootstrap v4.2.1 (https://getbootstrap.com/)\n * Copyright 2011-2018 The Bootstrap Authors\n * Copyright 2011-2018 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n */:root{--blue:#007bff;--indigo:#6610f2;--purple:#6f42c1;--pink:#e83e8c;--red:#dc3545;--orange:#fd7e14;--yellow:#ffc107;--green:#28a745;--teal:#20c997;--cyan:#17a2b8;--white:#fff;--gray:#6c757d;--gray-dark:#343a40;--primary:#007bff;--secondary:#6c757d;--success:#28a745;--info:#17a2b8;--warning:#ffc107;--danger:#dc3545;--light:#f8f9fa;--dark:#343a40;--breakpoint-xs:0;--breakpoint-sm:576px;--breakpoint-md:768px;--breakpoint-lg:992px;--breakpoint-xl:1200px;--font-family-sans-serif:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-family-monospace:SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace}*,::after,::before{box-sizing:border-box}html{font-family:sans-serif;line-height:1.15;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}article,aside,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}body{margin:0;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";font-size:1rem;font-weight:400;line-height:1.5;color:#212529;text-align:left;background-color:#fff}[tabindex="-1"]:focus{outline:0!important}h1,h2,h3,h4,h5,h6{margin-top:0}dl,ol,p,ul{margin-top:0;margin-bottom:1rem}abbr[data-original-title],abbr[title]{text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;cursor:help;border-bottom:0;text-decoration-skip-ink:none}address{margin-bottom:1rem;font-style:normal;line-height:inherit}ol ol,ol ul,ul ol,ul ul{margin-bottom:0}dt{font-weight:700}dd{margin-bottom:.5rem;margin-left:0}blockquote,figure{margin:0 0 1rem}b,strong{font-weight:bolder}sub,sup{position:relative;font-size:75%;line-height:0;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}a{color:#007bff;text-decoration:none;background-color:transparent}a:hover{color:#0056b3;text-decoration:underline}a:not([href]):not([tabindex]),a:not([href]):not([tabindex]):focus,a:not([href]):not([tabindex]):hover{color:inherit;text-decoration:none}a:not([href]):not([tabindex]):focus{outline:0}code,kbd,pre,samp{font-family:SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;font-size:1em}pre{margin-top:0;margin-bottom:1rem;overflow:auto}img{vertical-align:middle;border-style:none}svg{overflow:hidden;vertical-align:middle}table{border-collapse:collapse}caption{padding-top:.75rem;padding-bottom:.75rem;color:#6c757d;text-align:left;caption-side:bottom}th{text-align:inherit}label{display:inline-block;margin-bottom:.5rem}button{border-radius:0}button:focus{outline:dotted 1px;outline:-webkit-focus-ring-color auto 5px}button,input,optgroup,select,textarea{margin:0;font-family:inherit;font-size:inherit;line-height:inherit}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{padding:0;border-style:none}input[type=checkbox],input[type=radio]{box-sizing:border-box;padding:0}input[type=date],input[type=datetime-local],input[type=month],input[type=time]{-webkit-appearance:listbox}textarea{overflow:auto;resize:vertical}fieldset{min-width:0;padding:0;margin:0;border:0}legend{display:block;width:100%;max-width:100%;padding:0;margin-bottom:.5rem;font-size:1.5rem;line-height:inherit;color:inherit;white-space:normal}progress{vertical-align:baseline}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{outline-offset:-2px;-webkit-appearance:none}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{font:inherit;-webkit-appearance:button}output{display:inline-block}summary{display:list-item;cursor:pointer}template{display:none}[hidden]{display:none!important}.h1,.h2,.h3,.h4,.h5,.h6,h1,h2,h3,h4,h5,h6{margin-bottom:.5rem;font-family:inherit;font-weight:500;line-height:1.2;color:inherit}.h1,h1{font-size:2.5rem}.h2,h2{font-size:2rem}.h3,h3{font-size:1.75rem}.h4,h4{font-size:1.5rem}.h5,h5{font-size:1.25rem}.h6,h6{font-size:1rem}.lead{font-size:1.25rem;font-weight:300}.display-1{font-size:6rem;font-weight:300;line-height:1.2}.display-2{font-size:5.5rem;font-weight:300;line-height:1.2}.display-3{font-size:4.5rem;font-weight:300;line-height:1.2}.display-4{font-size:3.5rem;font-weight:300;line-height:1.2}hr{box-sizing:content-box;height:0;overflow:visible;margin-top:1rem;margin-bottom:1rem;border:0;border-top:1px solid rgba(0,0,0,.1)}.small,small{font-size:80%;font-weight:400}.mark,mark{padding:.2em;background-color:#fcf8e3}.list-inline,.list-unstyled{padding-left:0;list-style:none}.list-inline-item{display:inline-block}.list-inline-item:not(:last-child){margin-right:.5rem}.initialism{font-size:90%;text-transform:uppercase}.blockquote{margin-bottom:1rem;font-size:1.25rem}.blockquote-footer{display:block;font-size:80%;color:#6c757d}.blockquote-footer::before{content:"\\2014\\00A0"}.img-fluid{max-width:100%;height:auto}.img-thumbnail{padding:.25rem;background-color:#fff;border:1px solid #dee2e6;border-radius:.25rem;max-width:100%;height:auto}.figure{display:inline-block}.figure-img{margin-bottom:.5rem;line-height:1}.figure-caption{font-size:90%;color:#6c757d}code{font-size:87.5%;color:#e83e8c;word-break:break-word}a>code{color:inherit}kbd{padding:.2rem .4rem;font-size:87.5%;color:#fff;background-color:#212529;border-radius:.2rem}kbd kbd{padding:0;font-size:100%;font-weight:700}pre{display:block;font-size:87.5%;color:#212529}pre code{font-size:inherit;color:inherit;word-break:normal}.pre-scrollable{max-height:340px;overflow-y:scroll}.container{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}@media (min-width:576px){.container{max-width:540px}}@media (min-width:768px){.container{max-width:720px}}@media (min-width:992px){.container{max-width:960px}}@media (min-width:1200px){.container{max-width:1140px}}.container-fluid{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}.row{display:flex;flex-wrap:wrap;margin-right:-15px;margin-left:-15px}.no-gutters{margin-right:0;margin-left:0}.no-gutters>.col,.no-gutters>[class*=col-]{padding-right:0;padding-left:0}.col,.col-1,.col-10,.col-11,.col-12,.col-2,.col-3,.col-4,.col-5,.col-6,.col-7,.col-8,.col-9,.col-auto,.col-lg,.col-lg-1,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-lg-auto,.col-md,.col-md-1,.col-md-10,.col-md-11,.col-md-12,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-md-auto,.col-sm,.col-sm-1,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-sm-auto,.col-xl,.col-xl-1,.col-xl-10,.col-xl-11,.col-xl-12,.col-xl-2,.col-xl-3,.col-xl-4,.col-xl-5,.col-xl-6,.col-xl-7,.col-xl-8,.col-xl-9,.col-xl-auto{position:relative;width:100%;padding-right:15px;padding-left:15px}.col{flex-basis:0;flex-grow:1;max-width:100%}.col-auto{flex:0 0 auto;width:auto;max-width:100%}.col-1{flex:0 0 8.33333%;max-width:8.33333%}.col-2{flex:0 0 16.66667%;max-width:16.66667%}.col-3{flex:0 0 25%;max-width:25%}.col-4{flex:0 0 33.33333%;max-width:33.33333%}.col-5{flex:0 0 41.66667%;max-width:41.66667%}.col-6{flex:0 0 50%;max-width:50%}.col-7{flex:0 0 58.33333%;max-width:58.33333%}.col-8{flex:0 0 66.66667%;max-width:66.66667%}.col-9{flex:0 0 75%;max-width:75%}.col-10{flex:0 0 83.33333%;max-width:83.33333%}.col-11{flex:0 0 91.66667%;max-width:91.66667%}.col-12{flex:0 0 100%;max-width:100%}.order-first{order:-1}.order-last{order:13}.order-0{order:0}.order-1{order:1}.order-2{order:2}.order-3{order:3}.order-4{order:4}.order-5{order:5}.order-6{order:6}.order-7{order:7}.order-8{order:8}.order-9{order:9}.order-10{order:10}.order-11{order:11}.order-12{order:12}.offset-1{margin-left:8.33333%}.offset-2{margin-left:16.66667%}.offset-3{margin-left:25%}.offset-4{margin-left:33.33333%}.offset-5{margin-left:41.66667%}.offset-6{margin-left:50%}.offset-7{margin-left:58.33333%}.offset-8{margin-left:66.66667%}.offset-9{margin-left:75%}.offset-10{margin-left:83.33333%}.offset-11{margin-left:91.66667%}@media (min-width:576px){.col-sm{flex-basis:0;flex-grow:1;max-width:100%}.col-sm-auto{flex:0 0 auto;width:auto;max-width:100%}.col-sm-1{flex:0 0 8.33333%;max-width:8.33333%}.col-sm-2{flex:0 0 16.66667%;max-width:16.66667%}.col-sm-3{flex:0 0 25%;max-width:25%}.col-sm-4{flex:0 0 33.33333%;max-width:33.33333%}.col-sm-5{flex:0 0 41.66667%;max-width:41.66667%}.col-sm-6{flex:0 0 50%;max-width:50%}.col-sm-7{flex:0 0 58.33333%;max-width:58.33333%}.col-sm-8{flex:0 0 66.66667%;max-width:66.66667%}.col-sm-9{flex:0 0 75%;max-width:75%}.col-sm-10{flex:0 0 83.33333%;max-width:83.33333%}.col-sm-11{flex:0 0 91.66667%;max-width:91.66667%}.col-sm-12{flex:0 0 100%;max-width:100%}.order-sm-first{order:-1}.order-sm-last{order:13}.order-sm-0{order:0}.order-sm-1{order:1}.order-sm-2{order:2}.order-sm-3{order:3}.order-sm-4{order:4}.order-sm-5{order:5}.order-sm-6{order:6}.order-sm-7{order:7}.order-sm-8{order:8}.order-sm-9{order:9}.order-sm-10{order:10}.order-sm-11{order:11}.order-sm-12{order:12}.offset-sm-0{margin-left:0}.offset-sm-1{margin-left:8.33333%}.offset-sm-2{margin-left:16.66667%}.offset-sm-3{margin-left:25%}.offset-sm-4{margin-left:33.33333%}.offset-sm-5{margin-left:41.66667%}.offset-sm-6{margin-left:50%}.offset-sm-7{margin-left:58.33333%}.offset-sm-8{margin-left:66.66667%}.offset-sm-9{margin-left:75%}.offset-sm-10{margin-left:83.33333%}.offset-sm-11{margin-left:91.66667%}}@media (min-width:768px){.col-md{flex-basis:0;flex-grow:1;max-width:100%}.col-md-auto{flex:0 0 auto;width:auto;max-width:100%}.col-md-1{flex:0 0 8.33333%;max-width:8.33333%}.col-md-2{flex:0 0 16.66667%;max-width:16.66667%}.col-md-3{flex:0 0 25%;max-width:25%}.col-md-4{flex:0 0 33.33333%;max-width:33.33333%}.col-md-5{flex:0 0 41.66667%;max-width:41.66667%}.col-md-6{flex:0 0 50%;max-width:50%}.col-md-7{flex:0 0 58.33333%;max-width:58.33333%}.col-md-8{flex:0 0 66.66667%;max-width:66.66667%}.col-md-9{flex:0 0 75%;max-width:75%}.col-md-10{flex:0 0 83.33333%;max-width:83.33333%}.col-md-11{flex:0 0 91.66667%;max-width:91.66667%}.col-md-12{flex:0 0 100%;max-width:100%}.order-md-first{order:-1}.order-md-last{order:13}.order-md-0{order:0}.order-md-1{order:1}.order-md-2{order:2}.order-md-3{order:3}.order-md-4{order:4}.order-md-5{order:5}.order-md-6{order:6}.order-md-7{order:7}.order-md-8{order:8}.order-md-9{order:9}.order-md-10{order:10}.order-md-11{order:11}.order-md-12{order:12}.offset-md-0{margin-left:0}.offset-md-1{margin-left:8.33333%}.offset-md-2{margin-left:16.66667%}.offset-md-3{margin-left:25%}.offset-md-4{margin-left:33.33333%}.offset-md-5{margin-left:41.66667%}.offset-md-6{margin-left:50%}.offset-md-7{margin-left:58.33333%}.offset-md-8{margin-left:66.66667%}.offset-md-9{margin-left:75%}.offset-md-10{margin-left:83.33333%}.offset-md-11{margin-left:91.66667%}}@media (min-width:992px){.col-lg{flex-basis:0;flex-grow:1;max-width:100%}.col-lg-auto{flex:0 0 auto;width:auto;max-width:100%}.col-lg-1{flex:0 0 8.33333%;max-width:8.33333%}.col-lg-2{flex:0 0 16.66667%;max-width:16.66667%}.col-lg-3{flex:0 0 25%;max-width:25%}.col-lg-4{flex:0 0 33.33333%;max-width:33.33333%}.col-lg-5{flex:0 0 41.66667%;max-width:41.66667%}.col-lg-6{flex:0 0 50%;max-width:50%}.col-lg-7{flex:0 0 58.33333%;max-width:58.33333%}.col-lg-8{flex:0 0 66.66667%;max-width:66.66667%}.col-lg-9{flex:0 0 75%;max-width:75%}.col-lg-10{flex:0 0 83.33333%;max-width:83.33333%}.col-lg-11{flex:0 0 91.66667%;max-width:91.66667%}.col-lg-12{flex:0 0 100%;max-width:100%}.order-lg-first{order:-1}.order-lg-last{order:13}.order-lg-0{order:0}.order-lg-1{order:1}.order-lg-2{order:2}.order-lg-3{order:3}.order-lg-4{order:4}.order-lg-5{order:5}.order-lg-6{order:6}.order-lg-7{order:7}.order-lg-8{order:8}.order-lg-9{order:9}.order-lg-10{order:10}.order-lg-11{order:11}.order-lg-12{order:12}.offset-lg-0{margin-left:0}.offset-lg-1{margin-left:8.33333%}.offset-lg-2{margin-left:16.66667%}.offset-lg-3{margin-left:25%}.offset-lg-4{margin-left:33.33333%}.offset-lg-5{margin-left:41.66667%}.offset-lg-6{margin-left:50%}.offset-lg-7{margin-left:58.33333%}.offset-lg-8{margin-left:66.66667%}.offset-lg-9{margin-left:75%}.offset-lg-10{margin-left:83.33333%}.offset-lg-11{margin-left:91.66667%}}@media (min-width:1200px){.col-xl{flex-basis:0;flex-grow:1;max-width:100%}.col-xl-auto{flex:0 0 auto;width:auto;max-width:100%}.col-xl-1{flex:0 0 8.33333%;max-width:8.33333%}.col-xl-2{flex:0 0 16.66667%;max-width:16.66667%}.col-xl-3{flex:0 0 25%;max-width:25%}.col-xl-4{flex:0 0 33.33333%;max-width:33.33333%}.col-xl-5{flex:0 0 41.66667%;max-width:41.66667%}.col-xl-6{flex:0 0 50%;max-width:50%}.col-xl-7{flex:0 0 58.33333%;max-width:58.33333%}.col-xl-8{flex:0 0 66.66667%;max-width:66.66667%}.col-xl-9{flex:0 0 75%;max-width:75%}.col-xl-10{flex:0 0 83.33333%;max-width:83.33333%}.col-xl-11{flex:0 0 91.66667%;max-width:91.66667%}.col-xl-12{flex:0 0 100%;max-width:100%}.order-xl-first{order:-1}.order-xl-last{order:13}.order-xl-0{order:0}.order-xl-1{order:1}.order-xl-2{order:2}.order-xl-3{order:3}.order-xl-4{order:4}.order-xl-5{order:5}.order-xl-6{order:6}.order-xl-7{order:7}.order-xl-8{order:8}.order-xl-9{order:9}.order-xl-10{order:10}.order-xl-11{order:11}.order-xl-12{order:12}.offset-xl-0{margin-left:0}.offset-xl-1{margin-left:8.33333%}.offset-xl-2{margin-left:16.66667%}.offset-xl-3{margin-left:25%}.offset-xl-4{margin-left:33.33333%}.offset-xl-5{margin-left:41.66667%}.offset-xl-6{margin-left:50%}.offset-xl-7{margin-left:58.33333%}.offset-xl-8{margin-left:66.66667%}.offset-xl-9{margin-left:75%}.offset-xl-10{margin-left:83.33333%}.offset-xl-11{margin-left:91.66667%}}.table{width:100%;margin-bottom:1rem;background-color:transparent}.table td,.table th{padding:.75rem;vertical-align:top;border-top:1px solid #dee2e6}.table thead th{vertical-align:bottom;border-bottom:2px solid #dee2e6}.table tbody+tbody{border-top:2px solid #dee2e6}.table .table{background-color:#fff}.table-sm td,.table-sm th{padding:.3rem}.table-bordered,.table-bordered td,.table-bordered th{border:1px solid #dee2e6}.table-bordered thead td,.table-bordered thead th{border-bottom-width:2px}.table-borderless tbody+tbody,.table-borderless td,.table-borderless th,.table-borderless thead th{border:0}.table-striped tbody tr:nth-of-type(odd){background-color:rgba(0,0,0,.05)}.table-hover tbody tr:hover{background-color:rgba(0,0,0,.075)}.table-primary,.table-primary>td,.table-primary>th{background-color:#b8daff}.table-primary tbody+tbody,.table-primary td,.table-primary th,.table-primary thead th{border-color:#7abaff}.table-hover .table-primary:hover,.table-hover .table-primary:hover>td,.table-hover .table-primary:hover>th{background-color:#9fcdff}.table-secondary,.table-secondary>td,.table-secondary>th{background-color:#d6d8db}.table-secondary tbody+tbody,.table-secondary td,.table-secondary th,.table-secondary thead th{border-color:#b3b7bb}.table-hover .table-secondary:hover,.table-hover .table-secondary:hover>td,.table-hover .table-secondary:hover>th{background-color:#c8cbcf}.table-success,.table-success>td,.table-success>th{background-color:#c3e6cb}.table-success tbody+tbody,.table-success td,.table-success th,.table-success thead th{border-color:#8fd19e}.table-hover .table-success:hover,.table-hover .table-success:hover>td,.table-hover .table-success:hover>th{background-color:#b1dfbb}.table-info,.table-info>td,.table-info>th{background-color:#bee5eb}.table-info tbody+tbody,.table-info td,.table-info th,.table-info thead th{border-color:#86cfda}.table-hover .table-info:hover,.table-hover .table-info:hover>td,.table-hover .table-info:hover>th{background-color:#abdde5}.table-warning,.table-warning>td,.table-warning>th{background-color:#ffeeba}.table-warning tbody+tbody,.table-warning td,.table-warning th,.table-warning thead th{border-color:#ffdf7e}.table-hover .table-warning:hover,.table-hover .table-warning:hover>td,.table-hover .table-warning:hover>th{background-color:#ffe8a1}.table-danger,.table-danger>td,.table-danger>th{background-color:#f5c6cb}.table-danger tbody+tbody,.table-danger td,.table-danger th,.table-danger thead th{border-color:#ed969e}.table-hover .table-danger:hover,.table-hover .table-danger:hover>td,.table-hover .table-danger:hover>th{background-color:#f1b0b7}.table-light,.table-light>td,.table-light>th{background-color:#fdfdfe}.table-light tbody+tbody,.table-light td,.table-light th,.table-light thead th{border-color:#fbfcfc}.table-hover .table-light:hover,.table-hover .table-light:hover>td,.table-hover .table-light:hover>th{background-color:#ececf6}.table-dark,.table-dark>td,.table-dark>th{background-color:#c6c8ca}.table-dark tbody+tbody,.table-dark td,.table-dark th,.table-dark thead th{border-color:#95999c}.table-hover .table-dark:hover,.table-hover .table-dark:hover>td,.table-hover .table-dark:hover>th{background-color:#b9bbbe}.table-active,.table-active>td,.table-active>th,.table-hover .table-active:hover,.table-hover .table-active:hover>td,.table-hover .table-active:hover>th{background-color:rgba(0,0,0,.075)}.table .thead-dark th{color:#fff;background-color:#212529;border-color:#32383e}.table .thead-light th{color:#495057;background-color:#e9ecef;border-color:#dee2e6}.table-dark{color:#fff;background-color:#212529}.table-dark td,.table-dark th,.table-dark thead th{border-color:#32383e}.table-dark.table-bordered{border:0}.table-dark.table-striped tbody tr:nth-of-type(odd){background-color:rgba(255,255,255,.05)}.table-dark.table-hover tbody tr:hover{background-color:rgba(255,255,255,.075)}@media (max-width:575.98px){.table-responsive-sm{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch;-ms-overflow-style:-ms-autohiding-scrollbar}.table-responsive-sm>.table-bordered{border:0}}@media (max-width:767.98px){.table-responsive-md{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch;-ms-overflow-style:-ms-autohiding-scrollbar}.table-responsive-md>.table-bordered{border:0}}@media (max-width:991.98px){.table-responsive-lg{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch;-ms-overflow-style:-ms-autohiding-scrollbar}.table-responsive-lg>.table-bordered{border:0}}@media (max-width:1199.98px){.table-responsive-xl{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch;-ms-overflow-style:-ms-autohiding-scrollbar}.table-responsive-xl>.table-bordered{border:0}}.table-responsive{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch;-ms-overflow-style:-ms-autohiding-scrollbar}.table-responsive>.table-bordered{border:0}.form-control{display:block;width:100%;height:calc(2.25rem + 2px);padding:.375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#495057;background-color:#fff;background-clip:padding-box;border:1px solid #ced4da;border-radius:.25rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media screen and (prefers-reduced-motion:reduce){.form-control{transition:none}}.form-control::-ms-expand{background-color:transparent;border:0}.form-control:focus{color:#495057;background-color:#fff;border-color:#80bdff;outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.form-control::-webkit-input-placeholder{color:#6c757d;opacity:1}.form-control:-ms-input-placeholder{color:#6c757d;opacity:1}.form-control::-ms-input-placeholder{color:#6c757d;opacity:1}.form-control::placeholder{color:#6c757d;opacity:1}.form-control:disabled,.form-control[readonly]{background-color:#e9ecef;opacity:1}select.form-control:focus::-ms-value{color:#495057;background-color:#fff}.form-control-file,.form-control-range{display:block;width:100%}.col-form-label{padding-top:calc(.375rem + 1px);padding-bottom:calc(.375rem + 1px);margin-bottom:0;font-size:inherit;line-height:1.5}.col-form-label-lg{padding-top:calc(.5rem + 1px);padding-bottom:calc(.5rem + 1px);font-size:1.25rem;line-height:1.5}.col-form-label-sm{padding-top:calc(.25rem + 1px);padding-bottom:calc(.25rem + 1px);font-size:.875rem;line-height:1.5}.form-control-plaintext{display:block;width:100%;padding-top:.375rem;padding-bottom:.375rem;margin-bottom:0;line-height:1.5;color:#212529;background-color:transparent;border:solid transparent;border-width:1px 0}.form-control-plaintext.form-control-lg,.form-control-plaintext.form-control-sm{padding-right:0;padding-left:0}.form-control-sm{height:calc(1.8125rem + 2px);padding:.25rem .5rem;font-size:.875rem;line-height:1.5;border-radius:.2rem}.form-control-lg{height:calc(2.875rem + 2px);padding:.5rem 1rem;font-size:1.25rem;line-height:1.5;border-radius:.3rem}select.form-control[multiple],select.form-control[size],textarea.form-control{height:auto}.form-group{margin-bottom:1rem}.form-text{display:block;margin-top:.25rem}.form-row{display:flex;flex-wrap:wrap;margin-right:-5px;margin-left:-5px}.form-row>.col,.form-row>[class*=col-]{padding-right:5px;padding-left:5px}.form-check{position:relative;display:block;padding-left:1.25rem}.form-check-input{position:absolute;margin-top:.3rem;margin-left:-1.25rem}.form-check-input:disabled~.form-check-label{color:#6c757d}.form-check-label{margin-bottom:0}.form-check-inline{display:inline-flex;align-items:center;padding-left:0;margin-right:.75rem}.form-check-inline .form-check-input{position:static;margin-top:0;margin-right:.3125rem;margin-left:0}.valid-feedback{display:none;width:100%;margin-top:.25rem;font-size:80%;color:#28a745}.valid-tooltip{position:absolute;top:100%;z-index:5;display:none;max-width:100%;padding:.25rem .5rem;margin-top:.1rem;font-size:.875rem;line-height:1.5;color:#fff;background-color:rgba(40,167,69,.9);border-radius:.25rem}.form-control.is-valid,.was-validated .form-control:valid{border-color:#28a745;padding-right:2.25rem;background-repeat:no-repeat;background-position:center right calc(2.25rem / 4);background-size:calc(2.25rem / 2) calc(2.25rem / 2);background-image:url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%2328a745\' d=\'M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z\'/%3e%3c/svg%3e")}.form-control.is-valid:focus,.was-validated .form-control:valid:focus{border-color:#28a745;box-shadow:0 0 0 .2rem rgba(40,167,69,.25)}.form-control.is-valid~.valid-feedback,.form-control.is-valid~.valid-tooltip,.was-validated .form-control:valid~.valid-feedback,.was-validated .form-control:valid~.valid-tooltip{display:block}.was-validated textarea.form-control:valid,textarea.form-control.is-valid{padding-right:2.25rem;background-position:top calc(2.25rem / 4) right calc(2.25rem / 4)}.custom-select.is-valid,.was-validated .custom-select:valid{border-color:#28a745;padding-right:3.4375rem;background:url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 4 5\'%3e%3cpath fill=\'%23343a40\' d=\'M2 0L0 2h4zm0 5L0 3h4z\'/%3e%3c/svg%3e") right .75rem center/8px 10px no-repeat,url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%2328a745\' d=\'M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z\'/%3e%3c/svg%3e") center right 1.75rem/1.125rem 1.125rem no-repeat}.custom-select.is-valid:focus,.was-validated .custom-select:valid:focus{border-color:#28a745;box-shadow:0 0 0 .2rem rgba(40,167,69,.25)}.custom-select.is-valid~.valid-feedback,.custom-select.is-valid~.valid-tooltip,.was-validated .custom-select:valid~.valid-feedback,.was-validated .custom-select:valid~.valid-tooltip{display:block}.form-control-file.is-valid~.valid-feedback,.form-control-file.is-valid~.valid-tooltip,.was-validated .form-control-file:valid~.valid-feedback,.was-validated .form-control-file:valid~.valid-tooltip{display:block}.form-check-input.is-valid~.form-check-label,.was-validated .form-check-input:valid~.form-check-label{color:#28a745}.form-check-input.is-valid~.valid-feedback,.form-check-input.is-valid~.valid-tooltip,.was-validated .form-check-input:valid~.valid-feedback,.was-validated .form-check-input:valid~.valid-tooltip{display:block}.custom-control-input.is-valid~.custom-control-label,.was-validated .custom-control-input:valid~.custom-control-label{color:#28a745}.custom-control-input.is-valid~.custom-control-label::before,.was-validated .custom-control-input:valid~.custom-control-label::before{border-color:#28a745}.custom-control-input.is-valid~.valid-feedback,.custom-control-input.is-valid~.valid-tooltip,.was-validated .custom-control-input:valid~.valid-feedback,.was-validated .custom-control-input:valid~.valid-tooltip{display:block}.custom-control-input.is-valid:checked~.custom-control-label::before,.was-validated .custom-control-input:valid:checked~.custom-control-label::before{border-color:#34ce57;background-color:#34ce57}.custom-control-input.is-valid:focus~.custom-control-label::before,.was-validated .custom-control-input:valid:focus~.custom-control-label::before{box-shadow:0 0 0 .2rem rgba(40,167,69,.25)}.custom-control-input.is-valid:focus:not(:checked)~.custom-control-label::before,.was-validated .custom-control-input:valid:focus:not(:checked)~.custom-control-label::before{border-color:#28a745}.custom-file-input.is-valid~.custom-file-label,.was-validated .custom-file-input:valid~.custom-file-label{border-color:#28a745}.custom-file-input.is-valid~.valid-feedback,.custom-file-input.is-valid~.valid-tooltip,.was-validated .custom-file-input:valid~.valid-feedback,.was-validated .custom-file-input:valid~.valid-tooltip{display:block}.custom-file-input.is-valid:focus~.custom-file-label,.was-validated .custom-file-input:valid:focus~.custom-file-label{border-color:#28a745;box-shadow:0 0 0 .2rem rgba(40,167,69,.25)}.invalid-feedback{display:none;width:100%;margin-top:.25rem;font-size:80%;color:#dc3545}.invalid-tooltip{position:absolute;top:100%;z-index:5;display:none;max-width:100%;padding:.25rem .5rem;margin-top:.1rem;font-size:.875rem;line-height:1.5;color:#fff;background-color:rgba(220,53,69,.9);border-radius:.25rem}.form-control.is-invalid,.was-validated .form-control:invalid{border-color:#dc3545;padding-right:2.25rem;background-repeat:no-repeat;background-position:center right calc(2.25rem / 4);background-size:calc(2.25rem / 2) calc(2.25rem / 2);background-image:url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'%23dc3545\' viewBox=\'-2 -2 7 7\'%3e%3cpath stroke=\'%23d9534f\' d=\'M0 0l3 3m0-3L0 3\'/%3e%3ccircle r=\'.5\'/%3e%3ccircle cx=\'3\' r=\'.5\'/%3e%3ccircle cy=\'3\' r=\'.5\'/%3e%3ccircle cx=\'3\' cy=\'3\' r=\'.5\'/%3e%3c/svg%3E")}.form-control.is-invalid:focus,.was-validated .form-control:invalid:focus{border-color:#dc3545;box-shadow:0 0 0 .2rem rgba(220,53,69,.25)}.form-control.is-invalid~.invalid-feedback,.form-control.is-invalid~.invalid-tooltip,.was-validated .form-control:invalid~.invalid-feedback,.was-validated .form-control:invalid~.invalid-tooltip{display:block}.was-validated textarea.form-control:invalid,textarea.form-control.is-invalid{padding-right:2.25rem;background-position:top calc(2.25rem / 4) right calc(2.25rem / 4)}.custom-select.is-invalid,.was-validated .custom-select:invalid{border-color:#dc3545;padding-right:3.4375rem;background:url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 4 5\'%3e%3cpath fill=\'%23343a40\' d=\'M2 0L0 2h4zm0 5L0 3h4z\'/%3e%3c/svg%3e") right .75rem center/8px 10px no-repeat,url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'%23dc3545\' viewBox=\'-2 -2 7 7\'%3e%3cpath stroke=\'%23d9534f\' d=\'M0 0l3 3m0-3L0 3\'/%3e%3ccircle r=\'.5\'/%3e%3ccircle cx=\'3\' r=\'.5\'/%3e%3ccircle cy=\'3\' r=\'.5\'/%3e%3ccircle cx=\'3\' cy=\'3\' r=\'.5\'/%3e%3c/svg%3E") center right 1.75rem/1.125rem 1.125rem no-repeat}.custom-select.is-invalid:focus,.was-validated .custom-select:invalid:focus{border-color:#dc3545;box-shadow:0 0 0 .2rem rgba(220,53,69,.25)}.custom-select.is-invalid~.invalid-feedback,.custom-select.is-invalid~.invalid-tooltip,.was-validated .custom-select:invalid~.invalid-feedback,.was-validated .custom-select:invalid~.invalid-tooltip{display:block}.form-control-file.is-invalid~.invalid-feedback,.form-control-file.is-invalid~.invalid-tooltip,.was-validated .form-control-file:invalid~.invalid-feedback,.was-validated .form-control-file:invalid~.invalid-tooltip{display:block}.form-check-input.is-invalid~.form-check-label,.was-validated .form-check-input:invalid~.form-check-label{color:#dc3545}.form-check-input.is-invalid~.invalid-feedback,.form-check-input.is-invalid~.invalid-tooltip,.was-validated .form-check-input:invalid~.invalid-feedback,.was-validated .form-check-input:invalid~.invalid-tooltip{display:block}.custom-control-input.is-invalid~.custom-control-label,.was-validated .custom-control-input:invalid~.custom-control-label{color:#dc3545}.custom-control-input.is-invalid~.custom-control-label::before,.was-validated .custom-control-input:invalid~.custom-control-label::before{border-color:#dc3545}.custom-control-input.is-invalid~.invalid-feedback,.custom-control-input.is-invalid~.invalid-tooltip,.was-validated .custom-control-input:invalid~.invalid-feedback,.was-validated .custom-control-input:invalid~.invalid-tooltip{display:block}.custom-control-input.is-invalid:checked~.custom-control-label::before,.was-validated .custom-control-input:invalid:checked~.custom-control-label::before{border-color:#e4606d;background-color:#e4606d}.custom-control-input.is-invalid:focus~.custom-control-label::before,.was-validated .custom-control-input:invalid:focus~.custom-control-label::before{box-shadow:0 0 0 .2rem rgba(220,53,69,.25)}.custom-control-input.is-invalid:focus:not(:checked)~.custom-control-label::before,.was-validated .custom-control-input:invalid:focus:not(:checked)~.custom-control-label::before{border-color:#dc3545}.custom-file-input.is-invalid~.custom-file-label,.was-validated .custom-file-input:invalid~.custom-file-label{border-color:#dc3545}.custom-file-input.is-invalid~.invalid-feedback,.custom-file-input.is-invalid~.invalid-tooltip,.was-validated .custom-file-input:invalid~.invalid-feedback,.was-validated .custom-file-input:invalid~.invalid-tooltip{display:block}.custom-file-input.is-invalid:focus~.custom-file-label,.was-validated .custom-file-input:invalid:focus~.custom-file-label{border-color:#dc3545;box-shadow:0 0 0 .2rem rgba(220,53,69,.25)}.form-inline{display:flex;flex-flow:row wrap;align-items:center}.form-inline .form-check{width:100%}@media (min-width:576px){.form-inline label{display:flex;align-items:center;justify-content:center;margin-bottom:0}.form-inline .form-group{display:flex;flex:0 0 auto;flex-flow:row wrap;align-items:center;margin-bottom:0}.form-inline .form-control{display:inline-block;width:auto;vertical-align:middle}.form-inline .form-control-plaintext{display:inline-block}.form-inline .custom-select,.form-inline .input-group{width:auto}.form-inline .form-check{display:flex;align-items:center;justify-content:center;width:auto;padding-left:0}.form-inline .form-check-input{position:relative;margin-top:0;margin-right:.25rem;margin-left:0}.form-inline .custom-control{align-items:center;justify-content:center}.form-inline .custom-control-label{margin-bottom:0}}.btn{display:inline-block;font-weight:400;color:#212529;text-align:center;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:transparent;border:1px solid transparent;padding:.375rem .75rem;font-size:1rem;line-height:1.5;border-radius:.25rem;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media screen and (prefers-reduced-motion:reduce){.btn{transition:none}}.btn:hover{color:#212529;text-decoration:none}.btn.focus,.btn:focus{outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.btn.disabled,.btn:disabled{opacity:.65}.btn:not(:disabled):not(.disabled){cursor:pointer}a.btn.disabled,fieldset:disabled a.btn{pointer-events:none}.btn-primary{color:#fff;background-color:#007bff;border-color:#007bff}.btn-primary:hover{color:#fff;background-color:#0069d9;border-color:#0062cc}.btn-primary.focus,.btn-primary:focus{box-shadow:0 0 0 .2rem rgba(38,143,255,.5)}.btn-primary.disabled,.btn-primary:disabled{color:#fff;background-color:#007bff;border-color:#007bff}.btn-primary:not(:disabled):not(.disabled).active,.btn-primary:not(:disabled):not(.disabled):active,.show>.btn-primary.dropdown-toggle{color:#fff;background-color:#0062cc;border-color:#005cbf}.btn-primary:not(:disabled):not(.disabled).active:focus,.btn-primary:not(:disabled):not(.disabled):active:focus,.show>.btn-primary.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(38,143,255,.5)}.btn-secondary{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-secondary:hover{color:#fff;background-color:#5a6268;border-color:#545b62}.btn-secondary.focus,.btn-secondary:focus{box-shadow:0 0 0 .2rem rgba(130,138,145,.5)}.btn-secondary.disabled,.btn-secondary:disabled{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-secondary:not(:disabled):not(.disabled).active,.btn-secondary:not(:disabled):not(.disabled):active,.show>.btn-secondary.dropdown-toggle{color:#fff;background-color:#545b62;border-color:#4e555b}.btn-secondary:not(:disabled):not(.disabled).active:focus,.btn-secondary:not(:disabled):not(.disabled):active:focus,.show>.btn-secondary.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(130,138,145,.5)}.btn-success{color:#fff;background-color:#28a745;border-color:#28a745}.btn-success:hover{color:#fff;background-color:#218838;border-color:#1e7e34}.btn-success.focus,.btn-success:focus{box-shadow:0 0 0 .2rem rgba(72,180,97,.5)}.btn-success.disabled,.btn-success:disabled{color:#fff;background-color:#28a745;border-color:#28a745}.btn-success:not(:disabled):not(.disabled).active,.btn-success:not(:disabled):not(.disabled):active,.show>.btn-success.dropdown-toggle{color:#fff;background-color:#1e7e34;border-color:#1c7430}.btn-success:not(:disabled):not(.disabled).active:focus,.btn-success:not(:disabled):not(.disabled):active:focus,.show>.btn-success.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(72,180,97,.5)}.btn-info{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.btn-info:hover{color:#fff;background-color:#138496;border-color:#117a8b}.btn-info.focus,.btn-info:focus{box-shadow:0 0 0 .2rem rgba(58,176,195,.5)}.btn-info.disabled,.btn-info:disabled{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.btn-info:not(:disabled):not(.disabled).active,.btn-info:not(:disabled):not(.disabled):active,.show>.btn-info.dropdown-toggle{color:#fff;background-color:#117a8b;border-color:#10707f}.btn-info:not(:disabled):not(.disabled).active:focus,.btn-info:not(:disabled):not(.disabled):active:focus,.show>.btn-info.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(58,176,195,.5)}.btn-warning{color:#212529;background-color:#ffc107;border-color:#ffc107}.btn-warning:hover{color:#212529;background-color:#e0a800;border-color:#d39e00}.btn-warning.focus,.btn-warning:focus{box-shadow:0 0 0 .2rem rgba(222,170,12,.5)}.btn-warning.disabled,.btn-warning:disabled{color:#212529;background-color:#ffc107;border-color:#ffc107}.btn-warning:not(:disabled):not(.disabled).active,.btn-warning:not(:disabled):not(.disabled):active,.show>.btn-warning.dropdown-toggle{color:#212529;background-color:#d39e00;border-color:#c69500}.btn-warning:not(:disabled):not(.disabled).active:focus,.btn-warning:not(:disabled):not(.disabled):active:focus,.show>.btn-warning.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(222,170,12,.5)}.btn-danger{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-danger:hover{color:#fff;background-color:#c82333;border-color:#bd2130}.btn-danger.focus,.btn-danger:focus{box-shadow:0 0 0 .2rem rgba(225,83,97,.5)}.btn-danger.disabled,.btn-danger:disabled{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-danger:not(:disabled):not(.disabled).active,.btn-danger:not(:disabled):not(.disabled):active,.show>.btn-danger.dropdown-toggle{color:#fff;background-color:#bd2130;border-color:#b21f2d}.btn-danger:not(:disabled):not(.disabled).active:focus,.btn-danger:not(:disabled):not(.disabled):active:focus,.show>.btn-danger.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(225,83,97,.5)}.btn-light{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}.btn-light:hover{color:#212529;background-color:#e2e6ea;border-color:#dae0e5}.btn-light.focus,.btn-light:focus{box-shadow:0 0 0 .2rem rgba(216,217,219,.5)}.btn-light.disabled,.btn-light:disabled{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}.btn-light:not(:disabled):not(.disabled).active,.btn-light:not(:disabled):not(.disabled):active,.show>.btn-light.dropdown-toggle{color:#212529;background-color:#dae0e5;border-color:#d3d9df}.btn-light:not(:disabled):not(.disabled).active:focus,.btn-light:not(:disabled):not(.disabled):active:focus,.show>.btn-light.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(216,217,219,.5)}.btn-dark{color:#fff;background-color:#343a40;border-color:#343a40}.btn-dark:hover{color:#fff;background-color:#23272b;border-color:#1d2124}.btn-dark.focus,.btn-dark:focus{box-shadow:0 0 0 .2rem rgba(82,88,93,.5)}.btn-dark.disabled,.btn-dark:disabled{color:#fff;background-color:#343a40;border-color:#343a40}.btn-dark:not(:disabled):not(.disabled).active,.btn-dark:not(:disabled):not(.disabled):active,.show>.btn-dark.dropdown-toggle{color:#fff;background-color:#1d2124;border-color:#171a1d}.btn-dark:not(:disabled):not(.disabled).active:focus,.btn-dark:not(:disabled):not(.disabled):active:focus,.show>.btn-dark.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(82,88,93,.5)}.btn-outline-primary{color:#007bff;border-color:#007bff}.btn-outline-primary:hover{color:#fff;background-color:#007bff;border-color:#007bff}.btn-outline-primary.focus,.btn-outline-primary:focus{box-shadow:0 0 0 .2rem rgba(0,123,255,.5)}.btn-outline-primary.disabled,.btn-outline-primary:disabled{color:#007bff;background-color:transparent}.btn-outline-primary:not(:disabled):not(.disabled).active,.btn-outline-primary:not(:disabled):not(.disabled):active,.show>.btn-outline-primary.dropdown-toggle{color:#fff;background-color:#007bff;border-color:#007bff}.btn-outline-primary:not(:disabled):not(.disabled).active:focus,.btn-outline-primary:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-primary.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(0,123,255,.5)}.btn-outline-secondary{color:#6c757d;border-color:#6c757d}.btn-outline-secondary:hover{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-outline-secondary.focus,.btn-outline-secondary:focus{box-shadow:0 0 0 .2rem rgba(108,117,125,.5)}.btn-outline-secondary.disabled,.btn-outline-secondary:disabled{color:#6c757d;background-color:transparent}.btn-outline-secondary:not(:disabled):not(.disabled).active,.btn-outline-secondary:not(:disabled):not(.disabled):active,.show>.btn-outline-secondary.dropdown-toggle{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-outline-secondary:not(:disabled):not(.disabled).active:focus,.btn-outline-secondary:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-secondary.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(108,117,125,.5)}.btn-outline-success{color:#28a745;border-color:#28a745}.btn-outline-success:hover{color:#fff;background-color:#28a745;border-color:#28a745}.btn-outline-success.focus,.btn-outline-success:focus{box-shadow:0 0 0 .2rem rgba(40,167,69,.5)}.btn-outline-success.disabled,.btn-outline-success:disabled{color:#28a745;background-color:transparent}.btn-outline-success:not(:disabled):not(.disabled).active,.btn-outline-success:not(:disabled):not(.disabled):active,.show>.btn-outline-success.dropdown-toggle{color:#fff;background-color:#28a745;border-color:#28a745}.btn-outline-success:not(:disabled):not(.disabled).active:focus,.btn-outline-success:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-success.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(40,167,69,.5)}.btn-outline-info{color:#17a2b8;border-color:#17a2b8}.btn-outline-info:hover{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.btn-outline-info.focus,.btn-outline-info:focus{box-shadow:0 0 0 .2rem rgba(23,162,184,.5)}.btn-outline-info.disabled,.btn-outline-info:disabled{color:#17a2b8;background-color:transparent}.btn-outline-info:not(:disabled):not(.disabled).active,.btn-outline-info:not(:disabled):not(.disabled):active,.show>.btn-outline-info.dropdown-toggle{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.btn-outline-info:not(:disabled):not(.disabled).active:focus,.btn-outline-info:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-info.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(23,162,184,.5)}.btn-outline-warning{color:#ffc107;border-color:#ffc107}.btn-outline-warning:hover{color:#212529;background-color:#ffc107;border-color:#ffc107}.btn-outline-warning.focus,.btn-outline-warning:focus{box-shadow:0 0 0 .2rem rgba(255,193,7,.5)}.btn-outline-warning.disabled,.btn-outline-warning:disabled{color:#ffc107;background-color:transparent}.btn-outline-warning:not(:disabled):not(.disabled).active,.btn-outline-warning:not(:disabled):not(.disabled):active,.show>.btn-outline-warning.dropdown-toggle{color:#212529;background-color:#ffc107;border-color:#ffc107}.btn-outline-warning:not(:disabled):not(.disabled).active:focus,.btn-outline-warning:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-warning.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(255,193,7,.5)}.btn-outline-danger{color:#dc3545;border-color:#dc3545}.btn-outline-danger:hover{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-outline-danger.focus,.btn-outline-danger:focus{box-shadow:0 0 0 .2rem rgba(220,53,69,.5)}.btn-outline-danger.disabled,.btn-outline-danger:disabled{color:#dc3545;background-color:transparent}.btn-outline-danger:not(:disabled):not(.disabled).active,.btn-outline-danger:not(:disabled):not(.disabled):active,.show>.btn-outline-danger.dropdown-toggle{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-outline-danger:not(:disabled):not(.disabled).active:focus,.btn-outline-danger:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-danger.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(220,53,69,.5)}.btn-outline-light{color:#f8f9fa;border-color:#f8f9fa}.btn-outline-light:hover{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}.btn-outline-light.focus,.btn-outline-light:focus{box-shadow:0 0 0 .2rem rgba(248,249,250,.5)}.btn-outline-light.disabled,.btn-outline-light:disabled{color:#f8f9fa;background-color:transparent}.btn-outline-light:not(:disabled):not(.disabled).active,.btn-outline-light:not(:disabled):not(.disabled):active,.show>.btn-outline-light.dropdown-toggle{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}.btn-outline-light:not(:disabled):not(.disabled).active:focus,.btn-outline-light:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-light.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(248,249,250,.5)}.btn-outline-dark{color:#343a40;border-color:#343a40}.btn-outline-dark:hover{color:#fff;background-color:#343a40;border-color:#343a40}.btn-outline-dark.focus,.btn-outline-dark:focus{box-shadow:0 0 0 .2rem rgba(52,58,64,.5)}.btn-outline-dark.disabled,.btn-outline-dark:disabled{color:#343a40;background-color:transparent}.btn-outline-dark:not(:disabled):not(.disabled).active,.btn-outline-dark:not(:disabled):not(.disabled):active,.show>.btn-outline-dark.dropdown-toggle{color:#fff;background-color:#343a40;border-color:#343a40}.btn-outline-dark:not(:disabled):not(.disabled).active:focus,.btn-outline-dark:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-dark.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(52,58,64,.5)}.btn-link{font-weight:400;color:#007bff}.btn-link:hover{color:#0056b3;text-decoration:underline}.btn-link.focus,.btn-link:focus{text-decoration:underline;box-shadow:none}.btn-link.disabled,.btn-link:disabled{color:#6c757d;pointer-events:none}.btn-group-lg>.btn,.btn-lg{padding:.5rem 1rem;font-size:1.25rem;line-height:1.5;border-radius:.3rem}.btn-group-sm>.btn,.btn-sm{padding:.25rem .5rem;font-size:.875rem;line-height:1.5;border-radius:.2rem}.btn-block{display:block;width:100%}.btn-block+.btn-block{margin-top:.5rem}input[type=button].btn-block,input[type=reset].btn-block,input[type=submit].btn-block{width:100%}.fade{transition:opacity .15s linear}@media screen and (prefers-reduced-motion:reduce){.fade{transition:none}}.fade:not(.show){opacity:0}.collapse:not(.show){display:none}.collapsing{position:relative;height:0;overflow:hidden;transition:height .35s}.dropdown,.dropleft,.dropright,.dropup{position:relative}.dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:"";border-top:.3em solid;border-right:.3em solid transparent;border-bottom:0;border-left:.3em solid transparent}.dropdown-toggle:empty::after{margin-left:0}.dropdown-menu{position:absolute;top:100%;left:0;z-index:1000;display:none;float:left;min-width:10rem;padding:.5rem 0;margin:.125rem 0 0;font-size:1rem;color:#212529;text-align:left;list-style:none;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.15);border-radius:.25rem}.dropdown-menu-right{right:0;left:auto}@media (min-width:576px){.dropdown-menu-sm-right{right:0;left:auto}}@media (min-width:768px){.dropdown-menu-md-right{right:0;left:auto}}@media (min-width:992px){.dropdown-menu-lg-right{right:0;left:auto}}@media (min-width:1200px){.dropdown-menu-xl-right{right:0;left:auto}.dropdown-menu-xl-left{right:auto;left:0}}.dropdown-menu-left{right:auto;left:0}@media (min-width:576px){.dropdown-menu-sm-left{right:auto;left:0}}@media (min-width:768px){.dropdown-menu-md-left{right:auto;left:0}}@media (min-width:992px){.dropdown-menu-lg-left{right:auto;left:0}}.dropup .dropdown-menu{top:auto;bottom:100%;margin-top:0;margin-bottom:.125rem}.dropup .dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:"";border-top:0;border-right:.3em solid transparent;border-bottom:.3em solid;border-left:.3em solid transparent}.dropup .dropdown-toggle:empty::after{margin-left:0}.dropright .dropdown-menu{top:0;right:auto;left:100%;margin-top:0;margin-left:.125rem}.dropright .dropdown-toggle::after{display:inline-block;margin-left:.255em;content:"";border-top:.3em solid transparent;border-right:0;border-bottom:.3em solid transparent;border-left:.3em solid;vertical-align:0}.dropright .dropdown-toggle:empty::after{margin-left:0}.dropleft .dropdown-menu{top:0;right:100%;left:auto;margin-top:0;margin-right:.125rem}.dropleft .dropdown-toggle::after{margin-left:.255em;vertical-align:.255em;content:"";display:none}.dropleft .dropdown-toggle::before{display:inline-block;margin-right:.255em;content:"";border-top:.3em solid transparent;border-right:.3em solid;border-bottom:.3em solid transparent;vertical-align:0}.dropleft .dropdown-toggle:empty::after{margin-left:0}.dropdown-menu[x-placement^=bottom],.dropdown-menu[x-placement^=left],.dropdown-menu[x-placement^=right],.dropdown-menu[x-placement^=top]{right:auto;bottom:auto}.dropdown-divider{height:0;margin:.5rem 0;overflow:hidden;border-top:1px solid #e9ecef}.dropdown-item{display:block;width:100%;padding:.25rem 1.5rem;clear:both;font-weight:400;color:#212529;text-align:inherit;white-space:nowrap;background-color:transparent;border:0}.dropdown-item:first-child{border-top-left-radius:calc(.25rem - 1px);border-top-right-radius:calc(.25rem - 1px)}.dropdown-item:last-child{border-bottom-right-radius:calc(.25rem - 1px);border-bottom-left-radius:calc(.25rem - 1px)}.dropdown-item:focus,.dropdown-item:hover{color:#16181b;text-decoration:none;background-color:#f8f9fa}.dropdown-item.active,.dropdown-item:active{color:#fff;text-decoration:none;background-color:#007bff}.dropdown-item.disabled,.dropdown-item:disabled{color:#6c757d;pointer-events:none;background-color:transparent}.dropdown-menu.show{display:block}.dropdown-header{display:block;padding:.5rem 1.5rem;margin-bottom:0;font-size:.875rem;color:#6c757d;white-space:nowrap}.dropdown-item-text{display:block;padding:.25rem 1.5rem;color:#212529}.btn-group,.btn-group-vertical{position:relative;display:inline-flex;vertical-align:middle}.btn-group-vertical>.btn,.btn-group>.btn{position:relative;flex:1 1 auto}.btn-group-vertical>.btn.active,.btn-group-vertical>.btn:active,.btn-group-vertical>.btn:focus,.btn-group-vertical>.btn:hover,.btn-group>.btn.active,.btn-group>.btn:active,.btn-group>.btn:focus,.btn-group>.btn:hover{z-index:1}.btn-toolbar{display:flex;flex-wrap:wrap;justify-content:flex-start}.btn-toolbar .input-group{width:auto}.btn-group>.btn-group:not(:first-child),.btn-group>.btn:not(:first-child){margin-left:-1px}.btn-group>.btn-group:not(:last-child)>.btn,.btn-group>.btn:not(:last-child):not(.dropdown-toggle){border-top-right-radius:0;border-bottom-right-radius:0}.btn-group>.btn-group:not(:first-child)>.btn,.btn-group>.btn:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.dropdown-toggle-split{padding-right:.5625rem;padding-left:.5625rem}.dropdown-toggle-split::after,.dropright .dropdown-toggle-split::after,.dropup .dropdown-toggle-split::after{margin-left:0}.dropleft .dropdown-toggle-split::before{margin-right:0}.btn-group-sm>.btn+.dropdown-toggle-split,.btn-sm+.dropdown-toggle-split{padding-right:.375rem;padding-left:.375rem}.btn-group-lg>.btn+.dropdown-toggle-split,.btn-lg+.dropdown-toggle-split{padding-right:.75rem;padding-left:.75rem}.btn-group-vertical{flex-direction:column;align-items:flex-start;justify-content:center}.btn-group-vertical>.btn,.btn-group-vertical>.btn-group{width:100%}.btn-group-vertical>.btn-group:not(:first-child),.btn-group-vertical>.btn:not(:first-child){margin-top:-1px}.btn-group-vertical>.btn-group:not(:last-child)>.btn,.btn-group-vertical>.btn:not(:last-child):not(.dropdown-toggle){border-bottom-right-radius:0;border-bottom-left-radius:0}.btn-group-vertical>.btn-group:not(:first-child)>.btn,.btn-group-vertical>.btn:not(:first-child){border-top-left-radius:0;border-top-right-radius:0}.btn-group-toggle>.btn,.btn-group-toggle>.btn-group>.btn{margin-bottom:0}.btn-group-toggle>.btn input[type=checkbox],.btn-group-toggle>.btn input[type=radio],.btn-group-toggle>.btn-group>.btn input[type=checkbox],.btn-group-toggle>.btn-group>.btn input[type=radio]{position:absolute;clip:rect(0,0,0,0);pointer-events:none}.input-group{position:relative;display:flex;flex-wrap:wrap;align-items:stretch;width:100%}.input-group>.custom-file,.input-group>.custom-select,.input-group>.form-control,.input-group>.form-control-plaintext{position:relative;flex:1 1 auto;width:1%;margin-bottom:0}.input-group>.custom-file+.custom-file,.input-group>.custom-file+.custom-select,.input-group>.custom-file+.form-control,.input-group>.custom-select+.custom-file,.input-group>.custom-select+.custom-select,.input-group>.custom-select+.form-control,.input-group>.form-control+.custom-file,.input-group>.form-control+.custom-select,.input-group>.form-control+.form-control,.input-group>.form-control-plaintext+.custom-file,.input-group>.form-control-plaintext+.custom-select,.input-group>.form-control-plaintext+.form-control{margin-left:-1px}.input-group>.custom-file .custom-file-input:focus~.custom-file-label,.input-group>.custom-select:focus,.input-group>.form-control:focus{z-index:3}.input-group>.custom-file .custom-file-input:focus{z-index:4}.input-group>.custom-select:not(:last-child),.input-group>.form-control:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.input-group>.custom-select:not(:first-child),.input-group>.form-control:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.input-group>.custom-file{display:flex;align-items:center}.input-group>.custom-file:not(:last-child) .custom-file-label,.input-group>.custom-file:not(:last-child) .custom-file-label::after{border-top-right-radius:0;border-bottom-right-radius:0}.input-group>.custom-file:not(:first-child) .custom-file-label{border-top-left-radius:0;border-bottom-left-radius:0}.input-group-append,.input-group-prepend{display:flex}.input-group-append .btn,.input-group-prepend .btn{position:relative;z-index:2}.input-group-append .btn:focus,.input-group-prepend .btn:focus{z-index:3}.input-group-append .btn+.btn,.input-group-append .btn+.input-group-text,.input-group-append .input-group-text+.btn,.input-group-append .input-group-text+.input-group-text,.input-group-prepend .btn+.btn,.input-group-prepend .btn+.input-group-text,.input-group-prepend .input-group-text+.btn,.input-group-prepend .input-group-text+.input-group-text{margin-left:-1px}.input-group-prepend{margin-right:-1px}.input-group-append{margin-left:-1px}.input-group-text{display:flex;align-items:center;padding:.375rem .75rem;margin-bottom:0;font-size:1rem;font-weight:400;line-height:1.5;color:#495057;text-align:center;white-space:nowrap;background-color:#e9ecef;border:1px solid #ced4da;border-radius:.25rem}.input-group-text input[type=checkbox],.input-group-text input[type=radio]{margin-top:0}.input-group-lg>.custom-select,.input-group-lg>.form-control:not(textarea){height:calc(2.875rem + 2px)}.input-group-lg>.custom-select,.input-group-lg>.form-control,.input-group-lg>.input-group-append>.btn,.input-group-lg>.input-group-append>.input-group-text,.input-group-lg>.input-group-prepend>.btn,.input-group-lg>.input-group-prepend>.input-group-text{padding:.5rem 1rem;font-size:1.25rem;line-height:1.5;border-radius:.3rem}.input-group-sm>.custom-select,.input-group-sm>.form-control:not(textarea){height:calc(1.8125rem + 2px)}.input-group-sm>.custom-select,.input-group-sm>.form-control,.input-group-sm>.input-group-append>.btn,.input-group-sm>.input-group-append>.input-group-text,.input-group-sm>.input-group-prepend>.btn,.input-group-sm>.input-group-prepend>.input-group-text{padding:.25rem .5rem;font-size:.875rem;line-height:1.5;border-radius:.2rem}.input-group-lg>.custom-select,.input-group-sm>.custom-select{padding-right:1.75rem}.input-group>.input-group-append:last-child>.btn:not(:last-child):not(.dropdown-toggle),.input-group>.input-group-append:last-child>.input-group-text:not(:last-child),.input-group>.input-group-append:not(:last-child)>.btn,.input-group>.input-group-append:not(:last-child)>.input-group-text,.input-group>.input-group-prepend>.btn,.input-group>.input-group-prepend>.input-group-text{border-top-right-radius:0;border-bottom-right-radius:0}.input-group>.input-group-append>.btn,.input-group>.input-group-append>.input-group-text,.input-group>.input-group-prepend:first-child>.btn:not(:first-child),.input-group>.input-group-prepend:first-child>.input-group-text:not(:first-child),.input-group>.input-group-prepend:not(:first-child)>.btn,.input-group>.input-group-prepend:not(:first-child)>.input-group-text{border-top-left-radius:0;border-bottom-left-radius:0}.custom-control{position:relative;display:block;min-height:1.5rem;padding-left:1.5rem}.custom-control-inline{display:inline-flex;margin-right:1rem}.custom-control-input{position:absolute;z-index:-1;opacity:0}.custom-control-input:checked~.custom-control-label::before{color:#fff;border-color:#007bff;background-color:#007bff}.custom-control-input:focus~.custom-control-label::before{box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.custom-control-input:focus:not(:checked)~.custom-control-label::before{border-color:#80bdff}.custom-control-input:not(:disabled):active~.custom-control-label::before{color:#fff;background-color:#b3d7ff;border-color:#b3d7ff}.custom-control-input:disabled~.custom-control-label{color:#6c757d}.custom-control-input:disabled~.custom-control-label::before{background-color:#e9ecef}.custom-control-label{position:relative;margin-bottom:0;vertical-align:top}.custom-control-label::before{position:absolute;top:.25rem;left:-1.5rem;display:block;width:1rem;height:1rem;pointer-events:none;content:"";background-color:#fff;border:1px solid #adb5bd}.custom-control-label::after{position:absolute;top:.25rem;left:-1.5rem;display:block;width:1rem;height:1rem;content:"";background-repeat:no-repeat;background-position:center center;background-size:50% 50%}.custom-checkbox .custom-control-label::before{border-radius:.25rem}.custom-checkbox .custom-control-input:checked~.custom-control-label::after{background-image:url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%23fff\' d=\'M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z\'/%3e%3c/svg%3e")}.custom-checkbox .custom-control-input:indeterminate~.custom-control-label::before{border-color:#007bff;background-color:#007bff}.custom-checkbox .custom-control-input:indeterminate~.custom-control-label::after{background-image:url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 4 4\'%3e%3cpath stroke=\'%23fff\' d=\'M0 2h4\'/%3e%3c/svg%3e")}.custom-checkbox .custom-control-input:disabled:checked~.custom-control-label::before{background-color:rgba(0,123,255,.5)}.custom-checkbox .custom-control-input:disabled:indeterminate~.custom-control-label::before{background-color:rgba(0,123,255,.5)}.custom-radio .custom-control-label::before{border-radius:50%}.custom-radio .custom-control-input:checked~.custom-control-label::after{background-image:url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'-4 -4 8 8\'%3e%3ccircle r=\'3\' fill=\'%23fff\'/%3e%3c/svg%3e")}.custom-radio .custom-control-input:disabled:checked~.custom-control-label::before{background-color:rgba(0,123,255,.5)}.custom-switch{padding-left:2.25rem}.custom-switch .custom-control-label::before{left:-2.25rem;width:1.75rem;pointer-events:all;border-radius:.5rem}.custom-switch .custom-control-label::after{top:calc(.25rem + 2px);left:calc(-2.25rem + 2px);width:calc(1rem - 4px);height:calc(1rem - 4px);background-color:#adb5bd;border-radius:.5rem;transition:transform .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-transform .15s ease-in-out}.custom-switch .custom-control-input:checked~.custom-control-label::after{background-color:#fff;-webkit-transform:translateX(.75rem);transform:translateX(.75rem)}.custom-switch .custom-control-input:disabled:checked~.custom-control-label::before{background-color:rgba(0,123,255,.5)}.custom-select{display:inline-block;width:100%;height:calc(2.25rem + 2px);padding:.375rem 1.75rem .375rem .75rem;font-weight:400;line-height:1.5;color:#495057;vertical-align:middle;background:url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 4 5\'%3e%3cpath fill=\'%23343a40\' d=\'M2 0L0 2h4zm0 5L0 3h4z\'/%3e%3c/svg%3e") right .75rem center/8px 10px no-repeat #fff;border:1px solid #ced4da;border-radius:.25rem;-webkit-appearance:none;-moz-appearance:none;appearance:none}.custom-select:focus{border-color:#80bdff;outline:0;box-shadow:0 0 0 .2rem rgba(128,189,255,.5)}.custom-select:focus::-ms-value{color:#495057;background-color:#fff}.custom-select[multiple],.custom-select[size]:not([size="1"]){height:auto;padding-right:.75rem;background-image:none}.custom-select:disabled{color:#6c757d;background-color:#e9ecef}.custom-select::-ms-expand{opacity:0}.custom-select-sm{height:calc(1.8125rem + 2px);padding-top:.25rem;padding-bottom:.25rem;padding-left:.5rem;font-size:.875rem}.custom-select-lg{height:calc(2.875rem + 2px);padding-top:.5rem;padding-bottom:.5rem;padding-left:1rem;font-size:1.25rem}.custom-file{position:relative;display:inline-block;width:100%;height:calc(2.25rem + 2px);margin-bottom:0}.custom-file-input{position:relative;z-index:2;width:100%;height:calc(2.25rem + 2px);margin:0;opacity:0}.custom-file-input:focus~.custom-file-label{border-color:#80bdff;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.custom-file-input:disabled~.custom-file-label{background-color:#e9ecef}.custom-file-input:lang(en)~.custom-file-label::after{content:"Browse"}.custom-file-input~.custom-file-label[data-browse]::after{content:attr(data-browse)}.custom-file-label{position:absolute;top:0;right:0;left:0;z-index:1;height:calc(2.25rem + 2px);padding:.375rem .75rem;font-weight:400;line-height:1.5;color:#495057;background-color:#fff;border:1px solid #ced4da;border-radius:.25rem}.custom-file-label::after{position:absolute;top:0;right:0;bottom:0;z-index:3;display:block;height:2.25rem;padding:.375rem .75rem;line-height:1.5;color:#495057;content:"Browse";background-color:#e9ecef;border-left:inherit;border-radius:0 .25rem .25rem 0}.custom-range{width:100%;height:calc(1rem + .4rem);padding:0;background-color:transparent;-webkit-appearance:none;-moz-appearance:none;appearance:none}.custom-range:focus{outline:0}.custom-range:focus::-webkit-slider-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem rgba(0,123,255,.25)}.custom-range:focus::-moz-range-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem rgba(0,123,255,.25)}.custom-range:focus::-ms-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem rgba(0,123,255,.25)}.custom-range::-moz-focus-outer{border:0}.custom-range::-webkit-slider-thumb{width:1rem;height:1rem;margin-top:-.25rem;background-color:#007bff;border:0;border-radius:1rem;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;-webkit-appearance:none;appearance:none}@media screen and (prefers-reduced-motion:reduce){.collapsing,.custom-switch .custom-control-label::after{transition:none}.custom-range::-webkit-slider-thumb{transition:none}}.custom-range::-webkit-slider-thumb:active{background-color:#b3d7ff}.custom-range::-webkit-slider-runnable-track{width:100%;height:.5rem;color:transparent;cursor:pointer;background-color:#dee2e6;border-color:transparent;border-radius:1rem}.custom-range::-moz-range-thumb{width:1rem;height:1rem;background-color:#007bff;border:0;border-radius:1rem;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;-moz-appearance:none;appearance:none}@media screen and (prefers-reduced-motion:reduce){.custom-range::-moz-range-thumb{transition:none}}.custom-range::-moz-range-thumb:active{background-color:#b3d7ff}.custom-range::-moz-range-track{width:100%;height:.5rem;color:transparent;cursor:pointer;background-color:#dee2e6;border-color:transparent;border-radius:1rem}.custom-range::-ms-thumb{width:1rem;height:1rem;margin-top:0;margin-right:.2rem;margin-left:.2rem;background-color:#007bff;border:0;border-radius:1rem;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;appearance:none}@media screen and (prefers-reduced-motion:reduce){.custom-range::-ms-thumb{transition:none}}.custom-range::-ms-thumb:active{background-color:#b3d7ff}.custom-range::-ms-track{width:100%;height:.5rem;color:transparent;cursor:pointer;background-color:transparent;border-color:transparent;border-width:.5rem}.custom-range::-ms-fill-lower{background-color:#dee2e6;border-radius:1rem}.custom-range::-ms-fill-upper{margin-right:15px;background-color:#dee2e6;border-radius:1rem}.custom-range:disabled::-webkit-slider-thumb{background-color:#adb5bd}.custom-range:disabled::-webkit-slider-runnable-track{cursor:default}.custom-range:disabled::-moz-range-thumb{background-color:#adb5bd}.custom-range:disabled::-moz-range-track{cursor:default}.custom-range:disabled::-ms-thumb{background-color:#adb5bd}.custom-control-label::before,.custom-file-label,.custom-select{transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media screen and (prefers-reduced-motion:reduce){.custom-control-label::before,.custom-file-label,.custom-select{transition:none}}.nav{display:flex;flex-wrap:wrap;padding-left:0;margin-bottom:0;list-style:none}.nav-link{display:block;padding:.5rem 1rem}.nav-link:focus,.nav-link:hover{text-decoration:none}.nav-link.disabled{color:#6c757d;pointer-events:none;cursor:default}.nav-tabs{border-bottom:1px solid #dee2e6}.nav-tabs .nav-item{margin-bottom:-1px}.nav-tabs .nav-link{border:1px solid transparent;border-top-left-radius:.25rem;border-top-right-radius:.25rem}.nav-tabs .nav-link:focus,.nav-tabs .nav-link:hover{border-color:#e9ecef #e9ecef #dee2e6}.nav-tabs .nav-link.disabled{color:#6c757d;background-color:transparent;border-color:transparent}.nav-tabs .nav-item.show .nav-link,.nav-tabs .nav-link.active{color:#495057;background-color:#fff;border-color:#dee2e6 #dee2e6 #fff}.nav-tabs .dropdown-menu{margin-top:-1px;border-top-left-radius:0;border-top-right-radius:0}.nav-pills .nav-link{border-radius:.25rem}.nav-pills .nav-link.active,.nav-pills .show>.nav-link{color:#fff;background-color:#007bff}.nav-fill .nav-item{flex:1 1 auto;text-align:center}.nav-justified .nav-item{flex-basis:0;flex-grow:1;text-align:center}.tab-content>.tab-pane{display:none}.tab-content>.active{display:block}.navbar{position:relative;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;padding:.5rem 1rem}.navbar>.container,.navbar>.container-fluid{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between}.navbar-brand{display:inline-block;padding-top:.3125rem;padding-bottom:.3125rem;margin-right:1rem;font-size:1.25rem;line-height:inherit;white-space:nowrap}.navbar-brand:focus,.navbar-brand:hover{text-decoration:none}.navbar-nav{display:flex;flex-direction:column;padding-left:0;margin-bottom:0;list-style:none}.navbar-nav .nav-link{padding-right:0;padding-left:0}.navbar-nav .dropdown-menu{position:static;float:none}.navbar-text{display:inline-block;padding-top:.5rem;padding-bottom:.5rem}.navbar-collapse{flex-basis:100%;flex-grow:1;align-items:center}.navbar-toggler{padding:.25rem .75rem;font-size:1.25rem;line-height:1;background-color:transparent;border:1px solid transparent;border-radius:.25rem}.navbar-toggler:focus,.navbar-toggler:hover{text-decoration:none}.navbar-toggler:not(:disabled):not(.disabled){cursor:pointer}.navbar-toggler-icon{display:inline-block;width:1.5em;height:1.5em;vertical-align:middle;content:"";background:center center/100% 100% no-repeat}@media (max-width:575.98px){.navbar-expand-sm>.container,.navbar-expand-sm>.container-fluid{padding-right:0;padding-left:0}}@media (min-width:576px){.navbar-expand-sm{flex-flow:row nowrap;justify-content:flex-start}.navbar-expand-sm .navbar-nav{flex-direction:row}.navbar-expand-sm .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-sm .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-sm>.container,.navbar-expand-sm>.container-fluid{flex-wrap:nowrap}.navbar-expand-sm .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-sm .navbar-toggler{display:none}}@media (max-width:767.98px){.navbar-expand-md>.container,.navbar-expand-md>.container-fluid{padding-right:0;padding-left:0}}@media (min-width:768px){.navbar-expand-md{flex-flow:row nowrap;justify-content:flex-start}.navbar-expand-md .navbar-nav{flex-direction:row}.navbar-expand-md .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-md .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-md>.container,.navbar-expand-md>.container-fluid{flex-wrap:nowrap}.navbar-expand-md .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-md .navbar-toggler{display:none}}@media (max-width:991.98px){.navbar-expand-lg>.container,.navbar-expand-lg>.container-fluid{padding-right:0;padding-left:0}}@media (min-width:992px){.navbar-expand-lg{flex-flow:row nowrap;justify-content:flex-start}.navbar-expand-lg .navbar-nav{flex-direction:row}.navbar-expand-lg .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-lg .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-lg>.container,.navbar-expand-lg>.container-fluid{flex-wrap:nowrap}.navbar-expand-lg .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-lg .navbar-toggler{display:none}}@media (max-width:1199.98px){.navbar-expand-xl>.container,.navbar-expand-xl>.container-fluid{padding-right:0;padding-left:0}}@media (min-width:1200px){.navbar-expand-xl{flex-flow:row nowrap;justify-content:flex-start}.navbar-expand-xl .navbar-nav{flex-direction:row}.navbar-expand-xl .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-xl .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-xl>.container,.navbar-expand-xl>.container-fluid{flex-wrap:nowrap}.navbar-expand-xl .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-xl .navbar-toggler{display:none}}.navbar-expand{flex-flow:row nowrap;justify-content:flex-start}.navbar-expand .navbar-nav{flex-direction:row}.navbar-expand .navbar-nav .dropdown-menu{position:absolute}.navbar-expand .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand>.container,.navbar-expand>.container-fluid{padding-right:0;padding-left:0;flex-wrap:nowrap}.navbar-expand .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand .navbar-toggler{display:none}.navbar-light .navbar-brand,.navbar-light .navbar-brand:focus,.navbar-light .navbar-brand:hover{color:rgba(0,0,0,.9)}.navbar-light .navbar-nav .nav-link{color:rgba(0,0,0,.5)}.navbar-light .navbar-nav .nav-link:focus,.navbar-light .navbar-nav .nav-link:hover{color:rgba(0,0,0,.7)}.navbar-light .navbar-nav .nav-link.disabled{color:rgba(0,0,0,.3)}.navbar-light .navbar-nav .active>.nav-link,.navbar-light .navbar-nav .nav-link.active,.navbar-light .navbar-nav .nav-link.show,.navbar-light .navbar-nav .show>.nav-link{color:rgba(0,0,0,.9)}.navbar-light .navbar-toggler{color:rgba(0,0,0,.5);border-color:rgba(0,0,0,.1)}.navbar-light .navbar-toggler-icon{background-image:url("data:image/svg+xml,%3csvg viewBox=\'0 0 30 30\' xmlns=\'http://www.w3.org/2000/svg\'%3e%3cpath stroke=\'rgba(0, 0, 0, 0.5)\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-miterlimit=\'10\' d=\'M4 7h22M4 15h22M4 23h22\'/%3e%3c/svg%3e")}.navbar-light .navbar-text{color:rgba(0,0,0,.5)}.navbar-light .navbar-text a,.navbar-light .navbar-text a:focus,.navbar-light .navbar-text a:hover{color:rgba(0,0,0,.9)}.navbar-dark .navbar-brand,.navbar-dark .navbar-brand:focus,.navbar-dark .navbar-brand:hover{color:#fff}.navbar-dark .navbar-nav .nav-link{color:rgba(255,255,255,.5)}.navbar-dark .navbar-nav .nav-link:focus,.navbar-dark .navbar-nav .nav-link:hover{color:rgba(255,255,255,.75)}.navbar-dark .navbar-nav .nav-link.disabled{color:rgba(255,255,255,.25)}.navbar-dark .navbar-nav .active>.nav-link,.navbar-dark .navbar-nav .nav-link.active,.navbar-dark .navbar-nav .nav-link.show,.navbar-dark .navbar-nav .show>.nav-link{color:#fff}.navbar-dark .navbar-toggler{color:rgba(255,255,255,.5);border-color:rgba(255,255,255,.1)}.navbar-dark .navbar-toggler-icon{background-image:url("data:image/svg+xml,%3csvg viewBox=\'0 0 30 30\' xmlns=\'http://www.w3.org/2000/svg\'%3e%3cpath stroke=\'rgba(255, 255, 255, 0.5)\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-miterlimit=\'10\' d=\'M4 7h22M4 15h22M4 23h22\'/%3e%3c/svg%3e")}.navbar-dark .navbar-text{color:rgba(255,255,255,.5)}.navbar-dark .navbar-text a,.navbar-dark .navbar-text a:focus,.navbar-dark .navbar-text a:hover{color:#fff}.card{position:relative;display:flex;flex-direction:column;min-width:0;word-wrap:break-word;background-color:#fff;background-clip:border-box;border:1px solid rgba(0,0,0,.125);border-radius:.25rem}.card>hr{margin-right:0;margin-left:0}.card>.list-group:first-child .list-group-item:first-child{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.card>.list-group:last-child .list-group-item:last-child{border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.card-body{flex:1 1 auto;padding:1.25rem}.card-title{margin-bottom:.75rem}.card-subtitle{margin-top:-.375rem;margin-bottom:0}.card-text:last-child{margin-bottom:0}.card-link:hover{text-decoration:none}.card-link+.card-link{margin-left:1.25rem}.card-header{padding:.75rem 1.25rem;margin-bottom:0;color:inherit;background-color:rgba(0,0,0,.03);border-bottom:1px solid rgba(0,0,0,.125)}.card-header:first-child{border-radius:calc(.25rem - 1px) calc(.25rem - 1px) 0 0}.card-header+.list-group .list-group-item:first-child{border-top:0}.card-footer{padding:.75rem 1.25rem;background-color:rgba(0,0,0,.03);border-top:1px solid rgba(0,0,0,.125)}.card-footer:last-child{border-radius:0 0 calc(.25rem - 1px) calc(.25rem - 1px)}.card-header-tabs{margin-right:-.625rem;margin-bottom:-.75rem;margin-left:-.625rem;border-bottom:0}.card-header-pills{margin-right:-.625rem;margin-left:-.625rem}.card-img-overlay{position:absolute;top:0;right:0;bottom:0;left:0;padding:1.25rem}.card-img{width:100%;border-radius:calc(.25rem - 1px)}.card-img-top{width:100%;border-top-left-radius:calc(.25rem - 1px);border-top-right-radius:calc(.25rem - 1px)}.card-img-bottom{width:100%;border-bottom-right-radius:calc(.25rem - 1px);border-bottom-left-radius:calc(.25rem - 1px)}.card-deck{display:flex;flex-direction:column}.card-deck .card{margin-bottom:15px}@media (min-width:576px){.card-deck{flex-flow:row wrap;margin-right:-15px;margin-left:-15px}.card-deck .card{display:flex;flex:1 0 0%;flex-direction:column;margin-right:15px;margin-bottom:0;margin-left:15px}}.card-group{display:flex;flex-direction:column}.card-group>.card{margin-bottom:15px}@media (min-width:576px){.card-group{flex-flow:row wrap}.card-group>.card{flex:1 0 0%;margin-bottom:0}.card-group>.card+.card{margin-left:0;border-left:0}.card-group>.card:first-child{border-top-right-radius:0;border-bottom-right-radius:0}.card-group>.card:first-child .card-header,.card-group>.card:first-child .card-img-top{border-top-right-radius:0}.card-group>.card:first-child .card-footer,.card-group>.card:first-child .card-img-bottom{border-bottom-right-radius:0}.card-group>.card:last-child{border-top-left-radius:0;border-bottom-left-radius:0}.card-group>.card:last-child .card-header,.card-group>.card:last-child .card-img-top{border-top-left-radius:0}.card-group>.card:last-child .card-footer,.card-group>.card:last-child .card-img-bottom{border-bottom-left-radius:0}.card-group>.card:only-child{border-radius:.25rem}.card-group>.card:only-child .card-header,.card-group>.card:only-child .card-img-top{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.card-group>.card:only-child .card-footer,.card-group>.card:only-child .card-img-bottom{border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.card-group>.card:not(:first-child):not(:last-child):not(:only-child),.card-group>.card:not(:first-child):not(:last-child):not(:only-child) .card-footer,.card-group>.card:not(:first-child):not(:last-child):not(:only-child) .card-header,.card-group>.card:not(:first-child):not(:last-child):not(:only-child) .card-img-bottom,.card-group>.card:not(:first-child):not(:last-child):not(:only-child) .card-img-top{border-radius:0}.card-columns{-webkit-column-count:3;column-count:3;-webkit-column-gap:1.25rem;column-gap:1.25rem;orphans:1;widows:1}.card-columns .card{display:inline-block;width:100%}}.card-columns .card{margin-bottom:.75rem}.accordion .card{overflow:hidden}.accordion .card:not(:first-of-type) .card-header:first-child{border-radius:0}.accordion .card:not(:first-of-type):not(:last-of-type){border-bottom:0;border-radius:0}.accordion .card:first-of-type{border-bottom:0;border-bottom-right-radius:0;border-bottom-left-radius:0}.accordion .card:last-of-type{border-top-left-radius:0;border-top-right-radius:0}.accordion .card .card-header{margin-bottom:-1px}.breadcrumb{display:flex;flex-wrap:wrap;padding:.75rem 1rem;margin-bottom:1rem;list-style:none;background-color:#e9ecef;border-radius:.25rem}.breadcrumb-item+.breadcrumb-item{padding-left:.5rem}.breadcrumb-item+.breadcrumb-item::before{display:inline-block;padding-right:.5rem;color:#6c757d;content:"/"}.breadcrumb-item+.breadcrumb-item:hover::before{text-decoration:none}.breadcrumb-item.active{color:#6c757d}.pagination{display:flex;padding-left:0;list-style:none;border-radius:.25rem}.page-link{position:relative;display:block;padding:.5rem .75rem;margin-left:-1px;line-height:1.25;color:#007bff;background-color:#fff;border:1px solid #dee2e6}.page-link:hover{z-index:2;color:#0056b3;text-decoration:none;background-color:#e9ecef;border-color:#dee2e6}.page-link:focus{z-index:2;outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.page-link:not(:disabled):not(.disabled){cursor:pointer}.page-item:first-child .page-link{margin-left:0;border-top-left-radius:.25rem;border-bottom-left-radius:.25rem}.page-item:last-child .page-link{border-top-right-radius:.25rem;border-bottom-right-radius:.25rem}.page-item.active .page-link{z-index:1;color:#fff;background-color:#007bff;border-color:#007bff}.page-item.disabled .page-link{color:#6c757d;pointer-events:none;cursor:auto;background-color:#fff;border-color:#dee2e6}.pagination-lg .page-link{padding:.75rem 1.5rem;font-size:1.25rem;line-height:1.5}.pagination-lg .page-item:first-child .page-link{border-top-left-radius:.3rem;border-bottom-left-radius:.3rem}.pagination-lg .page-item:last-child .page-link{border-top-right-radius:.3rem;border-bottom-right-radius:.3rem}.pagination-sm .page-link{padding:.25rem .5rem;font-size:.875rem;line-height:1.5}.pagination-sm .page-item:first-child .page-link{border-top-left-radius:.2rem;border-bottom-left-radius:.2rem}.pagination-sm .page-item:last-child .page-link{border-top-right-radius:.2rem;border-bottom-right-radius:.2rem}.badge{display:inline-block;padding:.25em .4em;font-size:75%;font-weight:700;line-height:1;text-align:center;white-space:nowrap;vertical-align:baseline;border-radius:.25rem}a.badge:focus,a.badge:hover{text-decoration:none}.badge:empty{display:none}.btn .badge{position:relative;top:-1px}.badge-pill{padding-right:.6em;padding-left:.6em;border-radius:10rem}.badge-primary{color:#fff;background-color:#007bff}a.badge-primary:focus,a.badge-primary:hover{color:#fff;background-color:#0062cc}.badge-secondary{color:#fff;background-color:#6c757d}a.badge-secondary:focus,a.badge-secondary:hover{color:#fff;background-color:#545b62}.badge-success{color:#fff;background-color:#28a745}a.badge-success:focus,a.badge-success:hover{color:#fff;background-color:#1e7e34}.badge-info{color:#fff;background-color:#17a2b8}a.badge-info:focus,a.badge-info:hover{color:#fff;background-color:#117a8b}.badge-warning{color:#212529;background-color:#ffc107}a.badge-warning:focus,a.badge-warning:hover{color:#212529;background-color:#d39e00}.badge-danger{color:#fff;background-color:#dc3545}a.badge-danger:focus,a.badge-danger:hover{color:#fff;background-color:#bd2130}.badge-light{color:#212529;background-color:#f8f9fa}a.badge-light:focus,a.badge-light:hover{color:#212529;background-color:#dae0e5}.badge-dark{color:#fff;background-color:#343a40}a.badge-dark:focus,a.badge-dark:hover{color:#fff;background-color:#1d2124}.jumbotron{padding:2rem 1rem;margin-bottom:2rem;background-color:#e9ecef;border-radius:.3rem}@media (min-width:576px){.jumbotron{padding:4rem 2rem}}.jumbotron-fluid{padding-right:0;padding-left:0;border-radius:0}.alert{position:relative;padding:.75rem 1.25rem;margin-bottom:1rem;border:1px solid transparent;border-radius:.25rem}.alert-heading{color:inherit}.alert-link{font-weight:700}.alert-dismissible{padding-right:4rem}.alert-dismissible .close{position:absolute;top:0;right:0;padding:.75rem 1.25rem;color:inherit}.alert-primary{color:#004085;background-color:#cce5ff;border-color:#b8daff}.alert-primary hr{border-top-color:#9fcdff}.alert-primary .alert-link{color:#002752}.alert-secondary{color:#383d41;background-color:#e2e3e5;border-color:#d6d8db}.alert-secondary hr{border-top-color:#c8cbcf}.alert-secondary .alert-link{color:#202326}.alert-success{color:#155724;background-color:#d4edda;border-color:#c3e6cb}.alert-success hr{border-top-color:#b1dfbb}.alert-success .alert-link{color:#0b2e13}.alert-info{color:#0c5460;background-color:#d1ecf1;border-color:#bee5eb}.alert-info hr{border-top-color:#abdde5}.alert-info .alert-link{color:#062c33}.alert-warning{color:#856404;background-color:#fff3cd;border-color:#ffeeba}.alert-warning hr{border-top-color:#ffe8a1}.alert-warning .alert-link{color:#533f03}.alert-danger{color:#721c24;background-color:#f8d7da;border-color:#f5c6cb}.alert-danger hr{border-top-color:#f1b0b7}.alert-danger .alert-link{color:#491217}.alert-light{color:#818182;background-color:#fefefe;border-color:#fdfdfe}.alert-light hr{border-top-color:#ececf6}.alert-light .alert-link{color:#686868}.alert-dark{color:#1b1e21;background-color:#d6d8d9;border-color:#c6c8ca}.alert-dark hr{border-top-color:#b9bbbe}.alert-dark .alert-link{color:#040505}@-webkit-keyframes progress-bar-stripes{from{background-position:1rem 0}to{background-position:0 0}}@keyframes progress-bar-stripes{from{background-position:1rem 0}to{background-position:0 0}}.progress{display:flex;height:1rem;overflow:hidden;font-size:.75rem;background-color:#e9ecef;border-radius:.25rem}.progress-bar{display:flex;flex-direction:column;justify-content:center;color:#fff;text-align:center;white-space:nowrap;background-color:#007bff;transition:width .6s}.progress-bar-striped{background-image:linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-size:1rem 1rem}.progress-bar-animated{-webkit-animation:1s linear infinite progress-bar-stripes;animation:1s linear infinite progress-bar-stripes}.media{display:flex;align-items:flex-start}.media-body{flex:1}.list-group{display:flex;flex-direction:column;padding-left:0;margin-bottom:0}.list-group-item-action{width:100%;color:#495057;text-align:inherit}.list-group-item-action:focus,.list-group-item-action:hover{color:#495057;text-decoration:none;background-color:#f8f9fa}.list-group-item-action:active{color:#212529;background-color:#e9ecef}.list-group-item{position:relative;display:block;padding:.75rem 1.25rem;margin-bottom:-1px;background-color:#fff;border:1px solid rgba(0,0,0,.125)}.list-group-item:first-child{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.list-group-item:last-child{margin-bottom:0;border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.list-group-item:focus,.list-group-item:hover{z-index:1;text-decoration:none}.list-group-item.disabled,.list-group-item:disabled{color:#6c757d;pointer-events:none;background-color:#fff}.list-group-item.active{z-index:2;color:#fff;background-color:#007bff;border-color:#007bff}.list-group-flush .list-group-item{border-right:0;border-left:0;border-radius:0}.list-group-flush .list-group-item:last-child{margin-bottom:-1px}.list-group-flush:first-child .list-group-item:first-child{border-top:0}.list-group-flush:last-child .list-group-item:last-child{margin-bottom:0;border-bottom:0}.list-group-item-primary{color:#004085;background-color:#b8daff}.list-group-item-primary.list-group-item-action:focus,.list-group-item-primary.list-group-item-action:hover{color:#004085;background-color:#9fcdff}.list-group-item-primary.list-group-item-action.active{color:#fff;background-color:#004085;border-color:#004085}.list-group-item-secondary{color:#383d41;background-color:#d6d8db}.list-group-item-secondary.list-group-item-action:focus,.list-group-item-secondary.list-group-item-action:hover{color:#383d41;background-color:#c8cbcf}.list-group-item-secondary.list-group-item-action.active{color:#fff;background-color:#383d41;border-color:#383d41}.list-group-item-success{color:#155724;background-color:#c3e6cb}.list-group-item-success.list-group-item-action:focus,.list-group-item-success.list-group-item-action:hover{color:#155724;background-color:#b1dfbb}.list-group-item-success.list-group-item-action.active{color:#fff;background-color:#155724;border-color:#155724}.list-group-item-info{color:#0c5460;background-color:#bee5eb}.list-group-item-info.list-group-item-action:focus,.list-group-item-info.list-group-item-action:hover{color:#0c5460;background-color:#abdde5}.list-group-item-info.list-group-item-action.active{color:#fff;background-color:#0c5460;border-color:#0c5460}.list-group-item-warning{color:#856404;background-color:#ffeeba}.list-group-item-warning.list-group-item-action:focus,.list-group-item-warning.list-group-item-action:hover{color:#856404;background-color:#ffe8a1}.list-group-item-warning.list-group-item-action.active{color:#fff;background-color:#856404;border-color:#856404}.list-group-item-danger{color:#721c24;background-color:#f5c6cb}.list-group-item-danger.list-group-item-action:focus,.list-group-item-danger.list-group-item-action:hover{color:#721c24;background-color:#f1b0b7}.list-group-item-danger.list-group-item-action.active{color:#fff;background-color:#721c24;border-color:#721c24}.list-group-item-light{color:#818182;background-color:#fdfdfe}.list-group-item-light.list-group-item-action:focus,.list-group-item-light.list-group-item-action:hover{color:#818182;background-color:#ececf6}.list-group-item-light.list-group-item-action.active{color:#fff;background-color:#818182;border-color:#818182}.list-group-item-dark{color:#1b1e21;background-color:#c6c8ca}.list-group-item-dark.list-group-item-action:focus,.list-group-item-dark.list-group-item-action:hover{color:#1b1e21;background-color:#b9bbbe}.list-group-item-dark.list-group-item-action.active{color:#fff;background-color:#1b1e21;border-color:#1b1e21}.close{float:right;font-size:1.5rem;font-weight:700;line-height:1;color:#000;text-shadow:0 1px 0 #fff;opacity:.5}.close:hover{color:#000;text-decoration:none}.close:not(:disabled):not(.disabled){cursor:pointer}.close:not(:disabled):not(.disabled):focus,.close:not(:disabled):not(.disabled):hover{opacity:.75}button.close{padding:0;background-color:transparent;border:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}a.close.disabled{pointer-events:none}.toast{max-width:350px;overflow:hidden;font-size:.875rem;background-color:rgba(255,255,255,.85);background-clip:padding-box;border:1px solid rgba(0,0,0,.1);border-radius:.25rem;box-shadow:0 .25rem .75rem rgba(0,0,0,.1);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);opacity:0}.toast:not(:last-child){margin-bottom:.75rem}.toast.showing{opacity:1}.toast.show{display:block;opacity:1}.toast.hide{display:none}.toast-header{display:flex;align-items:center;padding:.25rem .75rem;color:#6c757d;background-color:rgba(255,255,255,.85);background-clip:padding-box;border-bottom:1px solid rgba(0,0,0,.05)}.toast-body{padding:.75rem}.modal-open{overflow:hidden}.modal-open .modal{overflow-x:hidden;overflow-y:auto}.modal{position:fixed;top:0;left:0;z-index:1050;display:none;width:100%;height:100%;overflow:hidden;outline:0}.modal-dialog{position:relative;width:auto;margin:.5rem;pointer-events:none}.modal.fade .modal-dialog{transition:transform .3s ease-out;transition:transform .3s ease-out,-webkit-transform .3s ease-out;-webkit-transform:translate(0,-50px);transform:translate(0,-50px)}@media screen and (prefers-reduced-motion:reduce){.modal.fade .modal-dialog,.progress-bar{transition:none}}.modal.show .modal-dialog{-webkit-transform:none;transform:none}.modal-dialog-centered{display:flex;align-items:center;min-height:calc(100% - (.5rem * 2))}.modal-dialog-centered::before{display:block;height:calc(100vh - (.5rem * 2));content:""}.modal-content{position:relative;display:flex;flex-direction:column;width:100%;pointer-events:auto;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.2);border-radius:.3rem;outline:0}.modal-backdrop{position:fixed;top:0;left:0;z-index:1040;width:100vw;height:100vh;background-color:#000}.modal-backdrop.fade{opacity:0}.modal-backdrop.show{opacity:.5}.modal-header{display:flex;align-items:flex-start;justify-content:space-between;padding:1rem;border-bottom:1px solid #e9ecef;border-top-left-radius:.3rem;border-top-right-radius:.3rem}.modal-header .close{padding:1rem;margin:-1rem -1rem -1rem auto}.modal-title{margin-bottom:0;line-height:1.5}.modal-body{position:relative;flex:1 1 auto;padding:1rem}.modal-footer{display:flex;align-items:center;justify-content:flex-end;padding:1rem;border-top:1px solid #e9ecef;border-bottom-right-radius:.3rem;border-bottom-left-radius:.3rem}.modal-footer>:not(:first-child){margin-left:.25rem}.modal-footer>:not(:last-child){margin-right:.25rem}.modal-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}@media (min-width:576px){.modal-dialog{max-width:500px;margin:1.75rem auto}.modal-dialog-centered{min-height:calc(100% - (1.75rem * 2))}.modal-dialog-centered::before{height:calc(100vh - (1.75rem * 2))}.modal-sm{max-width:300px}}@media (min-width:992px){.modal-lg,.modal-xl{max-width:800px}}@media (min-width:1200px){.modal-xl{max-width:1140px}}.tooltip{position:absolute;z-index:1070;display:block;margin:0;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;white-space:normal;line-break:auto;font-size:.875rem;word-wrap:break-word;opacity:0}.tooltip.show{opacity:.9}.tooltip .arrow{position:absolute;display:block;width:.8rem;height:.4rem}.tooltip .arrow::before{position:absolute;content:"";border-color:transparent;border-style:solid}.bs-tooltip-auto[x-placement^=top],.bs-tooltip-top{padding:.4rem 0}.bs-tooltip-auto[x-placement^=top] .arrow,.bs-tooltip-top .arrow{bottom:0}.bs-tooltip-auto[x-placement^=top] .arrow::before,.bs-tooltip-top .arrow::before{top:0;border-width:.4rem .4rem 0;border-top-color:#000}.bs-tooltip-auto[x-placement^=right],.bs-tooltip-right{padding:0 .4rem}.bs-tooltip-auto[x-placement^=right] .arrow,.bs-tooltip-right .arrow{left:0;width:.4rem;height:.8rem}.bs-tooltip-auto[x-placement^=right] .arrow::before,.bs-tooltip-right .arrow::before{right:0;border-width:.4rem .4rem .4rem 0;border-right-color:#000}.bs-tooltip-auto[x-placement^=bottom],.bs-tooltip-bottom{padding:.4rem 0}.bs-tooltip-auto[x-placement^=bottom] .arrow,.bs-tooltip-bottom .arrow{top:0}.bs-tooltip-auto[x-placement^=bottom] .arrow::before,.bs-tooltip-bottom .arrow::before{bottom:0;border-width:0 .4rem .4rem;border-bottom-color:#000}.bs-tooltip-auto[x-placement^=left],.bs-tooltip-left{padding:0 .4rem}.bs-tooltip-auto[x-placement^=left] .arrow,.bs-tooltip-left .arrow{right:0;width:.4rem;height:.8rem}.bs-tooltip-auto[x-placement^=left] .arrow::before,.bs-tooltip-left .arrow::before{left:0;border-width:.4rem 0 .4rem .4rem;border-left-color:#000}.tooltip-inner{max-width:200px;padding:.25rem .5rem;color:#fff;text-align:center;background-color:#000;border-radius:.25rem}.popover{position:absolute;top:0;left:0;z-index:1060;display:block;max-width:276px;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;white-space:normal;line-break:auto;font-size:.875rem;word-wrap:break-word;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.2);border-radius:.3rem}.popover .arrow{position:absolute;display:block;width:1rem;height:.5rem;margin:0 .3rem}.popover .arrow::after,.popover .arrow::before{position:absolute;display:block;content:"";border-color:transparent;border-style:solid}.bs-popover-auto[x-placement^=top],.bs-popover-top{margin-bottom:.5rem}.bs-popover-auto[x-placement^=top] .arrow,.bs-popover-top .arrow{bottom:calc((.5rem + 1px) * -1)}.bs-popover-auto[x-placement^=top] .arrow::after,.bs-popover-auto[x-placement^=top] .arrow::before,.bs-popover-top .arrow::after,.bs-popover-top .arrow::before{border-width:.5rem .5rem 0}.bs-popover-auto[x-placement^=top] .arrow::before,.bs-popover-top .arrow::before{bottom:0;border-top-color:rgba(0,0,0,.25)}.bs-popover-auto[x-placement^=top] .arrow::after,.bs-popover-top .arrow::after{bottom:1px;border-top-color:#fff}.bs-popover-auto[x-placement^=right],.bs-popover-right{margin-left:.5rem}.bs-popover-auto[x-placement^=right] .arrow,.bs-popover-right .arrow{left:calc((.5rem + 1px) * -1);width:.5rem;height:1rem;margin:.3rem 0}.bs-popover-auto[x-placement^=right] .arrow::after,.bs-popover-auto[x-placement^=right] .arrow::before,.bs-popover-right .arrow::after,.bs-popover-right .arrow::before{border-width:.5rem .5rem .5rem 0}.bs-popover-auto[x-placement^=right] .arrow::before,.bs-popover-right .arrow::before{left:0;border-right-color:rgba(0,0,0,.25)}.bs-popover-auto[x-placement^=right] .arrow::after,.bs-popover-right .arrow::after{left:1px;border-right-color:#fff}.bs-popover-auto[x-placement^=bottom],.bs-popover-bottom{margin-top:.5rem}.bs-popover-auto[x-placement^=bottom] .arrow,.bs-popover-bottom .arrow{top:calc((.5rem + 1px) * -1)}.bs-popover-auto[x-placement^=bottom] .arrow::after,.bs-popover-auto[x-placement^=bottom] .arrow::before,.bs-popover-bottom .arrow::after,.bs-popover-bottom .arrow::before{border-width:0 .5rem .5rem}.bs-popover-auto[x-placement^=bottom] .arrow::before,.bs-popover-bottom .arrow::before{top:0;border-bottom-color:rgba(0,0,0,.25)}.bs-popover-auto[x-placement^=bottom] .arrow::after,.bs-popover-bottom .arrow::after{top:1px;border-bottom-color:#fff}.bs-popover-auto[x-placement^=bottom] .popover-header::before,.bs-popover-bottom .popover-header::before{position:absolute;top:0;left:50%;display:block;width:1rem;margin-left:-.5rem;content:"";border-bottom:1px solid #f7f7f7}.bs-popover-auto[x-placement^=left],.bs-popover-left{margin-right:.5rem}.bs-popover-auto[x-placement^=left] .arrow,.bs-popover-left .arrow{right:calc((.5rem + 1px) * -1);width:.5rem;height:1rem;margin:.3rem 0}.bs-popover-auto[x-placement^=left] .arrow::after,.bs-popover-auto[x-placement^=left] .arrow::before,.bs-popover-left .arrow::after,.bs-popover-left .arrow::before{border-width:.5rem 0 .5rem .5rem}.bs-popover-auto[x-placement^=left] .arrow::before,.bs-popover-left .arrow::before{right:0;border-left-color:rgba(0,0,0,.25)}.bs-popover-auto[x-placement^=left] .arrow::after,.bs-popover-left .arrow::after{right:1px;border-left-color:#fff}.popover-header{padding:.5rem .75rem;margin-bottom:0;font-size:1rem;color:inherit;background-color:#f7f7f7;border-bottom:1px solid #ebebeb;border-top-left-radius:calc(.3rem - 1px);border-top-right-radius:calc(.3rem - 1px)}.popover-header:empty{display:none}.popover-body{padding:.5rem .75rem;color:#212529}.carousel{position:relative}.carousel.pointer-event{touch-action:pan-y}.carousel-inner{position:relative;width:100%;overflow:hidden}.carousel-inner::after{display:block;clear:both;content:""}.carousel-item{position:relative;display:none;float:left;width:100%;margin-right:-100%;-webkit-backface-visibility:hidden;backface-visibility:hidden;transition:transform .6s ease-in-out;transition:transform .6s ease-in-out,-webkit-transform .6s ease-in-out}.carousel-item-next,.carousel-item-prev,.carousel-item.active{display:block}.active.carousel-item-right,.carousel-item-next:not(.carousel-item-left){-webkit-transform:translateX(100%);transform:translateX(100%)}.active.carousel-item-left,.carousel-item-prev:not(.carousel-item-right){-webkit-transform:translateX(-100%);transform:translateX(-100%)}.carousel-fade .carousel-item{opacity:0;transition-property:opacity;-webkit-transform:none;transform:none}.carousel-fade .carousel-item-next.carousel-item-left,.carousel-fade .carousel-item-prev.carousel-item-right,.carousel-fade .carousel-item.active{z-index:1;opacity:1}.carousel-fade .active.carousel-item-left,.carousel-fade .active.carousel-item-right{z-index:0;opacity:0;transition:opacity .6s}@media screen and (prefers-reduced-motion:reduce){.carousel-fade .active.carousel-item-left,.carousel-fade .active.carousel-item-right,.carousel-item{transition:none}}.carousel-control-next,.carousel-control-prev{position:absolute;top:0;bottom:0;z-index:1;display:flex;align-items:center;justify-content:center;width:15%;color:#fff;text-align:center;opacity:.5;transition:opacity .15s}.carousel-control-next:focus,.carousel-control-next:hover,.carousel-control-prev:focus,.carousel-control-prev:hover{color:#fff;text-decoration:none;outline:0;opacity:.9}.carousel-control-prev{left:0}.carousel-control-next{right:0}.carousel-control-next-icon,.carousel-control-prev-icon{display:inline-block;width:20px;height:20px;background:center center/100% 100% no-repeat}.carousel-control-prev-icon{background-image:url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'%23fff\' viewBox=\'0 0 8 8\'%3e%3cpath d=\'M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z\'/%3e%3c/svg%3e")}.carousel-control-next-icon{background-image:url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'%23fff\' viewBox=\'0 0 8 8\'%3e%3cpath d=\'M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z\'/%3e%3c/svg%3e")}.carousel-indicators{position:absolute;right:0;bottom:0;left:0;z-index:15;display:flex;justify-content:center;padding-left:0;margin-right:15%;margin-left:15%;list-style:none}.carousel-indicators li{box-sizing:content-box;flex:0 1 auto;width:30px;height:3px;margin-right:3px;margin-left:3px;text-indent:-999px;cursor:pointer;background-color:#fff;background-clip:padding-box;border-top:10px solid transparent;border-bottom:10px solid transparent;opacity:.5;transition:opacity .6s}@media screen and (prefers-reduced-motion:reduce){.carousel-control-next,.carousel-control-prev,.carousel-indicators li{transition:none}}.carousel-indicators .active{opacity:1}.carousel-caption{position:absolute;right:15%;bottom:20px;left:15%;z-index:10;padding-top:20px;padding-bottom:20px;color:#fff;text-align:center}@-webkit-keyframes spinner-border{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner-border{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.spinner-border{display:inline-block;width:2rem;height:2rem;vertical-align:text-bottom;border:.25em solid currentColor;border-right-color:transparent;border-radius:50%;-webkit-animation:.75s linear infinite spinner-border;animation:.75s linear infinite spinner-border}.spinner-border-sm{width:1rem;height:1rem;border-width:.2em}@-webkit-keyframes spinner-grow{0%{-webkit-transform:scale(0);transform:scale(0)}50%{opacity:1}}@keyframes spinner-grow{0%{-webkit-transform:scale(0);transform:scale(0)}50%{opacity:1}}.spinner-grow{display:inline-block;width:2rem;height:2rem;vertical-align:text-bottom;background-color:currentColor;border-radius:50%;opacity:0;-webkit-animation:.75s linear infinite spinner-grow;animation:.75s linear infinite spinner-grow}.spinner-grow-sm{width:1rem;height:1rem}.align-baseline{vertical-align:baseline!important}.align-top{vertical-align:top!important}.align-middle{vertical-align:middle!important}.align-bottom{vertical-align:bottom!important}.align-text-bottom{vertical-align:text-bottom!important}.align-text-top{vertical-align:text-top!important}.bg-primary{background-color:#007bff!important}a.bg-primary:focus,a.bg-primary:hover,button.bg-primary:focus,button.bg-primary:hover{background-color:#0062cc!important}.bg-secondary{background-color:#6c757d!important}a.bg-secondary:focus,a.bg-secondary:hover,button.bg-secondary:focus,button.bg-secondary:hover{background-color:#545b62!important}.bg-success{background-color:#28a745!important}a.bg-success:focus,a.bg-success:hover,button.bg-success:focus,button.bg-success:hover{background-color:#1e7e34!important}.bg-info{background-color:#17a2b8!important}a.bg-info:focus,a.bg-info:hover,button.bg-info:focus,button.bg-info:hover{background-color:#117a8b!important}.bg-warning{background-color:#ffc107!important}a.bg-warning:focus,a.bg-warning:hover,button.bg-warning:focus,button.bg-warning:hover{background-color:#d39e00!important}.bg-danger{background-color:#dc3545!important}a.bg-danger:focus,a.bg-danger:hover,button.bg-danger:focus,button.bg-danger:hover{background-color:#bd2130!important}.bg-light{background-color:#f8f9fa!important}a.bg-light:focus,a.bg-light:hover,button.bg-light:focus,button.bg-light:hover{background-color:#dae0e5!important}.bg-dark{background-color:#343a40!important}a.bg-dark:focus,a.bg-dark:hover,button.bg-dark:focus,button.bg-dark:hover{background-color:#1d2124!important}.bg-white{background-color:#fff!important}.bg-transparent{background-color:transparent!important}.border{border:1px solid #dee2e6!important}.border-top{border-top:1px solid #dee2e6!important}.border-right{border-right:1px solid #dee2e6!important}.border-bottom{border-bottom:1px solid #dee2e6!important}.border-left{border-left:1px solid #dee2e6!important}.border-0{border:0!important}.border-top-0{border-top:0!important}.border-right-0{border-right:0!important}.border-bottom-0{border-bottom:0!important}.border-left-0{border-left:0!important}.border-primary{border-color:#007bff!important}.border-secondary{border-color:#6c757d!important}.border-success{border-color:#28a745!important}.border-info{border-color:#17a2b8!important}.border-warning{border-color:#ffc107!important}.border-danger{border-color:#dc3545!important}.border-light{border-color:#f8f9fa!important}.border-dark{border-color:#343a40!important}.border-white{border-color:#fff!important}.rounded{border-radius:.25rem!important}.rounded-top{border-top-left-radius:.25rem!important;border-top-right-radius:.25rem!important}.rounded-right{border-top-right-radius:.25rem!important;border-bottom-right-radius:.25rem!important}.rounded-bottom{border-bottom-right-radius:.25rem!important;border-bottom-left-radius:.25rem!important}.rounded-left{border-top-left-radius:.25rem!important;border-bottom-left-radius:.25rem!important}.rounded-circle{border-radius:50%!important}.rounded-pill{border-radius:50rem!important}.rounded-0{border-radius:0!important}.clearfix::after{display:block;clear:both;content:""}.d-none{display:none!important}.d-inline{display:inline!important}.d-inline-block{display:inline-block!important}.d-block{display:block!important}.d-table{display:table!important}.d-table-row{display:table-row!important}.d-table-cell{display:table-cell!important}.d-flex{display:flex!important}.d-inline-flex{display:inline-flex!important}@media (min-width:576px){.d-sm-none{display:none!important}.d-sm-inline{display:inline!important}.d-sm-inline-block{display:inline-block!important}.d-sm-block{display:block!important}.d-sm-table{display:table!important}.d-sm-table-row{display:table-row!important}.d-sm-table-cell{display:table-cell!important}.d-sm-flex{display:flex!important}.d-sm-inline-flex{display:inline-flex!important}}@media (min-width:768px){.d-md-none{display:none!important}.d-md-inline{display:inline!important}.d-md-inline-block{display:inline-block!important}.d-md-block{display:block!important}.d-md-table{display:table!important}.d-md-table-row{display:table-row!important}.d-md-table-cell{display:table-cell!important}.d-md-flex{display:flex!important}.d-md-inline-flex{display:inline-flex!important}}@media (min-width:992px){.d-lg-none{display:none!important}.d-lg-inline{display:inline!important}.d-lg-inline-block{display:inline-block!important}.d-lg-block{display:block!important}.d-lg-table{display:table!important}.d-lg-table-row{display:table-row!important}.d-lg-table-cell{display:table-cell!important}.d-lg-flex{display:flex!important}.d-lg-inline-flex{display:inline-flex!important}}@media (min-width:1200px){.d-xl-none{display:none!important}.d-xl-inline{display:inline!important}.d-xl-inline-block{display:inline-block!important}.d-xl-block{display:block!important}.d-xl-table{display:table!important}.d-xl-table-row{display:table-row!important}.d-xl-table-cell{display:table-cell!important}.d-xl-flex{display:flex!important}.d-xl-inline-flex{display:inline-flex!important}}@media print{.d-print-none{display:none!important}.d-print-inline{display:inline!important}.d-print-inline-block{display:inline-block!important}.d-print-block{display:block!important}.d-print-table{display:table!important}.d-print-table-row{display:table-row!important}.d-print-table-cell{display:table-cell!important}.d-print-flex{display:flex!important}.d-print-inline-flex{display:inline-flex!important}}.embed-responsive{position:relative;display:block;width:100%;padding:0;overflow:hidden}.embed-responsive::before{display:block;content:""}.embed-responsive .embed-responsive-item,.embed-responsive embed,.embed-responsive iframe,.embed-responsive object,.embed-responsive video{position:absolute;top:0;bottom:0;left:0;width:100%;height:100%;border:0}.embed-responsive-21by9::before{padding-top:42.85714%}.embed-responsive-16by9::before{padding-top:56.25%}.embed-responsive-3by4::before{padding-top:133.33333%}.embed-responsive-1by1::before{padding-top:100%}.flex-row{flex-direction:row!important}.flex-column{flex-direction:column!important}.flex-row-reverse{flex-direction:row-reverse!important}.flex-column-reverse{flex-direction:column-reverse!important}.flex-wrap{flex-wrap:wrap!important}.flex-nowrap{flex-wrap:nowrap!important}.flex-wrap-reverse{flex-wrap:wrap-reverse!important}.flex-fill{flex:1 1 auto!important}.flex-grow-0{flex-grow:0!important}.flex-grow-1{flex-grow:1!important}.flex-shrink-0{flex-shrink:0!important}.flex-shrink-1{flex-shrink:1!important}.justify-content-start{justify-content:flex-start!important}.justify-content-end{justify-content:flex-end!important}.justify-content-center{justify-content:center!important}.justify-content-between{justify-content:space-between!important}.justify-content-around{justify-content:space-around!important}.align-items-start{align-items:flex-start!important}.align-items-end{align-items:flex-end!important}.align-items-center{align-items:center!important}.align-items-baseline{align-items:baseline!important}.align-items-stretch{align-items:stretch!important}.align-content-start{align-content:flex-start!important}.align-content-end{align-content:flex-end!important}.align-content-center{align-content:center!important}.align-content-between{align-content:space-between!important}.align-content-around{align-content:space-around!important}.align-content-stretch{align-content:stretch!important}.align-self-auto{-ms-grid-row-align:auto!important;align-self:auto!important}.align-self-start{align-self:flex-start!important}.align-self-end{align-self:flex-end!important}.align-self-center{-ms-grid-row-align:center!important;align-self:center!important}.align-self-baseline{align-self:baseline!important}.align-self-stretch{-ms-grid-row-align:stretch!important;align-self:stretch!important}.float-left{float:left!important}.float-right{float:right!important}.float-none{float:none!important}.overflow-auto{overflow:auto!important}.overflow-hidden{overflow:hidden!important}.position-static{position:static!important}.position-relative{position:relative!important}.position-absolute{position:absolute!important}.position-fixed{position:fixed!important}.position-sticky{position:-webkit-sticky!important;position:sticky!important}.fixed-top{position:fixed;top:0;right:0;left:0;z-index:1030}.fixed-bottom{position:fixed;right:0;bottom:0;left:0;z-index:1030}@supports ((position:-webkit-sticky) or (position:sticky)){.sticky-top{position:-webkit-sticky;position:sticky;top:0;z-index:1020}}.sr-only{clip:rect(0,0,0,0);white-space:nowrap}.shadow-sm{box-shadow:0 .125rem .25rem rgba(0,0,0,.075)!important}.shadow{box-shadow:0 .5rem 1rem rgba(0,0,0,.15)!important}.shadow-lg{box-shadow:0 1rem 3rem rgba(0,0,0,.175)!important}.shadow-none{box-shadow:none!important}.w-25{width:25%!important}.w-50{width:50%!important}.w-75{width:75%!important}.w-100{width:100%!important}.w-auto{width:auto!important}.h-25{height:25%!important}.h-50{height:50%!important}.h-75{height:75%!important}.h-100{height:100%!important}.h-auto{height:auto!important}.mw-100{max-width:100%!important}.mh-100{max-height:100%!important}.min-vw-100{min-width:100vw!important}.min-vh-100{min-height:100vh!important}.vw-100{width:100vw!important}.vh-100{height:100vh!important}.m-0{margin:0!important}.mt-0,.my-0{margin-top:0!important}.mr-0,.mx-0{margin-right:0!important}.mb-0,.my-0{margin-bottom:0!important}.ml-0,.mx-0{margin-left:0!important}.m-1{margin:.25rem!important}.mt-1,.my-1{margin-top:.25rem!important}.mr-1,.mx-1{margin-right:.25rem!important}.mb-1,.my-1{margin-bottom:.25rem!important}.ml-1,.mx-1{margin-left:.25rem!important}.m-2{margin:.5rem!important}.mt-2,.my-2{margin-top:.5rem!important}.mr-2,.mx-2{margin-right:.5rem!important}.mb-2,.my-2{margin-bottom:.5rem!important}.ml-2,.mx-2{margin-left:.5rem!important}.m-3{margin:1rem!important}.mt-3,.my-3{margin-top:1rem!important}.mr-3,.mx-3{margin-right:1rem!important}.mb-3,.my-3{margin-bottom:1rem!important}.ml-3,.mx-3{margin-left:1rem!important}.m-4{margin:1.5rem!important}.mt-4,.my-4{margin-top:1.5rem!important}.mr-4,.mx-4{margin-right:1.5rem!important}.mb-4,.my-4{margin-bottom:1.5rem!important}.ml-4,.mx-4{margin-left:1.5rem!important}.m-5{margin:3rem!important}.mt-5,.my-5{margin-top:3rem!important}.mr-5,.mx-5{margin-right:3rem!important}.mb-5,.my-5{margin-bottom:3rem!important}.ml-5,.mx-5{margin-left:3rem!important}.p-0{padding:0!important}.pt-0,.py-0{padding-top:0!important}.pr-0,.px-0{padding-right:0!important}.pb-0,.py-0{padding-bottom:0!important}.pl-0,.px-0{padding-left:0!important}.p-1{padding:.25rem!important}.pt-1,.py-1{padding-top:.25rem!important}.pr-1,.px-1{padding-right:.25rem!important}.pb-1,.py-1{padding-bottom:.25rem!important}.pl-1,.px-1{padding-left:.25rem!important}.p-2{padding:.5rem!important}.pt-2,.py-2{padding-top:.5rem!important}.pr-2,.px-2{padding-right:.5rem!important}.pb-2,.py-2{padding-bottom:.5rem!important}.pl-2,.px-2{padding-left:.5rem!important}.p-3{padding:1rem!important}.pt-3,.py-3{padding-top:1rem!important}.pr-3,.px-3{padding-right:1rem!important}.pb-3,.py-3{padding-bottom:1rem!important}.pl-3,.px-3{padding-left:1rem!important}.p-4{padding:1.5rem!important}.pt-4,.py-4{padding-top:1.5rem!important}.pr-4,.px-4{padding-right:1.5rem!important}.pb-4,.py-4{padding-bottom:1.5rem!important}.pl-4,.px-4{padding-left:1.5rem!important}.p-5{padding:3rem!important}.pt-5,.py-5{padding-top:3rem!important}.pr-5,.px-5{padding-right:3rem!important}.pb-5,.py-5{padding-bottom:3rem!important}.pl-5,.px-5{padding-left:3rem!important}.m-n1{margin:-.25rem!important}.mt-n1,.my-n1{margin-top:-.25rem!important}.mr-n1,.mx-n1{margin-right:-.25rem!important}.mb-n1,.my-n1{margin-bottom:-.25rem!important}.ml-n1,.mx-n1{margin-left:-.25rem!important}.m-n2{margin:-.5rem!important}.mt-n2,.my-n2{margin-top:-.5rem!important}.mr-n2,.mx-n2{margin-right:-.5rem!important}.mb-n2,.my-n2{margin-bottom:-.5rem!important}.ml-n2,.mx-n2{margin-left:-.5rem!important}.m-n3{margin:-1rem!important}.mt-n3,.my-n3{margin-top:-1rem!important}.mr-n3,.mx-n3{margin-right:-1rem!important}.mb-n3,.my-n3{margin-bottom:-1rem!important}.ml-n3,.mx-n3{margin-left:-1rem!important}.m-n4{margin:-1.5rem!important}.mt-n4,.my-n4{margin-top:-1.5rem!important}.mr-n4,.mx-n4{margin-right:-1.5rem!important}.mb-n4,.my-n4{margin-bottom:-1.5rem!important}.ml-n4,.mx-n4{margin-left:-1.5rem!important}.m-n5{margin:-3rem!important}.mt-n5,.my-n5{margin-top:-3rem!important}.mr-n5,.mx-n5{margin-right:-3rem!important}.mb-n5,.my-n5{margin-bottom:-3rem!important}.ml-n5,.mx-n5{margin-left:-3rem!important}.m-auto{margin:auto!important}.mt-auto,.my-auto{margin-top:auto!important}.mr-auto,.mx-auto{margin-right:auto!important}.mb-auto,.my-auto{margin-bottom:auto!important}.ml-auto,.mx-auto{margin-left:auto!important}.text-monospace{font-family:SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace}.text-justify{text-align:justify!important}.text-wrap{white-space:normal!important}.text-nowrap{white-space:nowrap!important}.text-truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.text-left{text-align:left!important}.text-right{text-align:right!important}.text-center{text-align:center!important}@media (min-width:576px){.flex-sm-row{flex-direction:row!important}.flex-sm-column{flex-direction:column!important}.flex-sm-row-reverse{flex-direction:row-reverse!important}.flex-sm-column-reverse{flex-direction:column-reverse!important}.flex-sm-wrap{flex-wrap:wrap!important}.flex-sm-nowrap{flex-wrap:nowrap!important}.flex-sm-wrap-reverse{flex-wrap:wrap-reverse!important}.flex-sm-fill{flex:1 1 auto!important}.flex-sm-grow-0{flex-grow:0!important}.flex-sm-grow-1{flex-grow:1!important}.flex-sm-shrink-0{flex-shrink:0!important}.flex-sm-shrink-1{flex-shrink:1!important}.justify-content-sm-start{justify-content:flex-start!important}.justify-content-sm-end{justify-content:flex-end!important}.justify-content-sm-center{justify-content:center!important}.justify-content-sm-between{justify-content:space-between!important}.justify-content-sm-around{justify-content:space-around!important}.align-items-sm-start{align-items:flex-start!important}.align-items-sm-end{align-items:flex-end!important}.align-items-sm-center{align-items:center!important}.align-items-sm-baseline{align-items:baseline!important}.align-items-sm-stretch{align-items:stretch!important}.align-content-sm-start{align-content:flex-start!important}.align-content-sm-end{align-content:flex-end!important}.align-content-sm-center{align-content:center!important}.align-content-sm-between{align-content:space-between!important}.align-content-sm-around{align-content:space-around!important}.align-content-sm-stretch{align-content:stretch!important}.align-self-sm-auto{-ms-grid-row-align:auto!important;align-self:auto!important}.align-self-sm-start{align-self:flex-start!important}.align-self-sm-end{align-self:flex-end!important}.align-self-sm-center{-ms-grid-row-align:center!important;align-self:center!important}.align-self-sm-baseline{align-self:baseline!important}.align-self-sm-stretch{-ms-grid-row-align:stretch!important;align-self:stretch!important}.float-sm-left{float:left!important}.float-sm-right{float:right!important}.float-sm-none{float:none!important}.m-sm-0{margin:0!important}.mt-sm-0,.my-sm-0{margin-top:0!important}.mr-sm-0,.mx-sm-0{margin-right:0!important}.mb-sm-0,.my-sm-0{margin-bottom:0!important}.ml-sm-0,.mx-sm-0{margin-left:0!important}.m-sm-1{margin:.25rem!important}.mt-sm-1,.my-sm-1{margin-top:.25rem!important}.mr-sm-1,.mx-sm-1{margin-right:.25rem!important}.mb-sm-1,.my-sm-1{margin-bottom:.25rem!important}.ml-sm-1,.mx-sm-1{margin-left:.25rem!important}.m-sm-2{margin:.5rem!important}.mt-sm-2,.my-sm-2{margin-top:.5rem!important}.mr-sm-2,.mx-sm-2{margin-right:.5rem!important}.mb-sm-2,.my-sm-2{margin-bottom:.5rem!important}.ml-sm-2,.mx-sm-2{margin-left:.5rem!important}.m-sm-3{margin:1rem!important}.mt-sm-3,.my-sm-3{margin-top:1rem!important}.mr-sm-3,.mx-sm-3{margin-right:1rem!important}.mb-sm-3,.my-sm-3{margin-bottom:1rem!important}.ml-sm-3,.mx-sm-3{margin-left:1rem!important}.m-sm-4{margin:1.5rem!important}.mt-sm-4,.my-sm-4{margin-top:1.5rem!important}.mr-sm-4,.mx-sm-4{margin-right:1.5rem!important}.mb-sm-4,.my-sm-4{margin-bottom:1.5rem!important}.ml-sm-4,.mx-sm-4{margin-left:1.5rem!important}.m-sm-5{margin:3rem!important}.mt-sm-5,.my-sm-5{margin-top:3rem!important}.mr-sm-5,.mx-sm-5{margin-right:3rem!important}.mb-sm-5,.my-sm-5{margin-bottom:3rem!important}.ml-sm-5,.mx-sm-5{margin-left:3rem!important}.p-sm-0{padding:0!important}.pt-sm-0,.py-sm-0{padding-top:0!important}.pr-sm-0,.px-sm-0{padding-right:0!important}.pb-sm-0,.py-sm-0{padding-bottom:0!important}.pl-sm-0,.px-sm-0{padding-left:0!important}.p-sm-1{padding:.25rem!important}.pt-sm-1,.py-sm-1{padding-top:.25rem!important}.pr-sm-1,.px-sm-1{padding-right:.25rem!important}.pb-sm-1,.py-sm-1{padding-bottom:.25rem!important}.pl-sm-1,.px-sm-1{padding-left:.25rem!important}.p-sm-2{padding:.5rem!important}.pt-sm-2,.py-sm-2{padding-top:.5rem!important}.pr-sm-2,.px-sm-2{padding-right:.5rem!important}.pb-sm-2,.py-sm-2{padding-bottom:.5rem!important}.pl-sm-2,.px-sm-2{padding-left:.5rem!important}.p-sm-3{padding:1rem!important}.pt-sm-3,.py-sm-3{padding-top:1rem!important}.pr-sm-3,.px-sm-3{padding-right:1rem!important}.pb-sm-3,.py-sm-3{padding-bottom:1rem!important}.pl-sm-3,.px-sm-3{padding-left:1rem!important}.p-sm-4{padding:1.5rem!important}.pt-sm-4,.py-sm-4{padding-top:1.5rem!important}.pr-sm-4,.px-sm-4{padding-right:1.5rem!important}.pb-sm-4,.py-sm-4{padding-bottom:1.5rem!important}.pl-sm-4,.px-sm-4{padding-left:1.5rem!important}.p-sm-5{padding:3rem!important}.pt-sm-5,.py-sm-5{padding-top:3rem!important}.pr-sm-5,.px-sm-5{padding-right:3rem!important}.pb-sm-5,.py-sm-5{padding-bottom:3rem!important}.pl-sm-5,.px-sm-5{padding-left:3rem!important}.m-sm-n1{margin:-.25rem!important}.mt-sm-n1,.my-sm-n1{margin-top:-.25rem!important}.mr-sm-n1,.mx-sm-n1{margin-right:-.25rem!important}.mb-sm-n1,.my-sm-n1{margin-bottom:-.25rem!important}.ml-sm-n1,.mx-sm-n1{margin-left:-.25rem!important}.m-sm-n2{margin:-.5rem!important}.mt-sm-n2,.my-sm-n2{margin-top:-.5rem!important}.mr-sm-n2,.mx-sm-n2{margin-right:-.5rem!important}.mb-sm-n2,.my-sm-n2{margin-bottom:-.5rem!important}.ml-sm-n2,.mx-sm-n2{margin-left:-.5rem!important}.m-sm-n3{margin:-1rem!important}.mt-sm-n3,.my-sm-n3{margin-top:-1rem!important}.mr-sm-n3,.mx-sm-n3{margin-right:-1rem!important}.mb-sm-n3,.my-sm-n3{margin-bottom:-1rem!important}.ml-sm-n3,.mx-sm-n3{margin-left:-1rem!important}.m-sm-n4{margin:-1.5rem!important}.mt-sm-n4,.my-sm-n4{margin-top:-1.5rem!important}.mr-sm-n4,.mx-sm-n4{margin-right:-1.5rem!important}.mb-sm-n4,.my-sm-n4{margin-bottom:-1.5rem!important}.ml-sm-n4,.mx-sm-n4{margin-left:-1.5rem!important}.m-sm-n5{margin:-3rem!important}.mt-sm-n5,.my-sm-n5{margin-top:-3rem!important}.mr-sm-n5,.mx-sm-n5{margin-right:-3rem!important}.mb-sm-n5,.my-sm-n5{margin-bottom:-3rem!important}.ml-sm-n5,.mx-sm-n5{margin-left:-3rem!important}.m-sm-auto{margin:auto!important}.mt-sm-auto,.my-sm-auto{margin-top:auto!important}.mr-sm-auto,.mx-sm-auto{margin-right:auto!important}.mb-sm-auto,.my-sm-auto{margin-bottom:auto!important}.ml-sm-auto,.mx-sm-auto{margin-left:auto!important}.text-sm-left{text-align:left!important}.text-sm-right{text-align:right!important}.text-sm-center{text-align:center!important}}@media (min-width:768px){.flex-md-row{flex-direction:row!important}.flex-md-column{flex-direction:column!important}.flex-md-row-reverse{flex-direction:row-reverse!important}.flex-md-column-reverse{flex-direction:column-reverse!important}.flex-md-wrap{flex-wrap:wrap!important}.flex-md-nowrap{flex-wrap:nowrap!important}.flex-md-wrap-reverse{flex-wrap:wrap-reverse!important}.flex-md-fill{flex:1 1 auto!important}.flex-md-grow-0{flex-grow:0!important}.flex-md-grow-1{flex-grow:1!important}.flex-md-shrink-0{flex-shrink:0!important}.flex-md-shrink-1{flex-shrink:1!important}.justify-content-md-start{justify-content:flex-start!important}.justify-content-md-end{justify-content:flex-end!important}.justify-content-md-center{justify-content:center!important}.justify-content-md-between{justify-content:space-between!important}.justify-content-md-around{justify-content:space-around!important}.align-items-md-start{align-items:flex-start!important}.align-items-md-end{align-items:flex-end!important}.align-items-md-center{align-items:center!important}.align-items-md-baseline{align-items:baseline!important}.align-items-md-stretch{align-items:stretch!important}.align-content-md-start{align-content:flex-start!important}.align-content-md-end{align-content:flex-end!important}.align-content-md-center{align-content:center!important}.align-content-md-between{align-content:space-between!important}.align-content-md-around{align-content:space-around!important}.align-content-md-stretch{align-content:stretch!important}.align-self-md-auto{-ms-grid-row-align:auto!important;align-self:auto!important}.align-self-md-start{align-self:flex-start!important}.align-self-md-end{align-self:flex-end!important}.align-self-md-center{-ms-grid-row-align:center!important;align-self:center!important}.align-self-md-baseline{align-self:baseline!important}.align-self-md-stretch{-ms-grid-row-align:stretch!important;align-self:stretch!important}.float-md-left{float:left!important}.float-md-right{float:right!important}.float-md-none{float:none!important}.m-md-0{margin:0!important}.mt-md-0,.my-md-0{margin-top:0!important}.mr-md-0,.mx-md-0{margin-right:0!important}.mb-md-0,.my-md-0{margin-bottom:0!important}.ml-md-0,.mx-md-0{margin-left:0!important}.m-md-1{margin:.25rem!important}.mt-md-1,.my-md-1{margin-top:.25rem!important}.mr-md-1,.mx-md-1{margin-right:.25rem!important}.mb-md-1,.my-md-1{margin-bottom:.25rem!important}.ml-md-1,.mx-md-1{margin-left:.25rem!important}.m-md-2{margin:.5rem!important}.mt-md-2,.my-md-2{margin-top:.5rem!important}.mr-md-2,.mx-md-2{margin-right:.5rem!important}.mb-md-2,.my-md-2{margin-bottom:.5rem!important}.ml-md-2,.mx-md-2{margin-left:.5rem!important}.m-md-3{margin:1rem!important}.mt-md-3,.my-md-3{margin-top:1rem!important}.mr-md-3,.mx-md-3{margin-right:1rem!important}.mb-md-3,.my-md-3{margin-bottom:1rem!important}.ml-md-3,.mx-md-3{margin-left:1rem!important}.m-md-4{margin:1.5rem!important}.mt-md-4,.my-md-4{margin-top:1.5rem!important}.mr-md-4,.mx-md-4{margin-right:1.5rem!important}.mb-md-4,.my-md-4{margin-bottom:1.5rem!important}.ml-md-4,.mx-md-4{margin-left:1.5rem!important}.m-md-5{margin:3rem!important}.mt-md-5,.my-md-5{margin-top:3rem!important}.mr-md-5,.mx-md-5{margin-right:3rem!important}.mb-md-5,.my-md-5{margin-bottom:3rem!important}.ml-md-5,.mx-md-5{margin-left:3rem!important}.p-md-0{padding:0!important}.pt-md-0,.py-md-0{padding-top:0!important}.pr-md-0,.px-md-0{padding-right:0!important}.pb-md-0,.py-md-0{padding-bottom:0!important}.pl-md-0,.px-md-0{padding-left:0!important}.p-md-1{padding:.25rem!important}.pt-md-1,.py-md-1{padding-top:.25rem!important}.pr-md-1,.px-md-1{padding-right:.25rem!important}.pb-md-1,.py-md-1{padding-bottom:.25rem!important}.pl-md-1,.px-md-1{padding-left:.25rem!important}.p-md-2{padding:.5rem!important}.pt-md-2,.py-md-2{padding-top:.5rem!important}.pr-md-2,.px-md-2{padding-right:.5rem!important}.pb-md-2,.py-md-2{padding-bottom:.5rem!important}.pl-md-2,.px-md-2{padding-left:.5rem!important}.p-md-3{padding:1rem!important}.pt-md-3,.py-md-3{padding-top:1rem!important}.pr-md-3,.px-md-3{padding-right:1rem!important}.pb-md-3,.py-md-3{padding-bottom:1rem!important}.pl-md-3,.px-md-3{padding-left:1rem!important}.p-md-4{padding:1.5rem!important}.pt-md-4,.py-md-4{padding-top:1.5rem!important}.pr-md-4,.px-md-4{padding-right:1.5rem!important}.pb-md-4,.py-md-4{padding-bottom:1.5rem!important}.pl-md-4,.px-md-4{padding-left:1.5rem!important}.p-md-5{padding:3rem!important}.pt-md-5,.py-md-5{padding-top:3rem!important}.pr-md-5,.px-md-5{padding-right:3rem!important}.pb-md-5,.py-md-5{padding-bottom:3rem!important}.pl-md-5,.px-md-5{padding-left:3rem!important}.m-md-n1{margin:-.25rem!important}.mt-md-n1,.my-md-n1{margin-top:-.25rem!important}.mr-md-n1,.mx-md-n1{margin-right:-.25rem!important}.mb-md-n1,.my-md-n1{margin-bottom:-.25rem!important}.ml-md-n1,.mx-md-n1{margin-left:-.25rem!important}.m-md-n2{margin:-.5rem!important}.mt-md-n2,.my-md-n2{margin-top:-.5rem!important}.mr-md-n2,.mx-md-n2{margin-right:-.5rem!important}.mb-md-n2,.my-md-n2{margin-bottom:-.5rem!important}.ml-md-n2,.mx-md-n2{margin-left:-.5rem!important}.m-md-n3{margin:-1rem!important}.mt-md-n3,.my-md-n3{margin-top:-1rem!important}.mr-md-n3,.mx-md-n3{margin-right:-1rem!important}.mb-md-n3,.my-md-n3{margin-bottom:-1rem!important}.ml-md-n3,.mx-md-n3{margin-left:-1rem!important}.m-md-n4{margin:-1.5rem!important}.mt-md-n4,.my-md-n4{margin-top:-1.5rem!important}.mr-md-n4,.mx-md-n4{margin-right:-1.5rem!important}.mb-md-n4,.my-md-n4{margin-bottom:-1.5rem!important}.ml-md-n4,.mx-md-n4{margin-left:-1.5rem!important}.m-md-n5{margin:-3rem!important}.mt-md-n5,.my-md-n5{margin-top:-3rem!important}.mr-md-n5,.mx-md-n5{margin-right:-3rem!important}.mb-md-n5,.my-md-n5{margin-bottom:-3rem!important}.ml-md-n5,.mx-md-n5{margin-left:-3rem!important}.m-md-auto{margin:auto!important}.mt-md-auto,.my-md-auto{margin-top:auto!important}.mr-md-auto,.mx-md-auto{margin-right:auto!important}.mb-md-auto,.my-md-auto{margin-bottom:auto!important}.ml-md-auto,.mx-md-auto{margin-left:auto!important}.text-md-left{text-align:left!important}.text-md-right{text-align:right!important}.text-md-center{text-align:center!important}}@media (min-width:992px){.flex-lg-row{flex-direction:row!important}.flex-lg-column{flex-direction:column!important}.flex-lg-row-reverse{flex-direction:row-reverse!important}.flex-lg-column-reverse{flex-direction:column-reverse!important}.flex-lg-wrap{flex-wrap:wrap!important}.flex-lg-nowrap{flex-wrap:nowrap!important}.flex-lg-wrap-reverse{flex-wrap:wrap-reverse!important}.flex-lg-fill{flex:1 1 auto!important}.flex-lg-grow-0{flex-grow:0!important}.flex-lg-grow-1{flex-grow:1!important}.flex-lg-shrink-0{flex-shrink:0!important}.flex-lg-shrink-1{flex-shrink:1!important}.justify-content-lg-start{justify-content:flex-start!important}.justify-content-lg-end{justify-content:flex-end!important}.justify-content-lg-center{justify-content:center!important}.justify-content-lg-between{justify-content:space-between!important}.justify-content-lg-around{justify-content:space-around!important}.align-items-lg-start{align-items:flex-start!important}.align-items-lg-end{align-items:flex-end!important}.align-items-lg-center{align-items:center!important}.align-items-lg-baseline{align-items:baseline!important}.align-items-lg-stretch{align-items:stretch!important}.align-content-lg-start{align-content:flex-start!important}.align-content-lg-end{align-content:flex-end!important}.align-content-lg-center{align-content:center!important}.align-content-lg-between{align-content:space-between!important}.align-content-lg-around{align-content:space-around!important}.align-content-lg-stretch{align-content:stretch!important}.align-self-lg-auto{-ms-grid-row-align:auto!important;align-self:auto!important}.align-self-lg-start{align-self:flex-start!important}.align-self-lg-end{align-self:flex-end!important}.align-self-lg-center{-ms-grid-row-align:center!important;align-self:center!important}.align-self-lg-baseline{align-self:baseline!important}.align-self-lg-stretch{-ms-grid-row-align:stretch!important;align-self:stretch!important}.float-lg-left{float:left!important}.float-lg-right{float:right!important}.float-lg-none{float:none!important}.m-lg-0{margin:0!important}.mt-lg-0,.my-lg-0{margin-top:0!important}.mr-lg-0,.mx-lg-0{margin-right:0!important}.mb-lg-0,.my-lg-0{margin-bottom:0!important}.ml-lg-0,.mx-lg-0{margin-left:0!important}.m-lg-1{margin:.25rem!important}.mt-lg-1,.my-lg-1{margin-top:.25rem!important}.mr-lg-1,.mx-lg-1{margin-right:.25rem!important}.mb-lg-1,.my-lg-1{margin-bottom:.25rem!important}.ml-lg-1,.mx-lg-1{margin-left:.25rem!important}.m-lg-2{margin:.5rem!important}.mt-lg-2,.my-lg-2{margin-top:.5rem!important}.mr-lg-2,.mx-lg-2{margin-right:.5rem!important}.mb-lg-2,.my-lg-2{margin-bottom:.5rem!important}.ml-lg-2,.mx-lg-2{margin-left:.5rem!important}.m-lg-3{margin:1rem!important}.mt-lg-3,.my-lg-3{margin-top:1rem!important}.mr-lg-3,.mx-lg-3{margin-right:1rem!important}.mb-lg-3,.my-lg-3{margin-bottom:1rem!important}.ml-lg-3,.mx-lg-3{margin-left:1rem!important}.m-lg-4{margin:1.5rem!important}.mt-lg-4,.my-lg-4{margin-top:1.5rem!important}.mr-lg-4,.mx-lg-4{margin-right:1.5rem!important}.mb-lg-4,.my-lg-4{margin-bottom:1.5rem!important}.ml-lg-4,.mx-lg-4{margin-left:1.5rem!important}.m-lg-5{margin:3rem!important}.mt-lg-5,.my-lg-5{margin-top:3rem!important}.mr-lg-5,.mx-lg-5{margin-right:3rem!important}.mb-lg-5,.my-lg-5{margin-bottom:3rem!important}.ml-lg-5,.mx-lg-5{margin-left:3rem!important}.p-lg-0{padding:0!important}.pt-lg-0,.py-lg-0{padding-top:0!important}.pr-lg-0,.px-lg-0{padding-right:0!important}.pb-lg-0,.py-lg-0{padding-bottom:0!important}.pl-lg-0,.px-lg-0{padding-left:0!important}.p-lg-1{padding:.25rem!important}.pt-lg-1,.py-lg-1{padding-top:.25rem!important}.pr-lg-1,.px-lg-1{padding-right:.25rem!important}.pb-lg-1,.py-lg-1{padding-bottom:.25rem!important}.pl-lg-1,.px-lg-1{padding-left:.25rem!important}.p-lg-2{padding:.5rem!important}.pt-lg-2,.py-lg-2{padding-top:.5rem!important}.pr-lg-2,.px-lg-2{padding-right:.5rem!important}.pb-lg-2,.py-lg-2{padding-bottom:.5rem!important}.pl-lg-2,.px-lg-2{padding-left:.5rem!important}.p-lg-3{padding:1rem!important}.pt-lg-3,.py-lg-3{padding-top:1rem!important}.pr-lg-3,.px-lg-3{padding-right:1rem!important}.pb-lg-3,.py-lg-3{padding-bottom:1rem!important}.pl-lg-3,.px-lg-3{padding-left:1rem!important}.p-lg-4{padding:1.5rem!important}.pt-lg-4,.py-lg-4{padding-top:1.5rem!important}.pr-lg-4,.px-lg-4{padding-right:1.5rem!important}.pb-lg-4,.py-lg-4{padding-bottom:1.5rem!important}.pl-lg-4,.px-lg-4{padding-left:1.5rem!important}.p-lg-5{padding:3rem!important}.pt-lg-5,.py-lg-5{padding-top:3rem!important}.pr-lg-5,.px-lg-5{padding-right:3rem!important}.pb-lg-5,.py-lg-5{padding-bottom:3rem!important}.pl-lg-5,.px-lg-5{padding-left:3rem!important}.m-lg-n1{margin:-.25rem!important}.mt-lg-n1,.my-lg-n1{margin-top:-.25rem!important}.mr-lg-n1,.mx-lg-n1{margin-right:-.25rem!important}.mb-lg-n1,.my-lg-n1{margin-bottom:-.25rem!important}.ml-lg-n1,.mx-lg-n1{margin-left:-.25rem!important}.m-lg-n2{margin:-.5rem!important}.mt-lg-n2,.my-lg-n2{margin-top:-.5rem!important}.mr-lg-n2,.mx-lg-n2{margin-right:-.5rem!important}.mb-lg-n2,.my-lg-n2{margin-bottom:-.5rem!important}.ml-lg-n2,.mx-lg-n2{margin-left:-.5rem!important}.m-lg-n3{margin:-1rem!important}.mt-lg-n3,.my-lg-n3{margin-top:-1rem!important}.mr-lg-n3,.mx-lg-n3{margin-right:-1rem!important}.mb-lg-n3,.my-lg-n3{margin-bottom:-1rem!important}.ml-lg-n3,.mx-lg-n3{margin-left:-1rem!important}.m-lg-n4{margin:-1.5rem!important}.mt-lg-n4,.my-lg-n4{margin-top:-1.5rem!important}.mr-lg-n4,.mx-lg-n4{margin-right:-1.5rem!important}.mb-lg-n4,.my-lg-n4{margin-bottom:-1.5rem!important}.ml-lg-n4,.mx-lg-n4{margin-left:-1.5rem!important}.m-lg-n5{margin:-3rem!important}.mt-lg-n5,.my-lg-n5{margin-top:-3rem!important}.mr-lg-n5,.mx-lg-n5{margin-right:-3rem!important}.mb-lg-n5,.my-lg-n5{margin-bottom:-3rem!important}.ml-lg-n5,.mx-lg-n5{margin-left:-3rem!important}.m-lg-auto{margin:auto!important}.mt-lg-auto,.my-lg-auto{margin-top:auto!important}.mr-lg-auto,.mx-lg-auto{margin-right:auto!important}.mb-lg-auto,.my-lg-auto{margin-bottom:auto!important}.ml-lg-auto,.mx-lg-auto{margin-left:auto!important}.text-lg-left{text-align:left!important}.text-lg-right{text-align:right!important}.text-lg-center{text-align:center!important}}@media (min-width:1200px){.flex-xl-row{flex-direction:row!important}.flex-xl-column{flex-direction:column!important}.flex-xl-row-reverse{flex-direction:row-reverse!important}.flex-xl-column-reverse{flex-direction:column-reverse!important}.flex-xl-wrap{flex-wrap:wrap!important}.flex-xl-nowrap{flex-wrap:nowrap!important}.flex-xl-wrap-reverse{flex-wrap:wrap-reverse!important}.flex-xl-fill{flex:1 1 auto!important}.flex-xl-grow-0{flex-grow:0!important}.flex-xl-grow-1{flex-grow:1!important}.flex-xl-shrink-0{flex-shrink:0!important}.flex-xl-shrink-1{flex-shrink:1!important}.justify-content-xl-start{justify-content:flex-start!important}.justify-content-xl-end{justify-content:flex-end!important}.justify-content-xl-center{justify-content:center!important}.justify-content-xl-between{justify-content:space-between!important}.justify-content-xl-around{justify-content:space-around!important}.align-items-xl-start{align-items:flex-start!important}.align-items-xl-end{align-items:flex-end!important}.align-items-xl-center{align-items:center!important}.align-items-xl-baseline{align-items:baseline!important}.align-items-xl-stretch{align-items:stretch!important}.align-content-xl-start{align-content:flex-start!important}.align-content-xl-end{align-content:flex-end!important}.align-content-xl-center{align-content:center!important}.align-content-xl-between{align-content:space-between!important}.align-content-xl-around{align-content:space-around!important}.align-content-xl-stretch{align-content:stretch!important}.align-self-xl-auto{-ms-grid-row-align:auto!important;align-self:auto!important}.align-self-xl-start{align-self:flex-start!important}.align-self-xl-end{align-self:flex-end!important}.align-self-xl-center{-ms-grid-row-align:center!important;align-self:center!important}.align-self-xl-baseline{align-self:baseline!important}.align-self-xl-stretch{-ms-grid-row-align:stretch!important;align-self:stretch!important}.float-xl-left{float:left!important}.float-xl-right{float:right!important}.float-xl-none{float:none!important}.m-xl-0{margin:0!important}.mt-xl-0,.my-xl-0{margin-top:0!important}.mr-xl-0,.mx-xl-0{margin-right:0!important}.mb-xl-0,.my-xl-0{margin-bottom:0!important}.ml-xl-0,.mx-xl-0{margin-left:0!important}.m-xl-1{margin:.25rem!important}.mt-xl-1,.my-xl-1{margin-top:.25rem!important}.mr-xl-1,.mx-xl-1{margin-right:.25rem!important}.mb-xl-1,.my-xl-1{margin-bottom:.25rem!important}.ml-xl-1,.mx-xl-1{margin-left:.25rem!important}.m-xl-2{margin:.5rem!important}.mt-xl-2,.my-xl-2{margin-top:.5rem!important}.mr-xl-2,.mx-xl-2{margin-right:.5rem!important}.mb-xl-2,.my-xl-2{margin-bottom:.5rem!important}.ml-xl-2,.mx-xl-2{margin-left:.5rem!important}.m-xl-3{margin:1rem!important}.mt-xl-3,.my-xl-3{margin-top:1rem!important}.mr-xl-3,.mx-xl-3{margin-right:1rem!important}.mb-xl-3,.my-xl-3{margin-bottom:1rem!important}.ml-xl-3,.mx-xl-3{margin-left:1rem!important}.m-xl-4{margin:1.5rem!important}.mt-xl-4,.my-xl-4{margin-top:1.5rem!important}.mr-xl-4,.mx-xl-4{margin-right:1.5rem!important}.mb-xl-4,.my-xl-4{margin-bottom:1.5rem!important}.ml-xl-4,.mx-xl-4{margin-left:1.5rem!important}.m-xl-5{margin:3rem!important}.mt-xl-5,.my-xl-5{margin-top:3rem!important}.mr-xl-5,.mx-xl-5{margin-right:3rem!important}.mb-xl-5,.my-xl-5{margin-bottom:3rem!important}.ml-xl-5,.mx-xl-5{margin-left:3rem!important}.p-xl-0{padding:0!important}.pt-xl-0,.py-xl-0{padding-top:0!important}.pr-xl-0,.px-xl-0{padding-right:0!important}.pb-xl-0,.py-xl-0{padding-bottom:0!important}.pl-xl-0,.px-xl-0{padding-left:0!important}.p-xl-1{padding:.25rem!important}.pt-xl-1,.py-xl-1{padding-top:.25rem!important}.pr-xl-1,.px-xl-1{padding-right:.25rem!important}.pb-xl-1,.py-xl-1{padding-bottom:.25rem!important}.pl-xl-1,.px-xl-1{padding-left:.25rem!important}.p-xl-2{padding:.5rem!important}.pt-xl-2,.py-xl-2{padding-top:.5rem!important}.pr-xl-2,.px-xl-2{padding-right:.5rem!important}.pb-xl-2,.py-xl-2{padding-bottom:.5rem!important}.pl-xl-2,.px-xl-2{padding-left:.5rem!important}.p-xl-3{padding:1rem!important}.pt-xl-3,.py-xl-3{padding-top:1rem!important}.pr-xl-3,.px-xl-3{padding-right:1rem!important}.pb-xl-3,.py-xl-3{padding-bottom:1rem!important}.pl-xl-3,.px-xl-3{padding-left:1rem!important}.p-xl-4{padding:1.5rem!important}.pt-xl-4,.py-xl-4{padding-top:1.5rem!important}.pr-xl-4,.px-xl-4{padding-right:1.5rem!important}.pb-xl-4,.py-xl-4{padding-bottom:1.5rem!important}.pl-xl-4,.px-xl-4{padding-left:1.5rem!important}.p-xl-5{padding:3rem!important}.pt-xl-5,.py-xl-5{padding-top:3rem!important}.pr-xl-5,.px-xl-5{padding-right:3rem!important}.pb-xl-5,.py-xl-5{padding-bottom:3rem!important}.pl-xl-5,.px-xl-5{padding-left:3rem!important}.m-xl-n1{margin:-.25rem!important}.mt-xl-n1,.my-xl-n1{margin-top:-.25rem!important}.mr-xl-n1,.mx-xl-n1{margin-right:-.25rem!important}.mb-xl-n1,.my-xl-n1{margin-bottom:-.25rem!important}.ml-xl-n1,.mx-xl-n1{margin-left:-.25rem!important}.m-xl-n2{margin:-.5rem!important}.mt-xl-n2,.my-xl-n2{margin-top:-.5rem!important}.mr-xl-n2,.mx-xl-n2{margin-right:-.5rem!important}.mb-xl-n2,.my-xl-n2{margin-bottom:-.5rem!important}.ml-xl-n2,.mx-xl-n2{margin-left:-.5rem!important}.m-xl-n3{margin:-1rem!important}.mt-xl-n3,.my-xl-n3{margin-top:-1rem!important}.mr-xl-n3,.mx-xl-n3{margin-right:-1rem!important}.mb-xl-n3,.my-xl-n3{margin-bottom:-1rem!important}.ml-xl-n3,.mx-xl-n3{margin-left:-1rem!important}.m-xl-n4{margin:-1.5rem!important}.mt-xl-n4,.my-xl-n4{margin-top:-1.5rem!important}.mr-xl-n4,.mx-xl-n4{margin-right:-1.5rem!important}.mb-xl-n4,.my-xl-n4{margin-bottom:-1.5rem!important}.ml-xl-n4,.mx-xl-n4{margin-left:-1.5rem!important}.m-xl-n5{margin:-3rem!important}.mt-xl-n5,.my-xl-n5{margin-top:-3rem!important}.mr-xl-n5,.mx-xl-n5{margin-right:-3rem!important}.mb-xl-n5,.my-xl-n5{margin-bottom:-3rem!important}.ml-xl-n5,.mx-xl-n5{margin-left:-3rem!important}.m-xl-auto{margin:auto!important}.mt-xl-auto,.my-xl-auto{margin-top:auto!important}.mr-xl-auto,.mx-xl-auto{margin-right:auto!important}.mb-xl-auto,.my-xl-auto{margin-bottom:auto!important}.ml-xl-auto,.mx-xl-auto{margin-left:auto!important}.text-xl-left{text-align:left!important}.text-xl-right{text-align:right!important}.text-xl-center{text-align:center!important}}.text-lowercase{text-transform:lowercase!important}.text-uppercase{text-transform:uppercase!important}.text-capitalize{text-transform:capitalize!important}.font-weight-light{font-weight:300!important}.font-weight-lighter{font-weight:lighter!important}.font-weight-normal{font-weight:400!important}.font-weight-bold{font-weight:700!important}.font-weight-bolder{font-weight:bolder!important}.font-italic{font-style:italic!important}.text-white{color:#fff!important}.text-primary{color:#007bff!important}a.text-primary:focus,a.text-primary:hover{color:#0056b3!important}.text-secondary{color:#6c757d!important}a.text-secondary:focus,a.text-secondary:hover{color:#494f54!important}.text-success{color:#28a745!important}a.text-success:focus,a.text-success:hover{color:#19692c!important}.text-info{color:#17a2b8!important}a.text-info:focus,a.text-info:hover{color:#0f6674!important}.text-warning{color:#ffc107!important}a.text-warning:focus,a.text-warning:hover{color:#ba8b00!important}.text-danger{color:#dc3545!important}a.text-danger:focus,a.text-danger:hover{color:#a71d2a!important}.text-light{color:#f8f9fa!important}a.text-light:focus,a.text-light:hover{color:#cbd3da!important}.text-dark{color:#343a40!important}a.text-dark:focus,a.text-dark:hover{color:#121416!important}.text-body{color:#212529!important}.text-muted{color:#6c757d!important}.text-black-50{color:rgba(0,0,0,.5)!important}.text-white-50{color:rgba(255,255,255,.5)!important}.text-hide{font:0/0 a;color:transparent;text-shadow:none;background-color:transparent;border:0}.text-decoration-none{text-decoration:none!important}.text-reset{color:inherit!important}.visible{visibility:visible!important}.invisible{visibility:hidden!important}@media print{*,::after,::before{text-shadow:none!important;box-shadow:none!important}a:not(.btn){text-decoration:underline}abbr[title]::after{content:" (" attr(title) ")"}pre{white-space:pre-wrap!important}blockquote,pre{border:1px solid #adb5bd;page-break-inside:avoid}thead{display:table-header-group}img,tr{page-break-inside:avoid}h2,h3,p{orphans:3;widows:3}h2,h3{page-break-after:avoid}@page{size:a3}.container,body{min-width:992px!important}.navbar{display:none}.badge{border:1px solid #000}.table{border-collapse:collapse!important}.table td,.table th{background-color:#fff!important}.table-bordered td,.table-bordered th{border:1px solid #dee2e6!important}.table-dark{color:inherit}.table-dark tbody+tbody,.table-dark td,.table-dark th,.table-dark thead th{border-color:#dee2e6}.table .thead-dark th{color:inherit;border-color:#dee2e6}}/*!\n *  Font Awesome 4.7.0 by @davegandy - http://fontawesome.io - @fontawesome\n *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)\n */@font-face{font-family:FontAwesome;src:url(~font-awesome/fonts/fontawesome-webfont.eot?v=4.7.0);src:url(~font-awesome/fonts/fontawesome-webfont.eot?#iefix&v=4.7.0) format("embedded-opentype"),url(~font-awesome/fonts/fontawesome-webfont.woff2?v=4.7.0) format("woff2"),url(~font-awesome/fonts/fontawesome-webfont.woff?v=4.7.0) format("woff"),url(~font-awesome/fonts/fontawesome-webfont.ttf?v=4.7.0) format("truetype"),url(~font-awesome/fonts/fontawesome-webfont.svg?v=4.7.0#fontawesomeregular) format("svg");font-weight:400;font-style:normal}.fa{display:inline-block;font:14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.fa-lg{font-size:1.33333em;line-height:.75em;vertical-align:-15%}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-fw{width:1.28571em;text-align:center}.fa-ul{padding-left:0;margin-left:2.14286em;list-style-type:none}.fa-ul>li{position:relative}.fa-li{position:absolute;left:-2.14286em;width:2.14286em;top:.14286em;text-align:center}.fa-li.fa-lg{left:-1.85714em}.fa-border{padding:.2em .25em .15em;border:.08em solid #eee;border-radius:.1em}.fa-pull-left{float:left}.fa-pull-right{float:right}.fa.fa-pull-left{margin-right:.3em}.fa.fa-pull-right{margin-left:.3em}.pull-right{float:right}.pull-left{float:left}.fa.pull-left{margin-right:.3em}.fa.pull-right{margin-left:.3em}.fa-spin{-webkit-animation:2s linear infinite fa-spin;animation:2s linear infinite fa-spin}.fa-pulse{-webkit-animation:1s steps(8) infinite fa-spin;animation:1s steps(8) infinite fa-spin}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}.fa-rotate-90{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{-webkit-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{-webkit-transform:scale(-1,1);transform:scale(-1,1)}.fa-flip-vertical{-webkit-transform:scale(1,-1);transform:scale(1,-1)}:root .fa-flip-horizontal,:root .fa-flip-vertical,:root .fa-rotate-180,:root .fa-rotate-270,:root .fa-rotate-90{-webkit-filter:none;filter:none}.fa-stack{position:relative;display:inline-block;width:2em;height:2em;line-height:2em;vertical-align:middle}.fa-stack-1x,.fa-stack-2x{position:absolute;left:0;width:100%;text-align:center}.fa-stack-1x{line-height:inherit}.fa-stack-2x{font-size:2em}.fa-inverse{color:#fff}.fa-glass:before{content:"\uF000"}.fa-music:before{content:"\uF001"}.fa-search:before{content:"\uF002"}.fa-envelope-o:before{content:"\uF003"}.fa-heart:before{content:"\uF004"}.fa-star:before{content:"\uF005"}.fa-star-o:before{content:"\uF006"}.fa-user:before{content:"\uF007"}.fa-film:before{content:"\uF008"}.fa-th-large:before{content:"\uF009"}.fa-th:before{content:"\uF00A"}.fa-th-list:before{content:"\uF00B"}.fa-check:before{content:"\uF00C"}.fa-close:before,.fa-remove:before,.fa-times:before{content:"\uF00D"}.fa-search-plus:before{content:"\uF00E"}.fa-search-minus:before{content:"\uF010"}.fa-power-off:before{content:"\uF011"}.fa-signal:before{content:"\uF012"}.fa-cog:before,.fa-gear:before{content:"\uF013"}.fa-trash-o:before{content:"\uF014"}.fa-home:before{content:"\uF015"}.fa-file-o:before{content:"\uF016"}.fa-clock-o:before{content:"\uF017"}.fa-road:before{content:"\uF018"}.fa-download:before{content:"\uF019"}.fa-arrow-circle-o-down:before{content:"\uF01A"}.fa-arrow-circle-o-up:before{content:"\uF01B"}.fa-inbox:before{content:"\uF01C"}.fa-play-circle-o:before{content:"\uF01D"}.fa-repeat:before,.fa-rotate-right:before{content:"\uF01E"}.fa-refresh:before{content:"\uF021"}.fa-list-alt:before{content:"\uF022"}.fa-lock:before{content:"\uF023"}.fa-flag:before{content:"\uF024"}.fa-headphones:before{content:"\uF025"}.fa-volume-off:before{content:"\uF026"}.fa-volume-down:before{content:"\uF027"}.fa-volume-up:before{content:"\uF028"}.fa-qrcode:before{content:"\uF029"}.fa-barcode:before{content:"\uF02A"}.fa-tag:before{content:"\uF02B"}.fa-tags:before{content:"\uF02C"}.fa-book:before{content:"\uF02D"}.fa-bookmark:before{content:"\uF02E"}.fa-print:before{content:"\uF02F"}.fa-camera:before{content:"\uF030"}.fa-font:before{content:"\uF031"}.fa-bold:before{content:"\uF032"}.fa-italic:before{content:"\uF033"}.fa-text-height:before{content:"\uF034"}.fa-text-width:before{content:"\uF035"}.fa-align-left:before{content:"\uF036"}.fa-align-center:before{content:"\uF037"}.fa-align-right:before{content:"\uF038"}.fa-align-justify:before{content:"\uF039"}.fa-list:before{content:"\uF03A"}.fa-dedent:before,.fa-outdent:before{content:"\uF03B"}.fa-indent:before{content:"\uF03C"}.fa-video-camera:before{content:"\uF03D"}.fa-image:before,.fa-photo:before,.fa-picture-o:before{content:"\uF03E"}.fa-pencil:before{content:"\uF040"}.fa-map-marker:before{content:"\uF041"}.fa-adjust:before{content:"\uF042"}.fa-tint:before{content:"\uF043"}.fa-edit:before,.fa-pencil-square-o:before{content:"\uF044"}.fa-share-square-o:before{content:"\uF045"}.fa-check-square-o:before{content:"\uF046"}.fa-arrows:before{content:"\uF047"}.fa-step-backward:before{content:"\uF048"}.fa-fast-backward:before{content:"\uF049"}.fa-backward:before{content:"\uF04A"}.fa-play:before{content:"\uF04B"}.fa-pause:before{content:"\uF04C"}.fa-stop:before{content:"\uF04D"}.fa-forward:before{content:"\uF04E"}.fa-fast-forward:before{content:"\uF050"}.fa-step-forward:before{content:"\uF051"}.fa-eject:before{content:"\uF052"}.fa-chevron-left:before{content:"\uF053"}.fa-chevron-right:before{content:"\uF054"}.fa-plus-circle:before{content:"\uF055"}.fa-minus-circle:before{content:"\uF056"}.fa-times-circle:before{content:"\uF057"}.fa-check-circle:before{content:"\uF058"}.fa-question-circle:before{content:"\uF059"}.fa-info-circle:before{content:"\uF05A"}.fa-crosshairs:before{content:"\uF05B"}.fa-times-circle-o:before{content:"\uF05C"}.fa-check-circle-o:before{content:"\uF05D"}.fa-ban:before{content:"\uF05E"}.fa-arrow-left:before{content:"\uF060"}.fa-arrow-right:before{content:"\uF061"}.fa-arrow-up:before{content:"\uF062"}.fa-arrow-down:before{content:"\uF063"}.fa-mail-forward:before,.fa-share:before{content:"\uF064"}.fa-expand:before{content:"\uF065"}.fa-compress:before{content:"\uF066"}.fa-plus:before{content:"\uF067"}.fa-minus:before{content:"\uF068"}.fa-asterisk:before{content:"\uF069"}.fa-exclamation-circle:before{content:"\uF06A"}.fa-gift:before{content:"\uF06B"}.fa-leaf:before{content:"\uF06C"}.fa-fire:before{content:"\uF06D"}.fa-eye:before{content:"\uF06E"}.fa-eye-slash:before{content:"\uF070"}.fa-exclamation-triangle:before,.fa-warning:before{content:"\uF071"}.fa-plane:before{content:"\uF072"}.fa-calendar:before{content:"\uF073"}.fa-random:before{content:"\uF074"}.fa-comment:before{content:"\uF075"}.fa-magnet:before{content:"\uF076"}.fa-chevron-up:before{content:"\uF077"}.fa-chevron-down:before{content:"\uF078"}.fa-retweet:before{content:"\uF079"}.fa-shopping-cart:before{content:"\uF07A"}.fa-folder:before{content:"\uF07B"}.fa-folder-open:before{content:"\uF07C"}.fa-arrows-v:before{content:"\uF07D"}.fa-arrows-h:before{content:"\uF07E"}.fa-bar-chart-o:before,.fa-bar-chart:before{content:"\uF080"}.fa-twitter-square:before{content:"\uF081"}.fa-facebook-square:before{content:"\uF082"}.fa-camera-retro:before{content:"\uF083"}.fa-key:before{content:"\uF084"}.fa-cogs:before,.fa-gears:before{content:"\uF085"}.fa-comments:before{content:"\uF086"}.fa-thumbs-o-up:before{content:"\uF087"}.fa-thumbs-o-down:before{content:"\uF088"}.fa-star-half:before{content:"\uF089"}.fa-heart-o:before{content:"\uF08A"}.fa-sign-out:before{content:"\uF08B"}.fa-linkedin-square:before{content:"\uF08C"}.fa-thumb-tack:before{content:"\uF08D"}.fa-external-link:before{content:"\uF08E"}.fa-sign-in:before{content:"\uF090"}.fa-trophy:before{content:"\uF091"}.fa-github-square:before{content:"\uF092"}.fa-upload:before{content:"\uF093"}.fa-lemon-o:before{content:"\uF094"}.fa-phone:before{content:"\uF095"}.fa-square-o:before{content:"\uF096"}.fa-bookmark-o:before{content:"\uF097"}.fa-phone-square:before{content:"\uF098"}.fa-twitter:before{content:"\uF099"}.fa-facebook-f:before,.fa-facebook:before{content:"\uF09A"}.fa-github:before{content:"\uF09B"}.fa-unlock:before{content:"\uF09C"}.fa-credit-card:before{content:"\uF09D"}.fa-feed:before,.fa-rss:before{content:"\uF09E"}.fa-hdd-o:before{content:"\uF0A0"}.fa-bullhorn:before{content:"\uF0A1"}.fa-bell:before{content:"\uF0F3"}.fa-certificate:before{content:"\uF0A3"}.fa-hand-o-right:before{content:"\uF0A4"}.fa-hand-o-left:before{content:"\uF0A5"}.fa-hand-o-up:before{content:"\uF0A6"}.fa-hand-o-down:before{content:"\uF0A7"}.fa-arrow-circle-left:before{content:"\uF0A8"}.fa-arrow-circle-right:before{content:"\uF0A9"}.fa-arrow-circle-up:before{content:"\uF0AA"}.fa-arrow-circle-down:before{content:"\uF0AB"}.fa-globe:before{content:"\uF0AC"}.fa-wrench:before{content:"\uF0AD"}.fa-tasks:before{content:"\uF0AE"}.fa-filter:before{content:"\uF0B0"}.fa-briefcase:before{content:"\uF0B1"}.fa-arrows-alt:before{content:"\uF0B2"}.fa-group:before,.fa-users:before{content:"\uF0C0"}.fa-chain:before,.fa-link:before{content:"\uF0C1"}.fa-cloud:before{content:"\uF0C2"}.fa-flask:before{content:"\uF0C3"}.fa-cut:before,.fa-scissors:before{content:"\uF0C4"}.fa-copy:before,.fa-files-o:before{content:"\uF0C5"}.fa-paperclip:before{content:"\uF0C6"}.fa-floppy-o:before,.fa-save:before{content:"\uF0C7"}.fa-square:before{content:"\uF0C8"}.fa-bars:before,.fa-navicon:before,.fa-reorder:before{content:"\uF0C9"}.fa-list-ul:before{content:"\uF0CA"}.fa-list-ol:before{content:"\uF0CB"}.fa-strikethrough:before{content:"\uF0CC"}.fa-underline:before{content:"\uF0CD"}.fa-table:before{content:"\uF0CE"}.fa-magic:before{content:"\uF0D0"}.fa-truck:before{content:"\uF0D1"}.fa-pinterest:before{content:"\uF0D2"}.fa-pinterest-square:before{content:"\uF0D3"}.fa-google-plus-square:before{content:"\uF0D4"}.fa-google-plus:before{content:"\uF0D5"}.fa-money:before{content:"\uF0D6"}.fa-caret-down:before{content:"\uF0D7"}.fa-caret-up:before{content:"\uF0D8"}.fa-caret-left:before{content:"\uF0D9"}.fa-caret-right:before{content:"\uF0DA"}.fa-columns:before{content:"\uF0DB"}.fa-sort:before,.fa-unsorted:before{content:"\uF0DC"}.fa-sort-desc:before,.fa-sort-down:before{content:"\uF0DD"}.fa-sort-asc:before,.fa-sort-up:before{content:"\uF0DE"}.fa-envelope:before{content:"\uF0E0"}.fa-linkedin:before{content:"\uF0E1"}.fa-rotate-left:before,.fa-undo:before{content:"\uF0E2"}.fa-gavel:before,.fa-legal:before{content:"\uF0E3"}.fa-dashboard:before,.fa-tachometer:before{content:"\uF0E4"}.fa-comment-o:before{content:"\uF0E5"}.fa-comments-o:before{content:"\uF0E6"}.fa-bolt:before,.fa-flash:before{content:"\uF0E7"}.fa-sitemap:before{content:"\uF0E8"}.fa-umbrella:before{content:"\uF0E9"}.fa-clipboard:before,.fa-paste:before{content:"\uF0EA"}.fa-lightbulb-o:before{content:"\uF0EB"}.fa-exchange:before{content:"\uF0EC"}.fa-cloud-download:before{content:"\uF0ED"}.fa-cloud-upload:before{content:"\uF0EE"}.fa-user-md:before{content:"\uF0F0"}.fa-stethoscope:before{content:"\uF0F1"}.fa-suitcase:before{content:"\uF0F2"}.fa-bell-o:before{content:"\uF0A2"}.fa-coffee:before{content:"\uF0F4"}.fa-cutlery:before{content:"\uF0F5"}.fa-file-text-o:before{content:"\uF0F6"}.fa-building-o:before{content:"\uF0F7"}.fa-hospital-o:before{content:"\uF0F8"}.fa-ambulance:before{content:"\uF0F9"}.fa-medkit:before{content:"\uF0FA"}.fa-fighter-jet:before{content:"\uF0FB"}.fa-beer:before{content:"\uF0FC"}.fa-h-square:before{content:"\uF0FD"}.fa-plus-square:before{content:"\uF0FE"}.fa-angle-double-left:before{content:"\uF100"}.fa-angle-double-right:before{content:"\uF101"}.fa-angle-double-up:before{content:"\uF102"}.fa-angle-double-down:before{content:"\uF103"}.fa-angle-left:before{content:"\uF104"}.fa-angle-right:before{content:"\uF105"}.fa-angle-up:before{content:"\uF106"}.fa-angle-down:before{content:"\uF107"}.fa-desktop:before{content:"\uF108"}.fa-laptop:before{content:"\uF109"}.fa-tablet:before{content:"\uF10A"}.fa-mobile-phone:before,.fa-mobile:before{content:"\uF10B"}.fa-circle-o:before{content:"\uF10C"}.fa-quote-left:before{content:"\uF10D"}.fa-quote-right:before{content:"\uF10E"}.fa-spinner:before{content:"\uF110"}.fa-circle:before{content:"\uF111"}.fa-mail-reply:before,.fa-reply:before{content:"\uF112"}.fa-github-alt:before{content:"\uF113"}.fa-folder-o:before{content:"\uF114"}.fa-folder-open-o:before{content:"\uF115"}.fa-smile-o:before{content:"\uF118"}.fa-frown-o:before{content:"\uF119"}.fa-meh-o:before{content:"\uF11A"}.fa-gamepad:before{content:"\uF11B"}.fa-keyboard-o:before{content:"\uF11C"}.fa-flag-o:before{content:"\uF11D"}.fa-flag-checkered:before{content:"\uF11E"}.fa-terminal:before{content:"\uF120"}.fa-code:before{content:"\uF121"}.fa-mail-reply-all:before,.fa-reply-all:before{content:"\uF122"}.fa-star-half-empty:before,.fa-star-half-full:before,.fa-star-half-o:before{content:"\uF123"}.fa-location-arrow:before{content:"\uF124"}.fa-crop:before{content:"\uF125"}.fa-code-fork:before{content:"\uF126"}.fa-chain-broken:before,.fa-unlink:before{content:"\uF127"}.fa-question:before{content:"\uF128"}.fa-info:before{content:"\uF129"}.fa-exclamation:before{content:"\uF12A"}.fa-superscript:before{content:"\uF12B"}.fa-subscript:before{content:"\uF12C"}.fa-eraser:before{content:"\uF12D"}.fa-puzzle-piece:before{content:"\uF12E"}.fa-microphone:before{content:"\uF130"}.fa-microphone-slash:before{content:"\uF131"}.fa-shield:before{content:"\uF132"}.fa-calendar-o:before{content:"\uF133"}.fa-fire-extinguisher:before{content:"\uF134"}.fa-rocket:before{content:"\uF135"}.fa-maxcdn:before{content:"\uF136"}.fa-chevron-circle-left:before{content:"\uF137"}.fa-chevron-circle-right:before{content:"\uF138"}.fa-chevron-circle-up:before{content:"\uF139"}.fa-chevron-circle-down:before{content:"\uF13A"}.fa-html5:before{content:"\uF13B"}.fa-css3:before{content:"\uF13C"}.fa-anchor:before{content:"\uF13D"}.fa-unlock-alt:before{content:"\uF13E"}.fa-bullseye:before{content:"\uF140"}.fa-ellipsis-h:before{content:"\uF141"}.fa-ellipsis-v:before{content:"\uF142"}.fa-rss-square:before{content:"\uF143"}.fa-play-circle:before{content:"\uF144"}.fa-ticket:before{content:"\uF145"}.fa-minus-square:before{content:"\uF146"}.fa-minus-square-o:before{content:"\uF147"}.fa-level-up:before{content:"\uF148"}.fa-level-down:before{content:"\uF149"}.fa-check-square:before{content:"\uF14A"}.fa-pencil-square:before{content:"\uF14B"}.fa-external-link-square:before{content:"\uF14C"}.fa-share-square:before{content:"\uF14D"}.fa-compass:before{content:"\uF14E"}.fa-caret-square-o-down:before,.fa-toggle-down:before{content:"\uF150"}.fa-caret-square-o-up:before,.fa-toggle-up:before{content:"\uF151"}.fa-caret-square-o-right:before,.fa-toggle-right:before{content:"\uF152"}.fa-eur:before,.fa-euro:before{content:"\uF153"}.fa-gbp:before{content:"\uF154"}.fa-dollar:before,.fa-usd:before{content:"\uF155"}.fa-inr:before,.fa-rupee:before{content:"\uF156"}.fa-cny:before,.fa-jpy:before,.fa-rmb:before,.fa-yen:before{content:"\uF157"}.fa-rouble:before,.fa-rub:before,.fa-ruble:before{content:"\uF158"}.fa-krw:before,.fa-won:before{content:"\uF159"}.fa-bitcoin:before,.fa-btc:before{content:"\uF15A"}.fa-file:before{content:"\uF15B"}.fa-file-text:before{content:"\uF15C"}.fa-sort-alpha-asc:before{content:"\uF15D"}.fa-sort-alpha-desc:before{content:"\uF15E"}.fa-sort-amount-asc:before{content:"\uF160"}.fa-sort-amount-desc:before{content:"\uF161"}.fa-sort-numeric-asc:before{content:"\uF162"}.fa-sort-numeric-desc:before{content:"\uF163"}.fa-thumbs-up:before{content:"\uF164"}.fa-thumbs-down:before{content:"\uF165"}.fa-youtube-square:before{content:"\uF166"}.fa-youtube:before{content:"\uF167"}.fa-xing:before{content:"\uF168"}.fa-xing-square:before{content:"\uF169"}.fa-youtube-play:before{content:"\uF16A"}.fa-dropbox:before{content:"\uF16B"}.fa-stack-overflow:before{content:"\uF16C"}.fa-instagram:before{content:"\uF16D"}.fa-flickr:before{content:"\uF16E"}.fa-adn:before{content:"\uF170"}.fa-bitbucket:before{content:"\uF171"}.fa-bitbucket-square:before{content:"\uF172"}.fa-tumblr:before{content:"\uF173"}.fa-tumblr-square:before{content:"\uF174"}.fa-long-arrow-down:before{content:"\uF175"}.fa-long-arrow-up:before{content:"\uF176"}.fa-long-arrow-left:before{content:"\uF177"}.fa-long-arrow-right:before{content:"\uF178"}.fa-apple:before{content:"\uF179"}.fa-windows:before{content:"\uF17A"}.fa-android:before{content:"\uF17B"}.fa-linux:before{content:"\uF17C"}.fa-dribbble:before{content:"\uF17D"}.fa-skype:before{content:"\uF17E"}.fa-foursquare:before{content:"\uF180"}.fa-trello:before{content:"\uF181"}.fa-female:before{content:"\uF182"}.fa-male:before{content:"\uF183"}.fa-gittip:before,.fa-gratipay:before{content:"\uF184"}.fa-sun-o:before{content:"\uF185"}.fa-moon-o:before{content:"\uF186"}.fa-archive:before{content:"\uF187"}.fa-bug:before{content:"\uF188"}.fa-vk:before{content:"\uF189"}.fa-weibo:before{content:"\uF18A"}.fa-renren:before{content:"\uF18B"}.fa-pagelines:before{content:"\uF18C"}.fa-stack-exchange:before{content:"\uF18D"}.fa-arrow-circle-o-right:before{content:"\uF18E"}.fa-arrow-circle-o-left:before{content:"\uF190"}.fa-caret-square-o-left:before,.fa-toggle-left:before{content:"\uF191"}.fa-dot-circle-o:before{content:"\uF192"}.fa-wheelchair:before{content:"\uF193"}.fa-vimeo-square:before{content:"\uF194"}.fa-try:before,.fa-turkish-lira:before{content:"\uF195"}.fa-plus-square-o:before{content:"\uF196"}.fa-space-shuttle:before{content:"\uF197"}.fa-slack:before{content:"\uF198"}.fa-envelope-square:before{content:"\uF199"}.fa-wordpress:before{content:"\uF19A"}.fa-openid:before{content:"\uF19B"}.fa-bank:before,.fa-institution:before,.fa-university:before{content:"\uF19C"}.fa-graduation-cap:before,.fa-mortar-board:before{content:"\uF19D"}.fa-yahoo:before{content:"\uF19E"}.fa-google:before{content:"\uF1A0"}.fa-reddit:before{content:"\uF1A1"}.fa-reddit-square:before{content:"\uF1A2"}.fa-stumbleupon-circle:before{content:"\uF1A3"}.fa-stumbleupon:before{content:"\uF1A4"}.fa-delicious:before{content:"\uF1A5"}.fa-digg:before{content:"\uF1A6"}.fa-pied-piper-pp:before{content:"\uF1A7"}.fa-pied-piper-alt:before{content:"\uF1A8"}.fa-drupal:before{content:"\uF1A9"}.fa-joomla:before{content:"\uF1AA"}.fa-language:before{content:"\uF1AB"}.fa-fax:before{content:"\uF1AC"}.fa-building:before{content:"\uF1AD"}.fa-child:before{content:"\uF1AE"}.fa-paw:before{content:"\uF1B0"}.fa-spoon:before{content:"\uF1B1"}.fa-cube:before{content:"\uF1B2"}.fa-cubes:before{content:"\uF1B3"}.fa-behance:before{content:"\uF1B4"}.fa-behance-square:before{content:"\uF1B5"}.fa-steam:before{content:"\uF1B6"}.fa-steam-square:before{content:"\uF1B7"}.fa-recycle:before{content:"\uF1B8"}.fa-automobile:before,.fa-car:before{content:"\uF1B9"}.fa-cab:before,.fa-taxi:before{content:"\uF1BA"}.fa-tree:before{content:"\uF1BB"}.fa-spotify:before{content:"\uF1BC"}.fa-deviantart:before{content:"\uF1BD"}.fa-soundcloud:before{content:"\uF1BE"}.fa-database:before{content:"\uF1C0"}.fa-file-pdf-o:before{content:"\uF1C1"}.fa-file-word-o:before{content:"\uF1C2"}.fa-file-excel-o:before{content:"\uF1C3"}.fa-file-powerpoint-o:before{content:"\uF1C4"}.fa-file-image-o:before,.fa-file-photo-o:before,.fa-file-picture-o:before{content:"\uF1C5"}.fa-file-archive-o:before,.fa-file-zip-o:before{content:"\uF1C6"}.fa-file-audio-o:before,.fa-file-sound-o:before{content:"\uF1C7"}.fa-file-movie-o:before,.fa-file-video-o:before{content:"\uF1C8"}.fa-file-code-o:before{content:"\uF1C9"}.fa-vine:before{content:"\uF1CA"}.fa-codepen:before{content:"\uF1CB"}.fa-jsfiddle:before{content:"\uF1CC"}.fa-life-bouy:before,.fa-life-buoy:before,.fa-life-ring:before,.fa-life-saver:before,.fa-support:before{content:"\uF1CD"}.fa-circle-o-notch:before{content:"\uF1CE"}.fa-ra:before,.fa-rebel:before,.fa-resistance:before{content:"\uF1D0"}.fa-empire:before,.fa-ge:before{content:"\uF1D1"}.fa-git-square:before{content:"\uF1D2"}.fa-git:before{content:"\uF1D3"}.fa-hacker-news:before,.fa-y-combinator-square:before,.fa-yc-square:before{content:"\uF1D4"}.fa-tencent-weibo:before{content:"\uF1D5"}.fa-qq:before{content:"\uF1D6"}.fa-wechat:before,.fa-weixin:before{content:"\uF1D7"}.fa-paper-plane:before,.fa-send:before{content:"\uF1D8"}.fa-paper-plane-o:before,.fa-send-o:before{content:"\uF1D9"}.fa-history:before{content:"\uF1DA"}.fa-circle-thin:before{content:"\uF1DB"}.fa-header:before{content:"\uF1DC"}.fa-paragraph:before{content:"\uF1DD"}.fa-sliders:before{content:"\uF1DE"}.fa-share-alt:before{content:"\uF1E0"}.fa-share-alt-square:before{content:"\uF1E1"}.fa-bomb:before{content:"\uF1E2"}.fa-futbol-o:before,.fa-soccer-ball-o:before{content:"\uF1E3"}.fa-tty:before{content:"\uF1E4"}.fa-binoculars:before{content:"\uF1E5"}.fa-plug:before{content:"\uF1E6"}.fa-slideshare:before{content:"\uF1E7"}.fa-twitch:before{content:"\uF1E8"}.fa-yelp:before{content:"\uF1E9"}.fa-newspaper-o:before{content:"\uF1EA"}.fa-wifi:before{content:"\uF1EB"}.fa-calculator:before{content:"\uF1EC"}.fa-paypal:before{content:"\uF1ED"}.fa-google-wallet:before{content:"\uF1EE"}.fa-cc-visa:before{content:"\uF1F0"}.fa-cc-mastercard:before{content:"\uF1F1"}.fa-cc-discover:before{content:"\uF1F2"}.fa-cc-amex:before{content:"\uF1F3"}.fa-cc-paypal:before{content:"\uF1F4"}.fa-cc-stripe:before{content:"\uF1F5"}.fa-bell-slash:before{content:"\uF1F6"}.fa-bell-slash-o:before{content:"\uF1F7"}.fa-trash:before{content:"\uF1F8"}.fa-copyright:before{content:"\uF1F9"}.fa-at:before{content:"\uF1FA"}.fa-eyedropper:before{content:"\uF1FB"}.fa-paint-brush:before{content:"\uF1FC"}.fa-birthday-cake:before{content:"\uF1FD"}.fa-area-chart:before{content:"\uF1FE"}.fa-pie-chart:before{content:"\uF200"}.fa-line-chart:before{content:"\uF201"}.fa-lastfm:before{content:"\uF202"}.fa-lastfm-square:before{content:"\uF203"}.fa-toggle-off:before{content:"\uF204"}.fa-toggle-on:before{content:"\uF205"}.fa-bicycle:before{content:"\uF206"}.fa-bus:before{content:"\uF207"}.fa-ioxhost:before{content:"\uF208"}.fa-angellist:before{content:"\uF209"}.fa-cc:before{content:"\uF20A"}.fa-ils:before,.fa-shekel:before,.fa-sheqel:before{content:"\uF20B"}.fa-meanpath:before{content:"\uF20C"}.fa-buysellads:before{content:"\uF20D"}.fa-connectdevelop:before{content:"\uF20E"}.fa-dashcube:before{content:"\uF210"}.fa-forumbee:before{content:"\uF211"}.fa-leanpub:before{content:"\uF212"}.fa-sellsy:before{content:"\uF213"}.fa-shirtsinbulk:before{content:"\uF214"}.fa-simplybuilt:before{content:"\uF215"}.fa-skyatlas:before{content:"\uF216"}.fa-cart-plus:before{content:"\uF217"}.fa-cart-arrow-down:before{content:"\uF218"}.fa-diamond:before{content:"\uF219"}.fa-ship:before{content:"\uF21A"}.fa-user-secret:before{content:"\uF21B"}.fa-motorcycle:before{content:"\uF21C"}.fa-street-view:before{content:"\uF21D"}.fa-heartbeat:before{content:"\uF21E"}.fa-venus:before{content:"\uF221"}.fa-mars:before{content:"\uF222"}.fa-mercury:before{content:"\uF223"}.fa-intersex:before,.fa-transgender:before{content:"\uF224"}.fa-transgender-alt:before{content:"\uF225"}.fa-venus-double:before{content:"\uF226"}.fa-mars-double:before{content:"\uF227"}.fa-venus-mars:before{content:"\uF228"}.fa-mars-stroke:before{content:"\uF229"}.fa-mars-stroke-v:before{content:"\uF22A"}.fa-mars-stroke-h:before{content:"\uF22B"}.fa-neuter:before{content:"\uF22C"}.fa-genderless:before{content:"\uF22D"}.fa-facebook-official:before{content:"\uF230"}.fa-pinterest-p:before{content:"\uF231"}.fa-whatsapp:before{content:"\uF232"}.fa-server:before{content:"\uF233"}.fa-user-plus:before{content:"\uF234"}.fa-user-times:before{content:"\uF235"}.fa-bed:before,.fa-hotel:before{content:"\uF236"}.fa-viacoin:before{content:"\uF237"}.fa-train:before{content:"\uF238"}.fa-subway:before{content:"\uF239"}.fa-medium:before{content:"\uF23A"}.fa-y-combinator:before,.fa-yc:before{content:"\uF23B"}.fa-optin-monster:before{content:"\uF23C"}.fa-opencart:before{content:"\uF23D"}.fa-expeditedssl:before{content:"\uF23E"}.fa-battery-4:before,.fa-battery-full:before,.fa-battery:before{content:"\uF240"}.fa-battery-3:before,.fa-battery-three-quarters:before{content:"\uF241"}.fa-battery-2:before,.fa-battery-half:before{content:"\uF242"}.fa-battery-1:before,.fa-battery-quarter:before{content:"\uF243"}.fa-battery-0:before,.fa-battery-empty:before{content:"\uF244"}.fa-mouse-pointer:before{content:"\uF245"}.fa-i-cursor:before{content:"\uF246"}.fa-object-group:before{content:"\uF247"}.fa-object-ungroup:before{content:"\uF248"}.fa-sticky-note:before{content:"\uF249"}.fa-sticky-note-o:before{content:"\uF24A"}.fa-cc-jcb:before{content:"\uF24B"}.fa-cc-diners-club:before{content:"\uF24C"}.fa-clone:before{content:"\uF24D"}.fa-balance-scale:before{content:"\uF24E"}.fa-hourglass-o:before{content:"\uF250"}.fa-hourglass-1:before,.fa-hourglass-start:before{content:"\uF251"}.fa-hourglass-2:before,.fa-hourglass-half:before{content:"\uF252"}.fa-hourglass-3:before,.fa-hourglass-end:before{content:"\uF253"}.fa-hourglass:before{content:"\uF254"}.fa-hand-grab-o:before,.fa-hand-rock-o:before{content:"\uF255"}.fa-hand-paper-o:before,.fa-hand-stop-o:before{content:"\uF256"}.fa-hand-scissors-o:before{content:"\uF257"}.fa-hand-lizard-o:before{content:"\uF258"}.fa-hand-spock-o:before{content:"\uF259"}.fa-hand-pointer-o:before{content:"\uF25A"}.fa-hand-peace-o:before{content:"\uF25B"}.fa-trademark:before{content:"\uF25C"}.fa-registered:before{content:"\uF25D"}.fa-creative-commons:before{content:"\uF25E"}.fa-gg:before{content:"\uF260"}.fa-gg-circle:before{content:"\uF261"}.fa-tripadvisor:before{content:"\uF262"}.fa-odnoklassniki:before{content:"\uF263"}.fa-odnoklassniki-square:before{content:"\uF264"}.fa-get-pocket:before{content:"\uF265"}.fa-wikipedia-w:before{content:"\uF266"}.fa-safari:before{content:"\uF267"}.fa-chrome:before{content:"\uF268"}.fa-firefox:before{content:"\uF269"}.fa-opera:before{content:"\uF26A"}.fa-internet-explorer:before{content:"\uF26B"}.fa-television:before,.fa-tv:before{content:"\uF26C"}.fa-contao:before{content:"\uF26D"}.fa-500px:before{content:"\uF26E"}.fa-amazon:before{content:"\uF270"}.fa-calendar-plus-o:before{content:"\uF271"}.fa-calendar-minus-o:before{content:"\uF272"}.fa-calendar-times-o:before{content:"\uF273"}.fa-calendar-check-o:before{content:"\uF274"}.fa-industry:before{content:"\uF275"}.fa-map-pin:before{content:"\uF276"}.fa-map-signs:before{content:"\uF277"}.fa-map-o:before{content:"\uF278"}.fa-map:before{content:"\uF279"}.fa-commenting:before{content:"\uF27A"}.fa-commenting-o:before{content:"\uF27B"}.fa-houzz:before{content:"\uF27C"}.fa-vimeo:before{content:"\uF27D"}.fa-black-tie:before{content:"\uF27E"}.fa-fonticons:before{content:"\uF280"}.fa-reddit-alien:before{content:"\uF281"}.fa-edge:before{content:"\uF282"}.fa-credit-card-alt:before{content:"\uF283"}.fa-codiepie:before{content:"\uF284"}.fa-modx:before{content:"\uF285"}.fa-fort-awesome:before{content:"\uF286"}.fa-usb:before{content:"\uF287"}.fa-product-hunt:before{content:"\uF288"}.fa-mixcloud:before{content:"\uF289"}.fa-scribd:before{content:"\uF28A"}.fa-pause-circle:before{content:"\uF28B"}.fa-pause-circle-o:before{content:"\uF28C"}.fa-stop-circle:before{content:"\uF28D"}.fa-stop-circle-o:before{content:"\uF28E"}.fa-shopping-bag:before{content:"\uF290"}.fa-shopping-basket:before{content:"\uF291"}.fa-hashtag:before{content:"\uF292"}.fa-bluetooth:before{content:"\uF293"}.fa-bluetooth-b:before{content:"\uF294"}.fa-percent:before{content:"\uF295"}.fa-gitlab:before{content:"\uF296"}.fa-wpbeginner:before{content:"\uF297"}.fa-wpforms:before{content:"\uF298"}.fa-envira:before{content:"\uF299"}.fa-universal-access:before{content:"\uF29A"}.fa-wheelchair-alt:before{content:"\uF29B"}.fa-question-circle-o:before{content:"\uF29C"}.fa-blind:before{content:"\uF29D"}.fa-audio-description:before{content:"\uF29E"}.fa-volume-control-phone:before{content:"\uF2A0"}.fa-braille:before{content:"\uF2A1"}.fa-assistive-listening-systems:before{content:"\uF2A2"}.fa-american-sign-language-interpreting:before,.fa-asl-interpreting:before{content:"\uF2A3"}.fa-deaf:before,.fa-deafness:before,.fa-hard-of-hearing:before{content:"\uF2A4"}.fa-glide:before{content:"\uF2A5"}.fa-glide-g:before{content:"\uF2A6"}.fa-sign-language:before,.fa-signing:before{content:"\uF2A7"}.fa-low-vision:before{content:"\uF2A8"}.fa-viadeo:before{content:"\uF2A9"}.fa-viadeo-square:before{content:"\uF2AA"}.fa-snapchat:before{content:"\uF2AB"}.fa-snapchat-ghost:before{content:"\uF2AC"}.fa-snapchat-square:before{content:"\uF2AD"}.fa-pied-piper:before{content:"\uF2AE"}.fa-first-order:before{content:"\uF2B0"}.fa-yoast:before{content:"\uF2B1"}.fa-themeisle:before{content:"\uF2B2"}.fa-google-plus-circle:before,.fa-google-plus-official:before{content:"\uF2B3"}.fa-fa:before,.fa-font-awesome:before{content:"\uF2B4"}.fa-handshake-o:before{content:"\uF2B5"}.fa-envelope-open:before{content:"\uF2B6"}.fa-envelope-open-o:before{content:"\uF2B7"}.fa-linode:before{content:"\uF2B8"}.fa-address-book:before{content:"\uF2B9"}.fa-address-book-o:before{content:"\uF2BA"}.fa-address-card:before,.fa-vcard:before{content:"\uF2BB"}.fa-address-card-o:before,.fa-vcard-o:before{content:"\uF2BC"}.fa-user-circle:before{content:"\uF2BD"}.fa-user-circle-o:before{content:"\uF2BE"}.fa-user-o:before{content:"\uF2C0"}.fa-id-badge:before{content:"\uF2C1"}.fa-drivers-license:before,.fa-id-card:before{content:"\uF2C2"}.fa-drivers-license-o:before,.fa-id-card-o:before{content:"\uF2C3"}.fa-quora:before{content:"\uF2C4"}.fa-free-code-camp:before{content:"\uF2C5"}.fa-telegram:before{content:"\uF2C6"}.fa-thermometer-4:before,.fa-thermometer-full:before,.fa-thermometer:before{content:"\uF2C7"}.fa-thermometer-3:before,.fa-thermometer-three-quarters:before{content:"\uF2C8"}.fa-thermometer-2:before,.fa-thermometer-half:before{content:"\uF2C9"}.fa-thermometer-1:before,.fa-thermometer-quarter:before{content:"\uF2CA"}.fa-thermometer-0:before,.fa-thermometer-empty:before{content:"\uF2CB"}.fa-shower:before{content:"\uF2CC"}.fa-bath:before,.fa-bathtub:before,.fa-s15:before{content:"\uF2CD"}.fa-podcast:before{content:"\uF2CE"}.fa-window-maximize:before{content:"\uF2D0"}.fa-window-minimize:before{content:"\uF2D1"}.fa-window-restore:before{content:"\uF2D2"}.fa-times-rectangle:before,.fa-window-close:before{content:"\uF2D3"}.fa-times-rectangle-o:before,.fa-window-close-o:before{content:"\uF2D4"}.fa-bandcamp:before{content:"\uF2D5"}.fa-grav:before{content:"\uF2D6"}.fa-etsy:before{content:"\uF2D7"}.fa-imdb:before{content:"\uF2D8"}.fa-ravelry:before{content:"\uF2D9"}.fa-eercast:before{content:"\uF2DA"}.fa-microchip:before{content:"\uF2DB"}.fa-snowflake-o:before{content:"\uF2DC"}.fa-superpowers:before{content:"\uF2DD"}.fa-wpexplorer:before{content:"\uF2DE"}.fa-meetup:before{content:"\uF2E0"}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.sr-only-focusable:active,.sr-only-focusable:focus{clip:auto;white-space:normal;position:static;width:auto;height:auto;margin:0;overflow:visible;clip:auto}.mat-badge-content{font-weight:600;font-size:12px;font-family:HelveticaNeue-Light,Helvetica Neue Light,Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif}.mat-badge-small .mat-badge-content{font-size:6px}.mat-badge-large .mat-badge-content{font-size:24px}.mat-h1,.mat-headline,.mat-typography h1{font:400 24px/32px HelveticaNeue-Light,Helvetica Neue Light,Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif;margin:0 0 16px}.mat-h2,.mat-title,.mat-typography h2{font:500 20px/32px HelveticaNeue-Light,Helvetica Neue Light,Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif;margin:0 0 16px}.mat-h3,.mat-subheading-2,.mat-typography h3{font:400 16px/28px HelveticaNeue-Light,Helvetica Neue Light,Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif;margin:0 0 16px}.mat-h4,.mat-subheading-1,.mat-typography h4{font:400 15px/24px HelveticaNeue-Light,Helvetica Neue Light,Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif;margin:0 0 16px}.mat-h5,.mat-typography h5{font:400 11.62px/20px HelveticaNeue-Light,Helvetica Neue Light,Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif;margin:0 0 12px}.mat-h6,.mat-typography h6{font:400 9.38px/20px HelveticaNeue-Light,Helvetica Neue Light,Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif;margin:0 0 12px}.mat-body-2,.mat-body-strong{font:500 14px/24px HelveticaNeue-Light,Helvetica Neue Light,Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif}.mat-body,.mat-body-1,.mat-typography{font:400 14px/20px HelveticaNeue-Light,Helvetica Neue Light,Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif}.mat-body p,.mat-body-1 p,.mat-typography p{margin:0 0 12px}.mat-caption,.mat-small{font:400 12px/20px HelveticaNeue-Light,Helvetica Neue Light,Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif}.mat-display-4,.mat-typography .mat-display-4{font:300 112px/112px HelveticaNeue-Light,Helvetica Neue Light,Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif;margin:0 0 56px;letter-spacing:-.05em}.mat-display-3,.mat-typography .mat-display-3{font:400 56px/56px HelveticaNeue-Light,Helvetica Neue Light,Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif;margin:0 0 64px;letter-spacing:-.02em}.mat-display-2,.mat-typography .mat-display-2{font:400 45px/48px HelveticaNeue-Light,Helvetica Neue Light,Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif;margin:0 0 64px;letter-spacing:-.005em}.mat-display-1,.mat-typography .mat-display-1{font:400 34px/40px HelveticaNeue-Light,Helvetica Neue Light,Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif;margin:0 0 64px}.mat-bottom-sheet-container{font:400 14px/20px HelveticaNeue-Light,Helvetica Neue Light,Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif}.mat-button,.mat-fab,.mat-flat-button,.mat-icon-button,.mat-mini-fab,.mat-raised-button,.mat-stroked-button{font-family:HelveticaNeue-Light,Helvetica Neue Light,Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif;font-size:14px;font-weight:500}.mat-button-toggle,.mat-card{font-family:HelveticaNeue-Light,Helvetica Neue Light,Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif}.mat-card-title{font-size:24px;font-weight:500}.mat-card-header .mat-card-title{font-size:20px}.mat-card-content,.mat-card-subtitle{font-size:14px}.mat-checkbox{font-family:HelveticaNeue-Light,Helvetica Neue Light,Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif}.mat-checkbox-layout .mat-checkbox-label{line-height:24px}.mat-chip{font-size:14px;font-weight:500}.mat-chip .mat-chip-remove.mat-icon,.mat-chip .mat-chip-trailing-icon.mat-icon{font-size:18px}.mat-table{font-family:HelveticaNeue-Light,Helvetica Neue Light,Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif}.mat-header-cell{font-size:12px;font-weight:500}.mat-cell,.mat-footer-cell{font-size:14px}.mat-calendar{font-family:HelveticaNeue-Light,Helvetica Neue Light,Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif}.mat-calendar-body{font-size:13px}.mat-calendar-body-label,.mat-calendar-period-button{font-size:14px;font-weight:500}.mat-calendar-table-header th{font-size:11px;font-weight:400}.mat-dialog-title{font:500 20px/32px HelveticaNeue-Light,Helvetica Neue Light,Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif}.mat-expansion-panel-header{font-family:HelveticaNeue-Light,Helvetica Neue Light,Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif;font-size:15px;font-weight:400}.mat-expansion-panel-content{font:400 14px/20px HelveticaNeue-Light,Helvetica Neue Light,Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif}.mat-form-field{font-size:inherit;font-weight:400;line-height:1.125;font-family:HelveticaNeue-Light,Helvetica Neue Light,Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif}.mat-form-field-wrapper{padding-bottom:1.34375em}.mat-form-field-prefix .mat-icon,.mat-form-field-suffix .mat-icon{font-size:150%;line-height:1.125}.mat-form-field-prefix .mat-icon-button,.mat-form-field-suffix .mat-icon-button{height:1.5em;width:1.5em}.mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field-suffix .mat-icon-button .mat-icon{height:1.125em;line-height:1.125}.mat-form-field-infix{padding:.5em 0;border-top:.84375em solid transparent}.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-1.34375em) scale(.75);transform:translateY(-1.34375em) scale(.75);width:133.33333%}.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-1.34374em) scale(.75);transform:translateY(-1.34374em) scale(.75);width:133.33334%}.mat-form-field-label-wrapper{top:-.84375em;padding-top:.84375em}.mat-form-field-label{top:1.34375em}.mat-form-field-underline{bottom:1.34375em}.mat-form-field-subscript-wrapper{font-size:75%;margin-top:.66667em;top:calc(100% - 1.79167em)}.mat-form-field-appearance-legacy .mat-form-field-wrapper{padding-bottom:1.25em}.mat-form-field-appearance-legacy .mat-form-field-infix{padding:.4375em 0}.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.001px);transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.001px);-ms-transform:translateY(-1.28125em) scale(.75);width:133.33333%}.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00101px);transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00101px);-ms-transform:translateY(-1.28124em) scale(.75);width:133.33334%}.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00102px);transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00102px);-ms-transform:translateY(-1.28123em) scale(.75);width:133.33335%}.mat-form-field-appearance-legacy .mat-form-field-label{top:1.28125em}.mat-form-field-appearance-legacy .mat-form-field-subscript-wrapper{margin-top:.54167em;top:calc(100% - 1.66667em)}@media print{.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-1.28122em) scale(.75);transform:translateY(-1.28122em) scale(.75)}.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-1.28121em) scale(.75);transform:translateY(-1.28121em) scale(.75)}.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-1.2812em) scale(.75);transform:translateY(-1.2812em) scale(.75)}}.mat-form-field-appearance-fill .mat-form-field-infix{padding:.25em 0 .75em}.mat-form-field-appearance-fill .mat-form-field-label{top:1.09375em;margin-top:-.5em}.mat-form-field-appearance-fill.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-appearance-fill.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-.59375em) scale(.75);transform:translateY(-.59375em) scale(.75);width:133.33333%}.mat-form-field-appearance-fill.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-.59374em) scale(.75);transform:translateY(-.59374em) scale(.75);width:133.33334%}.mat-form-field-appearance-outline .mat-form-field-infix{padding:1em 0}.mat-form-field-appearance-outline .mat-form-field-label{top:1.84375em;margin-top:-.25em}.mat-form-field-appearance-outline.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-1.59375em) scale(.75);transform:translateY(-1.59375em) scale(.75);width:133.33333%}.mat-form-field-appearance-outline.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-1.59374em) scale(.75);transform:translateY(-1.59374em) scale(.75);width:133.33334%}.mat-grid-tile-footer,.mat-grid-tile-header{font-size:14px}.mat-grid-tile-footer .mat-line,.mat-grid-tile-header .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-footer .mat-line:nth-child(n+2),.mat-grid-tile-header .mat-line:nth-child(n+2){font-size:12px}input.mat-input-element{margin-top:-.0625em}.mat-menu-item{font-family:HelveticaNeue-Light,Helvetica Neue Light,Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif;font-size:14px;font-weight:400}.mat-paginator,.mat-paginator-page-size .mat-select-trigger{font-family:HelveticaNeue-Light,Helvetica Neue Light,Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif;font-size:12px}.mat-radio-button,.mat-select{font-family:HelveticaNeue-Light,Helvetica Neue Light,Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif}.mat-select-trigger{height:1.125em}.mat-slide-toggle-content{font-family:HelveticaNeue-Light,Helvetica Neue Light,Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif}.mat-slider-thumb-label-text{font-family:HelveticaNeue-Light,Helvetica Neue Light,Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif;font-size:12px;font-weight:500}.mat-stepper-horizontal,.mat-stepper-vertical{font-family:HelveticaNeue-Light,Helvetica Neue Light,Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif}.mat-step-label{font-size:14px;font-weight:400}.mat-step-sub-label-error{font-weight:400}.mat-step-label-error{font-size:14px}.mat-step-label-selected{font-size:14px;font-weight:500}.mat-tab-group{font-family:HelveticaNeue-Light,Helvetica Neue Light,Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif}.mat-tab-label,.mat-tab-link{font-family:HelveticaNeue-Light,Helvetica Neue Light,Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif;font-size:14px;font-weight:500}.mat-toolbar,.mat-toolbar h1,.mat-toolbar h2,.mat-toolbar h3,.mat-toolbar h4,.mat-toolbar h5,.mat-toolbar h6{font:500 20px/32px HelveticaNeue-Light,Helvetica Neue Light,Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif;margin:0}.mat-tooltip{font-family:HelveticaNeue-Light,Helvetica Neue Light,Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif;font-size:10px;padding-top:6px;padding-bottom:6px}.mat-tooltip-handset{font-size:14px;padding-top:8px;padding-bottom:8px}.mat-list-item,.mat-list-option{font-family:HelveticaNeue-Light,Helvetica Neue Light,Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif}.mat-list-base .mat-list-item{font-size:16px}.mat-list-base .mat-list-item .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list-base .mat-list-item .mat-line:nth-child(n+2){font-size:14px}.mat-list-base .mat-list-option{font-size:16px}.mat-list-base .mat-list-option .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list-base .mat-list-option .mat-line:nth-child(n+2){font-size:14px}.mat-list-base[dense] .mat-list-item{font-size:12px}.mat-list-base[dense] .mat-list-item .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list-base[dense] .mat-list-item .mat-line:nth-child(n+2),.mat-list-base[dense] .mat-list-option{font-size:12px}.mat-list-base[dense] .mat-list-option .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list-base[dense] .mat-list-option .mat-line:nth-child(n+2){font-size:12px}.mat-list-base[dense] .mat-subheader{font-family:HelveticaNeue-Light,Helvetica Neue Light,Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif;font-size:12px;font-weight:500}.mat-option{font-family:HelveticaNeue-Light,Helvetica Neue Light,Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif;font-size:16px;color:rgba(0,0,0,.87)}.mat-optgroup-label{font:500 14px/24px HelveticaNeue-Light,Helvetica Neue Light,Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif;color:rgba(0,0,0,.54)}.mat-simple-snackbar{font-family:HelveticaNeue-Light,Helvetica Neue Light,Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif;font-size:14px}.mat-simple-snackbar-action{line-height:1;font-family:inherit;font-size:inherit;font-weight:500}.mat-ripple{overflow:hidden;position:relative}.mat-ripple.mat-ripple-unbounded{overflow:visible}.mat-ripple-element{position:absolute;border-radius:50%;pointer-events:none;transition:opacity,transform cubic-bezier(0,0,.2,1),-webkit-transform cubic-bezier(0,0,.2,1);-webkit-transform:scale(0);transform:scale(0);background-color:rgba(0,0,0,.1)}.cdk-visually-hidden{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;outline:0;-webkit-appearance:none;-moz-appearance:none}@media screen and (-ms-high-contrast:active){.mat-ripple-element{display:none}.mat-badge-small .mat-badge-content{outline:solid 1px;border-radius:0}}@-webkit-keyframes cdk-text-field-autofill-start{/*!*/}@keyframes cdk-text-field-autofill-start{/*!*/}@-webkit-keyframes cdk-text-field-autofill-end{/*!*/}@keyframes cdk-text-field-autofill-end{/*!*/}.cdk-text-field-autofill-monitored:-webkit-autofill{-webkit-animation-name:cdk-text-field-autofill-start;animation-name:cdk-text-field-autofill-start}.cdk-text-field-autofill-monitored:not(:-webkit-autofill){-webkit-animation-name:cdk-text-field-autofill-end;animation-name:cdk-text-field-autofill-end}textarea.cdk-textarea-autosize{resize:none}textarea.cdk-textarea-autosize-measuring{height:auto!important;overflow:hidden!important;padding:2px 0!important;box-sizing:content-box!important}.mat-option.mat-selected:not(.mat-option-multiple):not(.mat-option-disabled),.mat-option:focus:not(.mat-option-disabled),.mat-option:hover:not(.mat-option-disabled){background:rgba(0,0,0,.04)}.mat-option.mat-active{background:rgba(0,0,0,.04);color:rgba(0,0,0,.87)}.mat-option.mat-option-disabled{color:rgba(0,0,0,.38)}.mat-primary .mat-option.mat-selected:not(.mat-option-disabled){color:#2f7ed8}.mat-accent .mat-option.mat-selected:not(.mat-option-disabled){color:#bbd0ff}.mat-warn .mat-option.mat-selected:not(.mat-option-disabled){color:#f44336}.mat-optgroup-disabled .mat-optgroup-label{color:rgba(0,0,0,.38)}.mat-pseudo-checkbox{color:rgba(0,0,0,.54)}.mat-pseudo-checkbox::after{color:#fafafa}.mat-accent .mat-pseudo-checkbox-checked,.mat-accent .mat-pseudo-checkbox-indeterminate,.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox-indeterminate{background:#bbd0ff}.mat-primary .mat-pseudo-checkbox-checked,.mat-primary .mat-pseudo-checkbox-indeterminate{background:#2f7ed8}.mat-warn .mat-pseudo-checkbox-checked,.mat-warn .mat-pseudo-checkbox-indeterminate{background:#f44336}.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled{background:#b0b0b0}.mat-elevation-z0{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.mat-elevation-z1{box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)}.mat-elevation-z2{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.mat-elevation-z3{box-shadow:0 3px 3px -2px rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12)}.mat-elevation-z4{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.mat-elevation-z5{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 5px 8px 0 rgba(0,0,0,.14),0 1px 14px 0 rgba(0,0,0,.12)}.mat-elevation-z6{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.mat-elevation-z7{box-shadow:0 4px 5px -2px rgba(0,0,0,.2),0 7px 10px 1px rgba(0,0,0,.14),0 2px 16px 1px rgba(0,0,0,.12)}.mat-elevation-z8{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.mat-elevation-z9{box-shadow:0 5px 6px -3px rgba(0,0,0,.2),0 9px 12px 1px rgba(0,0,0,.14),0 3px 16px 2px rgba(0,0,0,.12)}.mat-elevation-z10{box-shadow:0 6px 6px -3px rgba(0,0,0,.2),0 10px 14px 1px rgba(0,0,0,.14),0 4px 18px 3px rgba(0,0,0,.12)}.mat-elevation-z11{box-shadow:0 6px 7px -4px rgba(0,0,0,.2),0 11px 15px 1px rgba(0,0,0,.14),0 4px 20px 3px rgba(0,0,0,.12)}.mat-elevation-z12{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)}.mat-elevation-z13{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 13px 19px 2px rgba(0,0,0,.14),0 5px 24px 4px rgba(0,0,0,.12)}.mat-elevation-z14{box-shadow:0 7px 9px -4px rgba(0,0,0,.2),0 14px 21px 2px rgba(0,0,0,.14),0 5px 26px 4px rgba(0,0,0,.12)}.mat-elevation-z15{box-shadow:0 8px 9px -5px rgba(0,0,0,.2),0 15px 22px 2px rgba(0,0,0,.14),0 6px 28px 5px rgba(0,0,0,.12)}.mat-elevation-z16{box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12)}.mat-elevation-z17{box-shadow:0 8px 11px -5px rgba(0,0,0,.2),0 17px 26px 2px rgba(0,0,0,.14),0 6px 32px 5px rgba(0,0,0,.12)}.mat-elevation-z18{box-shadow:0 9px 11px -5px rgba(0,0,0,.2),0 18px 28px 2px rgba(0,0,0,.14),0 7px 34px 6px rgba(0,0,0,.12)}.mat-elevation-z19{box-shadow:0 9px 12px -6px rgba(0,0,0,.2),0 19px 29px 2px rgba(0,0,0,.14),0 7px 36px 6px rgba(0,0,0,.12)}.mat-elevation-z20{box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 20px 31px 3px rgba(0,0,0,.14),0 8px 38px 7px rgba(0,0,0,.12)}.mat-elevation-z21{box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 21px 33px 3px rgba(0,0,0,.14),0 8px 40px 7px rgba(0,0,0,.12)}.mat-elevation-z22{box-shadow:0 10px 14px -6px rgba(0,0,0,.2),0 22px 35px 3px rgba(0,0,0,.14),0 8px 42px 7px rgba(0,0,0,.12)}.mat-elevation-z23{box-shadow:0 11px 14px -7px rgba(0,0,0,.2),0 23px 36px 3px rgba(0,0,0,.14),0 9px 44px 8px rgba(0,0,0,.12)}.mat-elevation-z24{box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}.mat-app-background{background-color:#fafafa;color:rgba(0,0,0,.87)}.mat-theme-loaded-marker{display:none}.mat-autocomplete-panel{background:#fff;color:rgba(0,0,0,.87)}.mat-autocomplete-panel:not([class*=mat-elevation-z]){box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover){background:#fff}.mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover):not(.mat-option-disabled){color:rgba(0,0,0,.87)}.mat-badge-accent .mat-badge-content{background:#bbd0ff;color:#000}.mat-badge-warn .mat-badge-content{color:#fff;background:#f44336}.mat-badge{position:relative}.mat-badge-hidden .mat-badge-content{display:none}.mat-badge-disabled .mat-badge-content{background:#b9b9b9;color:rgba(0,0,0,.38)}.mat-badge-content{color:#fff;background:#2f7ed8;position:absolute;text-align:center;display:inline-block;border-radius:50%;transition:transform .2s ease-in-out,-webkit-transform .2s ease-in-out;-webkit-transform:scale(.6);transform:scale(.6);overflow:hidden;white-space:nowrap;text-overflow:ellipsis;pointer-events:none}.mat-badge-content.mat-badge-active{-webkit-transform:none;transform:none}.mat-badge-small .mat-badge-content{width:16px;height:16px;line-height:16px}.mat-badge-small.mat-badge-above .mat-badge-content{top:-8px}.mat-badge-small.mat-badge-below .mat-badge-content{bottom:-8px}.mat-badge-small.mat-badge-before .mat-badge-content{left:-16px}[dir=rtl] .mat-badge-small.mat-badge-before .mat-badge-content{left:auto;right:-16px}.mat-badge-small.mat-badge-after .mat-badge-content{right:-16px}[dir=rtl] .mat-badge-small.mat-badge-after .mat-badge-content{right:auto;left:-16px}.mat-badge-small.mat-badge-overlap.mat-badge-before .mat-badge-content{left:-8px}[dir=rtl] .mat-badge-small.mat-badge-overlap.mat-badge-before .mat-badge-content{left:auto;right:-8px}.mat-badge-small.mat-badge-overlap.mat-badge-after .mat-badge-content{right:-8px}[dir=rtl] .mat-badge-small.mat-badge-overlap.mat-badge-after .mat-badge-content{right:auto;left:-8px}.mat-badge-medium .mat-badge-content{width:22px;height:22px;line-height:22px}.mat-badge-medium.mat-badge-above .mat-badge-content{top:-11px}.mat-badge-medium.mat-badge-below .mat-badge-content{bottom:-11px}.mat-badge-medium.mat-badge-before .mat-badge-content{left:-22px}[dir=rtl] .mat-badge-medium.mat-badge-before .mat-badge-content{left:auto;right:-22px}.mat-badge-medium.mat-badge-after .mat-badge-content{right:-22px}[dir=rtl] .mat-badge-medium.mat-badge-after .mat-badge-content{right:auto;left:-22px}.mat-badge-medium.mat-badge-overlap.mat-badge-before .mat-badge-content{left:-11px}[dir=rtl] .mat-badge-medium.mat-badge-overlap.mat-badge-before .mat-badge-content{left:auto;right:-11px}.mat-badge-medium.mat-badge-overlap.mat-badge-after .mat-badge-content{right:-11px}[dir=rtl] .mat-badge-medium.mat-badge-overlap.mat-badge-after .mat-badge-content{right:auto;left:-11px}.mat-badge-large .mat-badge-content{width:28px;height:28px;line-height:28px}@media screen and (-ms-high-contrast:active){.mat-badge-large .mat-badge-content,.mat-badge-medium .mat-badge-content{outline:solid 1px;border-radius:0}.mat-checkbox-disabled{opacity:.5}}.mat-badge-large.mat-badge-above .mat-badge-content{top:-14px}.mat-badge-large.mat-badge-below .mat-badge-content{bottom:-14px}.mat-badge-large.mat-badge-before .mat-badge-content{left:-28px}[dir=rtl] .mat-badge-large.mat-badge-before .mat-badge-content{left:auto;right:-28px}.mat-badge-large.mat-badge-after .mat-badge-content{right:-28px}[dir=rtl] .mat-badge-large.mat-badge-after .mat-badge-content{right:auto;left:-28px}.mat-badge-large.mat-badge-overlap.mat-badge-before .mat-badge-content{left:-14px}[dir=rtl] .mat-badge-large.mat-badge-overlap.mat-badge-before .mat-badge-content{left:auto;right:-14px}.mat-badge-large.mat-badge-overlap.mat-badge-after .mat-badge-content{right:-14px}[dir=rtl] .mat-badge-large.mat-badge-overlap.mat-badge-after .mat-badge-content{right:auto;left:-14px}.mat-bottom-sheet-container{box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12);background:#fff;color:rgba(0,0,0,.87)}.mat-button,.mat-icon-button,.mat-stroked-button{color:inherit;background:0 0}.mat-button.mat-primary,.mat-icon-button.mat-primary,.mat-stroked-button.mat-primary{color:#2f7ed8}.mat-button.mat-accent,.mat-icon-button.mat-accent,.mat-stroked-button.mat-accent{color:#bbd0ff}.mat-button.mat-warn,.mat-icon-button.mat-warn,.mat-stroked-button.mat-warn{color:#f44336}.mat-button.mat-accent[disabled],.mat-button.mat-primary[disabled],.mat-button.mat-warn[disabled],.mat-button[disabled][disabled],.mat-icon-button.mat-accent[disabled],.mat-icon-button.mat-primary[disabled],.mat-icon-button.mat-warn[disabled],.mat-icon-button[disabled][disabled],.mat-stroked-button.mat-accent[disabled],.mat-stroked-button.mat-primary[disabled],.mat-stroked-button.mat-warn[disabled],.mat-stroked-button[disabled][disabled]{color:rgba(0,0,0,.26)}.mat-button.mat-primary .mat-button-focus-overlay,.mat-icon-button.mat-primary .mat-button-focus-overlay,.mat-stroked-button.mat-primary .mat-button-focus-overlay{background-color:#2f7ed8}.mat-button.mat-accent .mat-button-focus-overlay,.mat-icon-button.mat-accent .mat-button-focus-overlay,.mat-stroked-button.mat-accent .mat-button-focus-overlay{background-color:#bbd0ff}.mat-button.mat-warn .mat-button-focus-overlay,.mat-icon-button.mat-warn .mat-button-focus-overlay,.mat-stroked-button.mat-warn .mat-button-focus-overlay{background-color:#f44336}.mat-button[disabled] .mat-button-focus-overlay,.mat-icon-button[disabled] .mat-button-focus-overlay,.mat-stroked-button[disabled] .mat-button-focus-overlay{background-color:transparent}.mat-button .mat-ripple-element,.mat-icon-button .mat-ripple-element,.mat-stroked-button .mat-ripple-element{opacity:.1;background-color:currentColor}.mat-button-focus-overlay{background:#000}.mat-stroked-button:not([disabled]){border-color:rgba(0,0,0,.12)}.mat-fab,.mat-flat-button,.mat-mini-fab,.mat-raised-button{color:rgba(0,0,0,.87);background-color:#fff}.mat-fab.mat-primary,.mat-flat-button.mat-primary,.mat-mini-fab.mat-primary,.mat-raised-button.mat-primary{color:#fff;background-color:#2f7ed8}.mat-fab.mat-accent,.mat-flat-button.mat-accent,.mat-mini-fab.mat-accent,.mat-raised-button.mat-accent{color:#000;background-color:#bbd0ff}.mat-fab.mat-warn,.mat-flat-button.mat-warn,.mat-mini-fab.mat-warn,.mat-raised-button.mat-warn{color:#fff;background-color:#f44336}.mat-fab.mat-accent[disabled],.mat-fab.mat-primary[disabled],.mat-fab.mat-warn[disabled],.mat-fab[disabled][disabled],.mat-flat-button.mat-accent[disabled],.mat-flat-button.mat-primary[disabled],.mat-flat-button.mat-warn[disabled],.mat-flat-button[disabled][disabled],.mat-mini-fab.mat-accent[disabled],.mat-mini-fab.mat-primary[disabled],.mat-mini-fab.mat-warn[disabled],.mat-mini-fab[disabled][disabled],.mat-raised-button.mat-accent[disabled],.mat-raised-button.mat-primary[disabled],.mat-raised-button.mat-warn[disabled],.mat-raised-button[disabled][disabled]{color:rgba(0,0,0,.26);background-color:rgba(0,0,0,.12)}.mat-fab.mat-primary .mat-ripple-element,.mat-flat-button.mat-primary .mat-ripple-element,.mat-mini-fab.mat-primary .mat-ripple-element,.mat-raised-button.mat-primary .mat-ripple-element{background-color:rgba(255,255,255,.1)}.mat-fab.mat-accent .mat-ripple-element,.mat-flat-button.mat-accent .mat-ripple-element,.mat-mini-fab.mat-accent .mat-ripple-element,.mat-raised-button.mat-accent .mat-ripple-element{background-color:rgba(0,0,0,.1)}.mat-fab.mat-warn .mat-ripple-element,.mat-flat-button.mat-warn .mat-ripple-element,.mat-mini-fab.mat-warn .mat-ripple-element,.mat-raised-button.mat-warn .mat-ripple-element{background-color:rgba(255,255,255,.1)}.mat-flat-button:not([class*=mat-elevation-z]),.mat-stroked-button:not([class*=mat-elevation-z]){box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.mat-raised-button:not([class*=mat-elevation-z]){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.mat-raised-button:not([disabled]):active:not([class*=mat-elevation-z]){box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.mat-raised-button[disabled]:not([class*=mat-elevation-z]){box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.mat-fab:not([class*=mat-elevation-z]),.mat-mini-fab:not([class*=mat-elevation-z]){box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.mat-fab:not([disabled]):active:not([class*=mat-elevation-z]),.mat-mini-fab:not([disabled]):active:not([class*=mat-elevation-z]){box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)}.mat-fab[disabled]:not([class*=mat-elevation-z]),.mat-mini-fab[disabled]:not([class*=mat-elevation-z]){box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.mat-button-toggle-group,.mat-button-toggle-standalone{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.mat-button-toggle-group-appearance-standard,.mat-button-toggle-standalone.mat-button-toggle-appearance-standard{box-shadow:none;border:1px solid rgba(0,0,0,.12)}.mat-button-toggle{color:rgba(0,0,0,.38)}.mat-button-toggle .mat-button-toggle-focus-overlay{background-color:rgba(0,0,0,.12)}.mat-button-toggle-appearance-standard{color:rgba(0,0,0,.87);background:#fff}.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay{background-color:#000}.mat-button-toggle-group-appearance-standard .mat-button-toggle+.mat-button-toggle{border-left:1px solid rgba(0,0,0,.12)}[dir=rtl] .mat-button-toggle-group-appearance-standard .mat-button-toggle+.mat-button-toggle{border-left:none;border-right:1px solid rgba(0,0,0,.12)}.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle+.mat-button-toggle{border-left:none;border-right:none;border-top:1px solid rgba(0,0,0,.12)}.mat-button-toggle-checked{background-color:#e0e0e0;color:rgba(0,0,0,.54)}.mat-button-toggle-checked.mat-button-toggle-appearance-standard{color:rgba(0,0,0,.87)}.mat-button-toggle-disabled{color:rgba(0,0,0,.26);background-color:#eee}.mat-button-toggle-disabled.mat-button-toggle-appearance-standard{background:#fff}.mat-button-toggle-disabled.mat-button-toggle-checked{background-color:#bdbdbd}.mat-card{background:#fff;color:rgba(0,0,0,.87)}.mat-card:not([class*=mat-elevation-z]){box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)}.mat-card.mat-card-flat:not([class*=mat-elevation-z]){box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.mat-card-subtitle{color:rgba(0,0,0,.54)}.mat-checkbox-frame{border-color:rgba(0,0,0,.54)}.mat-checkbox-checkmark{fill:#fafafa}.mat-checkbox-checkmark-path{stroke:#fafafa!important}@media screen and (-ms-high-contrast:black-on-white){.mat-checkbox-checkmark-path{stroke:#000!important}}.mat-checkbox-mixedmark{background-color:#fafafa}.mat-checkbox-checked.mat-primary .mat-checkbox-background,.mat-checkbox-indeterminate.mat-primary .mat-checkbox-background{background-color:#2f7ed8}.mat-checkbox-checked.mat-accent .mat-checkbox-background,.mat-checkbox-indeterminate.mat-accent .mat-checkbox-background{background-color:#bbd0ff}.mat-checkbox-checked.mat-warn .mat-checkbox-background,.mat-checkbox-indeterminate.mat-warn .mat-checkbox-background{background-color:#f44336}.mat-checkbox-disabled.mat-checkbox-checked:not(.mat-checkbox-indeterminate) .mat-checkbox-background{background-color:#b0b0b0}.mat-checkbox-disabled:not(.mat-checkbox-checked) .mat-checkbox-frame{border-color:#b0b0b0}.mat-checkbox-disabled .mat-checkbox-label{color:rgba(0,0,0,.54)}@media screen and (-ms-high-contrast:active){.mat-checkbox-background{background:0 0}}.mat-checkbox:not(.mat-checkbox-disabled).mat-primary .mat-checkbox-ripple .mat-ripple-element{background-color:#2f7ed8}.mat-checkbox:not(.mat-checkbox-disabled).mat-accent .mat-checkbox-ripple .mat-ripple-element{background-color:#bbd0ff}.mat-checkbox:not(.mat-checkbox-disabled).mat-warn .mat-checkbox-ripple .mat-ripple-element{background-color:#f44336}.mat-chip.mat-standard-chip{background-color:#e0e0e0;color:rgba(0,0,0,.87)}.mat-chip.mat-standard-chip .mat-chip-remove{color:rgba(0,0,0,.87);opacity:.4}.mat-chip.mat-standard-chip:not(.mat-chip-disabled):active{box-shadow:0 3px 3px -2px rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12)}.mat-chip.mat-standard-chip:not(.mat-chip-disabled) .mat-chip-remove:hover{opacity:.54}.mat-chip.mat-standard-chip.mat-chip-disabled{opacity:.4}.mat-chip.mat-standard-chip::after{background:#000}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary{background-color:#2f7ed8;color:#fff}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary .mat-chip-remove{color:#fff;opacity:.4}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary .mat-ripple-element{background:rgba(255,255,255,.1)}.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn{background-color:#f44336;color:#fff}.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn .mat-chip-remove{color:#fff;opacity:.4}.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn .mat-ripple-element{background:rgba(255,255,255,.1)}.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent{background-color:#bbd0ff;color:#000}.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent .mat-chip-remove{color:#000;opacity:.4}.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent .mat-ripple-element{background:rgba(0,0,0,.1)}.mat-table{background:#fff}.mat-table tbody,.mat-table tfoot,.mat-table thead,.mat-table-sticky,[mat-footer-row],[mat-header-row],[mat-row],mat-footer-row,mat-header-row,mat-row{background:inherit}mat-footer-row,mat-header-row,mat-row,td.mat-cell,td.mat-footer-cell,th.mat-header-cell{border-bottom-color:rgba(0,0,0,.12)}.mat-header-cell{color:rgba(0,0,0,.54)}.mat-cell,.mat-footer-cell{color:rgba(0,0,0,.87)}.mat-calendar-arrow{border-top-color:rgba(0,0,0,.54)}.mat-datepicker-content .mat-calendar-next-button,.mat-datepicker-content .mat-calendar-previous-button,.mat-datepicker-toggle{color:rgba(0,0,0,.54)}.mat-calendar-table-header{color:rgba(0,0,0,.38)}.mat-calendar-table-header-divider::after{background:rgba(0,0,0,.12)}.mat-calendar-body-label{color:rgba(0,0,0,.54)}.mat-calendar-body-cell-content{color:rgba(0,0,0,.87);border-color:transparent}.mat-calendar-body-disabled>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected){color:rgba(0,0,0,.38)}.cdk-keyboard-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected),.cdk-program-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected),.mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected){background-color:rgba(0,0,0,.04)}.mat-calendar-body-today:not(.mat-calendar-body-selected){border-color:rgba(0,0,0,.38)}.mat-calendar-body-disabled>.mat-calendar-body-today:not(.mat-calendar-body-selected){border-color:rgba(0,0,0,.18)}.mat-calendar-body-selected{background-color:#2f7ed8;color:#fff}.mat-calendar-body-disabled>.mat-calendar-body-selected{background-color:rgba(47,126,216,.4)}.mat-calendar-body-today.mat-calendar-body-selected{box-shadow:inset 0 0 0 1px #fff}.mat-datepicker-content{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12);background-color:#fff;color:rgba(0,0,0,.87)}.mat-datepicker-content.mat-accent .mat-calendar-body-selected{background-color:#bbd0ff;color:#000}.mat-datepicker-content.mat-accent .mat-calendar-body-disabled>.mat-calendar-body-selected{background-color:rgba(187,208,255,.4)}.mat-datepicker-content.mat-accent .mat-calendar-body-today.mat-calendar-body-selected{box-shadow:inset 0 0 0 1px #000}.mat-datepicker-content.mat-warn .mat-calendar-body-selected{background-color:#f44336;color:#fff}.mat-datepicker-content.mat-warn .mat-calendar-body-disabled>.mat-calendar-body-selected{background-color:rgba(244,67,54,.4)}.mat-datepicker-content.mat-warn .mat-calendar-body-today.mat-calendar-body-selected{box-shadow:inset 0 0 0 1px #fff}.mat-datepicker-content-touch{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.mat-datepicker-toggle-active{color:#2f7ed8}.mat-datepicker-toggle-active.mat-accent{color:#bbd0ff}.mat-datepicker-toggle-active.mat-warn{color:#f44336}.mat-dialog-container{box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12);background:#fff;color:rgba(0,0,0,.87)}.mat-divider{border-top-color:rgba(0,0,0,.12)}.mat-divider-vertical{border-right-color:rgba(0,0,0,.12)}.mat-expansion-panel{background:#fff;color:rgba(0,0,0,.87)}.mat-expansion-panel:not([class*=mat-elevation-z]){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.mat-action-row{border-top-color:rgba(0,0,0,.12)}.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused,.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused,.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:rgba(0,0,0,.04)}@media (hover:none){.mat-expansion-panel:not(.mat-expanded):not([aria-disabled=true]) .mat-expansion-panel-header:hover{background:#fff}}.mat-expansion-panel-header-title{color:rgba(0,0,0,.87)}.mat-expansion-indicator::after,.mat-expansion-panel-header-description{color:rgba(0,0,0,.54)}.mat-expansion-panel-header[aria-disabled=true]{color:rgba(0,0,0,.26)}.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description,.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title{color:inherit}.mat-form-field-label,.mat-hint{color:rgba(0,0,0,.6)}.mat-form-field.mat-focused .mat-form-field-label{color:#2f7ed8}.mat-form-field.mat-focused .mat-form-field-label.mat-accent{color:#bbd0ff}.mat-form-field.mat-focused .mat-form-field-label.mat-warn{color:#f44336}.mat-focused .mat-form-field-required-marker{color:#bbd0ff}.mat-form-field-ripple{background-color:rgba(0,0,0,.87)}.mat-form-field.mat-focused .mat-form-field-ripple{background-color:#2f7ed8}.mat-form-field.mat-focused .mat-form-field-ripple.mat-accent{background-color:#bbd0ff}.mat-form-field.mat-focused .mat-form-field-ripple.mat-warn{background-color:#f44336}.mat-form-field.mat-form-field-invalid .mat-form-field-label,.mat-form-field.mat-form-field-invalid .mat-form-field-label .mat-form-field-required-marker,.mat-form-field.mat-form-field-invalid .mat-form-field-label.mat-accent{color:#f44336}.mat-form-field.mat-form-field-invalid .mat-form-field-ripple,.mat-form-field.mat-form-field-invalid .mat-form-field-ripple.mat-accent{background-color:#f44336}.mat-error{color:#f44336}.mat-form-field-appearance-legacy .mat-form-field-label,.mat-form-field-appearance-legacy .mat-hint{color:rgba(0,0,0,.54)}.mat-form-field-appearance-legacy .mat-form-field-underline{bottom:1.25em;background-color:rgba(0,0,0,.42)}.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{background-image:linear-gradient(to right,rgba(0,0,0,.42) 0,rgba(0,0,0,.42) 33%,transparent 0);background-size:4px 100%;background-repeat:repeat-x}.mat-form-field-appearance-standard .mat-form-field-underline{background-color:rgba(0,0,0,.42)}.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{background-image:linear-gradient(to right,rgba(0,0,0,.42) 0,rgba(0,0,0,.42) 33%,transparent 0);background-size:4px 100%;background-repeat:repeat-x}.mat-form-field-appearance-fill .mat-form-field-flex{background-color:rgba(0,0,0,.04)}.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-flex{background-color:rgba(0,0,0,.02)}.mat-form-field-appearance-fill .mat-form-field-underline::before{background-color:rgba(0,0,0,.42)}.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-label{color:rgba(0,0,0,.38)}.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-underline::before{background-color:transparent}.mat-form-field-appearance-outline .mat-form-field-outline{color:rgba(0,0,0,.12)}.mat-form-field-appearance-outline .mat-form-field-outline-thick{color:rgba(0,0,0,.87)}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick{color:#2f7ed8}.mat-form-field-appearance-outline.mat-focused.mat-accent .mat-form-field-outline-thick{color:#bbd0ff}.mat-form-field-appearance-outline.mat-focused.mat-warn .mat-form-field-outline-thick,.mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick{color:#f44336}.mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-label{color:rgba(0,0,0,.38)}.mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-outline{color:rgba(0,0,0,.06)}.mat-icon.mat-primary{color:#2f7ed8}.mat-icon.mat-accent{color:#bbd0ff}.mat-icon.mat-warn{color:#f44336}.mat-form-field-type-mat-native-select .mat-form-field-infix::after{color:rgba(0,0,0,.54)}.mat-form-field-type-mat-native-select.mat-form-field-disabled .mat-form-field-infix::after,.mat-input-element:disabled{color:rgba(0,0,0,.38)}.mat-input-element{caret-color:#2f7ed8}.mat-input-element::-ms-input-placeholder{color:rgba(0,0,0,.42)}.mat-input-element::placeholder{color:rgba(0,0,0,.42)}.mat-input-element::-moz-placeholder{color:rgba(0,0,0,.42)}.mat-input-element::-webkit-input-placeholder{color:rgba(0,0,0,.42)}.mat-input-element:-ms-input-placeholder{color:rgba(0,0,0,.42)}.mat-accent .mat-input-element{caret-color:#bbd0ff}.mat-form-field-invalid .mat-input-element,.mat-warn .mat-input-element{caret-color:#f44336}.mat-form-field-type-mat-native-select.mat-form-field-invalid .mat-form-field-infix::after{color:#f44336}.mat-list-base .mat-list-item,.mat-list-base .mat-list-option{color:rgba(0,0,0,.87)}.mat-list-base .mat-subheader{font-family:HelveticaNeue-Light,Helvetica Neue Light,Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif;font-size:14px;font-weight:500;color:rgba(0,0,0,.54)}.mat-list-item-disabled{background-color:#eee}.mat-list-option:focus,.mat-list-option:hover,.mat-nav-list .mat-list-item:focus,.mat-nav-list .mat-list-item:hover{background:rgba(0,0,0,.04)}.mat-menu-panel{background:#fff}.mat-menu-panel:not([class*=mat-elevation-z]){box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.mat-menu-item{background:0 0;color:rgba(0,0,0,.87)}.mat-menu-item[disabled],.mat-menu-item[disabled]::after{color:rgba(0,0,0,.38)}.mat-menu-item .mat-icon-no-color,.mat-menu-item-submenu-trigger::after{color:rgba(0,0,0,.54)}.mat-menu-item-highlighted:not([disabled]),.mat-menu-item.cdk-keyboard-focused:not([disabled]),.mat-menu-item.cdk-program-focused:not([disabled]),.mat-menu-item:hover:not([disabled]){background:rgba(0,0,0,.04)}.mat-paginator{background:#fff}.mat-paginator,.mat-paginator-page-size .mat-select-trigger{color:rgba(0,0,0,.54)}.mat-paginator-decrement,.mat-paginator-increment{border-top:2px solid rgba(0,0,0,.54);border-right:2px solid rgba(0,0,0,.54)}.mat-paginator-first,.mat-paginator-last{border-top:2px solid rgba(0,0,0,.54)}.mat-icon-button[disabled] .mat-paginator-decrement,.mat-icon-button[disabled] .mat-paginator-first,.mat-icon-button[disabled] .mat-paginator-increment,.mat-icon-button[disabled] .mat-paginator-last{border-color:rgba(0,0,0,.38)}.mat-progress-bar-background{fill:#c1d8f3}.mat-progress-bar-buffer{background-color:#c1d8f3}.mat-progress-bar-fill::after{background-color:#2f7ed8}.mat-progress-bar.mat-accent .mat-progress-bar-background{fill:#eef3ff}.mat-progress-bar.mat-accent .mat-progress-bar-buffer{background-color:#eef3ff}.mat-progress-bar.mat-accent .mat-progress-bar-fill::after{background-color:#bbd0ff}.mat-progress-bar.mat-warn .mat-progress-bar-background{fill:#ffcdd2}.mat-progress-bar.mat-warn .mat-progress-bar-buffer{background-color:#ffcdd2}.mat-progress-bar.mat-warn .mat-progress-bar-fill::after{background-color:#f44336}.mat-progress-spinner circle,.mat-spinner circle{stroke:#2f7ed8}.mat-progress-spinner.mat-accent circle,.mat-spinner.mat-accent circle{stroke:#bbd0ff}.mat-progress-spinner.mat-warn circle,.mat-spinner.mat-warn circle{stroke:#f44336}.mat-radio-outer-circle{border-color:rgba(0,0,0,.54)}.mat-radio-button.mat-primary.mat-radio-checked .mat-radio-outer-circle{border-color:#2f7ed8}.mat-radio-button.mat-primary .mat-radio-inner-circle,.mat-radio-button.mat-primary .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple),.mat-radio-button.mat-primary.mat-radio-checked .mat-radio-persistent-ripple,.mat-radio-button.mat-primary:active .mat-radio-persistent-ripple{background-color:#2f7ed8}.mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle{border-color:#bbd0ff}.mat-radio-button.mat-accent .mat-radio-inner-circle,.mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple),.mat-radio-button.mat-accent.mat-radio-checked .mat-radio-persistent-ripple,.mat-radio-button.mat-accent:active .mat-radio-persistent-ripple{background-color:#bbd0ff}.mat-radio-button.mat-warn.mat-radio-checked .mat-radio-outer-circle{border-color:#f44336}.mat-radio-button.mat-warn .mat-radio-inner-circle,.mat-radio-button.mat-warn .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple),.mat-radio-button.mat-warn.mat-radio-checked .mat-radio-persistent-ripple,.mat-radio-button.mat-warn:active .mat-radio-persistent-ripple{background-color:#f44336}.mat-radio-button.mat-radio-disabled .mat-radio-outer-circle,.mat-radio-button.mat-radio-disabled.mat-radio-checked .mat-radio-outer-circle{border-color:rgba(0,0,0,.38)}.mat-radio-button.mat-radio-disabled .mat-radio-inner-circle,.mat-radio-button.mat-radio-disabled .mat-radio-ripple .mat-ripple-element{background-color:rgba(0,0,0,.38)}.mat-radio-button.mat-radio-disabled .mat-radio-label-content{color:rgba(0,0,0,.38)}.mat-radio-button .mat-ripple-element{background-color:#000}.mat-select-value{color:rgba(0,0,0,.87)}.mat-select-placeholder{color:rgba(0,0,0,.42)}.mat-select-disabled .mat-select-value{color:rgba(0,0,0,.38)}.mat-select-arrow{color:rgba(0,0,0,.54)}.mat-select-panel{background:#fff}.mat-select-panel:not([class*=mat-elevation-z]){box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.mat-select-panel .mat-option.mat-selected:not(.mat-option-multiple){background:rgba(0,0,0,.12)}.mat-form-field.mat-focused.mat-primary .mat-select-arrow{color:#2f7ed8}.mat-form-field.mat-focused.mat-accent .mat-select-arrow{color:#bbd0ff}.mat-form-field .mat-select.mat-select-invalid .mat-select-arrow,.mat-form-field.mat-focused.mat-warn .mat-select-arrow{color:#f44336}.mat-form-field .mat-select.mat-select-disabled .mat-select-arrow{color:rgba(0,0,0,.38)}.mat-drawer-container{background-color:#fafafa;color:rgba(0,0,0,.87)}.mat-drawer{background-color:#fff;color:rgba(0,0,0,.87)}.mat-drawer.mat-drawer-push{background-color:#fff}.mat-drawer:not(.mat-drawer-side){box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12)}.mat-drawer-side{border-right:1px solid rgba(0,0,0,.12)}.mat-drawer-side.mat-drawer-end,[dir=rtl] .mat-drawer-side{border-left:1px solid rgba(0,0,0,.12);border-right:none}[dir=rtl] .mat-drawer-side.mat-drawer-end{border-left:none;border-right:1px solid rgba(0,0,0,.12)}.mat-drawer-backdrop.mat-drawer-shown{background-color:rgba(0,0,0,.6)}.mat-slide-toggle.mat-checked .mat-slide-toggle-thumb{background-color:#bbd0ff}.mat-slide-toggle.mat-checked .mat-slide-toggle-bar{background-color:rgba(187,208,255,.54)}.mat-slide-toggle.mat-checked .mat-ripple-element{background-color:#bbd0ff}.mat-slide-toggle.mat-primary.mat-checked .mat-slide-toggle-thumb{background-color:#2f7ed8}.mat-slide-toggle.mat-primary.mat-checked .mat-slide-toggle-bar{background-color:rgba(47,126,216,.54)}.mat-slide-toggle.mat-primary.mat-checked .mat-ripple-element{background-color:#2f7ed8}.mat-slide-toggle.mat-warn.mat-checked .mat-slide-toggle-thumb{background-color:#f44336}.mat-slide-toggle.mat-warn.mat-checked .mat-slide-toggle-bar{background-color:rgba(244,67,54,.54)}.mat-slide-toggle.mat-warn.mat-checked .mat-ripple-element{background-color:#f44336}.mat-slide-toggle:not(.mat-checked) .mat-ripple-element{background-color:#000}.mat-slide-toggle-thumb{box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12);background-color:#fafafa}.mat-slide-toggle-bar{background-color:rgba(0,0,0,.38)}.mat-slider-track-background{background-color:rgba(0,0,0,.26)}.mat-primary .mat-slider-thumb,.mat-primary .mat-slider-thumb-label,.mat-primary .mat-slider-track-fill{background-color:#2f7ed8}.mat-primary .mat-slider-thumb-label-text{color:#fff}.mat-accent .mat-slider-thumb,.mat-accent .mat-slider-thumb-label,.mat-accent .mat-slider-track-fill{background-color:#bbd0ff}.mat-accent .mat-slider-thumb-label-text{color:#000}.mat-warn .mat-slider-thumb,.mat-warn .mat-slider-thumb-label,.mat-warn .mat-slider-track-fill{background-color:#f44336}.mat-warn .mat-slider-thumb-label-text{color:#fff}.mat-slider-focus-ring{background-color:rgba(187,208,255,.2)}.cdk-focused .mat-slider-track-background,.mat-slider:hover .mat-slider-track-background{background-color:rgba(0,0,0,.38)}.mat-slider-disabled .mat-slider-thumb,.mat-slider-disabled .mat-slider-track-background,.mat-slider-disabled .mat-slider-track-fill,.mat-slider-disabled:hover .mat-slider-track-background{background-color:rgba(0,0,0,.26)}.mat-slider-min-value .mat-slider-focus-ring{background-color:rgba(0,0,0,.12)}.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb,.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb-label{background-color:rgba(0,0,0,.87)}.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb,.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb-label{background-color:rgba(0,0,0,.26)}.mat-slider-min-value:not(.mat-slider-thumb-label-showing) .mat-slider-thumb{border-color:rgba(0,0,0,.26);background-color:transparent}.mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused .mat-slider-thumb,.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover .mat-slider-thumb{border-color:rgba(0,0,0,.38)}.mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused.mat-slider-disabled .mat-slider-thumb,.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover.mat-slider-disabled .mat-slider-thumb{border-color:rgba(0,0,0,.26)}.mat-slider-has-ticks .mat-slider-wrapper::after{border-color:rgba(0,0,0,.7)}.mat-slider-horizontal .mat-slider-ticks{background-image:repeating-linear-gradient(to right,rgba(0,0,0,.7),rgba(0,0,0,.7) 2px,transparent 0,transparent);background-image:-moz-repeating-linear-gradient(.0001deg,rgba(0,0,0,.7),rgba(0,0,0,.7) 2px,transparent 0,transparent)}.mat-slider-vertical .mat-slider-ticks{background-image:repeating-linear-gradient(to bottom,rgba(0,0,0,.7),rgba(0,0,0,.7) 2px,transparent 0,transparent)}.mat-step-header.cdk-keyboard-focused,.mat-step-header.cdk-program-focused,.mat-step-header:hover{background-color:rgba(0,0,0,.04)}@media (hover:none){.mat-step-header:hover{background:0 0}}.mat-step-header .mat-step-label,.mat-step-header .mat-step-optional{color:rgba(0,0,0,.54)}.mat-step-header .mat-step-icon{background-color:rgba(0,0,0,.54);color:#fff}.mat-step-header .mat-step-icon-selected,.mat-step-header .mat-step-icon-state-done,.mat-step-header .mat-step-icon-state-edit{background-color:#2f7ed8;color:#fff}.mat-step-header .mat-step-icon-state-error{background-color:transparent;color:#f44336}.mat-step-header .mat-step-label.mat-step-label-active{color:rgba(0,0,0,.87)}.mat-step-header .mat-step-label.mat-step-label-error{color:#f44336}.mat-stepper-horizontal,.mat-stepper-vertical{background-color:#fff}.mat-stepper-vertical-line::before{border-left-color:rgba(0,0,0,.12)}.mat-horizontal-stepper-header::after,.mat-horizontal-stepper-header::before,.mat-stepper-horizontal-line{border-top-color:rgba(0,0,0,.12)}.mat-sort-header-arrow{color:#757575}.mat-tab-header,.mat-tab-nav-bar{border-bottom:1px solid rgba(0,0,0,.12)}.mat-tab-group-inverted-header .mat-tab-header,.mat-tab-group-inverted-header .mat-tab-nav-bar{border-top:1px solid rgba(0,0,0,.12);border-bottom:none}.mat-tab-label,.mat-tab-link{color:rgba(0,0,0,.87)}.mat-tab-label.mat-tab-disabled,.mat-tab-link.mat-tab-disabled{color:rgba(0,0,0,.38)}.mat-tab-header-pagination-chevron{border-color:rgba(0,0,0,.87)}.mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(0,0,0,.38)}.mat-tab-group[class*=mat-background-] .mat-tab-header,.mat-tab-nav-bar[class*=mat-background-]{border-bottom:none;border-top:none}.mat-tab-group.mat-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-group.mat-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled){background-color:rgba(193,216,243,.3)}.mat-tab-group.mat-primary .mat-ink-bar,.mat-tab-nav-bar.mat-primary .mat-ink-bar{background-color:#2f7ed8}.mat-tab-group.mat-primary.mat-background-primary .mat-ink-bar,.mat-tab-nav-bar.mat-primary.mat-background-primary .mat-ink-bar{background-color:#fff}.mat-tab-group.mat-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-group.mat-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled){background-color:rgba(238,243,255,.3)}.mat-tab-group.mat-accent .mat-ink-bar,.mat-tab-nav-bar.mat-accent .mat-ink-bar{background-color:#bbd0ff}.mat-tab-group.mat-accent.mat-background-accent .mat-ink-bar,.mat-tab-nav-bar.mat-accent.mat-background-accent .mat-ink-bar{background-color:#000}.mat-tab-group.mat-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-group.mat-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled){background-color:rgba(255,205,210,.3)}.mat-tab-group.mat-warn .mat-ink-bar,.mat-tab-nav-bar.mat-warn .mat-ink-bar{background-color:#f44336}.mat-tab-group.mat-warn.mat-background-warn .mat-ink-bar,.mat-tab-nav-bar.mat-warn.mat-background-warn .mat-ink-bar{background-color:#fff}.mat-tab-group.mat-background-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled){background-color:rgba(193,216,243,.3)}.mat-tab-group.mat-background-primary .mat-tab-header,.mat-tab-group.mat-background-primary .mat-tab-links,.mat-tab-nav-bar.mat-background-primary .mat-tab-header,.mat-tab-nav-bar.mat-background-primary .mat-tab-links{background-color:#2f7ed8}.mat-tab-group.mat-background-primary .mat-tab-label,.mat-tab-group.mat-background-primary .mat-tab-link,.mat-tab-nav-bar.mat-background-primary .mat-tab-label,.mat-tab-nav-bar.mat-background-primary .mat-tab-link{color:#fff}.mat-tab-group.mat-background-primary .mat-tab-label.mat-tab-disabled,.mat-tab-group.mat-background-primary .mat-tab-link.mat-tab-disabled,.mat-tab-nav-bar.mat-background-primary .mat-tab-label.mat-tab-disabled,.mat-tab-nav-bar.mat-background-primary .mat-tab-link.mat-tab-disabled{color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-primary .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-chevron{border-color:#fff}.mat-tab-group.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-primary .mat-ripple-element,.mat-tab-nav-bar.mat-background-primary .mat-ripple-element{background-color:rgba(255,255,255,.12)}.mat-tab-group.mat-background-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled){background-color:rgba(238,243,255,.3)}.mat-tab-group.mat-background-accent .mat-tab-header,.mat-tab-group.mat-background-accent .mat-tab-links,.mat-tab-nav-bar.mat-background-accent .mat-tab-header,.mat-tab-nav-bar.mat-background-accent .mat-tab-links{background-color:#bbd0ff}.mat-tab-group.mat-background-accent .mat-tab-label,.mat-tab-group.mat-background-accent .mat-tab-link,.mat-tab-nav-bar.mat-background-accent .mat-tab-label,.mat-tab-nav-bar.mat-background-accent .mat-tab-link{color:#000}.mat-tab-group.mat-background-accent .mat-tab-label.mat-tab-disabled,.mat-tab-group.mat-background-accent .mat-tab-link.mat-tab-disabled,.mat-tab-nav-bar.mat-background-accent .mat-tab-label.mat-tab-disabled,.mat-tab-nav-bar.mat-background-accent .mat-tab-link.mat-tab-disabled{color:rgba(0,0,0,.4)}.mat-tab-group.mat-background-accent .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-chevron{border-color:#000}.mat-tab-group.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(0,0,0,.4)}.mat-tab-group.mat-background-accent .mat-ripple-element,.mat-tab-nav-bar.mat-background-accent .mat-ripple-element{background-color:rgba(0,0,0,.12)}.mat-tab-group.mat-background-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled){background-color:rgba(255,205,210,.3)}.mat-tab-group.mat-background-warn .mat-tab-header,.mat-tab-group.mat-background-warn .mat-tab-links,.mat-tab-nav-bar.mat-background-warn .mat-tab-header,.mat-tab-nav-bar.mat-background-warn .mat-tab-links{background-color:#f44336}.mat-tab-group.mat-background-warn .mat-tab-label,.mat-tab-group.mat-background-warn .mat-tab-link,.mat-tab-nav-bar.mat-background-warn .mat-tab-label,.mat-tab-nav-bar.mat-background-warn .mat-tab-link{color:#fff}.mat-tab-group.mat-background-warn .mat-tab-label.mat-tab-disabled,.mat-tab-group.mat-background-warn .mat-tab-link.mat-tab-disabled,.mat-tab-nav-bar.mat-background-warn .mat-tab-label.mat-tab-disabled,.mat-tab-nav-bar.mat-background-warn .mat-tab-link.mat-tab-disabled{color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-warn .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-chevron{border-color:#fff}.mat-tab-group.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-warn .mat-ripple-element,.mat-tab-nav-bar.mat-background-warn .mat-ripple-element{background-color:rgba(255,255,255,.12)}.mat-toolbar{background:#f5f5f5;color:rgba(0,0,0,.87)}.mat-toolbar.mat-primary{background:#2f7ed8;color:#fff}.mat-toolbar.mat-accent{background:#bbd0ff;color:#000}.mat-toolbar.mat-warn{background:#f44336;color:#fff}.mat-toolbar .mat-focused .mat-form-field-ripple,.mat-toolbar .mat-form-field-ripple,.mat-toolbar .mat-form-field-underline{background-color:currentColor}.mat-toolbar .mat-focused .mat-form-field-label,.mat-toolbar .mat-form-field-label,.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow,.mat-toolbar .mat-select-arrow,.mat-toolbar .mat-select-value{color:inherit}.mat-toolbar .mat-input-element{caret-color:currentColor}.mat-tooltip{background:rgba(97,97,97,.9)}.mat-tree{font-family:HelveticaNeue-Light,Helvetica Neue Light,Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif;background:#fff}.mat-nested-tree-node,.mat-tree-node{font-weight:400;font-size:14px;color:rgba(0,0,0,.87)}.mat-snack-bar-container{color:rgba(255,255,255,.7);background:#323232;box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.mat-simple-snackbar-action{color:#bbd0ff}.cdk-global-overlay-wrapper,.cdk-overlay-container{pointer-events:none;top:0;left:0;height:100%;width:100%}.cdk-overlay-container{position:fixed;z-index:999999}.cdk-overlay-container:empty{display:none}.cdk-global-overlay-wrapper{display:flex;position:absolute;z-index:1000}.cdk-overlay-pane{position:absolute;pointer-events:auto;box-sizing:border-box;z-index:1000;display:flex;max-width:100%;max-height:100%}.cdk-overlay-backdrop{position:absolute;top:0;bottom:0;left:0;right:0;z-index:1000;pointer-events:auto;-webkit-tap-highlight-color:transparent;transition:opacity .4s cubic-bezier(.25,.8,.25,1);opacity:0}.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:1}@media screen and (-ms-high-contrast:active){.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:.6}}.cdk-overlay-dark-backdrop{background:rgba(0,0,0,.32)}.cdk-overlay-transparent-backdrop,.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing{opacity:0}.cdk-overlay-connected-position-bounding-box{position:absolute;z-index:1000;display:flex;flex-direction:column;min-width:1px;min-height:1px}.cdk-global-scrollblock{position:fixed;width:100%;overflow-y:scroll}.mat-form-field-placeholder{font-size:115%!important}.mat-form-field .mat-form-field-wrapper{padding-bottom:0}.mat-form-field .mat-form-field-underline{bottom:0}.m1-date-range-picker{position:relative;border-radius:0;z-index:1001;width:100%!important}.m1-date-range-picker .mat-icon{height:auto;width:auto}.m1-date-range-picker .full-width{width:100%}.m1-date-range-picker .fa{font-size:100%;color:rgba(0,0,0,.54)}.m1-date-range-picker .fa-calendar{color:#aaa}.m1-date-range-picker .dateSelect{color:#333}.m1-date-range-picker .retail-dateSelect{padding:0 0 0 30px!important}.m1-date-range-picker .retail-calendar:before{content:"\\F073"}.m1-date-range-picker .timezone-info{font-size:95%;position:absolute;right:8px;top:8px;opacity:.6;font-weight:bolder}.m1-date-range-picker .calendar-loading{min-width:240px;min-height:240px;padding:54% 48% 46%}.m1-date-range-picker .calendar-view{position:absolute;color:inherit;background-color:#fff;border-radius:4px;padding:12px 8px;margin-top:2px;z-index:99999;box-shadow:0 6px 12px rgba(0,0,0,.175);border:1px solid rgba(0,0,0,.15)}.m1-date-range-picker .calendar-view:after,.m1-date-range-picker .calendar-view:before{position:absolute;display:inline-block;border-bottom-color:rgba(0,0,0,.2);content:""}.m1-date-range-picker .timezone-select{font-size:90%;display:flex;margin:0 6px 6px}.m1-date-range-picker .timezone-select .currentTime,.m1-date-range-picker .timezone-select .timezones{display:inline-block}.m1-date-range-picker .timezone-select .timezones{margin-right:auto;white-space:nowrap;left:8px}.m1-date-range-picker .timezone-select .currentTime{margin-left:auto;white-space:nowrap;right:8px}.m1-date-range-picker .timezone-select .border-separator{border-right:2px solid #ccc;padding-right:8px;margin-right:8px}.m1-date-range-picker .timezone-select .timezone{display:inline-block;cursor:pointer}.m1-date-range-picker .timezone-select .today-text{font-weight:700;text-decoration:underline}.m1-date-range-picker .active-timezone{color:#2f7ed8;font-weight:bolder}.m1-date-range-picker .date-dropdown-container,.m1-date-range-picker .time-item-container{display:flex;justify-content:center}.m1-date-range-picker .date-dropdown-container .mat-form-field-wrapper,.m1-date-range-picker .time-item-container .mat-form-field-wrapper{padding-bottom:0}.m1-date-range-picker .date-dropdown-container .mat-form-field-wrapper .mat-form-field-infix,.m1-date-range-picker .time-item-container .mat-form-field-wrapper .mat-form-field-infix{border-top:0;width:auto}.m1-date-range-picker .date-dropdown-container .mat-form-field-wrapper .mat-form-field-infix .mat-select-value,.m1-date-range-picker .time-item-container .mat-form-field-wrapper .mat-form-field-infix .mat-select-value{display:inline}.m1-date-range-picker .date-dropdown-container .mat-form-field-wrapper .mat-form-field-underline,.m1-date-range-picker .time-item-container .mat-form-field-wrapper .mat-form-field-underline{display:none}.m1-date-range-picker .date-dropdown-container .date-dropdown,.m1-date-range-picker .time-item-container .date-dropdown{margin:0 5px}.m1-date-range-picker .date-select{display:inline-flex}.m1-date-range-picker .ranges{min-width:160px;padding:0 2px}.m1-date-range-picker .ranges .calendar-range{width:100%;white-space:nowrap;background-color:#f5f5f5;border:1px solid #f5f5f5;border-radius:0;color:#2f7ed8;line-height:30px;margin:0 3px 8px;cursor:pointer;box-shadow:0 2px 2px 0 rgba(0,0,0,.16),0 0 0 1px rgba(0,0,0,.08)}.m1-date-range-picker .ranges .active-range{background-color:#2f7ed8;border:1px solid #2f7ed8;color:#fff}.m1-date-range-picker .ranges .active-range:hover{color:#fff;background-color:#0069d9;border-color:#0062cc}.m1-date-range-picker .ranges .range-select-button-container{white-space:nowrap;margin:0 3px 8px}.m1-date-range-picker .ranges .range-select-button{width:50%;border-radius:0;line-height:30px;box-shadow:0 2px 2px 0 rgba(0,0,0,.16),0 0 0 1px rgba(0,0,0,.08)}.m1-date-range-picker .ranges .range-select-button:first-child{margin-right:3px}.m1-date-range-picker .ranges .range-select-button:last-child{margin-left:3px}.m1-date-range-picker .ranges .range-select-apply-button{color:#fff;background-color:#2f7ed8;border:1px solid #2f7ed8}.m1-date-range-picker .ranges .range-select-cancel-button{background-color:#f5f5f5;border:1px solid #f5f5f5;color:#2f7ed8}.m1-date-range-picker .ranges .range-select-button-bottom{position:absolute;bottom:4px}.m1-date-range-picker .calendar-container{display:flex}.m1-date-range-picker .calendar{margin:0 6px;float:left;display:block;width:auto}.m1-date-range-picker .calendar-label{text-align:center;position:relative;width:100%}.m1-date-range-picker .rowNumber{color:#bbb!important;font-size:82%;border-right:1px solid #dedede;width:32px}.m1-date-range-picker .rowNumberPlaceholder{font-size:82%;padding:0!important;min-width:0!important}.m1-date-range-picker .calendar-week-day{color:#ffc266;font-weight:400;font-size:95%}.m1-date-range-picker .dateTitleInput{position:relative;border:none;margin:0 3px 6px 0;width:100%;float:left;display:block}.m1-date-range-picker .dateTitleInput .dateSelect{text-align:center}.m1-date-range-picker .dateTitleInput .dateSelect:hover{pointer-events:none;background:0 0;cursor:default}.m1-date-range-picker .dateTitleInput i{position:absolute!important;top:11px!important;left:10px!important;color:#aaa!important}.m1-date-range-picker .calendar-table td,.m1-date-range-picker .calendar-table th{white-space:nowrap;text-align:center;min-width:32px;padding:5px}.m1-date-range-picker .calendar-table td{color:#bbb}.m1-date-range-picker .calendar-table td .todayDate{font-size:6px}.m1-date-range-picker .calendar-table td.valid{cursor:pointer}.m1-date-range-picker .calendar-table td.available,.m1-date-range-picker .calendar-table th.available{cursor:pointer;color:#333}.m1-date-range-picker .calendar-table th.available{width:32px}.m1-date-range-picker .calendar-table th.prev{position:absolute;left:0}.m1-date-range-picker .calendar-table th.next{position:absolute;right:0}.m1-date-range-picker .calendar-table td.available:hover,.m1-date-range-picker .calendar-table th.available:hover{background-color:#eee}.m1-date-range-picker .calendar-table td.in-range{background-color:#f6f6f6;color:#2f7ed8}.m1-date-range-picker .fa.active,.m1-date-range-picker td.active{background-color:#2f7ed8!important;color:#fff!important}.m1-date-range-picker .disabled{color:#eee;pointer-events:none}.m1-date-range-picker .month-select,.m1-date-range-picker .year-select{background:#fff;padding:0;box-shadow:none}.m1-date-range-picker .dropdown-menu{position:absolute;min-width:unset!important;font-size:95%;border-radius:0;max-height:100px;overflow:auto}.m1-date-range-picker .hide{display:none}.m1-date-range-picker .show{display:block}.m1-date-range-picker .time-picker-container{display:flex}.m1-date-range-picker .time-picker-container .time-select{position:relative;padding:3px 0;text-align:center;width:50%;margin:1em 6px 0;border:1px solid #ddd}.m1-date-range-picker .time-picker-container .time-select .clock-icon-container{position:absolute;left:.5em;height:100%;padding:3px;color:#aaa}.m1-date-range-picker .time-picker-container .time-select .time-item-container{margin:0 5px}'
            ]
          }
        ]
      }
    ];
    /** @nocollapse */
    DateTimeRangePickerComponent.ctorParameters = function() {
      return [{ type: core.ElementRef }, { type: core.Renderer }, { type: DateTimeRangePickerUtilityService }];
    };
    DateTimeRangePickerComponent.propDecorators = {
      options: [{ type: core.Input }],
      settings: [{ type: core.Input }],
      optionService: [{ type: core.Input }],
      dateRangeModel: [{ type: core.Input }],
      canBeEmpty: [{ type: core.Input }],
      dateRangeModelChange: [{ type: core.Output }],
      dateRangeChanged: [{ type: core.Output }],
      inputFocusBlur: [{ type: core.Output }],
      selectedDate: [{ type: core.Output }],
      filterInputBox: [{ type: core.ViewChild, args: ["filterInputBox"] }]
    };
    return DateTimeRangePickerComponent;
  })();

  /**
   * @fileoverview added by tsickle
   * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
   */
  /** @type {?} */
  var declarations = [ObjNgFor, DateTimeRangePickerComponent];
  var NgxDateTimeRangePickerModule = /** @class */ (function() {
    function NgxDateTimeRangePickerModule() {}
    /**
     * @return {?}
     */
    NgxDateTimeRangePickerModule.forRoot
    /**
     * @return {?}
     */ = function() {
      return {
        ngModule: NgxDateTimeRangePickerModule,
        providers: [DateTimeRangePickerUtilityService]
      };
    };
    NgxDateTimeRangePickerModule.decorators = [
      {
        type: core.NgModule,
        args: [
          {
            declarations: declarations,
            imports: [
              platformBrowser.BrowserModule,
              animations.BrowserAnimationsModule,
              forms.FormsModule,
              material.MatFormFieldModule,
              material.MatButtonModule,
              material.MatInputModule,
              material.MatIconModule,
              material.MatSelectModule
            ],
            exports: [DateTimeRangePickerComponent]
          }
        ]
      }
    ];
    return NgxDateTimeRangePickerModule;
  })();

  /**
   * @fileoverview added by tsickle
   * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
   */

  /**
   * @fileoverview added by tsickle
   * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
   */

  /**
   * @fileoverview added by tsickle
   * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
   */

  exports.NgxDateTimeRangePickerModule = NgxDateTimeRangePickerModule;

  Object.defineProperty(exports, "__esModule", { value: true });
});

//# sourceMappingURL=ngx-datetime-range-picker.umd.js.map
