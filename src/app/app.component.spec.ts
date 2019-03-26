import { TestBed, async, ComponentFixture, inject } from "@angular/core/testing";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { RouterTestingModule } from "@angular/router/testing";
import { Router, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { SharedService } from "src/common/services/shared.service";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    data: {
      breadcrumb: "Home",
      wiki: "",
      name: "Home",
      label: "Home" // browser tab name
    }
  }
];

describe("AppComponent", () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
      declarations: [AppComponent, HomeComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [SharedService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
    router = TestBed.get(Router);
    fixture.detectChanges();
    router.initialNavigation();
  });

  it("should create the app", () => {
    expect(component).toBeDefined();
  });

  it(`should have as title 'ngx-barebone-app'`, () => {
    expect(component.title).toEqual("ngx-barebone-app");
  });

  it(`should save route data params`, inject([SharedService], (ss: SharedService) => {
    console.log(ss);
    // expect(component.ss.currentRouteParams).toBeDefined();
  }));
});
