const a68_0x16b7b4=a68_0x3bfc;(function(_0x36a149,_0x561586){const _0x5c5195=a68_0x3bfc,_0x217405=_0x36a149();while(!![]){try{const _0x4f2da3=-parseInt(_0x5c5195(0x90))/0x1*(-parseInt(_0x5c5195(0x8c))/0x2)+-parseInt(_0x5c5195(0x7a))/0x3+parseInt(_0x5c5195(0x94))/0x4+parseInt(_0x5c5195(0x83))/0x5+parseInt(_0x5c5195(0x7f))/0x6*(parseInt(_0x5c5195(0x7d))/0x7)+parseInt(_0x5c5195(0x86))/0x8*(-parseInt(_0x5c5195(0x85))/0x9)+parseInt(_0x5c5195(0x99))/0xa;if(_0x4f2da3===_0x561586)break;else _0x217405['push'](_0x217405['shift']());}catch(_0x118676){_0x217405['push'](_0x217405['shift']());}}}(a68_0x100d,0x9c6a0));function a68_0x100d(){const _0x3e300b=['1889867IHTwEA','opts','6BsfYac','failed','retries','object_retries','6237900CgECTO','done','2317194iuyRzT','16OYkyBR','dispatch','context','includes','Work\x20object\x20must\x20be\x20a\x20instance\x20of\x20WorkObject','BreakError','10fQMxkH','error','fail','workObjects\x20must\x20be\x20an\x20array','37097BstrfQ','ValidationError','name','status','2318144PqHhut','no_done','forEach','exports','initRetry','28790KIERHj','config','init','get','isArray','3389571iFUZUp','ignore_status','DONE'];a68_0x100d=function(){return _0x3e300b;};return a68_0x100d();}function a68_0x3bfc(_0x2f4524,_0x10a229){const _0x100dd7=a68_0x100d();return a68_0x3bfc=function(_0x3bfcb3,_0x1d3253){_0x3bfcb3=_0x3bfcb3-0x76;let _0x2a9af9=_0x100dd7[_0x3bfcb3];return _0x2a9af9;},a68_0x3bfc(_0x2f4524,_0x10a229);}const retry=require('async-retry'),logger=require('./Logger'),WorkObject=require('./WorkObject'),EventHandler=require('./EventHandler'),defaultOptions={'retries':0x2};class Performer extends EventHandler{constructor(_0x1e5c7a,_0x12fc13={}){const _0x2eb03e=a68_0x3bfc;super(),this[_0x2eb03e(0x88)]=_0x1e5c7a,this[_0x2eb03e(0x7e)]={...defaultOptions,..._0x12fc13},this['retries']=_0x1e5c7a[_0x2eb03e(0x76)][_0x2eb03e(0x78)](_0x2eb03e(0x82),this['opts'][_0x2eb03e(0x81)]);}async['run'](_0x33d681,_0x2c5c9f,_0x1fe7b6={'ignore_status':[a68_0x16b7b4(0x7c)],'no_done':![]}){const _0x3e6cd3=a68_0x16b7b4;if(!(_0x2c5c9f instanceof WorkObject)){const _0x55fda3=_0x3e6cd3(0x8a);logger['error'](_0x55fda3);throw new Error(_0x55fda3);}if(_0x1fe7b6[_0x3e6cd3(0x7b)][_0x3e6cd3(0x89)](_0x2c5c9f[_0x3e6cd3(0x93)]))return;try{await _0x2c5c9f[_0x3e6cd3(0x77)]();const _0x38a75a=async(_0x24fd82,_0x3eb3b5)=>{const _0x32232f=_0x3e6cd3;_0x3eb3b5&&await _0x2c5c9f[_0x32232f(0x98)](_0x3eb3b5);try{await _0x33d681(_0x2c5c9f,{'bail':_0x24fd82,'attempts':_0x3eb3b5});}catch(_0x1b1bc9){if(_0x1b1bc9[_0x32232f(0x92)]===_0x32232f(0x91)){_0x24fd82(_0x1b1bc9);return;}throw _0x1b1bc9;}},_0x2722fa=await retry(_0x38a75a,{'retries':this['retries'],'onRetry':_0x11a337=>console[_0x3e6cd3(0x8d)](_0x11a337)});return _0x1fe7b6[_0x3e6cd3(0x95)]&&await _0x2c5c9f[_0x3e6cd3(0x84)](),_0x2722fa;}catch(_0x23cc0e){_0x23cc0e[_0x3e6cd3(0x92)]===_0x3e6cd3(0x91)?await _0x2c5c9f['notDone'](_0x23cc0e):await _0x2c5c9f[_0x3e6cd3(0x80)](_0x23cc0e);await this[_0x3e6cd3(0x87)](_0x3e6cd3(0x8e),_0x23cc0e);if(_0x23cc0e[_0x3e6cd3(0x92)]===_0x3e6cd3(0x8b))throw _0x23cc0e;}}async[a68_0x16b7b4(0x96)](_0x20b042,_0x532b11,_0x2183c0={}){const _0x32783f=a68_0x16b7b4;if(!Array[_0x32783f(0x79)](_0x532b11))throw new Error(_0x32783f(0x8f));for(const _0x1fdd8b of _0x532b11){await this['run'](_0x20b042,_0x1fdd8b,_0x2183c0);}}}module[a68_0x16b7b4(0x97)]=Performer;