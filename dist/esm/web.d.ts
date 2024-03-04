import { WebPlugin } from '@capacitor/core';
import type { EspProvisioningStatus, ESPDevice, ESPNetwork, EspProvisioningPlugin, ESPSecurity, ESPTransport, PermissionStatus } from './definitions';
export declare class EspProvisioningWeb extends WebPlugin implements EspProvisioningPlugin {
    checkPermissions(): Promise<PermissionStatus>;
    requestPermissions(): Promise<PermissionStatus>;
    checkStatus(): Promise<EspProvisioningStatus>;
    searchESPDevices(_options: {
        devicePrefix: string;
        transport: ESPTransport;
        security: ESPSecurity;
    }): Promise<{
        devices?: ESPDevice[] | undefined;
    }>;
    connect(_options: {
        deviceName: string;
        proofOfPossession: string;
    }): Promise<{
        connected: boolean;
    }>;
    scanWifiList(_options: {
        deviceName: string;
    }): Promise<{
        networks?: ESPNetwork[] | undefined;
    }>;
    provision(_options: {
        deviceName: string;
        ssid: string;
        passPhrase: string;
    }): Promise<{
        success: boolean;
    }>;
    sendCustomDataString(_options: {
        deviceName: string;
        path: string;
        dataString: string;
    }): Promise<{
        success: boolean;
        returnString?: string | undefined;
    }>;
    disconnect(_options: {
        deviceName: string;
    }): Promise<void>;
    openLocationSettings(): Promise<{
        value: boolean;
    }>;
    openBluetoothSettings(): Promise<{
        value: boolean;
    }>;
    openAppSettings(): Promise<{
        value: boolean;
    }>;
    enableLogging(): Promise<void>;
    disableLogging(): Promise<void>;
}
