function a52_0x3658(_0x164c06, _0x3c9176) {
    const _0x4d3225 = a52_0x4d32();
    return a52_0x3658 = function (_0x365882, _0x5b4e04) {
        _0x365882 = _0x365882 - 0x99;
        let _0x4f61e3 = _0x4d3225[_0x365882];
        return _0x4f61e3;
    }, a52_0x3658(_0x164c06, _0x3c9176);
}
function a52_0x4d32() {
    const _0x4c4eac = [
        '\x20-l\x20',
        '748164snaWfa',
        '8415400QWyjQB',
        '.txt',
        'length',
        'utf8',
        'exports',
        'replace',
        '72978SatvFd',
        'eng',
        'lang',
        '\x20--psm\x2011',
        '2wjNNFA',
        '/tmp',
        '313162IpKvaa',
        '1721785uFKNOm',
        '9eGtAcn',
        '2040432RboHrM',
        '3374456fSDExu',
        'trim',
        '161DmZWfI',
        '\x20--oem\x20'
    ];
    a52_0x4d32 = function () {
        return _0x4c4eac;
    };
    return a52_0x4d32();
}
const a52_0x3fac00 = a52_0x3658;
(function (_0x11f639, _0x19d40b) {
    const _0x3c2443 = a52_0x3658, _0x4f4176 = _0x11f639();
    while (!![]) {
        try {
            const _0x4fa578 = -parseInt(_0x3c2443(0xaa)) / 0x1 + parseInt(_0x3c2443(0xa8)) / 0x2 * (-parseInt(_0x3c2443(0x9d)) / 0x3) + -parseInt(_0x3c2443(0xad)) / 0x4 + parseInt(_0x3c2443(0xab)) / 0x5 + -parseInt(_0x3c2443(0xa4)) / 0x6 * (parseInt(_0x3c2443(0x9a)) / 0x7) + parseInt(_0x3c2443(0xae)) / 0x8 * (parseInt(_0x3c2443(0xac)) / 0x9) + parseInt(_0x3c2443(0x9e)) / 0xa;
            if (_0x4fa578 === _0x19d40b)
                break;
            else
                _0x4f4176['push'](_0x4f4176['shift']());
        } catch (_0x145b17) {
            _0x4f4176['push'](_0x4f4176['shift']());
        }
    }
}(a52_0x4d32, 0x3e541));
const applyRules = require('./applyRules'), fs = require('fs'), {execSync} = require('child_process'), {basename, resolve, extname} = require('path');
module[a52_0x3fac00(0xa2)] = async function readImage(_0x41d7d5, _0x33dc61 = {}) {
    const _0x4144dd = a52_0x3fac00, _0x5ea95c = {
            'output_dir': _0x4144dd(0xa9),
            'lang': _0x4144dd(0xa5),
            'oem': '3',
            'rules': [],
            ..._0x33dc61
        }, _0x1cd288 = basename(_0x41d7d5)[_0x4144dd(0xa3)](extname(_0x41d7d5), ''), _0xbe8a66 = resolve(_0x5ea95c['output_dir'], _0x1cd288), _0x5445dd = 'tesseract\x20' + _0x41d7d5 + '\x20' + _0xbe8a66 + _0x4144dd(0x9b) + _0x5ea95c['oem'] + _0x4144dd(0x9c) + _0x5ea95c[_0x4144dd(0xa6)] + _0x4144dd(0xa7);
    execSync(_0x5445dd);
    const _0x3af576 = fs['readFileSync'](_0xbe8a66 + _0x4144dd(0x9f), _0x4144dd(0xa1));
    if (_0x5ea95c['rules'][_0x4144dd(0xa0)])
        return applyRules(_0x3af576['replace'](/\n/g, '\x20')[_0x4144dd(0xa3)](/\f/g, '')[_0x4144dd(0x99)](), { 'rules': _0x5ea95c['rules'] });
    return _0x3af576;
};