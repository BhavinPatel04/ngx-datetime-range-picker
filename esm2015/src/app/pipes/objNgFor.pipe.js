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
export class ObjNgFor {
  /**
   * @param {?} value
   * @param {?=} args
   * @return {?}
   */
  transform(value, args = null) {
    return Object.keys(value); // .map(key => value[key]);
  }
}
ObjNgFor.decorators = [{ type: Pipe, args: [{ name: "ObjNgFor", pure: false }] }];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JqTmdGb3IucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1kYXRldGltZS1yYW5nZS1waWNrZXIvIiwic291cmNlcyI6WyJzcmMvYXBwL3BpcGVzL29iak5nRm9yLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7OztBQWNwRCxNQUFNLE9BQU8sUUFBUTs7Ozs7O0lBQ1osU0FBUyxDQUFDLEtBQVUsRUFBRSxPQUFjLElBQUk7UUFDN0MsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsMkJBQTJCO0lBQ3hELENBQUM7OztZQUpGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG4vKipcbiAqIEl0ZXJhdGUgb3ZlciB7a2V5OiB2YWx1ZX1cbiAqIFJldHVybnMgdGhlIGtleXMgb2YgdGhlIG9iamVjdFxuICogVXNhZ2U6XG4gKiAgICBsZXQgb2JqS2V5IG9mIG9iaiB8IE9iak5nRm9yXG4gKiBFeGFtcGxlOlxuICogICAgbGV0IG9iaiA9IHthOiAxLCBiOiAyfTtcbiAqICAgICpuZ0Zvcj1cImxldCBrZXkgb2Ygb2JqIHwgT2JqTmdGb3JcIlxuICogICAge3trZXlzfX06IHt7b2JqW2tleV19fVxuICovXG5cbkBQaXBlKHsgbmFtZTogXCJPYmpOZ0ZvclwiLCBwdXJlOiBmYWxzZSB9KVxuZXhwb3J0IGNsYXNzIE9iak5nRm9yIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHB1YmxpYyB0cmFuc2Zvcm0odmFsdWU6IGFueSwgYXJnczogYW55W10gPSBudWxsKTogYW55IHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXModmFsdWUpOyAvLyAubWFwKGtleSA9PiB2YWx1ZVtrZXldKTtcbiAgfVxufVxuIl19
