import { TestBed } from "@angular/core/testing";
import { provideZoneChangeDetection } from "@angular/core";

import { NgxDatetimeRangePickerService } from "./ngx-datetime-range-picker.service";
import { Options, Config, State, Settings } from "./interfaces";

declare let require: any;
const moment = require("moment");

const DEFAULT_DATE_FORMAT = "YYYY-MM-DD";

describe("NgxDatetimeRangePickerService", () => {
  let service: NgxDatetimeRangePickerService;
  let options: Options;
  let settings: Settings;
  let config: Config;
  let state: State;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideZoneChangeDetection({ ignoreChangesOutsideZone: true })]
    });
    service = TestBed.get(NgxDatetimeRangePickerService);
    options = service.getDefaultOptions();
    settings = service.getDefaultSettings();
    config = Object.assign(options, settings);
    state = service.getDefaultState();
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("#getDateCharacteristics", () => {
    const date = moment().format(DEFAULT_DATE_FORMAT);
    const month = moment().format("MMM YYYY");
    const side = "left";

    expect(service.getDateCharacteristics(config, state, date, month, side)).toEqual({
      available: true,
      inRange: true,
      active: true,
      today: true
    });
  });
});
