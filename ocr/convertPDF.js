const a50_0x2e4e98=a50_0x4590;(function(_0x17eca0,_0x4335bb){const _0x45535c=a50_0x4590,_0x553b6d=_0x17eca0();while(!![]){try{const _0x1e674f=-parseInt(_0x45535c(0x1a4))/0x1*(-parseInt(_0x45535c(0x19c))/0x2)+-parseInt(_0x45535c(0x19a))/0x3*(-parseInt(_0x45535c(0x198))/0x4)+parseInt(_0x45535c(0x1a8))/0x5*(parseInt(_0x45535c(0x197))/0x6)+parseInt(_0x45535c(0x1a5))/0x7+-parseInt(_0x45535c(0x1a7))/0x8*(parseInt(_0x45535c(0x19f))/0x9)+-parseInt(_0x45535c(0x19b))/0xa+parseInt(_0x45535c(0x1a2))/0xb;if(_0x1e674f===_0x4335bb)break;else _0x553b6d['push'](_0x553b6d['shift']());}catch(_0x60a90c){_0x553b6d['push'](_0x553b6d['shift']());}}}(a50_0xf6e4,0xf2e63));function a50_0xf6e4(){const _0x2c36c6=['32YqkpBB','output_dir','Conveting\x20pdf\x20to\x20image...','270414BWTLNc','win32','replace','1156727qlsHJr','.jpg','30259yJNUAw','692706Lppfpy','info','368hIeerb','1226965xAXRBe','\x20convert\x20-quality\x20100\x20-density\x20300\x20-resize\x20900x\x20-background\x20white\x20-alpha\x20remove\x20-trim\x20+repage\x20','page_number','48TJpKzP','4GxVPUj','exports','3669222YWxplX','14974460DxQyfi'];a50_0xf6e4=function(){return _0x2c36c6;};return a50_0xf6e4();}function a50_0x4590(_0x72b09a,_0x20df13){const _0xf6e405=a50_0xf6e4();return a50_0x4590=function(_0x4590a4,_0x1916fa){_0x4590a4=_0x4590a4-0x196;let _0xf3d35b=_0xf6e405[_0x4590a4];return _0xf3d35b;},a50_0x4590(_0x72b09a,_0x20df13);}const {resolve,basename,extname}=require('path'),{execSync}=require('child_process'),os=require('os'),logger=require('../sdk/Logger');module[a50_0x2e4e98(0x199)]=async function convertPDF(_0x314402,_0x5241c5={}){const _0x20a07a=a50_0x2e4e98;logger[_0x20a07a(0x1a6)](_0x20a07a(0x19e));const _0x2c081e={'output_dir':os['tmpdir'](),'page_number':0x1,..._0x5241c5};logger['muted'](_0x20a07a(0x19d),_0x2c081e[_0x20a07a(0x19d)]);const _0x4c810f=resolve(_0x2c081e['output_dir'],basename(_0x314402)[_0x20a07a(0x1a1)](extname(_0x314402),_0x20a07a(0x1a3))),_0x54ceeb=_0x5241c5[_0x20a07a(0x196)]>0x0?_0x5241c5[_0x20a07a(0x196)]-0x1:0x0,_0x118f42=process['platform']===_0x20a07a(0x1a0)?'magick':'';return execSync(_0x118f42+_0x20a07a(0x1a9)+_0x314402+'['+_0x54ceeb+']\x20'+_0x4c810f),_0x4c810f;};