import { ModuleWithProviders, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "../material/material.module";

import { ObjNgFor } from "../pipes/objNgFor.pipe";

import { DateTimeRangePickerComponent } from "./dateTimeRangePicker.component";
import { DateTimeRangePickerUtilityService } from "./dateTimeRangePicker.utility.service";

const declarations = [ObjNgFor, DateTimeRangePickerComponent];

@NgModule({
  declarations,
  imports: [BrowserModule, BrowserAnimationsModule, FormsModule, MaterialModule],
  exports: [DateTimeRangePickerComponent],
})
export class NgxDateTimeRangePickerModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxDateTimeRangePickerModule,
      providers: [DateTimeRangePickerUtilityService],
    };
  }
}
