const a13_0x2f787a = a13_0x59b3;
(function (_0x10e482, _0x2bd638) {
    const _0x35808 = a13_0x59b3, _0x519f28 = _0x10e482();
    while (!![]) {
        try {
            const _0x10fd04 = parseInt(_0x35808(0x1b0)) / 0x1 * (parseInt(_0x35808(0x1b9)) / 0x2) + parseInt(_0x35808(0x1b1)) / 0x3 + -parseInt(_0x35808(0x1aa)) / 0x4 + -parseInt(_0x35808(0x1b2)) / 0x5 + -parseInt(_0x35808(0x1ab)) / 0x6 + -parseInt(_0x35808(0x1a6)) / 0x7 * (parseInt(_0x35808(0x1a8)) / 0x8) + -parseInt(_0x35808(0x1a7)) / 0x9 * (-parseInt(_0x35808(0x1b7)) / 0xa);
            if (_0x10fd04 === _0x2bd638)
                break;
            else
                _0x519f28['push'](_0x519f28['shift']());
        } catch (_0x3226ec) {
            _0x519f28['push'](_0x519f28['shift']());
        }
    }
}(a13_0x145f, 0xa7984));
function a13_0x59b3(_0x4f5f0d, _0x192be4) {
    const _0x145f30 = a13_0x145f();
    return a13_0x59b3 = function (_0x59b3ec, _0x211834) {
        _0x59b3ec = _0x59b3ec - 0x1a6;
        let _0x3f67cf = _0x145f30[_0x59b3ec];
        return _0x3f67cf;
    }, a13_0x59b3(_0x4f5f0d, _0x192be4);
}
const MockState = require('./MockState'), {v4: uuidv4} = require('uuid');
class JobMock {
    static async [a13_0x2f787a(0x1b6)]() {
        const _0x438257 = a13_0x2f787a;
        return MockState[_0x438257(0x1b4)](_0x438257(0x1ad));
    }
    static [a13_0x2f787a(0x1b5)](_0x16247b) {
        const _0x2d7a4a = a13_0x2f787a, _0x369d73 = {
                ...MockState['get']('job'),
                ..._0x16247b
            };
        return MockState['set'](_0x2d7a4a(0x1ad), _0x369d73), _0x369d73;
    }
    static async ['init'](_0x18b040, _0x9d4e9) {
        return this['_updateJob']({
            'id': _0x18b040,
            'bot_id': _0x9d4e9,
            'status': 'WORKING',
            'started_at': new Date()
        });
    }
    static async [a13_0x2f787a(0x1a9)](_0x2bf80f) {
        const _0x32b670 = a13_0x2f787a, _0x12a6ab = uuidv4(), _0x3bf9eb = MockState[_0x32b670(0x1b4)](_0x32b670(0x1ad));
        return MockState['set']('job', {
            'id': _0x12a6ab,
            ..._0x3bf9eb,
            ..._0x2bf80f
        }), MockState[_0x32b670(0x1b4)](_0x32b670(0x1ad));
    }
    static async [a13_0x2f787a(0x1b8)](_0x5d86d3, _0xd5237a, _0x29ab67) {
        const _0x2fc3d2 = a13_0x2f787a;
        return this[_0x2fc3d2(0x1b5)]({
            'id': _0x5d86d3,
            'status': _0xd5237a[_0x2fc3d2(0x1ac)](),
            'error': _0x29ab67
        });
    }
    static async [a13_0x2f787a(0x1af)](_0x214e0b, _0x4a962f) {
        const _0x564c2b = a13_0x2f787a;
        return this[_0x564c2b(0x1b5)]({
            'id': _0x214e0b,
            ..._0x4a962f
        });
    }
    static async [a13_0x2f787a(0x1b3)](_0x5c04df, _0x5aeba7) {
        const _0x18dd8d = a13_0x2f787a;
        return _0x5aeba7[_0x18dd8d(0x1ae)] = _0x5c04df, _0x5aeba7;
    }
}
function a13_0x145f() {
    const _0x313b1b = [
        '_updateJob',
        'fetch',
        '16054940QGOwzK',
        'updateStatus',
        '11902MSFTtq',
        '2590224lPppae',
        '18mkScrK',
        '16UHlIqZ',
        'create',
        '3058508pujSTr',
        '3085590mVRPWd',
        'toUpperCase',
        'job',
        'job_id',
        'update',
        '55lefXJR',
        '325983IHbDPo',
        '4707650zelcOk',
        'addWarn',
        'get'
    ];
    a13_0x145f = function () {
        return _0x313b1b;
    };
    return a13_0x145f();
}
module['exports'] = JobMock;