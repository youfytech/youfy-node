const a38_0x28a7dc = a38_0x566e;
function a38_0x566e(_0x5355f9, _0x486c5e) {
    const _0x14da43 = a38_0x14da();
    return a38_0x566e = function (_0x566e44, _0x4f0afd) {
        _0x566e44 = _0x566e44 - 0x1b3;
        let _0x54a4b9 = _0x14da43[_0x566e44];
        return _0x54a4b9;
    }, a38_0x566e(_0x5355f9, _0x486c5e);
}
(function (_0x285ec3, _0x1ed53a) {
    const _0x221171 = a38_0x566e, _0x2554e7 = _0x285ec3();
    while (!![]) {
        try {
            const _0x353708 = parseInt(_0x221171(0x1c7)) / 0x1 + -parseInt(_0x221171(0x1c0)) / 0x2 * (parseInt(_0x221171(0x1c8)) / 0x3) + -parseInt(_0x221171(0x1b8)) / 0x4 + -parseInt(_0x221171(0x1b7)) / 0x5 + -parseInt(_0x221171(0x1b9)) / 0x6 + -parseInt(_0x221171(0x1c2)) / 0x7 + -parseInt(_0x221171(0x1b3)) / 0x8 * (-parseInt(_0x221171(0x1be)) / 0x9);
            if (_0x353708 === _0x1ed53a)
                break;
            else
                _0x2554e7['push'](_0x2554e7['shift']());
        } catch (_0x4778e9) {
            _0x2554e7['push'](_0x2554e7['shift']());
        }
    }
}(a38_0x14da, 0x7012c));
const retry = require('async-retry'), Messenger = require('../sdk/Messenger'), DataContext = require('../sdk/DataContext'), DataState = require('../sdk/DataState'), GarbageCollector = require('../sdk/GarbageCollector');
class BotHandler {
    constructor(_0x43419b, {garbage: _0x592121}) {
        const _0x31c0f2 = a38_0x566e;
        this['job'] = _0x43419b, this[_0x31c0f2(0x1bd)] = _0x43419b[_0x31c0f2(0x1bd)] || { 'settings': [] }, this['garbage'] = _0x592121 || new GarbageCollector();
    }
    async [a38_0x28a7dc(0x1b5)](_0x11e113) {
        const _0x4e577b = a38_0x28a7dc, _0x1e8559 = this[_0x4e577b(0x1bd)][_0x4e577b(0x1c1)][_0x4e577b(0x1c4)](_0xcb23e5 => _0xcb23e5['id'] === 'config') || {}, _0x45a8b7 = this[_0x4e577b(0x1c5)]['input_data'] || {}, _0x175ab9 = new DataContext(_0x1e8559[_0x4e577b(0x1c9)], { 'readonly': !![] }), _0x558157 = new DataState(_0x4e577b(0x1ba) + this[_0x4e577b(0x1c5)]['id']), _0x36fee0 = new Messenger(this[_0x4e577b(0x1c5)]), _0x5cf920 = {
                'garbage': this[_0x4e577b(0x1c3)],
                'state': _0x558157,
                'bot': new DataContext(this['bot'], { 'readonly': !![] }),
                'job': new DataContext(this[_0x4e577b(0x1c5)], { 'readonly': !![] }),
                'messenger': _0x36fee0,
                'msg': _0x36fee0,
                'config': _0x175ab9,
                'inputData': new DataContext(_0x45a8b7, { 'readonly': !![] })
            };
        await retry(async (_0x225c2e, _0x285adc) => {
            await _0x11e113(_0x5cf920, {
                'bail': _0x225c2e,
                'attempts': _0x285adc
            });
        }, {
            'retries': _0x175ab9['get'](_0x4e577b(0x1b6), 0x2),
            'onRetry': this[_0x4e577b(0x1bc)][_0x4e577b(0x1bf)](this)
        });
    }
    ['onRetry'](_0x52ce71) {
        const _0x955a9d = a38_0x28a7dc;
        try {
            console[_0x955a9d(0x1c6)](_0x52ce71), this[_0x955a9d(0x1c3)][_0x955a9d(0x1bb)]();
        } catch (_0x1a80cc) {
            console[_0x955a9d(0x1ca)](_0x955a9d(0x1b4), _0x1a80cc);
        }
    }
}
function a38_0x14da() {
    const _0x24ad12 = [
        'garbage',
        'find',
        'job',
        'error',
        '640424bQKeUl',
        '3kJAMMU',
        'value',
        'log',
        '576TcXXUM',
        '[GARBAGE\x20ERROR\x20ON\x20RETRY]',
        'run',
        'job_retries',
        '2190120SAOijH',
        '301312HhRmtR',
        '4828830wLmemO',
        'job-',
        'clear',
        'onRetry',
        'bot',
        '184194tsVGSh',
        'bind',
        '91942xVoVOH',
        'settings',
        '2035572MejUUm'
    ];
    a38_0x14da = function () {
        return _0x24ad12;
    };
    return a38_0x14da();
}
module['exports'] = BotHandler;