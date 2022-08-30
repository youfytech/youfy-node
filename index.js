#!/usr/bin/env node
function a48_0x4b23() {
    const _0x28b5af = [
        '7684632iPHZrw',
        '2343448ISxuKV',
        '1957gcyzhm',
        'command',
        'argv',
        'exit',
        'scriptName',
        '306anYcEX',
        '482gpoiFY',
        'config',
        '8503998YZykhT',
        '11276oZpVIL',
        'boolean',
        '26162140ihLyFv',
        'option',
        '7FoFSnH',
        '4333240yjsTzu',
        'getCommandInstance',
        'youfy'
    ];
    a48_0x4b23 = function () {
        return _0x28b5af;
    };
    return a48_0x4b23();
}
const a48_0x427cfb = a48_0x37a8;
(function (_0x149d78, _0x85c5a2) {
    const _0x3a81bb = a48_0x37a8, _0x4b1293 = _0x149d78();
    while (!![]) {
        try {
            const _0x3999e1 = parseInt(_0x3a81bb(0xe1)) / 0x1 * (-parseInt(_0x3a81bb(0xd4)) / 0x2) + -parseInt(_0x3a81bb(0xd3)) / 0x3 * (-parseInt(_0x3a81bb(0xd7)) / 0x4) + -parseInt(_0x3a81bb(0xdc)) / 0x5 + -parseInt(_0x3a81bb(0xd6)) / 0x6 * (parseInt(_0x3a81bb(0xdb)) / 0x7) + -parseInt(_0x3a81bb(0xe0)) / 0x8 + parseInt(_0x3a81bb(0xdf)) / 0x9 + parseInt(_0x3a81bb(0xd9)) / 0xa;
            if (_0x3999e1 === _0x85c5a2)
                break;
            else
                _0x4b1293['push'](_0x4b1293['shift']());
        } catch (_0x2c3c69) {
            _0x4b1293['push'](_0x4b1293['shift']());
        }
    }
}(a48_0x4b23, 0xad1bb), require('dotenv')[a48_0x427cfb(0xd5)]());
const yargs = require('yargs/yargs'), {hideBin} = require('yargs/helpers'), bot_run_cmd = require('./cmds/bot/run'), bot_start_cmd = require('./cmds/bot/start'), bot_info_cmd = require('./cmds/bot/info'), state_clear_cmd = require('./cmds/state/clear'), publish_dist_cmd = require('./cmds/publish/dist'), instance = yargs(hideBin(process[a48_0x427cfb(0xd0)]))[a48_0x427cfb(0xd2)](a48_0x427cfb(0xde))[a48_0x427cfb(0xcf)](...bot_run_cmd)[a48_0x427cfb(0xcf)](...bot_start_cmd)[a48_0x427cfb(0xcf)](...bot_info_cmd)['command'](...state_clear_cmd)[a48_0x427cfb(0xcf)](...publish_dist_cmd)[a48_0x427cfb(0xda)]('verbose', {
        'alias': 'v',
        'type': a48_0x427cfb(0xd8),
        'description': 'Run\x20with\x20verbose\x20logging'
    }), commands = instance[a48_0x427cfb(0xdd)]()['getCommands'](), {argv} = instance;
function a48_0x37a8(_0x344418, _0x1275a5) {
    const _0x4b2391 = a48_0x4b23();
    return a48_0x37a8 = function (_0x37a895, _0x44118a) {
        _0x37a895 = _0x37a895 - 0xcf;
        let _0x428306 = _0x4b2391[_0x37a895];
        return _0x428306;
    }, a48_0x37a8(_0x344418, _0x1275a5);
}
(!argv['_'][0x0] || commands['indexOf'](argv['_'][0x0]) === -0x1) && (console['log']('non-existing\x20or\x20no\x20command\x20specified'), process[a48_0x427cfb(0xd1)](0x1));