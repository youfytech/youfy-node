const a68_0x47763d=a68_0x2a1b;(function(_0x2b1013,_0x598290){const _0x90b65a=a68_0x2a1b,_0x496923=_0x2b1013();while(!![]){try{const _0x1216b2=parseInt(_0x90b65a(0x9e))/0x1+-parseInt(_0x90b65a(0x94))/0x2+parseInt(_0x90b65a(0x8f))/0x3*(-parseInt(_0x90b65a(0x87))/0x4)+parseInt(_0x90b65a(0x91))/0x5*(parseInt(_0x90b65a(0x9a))/0x6)+parseInt(_0x90b65a(0x9c))/0x7*(parseInt(_0x90b65a(0x7f))/0x8)+-parseInt(_0x90b65a(0x8b))/0x9*(parseInt(_0x90b65a(0x8c))/0xa)+-parseInt(_0x90b65a(0x7e))/0xb;if(_0x1216b2===_0x598290)break;else _0x496923['push'](_0x496923['shift']());}catch(_0x265e26){_0x496923['push'](_0x496923['shift']());}}}(a68_0x2fb7,0xd3985));const retry=require('async-retry'),logger=require('./Logger'),WorkObject=require('./WorkObject'),EventHandler=require('./EventHandler'),defaultOptions={'retries':0x2};class Performer extends EventHandler{constructor(_0x2d28fe,_0x1d04e3={}){const _0x2cbe04=a68_0x2a1b;super(),this[_0x2cbe04(0x9b)]=_0x2d28fe,this['opts']={...defaultOptions,..._0x1d04e3},this['retries']=_0x2d28fe[_0x2cbe04(0x80)][_0x2cbe04(0x99)](_0x2cbe04(0x82),this[_0x2cbe04(0x96)][_0x2cbe04(0x84)]);}async[a68_0x47763d(0x83)](_0x289caa,_0x11bdc2,_0x48a34c={'ignore_status':['DONE'],'no_done':![]}){const _0x98fc09=a68_0x47763d;if(!(_0x11bdc2 instanceof WorkObject)){const _0x65e963=_0x98fc09(0x8e);logger[_0x98fc09(0x93)](_0x65e963);throw new Error(_0x65e963);}if(_0x48a34c[_0x98fc09(0x86)][_0x98fc09(0x7c)](_0x11bdc2[_0x98fc09(0x98)]))return;try{await _0x11bdc2[_0x98fc09(0x97)]();const _0x907389=async(_0x1cb46a,_0x31cc25)=>{const _0x2c2a34=_0x98fc09;_0x31cc25&&await _0x11bdc2[_0x2c2a34(0x81)](_0x31cc25);try{await _0x289caa(_0x11bdc2,{'bail':_0x1cb46a,'attempts':_0x31cc25});}catch(_0x32993a){if(_0x32993a[_0x2c2a34(0x7d)]==='ValidationError'){_0x1cb46a(_0x32993a);return;}throw _0x32993a;}},_0x39a6c1=await retry(_0x907389,{'retries':this[_0x98fc09(0x84)],'onRetry':_0x11fa12=>console['error'](_0x11fa12)});return _0x48a34c['no_done']&&await _0x11bdc2[_0x98fc09(0x89)](),_0x39a6c1;}catch(_0x2f6e1f){_0x2f6e1f[_0x98fc09(0x7d)]==='ValidationError'?_0x48a34c['no_done']&&await _0x11bdc2[_0x98fc09(0x9d)](_0x2f6e1f):await _0x11bdc2[_0x98fc09(0x8d)](_0x2f6e1f);await this['dispatch'](_0x98fc09(0x90),_0x2f6e1f);if(_0x2f6e1f['name']===_0x98fc09(0x88))throw _0x2f6e1f;}}async[a68_0x47763d(0x8a)](_0x5ef112,_0x26b458){const _0x222bc0=a68_0x47763d;if(!Array[_0x222bc0(0x92)](_0x26b458))throw new Error(_0x222bc0(0x85));for(const _0xe8c560 of _0x26b458){await this[_0x222bc0(0x83)](_0x5ef112,_0xe8c560);}}}function a68_0x2a1b(_0x26b5ff,_0x567bf7){const _0x2fb773=a68_0x2fb7();return a68_0x2a1b=function(_0x2a1b86,_0x48a509){_0x2a1b86=_0x2a1b86-0x7c;let _0x3a6627=_0x2fb773[_0x2a1b86];return _0x3a6627;},a68_0x2a1b(_0x26b5ff,_0x567bf7);}module[a68_0x47763d(0x95)]=Performer;function a68_0x2fb7(){const _0x40ba16=['config','initRetry','object_retries','run','retries','workObjects\x20must\x20be\x20an\x20array','ignore_status','35452UngyMF','BreakError','done','forEach','4617Xeonrt','11490QiklOo','failed','Work\x20object\x20must\x20be\x20a\x20instance\x20of\x20WorkObject','105UQdxay','fail','10zmjyRw','isArray','error','182542gQdldh','exports','opts','init','status','get','3377748KZWhXG','context','7szySgl','notDone','1523018nZfpxc','includes','name','27281617aErLjC','13510552dYuYwi'];a68_0x2fb7=function(){return _0x40ba16;};return a68_0x2fb7();}