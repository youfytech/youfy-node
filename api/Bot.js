function a0_0x5115(_0x374e99,_0x2fe538){const _0x3606c6=a0_0x3606();return a0_0x5115=function(_0x511553,_0x371257){_0x511553=_0x511553-0xac;let _0x29a4c8=_0x3606c6[_0x511553];return _0x29a4c8;},a0_0x5115(_0x374e99,_0x2fe538);}const a0_0x46f67a=a0_0x5115;(function(_0x1418e1,_0x535f8b){const _0x4d383c=a0_0x5115,_0x4d60a5=_0x1418e1();while(!![]){try{const _0xc2ba35=-parseInt(_0x4d383c(0xbd))/0x1*(-parseInt(_0x4d383c(0xba))/0x2)+-parseInt(_0x4d383c(0xb3))/0x3+-parseInt(_0x4d383c(0xbc))/0x4+parseInt(_0x4d383c(0xb0))/0x5*(parseInt(_0x4d383c(0xb1))/0x6)+parseInt(_0x4d383c(0xb4))/0x7*(-parseInt(_0x4d383c(0xb9))/0x8)+-parseInt(_0x4d383c(0xad))/0x9+-parseInt(_0x4d383c(0xaf))/0xa*(-parseInt(_0x4d383c(0xb6))/0xb);if(_0xc2ba35===_0x535f8b)break;else _0x4d60a5['push'](_0x4d60a5['shift']());}catch(_0x18142d){_0x4d60a5['push'](_0x4d60a5['shift']());}}}(a0_0x3606,0x1f9ac));function a0_0x3606(){const _0x46abfe=['isProduction','10IxvQrL','1430gTjCIm','774aZZbIS','update','160872XIEpTG','27888YodbJF','bots/','4491916hrRiEI','data','[Fail\x20to\x20request\x20bot]:\x20','208uNzzQq','2azEfuZ','get','128756VqNUHv','98913qjJpdM','put','2027826QhAdMb'];a0_0x3606=function(){return _0x46abfe;};return a0_0x3606();}const api=require('./instance'),{APIError}=require('../exceptions'),BotMock=require('./mocks/BotMock'),Utils=require('../sdk/Utils');class Bot{static async['fetch'](_0x436931){const _0x30e47a=a0_0x5115;try{const _0x37bfdc=await api[_0x30e47a(0xbb)](_0x30e47a(0xb5)+_0x436931);return _0x37bfdc[_0x30e47a(0xb7)];}catch(_0x1300e8){throw new APIError(_0x30e47a(0xb8),_0x1300e8);}}static async[a0_0x46f67a(0xb2)](_0x2c4da3,_0x1a3c33){const _0x4c2958=a0_0x46f67a;try{const _0x5e7d08=await api[_0x4c2958(0xac)]('bots/'+_0x2c4da3,_0x1a3c33);return _0x5e7d08[_0x4c2958(0xb7)];}catch(_0x21cbf8){throw new APIError('[Fail\x20to\x20update\x20bot]:\x20',_0x21cbf8);}}}module['exports']=Utils[a0_0x46f67a(0xae)]()?Bot:BotMock;