function a20_0x4b83(_0x355bb0, _0x5080d6) {
    const _0x248894 = a20_0x2488();
    return a20_0x4b83 = function (_0x4b83ef, _0x25aea4) {
        _0x4b83ef = _0x4b83ef - 0x1e2;
        let _0x1d0fd1 = _0x248894[_0x4b83ef];
        return _0x1d0fd1;
    }, a20_0x4b83(_0x355bb0, _0x5080d6);
}
function a20_0x2488() {
    const _0x3fdd86 = [
        '../../engine/server.js',
        'inherit',
        '8TmvyJF',
        '22osohVo',
        'Start\x20the\x20bot\x20server',
        '198441iQkvho',
        '104ZJlXoE',
        'resolve',
        '7074iTtECM',
        '1189660MlBolF',
        '628qHvIwX',
        'daemon',
        '2332970WchFMb',
        '2365461cRAsLO',
        'exports',
        '31ksfZbP',
        'exit',
        '1089396pWZyRl'
    ];
    a20_0x2488 = function () {
        return _0x3fdd86;
    };
    return a20_0x2488();
}
const a20_0x18e708 = a20_0x4b83;
(function (_0x394437, _0x334f0d) {
    const _0x3d2007 = a20_0x4b83, _0x984f2f = _0x394437();
    while (!![]) {
        try {
            const _0x17cbc5 = parseInt(_0x3d2007(0x1ed)) / 0x1 * (-parseInt(_0x3d2007(0x1e8)) / 0x2) + -parseInt(_0x3d2007(0x1e6)) / 0x3 * (parseInt(_0x3d2007(0x1e4)) / 0x4) + parseInt(_0x3d2007(0x1e7)) / 0x5 + parseInt(_0x3d2007(0x1ef)) / 0x6 + parseInt(_0x3d2007(0x1eb)) / 0x7 + -parseInt(_0x3d2007(0x1f2)) / 0x8 * (parseInt(_0x3d2007(0x1e3)) / 0x9) + -parseInt(_0x3d2007(0x1ea)) / 0xa * (parseInt(_0x3d2007(0x1f3)) / 0xb);
            if (_0x17cbc5 === _0x334f0d)
                break;
            else
                _0x984f2f['push'](_0x984f2f['shift']());
        } catch (_0x2479d8) {
            _0x984f2f['push'](_0x984f2f['shift']());
        }
    }
}(a20_0x2488, 0x30468));
const {execSync} = require('child_process'), path = require('path'), Package = require('../../sdk/Package'), command = async _0x53d591 => {
        const _0x305214 = a20_0x4b83, _0x31d2e4 = path[_0x305214(0x1e5)](__dirname, _0x305214(0x1f0));
        if (!_0x53d591[_0x305214(0x1e9)])
            require(_0x31d2e4);
        else {
            delete _0x53d591[_0x305214(0x1e9)];
            const _0x4ca9a8 = Package['get']('id');
            execSync('pm2\x20start\x20--name=ws-' + _0x4ca9a8 + '\x20' + _0x31d2e4, { 'stdio': _0x305214(0x1f1) }), process[_0x305214(0x1ee)](0x0);
        }
    };
module[a20_0x18e708(0x1ec)] = [
    'start',
    a20_0x18e708(0x1e2),
    () => {
    },
    command
];