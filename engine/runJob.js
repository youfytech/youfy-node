const a29_0x252e8a = a29_0x238a;
(function (_0x20ed11, _0x1932a0) {
    const _0xb4dbcc = a29_0x238a, _0x473c1a = _0x20ed11();
    while (!![]) {
        try {
            const _0x481f34 = parseInt(_0xb4dbcc(0xa1)) / 0x1 + -parseInt(_0xb4dbcc(0x95)) / 0x2 * (parseInt(_0xb4dbcc(0x8d)) / 0x3) + parseInt(_0xb4dbcc(0x90)) / 0x4 * (-parseInt(_0xb4dbcc(0x8e)) / 0x5) + -parseInt(_0xb4dbcc(0x87)) / 0x6 + parseInt(_0xb4dbcc(0x8b)) / 0x7 * (-parseInt(_0xb4dbcc(0x91)) / 0x8) + parseInt(_0xb4dbcc(0x85)) / 0x9 * (-parseInt(_0xb4dbcc(0x92)) / 0xa) + parseInt(_0xb4dbcc(0x9e)) / 0xb;
            if (_0x481f34 === _0x1932a0)
                break;
            else
                _0x473c1a['push'](_0x473c1a['shift']());
        } catch (_0x51ba3c) {
            _0x473c1a['push'](_0x473c1a['shift']());
        }
    }
}(a29_0x3420, 0x813c2), require('./global'), require('./errorHandler.js'));
const BotHandler = require('../handlers/BotHandler'), JobHandler = require('../handlers/JobHandler'), Sentry = require('../helpers/Sentry'), GarbageCollector = require('../sdk/GarbageCollector'), {fork} = require('child_process'), {resolve} = require('path');
module[a29_0x252e8a(0x96)] = async ({
    job_id: _0x4122d1,
    bot_id: _0x1e3c15,
    botFn: _0x1efdac
}) => {
    const _0xa31e7b = a29_0x252e8a, _0x23fbe7 = new GarbageCollector();
    Sentry[_0xa31e7b(0x89)](_0x7aae22 => {
        const _0x210a61 = _0xa31e7b;
        _0x7aae22[_0x210a61(0x98)](_0x210a61(0x97), _0x4122d1);
    });
    const _0x3ca179 = new JobHandler(_0x4122d1);
    try {
        const _0x39f7b5 = await _0x3ca179[_0xa31e7b(0x9d)](_0x1e3c15);
        Sentry[_0xa31e7b(0x89)](_0x3745e9 => {
            const _0x6b5dbe = _0xa31e7b;
            _0x3745e9[_0x6b5dbe(0x98)]('device_id', _0x39f7b5[_0x6b5dbe(0x8c)]), _0x3745e9[_0x6b5dbe(0x98)](_0x6b5dbe(0x9c), _0x39f7b5[_0x6b5dbe(0x9c)]), _0x3745e9[_0x6b5dbe(0x98)]('bot_id', _0x39f7b5[_0x6b5dbe(0x94)]), _0x3745e9[_0x6b5dbe(0x98)](_0x6b5dbe(0x9f), _0x39f7b5[_0x6b5dbe(0x9f)]);
        });
        const _0x1d7b34 = (_0x1009cc, _0x1026f5 = _0xa31e7b(0x93)) => {
            const _0x171d8d = _0xa31e7b;
            if (_0x3ca179[_0x171d8d(0x8f)] === _0x171d8d(0x99)) {
                const _0x4c4d63 = fork(resolve(__dirname, _0x171d8d(0x9a)), { 'detached': !![] });
                _0x4c4d63['send']({
                    'status': _0x1009cc,
                    'error': _0x1026f5,
                    'job_id': _0x4122d1,
                    'bot_id': _0x1e3c15
                });
            }
        };
        _0x23fbe7['onClean'](() => _0x1d7b34(_0xa31e7b(0x8a)), _0xa31e7b(0x8a)), _0x23fbe7[_0xa31e7b(0x9b)](() => _0x1d7b34(_0xa31e7b(0x86)), 'failed');
        const _0x49be40 = new BotHandler(_0x39f7b5, { 'garbage': _0x23fbe7 });
        await _0x49be40[_0xa31e7b(0xa0)](_0x1efdac), await _0x3ca179[_0xa31e7b(0x88)]();
    } catch (_0x4f1689) {
        await _0x3ca179[_0xa31e7b(0x86)](_0x4f1689), Sentry['captureException'](_0x4f1689);
    } finally {
        await _0x23fbe7['clear']();
    }
};
function a29_0x238a(_0x98c8a9, _0x5b8d73) {
    const _0x3420f8 = a29_0x3420();
    return a29_0x238a = function (_0x238a1c, _0x58fa51) {
        _0x238a1c = _0x238a1c - 0x85;
        let _0x236e10 = _0x3420f8[_0x238a1c];
        return _0x236e10;
    }, a29_0x238a(_0x98c8a9, _0x5b8d73);
}
function a29_0x3420() {
    const _0x24f9bb = [
        'failed',
        '3975444HaSfBV',
        'done',
        'configureScope',
        'canceled',
        '7LDDUMN',
        'device_id',
        '3cRroCB',
        '15fGlQNt',
        'status',
        '1135568qTdCus',
        '3391096LPgPda',
        '70BAnbzg',
        'Unknown.\x20Uncaught\x20exception\x20maybe.',
        'bot_id',
        '684146CityhY',
        'exports',
        'job_id',
        'setTag',
        'WORKING',
        'errorHandler.js',
        'onClean',
        'company_id',
        'init',
        '28373301thadkQ',
        'title',
        'run',
        '399663nqiRNQ',
        '217926EkDhaA'
    ];
    a29_0x3420 = function () {
        return _0x24f9bb;
    };
    return a29_0x3420();
}