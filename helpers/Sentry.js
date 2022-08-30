const a44_0xca91ed = a44_0x37f1;
(function (_0x2cad5d, _0x8020db) {
    const _0x2de085 = a44_0x37f1, _0x531fb4 = _0x2cad5d();
    while (!![]) {
        try {
            const _0x5a27d9 = parseInt(_0x2de085(0x1b0)) / 0x1 * (-parseInt(_0x2de085(0x1a3)) / 0x2) + parseInt(_0x2de085(0x1b2)) / 0x3 * (parseInt(_0x2de085(0x1a4)) / 0x4) + -parseInt(_0x2de085(0x1ae)) / 0x5 * (parseInt(_0x2de085(0x1b1)) / 0x6) + -parseInt(_0x2de085(0x1a5)) / 0x7 * (-parseInt(_0x2de085(0x1ac)) / 0x8) + -parseInt(_0x2de085(0x1ad)) / 0x9 + -parseInt(_0x2de085(0x1aa)) / 0xa + -parseInt(_0x2de085(0x1b4)) / 0xb * (-parseInt(_0x2de085(0x1a7)) / 0xc);
            if (_0x5a27d9 === _0x8020db)
                break;
            else
                _0x531fb4['push'](_0x531fb4['shift']());
        } catch (_0x3bf666) {
            _0x531fb4['push'](_0x531fb4['shift']());
        }
    }
}(a44_0x3ddd, 0xc486c));
function a44_0x37f1(_0x1d9ce9, _0xc08564) {
    const _0x3ddd0c = a44_0x3ddd();
    return a44_0x37f1 = function (_0x37f1a3, _0x3ac4c6) {
        _0x37f1a3 = _0x37f1a3 - 0x1a3;
        let _0x4d1fd7 = _0x3ddd0c[_0x37f1a3];
        return _0x4d1fd7;
    }, a44_0x37f1(_0x1d9ce9, _0xc08564);
}
const Config = require('../sdk/Config'), Utils = require('../sdk/Utils'), Sentry = require('@sentry/node');
function a44_0x3ddd() {
    const _0x925598 = [
        '1442243annlXO',
        '146JyGogX',
        '788QfLKxe',
        '949032jmYMAh',
        'get',
        '228BMpShv',
        'exports',
        'init',
        '36390AudkoA',
        'SENTRY_DSN',
        '56nqPaMp',
        '12641463SrUDhl',
        '1217110FYguvO',
        'isProduction',
        '16064QOVHNQ',
        '24tMFunH',
        '14001HrYfos',
        'https://bd7bacd000c840d683c8d5fe98ca3f4e@o876805.ingest.sentry.io/5826748'
    ];
    a44_0x3ddd = function () {
        return _0x925598;
    };
    return a44_0x3ddd();
}
if (Utils[a44_0xca91ed(0x1af)]()) {
    const dsn = Config[a44_0xca91ed(0x1a6)](a44_0xca91ed(0x1ab), a44_0xca91ed(0x1b3));
    Sentry[a44_0xca91ed(0x1a9)]({
        'dsn': dsn,
        'tracesSampleRate': 0x1
    });
}
module[a44_0xca91ed(0x1a8)] = Sentry;