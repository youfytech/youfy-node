function a45_0x445f(_0x3ab60a,_0x4936ac){const _0x2bd123=a45_0x2bd1();return a45_0x445f=function(_0x445fc8,_0x247a3f){_0x445fc8=_0x445fc8-0x182;let _0x474996=_0x2bd123[_0x445fc8];return _0x474996;},a45_0x445f(_0x3ab60a,_0x4936ac);}const a45_0x577129=a45_0x445f;(function(_0xbc0439,_0xf2a46f){const _0x4df4f8=a45_0x445f,_0x1a47d6=_0xbc0439();while(!![]){try{const _0x335134=-parseInt(_0x4df4f8(0x18b))/0x1+-parseInt(_0x4df4f8(0x185))/0x2+-parseInt(_0x4df4f8(0x195))/0x3+parseInt(_0x4df4f8(0x194))/0x4*(-parseInt(_0x4df4f8(0x197))/0x5)+-parseInt(_0x4df4f8(0x18e))/0x6*(-parseInt(_0x4df4f8(0x18d))/0x7)+-parseInt(_0x4df4f8(0x193))/0x8+parseInt(_0x4df4f8(0x187))/0x9*(parseInt(_0x4df4f8(0x199))/0xa);if(_0x335134===_0xf2a46f)break;else _0x1a47d6['push'](_0x1a47d6['shift']());}catch(_0xff3f17){_0x1a47d6['push'](_0x1a47d6['shift']());}}}(a45_0x2bd1,0x9fa53));const io=require('socket.io-client'),Config=require('../sdk/Config'),Device=require('../helpers/Device'),ws_uri=Config[a45_0x577129(0x184)](a45_0x577129(0x18f),a45_0x577129(0x188)),api_token=Config['get'](a45_0x577129(0x192));function a45_0x2bd1(){const _0x4d42cc=['825070UMWfOG','connect','21UBgEtO','576006aupZMH','REALTIME_SERVER_URI','Bearer\x20','disconnect','API_TOKEN','4450752RukXyK','2996pXCRHG','2672394AcAtWt','getId','3095EbFWHG','WS\x20Connected!','10KElXza','log','connect_error','get','371632uOgMkg','message','29588067SgKBpN','wss://ws.youfy.com.br','Bot\x20is\x20connected\x20to\x20realtime\x20server:\x20','Can\x27t\x20connect\x20to\x20realtime\x20server.'];a45_0x2bd1=function(){return _0x4d42cc;};return a45_0x2bd1();}module['exports']=(_0x51bd0a,_0x2519d5,_0x24175e=!![])=>{const _0x5b748d=a45_0x577129,_0x2dcb32=Device[_0x5b748d(0x196)](),_0xd74375=_0x24175e?{'auth':{'device_id':_0x2dcb32,'bot_id':_0x51bd0a,'version':_0x2519d5}}:{'extraHeaders':{'Authorization':_0x5b748d(0x190)+api_token}},_0x345bab=io(ws_uri,_0xd74375);return _0x345bab['on'](_0x5b748d(0x183),_0x2c19a6=>{const _0x4df18c=_0x5b748d;console[_0x4df18c(0x182)](_0x4df18c(0x18a),_0x2c19a6[_0x4df18c(0x186)]);}),_0x345bab['on'](_0x5b748d(0x18c),()=>{const _0x43fa15=_0x5b748d;console[_0x43fa15(0x182)](_0x43fa15(0x189)+ws_uri+'.','ID',_0x345bab['id']);}),_0x345bab['on'](_0x5b748d(0x191),async()=>{const _0x5e61d6=_0x5b748d;console[_0x5e61d6(0x182)]('Bot\x20was\x20disconnected.');}),_0x345bab['on']('connect',()=>console['log'](_0x5b748d(0x198))),_0x345bab;};