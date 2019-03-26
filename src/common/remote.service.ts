import { Injectable } from "@angular/core";
import { from as observableFrom, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { Restangular } from "ngx-restangular";
import { AppConfig } from "../app/app.config";
import { Util } from "./services/util.service";

import { HashService } from "./services/hash.service";

@Injectable()
export class BaseRemoteService {
  protected rest: Restangular;

  constructor(private restangular: Restangular, private http: HttpClient) {
    this.rest = this.getRest(this.restangular);
  }

  protected getRest(rest) {
    return rest.all("");
  }

  createCanceler() {
    let resolve;
    const promise = new Promise((rs) => (resolve = rs));

    return {
      resolve,
      promise
    };
  }

  private getCacheKey(method, param) {
    const classMatch = /function\s+(\w+)\(.*\).*/.exec(this.constructor.toString());
    let className;
    if (classMatch.length === 2) {
      className = classMatch[1];
    }
    return `${AppConfig.name}_${className}_${method}_${HashService.hash(param)}`;
  }

  // Session cache
  getWithCache(method, param, func, timeout = 300) {
    return Util.getWithCache(this.getCacheKey(method, param), true, func, timeout);
  }

  /**
   * @param method method
   * @param param param
   * @param canceler canceler
   * @info .unsubscribe does not work
   *       .takeUntil does not work
   */
  doQuery(method, param, canceler?) {
    if (canceler && canceler.promise && canceler.promise.then) {
      return this.rest
        .one(method)
        .get(param)
        .flatMap((d) =>
          observableFrom(
            new Promise((rs, rj) => {
              canceler.promise.then(() => rj(AppConfig.Constant.REQUEST_CANCELLED_MESSAGE));

              // ensure it runs async
              setTimeout(() => rs(d), 0);
            })
          )
        );
    } else {
      return this.rest.one(method).get(param);
    }
  }

  doQueryWithCache(method, param, canceler = null, timeout = 300) {
    return observableFrom(
      this.getWithCache(
        method,
        param,
        () => {
          return this.doQuery(method, param, canceler).toPromise();
        },
        timeout
      )
    );
  }

  mockResult<T>(data: T, time = 1000): Observable<T> {
    return observableFrom(
      new Promise((rs, rj) => {
        setTimeout(() => rs(data), time);
      })
    );
  }

  doPostQuery(method, param, canceler?) {
    if (canceler && canceler.promise && canceler.promise.then) {
      return this.rest
        .all(method)
        .post(param)
        .flatMap((d) =>
          observableFrom(
            new Promise((rs, rj) => {
              canceler.promise.then(() => rj("request cancelled!"));

              // ensure it runs async
              setTimeout(() => rs(d), 0);
            })
          )
        );
    } else {
      return this.rest.all(method).post(param);
    }
  }

  doHttpGet(url) {
    return this.http.get(url).pipe(map((res: any) => res));
  }

  doHttpPost(url, urlParams) {
    return this.http.post(url, urlParams).pipe(map((res: any) => res));
  }
}
