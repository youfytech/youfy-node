const a70_0x3f0cf6=a70_0x596f;function a70_0x596f(_0x9a213b,_0xc0f3ec){const _0x289dd2=a70_0x289d();return a70_0x596f=function(_0x596f54,_0x41daa4){_0x596f54=_0x596f54-0x70;let _0x34d018=_0x289dd2[_0x596f54];return _0x34d018;},a70_0x596f(_0x9a213b,_0xc0f3ec);}(function(_0x19ee9c,_0x1ef2b8){const _0xafdd87=a70_0x596f,_0x110a27=_0x19ee9c();while(!![]){try{const _0x5b563c=-parseInt(_0xafdd87(0x88))/0x1*(parseInt(_0xafdd87(0x7a))/0x2)+parseInt(_0xafdd87(0x84))/0x3*(parseInt(_0xafdd87(0x70))/0x4)+parseInt(_0xafdd87(0x81))/0x5+parseInt(_0xafdd87(0x98))/0x6+-parseInt(_0xafdd87(0x78))/0x7*(parseInt(_0xafdd87(0x92))/0x8)+parseInt(_0xafdd87(0x93))/0x9*(-parseInt(_0xafdd87(0x80))/0xa)+-parseInt(_0xafdd87(0x7d))/0xb;if(_0x5b563c===_0x1ef2b8)break;else _0x110a27['push'](_0x110a27['shift']());}catch(_0x5cc604){_0x110a27['push'](_0x110a27['shift']());}}}(a70_0x289d,0xd69ef));const WorkObjectApi=require(a70_0x3f0cf6(0x8c)),ErrorHelper=require(a70_0x3f0cf6(0x79)),logger=require(a70_0x3f0cf6(0x95));function a70_0x289d(){const _0x66126a=['parse','delete','update','fail','exports','1331463rDOcpU','../helpers/Error','2nSOdjT','Desconhecido!','set','1134892DfIijj','_dispatch','done','10XkXmmn','4644030yaQdGY','get','error','4564806HdSOxp','status','initRetry','finish','623597XKLgSo','save','assign','events','../api/WorkObject','attempts','destroy','retry','payload','\x22\x20event]','8DaCBAG','12630339JXamHS','failed','../sdk/Logger','[Error\x20to\x20dispatch\x20work\x20object\x20\x22','init','4494168DbckHZ','4LWDHYv','notDone','PENDING'];a70_0x289d=function(){return _0x66126a;};return a70_0x289d();}class WorkObject{constructor(_0x5d755e){const _0x28d468=a70_0x3f0cf6;this[_0x28d468(0x85)]=_0x28d468(0x72),Object[_0x28d468(0x8a)](this,_0x5d755e),this[_0x28d468(0x8b)]={};}[a70_0x3f0cf6(0x82)](_0x219a43,_0x519e41){const _0x226b42=a70_0x3f0cf6;return this[_0x226b42(0x90)][_0x219a43]||_0x519e41;}[a70_0x3f0cf6(0x7c)](_0x5551e9,_0x2f40e3){const _0x433e61=a70_0x3f0cf6;this[_0x433e61(0x90)][_0x5551e9]=_0x2f40e3;}async[a70_0x3f0cf6(0x75)](_0x39bf08){const _0x474505=a70_0x3f0cf6;Object[_0x474505(0x8a)](this['payload'],_0x39bf08),await this[_0x474505(0x89)]();}async[a70_0x3f0cf6(0x97)](){const _0x16cdc4=a70_0x3f0cf6,_0x3e4bb8=await WorkObjectApi['init'](this['id']);Object['assign'](this,_0x3e4bb8),await this['_dispatch'](_0x16cdc4(0x97));}async[a70_0x3f0cf6(0x86)](_0x5543fb){const _0x2d01e2=a70_0x3f0cf6;this[_0x2d01e2(0x8d)]=_0x5543fb,await this[_0x2d01e2(0x89)](),await this[_0x2d01e2(0x7e)](_0x2d01e2(0x8f));}async[a70_0x3f0cf6(0x7f)](){const _0x197478=a70_0x3f0cf6,_0x531422=await WorkObjectApi['done'](this['id'],{'payload':this[_0x197478(0x90)]});Object[_0x197478(0x8a)](this,_0x531422),await this[_0x197478(0x7e)](_0x197478(0x7f),_0x531422),await this[_0x197478(0x7e)](_0x197478(0x87));}async[a70_0x3f0cf6(0x71)](_0x1dded6){const _0x23cb33=a70_0x3f0cf6;logger['warn'](_0x1dded6);try{const _0x33ab24=await WorkObjectApi[_0x23cb33(0x71)](this['id'],{'error':ErrorHelper[_0x23cb33(0x73)](_0x1dded6||new Error(_0x23cb33(0x7b)))});return Object[_0x23cb33(0x8a)](this,_0x33ab24),await this[_0x23cb33(0x7e)]('not_done',_0x1dded6),await this[_0x23cb33(0x7e)](_0x23cb33(0x87)),_0x33ab24;}catch(_0x53f403){logger['warn'](_0x53f403);throw _0x53f403;}}async[a70_0x3f0cf6(0x94)](_0x454c92){const _0x395c03=a70_0x3f0cf6;logger['error'](_0x454c92);try{const _0x5c5d3b=await WorkObjectApi[_0x395c03(0x94)](this['id'],{'error':ErrorHelper[_0x395c03(0x73)](_0x454c92||new Error(_0x395c03(0x7b)))});return Object[_0x395c03(0x8a)](this,_0x5c5d3b),await this[_0x395c03(0x7e)](_0x395c03(0x76),_0x454c92),await this[_0x395c03(0x7e)](_0x395c03(0x87)),_0x5c5d3b;}catch(_0x21d243){logger[_0x395c03(0x83)](_0x21d243);throw _0x21d243;}}async[a70_0x3f0cf6(0x89)](){const _0x34252b=a70_0x3f0cf6,_0xc44392=await WorkObjectApi[_0x34252b(0x75)](this['id'],{'payload':this['payload'],'attempts':this['attempts']});Object[_0x34252b(0x8a)](this,_0xc44392),await this['_dispatch'](_0x34252b(0x89));}async['destroy'](){const _0x1cfbbf=a70_0x3f0cf6;await WorkObjectApi[_0x1cfbbf(0x74)](this['id']),await this[_0x1cfbbf(0x7e)](_0x1cfbbf(0x8e));}async['on'](_0x31ead8,_0x5cb47b){const _0x3903ff=a70_0x3f0cf6;this[_0x3903ff(0x8b)][_0x31ead8]=_0x5cb47b;}async[a70_0x3f0cf6(0x7e)](_0xd2382c,_0x3ad44b){const _0x2d17c8=a70_0x3f0cf6;try{typeof this['events'][_0xd2382c]==='function'&&await this[_0x2d17c8(0x8b)][_0xd2382c](_0x3ad44b);}catch(_0x27f7ad){logger[_0x2d17c8(0x83)](_0x2d17c8(0x96)+_0xd2382c+_0x2d17c8(0x91),_0x27f7ad);}}}module[a70_0x3f0cf6(0x77)]=WorkObject;