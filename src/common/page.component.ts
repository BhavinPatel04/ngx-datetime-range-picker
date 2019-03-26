import { AppConfig } from "../app/app.config";
import { InjectorService } from "./services/injector.service";
import { AppInitService } from "./services/app.init.service";
import { SharedService } from "./services/shared.service";

export class BasePageComponent {
  ss: SharedService;
  data: any = {};
  state: any = {};

  constructor() {
    const appInit = InjectorService.injector.get(AppInitService);
    this.ss = appInit.ss;
    appInit
      .done()
      .then(() => this.pageInit(this.ss))
      .then(() => this.bindView());
    if (!AppConfig.production) {
      window["vm"] = this;
    }
  }

  initialize() {
    return new Promise((rs) => rs());
  }

  bindView() {}

  pageInit(ss) {
    return new Promise((resolve) => {
      ss.pageInitialized = false;
      this.initialize().then(() => {
        ss.pageInitialized = true;
        // Intro
        if (AppConfig.intro.enabled) {
          ss.intro.init();
        }

        if (ss.currentRouteParams) {
          // pagename
          window["pagename"] = ss.currentRouteParams.label;
          document.title = ss.currentRouteParams.label;
          // breadcrumb
          this.state.breadcrumb = ss.currentRouteParams.breadcrumb;
        }
        resolve();
      });
    });
  }
}
