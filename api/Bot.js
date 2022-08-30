function a0_0x4211() {
    const _0xac3f7 = [
        '3883818IjoURF',
        '784TGPJQx',
        '11PdpeLn',
        '111807DPgiqD',
        'data',
        '10JCeiCY',
        '124647cIEogW',
        'exports',
        '14iBNtoy',
        '2245040OdJTlb',
        'fetch',
        '3902088anGUpv',
        '574921wuSaeI',
        'put',
        '1668868ZtRVBf',
        'bots/',
        '15JnMgHV'
    ];
    a0_0x4211 = function () {
        return _0xac3f7;
    };
    return a0_0x4211();
}
const a0_0x2d1eda = a0_0x1ed8;
function a0_0x1ed8(_0x4713a2, _0x1e92ec) {
    const _0x421191 = a0_0x4211();
    return a0_0x1ed8 = function (_0x1ed8df, _0x206b5c) {
        _0x1ed8df = _0x1ed8df - 0x1d2;
        let _0x27b2c0 = _0x421191[_0x1ed8df];
        return _0x27b2c0;
    }, a0_0x1ed8(_0x4713a2, _0x1e92ec);
}
(function (_0x5186e8, _0x8cff07) {
    const _0x23720c = a0_0x1ed8, _0x56fdb6 = _0x5186e8();
    while (!![]) {
        try {
            const _0x2b9e9a = -parseInt(_0x23720c(0x1e2)) / 0x1 + -parseInt(_0x23720c(0x1db)) / 0x2 * (-parseInt(_0x23720c(0x1dc)) / 0x3) + -parseInt(_0x23720c(0x1d3)) / 0x4 * (parseInt(_0x23720c(0x1d5)) / 0x5) + parseInt(_0x23720c(0x1d6)) / 0x6 * (parseInt(_0x23720c(0x1de)) / 0x7) + parseInt(_0x23720c(0x1d7)) / 0x8 * (parseInt(_0x23720c(0x1d9)) / 0x9) + parseInt(_0x23720c(0x1df)) / 0xa + -parseInt(_0x23720c(0x1d8)) / 0xb * (parseInt(_0x23720c(0x1e1)) / 0xc);
            if (_0x2b9e9a === _0x8cff07)
                break;
            else
                _0x56fdb6['push'](_0x56fdb6['shift']());
        } catch (_0x147e08) {
            _0x56fdb6['push'](_0x56fdb6['shift']());
        }
    }
}(a0_0x4211, 0xc17f3));
const api = require('./instance'), {APIError} = require('../exceptions'), BotMock = require('./mocks/BotMock'), Utils = require('../sdk/Utils');
class Bot {
    static async [a0_0x2d1eda(0x1e0)](_0x345def) {
        const _0x5c969f = a0_0x2d1eda;
        try {
            const _0x1ee683 = await api['get']('bots/' + _0x345def);
            return _0x1ee683[_0x5c969f(0x1da)];
        } catch (_0x3dc3cc) {
            throw new APIError('[Fail\x20to\x20request\x20bot]:\x20', _0x3dc3cc);
        }
    }
    static async ['update'](_0x54a220, _0x58f302) {
        const _0x28a6a5 = a0_0x2d1eda;
        try {
            const _0xad8353 = await api[_0x28a6a5(0x1d2)](_0x28a6a5(0x1d4) + _0x54a220, _0x58f302);
            return _0xad8353[_0x28a6a5(0x1da)];
        } catch (_0x2f3cd9) {
            throw new APIError('[Fail\x20to\x20update\x20bot]:\x20', _0x2f3cd9);
        }
    }
}
module[a0_0x2d1eda(0x1dd)] = Utils['isProduction']() ? Bot : BotMock;