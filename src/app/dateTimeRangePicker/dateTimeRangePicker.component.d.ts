import { ElementRef, EventEmitter, OnChanges, Renderer, SimpleChanges } from "@angular/core";
import { Observable } from "rxjs";
import { DateTimeRangePickerUtilityService } from "./dateTimeRangePicker.utility.service";
import {
  CalendarSides,
  DateRangeModelItem,
  DateTimeRangePickerOptions,
  DateTimeRangePickerSettings
} from "./interfaces/index";
export declare class DateTimeRangePickerComponent implements OnChanges {
  element: ElementRef;
  private renderer;
  private dateTimeRangePickerUtilityService;
  options: DateTimeRangePickerOptions;
  settings: DateTimeRangePickerSettings;
  optionService: Observable<any>;
  dateRangeModel: Object;
  canBeEmpty: boolean;
  dateRangeModelChange: EventEmitter<Object>;
  dateRangeChanged: EventEmitter<DateRangeModelItem>;
  inputFocusBlur: EventEmitter<Object>;
  selectedDate: EventEmitter<Object>;
  filterInputBox: any;
  sides: string[];
  dates: CalendarSides;
  calendarAvailable: CalendarSides;
  showCalendar: boolean;
  customRange: boolean;
  selectedDateText: string;
  dateTitleText: CalendarSides;
  weekDayOptions: string[];
  selectedMonth: CalendarSides;
  selectedYear: CalendarSides;
  activeItem: CalendarSides;
  activeStartDate: string;
  activeEndDate: string;
  activeRange: string;
  frequencyColumnHeader: string;
  config: any;
  isValidFilter: boolean;
  isUserModelChange: boolean;
  timezones: string[];
  localTimezone: string;
  selectedTimezone: string;
  todayTime: string;
  timeItems: string[];
  times: CalendarSides;
  selectedHour: CalendarSides;
  selectedMinute: CalendarSides;
  selectedMeridian: CalendarSides;
  constructor(
    element: ElementRef,
    renderer: Renderer,
    dateTimeRangePickerUtilityService: DateTimeRangePickerUtilityService
  );
  ngOnChanges(changes: SimpleChanges): void;
  onDateRangeInputChange(value: string): void;
  setDisabledState(disabled: boolean): void;
  onComponentClick(): void;
  onFocusInput(event: any): void;
  onBlurInput(event: any): void;
  onCalendarClose(event: any): void;
  isPrevAvailale(month: any): boolean;
  isNextAvailale(month: any): boolean;
  getCalendarColspan(): 8 | 1 | 6 | 3;
  getCalendarRowItemColspan(): 6 | 3;
  getDatecharacteristics(
    date: any,
    month: any,
    side: any
  ): {
    available: boolean;
    inRange: boolean;
    active: boolean;
    today: boolean;
  };
  onClickPrevious(month: any, side: any): void;
  onClickNext(month: any, side: any): void;
  onCellClick(item: any, itemCell: any, side: any): void;
  onCellMouseEnter(item: any, itemCell: any): void;
  onCellMouseLeave(): void;
  onRangeClick(rangeLabel: any, dateRangeModel: any): void;
  updateCalendar(): void;
  onCalendarLabelChange(label: any, side: any, type: any): void;
  onTimeLabelChange(timeItem: any, side: any, item: any): void;
  onTimeApply(): void;
  init(): void;
  initialize(): void;
  parseOptions(): void;
  selectTimeZone(): void;
  parseOptionsToDefaultDateFormat(): void;
  /**
   * @desc sets startDate, endDate
   */
  processDateRangeModel(): void;
  /**
   * @desc sets minDate, maxDate, startDate, endDate if not passed
   */
  handleDateArray(): void;
  sanitizeDates(): void;
  processRanges(): void;
  selectActiveRange(): void;
  generateCalendar(
    date: any,
    side: any
  ): {
    label: string;
    months: any[];
    years: any[];
    itemRows: Object[];
  };
  generateTimePicker(
    time: any,
    side: any
  ): {
    hour: any[];
    minute: any[];
    meridian: any[];
  };
  capitalize(day: any): any;
  updateInputField(): void;
  updateActiveItemInputField(): void;
  dateRangeSelected(): void;
  getDateRangeModel(format?: any): {};
  getDateRangeModelItem(format?: any): DateRangeModelItem;
  doApply(): void;
  doDateRangeModelChange(): void;
  onTimezoneChange(tz: any): void;
  getSelectedTimeItemText(item: any, side: any): any;
  setActiveItemOnRangeClick(): void;
  updateActiveItem(): void;
}
