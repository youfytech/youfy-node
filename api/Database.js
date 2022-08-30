const a2_0x6e7858 = a2_0x5a7a;
function a2_0xd072() {
    const _0x49fca2 = [
        'post',
        '[Fail\x20to\x20request\x20to\x20remove\x20a\x20dataset]:\x20',
        '[Fail\x20to\x20request\x20db\x20',
        'datasets/',
        '2937UodEcP',
        '275568vJJCLk',
        '1413696YvWnTN',
        '1BRcNFX',
        'dbs/',
        '[Fail\x20to\x20request\x20all\x20datasets]:\x20',
        '[Fail\x20to\x20request\x20a\x20dataset]:\x20',
        '14dDFlQO',
        'data',
        '1664196efxEns',
        '859126scNvbl',
        '[Fail\x20to\x20request\x20to\x20create\x20datasets]:\x20',
        '17140hfTRoz',
        'datasets',
        'remove',
        '12164bAdxSz',
        '[Fail\x20to\x20request\x20to\x20remove\x20all\x20datasets]:\x20',
        'create',
        'update',
        'removeAll',
        '635JDcrxg',
        'data.',
        'get',
        'bookCreate',
        'delete',
        '3026808IZfQxc'
    ];
    a2_0xd072 = function () {
        return _0x49fca2;
    };
    return a2_0xd072();
}
(function (_0x213a83, _0x2c8539) {
    const _0x258158 = a2_0x5a7a, _0x12c538 = _0x213a83();
    while (!![]) {
        try {
            const _0x102b44 = parseInt(_0x258158(0x125)) / 0x1 * (-parseInt(_0x258158(0x12c)) / 0x2) + parseInt(_0x258158(0x123)) / 0x3 + parseInt(_0x258158(0x131)) / 0x4 * (parseInt(_0x258158(0x136)) / 0x5) + parseInt(_0x258158(0x12b)) / 0x6 * (parseInt(_0x258158(0x129)) / 0x7) + -parseInt(_0x258158(0x124)) / 0x8 + parseInt(_0x258158(0x11d)) / 0x9 + -parseInt(_0x258158(0x12e)) / 0xa * (parseInt(_0x258158(0x122)) / 0xb);
            if (_0x102b44 === _0x2c8539)
                break;
            else
                _0x12c538['push'](_0x12c538['shift']());
        } catch (_0x2ad3e8) {
            _0x12c538['push'](_0x12c538['shift']());
        }
    }
}(a2_0xd072, 0x4a82a));
const api = require('./instance'), {APIError} = require('../exceptions');
class Database {
    constructor(_0x484613) {
        this['db'] = _0x484613;
    }
    async ['all'](_0x5297ad = {}) {
        const _0x451a6e = a2_0x5a7a, {
                where: where = {},
                order: _0xc0871e,
                limit: _0x3f139e,
                offset: _0x494a97
            } = _0x5297ad, _0x1b3d5f = {};
        for (const _0x173bd2 in where) {
            _0x1b3d5f[_0x451a6e(0x137) + _0x173bd2] = where[_0x173bd2];
        }
        const _0x51ccd1 = { ..._0x1b3d5f };
        try {
            const _0x4d5a91 = await api[_0x451a6e(0x138)](_0x451a6e(0x121) + this['db']['id'] + '/all', {
                'params': {
                    'where': _0x51ccd1,
                    'order': _0xc0871e,
                    'limit': _0x3f139e,
                    'offset': _0x494a97
                }
            });
            return _0x4d5a91['data'];
        } catch (_0x1b3b91) {
            throw new APIError(_0x451a6e(0x127), _0x1b3b91);
        }
    }
    async ['find'](_0x331fdd) {
        const _0x36a977 = a2_0x5a7a;
        try {
            const _0x1b4a10 = await api[_0x36a977(0x138)](_0x36a977(0x121) + _0x331fdd);
            return _0x1b4a10[_0x36a977(0x12a)];
        } catch (_0x49ee3b) {
            throw new APIError(_0x36a977(0x128), _0x49ee3b);
        }
    }
    async [a2_0x6e7858(0x133)](_0xf21e71) {
        const _0x143026 = a2_0x6e7858;
        try {
            const _0x39f221 = await api[_0x143026(0x11e)](_0x143026(0x12f), {
                'data': _0xf21e71,
                'db_id': this['db']['id']
            });
            return _0x39f221[_0x143026(0x12a)];
        } catch (_0x171064) {
            throw new APIError('[Fail\x20to\x20request\x20to\x20create\x20a\x20dataset]:\x20', _0x171064);
        }
    }
    async [a2_0x6e7858(0x139)](_0x381c63 = []) {
        const _0x47d93c = a2_0x6e7858;
        try {
            const _0x35989d = _0x381c63['map'](_0x5acad2 => {
                    return {
                        'db_id': this['db']['id'],
                        'data': _0x5acad2
                    };
                }), _0x133f59 = await api[_0x47d93c(0x11e)](_0x47d93c(0x12f), _0x35989d);
            return _0x133f59[_0x47d93c(0x12a)];
        } catch (_0x149694) {
            throw new APIError(_0x47d93c(0x12d), _0x149694);
        }
    }
    async [a2_0x6e7858(0x134)](_0x48eacc, _0xe03324) {
        const _0xe1582b = a2_0x6e7858;
        try {
            const _0x2d1e5b = await api['put']('datasets/' + _0x48eacc, _0xe03324);
            return _0x2d1e5b[_0xe1582b(0x12a)];
        } catch (_0x5d97eb) {
            throw new APIError('[Fail\x20to\x20request\x20to\x20update\x20a\x20dataset]:\x20', _0x5d97eb);
        }
    }
    async [a2_0x6e7858(0x130)](_0x4d263) {
        const _0x907504 = a2_0x6e7858;
        try {
            const _0x2b428e = await api[_0x907504(0x13a)](_0x907504(0x121) + _0x4d263);
            return _0x2b428e['data'];
        } catch (_0x22221a) {
            throw new APIError(_0x907504(0x11f), _0x22221a);
        }
    }
    async [a2_0x6e7858(0x135)]() {
        const _0x3b1c73 = a2_0x6e7858;
        try {
            const _0x846941 = await api[_0x3b1c73(0x13a)](_0x3b1c73(0x121) + this['db']['id'] + '/all');
            return _0x846941[_0x3b1c73(0x12a)];
        } catch (_0x426938) {
            throw new APIError(_0x3b1c73(0x132), _0x426938);
        }
    }
}
function a2_0x5a7a(_0x23eb18, _0x4a38a0) {
    const _0xd072d5 = a2_0xd072();
    return a2_0x5a7a = function (_0x5a7a23, _0x1c5289) {
        _0x5a7a23 = _0x5a7a23 - 0x11d;
        let _0x35081a = _0xd072d5[_0x5a7a23];
        return _0x35081a;
    }, a2_0x5a7a(_0x23eb18, _0x4a38a0);
}
module['exports'] = async (_0x1dad95, _0x1aadf8 = {}) => {
    const _0x321abd = a2_0x6e7858;
    try {
        const _0x488da9 = await api[_0x321abd(0x138)](_0x321abd(0x126) + _0x1dad95), _0x55656d = _0x488da9['data'] || {};
        return new Database(_0x55656d, { ..._0x1aadf8 });
    } catch (_0x20fb99) {
        throw new APIError(_0x321abd(0x120) + _0x1dad95 + ']:', _0x20fb99);
    }
};