function a63_0x1cc4(){const _0x3bfa38=['update','bot','199300ZBTumY','job','139WfQpds','info','warn','addWarn','5NHaRLQ','1207108eBPzKv','582669NWuVey','1321350BMUsNu','9567ZxXbvy','5975550xlDDJv','exports','1224iNPMdU','[WARN]:','1074RbYQYE','send'];a63_0x1cc4=function(){return _0x3bfa38;};return a63_0x1cc4();}const a63_0x5454c3=a63_0x2507;function a63_0x2507(_0x363507,_0x12ce97){const _0x1cc459=a63_0x1cc4();return a63_0x2507=function(_0x2507d8,_0x1ca145){_0x2507d8=_0x2507d8-0x12c;let _0x791bf0=_0x1cc459[_0x2507d8];return _0x791bf0;},a63_0x2507(_0x363507,_0x12ce97);}(function(_0x5ce715,_0x1db854){const _0x22a0a2=a63_0x2507,_0x22093a=_0x5ce715();while(!![]){try{const _0x160be5=-parseInt(_0x22a0a2(0x136))/0x1*(-parseInt(_0x22a0a2(0x130))/0x2)+-parseInt(_0x22a0a2(0x13c))/0x3+parseInt(_0x22a0a2(0x134))/0x4*(-parseInt(_0x22a0a2(0x13a))/0x5)+-parseInt(_0x22a0a2(0x13d))/0x6+-parseInt(_0x22a0a2(0x13b))/0x7+-parseInt(_0x22a0a2(0x12e))/0x8*(-parseInt(_0x22a0a2(0x13e))/0x9)+parseInt(_0x22a0a2(0x12c))/0xa;if(_0x160be5===_0x1db854)break;else _0x22093a['push'](_0x22093a['shift']());}catch(_0x7308a9){_0x22093a['push'](_0x22093a['shift']());}}}(a63_0x1cc4,0x305e8));const logger=require('./Logger'),JobApi=require('../api/Job');class Messenger{constructor(_0x5cb2e0){const _0x93383c=a63_0x2507;this[_0x93383c(0x135)]=_0x5cb2e0;}async[a63_0x5454c3(0x131)](_0x22cf15){const _0x6ad224=a63_0x5454c3;await JobApi[_0x6ad224(0x132)](this[_0x6ad224(0x135)]['id'],{'status_text':_0x22cf15}),logger[_0x6ad224(0x137)]('[Message\x20sent]:',_0x22cf15);}async['warn'](_0x1d1a0c){const _0x7424fd=a63_0x5454c3;await JobApi[_0x7424fd(0x139)](this[_0x7424fd(0x135)]['id'],{'bot_id':this['job']?.[_0x7424fd(0x133)]?.['id'],'text':_0x1d1a0c}),logger[_0x7424fd(0x138)](_0x7424fd(0x12f),_0x1d1a0c);}}module[a63_0x5454c3(0x12d)]=Messenger;