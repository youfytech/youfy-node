const a0_0x35af5c=a0_0x3222;function a0_0xe6eb(){const _0x3a0b26=['[Fail\x20to\x20update\x20bot]:\x20','2709657WMvSyN','bots/','9naOEqt','data','133218bITFJV','get','10ZPDxBx','6UrkBzO','exports','update','40040VAoxAO','[Fail\x20to\x20request\x20bot]:\x20','isProduction','16322292modgOE','15EcCUNe','784482VACFat','481910YGUXBP','678752QJQeUI','973PztvZk'];a0_0xe6eb=function(){return _0x3a0b26;};return a0_0xe6eb();}(function(_0x212594,_0x367689){const _0x41bf5c=a0_0x3222,_0x303f42=_0x212594();while(!![]){try{const _0x4452aa=parseInt(_0x41bf5c(0x1c0))/0x1*(-parseInt(_0x41bf5c(0x1c2))/0x2)+parseInt(_0x41bf5c(0x1c5))/0x3*(-parseInt(_0x41bf5c(0x1bb))/0x4)+-parseInt(_0x41bf5c(0x1b8))/0x5*(parseInt(_0x41bf5c(0x1b9))/0x6)+parseInt(_0x41bf5c(0x1bc))/0x7*(parseInt(_0x41bf5c(0x1c8))/0x8)+parseInt(_0x41bf5c(0x1be))/0x9*(-parseInt(_0x41bf5c(0x1c4))/0xa)+-parseInt(_0x41bf5c(0x1ba))/0xb+parseInt(_0x41bf5c(0x1b7))/0xc;if(_0x4452aa===_0x367689)break;else _0x303f42['push'](_0x303f42['shift']());}catch(_0x5affd3){_0x303f42['push'](_0x303f42['shift']());}}}(a0_0xe6eb,0x5cc01));function a0_0x3222(_0x4f1885,_0x43ff13){const _0xe6eb1a=a0_0xe6eb();return a0_0x3222=function(_0x32224d,_0x26554e){_0x32224d=_0x32224d-0x1b5;let _0x54d0f6=_0xe6eb1a[_0x32224d];return _0x54d0f6;},a0_0x3222(_0x4f1885,_0x43ff13);}const api=require('./instance'),{APIError}=require('../exceptions'),BotMock=require('./mocks/BotMock'),Utils=require('../sdk/Utils');class Bot{static async['fetch'](_0x395f6b){const _0x45c7cd=a0_0x3222;try{const _0x495f51=await api[_0x45c7cd(0x1c3)]('bots/'+_0x395f6b);return _0x495f51[_0x45c7cd(0x1c1)];}catch(_0x2b3041){throw new APIError(_0x45c7cd(0x1b5),_0x2b3041);}}static async[a0_0x35af5c(0x1c7)](_0x34f06a,_0x3fd989){const _0x5ed69c=a0_0x35af5c;try{const _0x132281=await api['put'](_0x5ed69c(0x1bf)+_0x34f06a,_0x3fd989);return _0x132281[_0x5ed69c(0x1c1)];}catch(_0xdc9870){throw new APIError(_0x5ed69c(0x1bd),_0xdc9870);}}}module[a0_0x35af5c(0x1c6)]=Utils[a0_0x35af5c(0x1b6)]()?Bot:BotMock;