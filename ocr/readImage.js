function a52_0x572c(){const _0x2c43fc=['117NhqVBj','.txt','15742764cEPIXT','10UqyDAS','\x20--oem\x20','oem','lang','rules','1120565gzxaPd','\x20--psm\x2011','replace','exports','2CrPEXW','/tmp','1009451jgeEue','6EDpepB','632MbRtyc','3451481FGsHUi','readFileSync','eng','output_dir','936068CcZazi','\x20-l\x20','utf8','11811ORoDJi','651448QfeRGw','tesseract\x20'];a52_0x572c=function(){return _0x2c43fc;};return a52_0x572c();}const a52_0xf9f848=a52_0x5f17;function a52_0x5f17(_0x50fd82,_0x1bc7af){const _0x572c0a=a52_0x572c();return a52_0x5f17=function(_0x5f1799,_0x171d7f){_0x5f1799=_0x5f1799-0x1cb;let _0x3e21c5=_0x572c0a[_0x5f1799];return _0x3e21c5;},a52_0x5f17(_0x50fd82,_0x1bc7af);}(function(_0x593fe7,_0x5158e6){const _0x41cdc8=a52_0x5f17,_0x719600=_0x593fe7();while(!![]){try{const _0xc6a2e3=-parseInt(_0x41cdc8(0x1df))/0x1*(-parseInt(_0x41cdc8(0x1dd))/0x2)+-parseInt(_0x41cdc8(0x1ce))/0x3*(parseInt(_0x41cdc8(0x1e1))/0x4)+parseInt(_0x41cdc8(0x1d9))/0x5*(-parseInt(_0x41cdc8(0x1e0))/0x6)+-parseInt(_0x41cdc8(0x1cb))/0x7+parseInt(_0x41cdc8(0x1cf))/0x8*(-parseInt(_0x41cdc8(0x1d1))/0x9)+-parseInt(_0x41cdc8(0x1d4))/0xa*(-parseInt(_0x41cdc8(0x1e2))/0xb)+parseInt(_0x41cdc8(0x1d3))/0xc;if(_0xc6a2e3===_0x5158e6)break;else _0x719600['push'](_0x719600['shift']());}catch(_0x28c7f9){_0x719600['push'](_0x719600['shift']());}}}(a52_0x572c,0x91a99));const applyRules=require('./applyRules'),fs=require('fs'),{execSync}=require('child_process'),{basename,resolve,extname}=require('path');module[a52_0xf9f848(0x1dc)]=async function readImage(_0x3702ed,_0x54418d={}){const _0x124e54=a52_0xf9f848,_0x3dc4={'output_dir':_0x124e54(0x1de),'lang':_0x124e54(0x1e4),'oem':'3','rules':[],..._0x54418d},_0x44f6a4=basename(_0x3702ed)['replace'](extname(_0x3702ed),''),_0x10c78f=resolve(_0x3dc4[_0x124e54(0x1e5)],_0x44f6a4),_0x3a7621=_0x124e54(0x1d0)+_0x3702ed+'\x20'+_0x10c78f+_0x124e54(0x1d5)+_0x3dc4[_0x124e54(0x1d6)]+_0x124e54(0x1cc)+_0x3dc4[_0x124e54(0x1d7)]+_0x124e54(0x1da);execSync(_0x3a7621);const _0x1ec91b=fs[_0x124e54(0x1e3)](_0x10c78f+_0x124e54(0x1d2),_0x124e54(0x1cd));if(_0x3dc4[_0x124e54(0x1d8)]['length'])return applyRules(_0x1ec91b['replace'](/\n/g,'\x20')[_0x124e54(0x1db)](/\f/g,'')['trim'](),{'rules':_0x3dc4[_0x124e54(0x1d8)]});return _0x1ec91b;};