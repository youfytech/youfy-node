function a50_0x59e5(_0x366f84, _0x266f42) {
    const _0x204283 = a50_0x2042();
    return a50_0x59e5 = function (_0x59e538, _0x26a97d) {
        _0x59e538 = _0x59e538 - 0x102;
        let _0xba1074 = _0x204283[_0x59e538];
        return _0xba1074;
    }, a50_0x59e5(_0x366f84, _0x266f42);
}
function a50_0x2042() {
    const _0x24c650 = [
        'replace',
        '449930JANEPh',
        '14856083KoyJPd',
        'output_dir',
        'platform',
        '940233WHYgGO',
        '\x20convert\x20-quality\x20100\x20-density\x20300\x20-resize\x20900x\x20-background\x20white\x20-alpha\x20remove\x20-trim\x20+repage\x20',
        'Conveting\x20pdf\x20to\x20image...',
        'muted',
        '39978VWXjKO',
        '.jpg',
        '433221JMvXhA',
        'magick',
        '3727840ayOHiG',
        '315rUArjm',
        '115305WyRgIg',
        'page_number',
        '9bAemeV',
        'exports',
        'info',
        '104PubSiM',
        '14TVeUbw'
    ];
    a50_0x2042 = function () {
        return _0x24c650;
    };
    return a50_0x2042();
}
const a50_0x41a5ba = a50_0x59e5;
(function (_0x51cd80, _0x5606ca) {
    const _0x2c31d1 = a50_0x59e5, _0x3954ec = _0x51cd80();
    while (!![]) {
        try {
            const _0x42076a = -parseInt(_0x2c31d1(0x10f)) / 0x1 + parseInt(_0x2c31d1(0x109)) / 0x2 * (-parseInt(_0x2c31d1(0x115)) / 0x3) + parseInt(_0x2c31d1(0x108)) / 0x4 * (parseInt(_0x2c31d1(0x103)) / 0x5) + parseInt(_0x2c31d1(0x113)) / 0x6 * (parseInt(_0x2c31d1(0x102)) / 0x7) + parseInt(_0x2c31d1(0x117)) / 0x8 * (parseInt(_0x2c31d1(0x105)) / 0x9) + -parseInt(_0x2c31d1(0x10b)) / 0xa + parseInt(_0x2c31d1(0x10c)) / 0xb;
            if (_0x42076a === _0x5606ca)
                break;
            else
                _0x3954ec['push'](_0x3954ec['shift']());
        } catch (_0x4d3dbf) {
            _0x3954ec['push'](_0x3954ec['shift']());
        }
    }
}(a50_0x2042, 0xafc07));
const {resolve, basename, extname} = require('path'), {execSync} = require('child_process'), os = require('os'), logger = require('../sdk/Logger');
module[a50_0x41a5ba(0x106)] = async function convertPDF(_0x9d950f, _0x307fb2 = {}) {
    const _0x1ff203 = a50_0x41a5ba;
    logger[_0x1ff203(0x107)](_0x1ff203(0x111));
    const _0xfc1b5b = {
        'output_dir': os['tmpdir'](),
        'page_number': 0x1,
        ..._0x307fb2
    };
    logger[_0x1ff203(0x112)](_0x1ff203(0x10d), _0xfc1b5b[_0x1ff203(0x10d)]);
    const _0x3762ae = resolve(_0xfc1b5b[_0x1ff203(0x10d)], basename(_0x9d950f)[_0x1ff203(0x10a)](extname(_0x9d950f), _0x1ff203(0x114))), _0x45aa8d = _0x307fb2[_0x1ff203(0x104)] > 0x0 ? _0x307fb2['page_number'] - 0x1 : 0x0, _0x6a9776 = process[_0x1ff203(0x10e)] === 'win32' ? _0x1ff203(0x116) : '';
    return execSync(_0x6a9776 + _0x1ff203(0x110) + _0x9d950f + '[' + _0x45aa8d + ']\x20' + _0x3762ae), _0x3762ae;
};