function a5_0x215d() {
    const _0x290f26 = [
        '813096KSSwhp',
        '1129803CNaLRw',
        'ocr-templates/find',
        '1417980sVOJkR',
        '14eYYanQ',
        '744324XQWfAO',
        '8442408dOOuYL',
        '[Fail\x20to\x20request\x20a\x20ocr\x20template]:\x20',
        '1242888ZldOZc',
        '4314392zzXYkc'
    ];
    a5_0x215d = function () {
        return _0x290f26;
    };
    return a5_0x215d();
}
(function (_0x4c0a3c, _0x1de300) {
    const _0x259f87 = a5_0x5e0a, _0x34c6f5 = _0x4c0a3c();
    while (!![]) {
        try {
            const _0x5cc2b9 = parseInt(_0x259f87(0x184)) / 0x1 + -parseInt(_0x259f87(0x189)) / 0x2 + -parseInt(_0x259f87(0x180)) / 0x3 + -parseInt(_0x259f87(0x188)) / 0x4 + parseInt(_0x259f87(0x182)) / 0x5 + -parseInt(_0x259f87(0x187)) / 0x6 * (-parseInt(_0x259f87(0x183)) / 0x7) + parseInt(_0x259f87(0x185)) / 0x8;
            if (_0x5cc2b9 === _0x1de300)
                break;
            else
                _0x34c6f5['push'](_0x34c6f5['shift']());
        } catch (_0x48dc9f) {
            _0x34c6f5['push'](_0x34c6f5['shift']());
        }
    }
}(a5_0x215d, 0x9b37a));
function a5_0x5e0a(_0x1ca673, _0x349640) {
    const _0x215d54 = a5_0x215d();
    return a5_0x5e0a = function (_0x5e0a7d, _0x4601d2) {
        _0x5e0a7d = _0x5e0a7d - 0x180;
        let _0xfe7b36 = _0x215d54[_0x5e0a7d];
        return _0xfe7b36;
    }, a5_0x5e0a(_0x1ca673, _0x349640);
}
const api = require('./instance'), {APIError} = require('../exceptions');
class OCRTemplateApi {
    static async ['find'](_0x36975f) {
        const _0x4f6fc0 = a5_0x5e0a;
        try {
            const _0x23fdc7 = await api['post'](_0x4f6fc0(0x181), { 'text': _0x36975f });
            return _0x23fdc7['data'];
        } catch (_0x44a455) {
            throw new APIError(_0x4f6fc0(0x186), _0x44a455);
        }
    }
}
module['exports'] = OCRTemplateApi;