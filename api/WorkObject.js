function a9_0x3a40(_0x54cc14, _0x244445) {
    const _0x459a09 = a9_0x459a();
    return a9_0x3a40 = function (_0x3a4088, _0x12962c) {
        _0x3a4088 = _0x3a4088 - 0x8c;
        let _0x564d41 = _0x459a09[_0x3a4088];
        return _0x564d41;
    }, a9_0x3a40(_0x54cc14, _0x244445);
}
const a9_0x2deb82 = a9_0x3a40;
(function (_0x51b3b9, _0x1ca489) {
    const _0x41355c = a9_0x3a40, _0x367fa4 = _0x51b3b9();
    while (!![]) {
        try {
            const _0x6cce4d = -parseInt(_0x41355c(0xa8)) / 0x1 + parseInt(_0x41355c(0xa9)) / 0x2 * (parseInt(_0x41355c(0x8e)) / 0x3) + parseInt(_0x41355c(0xaa)) / 0x4 + parseInt(_0x41355c(0x95)) / 0x5 * (parseInt(_0x41355c(0x9d)) / 0x6) + parseInt(_0x41355c(0x93)) / 0x7 * (parseInt(_0x41355c(0x99)) / 0x8) + -parseInt(_0x41355c(0x90)) / 0x9 + parseInt(_0x41355c(0x97)) / 0xa * (parseInt(_0x41355c(0xb0)) / 0xb);
            if (_0x6cce4d === _0x1ca489)
                break;
            else
                _0x367fa4['push'](_0x367fa4['shift']());
        } catch (_0x5bbaeb) {
            _0x367fa4['push'](_0x367fa4['shift']());
        }
    }
}(a9_0x459a, 0x5afc3));
const api = require('./instance'), {APIError} = require('../exceptions'), Utils = require('../sdk/Utils'), WorkObjectMock = require('./mocks/WorkObjectMock');
function a9_0x459a() {
    const _0x1785e9 = [
        'update',
        'delete',
        'get',
        '24ukzplN',
        'work-objects',
        'create',
        'failed',
        'notDone',
        '[Fail\x20to\x20request\x20',
        'isArray',
        '\x20work\x20objects]:\x20',
        'init',
        'data',
        'isProduction',
        '727009DTsNcT',
        '4EeYJCm',
        '1232548hMQiLp',
        'work-objects/',
        '/failed',
        'findOrCreate',
        '[Fail\x20to\x20request\x20init\x20work\x20object]:\x20',
        '/not_done',
        '154aTyynq',
        'put',
        '[Fail\x20to\x20request\x20done\x20work\x20object]:\x20',
        '/done',
        'done',
        '[Fail\x20to\x20request\x20bulk\x20create\x20objects]:\x20',
        'findByStatus',
        'bulkCreate',
        '435273MsiXLZ',
        '[Fail\x20to\x20request\x20failed\x20work\x20object]:\x20',
        '5990382WELmMw',
        '[Fail\x20to\x20request\x20not\x20done\x20work\x20object]:\x20',
        '/init',
        '251055vFYWPm',
        '[Fail\x20to\x20request\x20delete\x20work\x20object]:\x20',
        '260120nkSfYo',
        '[Fail\x20to\x20request\x20create\x20work\x20object]:\x20',
        '505580UcZHyj',
        'post',
        '56RRogoC'
    ];
    a9_0x459a = function () {
        return _0x1785e9;
    };
    return a9_0x459a();
}
class WorkObject {
    static async ['fetchAll'](_0x26a94f, _0x3f81cc = {}) {
        const _0x399688 = a9_0x3a40;
        try {
            const _0x36faf0 = await api[_0x399688(0x9c)]('work-objects', {
                'params': {
                    'bot_id': _0x26a94f,
                    ..._0x3f81cc
                }
            });
            return _0x36faf0[_0x399688(0xa6)] || {};
        } catch (_0x39e6d5) {
            throw new APIError('[Fail\x20to\x20request\x20fetch\x20all\x20work\x20objects]:\x20', _0x39e6d5);
        }
    }
    static async [a9_0x2deb82(0xad)](_0xac31f1, _0x5cfdbd) {
        const _0x5c165b = a9_0x2deb82;
        try {
            const _0x7f3fe7 = await api['post']('work-objects/' + _0xac31f1, _0x5cfdbd);
            return _0x7f3fe7[_0x5c165b(0xa6)] || {};
        } catch (_0x5512af) {
            throw new APIError('[Fail\x20to\x20request\x20find/create\x20work\x20object]:\x20', _0x5512af);
        }
    }
    static async [a9_0x2deb82(0x9f)](_0x174470) {
        const _0x260407 = a9_0x2deb82;
        try {
            const _0x258e34 = await api['post']('work-objects', _0x174470);
            return _0x258e34[_0x260407(0xa6)] || {};
        } catch (_0x4a7086) {
            throw new APIError(_0x260407(0x96), _0x4a7086);
        }
    }
    static async [a9_0x2deb82(0x8d)](_0x52a62c) {
        const _0x48f17e = a9_0x2deb82;
        try {
            const _0x441520 = Array[_0x48f17e(0xa3)](_0x52a62c) ? _0x52a62c : [_0x52a62c], _0x20c9cc = await api[_0x48f17e(0x98)](_0x48f17e(0x9e), _0x441520);
            return _0x20c9cc[_0x48f17e(0xa6)] || [];
        } catch (_0x4f5f27) {
            throw new APIError(_0x48f17e(0xb5), _0x4f5f27);
        }
    }
    static async [a9_0x2deb82(0xa5)](_0x762f13) {
        const _0x8cd25 = a9_0x2deb82;
        try {
            const _0x5128b7 = await api[_0x8cd25(0x98)](_0x8cd25(0xab) + _0x762f13 + _0x8cd25(0x92));
            return _0x5128b7[_0x8cd25(0xa6)] || {};
        } catch (_0x299f38) {
            throw new APIError(_0x8cd25(0xae), _0x299f38);
        }
    }
    static async [a9_0x2deb82(0xb4)](_0x408e98, _0x27b74f) {
        const _0x4f4b92 = a9_0x2deb82;
        try {
            const _0x5a7311 = await api[_0x4f4b92(0x98)](_0x4f4b92(0xab) + _0x408e98 + _0x4f4b92(0xb3), _0x27b74f);
            return _0x5a7311[_0x4f4b92(0xa6)] || {};
        } catch (_0x3d268e) {
            throw new APIError(_0x4f4b92(0xb2), _0x3d268e);
        }
    }
    static async [a9_0x2deb82(0xa1)](_0x39af47, _0x1d9287) {
        const _0xd227bd = a9_0x2deb82;
        try {
            const _0x2475be = await api['post'](_0xd227bd(0xab) + _0x39af47 + _0xd227bd(0xaf), _0x1d9287);
            return _0x2475be[_0xd227bd(0xa6)] || {};
        } catch (_0x3e0d62) {
            throw new APIError(_0xd227bd(0x91), _0x3e0d62);
        }
    }
    static async [a9_0x2deb82(0xa0)](_0x47371a, _0x254634) {
        const _0x1c51f9 = a9_0x2deb82;
        try {
            const _0x11fa4e = await api[_0x1c51f9(0x98)](_0x1c51f9(0xab) + _0x47371a + _0x1c51f9(0xac), _0x254634);
            return _0x11fa4e[_0x1c51f9(0xa6)] || {};
        } catch (_0x43531b) {
            throw new APIError(_0x1c51f9(0x8f), _0x43531b);
        }
    }
    static async [a9_0x2deb82(0x9a)](_0x5cd657, _0x8f7b96) {
        const _0x4f85af = a9_0x2deb82;
        try {
            const _0x3bc1ae = await api[_0x4f85af(0xb1)](_0x4f85af(0xab) + _0x5cd657, _0x8f7b96);
            return _0x3bc1ae['data'] || {};
        } catch (_0x53ed33) {
            throw new APIError('[Fail\x20to\x20request\x20update\x20work\x20object]:\x20', _0x53ed33);
        }
    }
    static async [a9_0x2deb82(0x9b)](_0x46e960) {
        const _0x494299 = a9_0x2deb82;
        try {
            const _0x3c98a1 = await api[_0x494299(0x9b)](_0x494299(0xab) + _0x46e960);
            return _0x3c98a1[_0x494299(0xa6)] || {};
        } catch (_0x35f860) {
            throw new APIError(_0x494299(0x94), _0x35f860);
        }
    }
    static async [a9_0x2deb82(0x8c)](_0x5670ef, _0x46a87c) {
        const _0x1c815e = a9_0x2deb82;
        try {
            const _0x26549d = await api['get']('work-objects/' + _0x5670ef + '/' + _0x46a87c);
            return _0x26549d[_0x1c815e(0xa6)] || {};
        } catch (_0x778b0e) {
            throw new APIError(_0x1c815e(0xa2) + _0x46a87c + _0x1c815e(0xa4), _0x778b0e);
        }
    }
}
module['exports'] = Utils[a9_0x2deb82(0xa7)]() ? WorkObject : WorkObjectMock;