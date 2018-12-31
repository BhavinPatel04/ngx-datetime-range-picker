import { ModuleWithProviders, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule } from "@angular/material";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { ObjNgFor } from "../pipes/objNgFor.pipe";

import { DateTimeRangePickerComponent } from "./dateTimeRangePicker.component";
import { DateTimeRangePickerUtilityService } from "./dateTimeRangePicker.utility.service";

const declarations = [ObjNgFor, DateTimeRangePickerComponent];

@NgModule({
  declarations,
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
  ],
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
