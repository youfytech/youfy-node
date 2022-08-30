const a65_0x2d1e66 = a65_0x2da3;
function a65_0x4204() {
    const _0x3c680a = [
        'rules',
        'Fail\x20to\x20remove\x20tmp\x20dir',
        'info',
        '86188ZDpMdC',
        '9789stEznH',
        'yfy-ocr',
        'similarity',
        'config',
        '1103630kSEGCk',
        'OCR\x20Template\x20not\x20found.',
        'message',
        '371KpSCLA',
        'find',
        'length',
        '3ImOpcp',
        'muted',
        '\x27s\x20text...',
        'cleanup',
        '11dNRRmb',
        'file_attributes',
        '441390ryamKk',
        'init',
        '1104030hfbagh',
        'readPDF',
        '__cleanup',
        '6rIDtCP',
        '29DYmXBz',
        '8124sQtcjQ',
        '.\x20Similarity:\x20',
        'exports',
        '34040xUJTRa',
        '\x20from\x20',
        'company_id',
        'output_dir',
        'Finding\x20better\x20template\x20for\x20OCR...',
        '10044sXaPqp',
        'template',
        'Extracting\x20',
        '.\x20Amount\x20of\x20items:\x20',
        'por'
    ];
    a65_0x4204 = function () {
        return _0x3c680a;
    };
    return a65_0x4204();
}
(function (_0x14a133, _0x447da2) {
    const _0x1079fc = a65_0x2da3, _0x58197e = _0x14a133();
    while (!![]) {
        try {
            const _0x22e73d = -parseInt(_0x1079fc(0x1b0)) / 0x1 * (parseInt(_0x1079fc(0x1b1)) / 0x2) + parseInt(_0x1079fc(0x1a4)) / 0x3 * (-parseInt(_0x1079fc(0x199)) / 0x4) + -parseInt(_0x1079fc(0x19e)) / 0x5 * (parseInt(_0x1079fc(0x1af)) / 0x6) + -parseInt(_0x1079fc(0x1a1)) / 0x7 * (parseInt(_0x1079fc(0x1b4)) / 0x8) + parseInt(_0x1079fc(0x1ac)) / 0x9 + parseInt(_0x1079fc(0x1aa)) / 0xa * (-parseInt(_0x1079fc(0x1a8)) / 0xb) + -parseInt(_0x1079fc(0x191)) / 0xc * (-parseInt(_0x1079fc(0x19a)) / 0xd);
            if (_0x22e73d === _0x447da2)
                break;
            else
                _0x58197e['push'](_0x58197e['shift']());
        } catch (_0x28f654) {
            _0x58197e['push'](_0x58197e['shift']());
        }
    }
}(a65_0x4204, 0x1e146));
function a65_0x2da3(_0x252f86, _0x6a33ee) {
    const _0x4204a8 = a65_0x4204();
    return a65_0x2da3 = function (_0x2da3b3, _0x3f6805) {
        _0x2da3b3 = _0x2da3b3 - 0x18f;
        let _0x53d8a4 = _0x4204a8[_0x2da3b3];
        return _0x53d8a4;
    }, a65_0x2da3(_0x252f86, _0x6a33ee);
}
const os = require('os'), {resolve} = require('path'), convertPDF = require('../ocr/convertPDF'), cropImage = require('../ocr/cropImage'), readImage = require('../ocr/readImage'), readLargeImage = require('../ocr/readLargeImage'), OCRTemplateApi = require('../api/OCRTemplate'), {existsSync, mkdirSync, rmSync} = require('fs'), logger = require('../sdk/Logger'), {ValidationError} = require('../exceptions');
class OCR {
    [a65_0x2d1e66(0x1ab)](_0x22761e = {}) {
        const _0x5112e4 = a65_0x2d1e66, _0x4050e3 = {
                'cleanup': !![],
                ..._0x22761e
            };
        this[_0x5112e4(0x18f)] = resolve(os['tmpdir'](), _0x5112e4(0x19b)), _0x4050e3[_0x5112e4(0x1a7)] && this[_0x5112e4(0x1ae)](), !existsSync(this[_0x5112e4(0x18f)]) && mkdirSync(this[_0x5112e4(0x18f)], {
            'recursive': !![],
            'force': !![]
        });
    }
    async [a65_0x2d1e66(0x1ad)](_0x1bed36) {
        const _0x268d93 = a65_0x2d1e66;
        this[_0x268d93(0x1ab)]();
        const _0x4b5ee7 = this[_0x268d93(0x18f)], _0xa4e8a3 = await convertPDF(_0x1bed36, { 'output_dir': _0x4b5ee7 });
        return await this['readImage'](_0xa4e8a3, { 'cleanup': ![] });
    }
    async ['readImage'](_0xbfdcc3, _0x3ca29f = {}) {
        const _0x5be67a = a65_0x2d1e66;
        this[_0x5be67a(0x1ab)](_0x3ca29f);
        const _0x3e38ef = this['output_dir'], _0x6b3232 = await readLargeImage(_0xbfdcc3, {
                'lang': _0x5be67a(0x195),
                'output_dir': _0x3e38ef
            });
        logger[_0x5be67a(0x198)](_0x5be67a(0x190));
        const _0x38810e = await OCRTemplateApi[_0x5be67a(0x1a2)](_0x6b3232);
        if (!_0x38810e?.[_0x5be67a(0x192)])
            throw new ValidationError(_0x5be67a(0x19f));
        const {
                items: _0x2aaaa0,
                template: _0x21d2e8
            } = _0x38810e, {width: _0x2d3da5} = _0x21d2e8[_0x5be67a(0x1a9)] || { 'width': 0x0 };
        logger[_0x5be67a(0x1a5)]('Template\x20found:\x20' + _0x21d2e8['name'] + _0x5be67a(0x1b5) + _0x21d2e8[_0x5be67a(0x1b6)] + _0x5be67a(0x194) + _0x2aaaa0[_0x5be67a(0x1a3)] + _0x5be67a(0x1b2) + _0x21d2e8[_0x5be67a(0x19c)]);
        const _0x153d50 = { '__template': _0x21d2e8 };
        for (const _0x1f7fe8 of _0x2aaaa0) {
            logger[_0x5be67a(0x198)](_0x5be67a(0x193) + _0x1f7fe8['id'] + _0x5be67a(0x1a6));
            const _0x32b74d = _0x1f7fe8[_0x5be67a(0x19d)][_0x5be67a(0x196)] || [], _0x58b29f = await cropImage(_0x1f7fe8, _0xbfdcc3, {
                    'output_dir': _0x3e38ef,
                    'file_width': _0x2d3da5
                });
            if (_0x58b29f && existsSync(_0x58b29f)) {
                const _0x410087 = await readImage(_0x58b29f, {
                    'output_dir': _0x3e38ef,
                    'rules': _0x32b74d
                });
                _0x153d50[_0x1f7fe8['id']] = _0x410087;
            } else
                _0x153d50[_0x1f7fe8['id']] = '';
        }
        return this['__cleanup'](), _0x153d50;
    }
    [a65_0x2d1e66(0x1ae)]() {
        const _0x5a4922 = a65_0x2d1e66;
        try {
            existsSync(this[_0x5a4922(0x18f)]) && rmSync(this[_0x5a4922(0x18f)], {
                'recursive': !![],
                'force': !![]
            });
        } catch (_0x12c481) {
            console['warn'](_0x5a4922(0x197), _0x12c481[_0x5a4922(0x1a0)]);
        }
    }
}
module[a65_0x2d1e66(0x1b3)] = new OCR();