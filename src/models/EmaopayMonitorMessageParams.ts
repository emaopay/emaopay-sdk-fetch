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
 * @interface EmaopayMonitorMessageParams
 */
export interface EmaopayMonitorMessageParams {
    /**
     * 
     * @type {string}
     * @memberof EmaopayMonitorMessageParams
     */
    content?: string;
    /**
     * 
     * @type {string}
     * @memberof EmaopayMonitorMessageParams
     */
    packageName?: string;
    /**
     * 
     * @type {number}
     * @memberof EmaopayMonitorMessageParams
     */
    timestamp?: number;
}

/**
 * Check if a given object implements the EmaopayMonitorMessageParams interface.
 */
export function instanceOfEmaopayMonitorMessageParams(value: object): boolean {
    return true;
}

export function EmaopayMonitorMessageParamsFromJSON(json: any): EmaopayMonitorMessageParams {
    return EmaopayMonitorMessageParamsFromJSONTyped(json, false);
}

export function EmaopayMonitorMessageParamsFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmaopayMonitorMessageParams {
    if (json == null) {
        return json;
    }
    return {
        
        'content': json['content'] == null ? undefined : json['content'],
        'packageName': json['packageName'] == null ? undefined : json['packageName'],
        'timestamp': json['timestamp'] == null ? undefined : json['timestamp'],
    };
}

export function EmaopayMonitorMessageParamsToJSON(value?: EmaopayMonitorMessageParams | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'content': value['content'],
        'packageName': value['packageName'],
        'timestamp': value['timestamp'],
    };
}

