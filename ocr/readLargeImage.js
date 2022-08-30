function a53_0x31e3() {
    const _0x3df802 = [
        'oem',
        'lang',
        'toString',
        '7iMzRnC',
        'utf8',
        '10Pwiphm',
        '\x20--oem\x20',
        'tmpdir',
        '341230zcAAFV',
        '6813030ZaNUYH',
        '162896XMOKON',
        '471090tnSeWS',
        '423htAzAg',
        '3058288fmrjgf',
        'Extracting\x20image\x20text...',
        '272510CqFbGb',
        '432831QWKQMA',
        'eng'
    ];
    a53_0x31e3 = function () {
        return _0x3df802;
    };
    return a53_0x31e3();
}
function a53_0x264d(_0x383f6a, _0x11ac8b) {
    const _0x31e352 = a53_0x31e3();
    return a53_0x264d = function (_0x264dea, _0x378c8b) {
        _0x264dea = _0x264dea - 0xe7;
        let _0x336909 = _0x31e352[_0x264dea];
        return _0x336909;
    }, a53_0x264d(_0x383f6a, _0x11ac8b);
}
(function (_0x53d98a, _0x423e52) {
    const _0x2e4ab7 = a53_0x264d, _0xee89b4 = _0x53d98a();
    while (!![]) {
        try {
            const _0x559fc8 = parseInt(_0x2e4ab7(0xf2)) / 0x1 + -parseInt(_0x2e4ab7(0xec)) / 0x2 * (-parseInt(_0x2e4ab7(0xf7)) / 0x3) + -parseInt(_0x2e4ab7(0xf4)) / 0x4 + -parseInt(_0x2e4ab7(0xf6)) / 0x5 + -parseInt(_0x2e4ab7(0xf0)) / 0x6 + parseInt(_0x2e4ab7(0xea)) / 0x7 * (-parseInt(_0x2e4ab7(0xf1)) / 0x8) + -parseInt(_0x2e4ab7(0xf3)) / 0x9 * (-parseInt(_0x2e4ab7(0xef)) / 0xa);
            if (_0x559fc8 === _0x423e52)
                break;
            else
                _0xee89b4['push'](_0xee89b4['shift']());
        } catch (_0x5f2331) {
            _0xee89b4['push'](_0xee89b4['shift']());
        }
    }
}(a53_0x31e3, 0xc8843));
const os = require('os'), fs = require('fs'), {execSync} = require('child_process'), {basename, resolve, extname} = require('path'), logger = require('../sdk/Logger');
module['exports'] = function readLargeImage(_0x381c0b, _0xbbd0ac) {
    const _0x219b69 = a53_0x264d;
    logger['info'](_0x219b69(0xf5));
    const _0x57d12c = {
            'lang': _0x219b69(0xf8),
            'oem': '3',
            'output_dir': os[_0x219b69(0xee)](),
            ..._0xbbd0ac
        }, _0x3d95f4 = basename(_0x381c0b)['replace'](extname(_0x381c0b), ''), _0x39775b = resolve(_0x57d12c['output_dir'], _0x3d95f4), _0x2e04ed = 'tesseract\x20' + _0x381c0b + '\x20' + _0x39775b + _0x219b69(0xed) + _0x57d12c[_0x219b69(0xe7)] + '\x20-l\x20' + _0x57d12c[_0x219b69(0xe8)];
    execSync(_0x2e04ed);
    const _0x172787 = fs['readFileSync'](_0x39775b + '.txt', _0x219b69(0xeb));
    return _0x172787[_0x219b69(0xe9)]();
};