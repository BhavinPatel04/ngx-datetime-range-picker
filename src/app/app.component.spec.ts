import { async, TestBed } from "@angular/core/testing";
import { MatFormFieldModule, MatSelectModule } from "@angular/material";
import { AppComponent } from "./app.component";
import { NgxDateTimeRangePickerModule } from "./dateTimeRangePicker";

describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [MatFormFieldModule, MatSelectModule, NgxDateTimeRangePickerModule.forRoot()],
    }).compileComponents();
  }));

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
