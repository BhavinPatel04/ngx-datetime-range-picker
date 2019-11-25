const tuple = <T extends string[]>(...args: T) => args;
export const CalendarTypes = tuple("daily", "weekly", "monthly", "quarterly", "yearly");
export type CalendarType = typeof CalendarTypes[number];

export interface AriaLabelsOptions {
  inputField?: string;
}

export interface DateSide {
  label: string;
  months: string[];
  years: string[];
  itemRows: Object[];
}

export interface TimeSide {
  hour: any[];
  minute: any[];
  meridian: any[];
}

export interface DateCharacteristics {
  available?: boolean;
  inRange?: boolean;
  active?: boolean;
  today?: boolean;
  date?: string;
}

export interface ActiveItemSide extends DateCharacteristics {
  rowItemText?: string;
  firstDay?: string;
  lastDay?: string;
}

export interface CalendarSides {
  left?: DateSide | TimeSide | ActiveItemSide | string | boolean;
  right?: DateSide | TimeSide | ActiveItemSide | string | boolean;
}

export interface DateTimeRangeChangeOutput {
  activeRange: string;
  startDate: string | number;
  endDate: string | number;
  startTime?: string;
  endTime?: string;
}

export type DateTimeRangeModelChangeOutput = { [key in CalendarType]?: DateTimeRangeChangeOutput };

export interface Options {
  dateArray?: any[];
  startDate?: string | number;
  endDate?: string | number;
  minDate?: string | number;
  maxDate?: string | number;
  startTime?: string;
  endTime?: string;
  minTime?: string;
  maxTime?: string;
}

export interface State {
  activeEndDate: string;
  activeItem: CalendarSides;
  activeRange: string;
  activeStartDate: string;
  calendarAvailable: CalendarSides;
  customRange: boolean;
  dates: CalendarSides;
  dateTitleText: CalendarSides;
  frequencyColumnHeader: string;
  isCalendarVisible: boolean;
  isValidFilter: boolean;
  isUserModelChange: boolean;
  localTimezone: string;
  selectedDateText: string;
  selectedHour: CalendarSides;
  selectedMeridian: CalendarSides;
  selectedMinute: CalendarSides;
  selectedMonth: CalendarSides;
  selectedTimezone: string;
  selectedYear: CalendarSides;
  sides: string[];
  timeItems: string[];
  times: CalendarSides;
  timeZones: string[];
  todayTime: string;
  weekDayOptions: string[];
}

export interface Settings {
  type?: string;
  modelKeys?: string[];
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
  availableRanges?: {};
  showRanges?: boolean;
  disableWeekends?: boolean;
  disableWeekdays?: boolean;
  retailCalendar?: boolean;
  displayBeginDate?: boolean;
  displayEndDate?: boolean;
  ariaLabels?: AriaLabelsOptions;
}

export interface Config extends Options, Settings {
  selectedTimezone?: string;
}

export interface DateRow {
  rowNumber: string;
  rowNumberText: string;
  items: DateCharacteristics[];
}

export interface RowVariables {
  rowNumber: string;
  columns: number;
}

export interface RowItemVariables {
  itemCount: number;
  currentItemDate: string;
  rowItemText: string;
  firstDay: string;
  lastDay: string;
}

export interface RowOptions {
  type: string;
  monthStartWeekNumber: number;
  dateRows: number;
  year: string;
  itemCount: number;
}

export interface RowItemOptions {
  type: string;
  monthStartWeekNumber: number;
  dateRows: number;
  rowNumber: string;
  yearStartDate: string;
  year: number;
  rowItem: number;
  columns: number;
}

export type DateRangeModel = { [key in CalendarType]?: Options };
