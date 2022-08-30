const a60_0x5d99ad = a60_0x1d33;
(function (_0x2fc4f3, _0x25ce09) {
    const _0x35b26d = a60_0x1d33, _0x5d8bd1 = _0x2fc4f3();
    while (!![]) {
        try {
            const _0x3c409e = -parseInt(_0x35b26d(0x113)) / 0x1 + parseInt(_0x35b26d(0x10b)) / 0x2 * (parseInt(_0x35b26d(0x112)) / 0x3) + -parseInt(_0x35b26d(0x109)) / 0x4 * (parseInt(_0x35b26d(0x106)) / 0x5) + parseInt(_0x35b26d(0x107)) / 0x6 + -parseInt(_0x35b26d(0xff)) / 0x7 + parseInt(_0x35b26d(0x10f)) / 0x8 * (parseInt(_0x35b26d(0x118)) / 0x9) + -parseInt(_0x35b26d(0xfa)) / 0xa * (-parseInt(_0x35b26d(0x10a)) / 0xb);
            if (_0x3c409e === _0x25ce09)
                break;
            else
                _0x5d8bd1['push'](_0x5d8bd1['shift']());
        } catch (_0xda90ff) {
            _0x5d8bd1['push'](_0x5d8bd1['shift']());
        }
    }
}(a60_0x10d4, 0x50fea));
function a60_0x1d33(_0x2cfd03, _0x3da41f) {
    const _0x10d40a = a60_0x10d4();
    return a60_0x1d33 = function (_0x1d33f9, _0xaded14) {
        _0x1d33f9 = _0x1d33f9 - 0xf9;
        let _0x501930 = _0x10d40a[_0x1d33f9];
        return _0x501930;
    }, a60_0x1d33(_0x2cfd03, _0x3da41f);
}
class GarbageCollector {
    ['_events'] = {
        'app': [],
        'exit': [],
        'canceled': [],
        'failed': []
    };
    constructor() {
        const _0x2d0dda = a60_0x1d33;
        this[_0x2d0dda(0x102)] = { ...this[_0x2d0dda(0xfc)] }, process['on'](_0x2d0dda(0x103), this[_0x2d0dda(0x116)]['bind'](this, 'app')), process['on']('SIGINT', this['handle'][_0x2d0dda(0xf9)](this, _0x2d0dda(0x110))), process['on'](_0x2d0dda(0x108), this['handle']['bind'](this, _0x2d0dda(0x110))), process['on'](_0x2d0dda(0x10e), this['handle']['bind'](this, _0x2d0dda(0x110))), process['on'](_0x2d0dda(0x114), this[_0x2d0dda(0x116)][_0x2d0dda(0xf9)](this, _0x2d0dda(0x110))), process['on'](_0x2d0dda(0x115), this['handle'][_0x2d0dda(0xf9)](this, _0x2d0dda(0x110))), process['on']('SIGQUIT', this[_0x2d0dda(0x116)][_0x2d0dda(0xf9)](this, _0x2d0dda(0x110))), process['on']('SIGBREAK', this[_0x2d0dda(0x116)][_0x2d0dda(0xf9)](this, _0x2d0dda(0x110))), process['on'](_0x2d0dda(0xfe), this[_0x2d0dda(0x116)][_0x2d0dda(0xf9)](this, _0x2d0dda(0x111))), process['on'](_0x2d0dda(0x10d), this['handle'][_0x2d0dda(0xf9)](this, _0x2d0dda(0x111)));
    }
    async [a60_0x5d99ad(0x116)](_0x56971, _0x55407f, _0x461e1a = 0x0) {
        const _0x3ad400 = a60_0x5d99ad;
        await this[_0x3ad400(0xfb)](_0x56971, _0x55407f), process[_0x3ad400(0x104)](_0x461e1a);
    }
    ['onClean'](_0x565a61, _0x302245 = a60_0x5d99ad(0x10c)) {
        const _0x5976a4 = a60_0x5d99ad;
        this['events'][_0x302245][_0x5976a4(0xfd)](_0x565a61);
    }
    [a60_0x5d99ad(0x101)](_0x92ed07) {
        this['events'][_0x92ed07] = [];
    }
    [a60_0x5d99ad(0x117)]() {
        const _0x59f26c = a60_0x5d99ad;
        this[_0x59f26c(0x102)] = { ...this[_0x59f26c(0xfc)] };
    }
    async [a60_0x5d99ad(0x100)]() {
        const _0x51d690 = a60_0x5d99ad;
        await this['dispatch'](_0x51d690(0x10c));
    }
    async [a60_0x5d99ad(0xfb)](_0x490587) {
        const _0x5ca5cf = a60_0x5d99ad;
        try {
            const _0x3c5378 = this['events'][_0x490587] || [];
            for (const _0x4f0078 in _0x3c5378) {
                try {
                    const _0x9e249a = _0x3c5378[_0x4f0078];
                    await _0x9e249a(), delete this['events'][_0x4f0078];
                } catch (_0x5b9605) {
                    console[_0x5ca5cf(0x105)](_0x5b9605);
                }
            }
        } catch (_0x283ef3) {
            console['error'](_0x283ef3);
        }
    }
}
module['exports'] = GarbageCollector;
function a60_0x10d4() {
    const _0x567233 = [
        'unregister',
        'events',
        'beforeExit',
        'exit',
        'error',
        '25NdLjif',
        '1046976Gbyhwt',
        'SIGHUP',
        '392852uzmqtM',
        '11dCEWsc',
        '314tpZyjM',
        'app',
        'unhandledRejection',
        'SIGUSR1',
        '874816WQCPyr',
        'canceled',
        'failed',
        '5760NPNost',
        '430272mcpVxC',
        'SIGUSR2',
        'SIGTERM',
        'handle',
        'unregisterAll',
        '45QdYZFq',
        'bind',
        '7844260tXuezJ',
        'dispatch',
        '_events',
        'push',
        'uncaughtException',
        '3878217HFTOoD',
        'clear'
    ];
    a60_0x10d4 = function () {
        return _0x567233;
    };
    return a60_0x10d4();
}