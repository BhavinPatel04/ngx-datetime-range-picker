import { Injectable } from "@angular/core";
import { SharedService } from "./shared.service";

@Injectable()
export class AppInitService {
  promises: Array<Promise<any>> = [];

  constructor(public ss: SharedService) {}

  public init() {
    // this.addStep(/** some function */);
  }

  public addStep(promise) {
    return this.promises.push(promise);
  }

  public done() {
    return Promise.all(this.promises);
  }
}
