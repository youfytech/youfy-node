function a10_0x22d2(){const _0xe8728f=['4231828KKgULT','2000VMvrUG','stringify','463862GsAAlX','60NJUcjq','742662yzDlku','11052jAGpJK','API_URL','4tczcuo','get','699504TUTQtJ','Bearer\x20','API_TOKEN','15548220TgZwzW','2046560QcYvGb','https://api.youfy.com.br/core'];a10_0x22d2=function(){return _0xe8728f;};return a10_0x22d2();}const a10_0x4fc918=a10_0x4c0b;function a10_0x4c0b(_0x14fcfd,_0x55d229){const _0x22d2e9=a10_0x22d2();return a10_0x4c0b=function(_0x4c0b2a,_0x1c0f14){_0x4c0b2a=_0x4c0b2a-0xfb;let _0x537d22=_0x22d2e9[_0x4c0b2a];return _0x537d22;},a10_0x4c0b(_0x14fcfd,_0x55d229);}(function(_0x385baa,_0x2e6d8c){const _0x4ec5ab=a10_0x4c0b,_0x29c326=_0x385baa();while(!![]){try{const _0x4409c5=parseInt(_0x4ec5ab(0x109))/0x1+-parseInt(_0x4ec5ab(0xfc))/0x2*(parseInt(_0x4ec5ab(0xfe))/0x3)+parseInt(_0x4ec5ab(0x104))/0x4+parseInt(_0x4ec5ab(0x102))/0x5+parseInt(_0x4ec5ab(0x108))/0x6*(parseInt(_0x4ec5ab(0x107))/0x7)+parseInt(_0x4ec5ab(0x105))/0x8*(-parseInt(_0x4ec5ab(0x10a))/0x9)+-parseInt(_0x4ec5ab(0x101))/0xa;if(_0x4409c5===_0x2e6d8c)break;else _0x29c326['push'](_0x29c326['shift']());}catch(_0x4f3373){_0x29c326['push'](_0x29c326['shift']());}}}(a10_0x22d2,0x84eb1));const axios=require('axios'),qs=require('qs'),axiosRetry=require('axios-retry'),Config=require('../sdk/Config'),auth_token=Config[a10_0x4fc918(0xfd)](a10_0x4fc918(0x100)),baseURL=Config[a10_0x4fc918(0xfd)](a10_0x4fc918(0xfb),a10_0x4fc918(0x103)),dev_instance=axios['create']({'baseURL':baseURL,'headers':{'Authorization':a10_0x4fc918(0xff)+auth_token},'paramsSerializer':_0x10ac0e=>{const _0xf0eb38=a10_0x4fc918;return qs[_0xf0eb38(0x106)](_0x10ac0e);}});axiosRetry(dev_instance,{'retries':0x5,'retryDelay':_0x2e34aa=>_0x2e34aa*0xbb8}),module['exports']=dev_instance;