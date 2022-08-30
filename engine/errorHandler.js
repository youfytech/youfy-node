function a27_0x5583() {
    const _0xdfb260 = [
        '24PiyPVq',
        '228942LlZmXw',
        '2768VasYaW',
        '3EBmrAk',
        '8rEasxg',
        '429533lObWwe',
        '5701410pccMPP',
        'exit',
        'ERROR_HANDLER',
        '418460tkzuDS',
        '1083932gcUeHj',
        'error',
        '517565aRDpMT'
    ];
    a27_0x5583 = function () {
        return _0xdfb260;
    };
    return a27_0x5583();
}
function a27_0x1991(_0x1a22c7, _0x206184) {
    const _0x5583b9 = a27_0x5583();
    return a27_0x1991 = function (_0x1991ad, _0x1c5989) {
        _0x1991ad = _0x1991ad - 0x108;
        let _0x99b583 = _0x5583b9[_0x1991ad];
        return _0x99b583;
    }, a27_0x1991(_0x1a22c7, _0x206184);
}
(function (_0x2cf428, _0x365934) {
    const _0x51f644 = a27_0x1991, _0x2e9c4b = _0x2cf428();
    while (!![]) {
        try {
            const _0x4104bd = parseInt(_0x51f644(0x110)) / 0x1 + parseInt(_0x51f644(0x10d)) / 0x2 + -parseInt(_0x51f644(0x10e)) / 0x3 * (parseInt(_0x51f644(0x108)) / 0x4) + parseInt(_0x51f644(0x10a)) / 0x5 * (-parseInt(_0x51f644(0x10b)) / 0x6) + -parseInt(_0x51f644(0x114)) / 0x7 * (-parseInt(_0x51f644(0x10f)) / 0x8) + -parseInt(_0x51f644(0x10c)) / 0x9 + parseInt(_0x51f644(0x111)) / 0xa;
            if (_0x4104bd === _0x365934)
                break;
            else
                _0x2e9c4b['push'](_0x2e9c4b['shift']());
        } catch (_0x21fae2) {
            _0x2e9c4b['push'](_0x2e9c4b['shift']());
        }
    }
}(a27_0x5583, 0x5589d), process['on']('message', async ({
    status: _0x34e2b,
    error: _0x1d3d78,
    job_id: _0x4706c3,
    bot_id: _0x4d1192
}) => {
    const _0x5f398e = a27_0x1991;
    globalThis['id'] = _0x4d1192;
    try {
        const _0x2d273c = require('../handlers/JobHandler'), _0x1b343a = new _0x2d273c(_0x4706c3);
        await _0x1b343a[_0x34e2b](new Error(_0x1d3d78));
    } catch (_0x555cb5) {
        console[_0x5f398e(0x109)](_0x5f398e(0x113), _0x555cb5);
    } finally {
        process[_0x5f398e(0x112)](0x0);
    }
}));