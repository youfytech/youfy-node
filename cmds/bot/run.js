function a19_0x60b5(_0x422ed8, _0x15e1f0) {
    const _0x362d2d = a19_0x362d();
    return a19_0x60b5 = function (_0x60b5ea, _0x2d4d6d) {
        _0x60b5ea = _0x60b5ea - 0x15e;
        let _0x99747b = _0x362d2d[_0x60b5ea];
        return _0x99747b;
    }, a19_0x60b5(_0x422ed8, _0x15e1f0);
}
const a19_0x51b31 = a19_0x60b5;
function a19_0x362d() {
    const _0x39f5fb = [
        '266060wOSZRf',
        'Bot\x20path',
        'exports',
        '66420QxDmcQ',
        '803109kOGkZQ',
        '2029824TJaopi',
        'now',
        '675745OfNpNJ',
        '135dzAgFv',
        'main',
        'run\x20[path]',
        '75AGxKhc',
        '2kRhfPc',
        'jobId',
        '134331TiqhBg',
        '46912zyyJvO',
        'get',
        '00000000-0000-0000-0000-000000000000'
    ];
    a19_0x362d = function () {
        return _0x39f5fb;
    };
    return a19_0x362d();
}
(function (_0x52784a, _0x57296d) {
    const _0x39b604 = a19_0x60b5, _0x2f58af = _0x52784a();
    while (!![]) {
        try {
            const _0x4f9f35 = -parseInt(_0x39b604(0x164)) / 0x1 * (parseInt(_0x39b604(0x162)) / 0x2) + -parseInt(_0x39b604(0x16c)) / 0x3 + parseInt(_0x39b604(0x165)) / 0x4 * (-parseInt(_0x39b604(0x161)) / 0x5) + -parseInt(_0x39b604(0x16b)) / 0x6 + parseInt(_0x39b604(0x16f)) / 0x7 + parseInt(_0x39b604(0x16d)) / 0x8 + -parseInt(_0x39b604(0x15e)) / 0x9 * (-parseInt(_0x39b604(0x168)) / 0xa);
            if (_0x4f9f35 === _0x57296d)
                break;
            else
                _0x2f58af['push'](_0x2f58af['shift']());
        } catch (_0x4cad00) {
            _0x2f58af['push'](_0x2f58af['shift']());
        }
    }
}(a19_0x362d, 0x27249));
const {resolve} = require('path'), runJob = require('../../engine/runJob'), Config = require('../../sdk/Config'), Package = require('../../sdk/Package'), command = async _0x474259 => {
        const _0x4104a5 = a19_0x60b5;
        await runJob({
            'job_id': Config['get'](_0x4104a5(0x163), Date[_0x4104a5(0x16e)]()),
            'bot_id': Config[_0x4104a5(0x166)]('id', Package[_0x4104a5(0x166)]('id', _0x4104a5(0x167))),
            'botFn': require(resolve(_0x474259.path))
        });
    }, cmdArgs = _0xe3cf73 => {
        const _0x3a9fc5 = a19_0x60b5, _0x4e1479 = Package[_0x3a9fc5(0x166)](_0x3a9fc5(0x15f));
        if (!_0x4e1479)
            throw new Error('Prorperly\x20main\x20not\x20set\x20in\x20package.json.\x20Please\x20set\x20it\x20to\x20the\x20path\x20of\x20the\x20bot\x20file.');
        _0xe3cf73['positional']('path', {
            'describe': _0x3a9fc5(0x169),
            'default': _0x4e1479
        });
    };
module[a19_0x51b31(0x16a)] = [
    a19_0x51b31(0x160),
    'Execute\x20a\x20bot',
    cmdArgs,
    command
];