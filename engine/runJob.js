function a29_0x20b8(_0x3ba70a,_0x331866){const _0x58552b=a29_0x5855();return a29_0x20b8=function(_0x20b8ba,_0x3536c1){_0x20b8ba=_0x20b8ba-0xae;let _0x358ea1=_0x58552b[_0x20b8ba];return _0x358ea1;},a29_0x20b8(_0x3ba70a,_0x331866);}const a29_0x14e687=a29_0x20b8;function a29_0x5855(){const _0x5c6f53=['send','bot_config','exports','device_id','3sGRbua','Elapsed\x20time','11aCuaKo','694501uYCGke','time','2gtCtxP','failed','infinite','onClean','12219273zDeEKp','title','company_id','job_id','2830664dHmaeY','3886650qjXnoM','clear','43749312xiWyhz','25dhjUaF','bot_id','configureScope','muted','97363zbmuFH','703434HcPIZe','setTag','928rwhNST','canceled','WORKING','errorHandler.js'];a29_0x5855=function(){return _0x5c6f53;};return a29_0x5855();}(function(_0x2550e3,_0x18b62c){const _0x5efeb3=a29_0x20b8,_0x12b933=_0x2550e3();while(!![]){try{const _0x19be97=-parseInt(_0x5efeb3(0xb7))/0x1*(-parseInt(_0x5efeb3(0xb9))/0x2)+parseInt(_0x5efeb3(0xb4))/0x3*(parseInt(_0x5efeb3(0xc1))/0x4)+-parseInt(_0x5efeb3(0xc5))/0x5*(-parseInt(_0x5efeb3(0xca))/0x6)+-parseInt(_0x5efeb3(0xc9))/0x7*(-parseInt(_0x5efeb3(0xcc))/0x8)+parseInt(_0x5efeb3(0xbd))/0x9+-parseInt(_0x5efeb3(0xc2))/0xa+-parseInt(_0x5efeb3(0xb6))/0xb*(parseInt(_0x5efeb3(0xc4))/0xc);if(_0x19be97===_0x18b62c)break;else _0x12b933['push'](_0x12b933['shift']());}catch(_0x283eca){_0x12b933['push'](_0x12b933['shift']());}}}(a29_0x5855,0xe1d86),require('./global'),require('./errorHandler.js'));const BotHandler=require('../handlers/BotHandler'),JobHandler=require('../handlers/JobHandler'),Sentry=require('../helpers/Sentry'),GarbageCollector=require('../sdk/GarbageCollector'),logger=require('../sdk/Logger'),{fork}=require('child_process'),{resolve}=require('path');module[a29_0x14e687(0xb2)]=async({job_id:_0x2416cd,bot_id:_0x4792a5,botFn:_0x1ee1ab})=>{const _0x2d784c=a29_0x14e687,_0x3a28=new GarbageCollector();Sentry['configureScope'](_0x520824=>{const _0x3eeb73=a29_0x20b8;_0x520824[_0x3eeb73(0xcb)](_0x3eeb73(0xc0),_0x2416cd);});const _0x179ad4=new JobHandler(_0x2416cd);try{const _0x4706b8=await _0x179ad4['init'](_0x4792a5);Sentry[_0x2d784c(0xc7)](_0x57ef26=>{const _0x491aae=_0x2d784c;_0x57ef26[_0x491aae(0xcb)]('device_id',_0x4706b8[_0x491aae(0xb3)]),_0x57ef26['setTag'](_0x491aae(0xbf),_0x4706b8[_0x491aae(0xbf)]),_0x57ef26[_0x491aae(0xcb)](_0x491aae(0xc6),_0x4706b8[_0x491aae(0xc6)]),_0x57ef26[_0x491aae(0xcb)](_0x491aae(0xbe),_0x4706b8[_0x491aae(0xbe)]);});const _0x5ab917=(_0x3bb3b4,_0x2f5df9='Unknown.\x20Uncaught\x20exception\x20maybe.')=>{const _0xd538a1=_0x2d784c;if(_0x179ad4['status']===_0xd538a1(0xae)){const _0x2da38e=fork(resolve(__dirname,_0xd538a1(0xaf)),{'detached':!![]});_0x2da38e[_0xd538a1(0xb0)]({'status':_0x3bb3b4,'error':_0x2f5df9,'job_id':_0x2416cd,'bot_id':_0x4792a5});}};_0x3a28[_0x2d784c(0xbc)](()=>_0x5ab917(_0x2d784c(0xcd)),'canceled'),_0x3a28['onClean'](()=>_0x5ab917(_0x2d784c(0xba)),'failed');const _0x2dbb59=new BotHandler(_0x4706b8,{'garbage':_0x3a28});console[_0x2d784c(0xb8)](_0x2d784c(0xb5));const _0x1f3be2=global[_0x2d784c(0xb1)]?.[_0x2d784c(0xbb)]||_0x2dbb59['infinity_jobs']||![];let _0x4fa1f9=!![];while(_0x4fa1f9){await _0x2dbb59['run'](_0x1ee1ab),_0x4fa1f9=_0x1f3be2,_0x1f3be2&&(_0x3a28[_0x2d784c(0xc3)](),logger[_0x2d784c(0xc8)]('restarting\x20job...'));}await _0x179ad4['done'](),console['timeEnd'](_0x2d784c(0xb5));}catch(_0x3f0b78){await _0x179ad4['failed'](_0x3f0b78),Sentry['captureException'](_0x3f0b78);}finally{await _0x3a28['clear']();}};