const a50_0x5a1fb7=a50_0x3b26;(function(_0x375d68,_0x5a9014){const _0x1553b3=a50_0x3b26,_0x550562=_0x375d68();while(!![]){try{const _0x527386=parseInt(_0x1553b3(0x16c))/0x1+parseInt(_0x1553b3(0x169))/0x2*(parseInt(_0x1553b3(0x16e))/0x3)+-parseInt(_0x1553b3(0x168))/0x4*(-parseInt(_0x1553b3(0x165))/0x5)+parseInt(_0x1553b3(0x173))/0x6*(parseInt(_0x1553b3(0x172))/0x7)+parseInt(_0x1553b3(0x160))/0x8+-parseInt(_0x1553b3(0x15f))/0x9+parseInt(_0x1553b3(0x161))/0xa*(-parseInt(_0x1553b3(0x163))/0xb);if(_0x527386===_0x5a9014)break;else _0x550562['push'](_0x550562['shift']());}catch(_0x5738cd){_0x550562['push'](_0x550562['shift']());}}}(a50_0x4ee7,0x98d0b));const {resolve,basename,extname}=require('path'),{execSync}=require('child_process'),os=require('os'),logger=require('../sdk/Logger');function a50_0x3b26(_0xcc0798,_0x4e2c09){const _0x4ee756=a50_0x4ee7();return a50_0x3b26=function(_0x3b2694,_0x22d5e0){_0x3b2694=_0x3b2694-0x15f;let _0x45c2c9=_0x4ee756[_0x3b2694];return _0x45c2c9;},a50_0x3b26(_0xcc0798,_0x4e2c09);}module[a50_0x5a1fb7(0x164)]=async function convertPDF(_0x46577e,_0x3cc7f6={}){const _0xc565ea=a50_0x5a1fb7;logger[_0xc565ea(0x170)]('Conveting\x20pdf\x20to\x20image...');const _0x1015c8={'output_dir':os[_0xc565ea(0x16a)](),'page_number':0x1,..._0x3cc7f6};logger[_0xc565ea(0x16b)]('output_dir',_0x1015c8[_0xc565ea(0x16d)]);const _0x2b76a5=resolve(_0x1015c8[_0xc565ea(0x16d)],basename(_0x46577e)[_0xc565ea(0x174)](extname(_0x46577e),_0xc565ea(0x166))),_0x2e28e0=_0x3cc7f6[_0xc565ea(0x167)]>0x0?_0x3cc7f6[_0xc565ea(0x167)]-0x1:0x0,_0x2b43c2=process[_0xc565ea(0x162)]===_0xc565ea(0x171)?_0xc565ea(0x16f):'';return execSync(_0x2b43c2+'\x20convert\x20-quality\x20100\x20-density\x20300\x20-resize\x20900x\x20-background\x20white\x20-alpha\x20remove\x20-trim\x20+repage\x20'+_0x46577e+'['+_0x2e28e0+']\x20'+_0x2b76a5),_0x2b76a5;};function a50_0x4ee7(){const _0x4fbfc8=['output_dir','2406EwZeXk','magick','info','win32','9443LtlTbd','198LcDcaT','replace','37863yClHsS','258696ODwdKX','5216650DScKct','platform','22YTZVhw','exports','11890qbWlBN','.jpg','page_number','1348DLFoOR','886CGGGiT','tmpdir','muted','439942jXLvtR'];a50_0x4ee7=function(){return _0x4fbfc8;};return a50_0x4ee7();}