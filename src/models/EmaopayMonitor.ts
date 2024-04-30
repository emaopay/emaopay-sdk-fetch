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
 * @interface EmaopayMonitor
 */
export interface EmaopayMonitor {
    /**
     * 
     * @type {string}
     * @memberof EmaopayMonitor
     */
    apiToken?: string;
    /**
     * 
     * @type {Date}
     * @memberof EmaopayMonitor
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof EmaopayMonitor
     */
    deletedAt?: Date;
    /**
     * 
     * @type {string}
     * @memberof EmaopayMonitor
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof EmaopayMonitor
     */
    merchantId?: string;
    /**
     * 
     * @type {string}
     * @memberof EmaopayMonitor
     */
    name?: string;
    /**
     * 
     * @type {Date}
     * @memberof EmaopayMonitor
     */
    updatedAt?: Date;
    /**
     * 几率权重， 0到100之间
     * @type {number}
     * @memberof EmaopayMonitor
     */
    weight?: number;
}

/**
 * Check if a given object implements the EmaopayMonitor interface.
 */
export function instanceOfEmaopayMonitor(value: object): boolean {
    return true;
}

export function EmaopayMonitorFromJSON(json: any): EmaopayMonitor {
    return EmaopayMonitorFromJSONTyped(json, false);
}

export function EmaopayMonitorFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmaopayMonitor {
    if (json == null) {
        return json;
    }
    return {
        
        'apiToken': json['apiToken'] == null ? undefined : json['apiToken'],
        'createdAt': json['createdAt'] == null ? undefined : (new Date(json['createdAt'])),
        'deletedAt': json['deletedAt'] == null ? undefined : (new Date(json['deletedAt'])),
        'id': json['id'] == null ? undefined : json['id'],
        'merchantId': json['merchantId'] == null ? undefined : json['merchantId'],
        'name': json['name'] == null ? undefined : json['name'],
        'updatedAt': json['updatedAt'] == null ? undefined : (new Date(json['updatedAt'])),
        'weight': json['weight'] == null ? undefined : json['weight'],
    };
}

export function EmaopayMonitorToJSON(value?: EmaopayMonitor | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'apiToken': value['apiToken'],
        'createdAt': value['createdAt'] == null ? undefined : ((value['createdAt']).toISOString()),
        'deletedAt': value['deletedAt'] == null ? undefined : ((value['deletedAt']).toISOString()),
        'id': value['id'],
        'merchantId': value['merchantId'],
        'name': value['name'],
        'updatedAt': value['updatedAt'] == null ? undefined : ((value['updatedAt']).toISOString()),
        'weight': value['weight'],
    };
}

