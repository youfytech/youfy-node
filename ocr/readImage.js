function a52_0x30ff(_0x127628,_0x473cf2){const _0xe673b9=a52_0xe673();return a52_0x30ff=function(_0x30ff87,_0x529016){_0x30ff87=_0x30ff87-0x1ac;let _0x3fa234=_0xe673b9[_0x30ff87];return _0x3fa234;},a52_0x30ff(_0x127628,_0x473cf2);}function a52_0xe673(){const _0x1d7e7b=['output_dir','\x20-l\x20','602526QUFhyL','8367912BKymkg','\x20--oem\x20','oem','\x20--psm\x2011','replace','readFileSync','.txt','eng','4961500TFArLu','trim','/tmp','29365677zQOKIX','2043498vGNchL','4GbhIAL','4213743jFLVDi','1120799gHUawU','length','utf8','7uofRmw'];a52_0xe673=function(){return _0x1d7e7b;};return a52_0xe673();}(function(_0x2a6ba9,_0x5e41ca){const _0xee417a=a52_0x30ff,_0x5755c2=_0x2a6ba9();while(!![]){try{const _0x465b2f=-parseInt(_0xee417a(0x1c1))/0x1+-parseInt(_0xee417a(0x1b1))/0x2+-parseInt(_0xee417a(0x1c0))/0x3*(-parseInt(_0xee417a(0x1bf))/0x4)+-parseInt(_0xee417a(0x1ba))/0x5+parseInt(_0xee417a(0x1be))/0x6*(-parseInt(_0xee417a(0x1ae))/0x7)+-parseInt(_0xee417a(0x1b2))/0x8+parseInt(_0xee417a(0x1bd))/0x9;if(_0x465b2f===_0x5e41ca)break;else _0x5755c2['push'](_0x5755c2['shift']());}catch(_0x580a98){_0x5755c2['push'](_0x5755c2['shift']());}}}(a52_0xe673,0xd38c4));const applyRules=require('./applyRules'),fs=require('fs'),{execSync}=require('child_process'),{basename,resolve,extname}=require('path');module['exports']=async function readImage(_0x26d6a8,_0x97aae={}){const _0x185106=a52_0x30ff,_0xe44775={'output_dir':_0x185106(0x1bc),'lang':_0x185106(0x1b9),'oem':'3','rules':[],..._0x97aae},_0x5d4bac=basename(_0x26d6a8)[_0x185106(0x1b6)](extname(_0x26d6a8),''),_0x341ed8=resolve(_0xe44775[_0x185106(0x1af)],_0x5d4bac),_0x3287e8='tesseract\x20'+_0x26d6a8+'\x20'+_0x341ed8+_0x185106(0x1b3)+_0xe44775[_0x185106(0x1b4)]+_0x185106(0x1b0)+_0xe44775['lang']+_0x185106(0x1b5);execSync(_0x3287e8);const _0x3844be=fs[_0x185106(0x1b7)](_0x341ed8+_0x185106(0x1b8),_0x185106(0x1ad));if(_0xe44775['rules'][_0x185106(0x1ac)])return applyRules(_0x3844be[_0x185106(0x1b6)](/\n/g,'\x20')[_0x185106(0x1b6)](/\f/g,'')[_0x185106(0x1bb)](),{'rules':_0xe44775['rules']});return _0x3844be;};