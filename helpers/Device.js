const a41_0x50665a = a41_0x4b13;
function a41_0x31d7() {
    const _0x1eaea9 = [
        '4WOXFfz',
        'getName',
        '12osODvE',
        '4812678AFOnHb',
        '139768zckBLW',
        'getId',
        '14391560lBAKxr',
        '6CSSNjQ',
        '533099LsVJhG',
        '29084EdFzsQ',
        '4153512DrOdDd',
        '1962395sCWlTO',
        'hostname'
    ];
    a41_0x31d7 = function () {
        return _0x1eaea9;
    };
    return a41_0x31d7();
}
function a41_0x4b13(_0x2d2500, _0x27304e) {
    const _0x31d736 = a41_0x31d7();
    return a41_0x4b13 = function (_0x4b13ba, _0x24d500) {
        _0x4b13ba = _0x4b13ba - 0xb8;
        let _0x37c285 = _0x31d736[_0x4b13ba];
        return _0x37c285;
    }, a41_0x4b13(_0x2d2500, _0x27304e);
}
(function (_0xef4222, _0x24741a) {
    const _0x5397ee = a41_0x4b13, _0x5cc390 = _0xef4222();
    while (!![]) {
        try {
            const _0x5922fa = parseInt(_0x5397ee(0xc4)) / 0x1 * (parseInt(_0x5397ee(0xbb)) / 0x2) + -parseInt(_0x5397ee(0xbd)) / 0x3 * (-parseInt(_0x5397ee(0xbf)) / 0x4) + parseInt(_0x5397ee(0xb9)) / 0x5 + parseInt(_0x5397ee(0xc2)) / 0x6 * (parseInt(_0x5397ee(0xc3)) / 0x7) + parseInt(_0x5397ee(0xb8)) / 0x8 + parseInt(_0x5397ee(0xbe)) / 0x9 + -parseInt(_0x5397ee(0xc1)) / 0xa;
            if (_0x5922fa === _0x24741a)
                break;
            else
                _0x5cc390['push'](_0x5cc390['shift']());
        } catch (_0x3441b5) {
            _0x5cc390['push'](_0x5cc390['shift']());
        }
    }
}(a41_0x31d7, 0x44b03));
const {machineIdSync} = require('node-machine-id'), os = require('os');
class Device {
    static [a41_0x50665a(0xc0)]() {
        const _0x20654f = a41_0x50665a, _0x3602f7 = machineIdSync(), _0x10500b = _0x3602f7 + '-' + this[_0x20654f(0xbc)]();
        return !!process['env']['YOUFY_AWS'] ? _0x10500b : _0x3602f7;
    }
    static [a41_0x50665a(0xbc)]() {
        const _0xce9a6d = a41_0x50665a;
        return os[_0xce9a6d(0xba)]();
    }
}
module['exports'] = Device;