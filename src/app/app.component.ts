import { Component } from "@angular/core";
import { DateTimeRangePickerOptions, DateTimeRangePickerSettings } from "./dateTimeRangePicker/interfaces/index";

declare var require: any;
const moment = require("moment");

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  public title = "ngx-datetime-range-picker";

  public selectedOptions: any = {
    date: {
      startDate: "2018-10-19",
      endDate: "2018-10-19",
    },
    dateRange: {
      weekly: {
        startDate: "2018-10-13",
        endDate: "2018-10-19",
      },
    },
    dateTimeRange: {
      daily: {
        startDate: "2017-01-01",
        endDate: moment().format("YYYY-MM-DD"),
        minDate: "2017-01-01",
        maxDate: "2018-12-31",
        startTime: "13:00",
        endTime: "18:00",
      },
    },
  };
  public datePickerOptions: DateTimeRangePickerOptions = {};
  public datePickerSettings: DateTimeRangePickerSettings = {
    singleDatePicker: true,
    displayEndDate: true,
    retailCalendar: false,
    timezoneSupport: false,
    type: "daily",
    viewDateFormat: "MMM D, YYYY",
  };
  public dateRangePickerOptions: DateTimeRangePickerOptions = {};
  public dateRangePickerSettings: DateTimeRangePickerSettings = {
    retailCalendar: false,
    timezoneSupport: false,
    type: "weekly",
    viewDateFormat: "MMM D, YYYY",
  };
  public dateRangeTimePickerSettings: DateTimeRangePickerSettings = {
    retailCalendar: false,
    timezoneSupport: false,
    timePicker: true,
    type: "daily",
    viewDateFormat: "MMM D, YYYY",
  };
}
