import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MaterialModule } from "./material/material.module";

import { AppComponent } from "./app.component";

import { ObjNgFor } from "./pipes/objNgFor.pipe";

import { DateTimeRangePickerComponent } from "./dateTimeRangePicker/dateTimeRangePicker.component";
import { DateTimeRangePickerUtilityService } from "./dateTimeRangePicker/dateTimeRangePicker.utility.service";

@NgModule({
  declarations: [AppComponent, ObjNgFor, DateTimeRangePickerComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,

    // material
    MaterialModule,
  ],
  providers: [DateTimeRangePickerUtilityService],
  bootstrap: [AppComponent],
})
export class AppModule {}
