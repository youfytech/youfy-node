#!/usr/bin/env node
const a48_0x5ecd29=a48_0x5847;function a48_0x5149(){const _0x3245e0=['boolean','config','argv','non-existing\x20or\x20no\x20command\x20specified','getCommandInstance','6ezXKaL','scriptName','284267FrTzGi','command','5302920KjWmFW','4498410QSInSR','getCommands','option','2832944qCeQBL','youfy','95OCjTMQ','40fubATi','855081fCmYrb','576106eyKEUz','146586VezPuA','log','verbose','exit'];a48_0x5149=function(){return _0x3245e0;};return a48_0x5149();}function a48_0x5847(_0x5b9abc,_0x59784c){const _0x514927=a48_0x5149();return a48_0x5847=function(_0x5847e6,_0x483e43){_0x5847e6=_0x5847e6-0x157;let _0x3241af=_0x514927[_0x5847e6];return _0x3241af;},a48_0x5847(_0x5b9abc,_0x59784c);}(function(_0xb7689d,_0x4217d9){const _0x525044=a48_0x5847,_0x49ad3f=_0xb7689d();while(!![]){try{const _0xafb560=parseInt(_0x525044(0x157))/0x1+-parseInt(_0x525044(0x162))/0x2*(parseInt(_0x525044(0x16c))/0x3)+parseInt(_0x525044(0x15d))/0x4+parseInt(_0x525044(0x15f))/0x5*(parseInt(_0x525044(0x163))/0x6)+parseInt(_0x525044(0x15a))/0x7+-parseInt(_0x525044(0x160))/0x8*(parseInt(_0x525044(0x161))/0x9)+-parseInt(_0x525044(0x159))/0xa;if(_0xafb560===_0x4217d9)break;else _0x49ad3f['push'](_0x49ad3f['shift']());}catch(_0x34d509){_0x49ad3f['push'](_0x49ad3f['shift']());}}}(a48_0x5149,0x7e6f7),require('dotenv')[a48_0x5ecd29(0x168)]());const yargs=require('yargs/yargs'),{hideBin}=require('yargs/helpers'),bot_run_cmd=require('./cmds/bot/run'),bot_start_cmd=require('./cmds/bot/start'),bot_info_cmd=require('./cmds/bot/info'),state_clear_cmd=require('./cmds/state/clear'),publish_dist_cmd=require('./cmds/publish/dist'),instance=yargs(hideBin(process[a48_0x5ecd29(0x169)]))[a48_0x5ecd29(0x16d)](a48_0x5ecd29(0x15e))[a48_0x5ecd29(0x158)](...bot_run_cmd)['command'](...bot_start_cmd)[a48_0x5ecd29(0x158)](...bot_info_cmd)[a48_0x5ecd29(0x158)](...state_clear_cmd)[a48_0x5ecd29(0x158)](...publish_dist_cmd)[a48_0x5ecd29(0x15c)](a48_0x5ecd29(0x165),{'alias':'v','type':a48_0x5ecd29(0x167),'description':'Run\x20with\x20verbose\x20logging'}),commands=instance[a48_0x5ecd29(0x16b)]()[a48_0x5ecd29(0x15b)](),{argv}=instance;(!argv['_'][0x0]||commands['indexOf'](argv['_'][0x0])===-0x1)&&(console[a48_0x5ecd29(0x164)](a48_0x5ecd29(0x16a)),process[a48_0x5ecd29(0x166)](0x1));