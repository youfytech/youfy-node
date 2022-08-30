const a4_0x2cc172 = a4_0x3c04;
(function (_0x26c2ee, _0x2b1f41) {
    const _0x583477 = a4_0x3c04, _0x1735d3 = _0x26c2ee();
    while (!![]) {
        try {
            const _0x196ec8 = parseInt(_0x583477(0x1b6)) / 0x1 * (parseInt(_0x583477(0x1b8)) / 0x2) + -parseInt(_0x583477(0x1b0)) / 0x3 * (parseInt(_0x583477(0x1ba)) / 0x4) + parseInt(_0x583477(0x1b5)) / 0x5 + parseInt(_0x583477(0x1bb)) / 0x6 + -parseInt(_0x583477(0x1b2)) / 0x7 + -parseInt(_0x583477(0x1bd)) / 0x8 + parseInt(_0x583477(0x1b4)) / 0x9 * (parseInt(_0x583477(0x1b3)) / 0xa);
            if (_0x196ec8 === _0x2b1f41)
                break;
            else
                _0x1735d3['push'](_0x1735d3['shift']());
        } catch (_0x171eb5) {
            _0x1735d3['push'](_0x1735d3['shift']());
        }
    }
}(a4_0x3975, 0x8d23f));
function a4_0x3975() {
    const _0x489daa = [
        '70983QbOmVz',
        '4398970pmndLg',
        '148609XRHHpv',
        'sendEmail',
        '6fBkfpt',
        'exports',
        '3184bUQlUv',
        '676560JxUOmQ',
        'notification/email',
        '4827000JfMvTf',
        '3882wwUBhN',
        '[Fail\x20to\x20request\x20a\x20notification\x20by\x20email]:\x20',
        '6126778odhvOL',
        '2090yDhZTZ'
    ];
    a4_0x3975 = function () {
        return _0x489daa;
    };
    return a4_0x3975();
}
const api = require('./instance'), {APIError} = require('../exceptions');
class NotificationApi {
    static async [a4_0x2cc172(0x1b7)](_0x280831) {
        const _0x3c8c8d = a4_0x2cc172;
        try {
            const _0x8c6c3a = await api['post'](_0x3c8c8d(0x1bc), _0x280831);
            return _0x8c6c3a['data'];
        } catch (_0x47b43b) {
            throw new APIError(_0x3c8c8d(0x1b1), _0x47b43b);
        }
    }
}
function a4_0x3c04(_0x3b7dc0, _0x386810) {
    const _0x397567 = a4_0x3975();
    return a4_0x3c04 = function (_0x3c0471, _0x11ac6a) {
        _0x3c0471 = _0x3c0471 - 0x1b0;
        let _0x203a00 = _0x397567[_0x3c0471];
        return _0x203a00;
    }, a4_0x3c04(_0x3b7dc0, _0x386810);
}
module[a4_0x2cc172(0x1b9)] = NotificationApi;