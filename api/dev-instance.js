const a10_0x39a1c6 = a10_0x32e4;
function a10_0x57bf() {
    const _0x3807e1 = [
        '33636stUbDL',
        'exports',
        '463556QjvgYY',
        'API_URL',
        'get',
        '2866325GvIZmt',
        '5GkWrXt',
        '593040JMOsDM',
        'create',
        'Bearer\x20',
        '5853128HUTSDn',
        '562680xgbdBg',
        '6VOMpdA',
        '20371086CmzuAI',
        'stringify'
    ];
    a10_0x57bf = function () {
        return _0x3807e1;
    };
    return a10_0x57bf();
}
(function (_0xff4968, _0x5e6d34) {
    const _0x4ba2db = a10_0x32e4, _0x2b05d8 = _0xff4968();
    while (!![]) {
        try {
            const _0x3aff75 = -parseInt(_0x4ba2db(0x12e)) / 0x1 + -parseInt(_0x4ba2db(0x124)) / 0x2 * (parseInt(_0x4ba2db(0x127)) / 0x3) + parseInt(_0x4ba2db(0x129)) / 0x4 * (parseInt(_0x4ba2db(0x12d)) / 0x5) + -parseInt(_0x4ba2db(0x123)) / 0x6 + -parseInt(_0x4ba2db(0x12c)) / 0x7 + -parseInt(_0x4ba2db(0x122)) / 0x8 + parseInt(_0x4ba2db(0x125)) / 0x9;
            if (_0x3aff75 === _0x5e6d34)
                break;
            else
                _0x2b05d8['push'](_0x2b05d8['shift']());
        } catch (_0x4fcf3c) {
            _0x2b05d8['push'](_0x2b05d8['shift']());
        }
    }
}(a10_0x57bf, 0x7e68b));
const axios = require('axios'), qs = require('qs'), axiosRetry = require('axios-retry'), Config = require('../sdk/Config'), auth_token = Config[a10_0x39a1c6(0x12b)]('API_TOKEN'), baseURL = Config[a10_0x39a1c6(0x12b)](a10_0x39a1c6(0x12a), 'https://api.youfy.com.br/core'), dev_instance = axios[a10_0x39a1c6(0x120)]({
        'baseURL': baseURL,
        'headers': { 'Authorization': a10_0x39a1c6(0x121) + auth_token },
        'paramsSerializer': _0x93f7b7 => {
            const _0x244691 = a10_0x39a1c6;
            return qs[_0x244691(0x126)](_0x93f7b7);
        }
    });
function a10_0x32e4(_0x3b8dc4, _0x405b3e) {
    const _0x57bfd3 = a10_0x57bf();
    return a10_0x32e4 = function (_0x32e4d7, _0x558c07) {
        _0x32e4d7 = _0x32e4d7 - 0x120;
        let _0x5b0a4e = _0x57bfd3[_0x32e4d7];
        return _0x5b0a4e;
    }, a10_0x32e4(_0x3b8dc4, _0x405b3e);
}
axiosRetry(dev_instance, {
    'retries': 0x5,
    'retryDelay': _0x27ea0 => _0x27ea0 * 0xbb8
}), module[a10_0x39a1c6(0x128)] = dev_instance;