import { PipeTransform } from "@angular/core";
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
export declare class ObjNgFor implements PipeTransform {
  transform(value: any, args?: any[]): any;
}
