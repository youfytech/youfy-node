const a45_0x4f325e = a45_0x36e1;
function a45_0x5495() {
    const _0x61702c = [
        '10ufnFNN',
        'API_TOKEN',
        'exports',
        '6462630fUnQbO',
        '145tuXzPd',
        '116026zjDVDM',
        'connect_error',
        'WS\x20Connected!',
        '7jzDgZG',
        '24069749lbBLJg',
        '11420888HaDQuL',
        '206728dzaeGI',
        '3748770FPSEgo',
        'getId',
        '14752863tleKkl',
        'Bot\x20is\x20connected\x20to\x20realtime\x20server:\x20',
        '12NECKOz',
        'disconnect',
        'connect',
        'log',
        '7KMIAVe'
    ];
    a45_0x5495 = function () {
        return _0x61702c;
    };
    return a45_0x5495();
}
(function (_0x259a04, _0x141697) {
    const _0x32a6b3 = a45_0x36e1, _0xb168d = _0x259a04();
    while (!![]) {
        try {
            const _0x36abe0 = -parseInt(_0x32a6b3(0x16e)) / 0x1 * (-parseInt(_0x32a6b3(0x15f)) / 0x2) + -parseInt(_0x32a6b3(0x166)) / 0x3 + parseInt(_0x32a6b3(0x165)) / 0x4 * (parseInt(_0x32a6b3(0x15e)) / 0x5) + parseInt(_0x32a6b3(0x15d)) / 0x6 + -parseInt(_0x32a6b3(0x162)) / 0x7 * (parseInt(_0x32a6b3(0x164)) / 0x8) + parseInt(_0x32a6b3(0x168)) / 0x9 * (-parseInt(_0x32a6b3(0x16f)) / 0xa) + parseInt(_0x32a6b3(0x163)) / 0xb * (parseInt(_0x32a6b3(0x16a)) / 0xc);
            if (_0x36abe0 === _0x141697)
                break;
            else
                _0xb168d['push'](_0xb168d['shift']());
        } catch (_0x9937f6) {
            _0xb168d['push'](_0xb168d['shift']());
        }
    }
}(a45_0x5495, 0xd06dd));
function a45_0x36e1(_0xe5e7c4, _0x324287) {
    const _0x5495dc = a45_0x5495();
    return a45_0x36e1 = function (_0x36e15a, _0x5a0527) {
        _0x36e15a = _0x36e15a - 0x15b;
        let _0x1e6ab1 = _0x5495dc[_0x36e15a];
        return _0x1e6ab1;
    }, a45_0x36e1(_0xe5e7c4, _0x324287);
}
const io = require('socket.io-client'), Config = require('../sdk/Config'), Device = require('../helpers/Device'), ws_uri = Config['get']('REALTIME_SERVER_URI', 'wss://ws.youfy.com.br'), api_token = Config['get'](a45_0x4f325e(0x15b));
module[a45_0x4f325e(0x15c)] = (_0x500549, _0x4e8c3d, _0x3792a3 = !![]) => {
    const _0x5b70ed = a45_0x4f325e, _0x559766 = Device[_0x5b70ed(0x167)](), _0x5ac809 = _0x3792a3 ? {
            'auth': {
                'device_id': _0x559766,
                'bot_id': _0x500549,
                'version': _0x4e8c3d
            }
        } : { 'extraHeaders': { 'Authorization': 'Bearer\x20' + api_token } }, _0x148e14 = io(ws_uri, _0x5ac809);
    return _0x148e14['on'](_0x5b70ed(0x160), _0x42dab9 => {
        console['log']('Can\x27t\x20connect\x20to\x20realtime\x20server.', _0x42dab9['message']);
    }), _0x148e14['on'](_0x5b70ed(0x16c), () => {
        const _0x21e1e7 = _0x5b70ed;
        console[_0x21e1e7(0x16d)](_0x21e1e7(0x169) + ws_uri + '.', 'ID', _0x148e14['id']);
    }), _0x148e14['on'](_0x5b70ed(0x16b), async () => {
        const _0x3a3954 = _0x5b70ed;
        console[_0x3a3954(0x16d)]('Bot\x20was\x20disconnected.');
    }), _0x148e14['on'](_0x5b70ed(0x16c), () => console[_0x5b70ed(0x16d)](_0x5b70ed(0x161))), _0x148e14;
};