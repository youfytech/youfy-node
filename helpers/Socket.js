function a45_0x56f8(_0x394eef,_0x72d5af){const _0x336eb4=a45_0x336e();return a45_0x56f8=function(_0x56f834,_0x5370ed){_0x56f834=_0x56f834-0xea;let _0x39de29=_0x336eb4[_0x56f834];return _0x39de29;},a45_0x56f8(_0x394eef,_0x72d5af);}const a45_0x338d1d=a45_0x56f8;(function(_0x5ee486,_0x24272e){const _0x483f18=a45_0x56f8,_0x952dde=_0x5ee486();while(!![]){try{const _0x1d6b9b=parseInt(_0x483f18(0xf3))/0x1*(-parseInt(_0x483f18(0xfd))/0x2)+parseInt(_0x483f18(0xfb))/0x3+parseInt(_0x483f18(0xff))/0x4*(-parseInt(_0x483f18(0xf6))/0x5)+-parseInt(_0x483f18(0xf7))/0x6*(parseInt(_0x483f18(0xfc))/0x7)+parseInt(_0x483f18(0xea))/0x8+-parseInt(_0x483f18(0xef))/0x9+parseInt(_0x483f18(0xec))/0xa;if(_0x1d6b9b===_0x24272e)break;else _0x952dde['push'](_0x952dde['shift']());}catch(_0x5ae76e){_0x952dde['push'](_0x952dde['shift']());}}}(a45_0x336e,0xee8c7));function a45_0x336e(){const _0x55f11b=['API_TOKEN','7708124DxfOFa','14385632qUvlMa','Bearer\x20','37451490CuYIzy','message','connect','15981885VQIjXP','getId','exports','wss://ws.youfy.com.br','44nyUQpm','Bot\x20is\x20connected\x20to\x20realtime\x20server:\x20','get','5KIKoZb','114plANZu','REALTIME_SERVER_URI','WS\x20Connected!','log','4424643zeYYSY','141715QujkbE','88804RLETox'];a45_0x336e=function(){return _0x55f11b;};return a45_0x336e();}const io=require('socket.io-client'),Config=require('../sdk/Config'),Device=require('../helpers/Device'),ws_uri=Config['get'](a45_0x338d1d(0xf8),a45_0x338d1d(0xf2)),api_token=Config[a45_0x338d1d(0xf5)](a45_0x338d1d(0xfe));module[a45_0x338d1d(0xf1)]=(_0x26964f,_0x1b6372,_0x2e47f8=!![])=>{const _0x125a0b=a45_0x338d1d,_0x839729=Device[_0x125a0b(0xf0)](),_0x3fd8e8=_0x2e47f8?{'auth':{'device_id':_0x839729,'bot_id':_0x26964f,'version':_0x1b6372}}:{'extraHeaders':{'Authorization':_0x125a0b(0xeb)+api_token}},_0x63e45a=io(ws_uri,_0x3fd8e8);return _0x63e45a['on']('connect_error',_0x5a6b0b=>{const _0x2033d1=_0x125a0b;console[_0x2033d1(0xfa)]('Can\x27t\x20connect\x20to\x20realtime\x20server.',_0x5a6b0b[_0x2033d1(0xed)]);}),_0x63e45a['on'](_0x125a0b(0xee),()=>{const _0x2ce636=_0x125a0b;console['log'](_0x2ce636(0xf4)+ws_uri+'.','ID',_0x63e45a['id']);}),_0x63e45a['on']('disconnect',async()=>{console['log']('Bot\x20was\x20disconnected.');}),_0x63e45a['on'](_0x125a0b(0xee),()=>console[_0x125a0b(0xfa)](_0x125a0b(0xf9))),_0x63e45a;};