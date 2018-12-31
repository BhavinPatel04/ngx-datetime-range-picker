import { AriaLabelsOptions, DateTimeRangePickerOptions, DateTimeRangePickerSettings } from "./interfaces/index";
export declare class DateTimeRangePickerUtilityService {
  getNotAvailableText(): string;
  getDefaultAriaLabelOptions(): AriaLabelsOptions;
  getDefaultOptions(): DateTimeRangePickerOptions;
  getDefaultSettings(): DateTimeRangePickerSettings;
  formatDateToDefaultFormat(date: any, format?: string): string;
  formatTimeToDefaultFormat(time: any): any;
  getFrequencyColumnHeader(type: any): "W#" | "" | "Q#" | "Year";
  getCalendarRowNumberText(type: any, number: any): string;
  createDefaultRanges(config: any): Object;
  getSanitizedDateArray(config: any): any;
  getNumberOfWeeks(date: any): number;
  getYearlyWeekCount(year: any, retailCalendar?: any): number;
  getMonthsAvailable(minDate: any, maxDate: any, selectedYear: any): any[];
  getYearsAvailable(config: any): any[];
  isDateAvailable(
    date: any,
    minDate: any,
    maxDate: any,
    startDate: any,
    endDate: any,
    monthStartDate: any,
    monthEndDate: any,
    config: any
  ): boolean;
  isDateInRange(
    date: any,
    minDate: any,
    maxDate: any,
    startDate: any,
    endDate: any,
    monthStartDate: any,
    monthEndDate: any,
    available: any,
    config: any
  ): boolean;
  isDateActive(date: any, startDate: any, endDate: any, side: any): boolean;
  isDateToday(date: any, config: any): boolean;
  isWeekday(date: any, format?: any): boolean;
  isWeekend(date: any, format?: any): boolean;
  getCalendarRowVariables(options: any): any;
  getCalendarRowItemVariables(options: any): any;
  isRowIemValid(options: any): boolean;
  formatStartDate(config: any, returnFormat: any): any;
  getSelectedYear(config: any, date: any, side: any): string;
  getFirstLastDay(
    date: any,
    type: any
  ): {
    firstDay: string;
    lastDay: string;
  };
  getLocalTimezone(): string;
  getZoneDate(tz: any, format: any, date?: any): string;
  getZoneToday(tz: any, viewDateFormat: any): any;
  formatToZoneDate(tz: any, format: any, date: any): any;
  convertToViewTimeItem(item: any): string;
  getWeekNumber(date: any): any;
}
