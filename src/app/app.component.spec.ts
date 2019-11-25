import { TestBed, async, ComponentFixture, inject } from "@angular/core/testing";
import { NO_ERRORS_SCHEMA } from "@angular/core";

import { AppComponent } from "./app.component";
import { SharedService } from "src/common/services/shared.service";

describe("AppComponent", () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [SharedService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it("should create the app", () => {
    expect(component).toBeDefined();
  });

  it("printDate", () => {
    component.selectedOption = "daily";
    const json = { daily: { a: 1 } };
    expect(component.printDate(json)).toBe(JSON.stringify(json[component.selectedOption], null, 4).trim());
  });

  it(`should save route data params`, inject([SharedService], (ss: SharedService) => {
    console.log(ss);
    // expect(component.ss.currentRouteParams).toBeDefined();
  }));
});
