const a17_0xdb3883=a17_0x254e;function a17_0x254e(_0x429f46,_0xa095a6){const _0x18dcdb=a17_0x18dc();return a17_0x254e=function(_0x254e00,_0x4d4847){_0x254e00=_0x254e00-0x1da;let _0xaf7cb6=_0x18dcdb[_0x254e00];return _0xaf7cb6;},a17_0x254e(_0x429f46,_0xa095a6);}(function(_0x2f2f4a,_0xe7479b){const _0x4f82ab=a17_0x254e,_0x2446bc=_0x2f2f4a();while(!![]){try{const _0x44e201=parseInt(_0x4f82ab(0x1eb))/0x1+parseInt(_0x4f82ab(0x1e5))/0x2+parseInt(_0x4f82ab(0x1da))/0x3*(parseInt(_0x4f82ab(0x1dc))/0x4)+parseInt(_0x4f82ab(0x1de))/0x5+parseInt(_0x4f82ab(0x1e1))/0x6+-parseInt(_0x4f82ab(0x1ee))/0x7*(parseInt(_0x4f82ab(0x1f0))/0x8)+-parseInt(_0x4f82ab(0x1e9))/0x9*(parseInt(_0x4f82ab(0x1ed))/0xa);if(_0x44e201===_0xe7479b)break;else _0x2446bc['push'](_0x2446bc['shift']());}catch(_0x2c0cee){_0x2446bc['push'](_0x2446bc['shift']());}}}(a17_0x18dc,0x1d1be));function a17_0x18dc(){const _0x4d02cf=['7mRDFYc','get','288680yiWcRy','LOG_REQUESTS','453801FTZSdz','Starting\x20Request','4CpGKTp','parse','497125numyUm','stringify','interceptors','1098090oFCiau','https://api.youfy.com.br/core','create','exports','308656uJBqFK','request','log','API_URL','7641UZIpph','device_id','61398qCqLvy','getId','5820TZxPsZ'];a17_0x18dc=function(){return _0x4d02cf;};return a17_0x18dc();}const axios=require('axios'),qs=require('qs'),axiosRetry=require('axios-retry'),Device=require('../helpers/Device'),Config=require('../sdk/Config'),baseURL=Config[a17_0xdb3883(0x1ef)](a17_0xdb3883(0x1e8),a17_0xdb3883(0x1e2)),instance=axios[a17_0xdb3883(0x1e3)]({'baseURL':baseURL,'auth':{'username':Config[a17_0xdb3883(0x1ef)]('id'),'password':Config[a17_0xdb3883(0x1ef)](a17_0xdb3883(0x1ea),Device[a17_0xdb3883(0x1ec)]())},'paramsSerializer':_0x919e11=>{const _0x48c9fa=a17_0xdb3883;return qs[_0x48c9fa(0x1df)](_0x919e11);}});JSON[a17_0xdb3883(0x1dd)](process['env'][a17_0xdb3883(0x1f1)]||![])&&instance[a17_0xdb3883(0x1e0)][a17_0xdb3883(0x1e6)]['use'](_0x37104d=>{const _0x16fbc5=a17_0xdb3883;return console[_0x16fbc5(0x1e7)](_0x16fbc5(0x1db),JSON[_0x16fbc5(0x1df)](_0x37104d,null,0x2)),_0x37104d;});axiosRetry(instance,{'retries':0x5,'retryDelay':_0x495604=>_0x495604*0xbb8}),module[a17_0xdb3883(0x1e4)]=instance;