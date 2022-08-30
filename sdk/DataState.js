const a58_0x3ae510 = a58_0x1dfe;
(function (_0x32b801, _0x1c884e) {
    const _0x2efff3 = a58_0x1dfe, _0x54e453 = _0x32b801();
    while (!![]) {
        try {
            const _0x3cb2fb = parseInt(_0x2efff3(0xcc)) / 0x1 * (parseInt(_0x2efff3(0xc3)) / 0x2) + parseInt(_0x2efff3(0xcb)) / 0x3 * (parseInt(_0x2efff3(0xca)) / 0x4) + parseInt(_0x2efff3(0xc5)) / 0x5 * (-parseInt(_0x2efff3(0xc6)) / 0x6) + parseInt(_0x2efff3(0xc8)) / 0x7 * (parseInt(_0x2efff3(0xbd)) / 0x8) + parseInt(_0x2efff3(0xbf)) / 0x9 + -parseInt(_0x2efff3(0xbb)) / 0xa * (-parseInt(_0x2efff3(0xba)) / 0xb) + -parseInt(_0x2efff3(0xc2)) / 0xc;
            if (_0x3cb2fb === _0x1c884e)
                break;
            else
                _0x54e453['push'](_0x54e453['shift']());
        } catch (_0x4704b1) {
            _0x54e453['push'](_0x54e453['shift']());
        }
    }
}(a58_0x5766, 0xe8477));
function a58_0x5766() {
    const _0x361335 = [
        '3492CPabKG',
        'state_dir',
        '14ELNfHj',
        'keep_state',
        '164BQIFAW',
        '82275hOOSsJ',
        '1739363YSrmTX',
        '__options',
        'get',
        '_getState',
        '_getStateFile',
        'assign',
        'stringify',
        'init',
        'path',
        'parse',
        'update',
        '_selfUpdate',
        '1089176DGMvul',
        '150ISVSzw',
        'tmpdir',
        '4458568TveKfP',
        'saveState',
        '1969488LLvGYM',
        '__name',
        'removeOldStates',
        '41240628qkMDLh',
        '2AZiCuY',
        'base_path',
        '11120UbQkFu'
    ];
    a58_0x5766 = function () {
        return _0x361335;
    };
    return a58_0x5766();
}
const os = require('os'), {resolve} = require('path'), {writeFileSync, existsSync, mkdirSync, rmSync, readFileSync} = require('fs'), defaultOptions = { 'keep_state': !![] };
class DataState {
    constructor(_0x525185, _0x533586 = {}, _0x1c148d) {
        const _0x3d4e0b = a58_0x1dfe;
        this[_0x3d4e0b(0xc0)] = _0x525185, this[_0x3d4e0b(0xcd)] = {
            ...defaultOptions,
            ..._0x1c148d
        }, this[_0x3d4e0b(0xc7)] = resolve(os[_0x3d4e0b(0xbc)](), 'yfy-job-states'), Object[_0x3d4e0b(0xd1)](this, _0x533586), this[_0x3d4e0b(0xb5)](_0x533586);
    }
    [a58_0x3ae510(0xd0)]() {
        const _0x175970 = a58_0x3ae510, _0x47d626 = this[_0x175970(0xc0)] + '.json', _0x49efa9 = resolve(this['state_dir'], _0x47d626);
        return {
            'base_path': this[_0x175970(0xc7)],
            'name': _0x47d626,
            'path': _0x49efa9
        };
    }
    [a58_0x3ae510(0xb5)](_0x6d2a56) {
        const _0x1a1ca0 = a58_0x3ae510, _0x51c099 = this[_0x1a1ca0(0xd0)]();
        !existsSync(_0x51c099['base_path']) && mkdirSync(_0x51c099[_0x1a1ca0(0xc4)], { 'recursive': !![] }), !this[_0x1a1ca0(0xcd)][_0x1a1ca0(0xc9)] && this['removeOldStates'](), !existsSync(_0x51c099['path']) ? this['saveState'](_0x6d2a56) : this['_selfUpdate']();
    }
    [a58_0x3ae510(0xc1)]() {
        const _0xb9c1c9 = a58_0x3ae510, _0xf1c197 = this[_0xb9c1c9(0xd0)]();
        rmSync(_0xf1c197[_0xb9c1c9(0xb6)], { 'force': !![] });
    }
    [a58_0x3ae510(0xcf)]() {
        const _0x53e6c0 = a58_0x3ae510, _0xb62f85 = this[_0x53e6c0(0xd0)]();
        if (existsSync(_0xb62f85[_0x53e6c0(0xb6)])) {
            const _0x2028b7 = readFileSync(_0xb62f85[_0x53e6c0(0xb6)]);
            return JSON[_0x53e6c0(0xb7)](_0x2028b7);
        }
        return {};
    }
    [a58_0x3ae510(0xb9)]() {
        const _0x4d70b6 = a58_0x3ae510;
        Object['assign'](this, this[_0x4d70b6(0xcf)]());
    }
    [a58_0x3ae510(0xbe)](_0x3251cd) {
        const _0x37bbf1 = a58_0x3ae510, _0x16e4fb = this['_getStateFile']();
        writeFileSync(_0x16e4fb[_0x37bbf1(0xb6)], JSON[_0x37bbf1(0xb4)](_0x3251cd)), this[_0x37bbf1(0xb9)]();
    }
    [a58_0x3ae510(0xce)](_0x4afe07, _0x5ee63b) {
        const _0x28b6bc = a58_0x3ae510, _0x4e9c13 = this[_0x28b6bc(0xcf)]();
        return _0x4e9c13[_0x4afe07] || _0x5ee63b;
    }
    ['set'](_0x332e62, _0x107805) {
        const _0x32bdef = a58_0x3ae510, _0x721909 = this[_0x32bdef(0xcf)]();
        _0x721909[_0x332e62] = _0x107805, this[_0x32bdef(0xbe)](_0x721909);
    }
    [a58_0x3ae510(0xb8)](_0x2af3ed) {
        const _0x52eb6d = a58_0x3ae510, _0x28f0c4 = this['_getState']();
        this[_0x52eb6d(0xbe)]({
            ..._0x28f0c4,
            ..._0x2af3ed
        });
    }
}
function a58_0x1dfe(_0x5a6501, _0x325bba) {
    const _0x5766da = a58_0x5766();
    return a58_0x1dfe = function (_0x1dfe81, _0x11a38f) {
        _0x1dfe81 = _0x1dfe81 - 0xb4;
        let _0x5a8a16 = _0x5766da[_0x1dfe81];
        return _0x5a8a16;
    }, a58_0x1dfe(_0x5a6501, _0x325bba);
}
module['exports'] = DataState;