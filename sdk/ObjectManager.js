const a66_0x336bd2=a66_0x29b9;(function(_0x32b892,_0x13c9af){const _0x2b8044=a66_0x29b9,_0x3cffab=_0x32b892();while(!![]){try{const _0x5f24af=-parseInt(_0x2b8044(0x13f))/0x1*(parseInt(_0x2b8044(0x137))/0x2)+-parseInt(_0x2b8044(0x13e))/0x3*(-parseInt(_0x2b8044(0x11f))/0x4)+-parseInt(_0x2b8044(0x139))/0x5*(-parseInt(_0x2b8044(0x118))/0x6)+parseInt(_0x2b8044(0x11d))/0x7*(parseInt(_0x2b8044(0x11b))/0x8)+parseInt(_0x2b8044(0x120))/0x9*(-parseInt(_0x2b8044(0x13d))/0xa)+-parseInt(_0x2b8044(0x127))/0xb*(parseInt(_0x2b8044(0x122))/0xc)+parseInt(_0x2b8044(0x13a))/0xd*(parseInt(_0x2b8044(0x12c))/0xe);if(_0x5f24af===_0x13c9af)break;else _0x3cffab['push'](_0x3cffab['shift']());}catch(_0x125928){_0x3cffab['push'](_0x3cffab['shift']());}}}(a66_0x5cc9,0x24775));function a66_0x29b9(_0x3b01d9,_0xc6ad2d){const _0x5cc900=a66_0x5cc9();return a66_0x29b9=function(_0x29b93f,_0x24b94e){_0x29b93f=_0x29b93f-0x118;let _0x2de6c0=_0x5cc900[_0x29b93f];return _0x2de6c0;},a66_0x29b9(_0x3b01d9,_0xc6ad2d);}const WorkObject=require('./WorkObject'),WorkObjectApi=require('../api/WorkObject'),Status=require('../helpers/Status'),statusMethods=['Pending',a66_0x336bd2(0x134),a66_0x336bd2(0x11e)];class ObjectManager{constructor(_0xa42a54){const _0x17cad9=a66_0x336bd2;Object[_0x17cad9(0x129)](this,_0xa42a54),statusMethods[_0x17cad9(0x126)](_0x3e1b0b=>this['fetch'+_0x3e1b0b]=this[_0x17cad9(0x140)][_0x17cad9(0x132)](this,_0x3e1b0b[_0x17cad9(0x136)]()));}['_parse2WorkObject'](_0x4aa471){const _0x2c9489=a66_0x336bd2;if(Array[_0x2c9489(0x125)](_0x4aa471))return _0x4aa471[_0x2c9489(0x138)](_0x3bee3a=>new WorkObject(_0x3bee3a));return new WorkObject(_0x4aa471);}async[a66_0x336bd2(0x12e)](_0x575a7f){const _0x2947cd=a66_0x336bd2,_0x5756ef=await WorkObjectApi[_0x2947cd(0x12e)](this[_0x2947cd(0x11c)]['id'],_0x575a7f);return this[_0x2947cd(0x11a)](_0x5756ef);}async[a66_0x336bd2(0x140)](_0x329390){const _0x438d6f=a66_0x336bd2,_0x2e5b53=await WorkObjectApi[_0x438d6f(0x12b)](this['job']['id'],_0x329390);return this[_0x438d6f(0x11a)](_0x2e5b53);}async['bulkCreate'](_0x261ee6,_0x17b015,_0x417d4b={}){const _0x418943=a66_0x336bd2,{chunk_size:chunk_size=0x64}=_0x417d4b,_0x4a390c=_0x261ee6[_0x418943(0x138)](_0x2a3772=>{const _0x13b151=_0x418943;return{..._0x17b015,'payload':_0x2a3772,'bot_id':this['bot']['id'],'job_id':this[_0x13b151(0x123)]['id']};}),_0x27d311=[];for(let _0x9ba5c9=0x0;_0x9ba5c9<_0x4a390c[_0x418943(0x13c)];_0x9ba5c9+=chunk_size){const _0x573808=_0x4a390c[_0x418943(0x12a)](_0x9ba5c9,_0x9ba5c9+chunk_size),_0x5a5f8a=await WorkObjectApi['bulkCreate'](_0x573808);_0x27d311[_0x418943(0x12f)](..._0x5a5f8a);}return this[_0x418943(0x11a)](_0x27d311);}async[a66_0x336bd2(0x135)](_0x149ead,_0x4f8f0e){const _0x5086f6=a66_0x336bd2;if(Array[_0x5086f6(0x125)](_0x149ead))throw new Error(_0x5086f6(0x124));const _0x581ab4=await WorkObjectApi[_0x5086f6(0x135)]({'status':Status[_0x5086f6(0x133)],..._0x4f8f0e,'payload':_0x149ead,'bot_id':this[_0x5086f6(0x11c)]['id'],'job_id':this['job']['id']});return this[_0x5086f6(0x11a)](_0x581ab4);}async['findOrCreate'](_0x2e8ab3,_0x760bb5,_0x212a40){const _0x4c0a84=a66_0x336bd2,_0x270d92=await WorkObjectApi[_0x4c0a84(0x13b)](_0x2e8ab3,{..._0x212a40,'payload':_0x760bb5,'bot_id':this[_0x4c0a84(0x11c)]['id'],'job_id':this[_0x4c0a84(0x123)]['id']});return this[_0x4c0a84(0x11a)](_0x270d92);}async['getResume'](){const _0x85adb0=a66_0x336bd2,_0x3f6e51=await this['fetchAll'](),_0x25728e=_0x3f6e51[_0x85adb0(0x128)](_0xd29aae=>_0xd29aae['status']===_0x85adb0(0x119)),_0x51fc82=_0x3f6e51[_0x85adb0(0x128)](_0x1fe76e=>_0x1fe76e[_0x85adb0(0x130)]===_0x85adb0(0x12d)),_0x4a84a2=_0x3f6e51[_0x85adb0(0x128)](_0x40a43e=>_0x40a43e[_0x85adb0(0x130)]===_0x85adb0(0x121)),_0x31acbb=_0x3f6e51[_0x85adb0(0x128)](_0xca5285=>_0xca5285[_0x85adb0(0x130)]===_0x85adb0(0x131)||_0xca5285['status']===_0x85adb0(0x133));return{'DONE':_0x25728e[_0x85adb0(0x13c)],'NOT_DONE':_0x51fc82['length'],'FAILED':_0x4a84a2['length'],'PENDING':_0x31acbb[_0x85adb0(0x13c)]};}}module['exports']=ObjectManager;function a66_0x5cc9(){const _0x268970=['4OaWQnm','54WEqtlU','FAILED','792wwaKrS','job','Payload\x20must\x20be\x20a\x20object:\x20{}','isArray','forEach','10153ehwLQl','filter','assign','slice','findByStatus','784iLFvSP','NOT_DONE','fetchAll','push','status','PENDING','bind','WORKING','Done','create','toLowerCase','2228XXbQGk','map','210kYhrKQ','40391nNSgEn','findOrCreate','length','66130PBdVDj','377124ZPJftA','236zLDGoc','fetchByStatus','2340dymxaB','DONE','_parse2WorkObject','40skOIXy','bot','275499Hautjr','Failed'];a66_0x5cc9=function(){return _0x268970;};return a66_0x5cc9();}