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
  public selectedOption = "daily";
  public options = [
    {
      name: "Daily",
      value: "daily",
    },
    {
      name: "Weekly",
      value: "weekly",
    },
    {
      name: "Monthly",
      value: "monthly",
    },
    {
      name: "Quarterly",
      value: "quarterly",
    },
    {
      name: "Yearly",
      value: "yearly",
    },
  ];

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
  public datePickerSettings: DateTimeRangePickerSettings = this.getDateSettings();
  public dateRangePickerOptions: DateTimeRangePickerOptions = {};
  public dateRangePickerSettings: DateTimeRangePickerSettings = this.getDateRangeSettings();
  public dateTimeRangePickerSettings: DateTimeRangePickerSettings = this.getDateTimeRangeSettings();

  public onFilterChange(event, filter) {
    if (typeof event.defaultPrevented != "undefined") {
      event.preventDefault();
    }
    if (filter == "level") {
      this.datePickerSettings = this.getDateSettings();
      this.datePickerSettings.type = event.value;
      this.dateRangePickerSettings = this.getDateRangeSettings();
      this.dateRangePickerSettings.type = event.value;
      this.dateTimeRangePickerSettings = this.getDateTimeRangeSettings();
      this.dateTimeRangePickerSettings.type = event.value;
    }
  }

  public getDateSettings(): DateTimeRangePickerSettings {
    return {
      singleDatePicker: true,
      displayEndDate: true,
      retailCalendar: false,
      timezoneSupport: false,
      type: this.selectedOption,
      viewDateFormat: "MMM D, YYYY",
      placeholder: "Date",
    };
  }

  public getDateRangeSettings(): DateTimeRangePickerSettings {
    return {
      retailCalendar: false,
      timezoneSupport: false,
      type: this.selectedOption,
      viewDateFormat: "MMM D, YYYY",
      placeholder: "Date Range",
    };
  }

  public getDateTimeRangeSettings(): DateTimeRangePickerSettings {
    return {
      retailCalendar: false,
      timezoneSupport: false,
      timePicker: true,
      type: this.selectedOption,
      viewDateFormat: "MMM D, YYYY",
      placeholder: "Date Time Range",
    };
  }
}
