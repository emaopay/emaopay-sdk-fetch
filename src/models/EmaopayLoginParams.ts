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
 * @interface EmaopayLoginParams
 */
export interface EmaopayLoginParams {
    /**
     * 
     * @type {string}
     * @memberof EmaopayLoginParams
     */
    password?: string;
    /**
     * 
     * @type {string}
     * @memberof EmaopayLoginParams
     */
    username?: string;
}

/**
 * Check if a given object implements the EmaopayLoginParams interface.
 */
export function instanceOfEmaopayLoginParams(value: object): boolean {
    return true;
}

export function EmaopayLoginParamsFromJSON(json: any): EmaopayLoginParams {
    return EmaopayLoginParamsFromJSONTyped(json, false);
}

export function EmaopayLoginParamsFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmaopayLoginParams {
    if (json == null) {
        return json;
    }
    return {
        
        'password': json['password'] == null ? undefined : json['password'],
        'username': json['username'] == null ? undefined : json['username'],
    };
}

export function EmaopayLoginParamsToJSON(value?: EmaopayLoginParams | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'password': value['password'],
        'username': value['username'],
    };
}
