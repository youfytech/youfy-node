const a3_0x57617c=a3_0x2e2d;function a3_0x2e2d(_0x4871b0,_0xb74f3e){const _0x55d0c7=a3_0x55d0();return a3_0x2e2d=function(_0x2e2dad,_0x47a8c7){_0x2e2dad=_0x2e2dad-0xb9;let _0x1602bd=_0x55d0c7[_0x2e2dad];return _0x1602bd;},a3_0x2e2d(_0x4871b0,_0xb74f3e);}function a3_0x55d0(){const _0x470844=['[Fail\x20to\x20update\x20job\x20status\x20to\x20','2509206pfTKQc','updateStatus','put','/init','[Fail\x20to\x20request\x20job]:\x20','9mPcEor','[Fail\x20to\x20add\x20warnings\x20job]:\x20','fetch','60Xrkkzs','update','2175926iLoSiB','[Fail\x20to\x20request\x20create\x20job]:\x20','exports',']:\x20','jobs/','/warnings','addWarn','3328824wnAhVd','data','[Fail\x20to\x20update\x20job]:\x20','3870220kzzHhG','18vDEaOJ','24543PTPwFF','WORKING','init','isProduction','610790edaakm','541877rmzlbV'];a3_0x55d0=function(){return _0x470844;};return a3_0x55d0();}(function(_0x580fb1,_0x338af2){const _0x3af211=a3_0x2e2d,_0x1b32b6=_0x580fb1();while(!![]){try{const _0x22390e=-parseInt(_0x3af211(0xc8))/0x1+parseInt(_0x3af211(0xd4))/0x2+parseInt(_0x3af211(0xc3))/0x3*(-parseInt(_0x3af211(0xd2))/0x4)+-parseInt(_0x3af211(0xc7))/0x5+-parseInt(_0x3af211(0xc2))/0x6*(-parseInt(_0x3af211(0xca))/0x7)+-parseInt(_0x3af211(0xbe))/0x8+-parseInt(_0x3af211(0xcf))/0x9*(parseInt(_0x3af211(0xc1))/0xa);if(_0x22390e===_0x338af2)break;else _0x1b32b6['push'](_0x1b32b6['shift']());}catch(_0x1910c3){_0x1b32b6['push'](_0x1b32b6['shift']());}}}(a3_0x55d0,0x8c016));const api=require('./instance'),{APIError}=require('../exceptions'),Utils=require('../sdk/Utils'),JobMock=require('./mocks/JobMock');class Job{static async[a3_0x57617c(0xd1)](_0x12f22a){const _0x4f7db2=a3_0x57617c;try{const _0x1ffe59=await api['get'](_0x4f7db2(0xbb)+_0x12f22a);return _0x1ffe59[_0x4f7db2(0xbf)];}catch(_0x35e6a5){throw new APIError(_0x4f7db2(0xce),_0x35e6a5);}}static async[a3_0x57617c(0xc5)](_0x169644,_0x13485f){const _0x4a3433=a3_0x57617c;try{const _0x1635c8=await api[_0x4a3433(0xcc)](_0x4a3433(0xbb)+_0x169644+_0x4a3433(0xcd),{'bot_id':_0x13485f});return _0x1635c8[_0x4a3433(0xbf)]||{};}catch(_0x33be2d){throw new APIError('[Fail\x20to\x20request\x20job\x20initialization]:\x20',_0x33be2d);}}static async['create'](_0x3703ec){const _0x35c4b7=a3_0x57617c;try{const _0x1ffd31=await api['post']('jobs',{'status':_0x35c4b7(0xc4),'attempts':0x0,'requested_at':new Date(),..._0x3703ec});return _0x1ffd31[_0x35c4b7(0xbf)]||{};}catch(_0x47f62d){throw new APIError(_0x35c4b7(0xd5),_0x47f62d);}}static async[a3_0x57617c(0xcb)](_0x51a371,_0x3d1e3f,_0x36019f){const _0xd27b97=a3_0x57617c;try{const _0x201f80=await api[_0xd27b97(0xcc)]('jobs/'+_0x51a371+'/'+_0x3d1e3f,{'error':_0x36019f});return _0x201f80[_0xd27b97(0xbf)]||{};}catch(_0x5a4494){throw new APIError(_0xd27b97(0xc9)+_0x3d1e3f+_0xd27b97(0xba),_0x5a4494);}}static async[a3_0x57617c(0xd3)](_0x348386,_0x1edcc1){const _0x155daa=a3_0x57617c;try{const _0x5c24da=await api[_0x155daa(0xcc)]('jobs/'+_0x348386,_0x1edcc1);return _0x5c24da['data']||{};}catch(_0x24911c){throw new APIError(_0x155daa(0xc0),_0x24911c);}}static async[a3_0x57617c(0xbd)](_0x53d4c5,_0x4b48fb){const _0x512437=a3_0x57617c;try{const _0x3de445=await api['post'](_0x512437(0xbb)+_0x53d4c5+_0x512437(0xbc),_0x4b48fb);return _0x3de445[_0x512437(0xbf)]||{};}catch(_0x21ed8f){throw new APIError(_0x512437(0xd0),_0x21ed8f);}}}module[a3_0x57617c(0xb9)]=Utils[a3_0x57617c(0xc6)]()?Job:JobMock;