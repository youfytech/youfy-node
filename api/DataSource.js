const a1_0x323e5c = a1_0x29e3;
(function (_0x596249, _0x5047e) {
    const _0x1a2609 = a1_0x29e3, _0xffab2b = _0x596249();
    while (!![]) {
        try {
            const _0x5a10cc = parseInt(_0x1a2609(0x71)) / 0x1 + parseInt(_0x1a2609(0x69)) / 0x2 * (parseInt(_0x1a2609(0x66)) / 0x3) + -parseInt(_0x1a2609(0x6f)) / 0x4 + -parseInt(_0x1a2609(0x6e)) / 0x5 * (-parseInt(_0x1a2609(0x6d)) / 0x6) + parseInt(_0x1a2609(0x67)) / 0x7 + -parseInt(_0x1a2609(0x70)) / 0x8 + parseInt(_0x1a2609(0x72)) / 0x9 * (-parseInt(_0x1a2609(0x6c)) / 0xa);
            if (_0x5a10cc === _0x5047e)
                break;
            else
                _0xffab2b['push'](_0xffab2b['shift']());
        } catch (_0x1cf367) {
            _0xffab2b['push'](_0xffab2b['shift']());
        }
    }
}(a1_0x4895, 0xe2789));
const api = require('./instance'), {APIError} = require('../exceptions');
function a1_0x4895() {
    const _0x2299f0 = [
        'get',
        'datasources/',
        '50CiMdks',
        '12tAPcDd',
        '1787980tCWbMI',
        '6045424QgWwqI',
        '476664qULNvj',
        '375043utNyKl',
        '65781lZVJrr',
        '[Fail\x20to\x20request\x20a\x20data\x20source]:\x20',
        '140391CHRZRI',
        '9786539mpxBbo',
        'data',
        '2PDVMfs'
    ];
    a1_0x4895 = function () {
        return _0x2299f0;
    };
    return a1_0x4895();
}
function a1_0x29e3(_0x5a140d, _0x1fc9f8) {
    const _0x4895cd = a1_0x4895();
    return a1_0x29e3 = function (_0x29e3c5, _0x5ed4b0) {
        _0x29e3c5 = _0x29e3c5 - 0x66;
        let _0x2cfe93 = _0x4895cd[_0x29e3c5];
        return _0x2cfe93;
    }, a1_0x29e3(_0x5a140d, _0x1fc9f8);
}
class DataSourceApi {
    static async [a1_0x323e5c(0x6a)](_0x1ef2b9) {
        const _0xba2568 = a1_0x323e5c;
        try {
            const _0x3de0cb = await api['get'](_0xba2568(0x6b) + _0x1ef2b9);
            return _0x3de0cb[_0xba2568(0x68)];
        } catch (_0x3181c1) {
            throw new APIError(_0xba2568(0x73), _0x3181c1);
        }
    }
}
module['exports'] = DataSourceApi;