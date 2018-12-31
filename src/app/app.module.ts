import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { NgxDateTimeRangePickerModule } from "./dateTimeRangePicker/dateTimeRangePicker.module";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, FormsModule, NgxDateTimeRangePickerModule.forRoot()],
  bootstrap: [AppComponent],
})
export class AppModule {}
