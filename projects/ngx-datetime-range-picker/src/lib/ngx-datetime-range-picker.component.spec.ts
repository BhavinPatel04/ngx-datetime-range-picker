import { ComponentFixture, TestBed } from "@angular/core/testing";
import { provideZoneChangeDetection, SimpleChanges } from "@angular/core";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { NgxDatetimeRangePickerModule } from "./ngx-datetime-range-picker.module";
import { NgxDatetimeRangePickerComponent } from "./ngx-datetime-range-picker.component";
import { DateSide, DateTimeRangeChangeOutput, DateTimeRangeModelChangeOutput } from "./interfaces";

declare let require: any;
const moment = require("moment");

describe("NgxDatetimeRangePickerComponent", () => {
  let component: NgxDatetimeRangePickerComponent;
  let fixture: ComponentFixture<NgxDatetimeRangePickerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgxDatetimeRangePickerModule, NoopAnimationsModule],
      providers: [provideZoneChangeDetection({ ignoreChangesOutsideZone: true })],
      declarations: []
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDatetimeRangePickerComponent);
    component = fixture.debugElement.componentInstance;

    component.settings = {};
    component.options = {};
    component.config.minDate = "2017-01-01";
    component.config.maxDate = "2017-03-31";
    component.config.startDate = "2017-02-01";
    component.config.endDate = "2017-03-01";
  });

  it("#ngOnChnages", () => {
    spyOn(component, "initialize");
    spyOn(component, "parseOptions");
    spyOn(component, "updateInputField");

    const changes: SimpleChanges = {
      options: {
        previousValue: [{ id: 0, name: "US" }],
        firstChange: true,
        isFirstChange: () => {
          return true;
        },
        currentValue: [
          {
            singleDatePicker: true,
            type: "weekly",
            startDate: "2017-02-01",
            endDate: "2017-03-01",
            viewDateFormat: "MMM DD, YYYY"
          }
        ]
      }
    };
    component.ngOnChanges(changes);
    fixture.detectChanges();
    expect(component.options).toBeDefined();
  });

  it("#onDateRangeInputChange", () => {
    spyOn(component, "dateRangeSelected");
    component.onDateRangeInputChange();
    expect(component.dateRangeSelected).toHaveBeenCalled();
  });

  it("#setDisabledState", () => {
    component.setDisabledState(false);
    expect(component.config.componentDisabled).toBeFalsy();
  });

  it("#onComponentClick", () => {
    component.state.isCalendarVisible = false;
    component.onComponentClick();
    expect(component.state.isCalendarVisible).toBeTruthy();
  });

  it("#onFocusInput", () => {
    const event: MouseEvent = {
      target: {
        value: "text"
      }
    } as any;
    component.onFocusInput(event);
  });

  it("#onBlurInput", () => {
    const event: MouseEvent = {
      target: {
        value: "text"
      }
    } as any;
    component.onBlurInput(event);
    expect(component.state.selectedDateText).toEqual("text");
  });

  it("#onCalendarClose", () => {
    component.config.startDate = "2017-01-01";
    component.config.endDate = "2017-12-31";
    component.onCalendarClose();
    expect(component.state.isCalendarVisible).toBeFalsy();
  });

  it("#isPrevAvailable", () => {
    component.config.minDate = "2017-01-01";
    const side = "left";
    component.state.selectedMonth[side] = "Feb";
    component.state.selectedYear[side] = "2017";
    expect(component.isPrevAvailable(side)).toBeTruthy();

    component.state.selectedMonth[side] = "Jan";
    expect(component.isPrevAvailable(side)).toBeFalsy();
  });

  it("#isNextAvailable", () => {
    component.config.maxDate = "2017-03-31";
    const side = "left";
    component.state.selectedMonth[side] = "Feb";
    component.state.selectedYear[side] = "2017";
    expect(component.isNextAvailable(side)).toBeTruthy();

    component.state.selectedMonth[side] = "Mar";
    expect(component.isNextAvailable(side)).toBeFalsy();
  });

  it("#getCalendarColspan", () => {
    component.config.type = "daily";
    expect(component.getCalendarColspan()).toEqual(6);
  });

  it("#getCalendarRowItemColspan", () => {
    component.config.type = "monthly";
    expect(component.getCalendarRowItemColspan()).toEqual(3);
  });

  it("#onClickPrevious", () => {
    const side = "left";
    component.state.selectedMonth[side] = "Feb";
    component.state.selectedYear[side] = "2017";
    component.onClickPrevious(side);
    expect(component.state.dates[side]).toBeDefined();
  });

  it("#onClickNext", () => {
    const side = "left";
    component.state.selectedMonth[side] = "Feb";
    component.state.selectedYear[side] = "2017";
    component.onClickNext(side);
    expect(component.state.dates[side]).toBeDefined();
  });

  it("#onCellClick", () => {
    spyOn(component, "doApply");
    let item = {
      date: "2017-02-04",
      available: false
    };
    component.onCellClick(item, null, "left");

    item = {
      date: "2017-02-02",
      available: true
    };
    component.onCellClick(item, null, "left");
    expect(component.config.startDate).toEqual(item.date);

    component.config.startDate = "2017-02-02";
    item = {
      date: "2017-02-04",
      available: true
    };
    component.onCellClick(item, null, "left");
    expect(component.config.endDate).toEqual(item.date);

    component.config.singleDatePicker = true;
    component.onCellClick(item, null, "left");
    expect(component.config.endDate).toEqual(component.config.startDate);
  });

  it("#onCellMouseEnter", () => {
    let item = {
      date: "2017-02-04",
      available: false
    };
    component.onCellMouseEnter(item, null, "left");

    component.config.endDate = null;
    component.config.startDate = "2017-02-02";
    item = {
      date: "2017-02-02",
      available: true
    };
    component.state.dates = {
      left: {
        label: "Feb 2017",
        months: ["Jan", "Feb", "Mar"],
        years: ["2017"],
        itemRows: [
          {
            rowNumber: "",
            rowNumberText: "",
            items: [
              {
                date: "2017-02-02",
                rowItemText: "2",
                available: true,
                inRange: true,
                active: false,
                today: false
              }
            ]
          }
        ]
      }
    };
    component.onCellMouseEnter(item, null, "left");
  });

  it("#onCellMouseLeave", () => {
    component.config.endDate = null;
    component.state.dates = {
      left: {
        label: "Feb 2017",
        months: ["Jan", "Feb", "Mar"],
        years: ["2017"],
        itemRows: [
          {
            rowNumber: "",
            rowNumberText: "",
            items: [
              {
                date: "2017-02-02",
                rowItemText: "2",
                available: true,
                inRange: true,
                active: false,
                today: false
              }
            ]
          }
        ]
      }
    };
    component.onCellMouseLeave();
  });

  it("#onRangeClick", () => {
    spyOn(component, "doApply");
    const startDate = moment("2017-02-02", "YYYY-MM-DD")
      .subtract(6, "days")
      .format("YYYY-MM-DD");
    const endDate = "2017-02-02";
    let rangeLabel = "Last 7 Days";
    const dateRangeModel = {
      startDate,
      endDate
    };
    component.onRangeClick(rangeLabel, dateRangeModel);
    expect(component.config.startDate).toEqual(startDate);
    expect(component.config.endDate).toEqual(endDate);

    rangeLabel = "Custom Range";
    component.state.customRange = true;
    component.onRangeClick(rangeLabel, dateRangeModel);
    expect(component.state.sides.length).toEqual(0);
  });

  it("#onCalendarLabelChange", () => {
    spyOn(component, "doApply");
    const label = "Feb";
    let side = "left";
    let type = "month";
    component.state.selectedYear[side] = "2017";
    component.onCalendarLabelChange(label, side, type);
    expect(component.state.dates[side]).toBeDefined();

    component.config.type = "yearly";
    type = "year";
    side = "right";
    component.state.selectedYear[side] = "2017";
    component.state.selectedYear.left = "2017";
    component.onCalendarLabelChange(label, side, type);
    expect(component.doApply).toHaveBeenCalled();
  });

  it("#initialize", () => {
    component.initialize();
    expect(component.state.sides.length).toEqual(0);
    expect(component.state.dates).toEqual({
      left: {} as DateSide,
      right: {} as DateSide
    });
    expect(component.state.activeStartDate).toBeNull();
    expect(component.state.activeEndDate).toBeNull();
    expect(component.state.frequencyColumnHeader).toBeNull();
    expect(component.state.customRange).toBeFalsy();
    expect(component.state.activeRange).toEqual(null);
  });

  it("#parseOptions", () => {
    component.options = {
      startDate: "2017-02-01",
      endDate: "2017-03-01"
    };
    component.settings = {
      singleDatePicker: true,
      type: "weekly",
      viewDateFormat: "MMM DD, YYYY"
    };
    component.parseOptions();
    expect(component.config.minDate).toBeDefined();
    expect(component.config.maxDate).toBeDefined();
    expect(component.config.startDate).toBeDefined();
    expect(component.config.endDate).toBeDefined();
  });

  it("#parseOptionsToDefaultDateFormat", () => {
    component.parseOptionsToDefaultDateFormat();
    expect(component.config.minDate).toBeDefined();
    expect(component.config.maxDate).toBeDefined();
    expect(component.config.startDate).toBeDefined();
    expect(component.config.endDate).toBeDefined();
  });

  it("#handleDateArray", () => {
    component.config.dateArray = ["2017-02-02"];
    component.handleDateArray();
    expect(component.config.minDate).toBeDefined();
    expect(component.config.maxDate).toBeDefined();
    expect(component.config.startDate).toBeDefined();
    expect(component.config.endDate).toBeDefined();
  });

  it("#sanitizeDates", () => {
    component.config.retailCalendar = true;
    component.config.type = "monthly";
    component.sanitizeDates();
    expect(component.config.minDate).toBeDefined();
    expect(component.config.maxDate).toBeDefined();
    expect(component.config.startDate).toBeDefined();
    expect(component.config.endDate).toBeDefined();
  });

  it("#processRanges", () => {
    component.config.showRanges = true;
    component.config.availableRanges = {};
    component.processRanges();
    expect(component.config.availableRanges).toBeDefined();

    component.state.customRange = false;
    component.config.showRanges = false;
    component.processRanges();
    expect(component.state.customRange).toBeTruthy();
  });

  it("#selectActiveRange", () => {
    spyOn(component, "onRangeClick");
    const startDate = moment("2017-02-02", "YYYY-MM-DD")
      .subtract(6, "days")
      .format("YYYY-MM-DD");
    const endDate = "2017-02-02";
    component.config.availableRanges = {
      "Last 7 Days": {
        startDate,
        endDate
      }
    };
    component.state.activeRange = null;
    component.selectActiveRange();
    expect(component.state.activeRange).toEqual("Custom Range");

    component.config.startDate = startDate;
    component.config.endDate = endDate;
    component.selectActiveRange();
    expect(component.state.activeRange).toEqual("Last 7 Days");
  });

  it("#generateCalendar", () => {
    component.config.type = "daily";
    const date = component.config.startDate;
    const side = "left";
    component.generateCalendar(date, side);
    expect(component.state.calendarAvailable[side]).toBeTruthy();
  });

  it("#updateInputField", () => {
    const endDate = component.config.endDate;
    component.config.type = "weekly";
    component.config.retailCalendar = false;
    component.state.activeItem = {
      left: {
        firstDay: moment("2017-10-06", "YYYY-MM-DD"),
        lastDay: moment("2017-10-06", "YYYY-MM-DD"),
        rowItemText: "Test"
      },
      right: {
        firstDay: moment("2017-10-06", "YYYY-MM-DD"),
        lastDay: moment("2017-10-06", "YYYY-MM-DD"),
        rowItemText: "Test"
      }
    };
    component.config.viewDateFormat = "YYYY-MM-DD";

    component.updateInputField();
    expect(component.state.selectedDateText).toEqual(`2017-01-29 - 2017-03-01`);
    expect(component.state.dateTitleText.left).toEqual("Test (2017-10-06 - 2017-10-06)");
    expect(component.state.dateTitleText.right).toEqual("Test (2017-10-06 - 2017-10-06)");

    component.config.singleDatePicker = true;
    component.updateInputField();
    expect(component.state.selectedDateText).toEqual(`2017-01-29 - 2017-03-01`);
    expect(component.state.dateTitleText.left).toEqual("Test (2017-10-06 - 2017-10-06)");
    expect(component.state.dateTitleText.right).toEqual("Test (2017-10-06 - 2017-10-06)");

    component.config.displayBeginDate = true;
    component.updateInputField();
    expect(component.state.selectedDateText).toEqual(`2017-01-29`);
    expect(component.state.dateTitleText.left).toEqual("Test (2017-10-06 - 2017-10-06)");
    expect(component.state.dateTitleText.right).toEqual("Test (2017-10-06 - 2017-10-06)");

    component.config.displayBeginDate = false;
    component.config.displayEndDate = true;
    component.updateInputField();
    expect(component.state.selectedDateText).toEqual(`${endDate}`);
    expect(component.state.dateTitleText.left).toEqual("Test (2017-10-06 - 2017-10-06)");
    expect(component.state.dateTitleText.right).toEqual("Test (2017-10-06 - 2017-10-06)");
  });

  it("#updateActiveItemInputField", () => {
    component.config.viewDateFormat = "YYYY-MM-DD";
    component.state.activeItem = {
      left: {
        firstDay: moment("2017-10-06", "YYYY-MM-DD"),
        lastDay: moment("2017-10-06", "YYYY-MM-DD"),
        rowItemText: "Test"
      },
      right: {
        firstDay: moment("2017-10-06", "YYYY-MM-DD"),
        lastDay: moment("2017-10-06", "YYYY-MM-DD"),
        rowItemText: "Test"
      }
    };

    component.updateActiveItemInputField();
    expect(component.state.selectedDateText).toEqual(``);
    expect(component.state.dateTitleText.left).toEqual("2017-10-06");
    expect(component.state.dateTitleText.right).toEqual("2017-10-06");
  });

  it("#dateRangeSelected", () => {
    spyOn(component, "getDateRangeModel");
    component.dateRangeSelected();
    expect(component.state.isCalendarVisible).toBeFalsy();
  });

  it("#getDateRangeModel", () => {
    const startDate = component.config.startDate;
    const endDate = component.config.endDate;
    component.state.activeRange = "activeRange";
    component.config.type = "daily";
    component.config.outputDateFormat = "YYYY-MM-DD";
    expect(component.getDateRangeModel()).toEqual({
      daily: {
        activeRange: component.state.activeRange,
        startDate: startDate as string,
        endDate: endDate as string
      } as DateTimeRangeChangeOutput
    } as DateTimeRangeModelChangeOutput);
  });

  it("#doApply", () => {
    spyOn(component, "dateRangeSelected");
    spyOn(component, "updateInputField");
    const startDate = component.config.startDate;
    const endDate = component.config.endDate;
    component.doApply();
    expect(component.state.activeStartDate).toEqual(startDate as string);
    expect(component.state.activeEndDate).toEqual(endDate as string);
  });
});
