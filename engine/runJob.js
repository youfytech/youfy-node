const a29_0x463863=a29_0x4c4f;(function(_0x1bcea2,_0x4d233d){const _0x29cc91=a29_0x4c4f,_0x44a6a5=_0x1bcea2();while(!![]){try{const _0x2227b6=parseInt(_0x29cc91(0x1ce))/0x1+-parseInt(_0x29cc91(0x1bc))/0x2+-parseInt(_0x29cc91(0x1b7))/0x3*(-parseInt(_0x29cc91(0x1b6))/0x4)+-parseInt(_0x29cc91(0x1b3))/0x5*(-parseInt(_0x29cc91(0x1c9))/0x6)+-parseInt(_0x29cc91(0x1c6))/0x7*(parseInt(_0x29cc91(0x1c0))/0x8)+parseInt(_0x29cc91(0x1be))/0x9*(-parseInt(_0x29cc91(0x1b1))/0xa)+-parseInt(_0x29cc91(0x1b0))/0xb;if(_0x2227b6===_0x4d233d)break;else _0x44a6a5['push'](_0x44a6a5['shift']());}catch(_0x4b2892){_0x44a6a5['push'](_0x44a6a5['shift']());}}}(a29_0x4977,0xce98f),require('./global'),require('./errorHandler.js'));const BotHandler=require('../handlers/BotHandler'),JobHandler=require('../handlers/JobHandler'),Sentry=require('../helpers/Sentry'),GarbageCollector=require('../sdk/GarbageCollector'),logger=require('../sdk/Logger'),{fork}=require('child_process'),{resolve}=require('path');module[a29_0x463863(0x1c3)]=async({job_id:_0x437848,bot_id:_0x191684,botFn:_0x214cd9})=>{const _0x49a2e2=a29_0x463863,_0x1fc036=new GarbageCollector();Sentry['configureScope'](_0x13b9d0=>{const _0x426d19=a29_0x4c4f;_0x13b9d0[_0x426d19(0x1cd)]('job_id',_0x437848);});const _0x4c0a0c=new JobHandler(_0x437848);try{const _0x282f6f=await _0x4c0a0c[_0x49a2e2(0x1c2)](_0x191684);Sentry[_0x49a2e2(0x1c7)](_0x11c256=>{const _0x3bd58b=_0x49a2e2;_0x11c256['setTag'](_0x3bd58b(0x1bb),_0x282f6f['device_id']),_0x11c256[_0x3bd58b(0x1cd)](_0x3bd58b(0x1af),_0x282f6f['company_id']),_0x11c256[_0x3bd58b(0x1cd)](_0x3bd58b(0x1b8),_0x282f6f[_0x3bd58b(0x1b8)]),_0x11c256[_0x3bd58b(0x1cd)](_0x3bd58b(0x1ba),_0x282f6f[_0x3bd58b(0x1ba)]);});const _0xe3b17a=(_0x26575a,_0xffa333=_0x49a2e2(0x1c1))=>{const _0x11fec0=_0x49a2e2;if(_0x4c0a0c[_0x11fec0(0x1cf)]===_0x11fec0(0x1bd)){const _0x1c0e6c=fork(resolve(__dirname,_0x11fec0(0x1ca)),{'detached':!![]});_0x1c0e6c[_0x11fec0(0x1d0)]({'status':_0x26575a,'error':_0xffa333,'job_id':_0x437848,'bot_id':_0x191684});}};_0x1fc036[_0x49a2e2(0x1cc)](()=>_0xe3b17a(_0x49a2e2(0x1bf)),_0x49a2e2(0x1bf)),_0x1fc036['onClean'](()=>_0xe3b17a(_0x49a2e2(0x1c5)),_0x49a2e2(0x1c5));const _0x76a6f4=new BotHandler(_0x282f6f,{'garbage':_0x1fc036}),_0x3ae5bb=global[_0x49a2e2(0x1b2)]?.[_0x49a2e2(0x1cb)]||_0x76a6f4['infinity_jobs']||![];let _0x293592=!![];while(_0x293592){await _0x76a6f4['run'](_0x214cd9),_0x293592=_0x3ae5bb,_0x3ae5bb&&(_0x1fc036['clear'](),logger[_0x49a2e2(0x1c4)](_0x49a2e2(0x1b4)));}await _0x4c0a0c[_0x49a2e2(0x1b5)]();}catch(_0xb03af){await _0x4c0a0c[_0x49a2e2(0x1c5)](_0xb03af),Sentry[_0x49a2e2(0x1c8)](_0xb03af);}finally{await _0x1fc036[_0x49a2e2(0x1b9)]();}};function a29_0x4c4f(_0x37b0ec,_0x240219){const _0x49777b=a29_0x4977();return a29_0x4c4f=function(_0x4c4f0d,_0x7d86da){_0x4c4f0d=_0x4c4f0d-0x1af;let _0x19a573=_0x49777b[_0x4c4f0d];return _0x19a573;},a29_0x4c4f(_0x37b0ec,_0x240219);}function a29_0x4977(){const _0x44e5dc=['bot_config','4615285TnnukI','restarting\x20job...','done','20516strbgf','759FbfNZF','bot_id','clear','title','device_id','1391236OdWLPL','WORKING','5695173xZocOo','canceled','2437432VkREQL','Unknown.\x20Uncaught\x20exception\x20maybe.','init','exports','muted','failed','7CFDSZf','configureScope','captureException','6mMHUZK','errorHandler.js','infinite','onClean','setTag','743134SqOXIa','status','send','company_id','5329621swRGlj','10ojSAll'];a29_0x4977=function(){return _0x44e5dc;};return a29_0x4977();}