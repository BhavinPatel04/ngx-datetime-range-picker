declare var require: any;
const moment = require("moment");
const USA_MST_TZ_CODE = "MST";
const USA_TZ_CODE = "PST";
const EU_TZ_CODE = "CET";

export const DateRangePickerConstants = {
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
        TZ_CODE: USA_MST_TZ_CODE,
    },
    CONSTANT: {
        MONTHS_AVAILABLE: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ],
        USA_MST_TZ_CODE,
        USA_TZ_CODE,
        EU_TZ_CODE,
        TZ_CODES: [USA_TZ_CODE, EU_TZ_CODE],
        OFFSETS: {
            [USA_TZ_CODE]: {
                SO: -7,
                WO: -8,
            },
            [EU_TZ_CODE]: {
                SO: 1,
                WO: 0,
            },
        },
        TZ_NAMES: {
            [USA_MST_TZ_CODE]: "America/Phoenix",
            [USA_TZ_CODE]: "America/Los_Angeles",
            [EU_TZ_CODE]: "Europe/Berlin",
        },
    },
};
