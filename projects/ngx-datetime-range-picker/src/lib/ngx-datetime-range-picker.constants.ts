declare var require: any;
const moment = require("moment");
const USA_MST_TZ_CODE = "MST";
const USA_TZ_CODE = "PST";
const EU_TZ_CODE = "CET";

export const NgxDatetimeRangePickerConstants = {
  DEFAULT: {
    TYPE: "daily",
    INPUT_CLASS: "m1drp",
    DATE_FORMAT: "YYYY-MM-DD",
    TIME_FORMAT: "HH:mm",
    START_DATE: moment().format("YYYY-MM-DD") as string,
    END_DATE: moment().format("YYYY-MM-DD") as string,
    MIN_DATE: moment()
      .subtract(2, "year")
      .startOf("year")
      .format("YYYY-MM-DD") as string,
    MAX_DATE: moment().format("YYYY-MM-DD") as string,
    START_TIME: "00:00",
    END_TIME: "23:59",
    MODEL_KEYS: ["daily", "weekly", "monthly", "quarterly", "yearly"],
    TZ_CODE: USA_MST_TZ_CODE,
    RANGES: {
      daily: [
        { label: "Last 7 Days", count: 6 },
        { label: "Last 30 Days", count: 29 },
        { label: "Last 90 Days", count: 89 }
      ],
      weekly: [
        { label: "Last 4 Weeks", count: 3 },
        { label: "Last 13 Weeks", count: 12 },
        { label: "Last 26 Weeks", count: 25 }
      ],
      monthly: [
        { label: "Last 3 Months", count: 2 },
        { label: "Last 6 Months", count: 5 },
        { label: "Last 9 Months", count: 8 }
      ],
      quarterly: [{ label: "Last 2 Quarters", count: 1 }, { label: "Last 4 Quarters", count: 3 }],
      yearly: [{ label: "Last Year", count: 1 }]
    }
  },
  CONSTANT: {
    WEEKDAYS_AVAILABLE: ["su", "mo", "tu", "we", "th", "fr", "sa"],
    MONTHS_AVAILABLE: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    TIMES_AVAILABLE: ["hour", "minute"],
    MOMENT_CONVERSION_MAP: {
      daily: "day",
      weekly: "week",
      monthly: "month",
      quarterly: "quarter",
      yearly: "year"
    },
    USA_MST_TZ_CODE,
    USA_TZ_CODE,
    EU_TZ_CODE,
    TZ_CODES: [USA_TZ_CODE, EU_TZ_CODE],
    OFFSETS: {
      [USA_TZ_CODE]: {
        SO: -7,
        WO: -8
      },
      [EU_TZ_CODE]: {
        SO: 1,
        WO: 0
      }
    },
    TZ_NAMES: {
      [USA_MST_TZ_CODE]: "America/Phoenix",
      [USA_TZ_CODE]: "America/Los_Angeles",
      [EU_TZ_CODE]: "Europe/Berlin"
    }
  }
};
