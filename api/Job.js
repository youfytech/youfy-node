const a3_0x5efc59=a3_0x5699;(function(_0x24612d,_0x2aa888){const _0x1473b3=a3_0x5699,_0x16fc2e=_0x24612d();while(!![]){try{const _0x3ee8d7=-parseInt(_0x1473b3(0x1af))/0x1+-parseInt(_0x1473b3(0x1ab))/0x2*(-parseInt(_0x1473b3(0x1a1))/0x3)+parseInt(_0x1473b3(0x1a9))/0x4+-parseInt(_0x1473b3(0x1ae))/0x5+-parseInt(_0x1473b3(0x1b7))/0x6*(-parseInt(_0x1473b3(0x1b1))/0x7)+-parseInt(_0x1473b3(0x1b2))/0x8*(-parseInt(_0x1473b3(0x1a2))/0x9)+-parseInt(_0x1473b3(0x1b9))/0xa;if(_0x3ee8d7===_0x2aa888)break;else _0x16fc2e['push'](_0x16fc2e['shift']());}catch(_0x3960b6){_0x16fc2e['push'](_0x16fc2e['shift']());}}}(a3_0x375d,0xb4719));function a3_0x5699(_0x4c4c26,_0x2ecc5b){const _0x375d54=a3_0x375d();return a3_0x5699=function(_0x56994f,_0xc327c4){_0x56994f=_0x56994f-0x1a1;let _0x4bf106=_0x375d54[_0x56994f];return _0x4bf106;},a3_0x5699(_0x4c4c26,_0x2ecc5b);}const api=require('./instance'),{APIError}=require('../exceptions'),Utils=require('../sdk/Utils'),JobMock=require('./mocks/JobMock');function a3_0x375d(){const _0x265b99=['jobs/','[Fail\x20to\x20request\x20job\x20initialization]:\x20','update','2516696KfIiZB','[Fail\x20to\x20request\x20job]:\x20','1579246SxuyCs','get','exports','4851870MsJpcs','87604zmrLnm','isProduction','87262xxzepa','5950352JKGjKt',']:\x20','post','updateStatus','/init','642umgfdF','fetch','16993780vQnTNV','data','[Fail\x20to\x20update\x20job\x20status\x20to\x20','[Fail\x20to\x20update\x20job]:\x20','WORKING','create','put','3psrfXK','9VyoqlR','jobs','[Fail\x20to\x20add\x20warnings\x20job]:\x20','addWarn'];a3_0x375d=function(){return _0x265b99;};return a3_0x375d();}class Job{static async[a3_0x5efc59(0x1b8)](_0x16fedd){const _0xc67351=a3_0x5efc59;try{const _0x5585bb=await api[_0xc67351(0x1ac)]('jobs/'+_0x16fedd);return _0x5585bb[_0xc67351(0x1ba)];}catch(_0x4ba242){throw new APIError(_0xc67351(0x1aa),_0x4ba242);}}static async['init'](_0x236dba,_0x70a1eb){const _0x834a40=a3_0x5efc59;try{const _0x42e723=await api[_0x834a40(0x1bf)]('jobs/'+_0x236dba+_0x834a40(0x1b6),{'bot_id':_0x70a1eb});return _0x42e723[_0x834a40(0x1ba)]||{};}catch(_0x4cb045){throw new APIError(_0x834a40(0x1a7),_0x4cb045);}}static async[a3_0x5efc59(0x1be)](_0x6251b4){const _0x4d8473=a3_0x5efc59;try{const _0x353a16=await api['post'](_0x4d8473(0x1a3),{'status':_0x4d8473(0x1bd),'attempts':0x0,'requested_at':new Date(),..._0x6251b4});return _0x353a16[_0x4d8473(0x1ba)]||{};}catch(_0x4166ed){throw new APIError('[Fail\x20to\x20request\x20create\x20job]:\x20',_0x4166ed);}}static async[a3_0x5efc59(0x1b5)](_0x3bb219,_0x4505d4,_0x1f99e1){const _0x43ff88=a3_0x5efc59;try{const _0x4aba19=await api[_0x43ff88(0x1bf)]('jobs/'+_0x3bb219+'/'+_0x4505d4,{'error':_0x1f99e1});return _0x4aba19[_0x43ff88(0x1ba)]||{};}catch(_0x11463f){throw new APIError(_0x43ff88(0x1bb)+_0x4505d4+_0x43ff88(0x1b3),_0x11463f);}}static async[a3_0x5efc59(0x1a8)](_0x4fb7cf,_0x4c5151){const _0x5e5417=a3_0x5efc59;try{const _0x1c7f57=await api[_0x5e5417(0x1bf)](_0x5e5417(0x1a6)+_0x4fb7cf,_0x4c5151);return _0x1c7f57[_0x5e5417(0x1ba)]||{};}catch(_0x4e99d7){throw new APIError(_0x5e5417(0x1bc),_0x4e99d7);}}static async[a3_0x5efc59(0x1a5)](_0x45a262,_0x205060){const _0x1de421=a3_0x5efc59;try{const _0x4ebc1f=await api[_0x1de421(0x1b4)](_0x1de421(0x1a6)+_0x45a262+'/warnings',_0x205060);return _0x4ebc1f[_0x1de421(0x1ba)]||{};}catch(_0xb497d){throw new APIError(_0x1de421(0x1a4),_0xb497d);}}}module[a3_0x5efc59(0x1ad)]=Utils[a3_0x5efc59(0x1b0)]()?Job:JobMock;