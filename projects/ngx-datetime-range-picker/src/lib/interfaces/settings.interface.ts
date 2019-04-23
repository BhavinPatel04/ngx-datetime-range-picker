import { AriaLabelsOptions } from "./ariaLabels.interface";

export interface NgxDatetimeRangePickerSettings {
  type?: string;
  modelKeys?: string[];
  selectedModel?: string;
  useLocalTimezone?: boolean;
  showTimezoneSelect?: boolean;
  timePicker?: boolean;
  timezoneSupport?: boolean;
  defaultTimezone?: string;
  inputClass?: string;
  inputDateFormat?: string;
  viewDateFormat?: string;
  outputDateFormat?: string;
  singleDatePicker?: boolean;
  componentDisabled?: boolean;
  placeholder?: string;
  showRowNumber?: boolean;
  availableRanges?: Object;
  showRanges?: boolean;
  disableWeekends?: boolean;
  disableWeekdays?: boolean;
  retailCalendar?: boolean;
  displayBeginDate?: boolean;
  displayEndDate?: boolean;
  ariaLabels?: AriaLabelsOptions;
}
