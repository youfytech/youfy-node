function a65_0x26a6(_0x4849a7,_0x4df8f2){const _0x359a9d=a65_0x359a();return a65_0x26a6=function(_0x26a6bc,_0x1acb4e){_0x26a6bc=_0x26a6bc-0xa1;let _0x2a11fc=_0x359a9d[_0x26a6bc];return _0x2a11fc;},a65_0x26a6(_0x4849a7,_0x4df8f2);}const a65_0x5cbc77=a65_0x26a6;(function(_0x1290d8,_0xa2bea){const _0x3a9101=a65_0x26a6,_0x5ab6b2=_0x1290d8();while(!![]){try{const _0xf4bd03=parseInt(_0x3a9101(0xbf))/0x1*(-parseInt(_0x3a9101(0xb7))/0x2)+parseInt(_0x3a9101(0xae))/0x3+-parseInt(_0x3a9101(0xb8))/0x4+parseInt(_0x3a9101(0xa1))/0x5+parseInt(_0x3a9101(0xb0))/0x6*(parseInt(_0x3a9101(0xa3))/0x7)+-parseInt(_0x3a9101(0xb4))/0x8+-parseInt(_0x3a9101(0xad))/0x9*(-parseInt(_0x3a9101(0xa6))/0xa);if(_0xf4bd03===_0xa2bea)break;else _0x5ab6b2['push'](_0x5ab6b2['shift']());}catch(_0x3e8b6f){_0x5ab6b2['push'](_0x5ab6b2['shift']());}}}(a65_0x359a,0x6bb83));const os=require('os'),{resolve}=require('path'),convertPDF=require(a65_0x5cbc77(0xb3)),cropImage=require(a65_0x5cbc77(0xc1)),readImage=require(a65_0x5cbc77(0xc7)),readLargeImage=require(a65_0x5cbc77(0xcb)),OCRTemplateApi=require('../api/OCRTemplate'),{existsSync,mkdirSync,rmSync}=require('fs'),logger=require(a65_0x5cbc77(0xb2)),{ValidationError}=require(a65_0x5cbc77(0xac));class OCR{[a65_0x5cbc77(0xca)](_0x2c34a3={}){const _0x11a061=a65_0x5cbc77,_0x53c3eb={'cleanup':!![],..._0x2c34a3};this[_0x11a061(0xc4)]=resolve(os[_0x11a061(0xa5)](),'yfy-ocr'),_0x53c3eb[_0x11a061(0xa9)]&&this[_0x11a061(0xaf)](),!existsSync(this[_0x11a061(0xc4)])&&mkdirSync(this[_0x11a061(0xc4)],{'recursive':!![],'force':!![]});}async[a65_0x5cbc77(0xbb)](_0xa22700){const _0x24eb1f=a65_0x5cbc77;this[_0x24eb1f(0xca)]();const _0x5fe830=this[_0x24eb1f(0xc4)],_0x348c1d=await convertPDF(_0xa22700,{'output_dir':_0x5fe830});return await this[_0x24eb1f(0xa2)](_0x348c1d,{'cleanup':![]});}async[a65_0x5cbc77(0xa2)](_0x3bb19b,_0x1b32a7={}){const _0x47778c=a65_0x5cbc77;this[_0x47778c(0xca)](_0x1b32a7);const _0x55ae70=this[_0x47778c(0xc4)],_0x543275=await readLargeImage(_0x3bb19b,{'lang':'por','output_dir':_0x55ae70});logger[_0x47778c(0xc5)](_0x47778c(0xc9));const _0x154b2b=await OCRTemplateApi[_0x47778c(0xbc)](_0x543275);if(!_0x154b2b?.[_0x47778c(0xa4)])throw new ValidationError('OCR\x20Template\x20not\x20found.');const {items:_0x1cd6a8,template:_0x38a0a5}=_0x154b2b,{width:_0x406d9f}=_0x38a0a5[_0x47778c(0xc8)]||{'width':0x0};logger[_0x47778c(0xb5)](_0x47778c(0xb9)+_0x38a0a5[_0x47778c(0xc3)]+_0x47778c(0xc2)+_0x38a0a5[_0x47778c(0xa7)]+_0x47778c(0xc6)+_0x1cd6a8['length']+_0x47778c(0xb1)+_0x38a0a5[_0x47778c(0xc0)]);const _0x2bc859={'__template':_0x38a0a5};for(const _0x55f51e of _0x1cd6a8){logger[_0x47778c(0xc5)](_0x47778c(0xaa)+_0x55f51e['id']+_0x47778c(0xbe));const _0x4189e0=_0x55f51e[_0x47778c(0xbd)][_0x47778c(0xb6)]||[],_0x296940=await cropImage(_0x55f51e,_0x3bb19b,{'output_dir':_0x55ae70,'file_width':_0x406d9f});if(_0x296940&&existsSync(_0x296940)){const _0xbb8dea=await readImage(_0x296940,{'output_dir':_0x55ae70,'rules':_0x4189e0});_0x2bc859[_0x55f51e['id']]=_0xbb8dea;}else _0x2bc859[_0x55f51e['id']]='';}return this[_0x47778c(0xaf)](),_0x2bc859;}[a65_0x5cbc77(0xaf)](){const _0x71b40f=a65_0x5cbc77;try{existsSync(this[_0x71b40f(0xc4)])&&rmSync(this['output_dir'],{'recursive':!![],'force':!![]});}catch(_0x358a75){console[_0x71b40f(0xba)](_0x71b40f(0xab),_0x358a75[_0x71b40f(0xa8)]);}}}function a65_0x359a(){const _0x1102f3=['.\x20Amount\x20of\x20items:\x20','../ocr/readImage','file_attributes','Finding\x20better\x20template\x20for\x20OCR...','init','../ocr/readLargeImage','2304460IenynT','readImage','133GajoCR','template','tmpdir','436970RFwcuJ','company_id','message','cleanup','Extracting\x20','Fail\x20to\x20remove\x20tmp\x20dir','../exceptions','63kQAqtP','731802EoZQbR','__cleanup','60810HCrYXU','.\x20Similarity:\x20','../sdk/Logger','../ocr/convertPDF','3049872fJrFKj','muted','rules','12ZWtCXN','370716dBAtTG','Template\x20found:\x20','warn','readPDF','find','config','\x27s\x20text...','48023BDzYTZ','similarity','../ocr/cropImage','\x20from\x20','name','output_dir','info'];a65_0x359a=function(){return _0x1102f3;};return a65_0x359a();}module['exports']=new OCR();