function a38_0x1ec7(){const _0x4cb110=['281166omJFrZ','152730gvGTXw','119TgWnRH','job_retries','499692IxbHeq','run','exports','garbage','4ccKwBP','error','input_data','getResume','948135RPcjbu','config','isProduction','8bVKgRT','4289616BSZMFQ','onRetry','clear','bot','1280772qDymSL','table','bind','find','80wLPAbv','job','get','7803664cQCuxy','job-','22eyqjCY','[GARBAGE\x20ERROR\x20ON\x20RETRY]'];a38_0x1ec7=function(){return _0x4cb110;};return a38_0x1ec7();}const a38_0x883ab5=a38_0x16ea;function a38_0x16ea(_0x2a95c4,_0x2176db){const _0x1ec7a4=a38_0x1ec7();return a38_0x16ea=function(_0x16eaa6,_0x67e022){_0x16eaa6=_0x16eaa6-0x1e8;let _0x469505=_0x1ec7a4[_0x16eaa6];return _0x469505;},a38_0x16ea(_0x2a95c4,_0x2176db);}(function(_0x1a023c,_0x2f9591){const _0x349911=a38_0x16ea,_0x56eb75=_0x1a023c();while(!![]){try{const _0x34be88=parseInt(_0x349911(0x200))/0x1+parseInt(_0x349911(0x1fb))/0x2*(parseInt(_0x349911(0x1f0))/0x3)+parseInt(_0x349911(0x1f4))/0x4*(-parseInt(_0x349911(0x1f8))/0x5)+-parseInt(_0x349911(0x1ec))/0x6*(-parseInt(_0x349911(0x1ee))/0x7)+-parseInt(_0x349911(0x1e8))/0x8+-parseInt(_0x349911(0x1ed))/0x9*(parseInt(_0x349911(0x204))/0xa)+-parseInt(_0x349911(0x1ea))/0xb*(parseInt(_0x349911(0x1fc))/0xc);if(_0x34be88===_0x2f9591)break;else _0x56eb75['push'](_0x56eb75['shift']());}catch(_0x55d260){_0x56eb75['push'](_0x56eb75['shift']());}}}(a38_0x1ec7,0xb1b4c));const retry=require('async-retry'),Messenger=require('../sdk/Messenger'),DataContext=require('../sdk/DataContext'),DataState=require('../sdk/DataState'),GarbageCollector=require('../sdk/GarbageCollector'),ObjectManager=require('../sdk/ObjectManager'),Utils=require('../sdk/Utils');class BotHandler{constructor(_0x22a3a4,{garbage:_0x381b4c}){const _0x1e74e2=a38_0x16ea;this[_0x1e74e2(0x205)]=_0x22a3a4,this[_0x1e74e2(0x1ff)]=_0x22a3a4[_0x1e74e2(0x1ff)]||{'settings':[]},this[_0x1e74e2(0x1f3)]=_0x381b4c||new GarbageCollector();}async[a38_0x883ab5(0x1f1)](_0x4fcf1a){const _0x2aeb66=a38_0x883ab5,_0x216306=this['bot']['settings'][_0x2aeb66(0x203)](_0x59cb3b=>_0x59cb3b['id']===_0x2aeb66(0x1f9))||{},_0x70e65=this['job'][_0x2aeb66(0x1f6)]||{},_0x380921=new DataContext(_0x216306['value'],{'readonly':!![]}),_0x51f472=new DataState(_0x2aeb66(0x1e9)+this[_0x2aeb66(0x205)]['id']),_0x4a2c9c=new Messenger(this[_0x2aeb66(0x205)]),_0x5f4f55={'garbage':this['garbage'],'state':_0x51f472,'bot':new DataContext(this[_0x2aeb66(0x1ff)],{'readonly':!![]}),'job':new DataContext(this['job'],{'readonly':!![]}),'messenger':_0x4a2c9c,'msg':_0x4a2c9c,'config':_0x380921,'inputData':new DataContext(_0x70e65,{'readonly':!![]})};await retry(async(_0x644842,_0x5c3d36)=>{await _0x4fcf1a(_0x5f4f55,{'bail':_0x644842,'attempts':_0x5c3d36});},{'retries':_0x380921[_0x2aeb66(0x206)](_0x2aeb66(0x1ef),0x2),'onRetry':this[_0x2aeb66(0x1fd)][_0x2aeb66(0x202)](this)});if(!Utils[_0x2aeb66(0x1fa)]()){const _0x50ac86=new ObjectManager(_0x5f4f55),_0x416c9c=await _0x50ac86[_0x2aeb66(0x1f7)]();console[_0x2aeb66(0x201)](_0x416c9c);}}['onRetry'](_0x3ae92f){const _0x2def59=a38_0x883ab5;try{console[_0x2def59(0x1f5)](_0x3ae92f),this[_0x2def59(0x1f3)][_0x2def59(0x1fe)]();}catch(_0x39bfab){console['log'](_0x2def59(0x1eb),_0x39bfab);}}}module[a38_0x883ab5(0x1f2)]=BotHandler;