function a10_0x2cc8(){const _0x4f8b7b=['1458252QTljPv','367796nOQzpp','2334456sKUqup','get','Bearer\x20','888538LdbRlJ','28446880wSfEKv','72yimAab','create','API_TOKEN','167690VmCRPb','stringify','https://api.youfy.com.br/core','561295RhRAdp'];a10_0x2cc8=function(){return _0x4f8b7b;};return a10_0x2cc8();}const a10_0xaba7e7=a10_0x3281;(function(_0x376692,_0x4da48d){const _0x1c7a65=a10_0x3281,_0x734d07=_0x376692();while(!![]){try{const _0x36cdf6=-parseInt(_0x1c7a65(0x114))/0x1+-parseInt(_0x1c7a65(0x11f))/0x2+-parseInt(_0x1c7a65(0x11d))/0x3+parseInt(_0x1c7a65(0x11e))/0x4+parseInt(_0x1c7a65(0x119))/0x5*(-parseInt(_0x1c7a65(0x116))/0x6)+parseInt(_0x1c7a65(0x11c))/0x7+parseInt(_0x1c7a65(0x115))/0x8;if(_0x36cdf6===_0x4da48d)break;else _0x734d07['push'](_0x734d07['shift']());}catch(_0x4ed71b){_0x734d07['push'](_0x734d07['shift']());}}}(a10_0x2cc8,0xbf548));const axios=require('axios'),qs=require('qs'),axiosRetry=require('axios-retry'),Config=require('../sdk/Config'),auth_token=Config[a10_0xaba7e7(0x112)](a10_0xaba7e7(0x118)),baseURL=Config['get']('API_URL',a10_0xaba7e7(0x11b)),dev_instance=axios[a10_0xaba7e7(0x117)]({'baseURL':baseURL,'headers':{'Authorization':a10_0xaba7e7(0x113)+auth_token},'paramsSerializer':_0x37d803=>{const _0x47491a=a10_0xaba7e7;return qs[_0x47491a(0x11a)](_0x37d803);}});function a10_0x3281(_0xd2c2c9,_0x3bce14){const _0x2cc834=a10_0x2cc8();return a10_0x3281=function(_0x32815b,_0x21479e){_0x32815b=_0x32815b-0x112;let _0x8e27b=_0x2cc834[_0x32815b];return _0x8e27b;},a10_0x3281(_0xd2c2c9,_0x3bce14);}axiosRetry(dev_instance,{'retries':0x5,'retryDelay':_0x43b4da=>_0x43b4da*0xbb8}),module['exports']=dev_instance;