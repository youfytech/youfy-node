const a65_0x4b5175=a65_0x4f82;(function(_0x14c247,_0x52b0ec){const _0x51f896=a65_0x4f82,_0x1130ca=_0x14c247();while(!![]){try{const _0x3523d7=parseInt(_0x51f896(0x17c))/0x1+-parseInt(_0x51f896(0x188))/0x2+parseInt(_0x51f896(0x186))/0x3*(parseInt(_0x51f896(0x187))/0x4)+parseInt(_0x51f896(0x18d))/0x5+-parseInt(_0x51f896(0x189))/0x6+parseInt(_0x51f896(0x17f))/0x7+parseInt(_0x51f896(0x18c))/0x8*(parseInt(_0x51f896(0x18b))/0x9);if(_0x3523d7===_0x52b0ec)break;else _0x1130ca['push'](_0x1130ca['shift']());}catch(_0xb5102e){_0x1130ca['push'](_0x1130ca['shift']());}}}(a65_0x4e41,0xe4381));function a65_0x4f82(_0x457d7f,_0x551011){const _0x4e4128=a65_0x4e41();return a65_0x4f82=function(_0x4f82b9,_0xa06fb0){_0x4f82b9=_0x4f82b9-0x176;let _0xdf1417=_0x4e4128[_0x4f82b9];return _0xdf1417;},a65_0x4f82(_0x457d7f,_0x551011);}const os=require('os'),{resolve}=require('path'),convertPDF=require('../ocr/convertPDF'),cropImage=require('../ocr/cropImage'),readImage=require('../ocr/readImage'),readLargeImage=require('../ocr/readLargeImage'),OCRTemplateApi=require('../api/OCRTemplate'),{existsSync,mkdirSync,rmSync}=require('fs'),logger=require('../sdk/Logger'),{ValidationError}=require('../exceptions');class OCR{[a65_0x4b5175(0x181)](_0x4817b9={}){const _0x193a6d=a65_0x4b5175,_0x364f2a={'cleanup':!![],..._0x4817b9};this[_0x193a6d(0x192)]=resolve(os[_0x193a6d(0x17e)](),_0x193a6d(0x184)),_0x364f2a[_0x193a6d(0x18e)]&&this['__cleanup'](),!existsSync(this[_0x193a6d(0x192)])&&mkdirSync(this['output_dir'],{'recursive':!![],'force':!![]});}async['readPDF'](_0x21944a){const _0x3419ce=a65_0x4b5175;this['init']();const _0x240898=this[_0x3419ce(0x192)],_0x47c8e1=await convertPDF(_0x21944a,{'output_dir':_0x240898});return await this[_0x3419ce(0x177)](_0x47c8e1,{'cleanup':![]});}async[a65_0x4b5175(0x177)](_0x1bc946,_0x552900={}){const _0x19e9fb=a65_0x4b5175;this['init'](_0x552900);const _0x49115e=this[_0x19e9fb(0x192)],_0x55d913=await readLargeImage(_0x1bc946,{'lang':'por','output_dir':_0x49115e});logger[_0x19e9fb(0x185)](_0x19e9fb(0x193));const _0x403fc5=await OCRTemplateApi['find'](_0x55d913);if(!_0x403fc5?.['template'])throw new ValidationError(_0x19e9fb(0x18f));const {items:_0x509428,template:_0x9aae74}=_0x403fc5,{width:_0x4cb555}=_0x9aae74['file_attributes']||{'width':0x0};logger[_0x19e9fb(0x17d)]('Template\x20found:\x20'+_0x9aae74[_0x19e9fb(0x183)]+_0x19e9fb(0x178)+_0x9aae74[_0x19e9fb(0x18a)]+_0x19e9fb(0x182)+_0x509428[_0x19e9fb(0x179)]+'.\x20Similarity:\x20'+_0x9aae74[_0x19e9fb(0x176)]);const _0x50c252={'__template':_0x9aae74};for(const _0x580e1b of _0x509428){logger[_0x19e9fb(0x185)]('Extracting\x20'+_0x580e1b['id']+'\x27s\x20text...');const _0x4cb100=_0x580e1b[_0x19e9fb(0x180)][_0x19e9fb(0x17b)]||[],_0x1380c3=await cropImage(_0x580e1b,_0x1bc946,{'output_dir':_0x49115e,'file_width':_0x4cb555});if(_0x1380c3&&existsSync(_0x1380c3)){const _0x48325d=await readImage(_0x1380c3,{'output_dir':_0x49115e,'rules':_0x4cb100});_0x50c252[_0x580e1b['id']]=_0x48325d;}else _0x50c252[_0x580e1b['id']]='';}return this[_0x19e9fb(0x190)](),_0x50c252;}[a65_0x4b5175(0x190)](){const _0x95192d=a65_0x4b5175;try{existsSync(this['output_dir'])&&rmSync(this[_0x95192d(0x192)],{'recursive':!![],'force':!![]});}catch(_0xa31dd8){console['warn'](_0x95192d(0x17a),_0xa31dd8[_0x95192d(0x191)]);}}}module['exports']=new OCR();function a65_0x4e41(){const _0x530afe=['__cleanup','message','output_dir','Finding\x20better\x20template\x20for\x20OCR...','similarity','readImage','\x20from\x20','length','Fail\x20to\x20remove\x20tmp\x20dir','rules','349181KtZaTy','muted','tmpdir','11605202aUQFqR','config','init','.\x20Amount\x20of\x20items:\x20','name','yfy-ocr','info','2109HGzdoW','1580xrsLzV','943808ikwnzM','11064702pPyDMC','company_id','5749803eqOnZX','8deQJUo','1635935OpxLfo','cleanup','OCR\x20Template\x20not\x20found.'];a65_0x4e41=function(){return _0x530afe;};return a65_0x4e41();}