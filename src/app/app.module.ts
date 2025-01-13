import { NgModule, Injector } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";

import { AppInitService } from "src/common/services/app.init.service";
import { InjectorService } from "src/common/services/injector.service";
import { SharedService } from "src/common/services/shared.service";

import { NgxDatetimeRangePickerModule } from "ngx-datetime-range-picker";
// import { NgxDatetimeRangePickerModule } from "../../projects/ngx-datetime-range-picker/src/lib/ngx-datetime-range-picker.module";

import { MaterialModule } from "../../projects/ngx-datetime-range-picker/src/lib/material/material.module";

import { AppComponent } from "./app.component";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxDatetimeRangePickerModule.forRoot(),
    MaterialModule,
    MatButtonToggleModule,
    MatCardModule,
    MatDividerModule
  ],
  providers: [AppInitService, SharedService, provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    InjectorService.injector = this.injector;
  }
}
