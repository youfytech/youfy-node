const a65_0x55919b=a65_0x44ed;(function(_0x1b1420,_0x2698d1){const _0x1a12a0=a65_0x44ed,_0x176e87=_0x1b1420();while(!![]){try{const _0xbab068=parseInt(_0x1a12a0(0x169))/0x1*(parseInt(_0x1a12a0(0x15a))/0x2)+parseInt(_0x1a12a0(0x157))/0x3+parseInt(_0x1a12a0(0x162))/0x4*(parseInt(_0x1a12a0(0x164))/0x5)+-parseInt(_0x1a12a0(0x151))/0x6*(parseInt(_0x1a12a0(0x168))/0x7)+parseInt(_0x1a12a0(0x14b))/0x8*(parseInt(_0x1a12a0(0x15c))/0x9)+parseInt(_0x1a12a0(0x165))/0xa*(parseInt(_0x1a12a0(0x16a))/0xb)+-parseInt(_0x1a12a0(0x155))/0xc;if(_0xbab068===_0x2698d1)break;else _0x176e87['push'](_0x176e87['shift']());}catch(_0x4fdf77){_0x176e87['push'](_0x176e87['shift']());}}}(a65_0x53d0,0xe3b39));function a65_0x44ed(_0x416c2e,_0x33b6f9){const _0x53d0f7=a65_0x53d0();return a65_0x44ed=function(_0x44ed69,_0xed1692){_0x44ed69=_0x44ed69-0x14b;let _0x3c0b5c=_0x53d0f7[_0x44ed69];return _0x3c0b5c;},a65_0x44ed(_0x416c2e,_0x33b6f9);}const os=require('os'),{resolve}=require('path'),convertPDF=require('../ocr/convertPDF'),cropImage=require('../ocr/cropImage'),readImage=require('../ocr/readImage'),readLargeImage=require('../ocr/readLargeImage'),OCRTemplateApi=require('../api/OCRTemplate'),{existsSync,mkdirSync,rmSync}=require('fs'),logger=require('../sdk/Logger'),{ValidationError}=require('../exceptions');function a65_0x53d0(){const _0x4a2c02=['name','Finding\x20better\x20template\x20for\x20OCR...','811638dMrZPN','readPDF','14269626JFtICY','muted','message','Fail\x20to\x20remove\x20tmp\x20dir','.\x20Amount\x20of\x20items:\x20','tmpdir','667620VEwYLk','config','30zyOJUi','144360VeZNJS','por','readImage','392xnQjIH','3ltBeFL','506FSyyLe','init','__cleanup','output_dir','\x20from\x20','info','8ldEkJk','rules','yfy-ocr','find','template','Extracting\x20','109716ajepnq','cleanup','exports','length','40633104pyMopr','\x27s\x20text...','2622948kviNYu'];a65_0x53d0=function(){return _0x4a2c02;};return a65_0x53d0();}class OCR{[a65_0x55919b(0x16b)](_0x56067d={}){const _0x597b9d=a65_0x55919b,_0x27b96e={'cleanup':!![],..._0x56067d};this['output_dir']=resolve(os[_0x597b9d(0x161)](),_0x597b9d(0x14d)),_0x27b96e[_0x597b9d(0x152)]&&this[_0x597b9d(0x16c)](),!existsSync(this[_0x597b9d(0x16d)])&&mkdirSync(this[_0x597b9d(0x16d)],{'recursive':!![],'force':!![]});}async[a65_0x55919b(0x15b)](_0x4b1038){const _0x4a2d31=a65_0x55919b;this[_0x4a2d31(0x16b)]();const _0x5b3d72=this[_0x4a2d31(0x16d)],_0x50cc0c=await convertPDF(_0x4b1038,{'output_dir':_0x5b3d72});return await this[_0x4a2d31(0x167)](_0x50cc0c,{'cleanup':![]});}async['readImage'](_0x5c7ac2,_0x27ecf7={}){const _0x1618ee=a65_0x55919b;this[_0x1618ee(0x16b)](_0x27ecf7);const _0x2cf306=this[_0x1618ee(0x16d)],_0x2f7490=await readLargeImage(_0x5c7ac2,{'lang':_0x1618ee(0x166),'output_dir':_0x2cf306});logger[_0x1618ee(0x16f)](_0x1618ee(0x159));const _0x5f4b29=await OCRTemplateApi[_0x1618ee(0x14e)](_0x2f7490);if(!_0x5f4b29?.[_0x1618ee(0x14f)])throw new ValidationError('OCR\x20Template\x20not\x20found.');const {items:_0x1f84f9,template:_0x39a3d5}=_0x5f4b29,{width:_0x51aede}=_0x39a3d5['file_attributes']||{'width':0x0};logger[_0x1618ee(0x15d)]('Template\x20found:\x20'+_0x39a3d5[_0x1618ee(0x158)]+_0x1618ee(0x16e)+_0x39a3d5['company_id']+_0x1618ee(0x160)+_0x1f84f9[_0x1618ee(0x154)]+'.\x20Similarity:\x20'+_0x39a3d5['similarity']);const _0x5143e0={'__template':_0x39a3d5};for(const _0x42e215 of _0x1f84f9){logger['info'](_0x1618ee(0x150)+_0x42e215['id']+_0x1618ee(0x156));const _0x237ee8=_0x42e215[_0x1618ee(0x163)][_0x1618ee(0x14c)]||[],_0x20f4e0=await cropImage(_0x42e215,_0x5c7ac2,{'output_dir':_0x2cf306,'file_width':_0x51aede});if(_0x20f4e0&&existsSync(_0x20f4e0)){const _0x5927eb=await readImage(_0x20f4e0,{'output_dir':_0x2cf306,'rules':_0x237ee8});_0x5143e0[_0x42e215['id']]=_0x5927eb;}else _0x5143e0[_0x42e215['id']]='';}return this[_0x1618ee(0x16c)](),_0x5143e0;}[a65_0x55919b(0x16c)](){const _0x27f148=a65_0x55919b;try{existsSync(this[_0x27f148(0x16d)])&&rmSync(this[_0x27f148(0x16d)],{'recursive':!![],'force':!![]});}catch(_0x1f07c1){console['warn'](_0x27f148(0x15f),_0x1f07c1[_0x27f148(0x15e)]);}}}module[a65_0x55919b(0x153)]=new OCR();