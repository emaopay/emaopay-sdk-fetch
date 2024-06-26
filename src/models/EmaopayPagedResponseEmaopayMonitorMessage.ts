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
import type { EmaopayMonitorMessage } from './EmaopayMonitorMessage';
import {
    EmaopayMonitorMessageFromJSON,
    EmaopayMonitorMessageFromJSONTyped,
    EmaopayMonitorMessageToJSON,
} from './EmaopayMonitorMessage';

/**
 * 
 * @export
 * @interface EmaopayPagedResponseEmaopayMonitorMessage
 */
export interface EmaopayPagedResponseEmaopayMonitorMessage {
    /**
     * 
     * @type {Array<EmaopayMonitorMessage>}
     * @memberof EmaopayPagedResponseEmaopayMonitorMessage
     */
    data?: Array<EmaopayMonitorMessage>;
    /**
     * 
     * @type {number}
     * @memberof EmaopayPagedResponseEmaopayMonitorMessage
     */
    total?: number;
}

/**
 * Check if a given object implements the EmaopayPagedResponseEmaopayMonitorMessage interface.
 */
export function instanceOfEmaopayPagedResponseEmaopayMonitorMessage(value: object): boolean {
    return true;
}

export function EmaopayPagedResponseEmaopayMonitorMessageFromJSON(json: any): EmaopayPagedResponseEmaopayMonitorMessage {
    return EmaopayPagedResponseEmaopayMonitorMessageFromJSONTyped(json, false);
}

export function EmaopayPagedResponseEmaopayMonitorMessageFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmaopayPagedResponseEmaopayMonitorMessage {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(EmaopayMonitorMessageFromJSON)),
        'total': json['total'] == null ? undefined : json['total'],
    };
}

export function EmaopayPagedResponseEmaopayMonitorMessageToJSON(value?: EmaopayPagedResponseEmaopayMonitorMessage | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'data': value['data'] == null ? undefined : ((value['data'] as Array<any>).map(EmaopayMonitorMessageToJSON)),
        'total': value['total'],
    };
}

