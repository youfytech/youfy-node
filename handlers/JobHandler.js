const a39_0x3515ff=a39_0x547a;(function(_0x22bcc7,_0x307ba9){const _0x43c297=a39_0x547a,_0x3c9eec=_0x22bcc7();while(!![]){try{const _0x3a06ca=parseInt(_0x43c297(0x16a))/0x1+parseInt(_0x43c297(0x17e))/0x2*(-parseInt(_0x43c297(0x172))/0x3)+parseInt(_0x43c297(0x178))/0x4*(-parseInt(_0x43c297(0x17b))/0x5)+parseInt(_0x43c297(0x16f))/0x6+parseInt(_0x43c297(0x16e))/0x7*(-parseInt(_0x43c297(0x177))/0x8)+parseInt(_0x43c297(0x175))/0x9+parseInt(_0x43c297(0x16b))/0xa*(-parseInt(_0x43c297(0x179))/0xb);if(_0x3a06ca===_0x307ba9)break;else _0x3c9eec['push'](_0x3c9eec['shift']());}catch(_0x42e267){_0x3c9eec['push'](_0x3c9eec['shift']());}}}(a39_0x285c,0xcd9d7));function a39_0x547a(_0x2793e8,_0x77cfd){const _0x285cd5=a39_0x285c();return a39_0x547a=function(_0x547aaf,_0x3f4967){_0x547aaf=_0x547aaf-0x169;let _0x5b282e=_0x285cd5[_0x547aaf];return _0x5b282e;},a39_0x547a(_0x2793e8,_0x77cfd);}const logger=require('../sdk/Logger'),JobApi=require('../api/Job'),ErrorHelper=require('../helpers/Error');class JobHandler{constructor(_0x2b7020){this['id']=_0x2b7020;}async[a39_0x3515ff(0x174)](_0x237be1){const _0x777056=a39_0x3515ff;logger[_0x777056(0x169)]('Initializing\x20job\x20'+this['id']+'\x20for\x20bot\x20'+_0x237be1+_0x777056(0x16d));const _0x119174=await JobApi[_0x777056(0x174)](this['id'],_0x237be1);return Object['assign'](this,_0x119174),_0x119174;}async['done'](){const _0xa39522=a39_0x3515ff,_0x1221bf=await JobApi['updateStatus'](this['id'],_0xa39522(0x17d));return Object[_0xa39522(0x16c)](this,_0x1221bf),logger['hl_success']('🎉',_0xa39522(0x170)),_0x1221bf;}async['failed'](_0x3ab31e){const _0x9dd433=a39_0x3515ff;logger['hl_error']('💩','JOB\x20FAILED:',_0x3ab31e);const _0x24b915=await JobApi[_0x9dd433(0x17c)](this['id'],_0x9dd433(0x17a),{'error':ErrorHelper['parse'](_0x3ab31e)});return Object['assign'](this,_0x24b915),_0x24b915;}async[a39_0x3515ff(0x176)](){const _0x7152dc=a39_0x3515ff;logger[_0x7152dc(0x171)]('🚫',_0x7152dc(0x173));const _0x2ba817=await JobApi[_0x7152dc(0x17c)](this['id'],_0x7152dc(0x176));return Object[_0x7152dc(0x16c)](this,_0x2ba817),_0x2ba817;}}module['exports']=JobHandler;function a39_0x285c(){const _0x5b5f11=['8216oTbkdt','3231020fzhlOT','264ApOuLT','failed','5FIjNwT','updateStatus','done','44970IBcTGP','muted','1135627WbiHDa','19040ziiiIU','assign','...','161wGYaNZ','2354424ocnAmS','JOB\x20DONE!','hl_muted','27rPVkiF','JOB\x20CANCELED','init','3542445vCapjj','canceled'];a39_0x285c=function(){return _0x5b5f11;};return a39_0x285c();}