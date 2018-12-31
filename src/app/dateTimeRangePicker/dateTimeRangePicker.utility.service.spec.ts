import { DateRangePickerConstants } from "./dateTimeRangePicker.constants";
import { DateTimeRangePickerUtilityService } from "./dateTimeRangePicker.utility.service";
import { AriaLabelsOptions, DateTimeRangePickerOptions, DateTimeRangePickerSettings } from "./interfaces/index";

declare var require: any;
const moment = require("moment");
const _ = require("lodash");

const DEFAULT_INPUT_CLASS = DateRangePickerConstants.DEFAULT.INPUT_CLASS;
const DEFAULT_DATE_FROMAT = DateRangePickerConstants.DEFAULT.DATE_FROMAT;
const DEFAULT_START_DATE = DateRangePickerConstants.DEFAULT.START_DATE;
const DEFAULT_END_DATE = DateRangePickerConstants.DEFAULT.END_DATE;
const DEFAULT_MIN_DATE = DateRangePickerConstants.DEFAULT.MIN_DATE;
const DEFAULT_MAX_DATE = DateRangePickerConstants.DEFAULT.MAX_DATE;

describe("DateTimeRangePickerUtilityService", () => {
  let service: DateTimeRangePickerUtilityService;

  beforeEach(() => {
    service = new DateTimeRangePickerUtilityService();
  });

  it("#getDefaultAriaLabelOptions", () => {
    const options: AriaLabelsOptions = {
      inputField: "Date Range Input Field" as string,
    };
    expect(service.getDefaultAriaLabelOptions()).toEqual(options);
  });

  it("#getDefaultOptions", () => {
    const defaultOptions: DateTimeRangePickerOptions = {
      dateArray: [] as string[],
      startDate: DEFAULT_START_DATE as string,
      endDate: DEFAULT_END_DATE as string,
      minDate: DEFAULT_MIN_DATE as string,
      maxDate: DEFAULT_MAX_DATE as string,
    };
    const options = service.getDefaultOptions();
    _.forOwn(defaultOptions, (defaultOptionValue, defaultOptionKey) => {
      expect(_.has(options, defaultOptionKey)).toBeTruthy();
    });
  });

  it("#getDefaultSettings", () => {
    const defaultOptions: DateTimeRangePickerSettings = {
      type: "daily" as string,
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
      ariaLabels: service.getDefaultAriaLabelOptions() as AriaLabelsOptions,
    };
    const options = service.getDefaultSettings();
    _.forOwn(defaultOptions, (defaultOptionValue, defaultOptionKey) => {
      expect(_.has(options, defaultOptionKey)).toBeTruthy();
    });
  });

  it("#formatDateToDefaultFormat", () => {
    expect(service.formatDateToDefaultFormat("2017-02-02")).toEqual("2017-02-02");
    expect(service.formatDateToDefaultFormat(null)).toBeNull();
    expect(service.formatDateToDefaultFormat("")).toBeNull();
    expect(service.formatDateToDefaultFormat("2017/02/02")).toEqual("2017-02-02");
    expect(service.formatDateToDefaultFormat("2017/02/02", "YYYY/MM/DD")).toEqual("2017-02-02");
  });

  it("#getFrequencyColumnHeader", () => {
    expect(service.getFrequencyColumnHeader("daily")).toEqual("W#");
    expect(service.getFrequencyColumnHeader("weekly")).toEqual("");
    expect(service.getFrequencyColumnHeader("monthly")).toEqual("Q#");
    expect(service.getFrequencyColumnHeader("quarterly")).toEqual("Year");
    expect(service.getFrequencyColumnHeader("yearly")).toEqual("");
  });

  it("#getCalendarRowNumberText", () => {
    expect(service.getCalendarRowNumberText("daily", 1)).toEqual("W1");
    expect(service.getCalendarRowNumberText("weekly", 1)).toEqual("");
    expect(service.getCalendarRowNumberText("monthly", 1)).toEqual("Q1");
    expect(service.getCalendarRowNumberText("quarterly", 1)).toEqual("1");
    expect(service.getCalendarRowNumberText("yearly", 1)).toEqual("");
  });

  it("#createDefaultRanges", () => {
    const typeArray = ["daily", "weekly", "monthly", "quarterly", "yearly"];
    const config = {
      type: "daily",
      endDate: "2017-03-01",
    };
    let ranges = {};
    _.forEach(typeArray, (type) => {
      config.type = type;
      ranges = service.createDefaultRanges(config);
      expect(_.isEmpty(ranges)).toBeFalsy();
    });
  });

  it("#getSanitizedDateArray", () => {
    const typeArray = ["daily", "weekly", "monthly", "quarterly", "yearly"];
    const config = {
      type: "daily",
      dateArray: ["2017-02-02", "2017-02-03"],
      inputDateFormat: DEFAULT_DATE_FROMAT,
    };
    let sanitizedDateArray = [];
    _.forEach(typeArray, (type) => {
      config.type = type;
      sanitizedDateArray = service.getSanitizedDateArray(config);
      expect(sanitizedDateArray.length).toBeGreaterThan(0);
    });

    config.type = "daily";
    config.dateArray = [];
    sanitizedDateArray = service.getSanitizedDateArray(config);
    expect(sanitizedDateArray.length).toEqual(0);

    config.dateArray = [null];
    sanitizedDateArray = service.getSanitizedDateArray(config);
    expect(sanitizedDateArray.length).toEqual(0);
  });

  it("#getNumberOfWeeks", () => {
    expect(service.getNumberOfWeeks("2017-02-02")).toEqual(5);
    expect(service.getNumberOfWeeks("")).toBeNull();
  });

  it("#getYearlyWeekCount", () => {
    expect(service.getYearlyWeekCount("2017")).toEqual(53);
    expect(service.getYearlyWeekCount("")).toBeNull();
  });

  it("#getMonthsAvailable", () => {
    const minDate = "2017-01-01";
    const maxDate = "2017-03-01";
    const selectedYear = "2017";
    expect(service.getMonthsAvailable(minDate, maxDate, selectedYear)).toEqual(["Jan", "Feb", "Mar"]);
    expect(service.getMonthsAvailable("", maxDate, selectedYear)).toEqual([]);
  });

  it("#getYearsAvailable", () => {
    let config = {
      type: "daily",
      minDate: "2017-01-01",
      maxDate: "2017-03-01",
    };
    expect(service.getYearsAvailable(config)).toEqual(["2017"]);

    config = {
      type: "daily",
      minDate: "",
      maxDate: "2017-03-01",
    };
    expect(service.getYearsAvailable(config)).toEqual([]);
  });

  it("#isDateAvailable", () => {
    const date = "2017-02-02";
    const minDate = "2017-01-01";
    const maxDate = "2017-03-01";
    const startDate = "2017-01-01";
    const endDate = "2017-03-01";
    const monthStartDate = "2017-02-01";
    const monthEndDate = "2017-02-28";
    const config = {
      type: "daily",
      inputDateFormat: DEFAULT_DATE_FROMAT,
      disableWeekends: false,
      disableWeekdays: false,
    };
    expect(
      service.isDateAvailable(date, minDate, maxDate, startDate, endDate, monthStartDate, monthEndDate, config),
    ).toBeTruthy();
    config.disableWeekends = true;
    expect(
      service.isDateAvailable(date, minDate, maxDate, startDate, endDate, monthStartDate, monthEndDate, config),
    ).toBeTruthy();
    config.disableWeekends = false;
    config.disableWeekdays = true;
    expect(
      service.isDateAvailable(date, minDate, maxDate, startDate, endDate, monthStartDate, monthEndDate, config),
    ).toBeFalsy();
  });

  it("#isDateInRange", () => {
    const available = true;
    const date = "2017-02-02";
    const minDate = "2017-01-01";
    const maxDate = "2017-03-01";
    const startDate = "2017-01-01";
    const endDate = "2017-03-01";
    const monthStartDate = "2017-02-01";
    const monthEndDate = "2017-02-28";
    const config = {
      type: "daily",
      inputDateFormat: DEFAULT_DATE_FROMAT,
      disableWeekends: false,
      disableWeekdays: false,
    };
    expect(
      service.isDateInRange(date, minDate, maxDate, startDate, endDate, monthStartDate, monthEndDate, available, config),
    ).toBeTruthy();
  });

  it("#isDateActive", () => {
    const side = "left";
    const date = "2017-01-01";
    const startDate = "2017-01-01";
    const endDate = "2017-03-01";
    expect(service.isDateActive(date, startDate, endDate, side)).toBeTruthy();
  });

  it("#isDateToday", () => {
    const date = moment()
      .startOf("day")
      .valueOf();
    const config = {
      type: "daily",
      retailCalendar: false,
    };
    expect(service.isDateToday(date, config)).toBeTruthy();
  });

  it("#isWeekday", () => {
    const date = "2017-10-04";
    expect(service.isWeekday(date, DEFAULT_DATE_FROMAT)).toBeTruthy();
  });

  it("#isWeekend", () => {
    const date = "2017-09-30";
    expect(service.isWeekend(date, DEFAULT_DATE_FROMAT)).toBeTruthy();
  });

  it("#getCalendarRowVariables", () => {
    const typeArray = ["daily", "weekly", "monthly", "quarterly", "yearly"];
    const options = {
      type: "daily",
      monthStartWeekNumber: 1,
      dateRows: 0,
      year: 2017,
    };
    const validOptions = {
      rowNumber: "",
      columns: 0,
    };
    let variables = {};
    _.forEach(typeArray, (type) => {
      options.type = type;
      variables = service.getCalendarRowVariables(options);
      _.forOwn(validOptions, (validOptionValue, validOptionKey) => {
        expect(_.has(variables, validOptionKey)).toBeTruthy();
      });
    });
  });

  it("#getCalendarRowItemVariables", () => {
    const typeArray = ["daily", "weekly", "monthly", "quarterly", "yearly"];
    const options = {
      type: "daily",
      rowItem: 1,
      dateRows: 0,
      year: 2017,
      rowNumber: 0,
      columns: 5,
      yearStartDate: "2017-01-01",
      retailCalendar: false,
    };
    const validOptions = {
      currentItemDate: "",
      rowItemText: 0,
    };
    let variables = {};
    _.forEach(typeArray, (type) => {
      options.type = type;
      variables = service.getCalendarRowItemVariables(options);
      _.forOwn(validOptions, (validOptionValue, validOptionKey) => {
        expect(_.has(variables, validOptionKey)).toBeTruthy();
      });
    });
  });

  it("#isRowIemValid", () => {
    const typeArray = ["daily", "weekly", "monthly", "quarterly", "yearly"];
    const options = {
      type: "daily",
      monthStartWeekNumber: 1,
      dateRows: 0,
      year: 2017,
      itemCount: 0,
    };
    let valid = false;
    _.forEach(typeArray, (type) => {
      options.type = type;
      valid = service.isRowIemValid(options);
      if (type != "yearly") {
        expect(valid).toBeTruthy();
      } else {
        expect(valid).toBeFalsy();
      }
    });
  });

  it("#formatStartDate", () => {
    const typeArray = ["daily", "weekly", "monthly", "quarterly", "yearly"];
    const config = {
      type: "daily",
      startDate: "2017-02-02",
    };
    const returnFormat = DEFAULT_DATE_FROMAT;
    _.forEach(typeArray, (type) => {
      config.type = type;
      expect(service.formatStartDate(config, returnFormat)).toBeDefined();
    });
  });

  it("#getSelectedYear", () => {
    let config: any = {
      type: "daily",
    };
    let date = "2017-01-01";
    let side = "right";
    expect(service.getSelectedYear(config, date, side)).toEqual("2017");

    config = {
      type: "weekly",
      retailCalendar: true,
    };
    date = "2017-01-01";
    side = "left";
    expect(service.getSelectedYear(config, date, side)).toEqual("2017");

    config = {
      type: "weekly",
      retailCalendar: true,
    };
    date = "2017-01-01";
    side = "right";
    expect(service.getSelectedYear(config, date, side)).toEqual("2017");
  });

  it("#getFirstLastDay", () => {
    const typeArray = ["daily", "weekly", "monthly", "quarterly", "yearly"];
    const date = "2017-10-06";

    _.forEach(typeArray, (type) => {
      expect(Object.keys(service.getFirstLastDay(date, type))).toEqual(["firstDay", "lastDay"]);
    });
  });
});
