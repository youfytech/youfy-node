const a50_0x2348a0=a50_0x3191;function a50_0x3191(_0x310b24,_0x32ba37){const _0x5b4717=a50_0x5b47();return a50_0x3191=function(_0x3191db,_0x49b332){_0x3191db=_0x3191db-0x10c;let _0x4d5bfa=_0x5b4717[_0x3191db];return _0x4d5bfa;},a50_0x3191(_0x310b24,_0x32ba37);}(function(_0xafdd13,_0x2ff7ce){const _0x540c37=a50_0x3191,_0x52a3b2=_0xafdd13();while(!![]){try{const _0x26d9c6=parseInt(_0x540c37(0x110))/0x1*(parseInt(_0x540c37(0x113))/0x2)+-parseInt(_0x540c37(0x10d))/0x3*(-parseInt(_0x540c37(0x117))/0x4)+-parseInt(_0x540c37(0x116))/0x5*(-parseInt(_0x540c37(0x120))/0x6)+parseInt(_0x540c37(0x10f))/0x7*(-parseInt(_0x540c37(0x114))/0x8)+parseInt(_0x540c37(0x121))/0x9+parseInt(_0x540c37(0x11a))/0xa+-parseInt(_0x540c37(0x11b))/0xb;if(_0x26d9c6===_0x2ff7ce)break;else _0x52a3b2['push'](_0x52a3b2['shift']());}catch(_0x5eeb87){_0x52a3b2['push'](_0x52a3b2['shift']());}}}(a50_0x5b47,0x9ceb8));function a50_0x5b47(){const _0x256b40=['page_number','muted','39972izYJXF','8628354MsGMZD','Conveting\x20pdf\x20to\x20image...','384771QNLAHe','exports','8102031SPtaXl','4vOuRlW','magick','output_dir','11306DpvofR','8RbaXON','\x20convert\x20-quality\x20100\x20-density\x20300\x20-resize\x20900x\x20-background\x20white\x20-alpha\x20remove\x20-trim\x20+repage\x20','25YPfJjF','12ZIbQDn','.jpg','platform','6837050zrQuDF','3112197cbAnnj','replace','info'];a50_0x5b47=function(){return _0x256b40;};return a50_0x5b47();}const {resolve,basename,extname}=require('path'),{execSync}=require('child_process'),os=require('os'),logger=require('../sdk/Logger');module[a50_0x2348a0(0x10e)]=async function convertPDF(_0x49ac62,_0x462472={}){const _0x4bfbba=a50_0x2348a0;logger[_0x4bfbba(0x11d)](_0x4bfbba(0x10c));const _0x12e380={'output_dir':os['tmpdir'](),'page_number':0x1,..._0x462472};logger[_0x4bfbba(0x11f)](_0x4bfbba(0x112),_0x12e380[_0x4bfbba(0x112)]);const _0x4bd5ae=resolve(_0x12e380[_0x4bfbba(0x112)],basename(_0x49ac62)[_0x4bfbba(0x11c)](extname(_0x49ac62),_0x4bfbba(0x118))),_0x7cb482=_0x462472[_0x4bfbba(0x11e)]>0x0?_0x462472[_0x4bfbba(0x11e)]-0x1:0x0,_0x5dde17=process[_0x4bfbba(0x119)]==='win32'?_0x4bfbba(0x111):'';return execSync(_0x5dde17+_0x4bfbba(0x115)+_0x49ac62+'['+_0x7cb482+']\x20'+_0x4bd5ae),_0x4bd5ae;};