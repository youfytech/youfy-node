function a17_0x2ad8(){const _0x3e018c=['use','interceptors','256644DPenCO','59644ZyBwpD','5eznorS','759rdpDuZ','API_URL','14INDeVH','get','stringify','752889LcyZFi','8BiiNDK','getId','232otmBgV','7542omjFiO','device_id','5282088zubEou','exports','247110qcqHFP','parse','env','6378440bSbdJJ','log'];a17_0x2ad8=function(){return _0x3e018c;};return a17_0x2ad8();}function a17_0x13a4(_0x5dc22f,_0x18fbef){const _0x2ad860=a17_0x2ad8();return a17_0x13a4=function(_0x13a457,_0x2e14c0){_0x13a457=_0x13a457-0xc1;let _0x15df72=_0x2ad860[_0x13a457];return _0x15df72;},a17_0x13a4(_0x5dc22f,_0x18fbef);}const a17_0x46edc3=a17_0x13a4;(function(_0x34bbc6,_0x19a23a){const _0x100299=a17_0x13a4,_0x278523=_0x34bbc6();while(!![]){try{const _0xe610d1=-parseInt(_0x100299(0xc4))/0x1*(parseInt(_0x100299(0xd7))/0x2)+parseInt(_0x100299(0xc7))/0x3*(-parseInt(_0x100299(0xc8))/0x4)+parseInt(_0x100299(0xc1))/0x5*(parseInt(_0x100299(0xcf))/0x6)+-parseInt(_0x100299(0xcd))/0x7+-parseInt(_0x100299(0xca))/0x8*(-parseInt(_0x100299(0xcb))/0x9)+parseInt(_0x100299(0xd2))/0xa+parseInt(_0x100299(0xc2))/0xb*(parseInt(_0x100299(0xd6))/0xc);if(_0xe610d1===_0x19a23a)break;else _0x278523['push'](_0x278523['shift']());}catch(_0x56ad4){_0x278523['push'](_0x278523['shift']());}}}(a17_0x2ad8,0x7b4b8));const axios=require('axios'),qs=require('qs'),axiosRetry=require('axios-retry'),Device=require('../helpers/Device'),Config=require('../sdk/Config'),baseURL=Config[a17_0x46edc3(0xc5)](a17_0x46edc3(0xc3),'https://api.youfy.com.br/core'),instance=axios['create']({'baseURL':baseURL,'auth':{'username':Config[a17_0x46edc3(0xc5)]('id'),'password':Config[a17_0x46edc3(0xc5)](a17_0x46edc3(0xcc),Device[a17_0x46edc3(0xc9)]())},'paramsSerializer':_0x4da594=>{const _0x225a07=a17_0x46edc3;return qs[_0x225a07(0xc6)](_0x4da594);}});JSON[a17_0x46edc3(0xd0)](process[a17_0x46edc3(0xd1)]['LOG_REQUESTS']||![])&&instance[a17_0x46edc3(0xd5)]['request'][a17_0x46edc3(0xd4)](_0x34a334=>{const _0x552ddf=a17_0x46edc3;return console[_0x552ddf(0xd3)]('Starting\x20Request',JSON[_0x552ddf(0xc6)](_0x34a334,null,0x2)),_0x34a334;});axiosRetry(instance,{'retries':0x5,'retryDelay':_0x455b4f=>_0x455b4f*0xbb8}),module[a17_0x46edc3(0xce)]=instance;