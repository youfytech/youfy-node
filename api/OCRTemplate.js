const a5_0x26ebb3=a5_0x3c2d;(function(_0x505528,_0x361620){const _0x4a89de=a5_0x3c2d,_0x1b8ac9=_0x505528();while(!![]){try{const _0x2f8716=-parseInt(_0x4a89de(0xa2))/0x1+parseInt(_0x4a89de(0x9c))/0x2+-parseInt(_0x4a89de(0x9a))/0x3+-parseInt(_0x4a89de(0x9e))/0x4*(parseInt(_0x4a89de(0x9d))/0x5)+-parseInt(_0x4a89de(0xa1))/0x6*(parseInt(_0x4a89de(0x99))/0x7)+parseInt(_0x4a89de(0x9b))/0x8*(parseInt(_0x4a89de(0xa3))/0x9)+parseInt(_0x4a89de(0x97))/0xa;if(_0x2f8716===_0x361620)break;else _0x1b8ac9['push'](_0x1b8ac9['shift']());}catch(_0x294f8b){_0x1b8ac9['push'](_0x1b8ac9['shift']());}}}(a5_0x4f27,0xe160e));const api=require('./instance'),{APIError}=require('../exceptions');function a5_0x4f27(){const _0x3f9c90=['891505uAjqWA','45ErqPHm','18802030BYHgaK','exports','578319DGtHAo','1168323xpOYRK','2816360eNPKVV','650804SEIzVr','12655snHkZg','1348bdctZW','[Fail\x20to\x20request\x20a\x20ocr\x20template]:\x20','find','66mvaYWs'];a5_0x4f27=function(){return _0x3f9c90;};return a5_0x4f27();}class OCRTemplateApi{static async[a5_0x26ebb3(0xa0)](_0x2ff067){const _0xc08dd8=a5_0x26ebb3;try{const _0x492ea9=await api['post']('ocr-templates/find',{'text':_0x2ff067});return _0x492ea9['data'];}catch(_0xbd2ec7){throw new APIError(_0xc08dd8(0x9f),_0xbd2ec7);}}}function a5_0x3c2d(_0x307b08,_0x202789){const _0x4f2744=a5_0x4f27();return a5_0x3c2d=function(_0x3c2d0c,_0x35f349){_0x3c2d0c=_0x3c2d0c-0x97;let _0xef3477=_0x4f2744[_0x3c2d0c];return _0xef3477;},a5_0x3c2d(_0x307b08,_0x202789);}module[a5_0x26ebb3(0x98)]=OCRTemplateApi;