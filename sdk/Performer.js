const a68_0x101cf7 = a68_0x512f;
function a68_0x410b() {
    const _0x3e4bba = [
        '447060hHmXsk',
        'initRetry',
        'fail',
        'exports',
        '18hKMnxB',
        '177536bycTrW',
        'DONE',
        'Work\x20object\x20must\x20be\x20a\x20instance\x20of\x20WorkObject',
        'workObjects\x20must\x20be\x20an\x20array',
        'error',
        '968mFItur',
        'opts',
        'status',
        '7690qVFfZI',
        'retries',
        '10EYcULB',
        '3740900qVLvaS',
        'name',
        '555204Jnvppr',
        '326470QjAvwT',
        'failed',
        '361194ImVJSr',
        'notDone',
        'BreakError',
        '1422XOPkEL',
        'done',
        'context',
        'forEach',
        '413dnLhjF',
        'object_retries',
        'init',
        'ValidationError',
        'run'
    ];
    a68_0x410b = function () {
        return _0x3e4bba;
    };
    return a68_0x410b();
}
function a68_0x512f(_0x902dab, _0x356611) {
    const _0x410b99 = a68_0x410b();
    return a68_0x512f = function (_0x512f71, _0x58199c) {
        _0x512f71 = _0x512f71 - 0x107;
        let _0x38e5e0 = _0x410b99[_0x512f71];
        return _0x38e5e0;
    }, a68_0x512f(_0x902dab, _0x356611);
}
(function (_0x563f43, _0x1b4183) {
    const _0xc384b0 = a68_0x512f, _0x27845c = _0x563f43();
    while (!![]) {
        try {
            const _0x2484b2 = parseInt(_0xc384b0(0x126)) / 0x1 + -parseInt(_0xc384b0(0x123)) / 0x2 * (parseInt(_0xc384b0(0x108)) / 0x3) + -parseInt(_0xc384b0(0x124)) / 0x4 + -parseInt(_0xc384b0(0x127)) / 0x5 * (parseInt(_0xc384b0(0x118)) / 0x6) + -parseInt(_0xc384b0(0x10f)) / 0x7 * (parseInt(_0xc384b0(0x119)) / 0x8) + -parseInt(_0xc384b0(0x10b)) / 0x9 * (parseInt(_0xc384b0(0x121)) / 0xa) + parseInt(_0xc384b0(0x11e)) / 0xb * (parseInt(_0xc384b0(0x114)) / 0xc);
            if (_0x2484b2 === _0x1b4183)
                break;
            else
                _0x27845c['push'](_0x27845c['shift']());
        } catch (_0x4b133c) {
            _0x27845c['push'](_0x27845c['shift']());
        }
    }
}(a68_0x410b, 0xa3815));
const retry = require('async-retry'), logger = require('./Logger'), WorkObject = require('./WorkObject'), EventHandler = require('./EventHandler'), defaultOptions = { 'retries': 0x2 };
class Performer extends EventHandler {
    constructor(_0x476f8c, _0x33a4ac = {}) {
        const _0x2226bb = a68_0x512f;
        super(), this[_0x2226bb(0x10d)] = _0x476f8c, this[_0x2226bb(0x11f)] = {
            ...defaultOptions,
            ..._0x33a4ac
        }, this[_0x2226bb(0x122)] = _0x476f8c['config']['get'](_0x2226bb(0x110), this[_0x2226bb(0x11f)][_0x2226bb(0x122)]);
    }
    async [a68_0x101cf7(0x113)](_0x5a2e60, _0x58a36f) {
        const _0x53f564 = a68_0x101cf7;
        if (!(_0x58a36f instanceof WorkObject)) {
            const _0x56642a = _0x53f564(0x11b);
            logger[_0x53f564(0x11d)](_0x56642a);
            throw new Error(_0x56642a);
        }
        if (_0x58a36f[_0x53f564(0x120)] === _0x53f564(0x11a))
            return;
        try {
            await _0x58a36f[_0x53f564(0x111)]();
            const _0x90b25 = async (_0x5604f3, _0x2fdbfc) => {
                    const _0x430776 = _0x53f564;
                    _0x2fdbfc && await _0x58a36f[_0x430776(0x115)](_0x2fdbfc);
                    try {
                        await _0x5a2e60(_0x58a36f, {
                            'bail': _0x5604f3,
                            'attempts': _0x2fdbfc
                        });
                    } catch (_0x244ef2) {
                        if (_0x244ef2['name'] === _0x430776(0x112)) {
                            _0x5604f3(_0x244ef2);
                            return;
                        }
                        throw _0x244ef2;
                    }
                }, _0x1c3619 = await retry(_0x90b25, {
                    'retries': this[_0x53f564(0x122)],
                    'onRetry': _0x57b412 => console[_0x53f564(0x11d)](_0x57b412)
                });
            return await _0x58a36f[_0x53f564(0x10c)](), _0x1c3619;
        } catch (_0x327051) {
            _0x327051[_0x53f564(0x125)] === 'ValidationError' ? await _0x58a36f[_0x53f564(0x109)](_0x327051) : await _0x58a36f[_0x53f564(0x107)](_0x327051);
            await this['dispatch'](_0x53f564(0x116), _0x327051);
            if (_0x327051[_0x53f564(0x125)] === _0x53f564(0x10a))
                throw _0x327051;
        }
    }
    async [a68_0x101cf7(0x10e)](_0x524c74, _0x2cd5ab) {
        const _0x2273d3 = a68_0x101cf7;
        if (!Array['isArray'](_0x2cd5ab))
            throw new Error(_0x2273d3(0x11c));
        for (const _0x1ab12a of _0x2cd5ab) {
            await this[_0x2273d3(0x113)](_0x524c74, _0x1ab12a);
        }
    }
}
module[a68_0x101cf7(0x117)] = Performer;