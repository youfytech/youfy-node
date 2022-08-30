const a25_0x3ae0e1 = a25_0x23fd;
function a25_0x23fd(_0x1aa83f, _0x590e34) {
    const _0x1a2d4f = a25_0x1a2d();
    return a25_0x23fd = function (_0x23fd2d, _0x52e672) {
        _0x23fd2d = _0x23fd2d - 0x13d;
        let _0x17e82e = _0x1a2d4f[_0x23fd2d];
        return _0x17e82e;
    }, a25_0x23fd(_0x1aa83f, _0x590e34);
}
(function (_0xbe0692, _0x8f7c4c) {
    const _0x3562e6 = a25_0x23fd, _0x1c95ef = _0xbe0692();
    while (!![]) {
        try {
            const _0x30c1fc = -parseInt(_0x3562e6(0x148)) / 0x1 * (parseInt(_0x3562e6(0x14a)) / 0x2) + -parseInt(_0x3562e6(0x144)) / 0x3 + -parseInt(_0x3562e6(0x140)) / 0x4 * (-parseInt(_0x3562e6(0x141)) / 0x5) + -parseInt(_0x3562e6(0x14c)) / 0x6 * (parseInt(_0x3562e6(0x149)) / 0x7) + -parseInt(_0x3562e6(0x147)) / 0x8 * (-parseInt(_0x3562e6(0x13d)) / 0x9) + parseInt(_0x3562e6(0x13f)) / 0xa * (-parseInt(_0x3562e6(0x142)) / 0xb) + parseInt(_0x3562e6(0x14f)) / 0xc;
            if (_0x30c1fc === _0x8f7c4c)
                break;
            else
                _0x1c95ef['push'](_0x1c95ef['shift']());
        } catch (_0x3ebba0) {
            _0x1c95ef['push'](_0x1c95ef['shift']());
        }
    }
}(a25_0x1a2d, 0x499fb));
function a25_0x1a2d() {
    const _0x5be7b6 = [
        '241269nMIuqy',
        'transform',
        'name',
        '176sCAJgI',
        '1EiBFrF',
        '439103oIOmPH',
        '894022xJiwAm',
        'map',
        '6TorJdl',
        'fetch',
        'all',
        '13273332HDmWhp',
        '50319dDXrzu',
        'data',
        '35590RAEPDe',
        '208Xvccvc',
        '4860TGkSEd',
        '1199jQQtvn',
        'association'
    ];
    a25_0x1a2d = function () {
        return _0x5be7b6;
    };
    return a25_0x1a2d();
}
const DataSource = require('./DataSource'), DatabaseApi = require('../api/Database'), dot = require('dot-object');
class YoufyDBDataSource extends DataSource {
    async [a25_0x3ae0e1(0x14d)](_0x408f2c = {}) {
        const _0x34143b = a25_0x3ae0e1, _0x1dcad6 = await DatabaseApi(this[_0x34143b(0x13e)][_0x34143b(0x146)]), _0x2286e8 = await _0x1dcad6[_0x34143b(0x14e)](_0x408f2c);
        return _0x2286e8[_0x34143b(0x14b)](_0x314c0b => dot[_0x34143b(0x145)](this[_0x34143b(0x143)], _0x314c0b));
    }
}
module['exports'] = YoufyDBDataSource;