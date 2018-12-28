import { Pipe, PipeTransform } from "@angular/core";

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

@Pipe({ name: "ObjNgFor", pure: false })
export class ObjNgFor implements PipeTransform {
    public transform(value: any, args: any[] = null): any {
        return Object.keys(value); // .map(key => value[key]);
    }
}
