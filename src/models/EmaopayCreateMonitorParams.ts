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
/**
 * 
 * @export
 * @interface EmaopayCreateMonitorParams
 */
export interface EmaopayCreateMonitorParams {
    /**
     * 
     * @type {string}
     * @memberof EmaopayCreateMonitorParams
     */
    merchantId: string;
    /**
     * 
     * @type {string}
     * @memberof EmaopayCreateMonitorParams
     */
    name: string;
    /**
     * 
     * @type {number}
     * @memberof EmaopayCreateMonitorParams
     */
    weight: number;
}

/**
 * Check if a given object implements the EmaopayCreateMonitorParams interface.
 */
export function instanceOfEmaopayCreateMonitorParams(value: object): boolean {
    if (!('merchantId' in value)) return false;
    if (!('name' in value)) return false;
    if (!('weight' in value)) return false;
    return true;
}

export function EmaopayCreateMonitorParamsFromJSON(json: any): EmaopayCreateMonitorParams {
    return EmaopayCreateMonitorParamsFromJSONTyped(json, false);
}

export function EmaopayCreateMonitorParamsFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmaopayCreateMonitorParams {
    if (json == null) {
        return json;
    }
    return {
        
        'merchantId': json['merchantId'],
        'name': json['name'],
        'weight': json['weight'],
    };
}

export function EmaopayCreateMonitorParamsToJSON(value?: EmaopayCreateMonitorParams | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'merchantId': value['merchantId'],
        'name': value['name'],
        'weight': value['weight'],
    };
}
