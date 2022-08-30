function a51_0x3c92() {
    const _0x3f4d40 = [
        'output_dir',
        '8580LjnUfj',
        '0,0,0,0',
        '3nqItvq',
        '826352oSrcXs',
        'abs',
        '18EjDEhG',
        'resize',
        '198885tytELw',
        'write',
        'width',
        'warn',
        'round',
        '38952UyMhaQ',
        'sleep',
        'exports',
        '2490Drocuq',
        '552XLoMFF',
        '338gYzpcg',
        '4LlkXtj',
        'read',
        '1061053bLXEyb',
        '4570XvXbrx',
        'crop',
        '32334uotUbD',
        'split'
    ];
    a51_0x3c92 = function () {
        return _0x3f4d40;
    };
    return a51_0x3c92();
}
const a51_0x4fa061 = a51_0x51aa;
(function (_0x4c95a0, _0x51e975) {
    const _0x20f531 = a51_0x51aa, _0x527865 = _0x4c95a0();
    while (!![]) {
        try {
            const _0x2319ed = -parseInt(_0x20f531(0x19b)) / 0x1 * (-parseInt(_0x20f531(0x196)) / 0x2) + parseInt(_0x20f531(0x1a0)) / 0x3 * (-parseInt(_0x20f531(0x191)) / 0x4) + -parseInt(_0x20f531(0x194)) / 0x5 * (-parseInt(_0x20f531(0x18f)) / 0x6) + parseInt(_0x20f531(0x193)) / 0x7 + parseInt(_0x20f531(0x19c)) / 0x8 * (-parseInt(_0x20f531(0x19e)) / 0x9) + parseInt(_0x20f531(0x18e)) / 0xa * (parseInt(_0x20f531(0x199)) / 0xb) + parseInt(_0x20f531(0x18b)) / 0xc * (-parseInt(_0x20f531(0x190)) / 0xd);
            if (_0x2319ed === _0x51e975)
                break;
            else
                _0x527865['push'](_0x527865['shift']());
        } catch (_0x335d25) {
            _0x527865['push'](_0x527865['shift']());
        }
    }
}(a51_0x3c92, 0x1d915));
const os = require('os'), {resolve} = require('path'), jimp = require('jimp'), {promisify} = require('util'), sizeOf = promisify(require('image-size')), apply_factor = (_0x47a9fe, _0x30d653) => Math[a51_0x4fa061(0x18a)](parseInt(_0x47a9fe) * _0x30d653);
function a51_0x51aa(_0xf5b563, _0xee0df4) {
    const _0x3c9200 = a51_0x3c92();
    return a51_0x51aa = function (_0x51aa6f, _0x3a09c4) {
        _0x51aa6f = _0x51aa6f - 0x187;
        let _0x288e46 = _0x3c9200[_0x51aa6f];
        return _0x288e46;
    }, a51_0x51aa(_0xf5b563, _0xee0df4);
}
module[a51_0x4fa061(0x18d)] = async function cropImage(_0x283751, _0x18735c, _0x821a91 = {}) {
    const _0x3e176c = a51_0x4fa061, _0xf3b2cd = {
            'output_dir': os['tmpdir'](),
            'file_width': 0x9af,
            ..._0x821a91
        }, _0x2958aa = resolve(_0xf3b2cd[_0x3e176c(0x198)], _0x283751['id'] + '.jpg'), _0x20ff54 = await sizeOf(_0x18735c) || {
            'width': 0x0,
            'height': 0x0
        }, _0x1304a3 = _0x20ff54[_0x3e176c(0x188)] / _0xf3b2cd['file_width'], _0x246f58 = _0x283751['payload'] || {}, _0x4c52a8 = _0x246f58['coords'] || _0x283751['coordinates'] || _0x3e176c(0x19a), _0x8c9dd9 = _0x4c52a8[_0x3e176c(0x197)](','), _0x4f0d82 = apply_factor(_0x8c9dd9[0x0], _0x1304a3), _0x12a787 = apply_factor(_0x8c9dd9[0x1], _0x1304a3), _0x2f8fa7 = apply_factor(_0x8c9dd9[0x2], _0x1304a3), _0x278ba0 = apply_factor(_0x8c9dd9[0x3], _0x1304a3), _0x4c845c = Math[_0x3e176c(0x19d)](_0x2f8fa7 - _0x4f0d82), _0x48eab8 = Math[_0x3e176c(0x19d)](_0x278ba0 - _0x12a787), _0x61dd7 = 0x1;
    try {
        const _0x1ef811 = await jimp[_0x3e176c(0x192)](_0x18735c);
        return await _0x1ef811[_0x3e176c(0x195)](_0x4f0d82, _0x12a787, _0x4c845c, _0x48eab8), await _0x1ef811[_0x3e176c(0x19f)](Math['round'](_0x4c845c * _0x61dd7), Math['round'](_0x48eab8 * _0x61dd7)), await _0x1ef811[_0x3e176c(0x187)](_0x2958aa), await timer[_0x3e176c(0x18c)](0x12c), _0x2958aa;
    } catch (_0x1e612c) {
        console[_0x3e176c(0x189)]('[CROP\x20ERROR]', _0x1e612c['message']);
    }
    return null;
};