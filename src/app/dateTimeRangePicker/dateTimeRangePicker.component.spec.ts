import { APP_BASE_HREF } from "@angular/common";
import { SimpleChanges } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { DateTimeRangePickerComponent } from "./dateTimeRangePicker.component";
import { NgxDateTimeRangePickerModule } from "./dateTimeRangePicker.module";

declare var require: any;
const moment = require("moment");

describe("DateTimeRangePickerComponent", () => {
  let component: DateTimeRangePickerComponent;
  let fixture: ComponentFixture<DateTimeRangePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [NgxDateTimeRangePickerModule.forRoot()],
      providers: [{ provide: APP_BASE_HREF, useValue: "/" }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateTimeRangePickerComponent);
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
            viewDateFormat: "MMM DD, YYYY",
          },
        ],
      },
    };
    component.ngOnChanges(changes);
    fixture.detectChanges();
    expect(component.options).toBeDefined();
  });

  it("#onDateRangeInputChange", () => {
    spyOn(component, "dateRangeSelected");
    component.onDateRangeInputChange("");
    expect(component.dateRangeSelected).toHaveBeenCalled();
  });

  it("#setDisabledState", () => {
    component.setDisabledState(false);
    expect(component.config.componentDisabled).toBeFalsy();
  });

  it("#onComponentClick", () => {
    component.showCalendar = false;
    component.onComponentClick();
    expect(component.showCalendar).toBeTruthy();
  });

  it("#onFocusInput", () => {
    const event = {
      target: {
        value: "text",
      },
    };
    component.onFocusInput(event);
  });

  it("#onBlurInput", () => {
    const event = {
      target: {
        value: "text",
      },
    };
    component.onBlurInput(event);
    expect(component.selectedDateText).toEqual("text");
  });

  it("#onCalendarClose", () => {
    const event = {
      target: {
        value: "text",
      },
    };
    component.config.startDate = "2017-01-01";
    component.config.endDate = "2017-12-31";
    component.onCalendarClose(event);
    expect(component.showCalendar).toBeFalsy();
  });

  it("#isPrevAvailale", () => {
    component.config.minDate = "2017-01-01";
    expect(component.isPrevAvailale("Feb 2017")).toBeTruthy();
    expect(component.isPrevAvailale("Jan 2017")).toBeFalsy();
  });

  it("#isNextAvailale", () => {
    component.config.maxDate = "2017-03-31";
    expect(component.isNextAvailale("Feb 2017")).toBeTruthy();
    expect(component.isNextAvailale("Mar 2017")).toBeFalsy();
  });

  it("#getCalendarColspan", () => {
    component.config.type = "daily";
    expect(component.getCalendarColspan()).toEqual(6);
  });

  it("#getCalendarRowItemColspan", () => {
    component.config.type = "monthly";
    expect(component.getCalendarRowItemColspan()).toEqual(3);
  });

  it("#getDatecharacteristics", () => {
    const date = "2017-02-02";
    const month = "Feb 2017";
    const side = "left";

    expect(component.getDatecharacteristics(date, month, side)).toEqual({
      available: true,
      inRange: true,
      active: false,
      today: false,
    });
  });

  it("#onClickPrevious", () => {
    const month = "Feb 2017";
    const side = "left";
    component.onClickPrevious(month, side);
    expect(component.dates[side]).toBeDefined();
  });

  it("#onClickNext", () => {
    const month = "Feb 2017";
    const side = "left";
    component.onClickNext(month, side);
    expect(component.dates[side]).toBeDefined();
  });

  it("#onCellClick", () => {
    spyOn(component, "doApply");
    let item = {
      date: "2017-02-04",
      available: false,
    };
    component.onCellClick(item, null, "left");

    item = {
      date: "2017-02-02",
      available: true,
    };
    component.onCellClick(item, null, "left");
    expect(component.config.startDate).toEqual(item.date);

    component.config.startDate = "2017-02-02";
    item = {
      date: "2017-02-04",
      available: true,
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
      available: false,
    };
    component.onCellMouseEnter(item, null);

    component.config.endDate = null;
    component.config.startDate = "2017-02-02";
    item = {
      date: "2017-02-02",
      available: true,
    };
    component.dates = {
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
                rowItemText: 2,
                available: true,
                inRange: true,
                active: false,
                today: false,
              },
            ],
          },
        ],
      },
    };
    component.onCellMouseEnter(item, null);
  });

  it("#onCellMouseLeave", () => {
    component.config.endDate = null;
    component.dates = {
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
                rowItemText: 2,
                available: true,
                inRange: true,
                active: false,
                today: false,
              },
            ],
          },
        ],
      },
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
      endDate,
    };
    component.onRangeClick(rangeLabel, dateRangeModel);
    expect(component.config.startDate).toEqual(startDate);
    expect(component.config.endDate).toEqual(endDate);

    rangeLabel = "Custom Range";
    component.onRangeClick(rangeLabel, dateRangeModel);
    expect(component.sides.length).toBeGreaterThan(0);

    rangeLabel = "Custom Range";
    component.customRange = true;
    component.onRangeClick(rangeLabel, dateRangeModel);
    expect(component.sides.length).toEqual(0);
  });

  it("#onCalendarLabelChange", () => {
    spyOn(component, "doApply");
    const label = "Feb";
    let side = "left";
    let type = "month";
    component.selectedYear[side] = "2017";
    component.onCalendarLabelChange(label, side, type);
    expect(component.dates[side]).toBeDefined();

    component.config.type = "yearly";
    type = "year";
    side = "right";
    component.selectedYear[side] = "2017";
    component.selectedYear.left = "2017";
    component.onCalendarLabelChange(label, side, type);
    expect(component.doApply).toHaveBeenCalled();
  });

  it("#initialize", () => {
    component.initialize();
    expect(component.sides.length).toEqual(0);
    expect(component.dates).toEqual({});
    expect(component.activeStartDate).toBeNull();
    expect(component.activeEndDate).toBeNull();
    expect(component.frequencyColumnHeader).toBeNull();
    expect(component.customRange).toBeFalsy();
    expect(component.activeRange).toEqual("");
  });

  it("#parseOptions", () => {
    component.options = {
      startDate: "2017-02-01",
      endDate: "2017-03-01",
    };
    component.settings = {
      singleDatePicker: true,
      type: "weekly",
      viewDateFormat: "MMM DD, YYYY",
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

    component.customRange = false;
    component.config.showRanges = false;
    component.processRanges();
    expect(component.customRange).toBeTruthy();
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
        endDate,
      },
    };
    component.activeRange = null;
    component.selectActiveRange();
    expect(component.activeRange).toEqual("Custom Range");

    component.config.startDate = startDate;
    component.config.endDate = endDate;
    component.selectActiveRange();
    expect(component.activeRange).toEqual("Last 7 Days");
  });

  it("#generateCalendar", () => {
    component.config.type = "daily";
    const date = component.config.startDate;
    const side = "left";
    component.generateCalendar(date, side);
    expect(component.calendarAvailable[side]).toBeTruthy();
  });

  it("#capitalize", () => {
    const day = "su";
    expect(component.capitalize(day)).toEqual("Su");
  });

  it("#updateInputField", () => {
    const endDate = component.config.endDate;
    component.config.type = "weekly";
    component.config.retailCalendar = false;
    component.activeItem = {
      left: {
        firstDay: moment("2017-10-06", "YYYY-MM-DD"),
        lastDay: moment("2017-10-06", "YYYY-MM-DD"),
        rowItemText: "Test",
      },
      right: {
        firstDay: moment("2017-10-06", "YYYY-MM-DD"),
        lastDay: moment("2017-10-06", "YYYY-MM-DD"),
        rowItemText: "Test",
      },
    };
    component.config.viewDateFormat = "YYYY-MM-DD";

    component.updateInputField();
    expect(component.selectedDateText).toEqual(`2017-01-29 - 2017-03-01`);
    expect(component.dateTitleText.left).toEqual("Test (2017-10-06 - 2017-10-06)");
    expect(component.dateTitleText.right).toEqual("Test (2017-10-06 - 2017-10-06)");

    component.config.singleDatePicker = true;
    component.updateInputField();
    expect(component.selectedDateText).toEqual(`2017-01-29 - 2017-03-01`);
    expect(component.dateTitleText.left).toEqual("Test (2017-10-06 - 2017-10-06)");
    expect(component.dateTitleText.right).toEqual("Test (2017-10-06 - 2017-10-06)");

    component.config.displayBeginDate = true;
    component.updateInputField();
    expect(component.selectedDateText).toEqual(`2017-01-29`);
    expect(component.dateTitleText.left).toEqual("Test (2017-10-06 - 2017-10-06)");
    expect(component.dateTitleText.right).toEqual("Test (2017-10-06 - 2017-10-06)");

    component.config.displayBeginDate = false;
    component.config.displayEndDate = true;
    component.updateInputField();
    expect(component.selectedDateText).toEqual(`${endDate}`);
    expect(component.dateTitleText.left).toEqual("Test (2017-10-06 - 2017-10-06)");
    expect(component.dateTitleText.right).toEqual("Test (2017-10-06 - 2017-10-06)");
  });

  it("#updateActiveItemInputField", () => {
    component.config.viewDateFormat = "YYYY-MM-DD";
    component.activeItem = {
      left: {
        firstDay: moment("2017-10-06", "YYYY-MM-DD"),
        lastDay: moment("2017-10-06", "YYYY-MM-DD"),
        rowItemText: "Test",
      },
      right: {
        firstDay: moment("2017-10-06", "YYYY-MM-DD"),
        lastDay: moment("2017-10-06", "YYYY-MM-DD"),
        rowItemText: "Test",
      },
    };

    component.updateActiveItemInputField();
    expect(component.selectedDateText).toEqual(``);
    expect(component.dateTitleText.left).toEqual("2017-10-06");
    expect(component.dateTitleText.right).toEqual("2017-10-06");
  });

  it("#dateRangeSelected", () => {
    spyOn(component, "getDateRangeModel");
    component.dateRangeSelected();
    expect(component.showCalendar).toBeFalsy();
  });

  it("#getDateRangeModel", () => {
    const startDate = component.config.startDate;
    const endDate = component.config.endDate;
    component.config.selectedModel = "daily";
    component.config.outputDateFormat = "YYYY-MM-DD";
    expect(component.getDateRangeModel()).toEqual({
      daily: {
        startDate: startDate as string,
        endDate: endDate as string,
      },
    });
  });

  it("#doApply", () => {
    spyOn(component, "dateRangeSelected");
    spyOn(component, "updateInputField");
    const startDate = component.config.startDate;
    const endDate = component.config.endDate;
    component.doApply();
    expect(component.activeStartDate).toEqual(startDate as string);
    expect(component.activeEndDate).toEqual(endDate as string);
  });
});
