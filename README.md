# ngx-datetime-range-picker

> Ngx Date time range picker with daily, weekly, monthly, quarterly & yearly levels

[![Build Status](https://travis-ci.org/BhavinPatel04/ngx-datetime-range-picker.svg?branch=master)](https://travis-ci.org/BhavinPatel04/ngx-datetime-range-picker)
[![npm version](https://badge.fury.io/js/ngx-datetime-range-picker.svg)](https://badge.fury.io/js/ngx-datetime-range-picker)

This plugin uses bootstrap, moment.js and font-awesome.

Demo: https://bhavinpatel04.github.io/ngx-datetime-range-picker/

## Installation

Install the plugin from npm:

```
npm install ngx-datetime-range-picker --save
```

import **NgxDatetimeRangePickerModule** in your module:

```typescript
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
...
import { FormsModule } from "@angular/forms";
import { NgxDatetimeRangePickerModule } from "ngx-datetime-range-picker";
import { AppComponent } from "./app.component";

@NgModule({
    imports:      [BrowserModule, BrowserAnimationsModule, ... , FormsModule, NgxDatetimeRangePickerModule.forRoot()],
    declarations: [AppComponent],
    bootstrap:    [AppComponent]
})
export class AppModule {}
```

Tell ngx-datetime-range-picker which theme to use:
Add below config in your `style.scss`/`some-cool-name-theme.scss`, which has material theme (or not) and is imported in your `angular.json`

```
@import "ngx-datetime-range-picker/ngx-datetime-range-picker.theme.scss";
@include ngx-datetime-range-picker-theme($app-theme);
```

If you _don't_ have a theme and want to use library's default theme

```
@import "ngx-datetime-range-picker/ngx-datetime-range-picker.theme.scss";
@include ngx-datetime-range-picker-theme();
```

_Note_: Make sure whichever file you are adding this to should be imported in `angular.json`

## Usage example

Html:

```html
<ngx-datetime-range-picker
  name="date"
  [options]="datePickerOptions"
  [settings]="datePickerSettings"
  [(dateRangeModel)]="selectedDate"
  (dateRangeChanged)="onFilterChange($event)"
  required
>
</ngx-datetime-range-picker>
```

Typescript:

```typescript
selectedDate: {
    daily: {
        startDate: "2018-10-13",
        endDate: "2018-10-19",
      },
    weekly: {
        startDate: "2018-10-13",
        endDate: "2018-10-19",
    },
    monthly: {
        startDate: "2018-10-13",
        endDate: "2018-10-19",
    },
    quarterly: {
        startDate: "2018-10-13",
        endDate: "2018-10-19",
    },
    yearly: {
        startDate: "2018-10-13",
        endDate: "2018-10-19",
    }
};
```

## Options

| Option    | Type   | Description                                 |
| --------- | ------ | ------------------------------------------- |
| dateArray | Array  | Only the dates in the array will be enabled |
| startDate | string | Start date                                  |
| endDate   | string | End date                                    |
| minDate   | string | Min date                                    |
| maxDate   | string | Max date                                    |
| startTime | string | Start time (only for timepicker)            |
| endTime   | string | End time (only for timepicker)              |
| minTime   | string | Min time (only for timepicker)              |
| maxTime   | string | Max time (only for timepicker)              |

## Settings

| Setting           | Type    | Default                                                                                                               | Description                                               |
| ----------------- | ------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| type              | string  | 'daily'                                                                                                               | type (daily                                               | weekly | monthly | quarterly | yearly) |
| timePicker        | boolean | false                                                                                                                 | enable/disable timepicker                                 |
| inputDateFormat   | string  | "YYYY-MM-DD"                                                                                                          | input date format                                         |
| viewDateFormat    | string  | "YYYY-MM-DD"                                                                                                          | date format to view the date in                           |
| outputDateFormat  | string  | "YYYY-MM-DD"                                                                                                          | date format in which change event will return the date in |
| singleDatePicker  | boolean | false                                                                                                                 | enable/disable single date picker                         |
| componentDisabled | string  | false                                                                                                                 | enable/disable component                                  |
| placeholder       | string  | "Select Date"                                                                                                         | placeholder/title of the component                        |
| showRowNumber     | boolean | true                                                                                                                  | hide/show week numers for daily                           |
| availableRanges   | Object  | {"Last 7 Days": {startDate: inputDateFormat, endDate: inputDateFormat}, "Last 30 days": {...}, "Last 90 days": {...}} | ranges to show                                            |
| showRanges        | boolean | true                                                                                                                  | hide/show ranges                                          |
| disableWeekends   | boolean | false                                                                                                                 | enable/disable weekends                                   |
| disableWeekdays   | boolean | false                                                                                                                 | enable/disable weekdays                                   |
| displayBeginDate  | boolean | false                                                                                                                 | show begin date in input                                  |
| displayEndDate    | boolean | false                                                                                                                 | show end date in input                                    |

## [License](https://github.com/BhavinPatel04/ngx-datetime-range-picker/blob/master/LICENSE)

MIT
