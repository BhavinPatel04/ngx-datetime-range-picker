import { Component } from "@angular/core";
import { Options, Settings, DateRangeModel } from "../../projects/ngx-datetime-range-picker/src/lib/interfaces";
import moment from "moment";

const DEFAULT_DATE_FORMAT = "YYYY-MM-DD";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  standalone: false
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
  public componentTypes = [
    { name: "Single Date Picker", value: "singleDatePicker" },
    { name: "Date Range Picker", value: "dateRangePicker" },
    { name: "Date Array Range Picker", value: "dateArrayRangePicker" },
    { name: "Date Time Range Picker", value: "dateTimeRangePicker" },
    { name: "Date Time Range Picker with Timezone", value: "dateTimeRangeWithTimeZonePicker" }
  ];

  public selectedOptions: any = {
    date: {
      daily: {
        startDate: moment().format(DEFAULT_DATE_FORMAT),
        endDate: moment().format(DEFAULT_DATE_FORMAT)
      },
      weekly: {
        startDate: moment()
          .subtract(6, "days")
          .format(DEFAULT_DATE_FORMAT),
        endDate: moment().format(DEFAULT_DATE_FORMAT)
      } as Options
    } as DateRangeModel,
    dateRange: {
      daily: {
        startDate: moment()
          .subtract(6, "days")
          .format(DEFAULT_DATE_FORMAT),
        endDate: moment().format(DEFAULT_DATE_FORMAT)
      },
      weekly: {
        startDate: moment()
          .subtract(2, "weeks")
          .format(DEFAULT_DATE_FORMAT),
        endDate: moment().format(DEFAULT_DATE_FORMAT)
      } as Options
    } as DateRangeModel,
    dateArrayRange: {
      daily: {
        dateArray: [
          moment()
            .subtract(1, "weeks")
            .format(DEFAULT_DATE_FORMAT),
          moment()
            .subtract(3, "weeks")
            .format(DEFAULT_DATE_FORMAT),
          moment()
            .subtract(5, "weeks")
            .format(DEFAULT_DATE_FORMAT)
        ],
        minDate: moment()
          .subtract(6, "weeks")
          .format(DEFAULT_DATE_FORMAT),
        maxDate: moment().format(DEFAULT_DATE_FORMAT)
      },
      weekly: {
        dateArray: [
          moment().format(DEFAULT_DATE_FORMAT),
          moment()
            .subtract(3, "weeks")
            .format(DEFAULT_DATE_FORMAT),
          moment()
            .subtract(5, "weeks")
            .format(DEFAULT_DATE_FORMAT)
        ],
        minDate: moment()
          .subtract(6, "weeks")
          .format(DEFAULT_DATE_FORMAT),
        maxDate: moment().format(DEFAULT_DATE_FORMAT)
      } as Options
    } as DateRangeModel,
    dateTimeRange: {
      daily: {
        startDate: moment()
          .subtract(6, "weeks")
          .format(DEFAULT_DATE_FORMAT),
        endDate: moment().format(DEFAULT_DATE_FORMAT),
        minDate: "2017-01-01",
        maxDate: moment().format(DEFAULT_DATE_FORMAT),
        startTime: "13:00",
        endTime: "18:00"
      } as Options
    } as DateRangeModel,
    dateTimeWithTimezoneRange: {
      daily: {
        startDate: moment()
          .subtract(6, "weeks")
          .format(DEFAULT_DATE_FORMAT),
        endDate: moment().format(DEFAULT_DATE_FORMAT),
        minDate: "2017-01-01",
        maxDate: moment().format(DEFAULT_DATE_FORMAT),
        startTime: "13:00",
        endTime: "18:00"
      } as Options
    } as DateRangeModel
  };

  public selectedComponentType = "singleDatePicker";

  public config: any = JSON.parse(JSON.stringify(this.selectedOptions));
  public datePickerOptions: Options = {};
  public datePickerSettings: Settings = this.getDateSettings();
  public dateRangePickerOptions: Options = {};
  public dateRangePickerSettings: Settings = this.getDateRangeSettings();
  public dateArrayRangePickerOptions: Options = {};
  public dateArrayRangePickerSettings: Settings = this.getDateArrayRangeSettings();
  public dateTimeRangePickerSettings: Settings = this.getDateTimeRangeSettings();
  public dateTimeRangeWithTimeZonePickerOptions: Settings = this.getDateTimeRangeWithTimeZoneSettings();

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
      this.dateTimeRangeWithTimeZonePickerOptions = this.getDateTimeRangeWithTimeZoneSettings();
      this.dateTimeRangeWithTimeZonePickerOptions.type = event.value;
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
      label: "Date",
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
      label: "Date Range",
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
      label: "Date Array Range",
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
      label: "Date Time Range",
      placeholder: "Date Time Range",
      inputDateFormat: "YYYY-MM-DD"
    };
  }

  public getDateTimeRangeWithTimeZoneSettings(): Settings {
    return {
      retailCalendar: false,
      timezoneSupport: true,
      timePicker: true,
      type: this.selectedOption,
      viewDateFormat: "MMM D, YYYY",
      label: "Date Time Range",
      placeholder: "Date Time Range",
      inputDateFormat: "YYYY-MM-DD"
    };
  }

  public printDate(date): string {
    if (!date || !date[this.selectedOption]) {
      return;
    }
    return JSON.stringify(date[this.selectedOption], null, 4).trim();
  }

  public printSettings(settings): string {
    if (!settings) {
      return;
    }
    return JSON.stringify(settings, null, 4).trim();
  }
}
