const a62_0x349828=a62_0x53db;(function(_0x3c6cda,_0x272a29){const _0x5b30fb=a62_0x53db,_0x25e8ed=_0x3c6cda();while(!![]){try{const _0xe57ba=parseInt(_0x5b30fb(0x12c))/0x1+-parseInt(_0x5b30fb(0x128))/0x2+-parseInt(_0x5b30fb(0x12f))/0x3+-parseInt(_0x5b30fb(0x13c))/0x4+parseInt(_0x5b30fb(0x134))/0x5+parseInt(_0x5b30fb(0x135))/0x6+-parseInt(_0x5b30fb(0x132))/0x7*(-parseInt(_0x5b30fb(0x13a))/0x8);if(_0xe57ba===_0x272a29)break;else _0x25e8ed['push'](_0x25e8ed['shift']());}catch(_0x1afc8e){_0x25e8ed['push'](_0x25e8ed['shift']());}}}(a62_0x1543,0xe22ca));const nodemailer=require('nodemailer'),Handlebars=require('handlebars'),SettingsApi=require('../api/Settings'),TemplateApi=require('../api/Template');function a62_0x53db(_0x46359e,_0x9b69a7){const _0x1543e3=a62_0x1543();return a62_0x53db=function(_0x53db75,_0x49b7d7){_0x53db75=_0x53db75-0x127;let _0x3b5b17=_0x1543e3[_0x53db75];return _0x3b5b17;},a62_0x53db(_0x46359e,_0x9b69a7);}function a62_0x1543(){const _0x564794=['getByName','send','113912jLuXhk','addAttachment','5142044pGluIG','createTransport','1913172PoOAEe','push','auth','addTemplate','756190QmqdwV','settings','compile','415134VeSlwq','getTemplateData','user','854MEsryn','payload','875650MSwdcu','3830442vJhNuy','html','attachments'];a62_0x1543=function(){return _0x564794;};return a62_0x1543();}class Mailer{constructor(_0x3935ce){const _0x2985b5=a62_0x53db;this[_0x2985b5(0x12d)]=_0x3935ce,this[_0x2985b5(0x136)]='',this[_0x2985b5(0x137)]=[];}async[a62_0x349828(0x130)](_0x467338){const _0x3238a9=a62_0x349828,_0x43324c=await TemplateApi[_0x3238a9(0x138)](_0x467338);if(_0x43324c){const _0x1f0cf9=_0x43324c[_0x3238a9(0x133)]||{};return _0x1f0cf9[_0x3238a9(0x136)];}return null;}async[a62_0x349828(0x12b)](_0x37d28c,_0x2d1047){const _0x5ef9ce=a62_0x349828,_0x35d530=await this[_0x5ef9ce(0x130)](_0x37d28c),_0x2d40fe=_0x35d530?Handlebars[_0x5ef9ce(0x12e)](_0x35d530):null;this[_0x5ef9ce(0x136)]=_0x2d40fe(_0x2d1047);}[a62_0x349828(0x13b)](_0x3177ac){const _0x1834f3=a62_0x349828;this[_0x1834f3(0x137)][_0x1834f3(0x129)](_0x3177ac);}async[a62_0x349828(0x139)](_0xe794be){const _0x41df9f=a62_0x349828,_0x1024ae=this[_0x41df9f(0x12d)]||await SettingsApi['get']('email'),_0x4acf0e=nodemailer[_0x41df9f(0x127)](_0x1024ae),_0x5ecf34=[...this[_0x41df9f(0x137)],..._0xe794be['attachments']||[]],_0xeb3639={'from':_0x1024ae[_0x41df9f(0x12a)][_0x41df9f(0x131)],..._0xe794be,'html':this[_0x41df9f(0x136)]+(_0xe794be['html']||''),'attachments':_0x5ecf34};return await _0x4acf0e['sendMail'](_0xeb3639);}}module['exports']=Mailer;