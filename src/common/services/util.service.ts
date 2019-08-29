import { Cache } from "./cache.service";

export const Util = new (class UtilService {
  constructor() {}

  truncateCharacter(input, chars, breakOnWord) {
    let lastspace;
    if (isNaN(chars)) {
      return input;
    }
    if (chars <= 0) {
      return "";
    }
    if (input && input.length >= chars) {
      input = input.substring(0, chars);
      if (!breakOnWord) {
        lastspace = input.lastIndexOf(" ");
        if (lastspace !== -1) {
          input = input.substr(0, lastspace);
        }
      } else {
        while (input.charAt(input.length - 1) === " ") {
          input = input.substr(0, input.length(-1));
        }
      }
      return input + "...";
    }
    return input;
  }

  getUserParam(user) {
    return {
      nt: user.nt,
      fullname: user.displayName,
      label: user.label
    };
  }

  getWithCache(key: string, isSession: boolean, getFunc, timeout?) {
    let cache = Cache;
    if (isSession) {
      cache = Cache.session;
    }
    const data = cache.get(key);

    return new Promise((rs, rj) => {
      if (data) {
        rs(data);
      } else {
        getFunc()
          .then((d) => {
            try {
              cache.set(key, d, timeout);
            } catch (e) {
              console.log(e);
            }
            rs(d);
          })
          .catch(rj);
      }
    });
  }

  solrEscape(q) {
    return q.replace(/[+\-\!\(\)\{\}\[\]\^"~\*\?:\\]+/g, " ");
  }

  removeHtmlTags(str) {
    return str.replace(/<[^>]*>?/g, "");
  }

  waitUntil(func, check = (d) => !!d, interval = 300, maxTime = 100) {
    const doWait = (time) => {
      return new Promise((rs, rj) => {
        if (time <= 0) {
          rj("exceed " + maxTime + " times check");
        } else {
          const ret = func();
          if (check(ret)) {
            rs(ret);
          } else {
            setTimeout(() => {
              return doWait(time - 1)
                .then(rs)
                .catch(rj);
            }, interval);
          }
        }
      });
    };
    return doWait(maxTime);
  }

  recurUntil(func, check, args, nextArgsFunc, maxTime) {
    let doRecur;
    if (maxTime == null) {
      maxTime = 100;
    }
    doRecur = function(time, lastRet) {
      return new Promise((rs, rj) => {
        if (time <= 0) {
          rj("exceed " + maxTime + " times check");
        } else {
          let ret: any;
          if (time === maxTime) {
            ret = func.apply(this, args);
          } else {
            ret = func.apply(this, nextArgsFunc(lastRet));
          }
          if (check(ret)) {
            rs(ret);
          } else {
            doRecur(time - 1, ret)
              .then(rs)
              .catch(rj);
          }
        }
      });
    };
    return doRecur(maxTime);
  }

  deepExtend(...ags: any[]) {
    let args, target;
    if (ags.length < 1 || typeof ags[0] !== "object") {
      return false;
    }
    if (ags.length < 2) {
      return ags[0];
    }
    target = ags[0];
    args = Array.prototype.slice.call(ags, 1);
    args.forEach(
      (function(_this) {
        return function(obj) {
          let clone, key, src, val, _results;
          if (typeof obj !== "object") {
            return;
          }
          _results = [];
          for (key in obj) {
            if (!(key in obj)) {
              continue;
            }
            src = target[key];
            val = obj[key];
            if (val === target) {
              continue;
            }
            if (typeof val !== "object" || val === null) {
              target[key] = val;
              continue;
            } else if (val instanceof Date) {
              target[key] = new Date(val.getTime());
              continue;
            } else if (val instanceof RegExp) {
              target[key] = new RegExp(val);
              continue;
            }
            if (typeof src !== "object" || src === null) {
              clone = Array.isArray(val) ? [] : {};
              target[key] = _this.deepExtend(clone, val);
              continue;
            }
            if (Array.isArray(val)) {
              clone = Array.isArray(src) ? src : [];
            } else {
              clone = !Array.isArray(src) ? src : {};
            }
            _results.push((target[key] = _this.deepExtend(clone, val)));
          }
          return _results;
        };
      })(this)
    );
    return target;
  }

  /*
    process exclusive click event and dblclick event
  */

  clicker(clickFunc, dblclickFunc, delay) {
    let clicks, timer;
    if (delay == null) {
      delay = 500;
    }
    clicks = 0;
    timer = null;
    return function() {
      let args;
      args = arguments;
      clicks += 1;
      if (clicks === 1) {
        return (timer = setTimeout(
          (function(_this) {
            return function() {
              clicks = 0;
              if (this.isFunction(clickFunc)) {
                return clickFunc.apply(_this, args);
              }
            };
          })(this),
          delay
        ));
      } else {
        clicks = 0;
        clearTimeout(timer);
        if (this.isFunction(dblclickFunc)) {
          return dblclickFunc.apply(this, args);
        }
      }
    };
  }

  isFunction(functionToCheck) {
    return functionToCheck && {}.toString.call(functionToCheck) === "[object Function]";
  }
})();
