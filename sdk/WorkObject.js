const a70_0x7e17b7 = a70_0x2fb7;
(function (_0x64069c, _0x5cace5) {
    const _0x11be9a = a70_0x2fb7, _0x21414c = _0x64069c();
    while (!![]) {
        try {
            const _0x5810cc = -parseInt(_0x11be9a(0xa8)) / 0x1 * (-parseInt(_0x11be9a(0xb2)) / 0x2) + parseInt(_0x11be9a(0xac)) / 0x3 * (parseInt(_0x11be9a(0xb7)) / 0x4) + parseInt(_0x11be9a(0xcc)) / 0x5 + parseInt(_0x11be9a(0xc3)) / 0x6 * (parseInt(_0x11be9a(0xab)) / 0x7) + -parseInt(_0x11be9a(0xb8)) / 0x8 * (parseInt(_0x11be9a(0xca)) / 0x9) + -parseInt(_0x11be9a(0xa3)) / 0xa * (parseInt(_0x11be9a(0xa7)) / 0xb) + -parseInt(_0x11be9a(0xc2)) / 0xc * (parseInt(_0x11be9a(0xb3)) / 0xd);
            if (_0x5810cc === _0x5cace5)
                break;
            else
                _0x21414c['push'](_0x21414c['shift']());
        } catch (_0x4e46df) {
            _0x21414c['push'](_0x21414c['shift']());
        }
    }
}(a70_0x53b4, 0x2d524));
function a70_0x2fb7(_0x3c4820, _0x5d973d) {
    const _0x53b4d6 = a70_0x53b4();
    return a70_0x2fb7 = function (_0x2fb779, _0x3d47ac) {
        _0x2fb779 = _0x2fb779 - 0xa2;
        let _0x2c5d4d = _0x53b4d6[_0x2fb779];
        return _0x2c5d4d;
    }, a70_0x2fb7(_0x3c4820, _0x5d973d);
}
const WorkObjectApi = require('../api/WorkObject'), ErrorHelper = require('../helpers/Error'), logger = require('../sdk/Logger');
class WorkObject {
    constructor(_0xae0dd3) {
        const _0x4b7cc7 = a70_0x2fb7;
        this[_0x4b7cc7(0xc6)] = _0x4b7cc7(0xc5), Object[_0x4b7cc7(0xb9)](this, _0xae0dd3), this[_0x4b7cc7(0xa2)] = {};
    }
    [a70_0x7e17b7(0xaa)](_0x176fd7, _0x1e0584) {
        const _0x1b998c = a70_0x7e17b7;
        return this[_0x1b998c(0xb1)][_0x176fd7] || _0x1e0584;
    }
    [a70_0x7e17b7(0xbb)](_0x3fba45, _0x53c1c9) {
        const _0xdaa3af = a70_0x7e17b7;
        this[_0xdaa3af(0xb1)][_0x3fba45] = _0x53c1c9;
    }
    async [a70_0x7e17b7(0xba)](_0x4a0392) {
        const _0x101d77 = a70_0x7e17b7;
        Object['assign'](this[_0x101d77(0xb1)], _0x4a0392), await this['save']();
    }
    async [a70_0x7e17b7(0xc8)]() {
        const _0x3b1a8f = a70_0x7e17b7, _0x524268 = await WorkObjectApi[_0x3b1a8f(0xc8)](this['id']);
        Object['assign'](this, _0x524268), await this[_0x3b1a8f(0xc4)]('init');
    }
    async [a70_0x7e17b7(0xae)](_0x56da3e) {
        const _0x29f851 = a70_0x7e17b7;
        this[_0x29f851(0xa5)] = _0x56da3e, await this[_0x29f851(0xcb)](), await this['_dispatch'](_0x29f851(0xb0));
    }
    async ['done']() {
        const _0x2ebbf8 = a70_0x7e17b7, _0x582ed4 = await WorkObjectApi[_0x2ebbf8(0xa6)](this['id'], { 'payload': this[_0x2ebbf8(0xb1)] });
        Object[_0x2ebbf8(0xb9)](this, _0x582ed4), await this[_0x2ebbf8(0xc4)](_0x2ebbf8(0xa6), _0x582ed4), await this[_0x2ebbf8(0xc4)](_0x2ebbf8(0xbc));
    }
    async [a70_0x7e17b7(0xbe)](_0x3503af) {
        const _0x4a9310 = a70_0x7e17b7;
        logger['warn'](_0x3503af);
        try {
            const _0x7970e0 = await WorkObjectApi['notDone'](this['id'], { 'error': ErrorHelper[_0x4a9310(0xbf)](_0x3503af || new Error(_0x4a9310(0xad))) });
            return Object['assign'](this, _0x7970e0), await this[_0x4a9310(0xc4)](_0x4a9310(0xc7), _0x3503af), await this[_0x4a9310(0xc4)](_0x4a9310(0xbc)), _0x7970e0;
        } catch (_0x231324) {
            logger[_0x4a9310(0xa4)](_0x231324);
            throw _0x231324;
        }
    }
    async [a70_0x7e17b7(0xc0)](_0x224213) {
        const _0x1fe1ff = a70_0x7e17b7;
        logger[_0x1fe1ff(0xbd)](_0x224213);
        try {
            const _0x563841 = await WorkObjectApi[_0x1fe1ff(0xc0)](this['id'], { 'error': ErrorHelper['parse'](_0x224213 || new Error(_0x1fe1ff(0xad))) });
            return Object[_0x1fe1ff(0xb9)](this, _0x563841), await this['_dispatch'](_0x1fe1ff(0xc1), _0x224213), await this[_0x1fe1ff(0xc4)](_0x1fe1ff(0xbc)), _0x563841;
        } catch (_0x2fa8fb) {
            logger[_0x1fe1ff(0xbd)](_0x2fa8fb);
            throw _0x2fa8fb;
        }
    }
    async [a70_0x7e17b7(0xcb)]() {
        const _0x4db6ed = a70_0x7e17b7, _0x1c6697 = await WorkObjectApi[_0x4db6ed(0xba)](this['id'], {
                'payload': this[_0x4db6ed(0xb1)],
                'attempts': this[_0x4db6ed(0xa5)]
            });
        Object[_0x4db6ed(0xb9)](this, _0x1c6697), await this[_0x4db6ed(0xc4)](_0x4db6ed(0xcb));
    }
    async [a70_0x7e17b7(0xb4)]() {
        const _0x3c192f = a70_0x7e17b7;
        await WorkObjectApi[_0x3c192f(0xb6)](this['id']), await this[_0x3c192f(0xc4)](_0x3c192f(0xb4));
    }
    async ['on'](_0x3b3646, _0x53f59d) {
        const _0x34b361 = a70_0x7e17b7;
        this[_0x34b361(0xa2)][_0x3b3646] = _0x53f59d;
    }
    async [a70_0x7e17b7(0xc4)](_0x34a151, _0xfdf9cf) {
        const _0x235b80 = a70_0x7e17b7;
        try {
            typeof this[_0x235b80(0xa2)][_0x34a151] === _0x235b80(0xb5) && await this[_0x235b80(0xa2)][_0x34a151](_0xfdf9cf);
        } catch (_0x12f291) {
            logger['error'](_0x235b80(0xa9) + _0x34a151 + _0x235b80(0xaf), _0x12f291);
        }
    }
}
module[a70_0x7e17b7(0xc9)] = WorkObject;
function a70_0x53b4() {
    const _0x38d3c9 = [
        '9459autjmZ',
        'save',
        '203805GmeDed',
        'events',
        '102850Zwbqyk',
        'warn',
        'attempts',
        'done',
        '77FDXCNw',
        '65701shXZKy',
        '[Error\x20to\x20dispatch\x20work\x20object\x20\x22',
        'get',
        '7JEUulr',
        '9nfPbTy',
        'Desconhecido!',
        'initRetry',
        '\x22\x20event]',
        'retry',
        'payload',
        '2HtUpeL',
        '1183GLRbNO',
        'destroy',
        'function',
        'delete',
        '375244PLjPEV',
        '960DcJWKY',
        'assign',
        'update',
        'set',
        'finish',
        'error',
        'notDone',
        'parse',
        'failed',
        'fail',
        '47580CzssBx',
        '2140026ZimxOB',
        '_dispatch',
        'PENDING',
        'status',
        'not_done',
        'init',
        'exports'
    ];
    a70_0x53b4 = function () {
        return _0x38d3c9;
    };
    return a70_0x53b4();
}