const a63_0x358dd2=a63_0x2c55;(function(_0x5d3b0d,_0x53ef18){const _0x3b4c51=a63_0x2c55,_0x4a8347=_0x5d3b0d();while(!![]){try{const _0x1bb11b=parseInt(_0x3b4c51(0xcb))/0x1*(parseInt(_0x3b4c51(0xcf))/0x2)+parseInt(_0x3b4c51(0xd3))/0x3+parseInt(_0x3b4c51(0xcd))/0x4+parseInt(_0x3b4c51(0xd6))/0x5+parseInt(_0x3b4c51(0xda))/0x6*(-parseInt(_0x3b4c51(0xce))/0x7)+parseInt(_0x3b4c51(0xd5))/0x8+-parseInt(_0x3b4c51(0xd1))/0x9*(parseInt(_0x3b4c51(0xd9))/0xa);if(_0x1bb11b===_0x53ef18)break;else _0x4a8347['push'](_0x4a8347['shift']());}catch(_0x44a2d2){_0x4a8347['push'](_0x4a8347['shift']());}}}(a63_0x5c25,0x8b18f));const logger=require('./Logger'),JobApi=require('../api/Job');function a63_0x5c25(){const _0x43ef4b=['5524952YMDiey','4739765eZVsbB','send','warn','5000HtYDmm','3702828epsFal','50831DSLbGr','update','3921884OdkWUy','7HjnHvq','26IfNUSI','exports','54261qgEIHK','[WARN]:','2764605MJjcnm','job'];a63_0x5c25=function(){return _0x43ef4b;};return a63_0x5c25();}function a63_0x2c55(_0x30ed5f,_0x589ccc){const _0x5c257a=a63_0x5c25();return a63_0x2c55=function(_0x2c551f,_0x35ad76){_0x2c551f=_0x2c551f-0xcb;let _0x5cab14=_0x5c257a[_0x2c551f];return _0x5cab14;},a63_0x2c55(_0x30ed5f,_0x589ccc);}class Messenger{constructor(_0x48e07f){const _0x4e0419=a63_0x2c55;this[_0x4e0419(0xd4)]=_0x48e07f;}async[a63_0x358dd2(0xd7)](_0x32e615){const _0x1880e0=a63_0x358dd2;await JobApi[_0x1880e0(0xcc)](this[_0x1880e0(0xd4)]['id'],{'status_text':_0x32e615}),logger['info']('[Message\x20sent]:',_0x32e615);}async[a63_0x358dd2(0xd8)](_0x5568fa){const _0x2ca0aa=a63_0x358dd2;await JobApi['addWarn'](this[_0x2ca0aa(0xd4)]['id'],{'bot_id':this['job']?.['bot']?.['id'],'text':_0x5568fa}),logger[_0x2ca0aa(0xd8)](_0x2ca0aa(0xd2),_0x5568fa);}}module[a63_0x358dd2(0xd0)]=Messenger;