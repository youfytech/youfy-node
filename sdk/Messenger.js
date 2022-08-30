const a63_0x5722ca = a63_0x2d11;
(function (_0x3dd306, _0x83efec) {
    const _0x3c35f9 = a63_0x2d11, _0x18bd5d = _0x3dd306();
    while (!![]) {
        try {
            const _0x429408 = -parseInt(_0x3c35f9(0x1a4)) / 0x1 * (-parseInt(_0x3c35f9(0x1a3)) / 0x2) + -parseInt(_0x3c35f9(0x197)) / 0x3 * (parseInt(_0x3c35f9(0x199)) / 0x4) + -parseInt(_0x3c35f9(0x1a0)) / 0x5 + -parseInt(_0x3c35f9(0x1a6)) / 0x6 * (-parseInt(_0x3c35f9(0x194)) / 0x7) + -parseInt(_0x3c35f9(0x1a8)) / 0x8 * (parseInt(_0x3c35f9(0x19e)) / 0x9) + parseInt(_0x3c35f9(0x195)) / 0xa * (-parseInt(_0x3c35f9(0x19b)) / 0xb) + parseInt(_0x3c35f9(0x1a5)) / 0xc;
            if (_0x429408 === _0x83efec)
                break;
            else
                _0x18bd5d['push'](_0x18bd5d['shift']());
        } catch (_0x3b794c) {
            _0x18bd5d['push'](_0x18bd5d['shift']());
        }
    }
}(a63_0xf818, 0xe58d0));
function a63_0x2d11(_0xd1f58b, _0x1e3416) {
    const _0xf8183 = a63_0xf818();
    return a63_0x2d11 = function (_0x2d1150, _0x522b88) {
        _0x2d1150 = _0x2d1150 - 0x194;
        let _0x162729 = _0xf8183[_0x2d1150];
        return _0x162729;
    }, a63_0x2d11(_0xd1f58b, _0x1e3416);
}
const logger = require('./Logger'), JobApi = require('../api/Job');
class Messenger {
    constructor(_0x2a8407) {
        const _0x17ab4a = a63_0x2d11;
        this[_0x17ab4a(0x1a7)] = _0x2a8407;
    }
    async [a63_0x5722ca(0x19c)](_0x3ae4bd) {
        const _0x42a51f = a63_0x5722ca;
        await JobApi[_0x42a51f(0x196)](this['job']['id'], { 'status_text': _0x3ae4bd }), logger[_0x42a51f(0x19a)](_0x42a51f(0x1a1), _0x3ae4bd);
    }
    async ['warn'](_0x5d3f6c) {
        const _0x3b0972 = a63_0x5722ca;
        await JobApi[_0x3b0972(0x198)](this['job']['id'], {
            'bot_id': this['job']?.[_0x3b0972(0x1a2)]?.['id'],
            'text': _0x5d3f6c
        }), logger['warn'](_0x3b0972(0x19d), _0x5d3f6c);
    }
}
function a63_0xf818() {
    const _0x64ceca = [
        'update',
        '3966435HLavBu',
        'addWarn',
        '4fjlQYQ',
        'info',
        '226061bxYKZI',
        'send',
        '[WARN]:',
        '4728609GpsCll',
        'exports',
        '7267825hsFWCi',
        '[Message\x20sent]:',
        'bot',
        '412uvneCy',
        '9035dBcqFM',
        '17007360bYvqQq',
        '8119980xicKHm',
        'job',
        '8qpznOr',
        '7VoKkuS',
        '190hfXjLv'
    ];
    a63_0xf818 = function () {
        return _0x64ceca;
    };
    return a63_0xf818();
}
module[a63_0x5722ca(0x19f)] = Messenger;