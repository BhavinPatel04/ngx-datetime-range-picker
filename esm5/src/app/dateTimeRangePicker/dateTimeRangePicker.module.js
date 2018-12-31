/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule } from "@angular/material";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ObjNgFor } from "../pipes/objNgFor.pipe";
import { DateTimeRangePickerComponent } from "./dateTimeRangePicker.component";
import { DateTimeRangePickerUtilityService } from "./dateTimeRangePicker.utility.service";
/** @type {?} */
var declarations = [ObjNgFor, DateTimeRangePickerComponent];
var NgxDateTimeRangePickerModule = /** @class */ (function() {
  function NgxDateTimeRangePickerModule() {}
  /**
   * @return {?}
   */
  NgxDateTimeRangePickerModule.forRoot
  /**
   * @return {?}
   */ = function() {
    return {
      ngModule: NgxDateTimeRangePickerModule,
      providers: [DateTimeRangePickerUtilityService]
    };
  };
  NgxDateTimeRangePickerModule.decorators = [
    {
      type: NgModule,
      args: [
        {
          declarations: declarations,
          imports: [
            BrowserModule,
            BrowserAnimationsModule,
            FormsModule,
            MatFormFieldModule,
            MatButtonModule,
            MatInputModule,
            MatIconModule,
            MatSelectModule
          ],
          exports: [DateTimeRangePickerComponent]
        }
      ]
    }
  ];
  return NgxDateTimeRangePickerModule;
})();
export { NgxDateTimeRangePickerModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZVRpbWVSYW5nZVBpY2tlci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZGF0ZXRpbWUtcmFuZ2UtcGlja2VyLyIsInNvdXJjZXMiOlsic3JjL2FwcC9kYXRlVGltZVJhbmdlUGlja2VyL2RhdGVUaW1lUmFuZ2VQaWNrZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxrQkFBa0IsRUFBRSxhQUFhLEVBQUUsY0FBYyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3hILE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUUvRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFbEQsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDL0UsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sdUNBQXVDLENBQUM7O0lBRXBGLFlBQVksR0FBRyxDQUFDLFFBQVEsRUFBRSw0QkFBNEIsQ0FBQztBQUU3RDtJQUFBO0lBcUJBLENBQUM7Ozs7SUFOZSxvQ0FBTzs7O0lBQXJCO1FBQ0UsT0FBTztZQUNMLFFBQVEsRUFBRSw0QkFBNEI7WUFDdEMsU0FBUyxFQUFFLENBQUMsaUNBQWlDLENBQUM7U0FDL0MsQ0FBQztJQUNKLENBQUM7O2dCQXBCRixRQUFRLFNBQUM7b0JBQ1IsWUFBWSxjQUFBO29CQUNaLE9BQU8sRUFBRTt3QkFDUCxhQUFhO3dCQUNiLHVCQUF1Qjt3QkFDdkIsV0FBVzt3QkFDWCxrQkFBa0I7d0JBQ2xCLGVBQWU7d0JBQ2YsY0FBYzt3QkFDZCxhQUFhO3dCQUNiLGVBQWU7cUJBQ2hCO29CQUNELE9BQU8sRUFBRSxDQUFDLDRCQUE0QixDQUFDO2lCQUN4Qzs7SUFRRCxtQ0FBQztDQUFBLEFBckJELElBcUJDO1NBUFksNEJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IE1hdEJ1dHRvbk1vZHVsZSwgTWF0Rm9ybUZpZWxkTW9kdWxlLCBNYXRJY29uTW9kdWxlLCBNYXRJbnB1dE1vZHVsZSwgTWF0U2VsZWN0TW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIjtcbmltcG9ydCB7IEJyb3dzZXJBbmltYXRpb25zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9uc1wiO1xuXG5pbXBvcnQgeyBPYmpOZ0ZvciB9IGZyb20gXCIuLi9waXBlcy9vYmpOZ0Zvci5waXBlXCI7XG5cbmltcG9ydCB7IERhdGVUaW1lUmFuZ2VQaWNrZXJDb21wb25lbnQgfSBmcm9tIFwiLi9kYXRlVGltZVJhbmdlUGlja2VyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgRGF0ZVRpbWVSYW5nZVBpY2tlclV0aWxpdHlTZXJ2aWNlIH0gZnJvbSBcIi4vZGF0ZVRpbWVSYW5nZVBpY2tlci51dGlsaXR5LnNlcnZpY2VcIjtcblxuY29uc3QgZGVjbGFyYXRpb25zID0gW09iak5nRm9yLCBEYXRlVGltZVJhbmdlUGlja2VyQ29tcG9uZW50XTtcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zLFxuICBpbXBvcnRzOiBbXG4gICAgQnJvd3Nlck1vZHVsZSxcbiAgICBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBNYXRGb3JtRmllbGRNb2R1bGUsXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIE1hdElucHV0TW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgTWF0U2VsZWN0TW9kdWxlLFxuICBdLFxuICBleHBvcnRzOiBbRGF0ZVRpbWVSYW5nZVBpY2tlckNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIE5neERhdGVUaW1lUmFuZ2VQaWNrZXJNb2R1bGUge1xuICBwdWJsaWMgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBOZ3hEYXRlVGltZVJhbmdlUGlja2VyTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbRGF0ZVRpbWVSYW5nZVBpY2tlclV0aWxpdHlTZXJ2aWNlXSxcbiAgICB9O1xuICB9XG59XG4iXX0=
