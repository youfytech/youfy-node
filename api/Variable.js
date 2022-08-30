function a8_0x4a86(_0x1201aa, _0x57d210) {
    const _0x3365da = a8_0x3365();
    return a8_0x4a86 = function (_0x4a86ba, _0x196af6) {
        _0x4a86ba = _0x4a86ba - 0x1c1;
        let _0x37d234 = _0x3365da[_0x4a86ba];
        return _0x37d234;
    }, a8_0x4a86(_0x1201aa, _0x57d210);
}
function a8_0x3365() {
    const _0x20afa0 = [
        '225483sPJthQ',
        '10836740KHeGSu',
        '16856iPaFme',
        '106443BpItWp',
        '337835drfoYD',
        '2340918ElHwog',
        '2GKZpGS',
        '4noxQeE',
        'all',
        '1462712bYqMOC',
        '444OEYKvg',
        'data',
        'exports'
    ];
    a8_0x3365 = function () {
        return _0x20afa0;
    };
    return a8_0x3365();
}
const a8_0x4c7065 = a8_0x4a86;
(function (_0x1f8f8a, _0x5e33a7) {
    const _0x44c507 = a8_0x4a86, _0x2a70a0 = _0x1f8f8a();
    while (!![]) {
        try {
            const _0x1896ee = -parseInt(_0x44c507(0x1c7)) / 0x1 + -parseInt(_0x44c507(0x1cd)) / 0x2 * (parseInt(_0x44c507(0x1ca)) / 0x3) + parseInt(_0x44c507(0x1c1)) / 0x4 * (-parseInt(_0x44c507(0x1cb)) / 0x5) + -parseInt(_0x44c507(0x1c4)) / 0x6 * (parseInt(_0x44c507(0x1c9)) / 0x7) + -parseInt(_0x44c507(0x1c3)) / 0x8 + -parseInt(_0x44c507(0x1cc)) / 0x9 + parseInt(_0x44c507(0x1c8)) / 0xa;
            if (_0x1896ee === _0x5e33a7)
                break;
            else
                _0x2a70a0['push'](_0x2a70a0['shift']());
        } catch (_0x3f06ca) {
            _0x2a70a0['push'](_0x2a70a0['shift']());
        }
    }
}(a8_0x3365, 0x20b7a));
const api = require('../index'), {APIError} = require('../../exceptions');
class Variable {
    static async [a8_0x4c7065(0x1c2)]() {
        const _0x5df542 = a8_0x4c7065;
        try {
            const _0x753527 = await api['get']('variables');
            return _0x753527[_0x5df542(0x1c5)];
        } catch (_0x1da915) {
            throw new APIError('[Fail\x20to\x20request\x20company\x20variables]:\x20', _0x1da915);
        }
    }
}
module[a8_0x4c7065(0x1c6)] = Variable;