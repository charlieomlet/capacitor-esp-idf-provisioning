var capacitorEspProvisioning = (function (exports, core) {
    'use strict';

    exports.ESPTransport = void 0;
    (function (ESPTransport) {
        ESPTransport["ble"] = "ble";
        ESPTransport["softap"] = "softap";
    })(exports.ESPTransport || (exports.ESPTransport = {}));
    exports.ESPSecurity = void 0;
    (function (ESPSecurity) {
        ESPSecurity["unsecure"] = "unsecure";
        ESPSecurity["secure"] = "secure";
        ESPSecurity["secure2"] = "secure2";
    })(exports.ESPSecurity || (exports.ESPSecurity = {}));

    const EspProvisioning = core.registerPlugin('EspProvisioning', {
        web: () => Promise.resolve().then(function () { return web; }).then(m => new m.EspProvisioningWeb()),
    });

    /* eslint-disable @typescript-eslint/no-unused-vars */
    class EspProvisioningWeb extends core.WebPlugin {
        // TODO: offer a fake implementation to be used when testing in a browser
        checkPermissions() {
            throw new Error('Method not implemented.');
        }
        requestPermissions() {
            throw new Error('Method not implemented.');
        }
        checkStatus() {
            throw new Error('Method not implemented.');
        }
        searchESPDevices(_options) {
            throw new Error('Method not implemented.');
        }
        connect(_options) {
            throw new Error('Method not implemented.');
        }
        scanWifiList(_options) {
            throw new Error('Method not implemented.');
        }
        provision(_options) {
            throw new Error('Method not implemented.');
        }
        sendCustomDataString(_options) {
            throw new Error('Method not implemented.');
        }
        disconnect(_options) {
            throw new Error('Method not implemented.');
        }
        openLocationSettings() {
            throw new Error('Method not implemented.');
        }
        openBluetoothSettings() {
            throw new Error('Method not implemented.');
        }
        openAppSettings() {
            throw new Error('Method not implemented.');
        }
        enableLogging() {
            throw new Error('Method not implemented.');
        }
        disableLogging() {
            throw new Error('Method not implemented.');
        }
    }

    var web = /*#__PURE__*/Object.freeze({
        __proto__: null,
        EspProvisioningWeb: EspProvisioningWeb
    });

    exports.EspProvisioning = EspProvisioning;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
