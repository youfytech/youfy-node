const a38_0x42d3b2=a38_0x1be1;function a38_0x1be1(_0x5c728b,_0x1e91f3){const _0x15b537=a38_0x15b5();return a38_0x1be1=function(_0x1be144,_0x143434){_0x1be144=_0x1be144-0xa5;let _0x52dc27=_0x15b537[_0x1be144];return _0x52dc27;},a38_0x1be1(_0x5c728b,_0x1e91f3);}function a38_0x15b5(){const _0x676e84=['isProduction','table','416024iKnDUD','clear','garbage','828380KMOxcm','get','bind','2015490hQMGfm','getResume','config','settings','onRetry','226953EgOCdx','log','job','bot','run','3643146bsPkzK','job_retries','10777970lgylNn','value','[GARBAGE\x20ERROR\x20ON\x20RETRY]','exports','2354045hkNGwT'];a38_0x15b5=function(){return _0x676e84;};return a38_0x15b5();}(function(_0x5df952,_0x4c2d9d){const _0x59b817=a38_0x1be1,_0x49ad9e=_0x5df952();while(!![]){try{const _0x55af34=-parseInt(_0x59b817(0xaf))/0x1+-parseInt(_0x59b817(0xb2))/0x2+parseInt(_0x59b817(0xb7))/0x3+-parseInt(_0x59b817(0xac))/0x4+parseInt(_0x59b817(0xa9))/0x5+parseInt(_0x59b817(0xbc))/0x6+parseInt(_0x59b817(0xa5))/0x7;if(_0x55af34===_0x4c2d9d)break;else _0x49ad9e['push'](_0x49ad9e['shift']());}catch(_0x19b814){_0x49ad9e['push'](_0x49ad9e['shift']());}}}(a38_0x15b5,0xb7e4e));const retry=require('async-retry'),Messenger=require('../sdk/Messenger'),DataContext=require('../sdk/DataContext'),DataState=require('../sdk/DataState'),GarbageCollector=require('../sdk/GarbageCollector'),ObjectManager=require('../sdk/ObjectManager'),Utils=require('../sdk/Utils');class BotHandler{constructor(_0x9090fe,{garbage:_0x10044d}){const _0x178c07=a38_0x1be1;this[_0x178c07(0xb9)]=_0x9090fe,this[_0x178c07(0xba)]=_0x9090fe['bot']||{'settings':[]},this[_0x178c07(0xae)]=_0x10044d||new GarbageCollector();}async[a38_0x42d3b2(0xbb)](_0x37da76){const _0xf175ca=a38_0x42d3b2,_0x4e7f60=this[_0xf175ca(0xba)][_0xf175ca(0xb5)]['find'](_0x288d3c=>_0x288d3c['id']===_0xf175ca(0xb4))||{},_0x10cd71=this[_0xf175ca(0xb9)]['input_data']||{},_0x1c5f5f=new DataContext(_0x4e7f60[_0xf175ca(0xa6)],{'readonly':!![]}),_0x1551c7=new DataState('job-'+this[_0xf175ca(0xb9)]['id']),_0x10d4d9=new Messenger(this[_0xf175ca(0xb9)]),_0x21c07d={'garbage':this[_0xf175ca(0xae)],'state':_0x1551c7,'bot':new DataContext(this[_0xf175ca(0xba)],{'readonly':!![]}),'job':new DataContext(this[_0xf175ca(0xb9)],{'readonly':!![]}),'messenger':_0x10d4d9,'msg':_0x10d4d9,'config':_0x1c5f5f,'inputData':new DataContext(_0x10cd71,{'readonly':!![]})};await retry(async(_0x2c81b2,_0x3f8ceb)=>{await _0x37da76(_0x21c07d,{'bail':_0x2c81b2,'attempts':_0x3f8ceb});},{'retries':_0x1c5f5f[_0xf175ca(0xb0)](_0xf175ca(0xbd),0x2),'onRetry':this[_0xf175ca(0xb6)][_0xf175ca(0xb1)](this)});if(!Utils[_0xf175ca(0xaa)]()){const _0x9b0764=new ObjectManager(_0x21c07d),_0x46eb9b=await _0x9b0764[_0xf175ca(0xb3)]();console[_0xf175ca(0xab)](_0x46eb9b);}}[a38_0x42d3b2(0xb6)](_0x56f390){const _0x3ba73=a38_0x42d3b2;try{console['error'](_0x56f390),this[_0x3ba73(0xae)][_0x3ba73(0xad)]();}catch(_0x5188a4){console[_0x3ba73(0xb8)](_0x3ba73(0xa7),_0x5188a4);}}}module[a38_0x42d3b2(0xa8)]=BotHandler;