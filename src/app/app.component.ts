import { Component } from "@angular/core";
import { Options, Settings, DateRangeModel } from "../../projects/ngx-datetime-range-picker/src/lib/interfaces";

declare var require: any;
const moment = require("moment");

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  public selectedOption = "daily";
  public options = [
    { name: "Daily", value: "daily" },
    { name: "Weekly", value: "weekly" },
    { name: "Monthly", value: "monthly" },
    { name: "Quarterly", value: "quarterly" },
    { name: "Yearly", value: "yearly" }
  ];

  public selectedOptions: any = {
    date: {
      startDate: "2018-10-19",
      endDate: "2018-10-19",
      weekly: {
        startDate: "2019-01-01",
        endDate: "2019-01-06"
      } as Options
    } as DateRangeModel,
    dateRange: {
      weekly: {
        startDate: "2018-10-13",
        endDate: "2018-10-19"
      } as Options
    } as DateRangeModel,
    dateArrayRange: {
      weekly: {
        dateArray: ["2018-10-13", "2018-10-20", "2018-10-27"],
        minDate: "2018-06-03",
        maxDate: "2018-12-15"
      } as Options
    } as DateRangeModel,
    dateTimeRange: {
      daily: {
        startDate: "2017-01-01",
        endDate: moment().format("YYYY-MM-DD"),
        minDate: "2017-01-01",
        maxDate: "2018-12-31",
        startTime: "13:00",
        endTime: "18:00"
      } as Options
    } as DateRangeModel
  };
  public datePickerOptions: Options = {};
  public datePickerSettings: Settings = this.getDateSettings();
  public dateRangePickerOptions: Options = {};
  public dateRangePickerSettings: Settings = this.getDateRangeSettings();
  public dateArrayRangePickerOptions: Options = {};
  public dateArrayRangePickerSettings: Settings = this.getDateArrayRangeSettings();
  public dateTimeRangePickerSettings: Settings = this.getDateTimeRangeSettings();

  public onFilterChange(event, filter) {
    if (typeof event.defaultPrevented !== "undefined") {
      event.preventDefault();
    }
    if (filter === "level") {
      this.datePickerSettings = this.getDateSettings();
      this.datePickerSettings.type = event.value;
      this.dateRangePickerSettings = this.getDateRangeSettings();
      this.dateRangePickerSettings.type = event.value;
      this.dateArrayRangePickerSettings = this.getDateArrayRangeSettings();
      this.dateArrayRangePickerSettings.type = event.value;
      this.dateTimeRangePickerSettings = this.getDateTimeRangeSettings();
      this.dateTimeRangePickerSettings.type = event.value;
    }
  }

  public getDateSettings(): Settings {
    return {
      singleDatePicker: true,
      displayEndDate: true,
      retailCalendar: false,
      timezoneSupport: false,
      type: this.selectedOption,
      viewDateFormat: "MMM D, YYYY",
      placeholder: "Date",
      inputDateFormat: "YYYY-MM-DD",
      showRowNumber: true
    };
  }

  public getDateRangeSettings(): Settings {
    return {
      retailCalendar: false,
      timezoneSupport: false,
      type: this.selectedOption,
      viewDateFormat: "MMM D, YYYY",
      placeholder: "Date Range",
      inputDateFormat: "YYYY-MM-DD"
    };
  }

  public getDateArrayRangeSettings(): Settings {
    return {
      retailCalendar: false,
      timezoneSupport: false,
      type: this.selectedOption,
      viewDateFormat: "MMM D, YYYY",
      placeholder: "Date Array Range",
      inputDateFormat: "YYYY-MM-DD"
    };
  }

  public getDateTimeRangeSettings(): Settings {
    return {
      retailCalendar: false,
      timezoneSupport: false,
      timePicker: true,
      type: this.selectedOption,
      viewDateFormat: "MMM D, YYYY",
      placeholder: "Date Time Range",
      inputDateFormat: "YYYY-MM-DD"
    };
  }
}
