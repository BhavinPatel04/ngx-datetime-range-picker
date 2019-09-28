import { NgModule, ModuleWithProviders, Optional, SkipSelf } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { MaterialModule } from "./material/material.module";
import { NgxDatetimeRangePickerComponent } from "./ngx-datetime-range-picker.component";
import { ObjNgFor } from "./pipes/objNgFor.pipe";
import { NgxDatetimeRangePickerService } from "./ngx-datetime-range-picker.service";

@NgModule({
  declarations: [ObjNgFor, NgxDatetimeRangePickerComponent],
  imports: [CommonModule, FormsModule, MaterialModule],
  exports: [NgxDatetimeRangePickerComponent, MaterialModule]
})
export class NgxDatetimeRangePickerModule {
  constructor(@Optional() @SkipSelf() parentModule: NgxDatetimeRangePickerModule) {
    if (parentModule) {
      throw new Error(`ERR_NGX_DATETIME_RANGE_PICKER:
        NgxDatetimeRangePickerModule is already loaded. Import it in the AppModule only`);
    }
  }

  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxDatetimeRangePickerModule,
      providers: [NgxDatetimeRangePickerService]
    };
  }
}
