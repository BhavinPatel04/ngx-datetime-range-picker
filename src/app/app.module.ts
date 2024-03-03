import { NgModule, Injector } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppInitService } from "src/common/services/app.init.service";
import { InjectorService } from "src/common/services/injector.service";
import { SharedService } from "src/common/services/shared.service";

// import { NgxDatetimeRangePickerModule } from "ngx-datetime-range-picker";
import { NgxDatetimeRangePickerModule } from "../../projects/ngx-datetime-range-picker/src/lib/ngx-datetime-range-picker.module";

import { MaterialModule } from "../../projects/ngx-datetime-range-picker/src/lib/material/material.module";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxDatetimeRangePickerModule.forRoot(),
    MaterialModule
  ],
  providers: [AppInitService, SharedService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    InjectorService.injector = this.injector;
  }
}
