const a58_0x1c3bee=a58_0x5585;function a58_0x5c3a(){const _0x3516b1=['tmpdir','state_dir','__name','__options','path','12qkmDZh','set','107292wPQxFZ','42489uYVqVW','6EHDAfp','_getState','13531860qdOdYj','1681125nmpaZi','yfy-job-states','704604HjgtZm','init','saveState','_getStateFile','6992713fiFPCX','_selfUpdate','base_path','assign','.json','exports','6454720BCnLft','1528MUwnoV','removeOldStates'];a58_0x5c3a=function(){return _0x3516b1;};return a58_0x5c3a();}(function(_0x597b11,_0x306f9b){const _0x1e03ba=a58_0x5585,_0x2e42d2=_0x597b11();while(!![]){try{const _0x20eb6b=parseInt(_0x1e03ba(0x81))/0x1*(parseInt(_0x1e03ba(0x83))/0x2)+-parseInt(_0x1e03ba(0x88))/0x3+-parseInt(_0x1e03ba(0x8a))/0x4+parseInt(_0x1e03ba(0x94))/0x5+parseInt(_0x1e03ba(0x85))/0x6*(-parseInt(_0x1e03ba(0x8e))/0x7)+parseInt(_0x1e03ba(0x95))/0x8*(-parseInt(_0x1e03ba(0x84))/0x9)+parseInt(_0x1e03ba(0x87))/0xa;if(_0x20eb6b===_0x306f9b)break;else _0x2e42d2['push'](_0x2e42d2['shift']());}catch(_0x2c3f5d){_0x2e42d2['push'](_0x2e42d2['shift']());}}}(a58_0x5c3a,0x9edbe));const os=require('os'),{resolve}=require('path'),{writeFileSync,existsSync,mkdirSync,rmSync,readFileSync}=require('fs'),defaultOptions={'keep_state':!![]};class DataState{constructor(_0xc6e91a,_0x2a6707={},_0x18bb67){const _0x551e14=a58_0x5585;this['__name']=_0xc6e91a,this[_0x551e14(0x7f)]={...defaultOptions,..._0x18bb67},this[_0x551e14(0x7d)]=resolve(os[_0x551e14(0x97)](),_0x551e14(0x89)),Object['assign'](this,_0x2a6707),this[_0x551e14(0x8b)](_0x2a6707);}[a58_0x1c3bee(0x8d)](){const _0x57261a=a58_0x1c3bee,_0x25f7ab=this[_0x57261a(0x7e)]+_0x57261a(0x92),_0x2b537e=resolve(this[_0x57261a(0x7d)],_0x25f7ab);return{'base_path':this[_0x57261a(0x7d)],'name':_0x25f7ab,'path':_0x2b537e};}[a58_0x1c3bee(0x8b)](_0x325526){const _0x1b29a7=a58_0x1c3bee,_0x4a5a3f=this['_getStateFile']();!existsSync(_0x4a5a3f[_0x1b29a7(0x90)])&&mkdirSync(_0x4a5a3f[_0x1b29a7(0x90)],{'recursive':!![]}),!this[_0x1b29a7(0x7f)]['keep_state']&&this[_0x1b29a7(0x96)](),!existsSync(_0x4a5a3f[_0x1b29a7(0x80)])?this['saveState'](_0x325526):this['_selfUpdate']();}[a58_0x1c3bee(0x96)](){const _0x1fada0=a58_0x1c3bee,_0x92d5c2=this[_0x1fada0(0x8d)]();rmSync(_0x92d5c2[_0x1fada0(0x80)],{'force':!![]});}[a58_0x1c3bee(0x86)](){const _0x4b589d=a58_0x1c3bee,_0x29d533=this[_0x4b589d(0x8d)]();if(existsSync(_0x29d533[_0x4b589d(0x80)])){const _0x598a2f=readFileSync(_0x29d533[_0x4b589d(0x80)]);return JSON['parse'](_0x598a2f);}return{};}[a58_0x1c3bee(0x8f)](){const _0x4df37d=a58_0x1c3bee;Object[_0x4df37d(0x91)](this,this['_getState']());}['saveState'](_0x9ae916){const _0xf9f0b5=a58_0x1c3bee,_0x205c84=this[_0xf9f0b5(0x8d)]();writeFileSync(_0x205c84[_0xf9f0b5(0x80)],JSON['stringify'](_0x9ae916)),this[_0xf9f0b5(0x8f)]();}['get'](_0x7b2866,_0x3d09cb){const _0x56666e=a58_0x1c3bee,_0x18c486=this[_0x56666e(0x86)]();return _0x18c486[_0x7b2866]||_0x3d09cb;}[a58_0x1c3bee(0x82)](_0x4370ad,_0x57ca95){const _0x1d10a2=a58_0x1c3bee,_0x3a58a8=this['_getState']();_0x3a58a8[_0x4370ad]=_0x57ca95,this[_0x1d10a2(0x8c)](_0x3a58a8);}['update'](_0x288ab7){const _0x549ae3=a58_0x1c3bee,_0x2a69e7=this[_0x549ae3(0x86)]();this[_0x549ae3(0x8c)]({..._0x2a69e7,..._0x288ab7});}}function a58_0x5585(_0x33dbbf,_0xcf131b){const _0x5c3a57=a58_0x5c3a();return a58_0x5585=function(_0x5585a6,_0x1ba201){_0x5585a6=_0x5585a6-0x7d;let _0x4efd22=_0x5c3a57[_0x5585a6];return _0x4efd22;},a58_0x5585(_0x33dbbf,_0xcf131b);}module[a58_0x1c3bee(0x93)]=DataState;