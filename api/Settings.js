const a6_0x2d84b6 = a6_0x604b;
function a6_0x8233() {
    const _0x596458 = [
        'get',
        '6406820QtrSsU',
        '357WEYLfF',
        '324tdBOiu',
        '12792714xxMGan',
        '4385155LhuOdA',
        'exports',
        '1XSCSfA',
        '\x20setting]:\x20',
        '87510wPMLcd',
        '515157juPWst',
        'data',
        '12PdHxgG',
        '279592dgZAAz',
        '2285918kJKBqm'
    ];
    a6_0x8233 = function () {
        return _0x596458;
    };
    return a6_0x8233();
}
(function (_0xd4231d, _0x1b1363) {
    const _0x275e7e = a6_0x604b, _0x5a2112 = _0xd4231d();
    while (!![]) {
        try {
            const _0x1a3da4 = -parseInt(_0x275e7e(0x80)) / 0x1 * (parseInt(_0x275e7e(0x87)) / 0x2) + -parseInt(_0x275e7e(0x83)) / 0x3 * (parseInt(_0x275e7e(0x85)) / 0x4) + parseInt(_0x275e7e(0x7e)) / 0x5 + -parseInt(_0x275e7e(0x82)) / 0x6 * (-parseInt(_0x275e7e(0x8a)) / 0x7) + -parseInt(_0x275e7e(0x86)) / 0x8 * (-parseInt(_0x275e7e(0x8b)) / 0x9) + parseInt(_0x275e7e(0x89)) / 0xa + -parseInt(_0x275e7e(0x7d)) / 0xb;
            if (_0x1a3da4 === _0x1b1363)
                break;
            else
                _0x5a2112['push'](_0x5a2112['shift']());
        } catch (_0x4b57ec) {
            _0x5a2112['push'](_0x5a2112['shift']());
        }
    }
}(a6_0x8233, 0xaa8fe));
const api = require('./instance'), {APIError} = require('../exceptions');
function a6_0x604b(_0x51936f, _0x18a334) {
    const _0x823354 = a6_0x8233();
    return a6_0x604b = function (_0x604be5, _0x5669d4) {
        _0x604be5 = _0x604be5 - 0x7d;
        let _0x550d33 = _0x823354[_0x604be5];
        return _0x550d33;
    }, a6_0x604b(_0x51936f, _0x18a334);
}
class Settings {
    static async ['get'](_0x194305) {
        const _0x5df8e2 = a6_0x604b;
        try {
            const _0x3c50c5 = await api[_0x5df8e2(0x88)]('settings/' + _0x194305), _0x17ac9d = _0x3c50c5[_0x5df8e2(0x84)] || {};
            return _0x17ac9d['value'] || {};
        } catch (_0x152ee3) {
            throw new APIError('[Fail\x20to\x20request\x20' + _0x194305 + _0x5df8e2(0x81), _0x152ee3);
        }
    }
}
module[a6_0x2d84b6(0x7f)] = Settings;