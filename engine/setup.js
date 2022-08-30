function a31_0x401b(_0x2a86d4, _0x2a3c59) {
    const _0xf9d28a = a31_0xf9d2();
    return a31_0x401b = function (_0x401b63, _0x3cb3af) {
        _0x401b63 = _0x401b63 - 0x68;
        let _0xf6e60f = _0xf9d28a[_0x401b63];
        return _0xf6e60f;
    }, a31_0x401b(_0x2a86d4, _0x2a3c59);
}
const a31_0x5f3476 = a31_0x401b;
function a31_0xf9d2() {
    const _0x44b379 = [
        'JOB:STOP',
        '875565vdLqJN',
        'BOT:STOP',
        '32572zQjcKI',
        'job_id',
        'has',
        'BOT\x20ID\x20is\x20required.',
        'job:pending',
        'bot_id',
        '279875NYOXqT',
        '200893khOWCW',
        '9HUkxjb',
        'device_id',
        '2131340branEn',
        'remove',
        'getId',
        'bind',
        'create',
        '192166vaOMJk',
        '443048hvqxXC',
        '105sBsEQL',
        '42NdCVBI',
        'exit'
    ];
    a31_0xf9d2 = function () {
        return _0x44b379;
    };
    return a31_0xf9d2();
}
(function (_0x4fe30f, _0x136aaa) {
    const _0x4cd17c = a31_0x401b, _0xb45e87 = _0x4fe30f();
    while (!![]) {
        try {
            const _0x39365d = parseInt(_0x4cd17c(0x6b)) / 0x1 + parseInt(_0x4cd17c(0x74)) / 0x2 * (-parseInt(_0x4cd17c(0x6d)) / 0x3) + -parseInt(_0x4cd17c(0x7c)) / 0x4 * (parseInt(_0x4cd17c(0x76)) / 0x5) + parseInt(_0x4cd17c(0x77)) / 0x6 * (parseInt(_0x4cd17c(0x6c)) / 0x7) + parseInt(_0x4cd17c(0x75)) / 0x8 + -parseInt(_0x4cd17c(0x7a)) / 0x9 + parseInt(_0x4cd17c(0x6f)) / 0xa;
            if (_0x39365d === _0x136aaa)
                break;
            else
                _0xb45e87['push'](_0xb45e87['shift']());
        } catch (_0x2f6af9) {
            _0xb45e87['push'](_0xb45e87['shift']());
        }
    }
}(a31_0xf9d2, 0x2f0ea));
const Device = require('../helpers/Device'), device_id = Device[a31_0x5f3476(0x71)](), setup = async ({
        id: _0x2b027e,
        version: _0x3c30a4,
        packageable: packageable = !![]
    }, _0x226851) => {
        const _0x793a6 = a31_0x5f3476;
        !_0x2b027e && (console['error'](_0x793a6(0x68)), process[_0x793a6(0x78)]());
        globalThis['id'] = _0x2b027e;
        const _0x137a21 = require('./runJob'), _0x543f67 = require('../helpers/Lockfile'), _0x9a79ba = new _0x543f67(_0x2b027e);
        _0x9a79ba['remove']();
        const _0x14d5ea = require('../helpers/Socket')(_0x2b027e, _0x3c30a4, packageable);
        _0x14d5ea['on'](_0x793a6(0x7b), async _0x20af61 => {
            const _0x4387f4 = _0x793a6;
            _0x20af61[_0x4387f4(0x6a)] === _0x2b027e && process[_0x4387f4(0x78)](0x0);
        }), _0x14d5ea['on'](_0x793a6(0x69), async _0x2dfb96 => {
            const _0x406912 = _0x793a6, _0x1499c1 = packageable ? _0x2dfb96[_0x406912(0x6e)] === device_id : !![];
            if (_0x2dfb96[_0x406912(0x6a)] !== _0x2b027e || !_0x1499c1 || _0x9a79ba[_0x406912(0x7e)]())
                return;
            _0x14d5ea['on'](_0x406912(0x79), async _0x25dfff => {
                const _0x59cd6a = _0x406912;
                _0x25dfff[_0x59cd6a(0x7d)] === _0x2dfb96['id'] && process[_0x59cd6a(0x78)](0x0);
            }), _0x9a79ba[_0x406912(0x73)]();
            try {
                await _0x137a21({
                    'job_id': _0x2dfb96['id'],
                    'bot_id': _0x2b027e,
                    'botFn': _0x226851
                });
            } finally {
                _0x9a79ba[_0x406912(0x70)]();
            }
        });
    };
module['exports'] = _0x2625e3 => {
    const _0xea9d7 = a31_0x5f3476;
    return global['bot_config'] = _0x2625e3, setup[_0xea9d7(0x72)](this, _0x2625e3);
};