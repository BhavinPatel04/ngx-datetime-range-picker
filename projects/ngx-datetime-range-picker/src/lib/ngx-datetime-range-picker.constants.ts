import { ActiveItemSide, DateSide, AriaLabelsOptions, Options, Settings, State } from "./interfaces";

declare let require: any;
const moment = require("moment");
const USA_MST_TZ_CODE = "MST";
const USA_TZ_CODE = "PST";
const EU_TZ_CODE = "CET";

function getLocalTimezone(): string {
  const tz: string = /\((.*)\)/.exec(new Date().toString())[1];

  if (tz === "Central Europe Standard Time") {
    return EU_TZ_CODE;
  } else {
    return USA_MST_TZ_CODE;
  }
}

export const DEFAULT_DATE_FORMAT = "YYYY-MM-DD";

export const NgxDatetimeRangePickerConstants = {
  DEFAULT: {
    OPTIONS: <Options>{
      dateArray: [],
      startDate: moment().format("YYYY-MM-DD") as string,
      endDate: moment().format("YYYY-MM-DD") as string,
      minDate: moment()
        .subtract(2, "year")
        .startOf("year")
        .format("YYYY-MM-DD") as string,
      maxDate: moment().format("YYYY-MM-DD") as string,
      startTime: "00:00",
      endTime: "23:59"
    },
    SETTINGS: <Settings>{
      type: "daily",
      modelKeys: ["daily", "weekly", "monthly", "quarterly", "yearly"],
      showTimezoneSelect: false,
      useLocalTimezone: false,
      timePicker: false,
      inputClass: "m1drp",
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
      ariaLabels: {
        inputField: "Date Range Input Field"
      } as AriaLabelsOptions
    },
    STATE: <State>{
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
      localTimezone: getLocalTimezone(),
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
      selectedTimezone: undefined, // Since "useLocalTimezone: false" by default;
      selectedYear: {
        left: "",
        right: ""
      },
      sides: [],
      timeItems: ["hour", "minute"],
      times: {
        left: "",
        right: ""
      },
      timeZones: [USA_TZ_CODE, EU_TZ_CODE],
      todayTime: "",
      weekDayOptions: ["su", "mo", "tu", "we", "th", "fr", "sa"]
    },
    TIME_FORMAT: "HH:mm",
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
      quarterly: [
        { label: "Last 2 Quarters", count: 1 },
        { label: "Last 4 Quarters", count: 3 }
      ],
      yearly: [{ label: "Last Year", count: 1 }]
    }
  },
  CONSTANT: {
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
