const a39_0x4d3c30 = a39_0x1573;
(function (_0x5f0dee, _0x278ffb) {
    const _0x4425ae = a39_0x1573, _0x4d938 = _0x5f0dee();
    while (!![]) {
        try {
            const _0x4dfc2b = parseInt(_0x4425ae(0x9b)) / 0x1 * (-parseInt(_0x4425ae(0x87)) / 0x2) + parseInt(_0x4425ae(0x99)) / 0x3 * (parseInt(_0x4425ae(0x95)) / 0x4) + -parseInt(_0x4425ae(0x93)) / 0x5 * (-parseInt(_0x4425ae(0x92)) / 0x6) + parseInt(_0x4425ae(0x8f)) / 0x7 * (-parseInt(_0x4425ae(0x88)) / 0x8) + -parseInt(_0x4425ae(0x86)) / 0x9 + -parseInt(_0x4425ae(0x96)) / 0xa * (parseInt(_0x4425ae(0x97)) / 0xb) + parseInt(_0x4425ae(0x8e)) / 0xc;
            if (_0x4dfc2b === _0x278ffb)
                break;
            else
                _0x4d938['push'](_0x4d938['shift']());
        } catch (_0x473e78) {
            _0x4d938['push'](_0x4d938['shift']());
        }
    }
}(a39_0x3782, 0x9b883));
function a39_0x1573(_0x6deac4, _0x7affca) {
    const _0x378262 = a39_0x3782();
    return a39_0x1573 = function (_0x1573e2, _0x3cf657) {
        _0x1573e2 = _0x1573e2 - 0x83;
        let _0x597952 = _0x378262[_0x1573e2];
        return _0x597952;
    }, a39_0x1573(_0x6deac4, _0x7affca);
}
function a39_0x3782() {
    const _0x53836e = [
        '\x20for\x20bot\x20',
        '9FEXktN',
        'init',
        'JOB\x20FAILED:',
        'JOB\x20DONE!',
        'parse',
        'canceled',
        '6425973NjJWuZ',
        '179132dbznTw',
        '5817872liQPch',
        'done',
        'assign',
        'JOB\x20CANCELED',
        'updateStatus',
        'failed',
        '34247076EzUzKj',
        '7mpNmIY',
        'hl_error',
        'exports',
        '6rGotkF',
        '2389195tpnHCs',
        'hl_muted',
        '8388DraDiy',
        '30BKhgtY',
        '2447731rFgdvv',
        'hl_success',
        '315jBSbmP'
    ];
    a39_0x3782 = function () {
        return _0x53836e;
    };
    return a39_0x3782();
}
const logger = require('../sdk/Logger'), JobApi = require('../api/Job'), ErrorHelper = require('../helpers/Error');
class JobHandler {
    constructor(_0x15e46f) {
        this['id'] = _0x15e46f;
    }
    async [a39_0x4d3c30(0x9c)](_0x3aa68b) {
        const _0x113f6b = a39_0x4d3c30;
        logger['muted']('Initializing\x20job\x20' + this['id'] + _0x113f6b(0x9a) + _0x3aa68b + '...');
        const _0x2f54cd = await JobApi[_0x113f6b(0x9c)](this['id'], _0x3aa68b);
        return Object[_0x113f6b(0x8a)](this, _0x2f54cd), _0x2f54cd;
    }
    async [a39_0x4d3c30(0x89)]() {
        const _0x2b6dbf = a39_0x4d3c30, _0x1dc416 = await JobApi[_0x2b6dbf(0x8c)](this['id'], _0x2b6dbf(0x89));
        return Object[_0x2b6dbf(0x8a)](this, _0x1dc416), logger[_0x2b6dbf(0x98)]('🎉', _0x2b6dbf(0x83)), _0x1dc416;
    }
    async [a39_0x4d3c30(0x8d)](_0x41b004) {
        const _0x13640d = a39_0x4d3c30;
        logger[_0x13640d(0x90)]('💩', _0x13640d(0x9d), _0x41b004);
        const _0x473c22 = await JobApi[_0x13640d(0x8c)](this['id'], 'failed', { 'error': ErrorHelper[_0x13640d(0x84)](_0x41b004) });
        return Object[_0x13640d(0x8a)](this, _0x473c22), _0x473c22;
    }
    async [a39_0x4d3c30(0x85)]() {
        const _0x41b10a = a39_0x4d3c30;
        logger[_0x41b10a(0x94)]('🚫', _0x41b10a(0x8b));
        const _0x17f565 = await JobApi[_0x41b10a(0x8c)](this['id'], _0x41b10a(0x85));
        return Object[_0x41b10a(0x8a)](this, _0x17f565), _0x17f565;
    }
}
module[a39_0x4d3c30(0x91)] = JobHandler;