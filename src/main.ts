import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app/app.module";
import { Config } from "./config/config";

import { AppInitService } from "./common/services/app.init.service";

if (Config.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then((module) => {
    const injector = module.injector;
    const appInit = injector.get(AppInitService);

    // can add any step(promise) here for application initialization
    // appInit.addStep(promise)

    appInit.init();
    appInit.done();

    return injector;
  })
  .catch((err) => console.error(err));
