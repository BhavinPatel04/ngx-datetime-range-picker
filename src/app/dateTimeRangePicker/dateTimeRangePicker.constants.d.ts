declare const USA_MST_TZ_CODE = "MST";
declare const USA_TZ_CODE = "PST";
declare const EU_TZ_CODE = "CET";
export declare const DateRangePickerConstants: {
  DEFAULT: {
    TYPE: string;
    INPUT_CLASS: string;
    DATE_FROMAT: string;
    TIME_FORMAT: string;
    START_DATE: any;
    END_DATE: any;
    MIN_DATE: any;
    MAX_DATE: any;
    START_TIME: string;
    END_TIME: string;
    MODEL_KEYS: string[];
    TZ_CODE: string;
  };
  CONSTANT: {
    MONTHS_AVAILABLE: string[];
    USA_MST_TZ_CODE: string;
    USA_TZ_CODE: string;
    EU_TZ_CODE: string;
    TZ_CODES: string[];
    OFFSETS: {
      [USA_TZ_CODE]: {
        SO: number;
        WO: number;
      };
      [EU_TZ_CODE]: {
        SO: number;
        WO: number;
      };
    };
    TZ_NAMES: {
      [USA_MST_TZ_CODE]: string;
      [USA_TZ_CODE]: string;
      [EU_TZ_CODE]: string;
    };
  };
};
export {};
