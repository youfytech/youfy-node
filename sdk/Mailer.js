const a62_0x848c63=a62_0x23da;(function(_0x29aeff,_0x596e22){const _0x1f6380=a62_0x23da,_0x2fdba3=_0x29aeff();while(!![]){try{const _0x485016=-parseInt(_0x1f6380(0xe7))/0x1*(-parseInt(_0x1f6380(0xe4))/0x2)+parseInt(_0x1f6380(0xd1))/0x3+parseInt(_0x1f6380(0xe1))/0x4+parseInt(_0x1f6380(0xd6))/0x5+-parseInt(_0x1f6380(0xe0))/0x6*(-parseInt(_0x1f6380(0xe5))/0x7)+-parseInt(_0x1f6380(0xe6))/0x8+-parseInt(_0x1f6380(0xd4))/0x9;if(_0x485016===_0x596e22)break;else _0x2fdba3['push'](_0x2fdba3['shift']());}catch(_0xcbaf76){_0x2fdba3['push'](_0x2fdba3['shift']());}}}(a62_0x115e,0x22697));const nodemailer=require('nodemailer'),Handlebars=require('handlebars'),SettingsApi=require('../api/Settings'),TemplateApi=require('../api/Template');function a62_0x23da(_0x2c2d3b,_0x11388f){const _0x115e13=a62_0x115e();return a62_0x23da=function(_0x23daf5,_0x53eb7d){_0x23daf5=_0x23daf5-0xd1;let _0x5ead5e=_0x115e13[_0x23daf5];return _0x5ead5e;},a62_0x23da(_0x2c2d3b,_0x11388f);}function a62_0x115e(){const _0x35964f=['1MkZvup','211707vSlmLa','createTransport','exports','2239551WJINmo','get','23360IAmqJe','getByName','payload','email','send','compile','auth','getTemplateData','settings','html','24eoHjpS','788632MlCHMK','addTemplate','attachments','260398sgQTXV','366842LOZAyV','1779456fGEdKZ'];a62_0x115e=function(){return _0x35964f;};return a62_0x115e();}class Mailer{constructor(_0x3d619b){const _0x5251b9=a62_0x23da;this['settings']=_0x3d619b,this['html']='',this[_0x5251b9(0xe3)]=[];}async[a62_0x848c63(0xdd)](_0x4fd7e5){const _0x4c27d9=a62_0x848c63,_0x316a82=await TemplateApi[_0x4c27d9(0xd7)](_0x4fd7e5);if(_0x316a82){const _0x3dab2f=_0x316a82[_0x4c27d9(0xd8)]||{};return _0x3dab2f[_0x4c27d9(0xdf)];}return null;}async[a62_0x848c63(0xe2)](_0x47ce58,_0x49a506){const _0x36de49=a62_0x848c63,_0xdcf17f=await this[_0x36de49(0xdd)](_0x47ce58),_0xc74b04=_0xdcf17f?Handlebars[_0x36de49(0xdb)](_0xdcf17f):null;this[_0x36de49(0xdf)]=_0xc74b04(_0x49a506);}['addAttachment'](_0x5154ed){this['attachments']['push'](_0x5154ed);}async[a62_0x848c63(0xda)](_0x3c959b){const _0x1d945f=a62_0x848c63,_0x15612c=this[_0x1d945f(0xde)]||await SettingsApi[_0x1d945f(0xd5)](_0x1d945f(0xd9)),_0x1a1179=nodemailer[_0x1d945f(0xd2)](_0x15612c),_0x2e9b08=[...this[_0x1d945f(0xe3)],..._0x3c959b['attachments']||[]],_0x1aa91a={'from':_0x15612c[_0x1d945f(0xdc)]['user'],..._0x3c959b,'html':this[_0x1d945f(0xdf)]+(_0x3c959b[_0x1d945f(0xdf)]||''),'attachments':_0x2e9b08};return await _0x1a1179['sendMail'](_0x1aa91a);}}module[a62_0x848c63(0xd3)]=Mailer;