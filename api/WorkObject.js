function a9_0x2530(_0x192c35,_0x367a87){const _0x524933=a9_0x5249();return a9_0x2530=function(_0x253093,_0x40f0ac){_0x253093=_0x253093-0x14d;let _0x35c268=_0x524933[_0x253093];return _0x35c268;},a9_0x2530(_0x192c35,_0x367a87);}function a9_0x5249(){const _0x3a3ea4=['failed','[Fail\x20to\x20request\x20init\x20work\x20object]:\x20','bulkCreate','[Fail\x20to\x20request\x20not\x20done\x20work\x20object]:\x20','9dUDzYD','279RFAqbe','948960yLjQkv','\x20work\x20objects]:\x20','[Fail\x20to\x20request\x20create\x20work\x20object]:\x20','460928SafRnn','findOrCreate','work-objects','654423AnuDxs','1049194GhDrRB','60590ypMYfO','[Fail\x20to\x20request\x20done\x20work\x20object]:\x20','exports','data','isProduction','done','28fnykkK','create','[Fail\x20to\x20request\x20bulk\x20create\x20objects]:\x20','get','[Fail\x20to\x20request\x20update\x20work\x20object]:\x20','/failed','notDone','[Fail\x20to\x20request\x20failed\x20work\x20object]:\x20','post','1983752AiGRVD','init','[Fail\x20to\x20request\x20fetch\x20all\x20work\x20objects]:\x20','[Fail\x20to\x20request\x20find/create\x20work\x20object]:\x20','delete','work-objects/','[Fail\x20to\x20request\x20','/not_done','1108415Qeizbh'];a9_0x5249=function(){return _0x3a3ea4;};return a9_0x5249();}const a9_0x35c923=a9_0x2530;(function(_0x3ee10f,_0x10c79c){const _0x170d01=a9_0x2530,_0x4052e6=_0x3ee10f();while(!![]){try{const _0x45a9a2=parseInt(_0x170d01(0x164))/0x1+-parseInt(_0x170d01(0x165))/0x2+parseInt(_0x170d01(0x15c))/0x3*(-parseInt(_0x170d01(0x161))/0x4)+-parseInt(_0x170d01(0x157))/0x5+parseInt(_0x170d01(0x15e))/0x6+parseInt(_0x170d01(0x16c))/0x7*(parseInt(_0x170d01(0x14f))/0x8)+-parseInt(_0x170d01(0x15d))/0x9*(parseInt(_0x170d01(0x166))/0xa);if(_0x45a9a2===_0x10c79c)break;else _0x4052e6['push'](_0x4052e6['shift']());}catch(_0x57e57b){_0x4052e6['push'](_0x4052e6['shift']());}}}(a9_0x5249,0x8016e));const api=require('./instance'),{APIError}=require('../exceptions'),Utils=require('../sdk/Utils'),WorkObjectMock=require('./mocks/WorkObjectMock');class WorkObject{static async['fetchAll'](_0x333f04,_0xa69369={}){const _0xff6ba8=a9_0x2530;try{const _0x32a933=await api[_0xff6ba8(0x16f)](_0xff6ba8(0x163),{'params':{'bot_id':_0x333f04,..._0xa69369}});return _0x32a933[_0xff6ba8(0x169)]||{};}catch(_0x366918){throw new APIError(_0xff6ba8(0x151),_0x366918);}}static async[a9_0x35c923(0x162)](_0x21cc1e,_0x3ca15b){const _0x140bc5=a9_0x35c923;try{const _0x3900be=await api[_0x140bc5(0x14e)](_0x140bc5(0x154)+_0x21cc1e,_0x3ca15b);return _0x3900be['data']||{};}catch(_0x5f2cd4){throw new APIError(_0x140bc5(0x152),_0x5f2cd4);}}static async[a9_0x35c923(0x16d)](_0x2620cb){const _0x8d5c09=a9_0x35c923;try{const _0x50d1c2=await api[_0x8d5c09(0x14e)](_0x8d5c09(0x163),_0x2620cb);return _0x50d1c2[_0x8d5c09(0x169)]||{};}catch(_0x37c3a6){throw new APIError(_0x8d5c09(0x160),_0x37c3a6);}}static async[a9_0x35c923(0x15a)](_0x128578){const _0xe9ceb2=a9_0x35c923;try{const _0x164cc8=Array['isArray'](_0x128578)?_0x128578:[_0x128578],_0x4b9e87=await api[_0xe9ceb2(0x14e)]('work-objects',_0x164cc8);return _0x4b9e87['data']||[];}catch(_0x4f6fc8){throw new APIError(_0xe9ceb2(0x16e),_0x4f6fc8);}}static async[a9_0x35c923(0x150)](_0x4fa15a){const _0x311c32=a9_0x35c923;try{const _0x272d83=await api[_0x311c32(0x14e)](_0x311c32(0x154)+_0x4fa15a+'/init');return _0x272d83[_0x311c32(0x169)]||{};}catch(_0x424084){throw new APIError(_0x311c32(0x159),_0x424084);}}static async[a9_0x35c923(0x16b)](_0x13cf47,_0xb74295){const _0xf934f=a9_0x35c923;try{const _0x591eee=await api[_0xf934f(0x14e)]('work-objects/'+_0x13cf47+'/done',_0xb74295);return _0x591eee['data']||{};}catch(_0x43d194){throw new APIError(_0xf934f(0x167),_0x43d194);}}static async[a9_0x35c923(0x172)](_0x3b1c1e,_0x19fbc3){const _0x4cbcd8=a9_0x35c923;try{const _0x561b3b=await api[_0x4cbcd8(0x14e)]('work-objects/'+_0x3b1c1e+_0x4cbcd8(0x156),_0x19fbc3);return _0x561b3b[_0x4cbcd8(0x169)]||{};}catch(_0x27e14d){throw new APIError(_0x4cbcd8(0x15b),_0x27e14d);}}static async[a9_0x35c923(0x158)](_0x185017,_0x21277a){const _0x513dbf=a9_0x35c923;try{const _0x165aab=await api['post']('work-objects/'+_0x185017+_0x513dbf(0x171),_0x21277a);return _0x165aab[_0x513dbf(0x169)]||{};}catch(_0x1be160){throw new APIError(_0x513dbf(0x14d),_0x1be160);}}static async['update'](_0x4b8524,_0x529b3f){const _0x1d4d55=a9_0x35c923;try{const _0x2632d0=await api['put'](_0x1d4d55(0x154)+_0x4b8524,_0x529b3f);return _0x2632d0['data']||{};}catch(_0x9e52e5){throw new APIError(_0x1d4d55(0x170),_0x9e52e5);}}static async[a9_0x35c923(0x153)](_0x596bd5){const _0x5604ce=a9_0x35c923;try{const _0x1cdeba=await api[_0x5604ce(0x153)](_0x5604ce(0x154)+_0x596bd5);return _0x1cdeba[_0x5604ce(0x169)]||{};}catch(_0x39c5f4){throw new APIError('[Fail\x20to\x20request\x20delete\x20work\x20object]:\x20',_0x39c5f4);}}static async['findByStatus'](_0x3ee9fe,_0x172c2e){const _0x4229b2=a9_0x35c923;try{const _0x575730=await api[_0x4229b2(0x16f)]('work-objects/'+_0x3ee9fe+'/'+_0x172c2e);return _0x575730[_0x4229b2(0x169)]||{};}catch(_0x17f8cc){throw new APIError(_0x4229b2(0x155)+_0x172c2e+_0x4229b2(0x15f),_0x17f8cc);}}}module[a9_0x35c923(0x168)]=Utils[a9_0x35c923(0x16a)]()?WorkObject:WorkObjectMock;