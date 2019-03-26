import { TestBed } from "@angular/core/testing";

import { NgxDatetimeRangePickerService } from "./ngx-datetime-range-picker.service";

describe("NgxDatetimeRangePickerService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: NgxDatetimeRangePickerService = TestBed.get(NgxDatetimeRangePickerService);
    expect(service).toBeTruthy();
  });
});
