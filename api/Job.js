function a3_0x3f7e(_0x1a0802,_0x33cae3){const _0xd8ee22=a3_0xd8ee();return a3_0x3f7e=function(_0x3f7ed1,_0x239d06){_0x3f7ed1=_0x3f7ed1-0x106;let _0x898011=_0xd8ee22[_0x3f7ed1];return _0x898011;},a3_0x3f7e(_0x1a0802,_0x33cae3);}const a3_0x4af876=a3_0x3f7e;(function(_0x3d3e3e,_0xec3645){const _0x538be2=a3_0x3f7e,_0x5375d6=_0x3d3e3e();while(!![]){try{const _0x3da550=-parseInt(_0x538be2(0x11e))/0x1*(parseInt(_0x538be2(0x10b))/0x2)+parseInt(_0x538be2(0x123))/0x3*(parseInt(_0x538be2(0x11c))/0x4)+parseInt(_0x538be2(0x117))/0x5+parseInt(_0x538be2(0x113))/0x6+-parseInt(_0x538be2(0x121))/0x7*(-parseInt(_0x538be2(0x108))/0x8)+parseInt(_0x538be2(0x11a))/0x9*(-parseInt(_0x538be2(0x122))/0xa)+parseInt(_0x538be2(0x10e))/0xb*(parseInt(_0x538be2(0x116))/0xc);if(_0x3da550===_0xec3645)break;else _0x5375d6['push'](_0x5375d6['shift']());}catch(_0x37bf8f){_0x5375d6['push'](_0x5375d6['shift']());}}}(a3_0xd8ee,0x711d5));const api=require(a3_0x4af876(0x107)),{APIError}=require(a3_0x4af876(0x125)),Utils=require(a3_0x4af876(0x114)),JobMock=require(a3_0x4af876(0x111));class Job{static async[a3_0x4af876(0x10d)](_0x1bd75c){const _0x3d2098=a3_0x4af876;try{const _0x1b91d9=await api[_0x3d2098(0x112)](_0x3d2098(0x115)+_0x1bd75c);return _0x1b91d9[_0x3d2098(0x11f)];}catch(_0x3dd611){throw new APIError('[Fail\x20to\x20request\x20job]:\x20',_0x3dd611);}}static async[a3_0x4af876(0x11d)](_0x891489,_0x358ca1){const _0x1dcc98=a3_0x4af876;try{const _0x2ae415=await api[_0x1dcc98(0x127)]('jobs/'+_0x891489+_0x1dcc98(0x10a),{'bot_id':_0x358ca1});return _0x2ae415['data']||{};}catch(_0x45001d){throw new APIError(_0x1dcc98(0x126),_0x45001d);}}static async['create'](_0x30e71b){const _0x24c1af=a3_0x4af876;try{const _0x48b6e8=await api[_0x24c1af(0x124)](_0x24c1af(0x10c),{'status':_0x24c1af(0x118),'attempts':0x0,'requested_at':new Date(),..._0x30e71b});return _0x48b6e8[_0x24c1af(0x11f)]||{};}catch(_0x74a5e4){throw new APIError('[Fail\x20to\x20request\x20create\x20job]:\x20',_0x74a5e4);}}static async[a3_0x4af876(0x10f)](_0x41558d,_0x3ef4b6,_0x26f280){const _0x1f4593=a3_0x4af876;try{const _0xed6660=await api[_0x1f4593(0x127)](_0x1f4593(0x115)+_0x41558d+'/'+_0x3ef4b6,{'error':_0x26f280});return _0xed6660[_0x1f4593(0x11f)]||{};}catch(_0x4bcc5b){throw new APIError(_0x1f4593(0x110)+_0x3ef4b6+']:\x20',_0x4bcc5b);}}static async[a3_0x4af876(0x120)](_0x539593,_0x2da8d8){const _0x4f242d=a3_0x4af876;try{const _0x3828a7=await api[_0x4f242d(0x127)](_0x4f242d(0x115)+_0x539593,_0x2da8d8);return _0x3828a7['data']||{};}catch(_0x252c1b){throw new APIError(_0x4f242d(0x11b),_0x252c1b);}}static async['addWarn'](_0x28341e,_0x1c5e54){const _0x1aab98=a3_0x4af876;try{const _0x51bf3f=await api[_0x1aab98(0x124)](_0x1aab98(0x115)+_0x28341e+_0x1aab98(0x119),_0x1c5e54);return _0x51bf3f[_0x1aab98(0x11f)]||{};}catch(_0x13bd40){throw new APIError(_0x1aab98(0x128),_0x13bd40);}}}module[a3_0x4af876(0x109)]=Utils[a3_0x4af876(0x106)]()?Job:JobMock;function a3_0xd8ee(){const _0x1f6835=['13nBOPBr','data','update','337631JnMdWn','10beLISW','231303nzoUZE','post','../exceptions','[Fail\x20to\x20request\x20job\x20initialization]:\x20','put','[Fail\x20to\x20add\x20warnings\x20job]:\x20','isProduction','./instance','40YVIKZn','exports','/init','26874ADMhKx','jobs','fetch','1246685vUtCsB','updateStatus','[Fail\x20to\x20update\x20job\x20status\x20to\x20','./mocks/JobMock','get','2476416ithFuw','../sdk/Utils','jobs/','36GPTiUy','1038580PFCbVC','WORKING','/warnings','7154343ZHwIBG','[Fail\x20to\x20update\x20job]:\x20','12MaDrhg','init'];a3_0xd8ee=function(){return _0x1f6835;};return a3_0xd8ee();}