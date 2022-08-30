const a3_0x109bcd = a3_0x10e9;
(function (_0x4bf792, _0x4deac1) {
    const _0x447bba = a3_0x10e9, _0x82bc58 = _0x4bf792();
    while (!![]) {
        try {
            const _0x2fbe18 = -parseInt(_0x447bba(0x12b)) / 0x1 * (parseInt(_0x447bba(0x114)) / 0x2) + -parseInt(_0x447bba(0x10f)) / 0x3 * (parseInt(_0x447bba(0x11a)) / 0x4) + -parseInt(_0x447bba(0x11c)) / 0x5 * (-parseInt(_0x447bba(0x117)) / 0x6) + parseInt(_0x447bba(0x11e)) / 0x7 * (-parseInt(_0x447bba(0x11b)) / 0x8) + -parseInt(_0x447bba(0x128)) / 0x9 + parseInt(_0x447bba(0x110)) / 0xa * (-parseInt(_0x447bba(0x111)) / 0xb) + parseInt(_0x447bba(0x129)) / 0xc;
            if (_0x2fbe18 === _0x4deac1)
                break;
            else
                _0x82bc58['push'](_0x82bc58['shift']());
        } catch (_0x3f405f) {
            _0x82bc58['push'](_0x82bc58['shift']());
        }
    }
}(a3_0x4669, 0xca8e5));
const api = require('./instance'), {APIError} = require('../exceptions'), Utils = require('../sdk/Utils'), JobMock = require('./mocks/JobMock');
function a3_0x4669() {
    const _0x3ec5fb = [
        '[Fail\x20to\x20update\x20job]:\x20',
        '2468OrvqeZ',
        '60248NWCcEp',
        '9370ferbBw',
        'put',
        '1393iiTSSR',
        '[Fail\x20to\x20request\x20create\x20job]:\x20',
        'init',
        'WORKING',
        'data',
        '[Fail\x20to\x20request\x20job]:\x20',
        '/warnings',
        'jobs/',
        'create',
        'isProduction',
        '7517898ARoLfN',
        '56520888fJerco',
        '[Fail\x20to\x20request\x20job\x20initialization]:\x20',
        '1099793lGisSQ',
        '[Fail\x20to\x20update\x20job\x20status\x20to\x20',
        'addWarn',
        'post',
        'get',
        '759bvRmcz',
        '1090knhDaY',
        '145816IqbNPJ',
        'fetch',
        '[Fail\x20to\x20add\x20warnings\x20job]:\x20',
        '2qVOMyS',
        '/init',
        'exports',
        '3696glbZDz',
        'jobs'
    ];
    a3_0x4669 = function () {
        return _0x3ec5fb;
    };
    return a3_0x4669();
}
class Job {
    static async [a3_0x109bcd(0x112)](_0x244e5e) {
        const _0x450c49 = a3_0x109bcd;
        try {
            const _0x53adb0 = await api[_0x450c49(0x10e)]('jobs/' + _0x244e5e);
            return _0x53adb0[_0x450c49(0x122)];
        } catch (_0x4f7606) {
            throw new APIError(_0x450c49(0x123), _0x4f7606);
        }
    }
    static async [a3_0x109bcd(0x120)](_0x31a8b8, _0x1dc924) {
        const _0x13b206 = a3_0x109bcd;
        try {
            const _0x11a8b7 = await api[_0x13b206(0x11d)]('jobs/' + _0x31a8b8 + _0x13b206(0x115), { 'bot_id': _0x1dc924 });
            return _0x11a8b7['data'] || {};
        } catch (_0x3195d3) {
            throw new APIError(_0x13b206(0x12a), _0x3195d3);
        }
    }
    static async [a3_0x109bcd(0x126)](_0x5d5122) {
        const _0x580bd7 = a3_0x109bcd;
        try {
            const _0x4bc86b = await api[_0x580bd7(0x10d)](_0x580bd7(0x118), {
                'status': _0x580bd7(0x121),
                'attempts': 0x0,
                'requested_at': new Date(),
                ..._0x5d5122
            });
            return _0x4bc86b['data'] || {};
        } catch (_0x5b321a) {
            throw new APIError(_0x580bd7(0x11f), _0x5b321a);
        }
    }
    static async ['updateStatus'](_0x4be886, _0x35c6ef, _0x357bb1) {
        const _0x4792a5 = a3_0x109bcd;
        try {
            const _0x1c34a8 = await api[_0x4792a5(0x11d)](_0x4792a5(0x125) + _0x4be886 + '/' + _0x35c6ef, { 'error': _0x357bb1 });
            return _0x1c34a8[_0x4792a5(0x122)] || {};
        } catch (_0x4d2ebf) {
            throw new APIError(_0x4792a5(0x10b) + _0x35c6ef + ']:\x20', _0x4d2ebf);
        }
    }
    static async ['update'](_0x3544d4, _0x3fa4d2) {
        const _0x3635dc = a3_0x109bcd;
        try {
            const _0x3dd35f = await api['put']('jobs/' + _0x3544d4, _0x3fa4d2);
            return _0x3dd35f[_0x3635dc(0x122)] || {};
        } catch (_0x513796) {
            throw new APIError(_0x3635dc(0x119), _0x513796);
        }
    }
    static async [a3_0x109bcd(0x10c)](_0x3c5057, _0x20f1a8) {
        const _0x2c5d48 = a3_0x109bcd;
        try {
            const _0x4c004e = await api[_0x2c5d48(0x10d)](_0x2c5d48(0x125) + _0x3c5057 + _0x2c5d48(0x124), _0x20f1a8);
            return _0x4c004e[_0x2c5d48(0x122)] || {};
        } catch (_0x4525e4) {
            throw new APIError(_0x2c5d48(0x113), _0x4525e4);
        }
    }
}
function a3_0x10e9(_0xb469ea, _0x124bbc) {
    const _0x466984 = a3_0x4669();
    return a3_0x10e9 = function (_0x10e95d, _0x53d259) {
        _0x10e95d = _0x10e95d - 0x10b;
        let _0xc1cf17 = _0x466984[_0x10e95d];
        return _0xc1cf17;
    }, a3_0x10e9(_0xb469ea, _0x124bbc);
}
module[a3_0x109bcd(0x116)] = Utils[a3_0x109bcd(0x127)]() ? Job : JobMock;