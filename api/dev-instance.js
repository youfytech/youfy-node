function a10_0x4699(_0x144539,_0x105b44){const _0x22fb5f=a10_0x22fb();return a10_0x4699=function(_0x46990a,_0x55f818){_0x46990a=_0x46990a-0x66;let _0x4e4b9f=_0x22fb5f[_0x46990a];return _0x4e4b9f;},a10_0x4699(_0x144539,_0x105b44);}const a10_0x24799d=a10_0x4699;(function(_0x1c706a,_0x449a25){const _0x121902=a10_0x4699,_0x2c44c9=_0x1c706a();while(!![]){try{const _0x4ba799=parseInt(_0x121902(0x70))/0x1*(-parseInt(_0x121902(0x69))/0x2)+-parseInt(_0x121902(0x68))/0x3+-parseInt(_0x121902(0x6b))/0x4*(parseInt(_0x121902(0x72))/0x5)+-parseInt(_0x121902(0x66))/0x6+parseInt(_0x121902(0x71))/0x7+-parseInt(_0x121902(0x6e))/0x8*(parseInt(_0x121902(0x6c))/0x9)+parseInt(_0x121902(0x6f))/0xa;if(_0x4ba799===_0x449a25)break;else _0x2c44c9['push'](_0x2c44c9['shift']());}catch(_0x73ec29){_0x2c44c9['push'](_0x2c44c9['shift']());}}}(a10_0x22fb,0x80d0e));function a10_0x22fb(){const _0x3295df=['155eyxabx','3324498EbkxjC','API_URL','170763nyDwzS','1022wFeYWI','exports','5216oCSFOu','8377362rMyUYr','get','8SFMIDU','20510750UoBmXZ','1086rglaca','4296229ITQgfY'];a10_0x22fb=function(){return _0x3295df;};return a10_0x22fb();}const axios=require('axios'),qs=require('qs'),axiosRetry=require('axios-retry'),Config=require('../sdk/Config'),auth_token=Config[a10_0x24799d(0x6d)]('API_TOKEN'),baseURL=Config[a10_0x24799d(0x6d)](a10_0x24799d(0x67),'https://api.youfy.com.br/core'),dev_instance=axios['create']({'baseURL':baseURL,'headers':{'Authorization':'Bearer\x20'+auth_token},'paramsSerializer':_0x517e25=>{return qs['stringify'](_0x517e25);}});axiosRetry(dev_instance,{'retries':0x5,'retryDelay':_0x225a8a=>_0x225a8a*0xbb8}),module[a10_0x24799d(0x6a)]=dev_instance;