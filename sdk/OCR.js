const a65_0x36db46=a65_0x1aec;(function(_0x6677d2,_0x163adb){const _0x2684d0=a65_0x1aec,_0x1ff725=_0x6677d2();while(!![]){try{const _0x35f471=-parseInt(_0x2684d0(0x1a0))/0x1*(parseInt(_0x2684d0(0x18e))/0x2)+-parseInt(_0x2684d0(0x191))/0x3*(-parseInt(_0x2684d0(0x1a8))/0x4)+-parseInt(_0x2684d0(0x1a6))/0x5*(-parseInt(_0x2684d0(0x19f))/0x6)+-parseInt(_0x2684d0(0x1a4))/0x7+-parseInt(_0x2684d0(0x1ad))/0x8*(-parseInt(_0x2684d0(0x198))/0x9)+-parseInt(_0x2684d0(0x18f))/0xa+parseInt(_0x2684d0(0x197))/0xb;if(_0x35f471===_0x163adb)break;else _0x1ff725['push'](_0x1ff725['shift']());}catch(_0x2b8f81){_0x1ff725['push'](_0x1ff725['shift']());}}}(a65_0x362a,0xd22bc));const os=require('os'),{resolve}=require('path'),convertPDF=require('../ocr/convertPDF'),cropImage=require('../ocr/cropImage'),readImage=require('../ocr/readImage'),readLargeImage=require('../ocr/readLargeImage'),OCRTemplateApi=require('../api/OCRTemplate'),{existsSync,mkdirSync,rmSync}=require('fs'),logger=require('../sdk/Logger'),{ValidationError}=require('../exceptions');function a65_0x362a(){const _0x122f59=['rules','yfy-ocr','1156104hFYfav','15189430jmyjQv','template','261MMfXje','muted','output_dir','name','__cleanup','length','29695039AwbPcS','4139703qfcChJ','.\x20Amount\x20of\x20items:\x20','Finding\x20better\x20template\x20for\x20OCR...','find','init','exports','por','1741098GCWhPf','2AhWYyK','tmpdir','file_attributes','readImage','7883820QHDrrT','message','10JdrSjA','OCR\x20Template\x20not\x20found.','21256DWFfYU','warn','info','config','readPDF','16sPzSBR','cleanup','Template\x20found:\x20','Extracting\x20','company_id','.\x20Similarity:\x20'];a65_0x362a=function(){return _0x122f59;};return a65_0x362a();}function a65_0x1aec(_0x260abb,_0x18dafb){const _0x362ac1=a65_0x362a();return a65_0x1aec=function(_0x1aec09,_0x1090b4){_0x1aec09=_0x1aec09-0x18e;let _0x3b0c31=_0x362ac1[_0x1aec09];return _0x3b0c31;},a65_0x1aec(_0x260abb,_0x18dafb);}class OCR{[a65_0x36db46(0x19c)](_0x2b2cef={}){const _0x4b5cac=a65_0x36db46,_0x4a0350={'cleanup':!![],..._0x2b2cef};this[_0x4b5cac(0x193)]=resolve(os[_0x4b5cac(0x1a1)](),_0x4b5cac(0x1b4)),_0x4a0350[_0x4b5cac(0x1ae)]&&this[_0x4b5cac(0x195)](),!existsSync(this[_0x4b5cac(0x193)])&&mkdirSync(this[_0x4b5cac(0x193)],{'recursive':!![],'force':!![]});}async[a65_0x36db46(0x1ac)](_0x221b8c){const _0x3a045c=a65_0x36db46;this['init']();const _0x5ac46c=this[_0x3a045c(0x193)],_0x320d19=await convertPDF(_0x221b8c,{'output_dir':_0x5ac46c});return await this[_0x3a045c(0x1a3)](_0x320d19,{'cleanup':![]});}async[a65_0x36db46(0x1a3)](_0x1fefa1,_0x4f2065={}){const _0x46f9b6=a65_0x36db46;this['init'](_0x4f2065);const _0x3eaf09=this[_0x46f9b6(0x193)],_0x1e3c15=await readLargeImage(_0x1fefa1,{'lang':_0x46f9b6(0x19e),'output_dir':_0x3eaf09});logger['info'](_0x46f9b6(0x19a));const _0x2d245e=await OCRTemplateApi[_0x46f9b6(0x19b)](_0x1e3c15);if(!_0x2d245e?.[_0x46f9b6(0x190)])throw new ValidationError(_0x46f9b6(0x1a7));const {items:_0x33555e,template:_0x33296f}=_0x2d245e,{width:_0x19ad79}=_0x33296f[_0x46f9b6(0x1a2)]||{'width':0x0};logger[_0x46f9b6(0x192)](_0x46f9b6(0x1af)+_0x33296f[_0x46f9b6(0x194)]+'\x20from\x20'+_0x33296f[_0x46f9b6(0x1b1)]+_0x46f9b6(0x199)+_0x33555e[_0x46f9b6(0x196)]+_0x46f9b6(0x1b2)+_0x33296f['similarity']);const _0x127b13={'__template':_0x33296f};for(const _0x24ef8c of _0x33555e){logger[_0x46f9b6(0x1aa)](_0x46f9b6(0x1b0)+_0x24ef8c['id']+'\x27s\x20text...');const _0x4d0fe8=_0x24ef8c[_0x46f9b6(0x1ab)][_0x46f9b6(0x1b3)]||[],_0x3894e6=await cropImage(_0x24ef8c,_0x1fefa1,{'output_dir':_0x3eaf09,'file_width':_0x19ad79});if(_0x3894e6&&existsSync(_0x3894e6)){const _0x3aa429=await readImage(_0x3894e6,{'output_dir':_0x3eaf09,'rules':_0x4d0fe8});_0x127b13[_0x24ef8c['id']]=_0x3aa429;}else _0x127b13[_0x24ef8c['id']]='';}return this[_0x46f9b6(0x195)](),_0x127b13;}[a65_0x36db46(0x195)](){const _0xe70f0d=a65_0x36db46;try{existsSync(this[_0xe70f0d(0x193)])&&rmSync(this['output_dir'],{'recursive':!![],'force':!![]});}catch(_0x3bc69c){console[_0xe70f0d(0x1a9)]('Fail\x20to\x20remove\x20tmp\x20dir',_0x3bc69c[_0xe70f0d(0x1a5)]);}}}module[a65_0x36db46(0x19d)]=new OCR();