const a2_0x5090ae=a2_0x1b7b;(function(_0x381a04,_0x370131){const _0x11a2e4=a2_0x1b7b,_0x332443=_0x381a04();while(!![]){try{const _0x2ba5ea=-parseInt(_0x11a2e4(0x147))/0x1+parseInt(_0x11a2e4(0x13a))/0x2+-parseInt(_0x11a2e4(0x139))/0x3*(-parseInt(_0x11a2e4(0x13d))/0x4)+parseInt(_0x11a2e4(0x13c))/0x5*(-parseInt(_0x11a2e4(0x146))/0x6)+parseInt(_0x11a2e4(0x13f))/0x7*(-parseInt(_0x11a2e4(0x14d))/0x8)+parseInt(_0x11a2e4(0x153))/0x9*(parseInt(_0x11a2e4(0x14c))/0xa)+-parseInt(_0x11a2e4(0x142))/0xb;if(_0x2ba5ea===_0x370131)break;else _0x332443['push'](_0x332443['shift']());}catch(_0x4bdbca){_0x332443['push'](_0x332443['shift']());}}}(a2_0x5d19,0xbcc01));function a2_0x1b7b(_0x5cc4fc,_0x5c4f0f){const _0x5d199=a2_0x5d19();return a2_0x1b7b=function(_0x1b7bdb,_0x40324d){_0x1b7bdb=_0x1b7bdb-0x134;let _0x6c9efc=_0x5d199[_0x1b7bdb];return _0x6c9efc;},a2_0x1b7b(_0x5cc4fc,_0x5c4f0f);}const api=require('./instance'),{APIError}=require('../exceptions');class Database{constructor(_0x26d534){this['db']=_0x26d534;}async[a2_0x5090ae(0x150)](_0x21d45b={}){const _0x1480e7=a2_0x5090ae,{where:where={},order:_0x59e866,limit:_0x86e0d6,offset:_0x2e9fc4}=_0x21d45b,_0x234e71={};for(const _0x5b0330 in where){_0x234e71[_0x1480e7(0x135)+_0x5b0330]=where[_0x5b0330];}const _0x475fd8={..._0x234e71};try{const _0x47b1eb=await api[_0x1480e7(0x143)]('datasets/'+this['db']['id']+_0x1480e7(0x151),{'params':{'where':_0x475fd8,'order':_0x59e866,'limit':_0x86e0d6,'offset':_0x2e9fc4}});return _0x47b1eb[_0x1480e7(0x141)];}catch(_0x47adee){throw new APIError(_0x1480e7(0x13b),_0x47adee);}}async[a2_0x5090ae(0x154)](_0x14e17c){const _0x27d901=a2_0x5090ae;try{const _0x3d15e0=await api[_0x27d901(0x143)](_0x27d901(0x145)+_0x14e17c);return _0x3d15e0[_0x27d901(0x141)];}catch(_0x27a78f){throw new APIError(_0x27d901(0x14b),_0x27a78f);}}async[a2_0x5090ae(0x137)](_0xfb636a){const _0x14a2c9=a2_0x5090ae;try{const _0x223de3=await api['post'](_0x14a2c9(0x152),{'data':_0xfb636a,'db_id':this['db']['id']});return _0x223de3[_0x14a2c9(0x141)];}catch(_0x18c131){throw new APIError(_0x14a2c9(0x140),_0x18c131);}}async[a2_0x5090ae(0x148)](_0x1ad37f=[]){const _0x13884e=a2_0x5090ae;try{const _0x529176=_0x1ad37f[_0x13884e(0x14e)](_0xf5f6e0=>{return{'db_id':this['db']['id'],'data':_0xf5f6e0};}),_0x29a81a=await api[_0x13884e(0x14a)](_0x13884e(0x152),_0x529176);return _0x29a81a[_0x13884e(0x141)];}catch(_0x466736){throw new APIError(_0x13884e(0x134),_0x466736);}}async[a2_0x5090ae(0x14f)](_0x4e47b0,_0xa02088){const _0x59ecb1=a2_0x5090ae;try{const _0x36854d=await api[_0x59ecb1(0x138)]('datasets/'+_0x4e47b0,_0xa02088);return _0x36854d[_0x59ecb1(0x141)];}catch(_0x28ddca){throw new APIError('[Fail\x20to\x20request\x20to\x20update\x20a\x20dataset]:\x20',_0x28ddca);}}async['remove'](_0x5e119b){const _0xd1430e=a2_0x5090ae;try{const _0x8f7168=await api[_0xd1430e(0x144)]('datasets/'+_0x5e119b);return _0x8f7168[_0xd1430e(0x141)];}catch(_0x389d19){throw new APIError(_0xd1430e(0x136),_0x389d19);}}async['removeAll'](){const _0x35f15d=a2_0x5090ae;try{const _0x3ca424=await api['delete']('datasets/'+this['db']['id']+_0x35f15d(0x151));return _0x3ca424['data'];}catch(_0x352de9){throw new APIError(_0x35f15d(0x149),_0x352de9);}}}module[a2_0x5090ae(0x155)]=async(_0x6bb520,_0x50da0b={})=>{const _0x430ef8=a2_0x5090ae;try{const _0x4d8623=await api[_0x430ef8(0x143)](_0x430ef8(0x13e)+_0x6bb520),_0x33a78a=_0x4d8623['data']||{};return new Database(_0x33a78a,{..._0x50da0b});}catch(_0x223f42){throw new APIError('[Fail\x20to\x20request\x20db\x20'+_0x6bb520+']:',_0x223f42);}};function a2_0x5d19(){const _0x499543=['all','/all','datasets','279plCvsj','find','exports','[Fail\x20to\x20request\x20to\x20create\x20datasets]:\x20','data.','[Fail\x20to\x20request\x20to\x20remove\x20a\x20dataset]:\x20','create','put','2171862oLNhnH','2853032oqGhSo','[Fail\x20to\x20request\x20all\x20datasets]:\x20','1825eLyaip','4cAPbXe','dbs/','257572ommXtA','[Fail\x20to\x20request\x20to\x20create\x20a\x20dataset]:\x20','data','3787245TFelyz','get','delete','datasets/','17790kiWCkT','144579KKpXKP','bookCreate','[Fail\x20to\x20request\x20to\x20remove\x20all\x20datasets]:\x20','post','[Fail\x20to\x20request\x20a\x20dataset]:\x20','430460XcUJhv','248GPIngR','map','update'];a2_0x5d19=function(){return _0x499543;};return a2_0x5d19();}