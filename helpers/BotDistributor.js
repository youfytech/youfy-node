const a40_0x551dd1=a40_0x43b6;(function(_0x4edb6c,_0xc18f50){const _0x33efff=a40_0x43b6,_0x4f0b59=_0x4edb6c();while(!![]){try{const _0x34b454=-parseInt(_0x33efff(0x159))/0x1*(parseInt(_0x33efff(0x13d))/0x2)+parseInt(_0x33efff(0x14b))/0x3+parseInt(_0x33efff(0x150))/0x4+-parseInt(_0x33efff(0x13c))/0x5*(-parseInt(_0x33efff(0x164))/0x6)+-parseInt(_0x33efff(0x158))/0x7*(parseInt(_0x33efff(0x161))/0x8)+parseInt(_0x33efff(0x13a))/0x9+-parseInt(_0x33efff(0x179))/0xa;if(_0x34b454===_0xc18f50)break;else _0x4f0b59['push'](_0x4f0b59['shift']());}catch(_0x11fc86){_0x4f0b59['push'](_0x4f0b59['shift']());}}}(a40_0xc509,0xec590));function a40_0xc509(){const _0x181cfd=['main','/dist','/common/','copySourceFiles','mv\x20','../','base_dir','rsync\x20--recursive\x20--exclude\x20\x27node_modules\x27\x20--exclude\x20\x27.git\x27\x20','_copyDirIfExists','name','ISC','holder_dir','pkg\x20--public-packages\x20\x22*\x22\x20.\x20--public','changePkgForDist','27335700JGaGRG','workspace_dir','yarn\x20dist','copySharedFiles','mkdir\x20-p\x20','14771709UUEvyc','createWorkspacePkgJson','935905JcLTBD','2jOvFjs','bin','./index.js','/tmp/yfy_bot_workspace_dist','pkg_dir','/shared/','assets','pkg','rm\x20-Rf\x20','holder_name','Coping\x20bot\x20files...','output_dir','pkg_extras','opts','4221393NxcmWe','removeBaseDistDir','package.json','info','apps','6870824zLQTFM','removeTempFiles','inherit','yarn\x20install','scripts','./src/assets/**','_copyDir','dist_dir','5005lTQhlR','1932170JOQVdu','cwd','bot_dir','shared','error','/apps','isArray','**/*.js','4952ymxJHG','/apps/','**/*.html','42VzPmtZ','moveToBaseDir','dist','installDepedencies','getPackage','Install\x20bot\x20dependecies...','stringify'];a40_0xc509=function(){return _0x181cfd;};return a40_0xc509();}const log=require('./logger'),findWorkspaceRoot=require('find-yarn-workspace-root'),{execSync}=require('child_process'),{resolve,basename}=require('path'),{writeFileSync,existsSync}=require('fs');class BotDistributor{constructor(_0x258778){const _0xfb08e2=a40_0x43b6;this[_0xfb08e2(0x14a)]={'base_dir':process[_0xfb08e2(0x15a)](),'output_dir':_0xfb08e2(0x140),..._0x258778},this[_0xfb08e2(0x141)]=resolve(this[_0xfb08e2(0x14a)]['base_dir'],_0xfb08e2(0x14d)),this[_0xfb08e2(0x144)]=this['getPackage'](),this[_0xfb08e2(0x17a)]=findWorkspaceRoot(this['opts'][_0xfb08e2(0x171)])||this['opts'][_0xfb08e2(0x171)],this[_0xfb08e2(0x176)]=resolve(this[_0xfb08e2(0x14a)][_0xfb08e2(0x171)],_0xfb08e2(0x170)),this[_0xfb08e2(0x146)]=basename(this[_0xfb08e2(0x176)]),this[_0xfb08e2(0x15b)]=resolve(this[_0xfb08e2(0x14a)][_0xfb08e2(0x148)],basename(this[_0xfb08e2(0x144)][_0xfb08e2(0x174)])),this['dist_dir']=resolve(this[_0xfb08e2(0x15b)],_0xfb08e2(0x166));}[a40_0x551dd1(0x168)](){const _0x46e31a=a40_0x551dd1;try{return require(this.pkg_dir);}catch(_0x2afb3a){return console[_0x46e31a(0x15d)]('Package.json\x20not\x20found.\x20It\x20should\x20be\x20in\x20the\x20root\x20of\x20the\x20project.'),{};}}[a40_0x551dd1(0x156)](_0x34da64,_0x111a39,{cwd:_0x49efcd}={}){const _0x16ecff=a40_0x551dd1;execSync(_0x16ecff(0x172)+_0x34da64+'\x20'+_0x111a39,{'stdio':'inherit','cwd':_0x49efcd});}[a40_0x551dd1(0x173)](_0x2b9fb2,_0x2a4bef,_0x56ed04){const _0x1037b9=a40_0x551dd1;existsSync(_0x2b9fb2)&&this[_0x1037b9(0x156)](_0x2b9fb2,_0x2a4bef,_0x56ed04);}[a40_0x551dd1(0x151)](){const _0xf46de4=a40_0x551dd1,{output_dir:_0x4c070b}=this[_0xf46de4(0x14a)];execSync(_0xf46de4(0x145)+_0x4c070b),execSync(_0xf46de4(0x145)+this[_0xf46de4(0x157)]);}[a40_0x551dd1(0x16e)](){const _0x23ab47=a40_0x551dd1;log[_0x23ab47(0x14e)](_0x23ab47(0x147)),execSync(_0x23ab47(0x139)+this[_0x23ab47(0x15b)]);const {base_dir:_0x316d87}=this[_0x23ab47(0x14a)];this[_0x23ab47(0x156)]('*',this['bot_dir'],{'cwd':_0x316d87});}[a40_0x551dd1(0x17c)](){const _0x42f96d=a40_0x551dd1;log[_0x42f96d(0x14e)]('Coping\x20shared\x20files...');const _0x3929ad=this['opts']['output_dir'];execSync('mkdir\x20-p\x20'+_0x3929ad+'/'+this[_0x42f96d(0x146)]),execSync('mkdir\x20-p\x20'+_0x3929ad+'/apps'),this[_0x42f96d(0x173)](this[_0x42f96d(0x17a)]+_0x42f96d(0x142),_0x3929ad+_0x42f96d(0x142)),this['_copyDirIfExists'](this[_0x42f96d(0x176)]+'/common/',_0x3929ad+'/'+this[_0x42f96d(0x146)]+_0x42f96d(0x16d)),this[_0x42f96d(0x173)](this['holder_dir']+_0x42f96d(0x162),_0x3929ad+'/'+this[_0x42f96d(0x146)]+_0x42f96d(0x15e));const _0xaecc87=this[_0x42f96d(0x144)][_0x42f96d(0x14f)]||[];for(const _0x31eabf of _0xaecc87){this[_0x42f96d(0x156)](this[_0x42f96d(0x17a)]+_0x42f96d(0x162)+_0x31eabf+'/',_0x3929ad+'/apps/'+_0x31eabf+'/');}}[a40_0x551dd1(0x167)](){const _0x42d01c=a40_0x551dd1;log[_0x42d01c(0x14e)](_0x42d01c(0x169));const {output_dir:_0x2dbce9}=this[_0x42d01c(0x14a)];execSync(_0x42d01c(0x153),{'stdio':_0x42d01c(0x152),'cwd':_0x2dbce9});}[a40_0x551dd1(0x178)](){const _0x2e2d74=a40_0x551dd1,_0x243b90=this[_0x2e2d74(0x144)];_0x243b90[_0x2e2d74(0x13e)]=_0x243b90[_0x2e2d74(0x13e)]||_0x2e2d74(0x13f),_0x243b90[_0x2e2d74(0x16b)]=_0x243b90[_0x2e2d74(0x16b)]||'./src/index.js';const _0x2a3ae4=_0x243b90[_0x2e2d74(0x149)]||{},_0x455cc4=Array[_0x2e2d74(0x15f)](_0x2a3ae4[_0x2e2d74(0x143)])?_0x2a3ae4[_0x2e2d74(0x143)]:_0x2a3ae4[_0x2e2d74(0x143)]?[_0x2a3ae4[_0x2e2d74(0x143)]]:[];_0x243b90[_0x2e2d74(0x144)]={'scripts':[_0x2e2d74(0x160),..._0x2a3ae4[_0x2e2d74(0x154)]||[]],'assets':[_0x2e2d74(0x155),_0x2e2d74(0x163),..._0x455cc4],'outputPath':_0x2e2d74(0x166)},_0x243b90[_0x2e2d74(0x154)]={..._0x243b90[_0x2e2d74(0x154)],'dist':_0x2e2d74(0x177)},writeFileSync(resolve(this[_0x2e2d74(0x15b)],'package.json'),JSON[_0x2e2d74(0x16a)](_0x243b90));}[a40_0x551dd1(0x166)](){const _0x348006=a40_0x551dd1;this[_0x348006(0x151)](),this[_0x348006(0x16e)](),this[_0x348006(0x17c)](),this['createWorkspacePkgJson'](),this[_0x348006(0x178)](),this['installDepedencies'](),execSync(_0x348006(0x17b),{'stdio':'inherit','cwd':this[_0x348006(0x15b)]});}[a40_0x551dd1(0x165)](){const _0xe6ebe=a40_0x551dd1;execSync(_0xe6ebe(0x16f)+this[_0xe6ebe(0x157)]+'\x20'+this['opts']['base_dir']+_0xe6ebe(0x16c));}[a40_0x551dd1(0x14c)](){const _0x915e1d=a40_0x551dd1;execSync('rm\x20-Rf\x20'+this['opts'][_0x915e1d(0x171)]+_0x915e1d(0x16c));}[a40_0x551dd1(0x13b)](){const _0x2da4de=a40_0x551dd1,_0x293b3f={'name':'bots','private':!![],'workspaces':{'packages':[basename(this['bot_dir']),_0x2da4de(0x15c),'apps/*',this[_0x2da4de(0x146)]+'/*']},'author':'Alan\x20Bacelar\x20<alan@youfy.com.br>','license':_0x2da4de(0x175)};writeFileSync(resolve(this[_0x2da4de(0x14a)][_0x2da4de(0x148)],_0x2da4de(0x14d)),JSON[_0x2da4de(0x16a)](_0x293b3f));}}function a40_0x43b6(_0x40110b,_0x2ca42f){const _0xc509f9=a40_0xc509();return a40_0x43b6=function(_0x43b64c,_0x1a9e99){_0x43b64c=_0x43b64c-0x139;let _0x125ee5=_0xc509f9[_0x43b64c];return _0x125ee5;},a40_0x43b6(_0x40110b,_0x2ca42f);}module['exports']=BotDistributor;