# Description

M1 DateRangePicker

##Features:

-   Multiple views - ['daily', 'weekly', 'monthly', 'quarterly', 'yearly']
-   Provides an option to add pre-defined ranges
-   Can pass different dateFormat for input, view and output
-   Can pass a REST service as an option (provided service returns the data in options.interface.ts format)
-   Can change the options after the REST service response
-   Uses `dateRangeModel` (ngModel) to set options
-   Has the flexibility to be used as SingleDatePicker and DateRangePicker
-   Provides an option to use the calendar in RETAIL view (used often in 'weekly' views)
-   Has an ability to show rowNumber for dates (weekNumber, quarterNumber, year)
-   Provides an option to go to any month directly
-   (For SingleDatePicker) Provides flexibility to show either 'endDate' or 'startDate'
-   Does NOT directly get/set the values from/in cache(LocalStorage)
-   Time picker

##Usage

-   Refer /sample dashboard to get started

###dateRangeModel

-   dateRangeModel: Object
-   dateRangeModel should be immutable
-   It can store multiple models
    Eg: It can store different model for 'daily' view, different model for 'weekly' view and so on.

        Custom modelKeys can be passed to store the model for 'custom' views

        Methods to modify:

          ####Declaration
          // in HTML: [(dateRangeModel)]="selectedOptions.date"
          let this.selectedOptions = {
            date: {}
          };

          ####Modification
          Since we are subscribing the REST service 2 times (1. In DateRangePickerComponent & 2. DashboardComponent), we need to add setTimeout() in DashboardComponent to make sure the changes are detected after the dateRangePicker is initalized.

          setTimeout(()=>{
            this.selectedOptions.date = {
              'daily' : {
                startDate: '2017-01-01',
                endDate: '2017-01-01',
              }
            };
          })

          // OR

          setTimeout(()=>{
            this.selectedOptions.date = JSON.parse(JSON.stringify(this.selectedOptions.date));
            this.selectedOptions.date[this.selectedTab].startDate = '2017-01-01';
            this.selectedOptions.date[this.selectedTab].endDate = '2017-01-01';
          })

    ####TimePicker
    Format: HH:mm or hh:mm A

####Reference
TimeZone:
if (60 == so && 0 == wo) return 'Europe/London';
if (120 == so && 60 == wo) return 'Europe/Amsterdam';
if (180 == so && 120 == wo) return 'Europe/Athens';
if (240 == so && 180 == wo) return 'Europe/Moscow';
