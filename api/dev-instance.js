function a10_0x71d8(){const _0x23a769=['2232zENzDP','1991235XNxfOz','1784cspZml','Bearer\x20','exports','API_URL','6831572MgJVED','55908cxtcfG','4snAaLB','17570nBzJsu','261045aCNfFW','get','390NRNDUj','97926hoPIfu','https://api.youfy.com.br/core','185jljQSB','2QTEhQy','stringify','26012tkRkfy'];a10_0x71d8=function(){return _0x23a769;};return a10_0x71d8();}function a10_0x30d0(_0x4f4836,_0x1ee04){const _0x71d8b=a10_0x71d8();return a10_0x30d0=function(_0x30d0d1,_0x346548){_0x30d0d1=_0x30d0d1-0x1df;let _0x521cd8=_0x71d8b[_0x30d0d1];return _0x521cd8;},a10_0x30d0(_0x4f4836,_0x1ee04);}const a10_0x37abb5=a10_0x30d0;(function(_0x375b87,_0x5da898){const _0x1ec914=a10_0x30d0,_0x13e2ff=_0x375b87();while(!![]){try{const _0x3ab056=-parseInt(_0x1ec914(0x1e9))/0x1*(-parseInt(_0x1ec914(0x1ef))/0x2)+parseInt(_0x1ec914(0x1e0))/0x3*(-parseInt(_0x1ec914(0x1e7))/0x4)+-parseInt(_0x1ec914(0x1ee))/0x5*(-parseInt(_0x1ec914(0x1ec))/0x6)+-parseInt(_0x1ec914(0x1f1))/0x7*(parseInt(_0x1ec914(0x1e1))/0x8)+parseInt(_0x1ec914(0x1df))/0x9*(parseInt(_0x1ec914(0x1e8))/0xa)+parseInt(_0x1ec914(0x1e5))/0xb+parseInt(_0x1ec914(0x1e6))/0xc*(parseInt(_0x1ec914(0x1eb))/0xd);if(_0x3ab056===_0x5da898)break;else _0x13e2ff['push'](_0x13e2ff['shift']());}catch(_0x4370c5){_0x13e2ff['push'](_0x13e2ff['shift']());}}}(a10_0x71d8,0x8aeeb));const axios=require('axios'),qs=require('qs'),axiosRetry=require('axios-retry'),Config=require('../sdk/Config'),auth_token=Config[a10_0x37abb5(0x1ea)]('API_TOKEN'),baseURL=Config['get'](a10_0x37abb5(0x1e4),a10_0x37abb5(0x1ed)),dev_instance=axios['create']({'baseURL':baseURL,'headers':{'Authorization':a10_0x37abb5(0x1e2)+auth_token},'paramsSerializer':_0x3fea8c=>{const _0x552c8c=a10_0x37abb5;return qs[_0x552c8c(0x1f0)](_0x3fea8c);}});axiosRetry(dev_instance,{'retries':0x5,'retryDelay':_0x32804d=>_0x32804d*0xbb8}),module[a10_0x37abb5(0x1e3)]=dev_instance;