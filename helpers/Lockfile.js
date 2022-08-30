function a43_0x23ce() {
    const _0x46d8f8 = [
        'youfy.lock',
        'botId',
        '894kWceTW',
        '333368xipvxT',
        'rm\x20-f\x20',
        '115202MiMEDX',
        'remove',
        '6110630FUMTyx',
        'resolve',
        'exports',
        '4771540yyxMYM',
        '156rqyFpt',
        'getPath',
        'create',
        'removeAll',
        'toUTCString',
        '44OWtzYj',
        '2212xmsswp',
        '7182918yhIUFQ',
        '14972240QPVbwX',
        '11FZnnyy',
        'tmpdir'
    ];
    a43_0x23ce = function () {
        return _0x46d8f8;
    };
    return a43_0x23ce();
}
const a43_0x580e67 = a43_0x1b11;
(function (_0x3456e6, _0x59a297) {
    const _0x47c809 = a43_0x1b11, _0x2ea8a3 = _0x3456e6();
    while (!![]) {
        try {
            const _0xa6e34b = parseInt(_0x47c809(0x1a7)) / 0x1 * (parseInt(_0x47c809(0x1ae)) / 0x2) + parseInt(_0x47c809(0x1ab)) / 0x3 * (-parseInt(_0x47c809(0x1a4)) / 0x4) + -parseInt(_0x47c809(0x1b0)) / 0x5 + parseInt(_0x47c809(0x19e)) / 0x6 * (-parseInt(_0x47c809(0x1ac)) / 0x7) + parseInt(_0x47c809(0x1a6)) / 0x8 + -parseInt(_0x47c809(0x1a5)) / 0x9 + -parseInt(_0x47c809(0x1b3)) / 0xa * (-parseInt(_0x47c809(0x1a3)) / 0xb);
            if (_0xa6e34b === _0x59a297)
                break;
            else
                _0x2ea8a3['push'](_0x2ea8a3['shift']());
        } catch (_0x28b885) {
            _0x2ea8a3['push'](_0x2ea8a3['shift']());
        }
    }
}(a43_0x23ce, 0xf1d2f));
const os = require('os'), path = require('path'), {existsSync, writeFileSync, unlinkSync} = require('fs'), BASE_PATH = os[a43_0x580e67(0x1a8)](), EXTENSION = a43_0x580e67(0x1a9);
function a43_0x1b11(_0x492bca, _0x427d0b) {
    const _0x23cef4 = a43_0x23ce();
    return a43_0x1b11 = function (_0x1b11c3, _0x171178) {
        _0x1b11c3 = _0x1b11c3 - 0x19e;
        let _0xb32b63 = _0x23cef4[_0x1b11c3];
        return _0xb32b63;
    }, a43_0x1b11(_0x492bca, _0x427d0b);
}
class Lockfile {
    constructor(_0x5da8e2) {
        const _0x1c8a16 = a43_0x580e67;
        this[_0x1c8a16(0x1aa)] = _0x5da8e2;
    }
    ['has']() {
        const _0x213c33 = a43_0x580e67, _0x4c89d5 = this[_0x213c33(0x19f)]();
        return existsSync(_0x4c89d5);
    }
    [a43_0x580e67(0x1a0)]() {
        const _0x1d004d = a43_0x580e67, _0x9107bc = this['getPath']();
        writeFileSync(_0x9107bc, new Date()[_0x1d004d(0x1a2)]());
    }
    [a43_0x580e67(0x19f)]() {
        const _0x4e5b60 = a43_0x580e67;
        return path[_0x4e5b60(0x1b1)](BASE_PATH, this['botId'] + '.' + EXTENSION);
    }
    [a43_0x580e67(0x1af)]() {
        const _0x395f2d = a43_0x580e67, _0x379ed3 = this[_0x395f2d(0x19f)]();
        existsSync(_0x379ed3) && unlinkSync(_0x379ed3);
    }
    [a43_0x580e67(0x1a1)]() {
        const _0x5f5d65 = a43_0x580e67;
        execSync(_0x5f5d65(0x1ad) + path[_0x5f5d65(0x1b1)](BASE_PATH) + '/*.' + EXTENSION);
    }
}
module[a43_0x580e67(0x1b2)] = Lockfile;