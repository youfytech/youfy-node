const a17_0x4cb161 = a17_0x51c7;
function a17_0x51c7(_0x536b17, _0x36fda7) {
    const _0x529154 = a17_0x5291();
    return a17_0x51c7 = function (_0x51c755, _0x5466db) {
        _0x51c755 = _0x51c755 - 0xad;
        let _0xe39b6f = _0x529154[_0x51c755];
        return _0xe39b6f;
    }, a17_0x51c7(_0x536b17, _0x36fda7);
}
function a17_0x5291() {
    const _0x5eb366 = [
        'use',
        '365020SUaPPR',
        'parse',
        'request',
        'device_id',
        'stringify',
        'env',
        '9651109nhgIqc',
        '11hvcBRN',
        '8WxgPtl',
        'Starting\x20Request',
        '1350605gRqoNP',
        '3imvvLt',
        '724jUjFXn',
        'exports',
        'LOG_REQUESTS',
        '4276630rhKRqV',
        '142458FNCnwG',
        '2578077ERciDQ',
        'get',
        'https://api.youfy.com.br/core',
        '7jMviYy',
        'create',
        'interceptors',
        '12dzUPst',
        'log',
        '587uUMdQm'
    ];
    a17_0x5291 = function () {
        return _0x5eb366;
    };
    return a17_0x5291();
}
(function (_0x244e1d, _0x58a7c1) {
    const _0x306b2e = a17_0x51c7, _0x143e1f = _0x244e1d();
    while (!![]) {
        try {
            const _0x453e7f = -parseInt(_0x306b2e(0xae)) / 0x1 * (parseInt(_0x306b2e(0xbc)) / 0x2) + -parseInt(_0x306b2e(0xbb)) / 0x3 * (parseInt(_0x306b2e(0xb0)) / 0x4) + -parseInt(_0x306b2e(0xba)) / 0x5 + parseInt(_0x306b2e(0xc0)) / 0x6 * (parseInt(_0x306b2e(0xc4)) / 0x7) + parseInt(_0x306b2e(0xb8)) / 0x8 * (-parseInt(_0x306b2e(0xc1)) / 0x9) + parseInt(_0x306b2e(0xbf)) / 0xa * (parseInt(_0x306b2e(0xb7)) / 0xb) + parseInt(_0x306b2e(0xc7)) / 0xc * (parseInt(_0x306b2e(0xb6)) / 0xd);
            if (_0x453e7f === _0x58a7c1)
                break;
            else
                _0x143e1f['push'](_0x143e1f['shift']());
        } catch (_0xd49cb1) {
            _0x143e1f['push'](_0x143e1f['shift']());
        }
    }
}(a17_0x5291, 0x516a4));
const axios = require('axios'), qs = require('qs'), axiosRetry = require('axios-retry'), Device = require('../helpers/Device'), Config = require('../sdk/Config'), baseURL = Config[a17_0x4cb161(0xc2)]('API_URL', a17_0x4cb161(0xc3)), instance = axios[a17_0x4cb161(0xc5)]({
        'baseURL': baseURL,
        'auth': {
            'username': Config[a17_0x4cb161(0xc2)]('id'),
            'password': Config[a17_0x4cb161(0xc2)](a17_0x4cb161(0xb3), Device['getId']())
        },
        'paramsSerializer': _0xaa0d47 => {
            const _0x4479a7 = a17_0x4cb161;
            return qs[_0x4479a7(0xb4)](_0xaa0d47);
        }
    });
JSON[a17_0x4cb161(0xb1)](process[a17_0x4cb161(0xb5)][a17_0x4cb161(0xbe)] || ![]) && instance[a17_0x4cb161(0xc6)][a17_0x4cb161(0xb2)][a17_0x4cb161(0xaf)](_0x5f3148 => {
    const _0x4729ba = a17_0x4cb161;
    return console[_0x4729ba(0xad)](_0x4729ba(0xb9), JSON[_0x4729ba(0xb4)](_0x5f3148, null, 0x2)), _0x5f3148;
});
axiosRetry(instance, {
    'retries': 0x5,
    'retryDelay': _0x14c540 => _0x14c540 * 0xbb8
}), module[a17_0x4cb161(0xbd)] = instance;