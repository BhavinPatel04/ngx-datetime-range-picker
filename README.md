# ngx-datetime-range-picker

> Ngx Date time range picker with daily, weekly, monthl, quarterly & yearly levels

[![Build Status](https://travis-ci.org/BhavinPatel04/ngx-datetime-range-picker.svg?branch=master)](https://travis-ci.org/BhavinPatel04/ngx-datetime-range-picker)
[![npm version](https://badge.fury.io/js/ngx-datetime-range-picker.svg)](https://badge.fury.io/js/ngx-datetime-range-picker)

This plugin uses bootstrap, moment.js, lodash and font-awesome.

Demo: https://bhavinpatel04.github.io/ngx-datetime-range-picker/

## Installation

Install the plugin from npm:

```
npm install ngx-datetime-range-picker --save
```

import **NgxDateTimeRangePickerModule** in your module:

```typescript
...
import { FormsModule } from '@angular/forms';
import { NgxDateTimeRangePickerModule } from 'ngx-datetime-range-picker';
import { AppComponent } from "./app.component";

@NgModule({
    imports:      [... , FormsModule, NgxDateTimeRangePickerModule.forRoot()],
    declarations: [AppComponent],
    bootstrap:    [AppComponent]
})
export class AppModule {}
```

## Usage example

Html:

```html
<b-date-range-picker
  name="date"
  [options]="datePickerOptions"
  [settings]="datePickerSettings"
  [(dateRangeModel)]="selectedDate"
  (dateRangeChanged)="onFilterChange($event)"
  required
>
</b-date-range-picker>
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

https://github.com/BhavinPatel04/ngx-datetime-range-picker/blob/master/src/app/dateTimeRangePicker/interfaces/options.interface.ts

## Settings

https://github.com/BhavinPatel04/ngx-datetime-range-picker/blob/master/src/app/dateTimeRangePicker/interfaces/settings.interface.ts

## [License](https://github.com/BhavinPatel04/ngx-datetime-range-picker/blob/master/LICENSE)

MIT
