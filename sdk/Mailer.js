const a62_0x408e12 = a62_0x5f5e;
(function (_0x2842a9, _0x1288c2) {
    const _0x336c69 = a62_0x5f5e, _0x4d314a = _0x2842a9();
    while (!![]) {
        try {
            const _0x4272cd = -parseInt(_0x336c69(0x1fc)) / 0x1 + parseInt(_0x336c69(0x208)) / 0x2 + -parseInt(_0x336c69(0x204)) / 0x3 * (-parseInt(_0x336c69(0x209)) / 0x4) + -parseInt(_0x336c69(0x206)) / 0x5 * (parseInt(_0x336c69(0x205)) / 0x6) + -parseInt(_0x336c69(0x20a)) / 0x7 * (parseInt(_0x336c69(0x202)) / 0x8) + -parseInt(_0x336c69(0x1f6)) / 0x9 * (parseInt(_0x336c69(0x1fa)) / 0xa) + -parseInt(_0x336c69(0x1f4)) / 0xb * (-parseInt(_0x336c69(0x1ff)) / 0xc);
            if (_0x4272cd === _0x1288c2)
                break;
            else
                _0x4d314a['push'](_0x4d314a['shift']());
        } catch (_0x287745) {
            _0x4d314a['push'](_0x4d314a['shift']());
        }
    }
}(a62_0x124e, 0x38932));
function a62_0x124e() {
    const _0x2fa9e8 = [
        'exports',
        'email',
        '12xSLsRw',
        'payload',
        'settings',
        '1304VdPNFN',
        'getTemplateData',
        '3RqEIjE',
        '677202OQiaiF',
        '5qUCbjx',
        'send',
        '15318EHThzx',
        '1660852OIJAzT',
        '16639Yujhyg',
        'html',
        'user',
        'compile',
        'get',
        '9604738RAdeaj',
        'push',
        '1584xIDJiu',
        'getByName',
        'attachments',
        'addAttachment',
        '25850LHswwp',
        'auth',
        '109022myKnaw'
    ];
    a62_0x124e = function () {
        return _0x2fa9e8;
    };
    return a62_0x124e();
}
const nodemailer = require('nodemailer'), Handlebars = require('handlebars'), SettingsApi = require('../api/Settings'), TemplateApi = require('../api/Template');
function a62_0x5f5e(_0x56b29c, _0x54f185) {
    const _0x124e60 = a62_0x124e();
    return a62_0x5f5e = function (_0x5f5e0d, _0x31c781) {
        _0x5f5e0d = _0x5f5e0d - 0x1f1;
        let _0x511076 = _0x124e60[_0x5f5e0d];
        return _0x511076;
    }, a62_0x5f5e(_0x56b29c, _0x54f185);
}
class Mailer {
    constructor(_0x49e2db) {
        const _0x875d6c = a62_0x5f5e;
        this[_0x875d6c(0x201)] = _0x49e2db, this[_0x875d6c(0x20b)] = '', this[_0x875d6c(0x1f8)] = [];
    }
    async [a62_0x408e12(0x203)](_0x3fbebb) {
        const _0x234d90 = a62_0x408e12, _0xf4b2b9 = await TemplateApi[_0x234d90(0x1f7)](_0x3fbebb);
        if (_0xf4b2b9) {
            const _0x173f33 = _0xf4b2b9[_0x234d90(0x200)] || {};
            return _0x173f33[_0x234d90(0x20b)];
        }
        return null;
    }
    async ['addTemplate'](_0x2c6c16, _0x5045d7) {
        const _0x5123c5 = a62_0x408e12, _0x109269 = await this['getTemplateData'](_0x2c6c16), _0x3789a8 = _0x109269 ? Handlebars[_0x5123c5(0x1f2)](_0x109269) : null;
        this['html'] = _0x3789a8(_0x5045d7);
    }
    [a62_0x408e12(0x1f9)](_0xd784f1) {
        const _0x175f4a = a62_0x408e12;
        this[_0x175f4a(0x1f8)][_0x175f4a(0x1f5)](_0xd784f1);
    }
    async [a62_0x408e12(0x207)](_0x145992) {
        const _0x44f898 = a62_0x408e12, _0x2fdb81 = this[_0x44f898(0x201)] || await SettingsApi[_0x44f898(0x1f3)](_0x44f898(0x1fe)), _0x4df197 = nodemailer['createTransport'](_0x2fdb81), _0xc3d60 = [
                ...this[_0x44f898(0x1f8)],
                ..._0x145992[_0x44f898(0x1f8)] || []
            ], _0x2059fe = {
                'from': _0x2fdb81[_0x44f898(0x1fb)][_0x44f898(0x1f1)],
                ..._0x145992,
                'html': this['html'] + (_0x145992[_0x44f898(0x20b)] || ''),
                'attachments': _0xc3d60
            };
        return await _0x4df197['sendMail'](_0x2059fe);
    }
}
module[a62_0x408e12(0x1fd)] = Mailer;