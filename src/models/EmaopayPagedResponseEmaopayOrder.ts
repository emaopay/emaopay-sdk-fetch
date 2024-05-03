/* tslint:disable */
/* eslint-disable */
/**
 * EmaoPay API
 * EmaoPay API.
 *
 * The version of the OpenAPI document: 1.0
 * Contact: support@emaopay.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { EmaopayOrder } from './EmaopayOrder';
import {
    EmaopayOrderFromJSON,
    EmaopayOrderFromJSONTyped,
    EmaopayOrderToJSON,
} from './EmaopayOrder';

/**
 * 
 * @export
 * @interface EmaopayPagedResponseEmaopayOrder
 */
export interface EmaopayPagedResponseEmaopayOrder {
    /**
     * 
     * @type {Array<EmaopayOrder>}
     * @memberof EmaopayPagedResponseEmaopayOrder
     */
    data?: Array<EmaopayOrder>;
    /**
     * 
     * @type {number}
     * @memberof EmaopayPagedResponseEmaopayOrder
     */
    total?: number;
}

/**
 * Check if a given object implements the EmaopayPagedResponseEmaopayOrder interface.
 */
export function instanceOfEmaopayPagedResponseEmaopayOrder(value: object): boolean {
    return true;
}

export function EmaopayPagedResponseEmaopayOrderFromJSON(json: any): EmaopayPagedResponseEmaopayOrder {
    return EmaopayPagedResponseEmaopayOrderFromJSONTyped(json, false);
}

export function EmaopayPagedResponseEmaopayOrderFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmaopayPagedResponseEmaopayOrder {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(EmaopayOrderFromJSON)),
        'total': json['total'] == null ? undefined : json['total'],
    };
}

export function EmaopayPagedResponseEmaopayOrderToJSON(value?: EmaopayPagedResponseEmaopayOrder | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'data': value['data'] == null ? undefined : ((value['data'] as Array<any>).map(EmaopayOrderToJSON)),
        'total': value['total'],
    };
}
