const a39_0x126ebe=a39_0x2e40;function a39_0x2e40(_0x899410,_0x487d0d){const _0x4b1f94=a39_0x4b1f();return a39_0x2e40=function(_0x2e4070,_0x29fde9){_0x2e4070=_0x2e4070-0x122;let _0x2b1fc2=_0x4b1f94[_0x2e4070];return _0x2b1fc2;},a39_0x2e40(_0x899410,_0x487d0d);}(function(_0x1b301f,_0x2f3101){const _0x2f3c44=a39_0x2e40,_0x1f4a70=_0x1b301f();while(!![]){try{const _0x4a56ca=parseInt(_0x2f3c44(0x128))/0x1*(-parseInt(_0x2f3c44(0x135))/0x2)+parseInt(_0x2f3c44(0x13b))/0x3*(-parseInt(_0x2f3c44(0x12b))/0x4)+-parseInt(_0x2f3c44(0x132))/0x5*(-parseInt(_0x2f3c44(0x133))/0x6)+parseInt(_0x2f3c44(0x12a))/0x7+parseInt(_0x2f3c44(0x124))/0x8+-parseInt(_0x2f3c44(0x12c))/0x9+parseInt(_0x2f3c44(0x123))/0xa;if(_0x4a56ca===_0x2f3101)break;else _0x1f4a70['push'](_0x1f4a70['shift']());}catch(_0x20280d){_0x1f4a70['push'](_0x1f4a70['shift']());}}}(a39_0x4b1f,0x24b0e));const logger=require('../sdk/Logger'),JobApi=require('../api/Job'),ErrorHelper=require('../helpers/Error');function a39_0x4b1f(){const _0x2d8c37=['2LOjkiW','JOB\x20DONE!','131180yQMjJD','4kQXguP','250560pYVHjk','hl_muted','exports','done','canceled','assign','637335HeXdfE','6mFdVbi','JOB\x20FAILED:','98710TOjlJo','updateStatus','...','Initializing\x20job\x20','\x20for\x20bot\x20','hl_error','558729NQtmsU','init','1749020BjKgtP','1135760RmsUWt','hl_success','muted','failed'];a39_0x4b1f=function(){return _0x2d8c37;};return a39_0x4b1f();}class JobHandler{constructor(_0x54a447){this['id']=_0x54a447;}async[a39_0x126ebe(0x122)](_0x4b335c){const _0x4ed273=a39_0x126ebe;logger[_0x4ed273(0x126)](_0x4ed273(0x138)+this['id']+_0x4ed273(0x139)+_0x4b335c+_0x4ed273(0x137));const _0x5bf9de=await JobApi[_0x4ed273(0x122)](this['id'],_0x4b335c);return Object[_0x4ed273(0x131)](this,_0x5bf9de),_0x5bf9de;}async[a39_0x126ebe(0x12f)](){const _0x33344f=a39_0x126ebe,_0x543d07=await JobApi[_0x33344f(0x136)](this['id'],_0x33344f(0x12f));return Object[_0x33344f(0x131)](this,_0x543d07),logger[_0x33344f(0x125)]('🎉',_0x33344f(0x129)),_0x543d07;}async[a39_0x126ebe(0x127)](_0x3b63a2){const _0x276c8b=a39_0x126ebe;logger[_0x276c8b(0x13a)]('💩',_0x276c8b(0x134),_0x3b63a2);const _0xf1c286=await JobApi[_0x276c8b(0x136)](this['id'],_0x276c8b(0x127),{'error':ErrorHelper['parse'](_0x3b63a2)});return Object[_0x276c8b(0x131)](this,_0xf1c286),_0xf1c286;}async[a39_0x126ebe(0x130)](){const _0x29cd25=a39_0x126ebe;logger[_0x29cd25(0x12d)]('🚫','JOB\x20CANCELED');const _0x5c6184=await JobApi[_0x29cd25(0x136)](this['id'],_0x29cd25(0x130));return Object[_0x29cd25(0x131)](this,_0x5c6184),_0x5c6184;}}module[a39_0x126ebe(0x12e)]=JobHandler;