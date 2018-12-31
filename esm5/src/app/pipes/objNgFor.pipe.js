/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from "@angular/core";
/**
 * Iterate over {key: value}
 * Returns the keys of the object
 * Usage:
 *    let objKey of obj | ObjNgFor
 * Example:
 *    let obj = {a: 1, b: 2};
 *    *ngFor="let key of obj | ObjNgFor"
 *    {{keys}}: {{obj[key]}}
 */
var ObjNgFor = /** @class */ (function() {
  function ObjNgFor() {}
  /**
   * @param {?} value
   * @param {?=} args
   * @return {?}
   */
  ObjNgFor.prototype.transform
  /**
   * @param {?} value
   * @param {?=} args
   * @return {?}
   */ = function(value, args) {
    if (args === void 0) {
      args = null;
    }
    return Object.keys(value); // .map(key => value[key]);
  };
  ObjNgFor.decorators = [{ type: Pipe, args: [{ name: "ObjNgFor", pure: false }] }];
  return ObjNgFor;
})();
export { ObjNgFor };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JqTmdGb3IucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1kYXRldGltZS1yYW5nZS1waWNrZXIvIiwic291cmNlcyI6WyJzcmMvYXBwL3BpcGVzL29iak5nRm9yLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7OztBQWFwRDtJQUFBO0lBS0EsQ0FBQzs7Ozs7O0lBSFEsNEJBQVM7Ozs7O0lBQWhCLFVBQWlCLEtBQVUsRUFBRSxJQUFrQjtRQUFsQixxQkFBQSxFQUFBLFdBQWtCO1FBQzdDLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLDJCQUEyQjtJQUN4RCxDQUFDOztnQkFKRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUU7O0lBS3ZDLGVBQUM7Q0FBQSxBQUxELElBS0M7U0FKWSxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbi8qKlxuICogSXRlcmF0ZSBvdmVyIHtrZXk6IHZhbHVlfVxuICogUmV0dXJucyB0aGUga2V5cyBvZiB0aGUgb2JqZWN0XG4gKiBVc2FnZTpcbiAqICAgIGxldCBvYmpLZXkgb2Ygb2JqIHwgT2JqTmdGb3JcbiAqIEV4YW1wbGU6XG4gKiAgICBsZXQgb2JqID0ge2E6IDEsIGI6IDJ9O1xuICogICAgKm5nRm9yPVwibGV0IGtleSBvZiBvYmogfCBPYmpOZ0ZvclwiXG4gKiAgICB7e2tleXN9fToge3tvYmpba2V5XX19XG4gKi9cblxuQFBpcGUoeyBuYW1lOiBcIk9iak5nRm9yXCIsIHB1cmU6IGZhbHNlIH0pXG5leHBvcnQgY2xhc3MgT2JqTmdGb3IgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgcHVibGljIHRyYW5zZm9ybSh2YWx1ZTogYW55LCBhcmdzOiBhbnlbXSA9IG51bGwpOiBhbnkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyh2YWx1ZSk7IC8vIC5tYXAoa2V5ID0+IHZhbHVlW2tleV0pO1xuICB9XG59XG4iXX0=
