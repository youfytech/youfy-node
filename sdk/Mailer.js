function a62_0x6836(){const _0x1ed01d=['sendMail','html','settings','auth','6453csMIfv','88869mXwQmo','compile','attachments','user','addAttachment','45euvXeC','10rklAEY','18558727fDfWKR','payload','2058120nXpmab','addTemplate','createTransport','88153mUkVVa','830BpLWwu','exports','getTemplateData','12ttdUKP','email','push','73764orDfsv','7byvIpn','3027208tjtfCW','send'];a62_0x6836=function(){return _0x1ed01d;};return a62_0x6836();}const a62_0x3ccab6=a62_0x2dd3;(function(_0x19880a,_0x4647be){const _0xa3ef92=a62_0x2dd3,_0x3b5afe=_0x19880a();while(!![]){try{const _0x5e348f=parseInt(_0xa3ef92(0x115))/0x1*(-parseInt(_0xa3ef92(0x10f))/0x2)+-parseInt(_0xa3ef92(0x109))/0x3+-parseInt(_0xa3ef92(0x112))/0x4+-parseInt(_0xa3ef92(0x10e))/0x5*(parseInt(_0xa3ef92(0x11c))/0x6)+-parseInt(_0xa3ef92(0x11d))/0x7*(parseInt(_0xa3ef92(0x11e))/0x8)+parseInt(_0xa3ef92(0x108))/0x9*(parseInt(_0xa3ef92(0x116))/0xa)+parseInt(_0xa3ef92(0x110))/0xb*(parseInt(_0xa3ef92(0x119))/0xc);if(_0x5e348f===_0x4647be)break;else _0x3b5afe['push'](_0x3b5afe['shift']());}catch(_0x49488f){_0x3b5afe['push'](_0x3b5afe['shift']());}}}(a62_0x6836,0x4293f));const nodemailer=require('nodemailer'),Handlebars=require('handlebars'),SettingsApi=require('../api/Settings'),TemplateApi=require('../api/Template');function a62_0x2dd3(_0x3e1258,_0x5effd2){const _0x6836c9=a62_0x6836();return a62_0x2dd3=function(_0x2dd30c,_0x72647a){_0x2dd30c=_0x2dd30c-0x108;let _0x5f31f2=_0x6836c9[_0x2dd30c];return _0x5f31f2;},a62_0x2dd3(_0x3e1258,_0x5effd2);}class Mailer{constructor(_0x3a2517){const _0x3e0b17=a62_0x2dd3;this[_0x3e0b17(0x122)]=_0x3a2517,this[_0x3e0b17(0x121)]='',this[_0x3e0b17(0x10b)]=[];}async[a62_0x3ccab6(0x118)](_0x570869){const _0x9143f6=a62_0x3ccab6,_0x3f42e7=await TemplateApi['getByName'](_0x570869);if(_0x3f42e7){const _0x37a515=_0x3f42e7[_0x9143f6(0x111)]||{};return _0x37a515['html'];}return null;}async[a62_0x3ccab6(0x113)](_0xc2fe64,_0x5b6e8f){const _0x1bc5d4=a62_0x3ccab6,_0x256cc7=await this[_0x1bc5d4(0x118)](_0xc2fe64),_0x29a537=_0x256cc7?Handlebars[_0x1bc5d4(0x10a)](_0x256cc7):null;this[_0x1bc5d4(0x121)]=_0x29a537(_0x5b6e8f);}[a62_0x3ccab6(0x10d)](_0x38b6de){const _0x2a55f2=a62_0x3ccab6;this[_0x2a55f2(0x10b)][_0x2a55f2(0x11b)](_0x38b6de);}async[a62_0x3ccab6(0x11f)](_0xd804c3){const _0x38e347=a62_0x3ccab6,_0x3f8080=this[_0x38e347(0x122)]||await SettingsApi['get'](_0x38e347(0x11a)),_0x5ef9b1=nodemailer[_0x38e347(0x114)](_0x3f8080),_0x18f0ca=[...this[_0x38e347(0x10b)],..._0xd804c3[_0x38e347(0x10b)]||[]],_0x5499a5={'from':_0x3f8080[_0x38e347(0x123)][_0x38e347(0x10c)],..._0xd804c3,'html':this[_0x38e347(0x121)]+(_0xd804c3['html']||''),'attachments':_0x18f0ca};return await _0x5ef9b1[_0x38e347(0x120)](_0x5499a5);}}module[a62_0x3ccab6(0x117)]=Mailer;