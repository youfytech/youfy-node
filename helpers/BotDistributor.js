function a40_0x5025(_0x4bf1df,_0x3abb45){const _0x2f1a30=a40_0x2f1a();return a40_0x5025=function(_0x5025e9,_0x1114f7){_0x5025e9=_0x5025e9-0x1d8;let _0x23601a=_0x2f1a30[_0x5025e9];return _0x23601a;},a40_0x5025(_0x4bf1df,_0x3abb45);}const a40_0x41a968=a40_0x5025;(function(_0x3e8b0a,_0x44320a){const _0x187ac6=a40_0x5025,_0x50e7ee=_0x3e8b0a();while(!![]){try{const _0x2ea15a=-parseInt(_0x187ac6(0x219))/0x1+-parseInt(_0x187ac6(0x207))/0x2*(-parseInt(_0x187ac6(0x21d))/0x3)+-parseInt(_0x187ac6(0x1df))/0x4*(-parseInt(_0x187ac6(0x1e9))/0x5)+-parseInt(_0x187ac6(0x1dd))/0x6*(parseInt(_0x187ac6(0x1f6))/0x7)+-parseInt(_0x187ac6(0x1d9))/0x8+-parseInt(_0x187ac6(0x1d8))/0x9*(-parseInt(_0x187ac6(0x20e))/0xa)+-parseInt(_0x187ac6(0x1fa))/0xb*(parseInt(_0x187ac6(0x218))/0xc);if(_0x2ea15a===_0x44320a)break;else _0x50e7ee['push'](_0x50e7ee['shift']());}catch(_0x44b915){_0x50e7ee['push'](_0x50e7ee['shift']());}}}(a40_0x2f1a,0x75331));const log=require('./logger'),findWorkspaceRoot=require('find-yarn-workspace-root'),{execSync}=require('child_process'),{resolve,basename}=require('path'),{writeFileSync,existsSync}=require('fs');class BotDistributor{constructor(_0x466b47){const _0x24b589=a40_0x5025;this[_0x24b589(0x1e5)]={'base_dir':process[_0x24b589(0x203)](),'output_dir':_0x24b589(0x1da),..._0x466b47},this[_0x24b589(0x202)]=resolve(this[_0x24b589(0x1e5)]['base_dir'],_0x24b589(0x1f0)),this[_0x24b589(0x204)]=this[_0x24b589(0x200)](),this[_0x24b589(0x1ef)]=findWorkspaceRoot(this[_0x24b589(0x1e5)][_0x24b589(0x20b)])||this[_0x24b589(0x1e5)][_0x24b589(0x20b)],this['holder_dir']=resolve(this[_0x24b589(0x1e5)][_0x24b589(0x20b)],'../'),this['holder_name']=basename(this['holder_dir']),this[_0x24b589(0x1e8)]=resolve(this[_0x24b589(0x1e5)]['output_dir'],basename(this[_0x24b589(0x204)][_0x24b589(0x20f)])),this[_0x24b589(0x1f5)]=resolve(this[_0x24b589(0x1e8)],_0x24b589(0x1fc));}[a40_0x41a968(0x200)](){const _0x4ccb77=a40_0x41a968;try{return require(this.pkg_dir);}catch(_0x1b8c5b){return console[_0x4ccb77(0x21f)]('Package.json\x20not\x20found.\x20It\x20should\x20be\x20in\x20the\x20root\x20of\x20the\x20project.'),{};}}['_copyDir'](_0x321609,_0x13b37f,{cwd:_0x1842d3}={}){const _0x5c8645=a40_0x41a968;execSync(_0x5c8645(0x21c)+_0x321609+'\x20'+_0x13b37f,{'stdio':_0x5c8645(0x1dc),'cwd':_0x1842d3});}[a40_0x41a968(0x1f9)](_0x43ff6c,_0x47a035,_0x2b3d9d){const _0x5b83f4=a40_0x41a968;existsSync(_0x43ff6c)&&this[_0x5b83f4(0x213)](_0x43ff6c,_0x47a035,_0x2b3d9d);}[a40_0x41a968(0x21b)](){const _0x10f6aa=a40_0x41a968,{output_dir:_0x57f08b}=this[_0x10f6aa(0x1e5)];execSync(_0x10f6aa(0x1e7)+_0x57f08b),execSync(_0x10f6aa(0x1e7)+this[_0x10f6aa(0x1f5)]);}[a40_0x41a968(0x212)](){const _0x193b94=a40_0x41a968;log['info'](_0x193b94(0x1de)),execSync(_0x193b94(0x1fe)+this[_0x193b94(0x1e8)]);const {base_dir:_0x198f2d}=this['opts'];this[_0x193b94(0x213)]('*',this[_0x193b94(0x1e8)],{'cwd':_0x198f2d});}[a40_0x41a968(0x1f8)](){const _0x2719a0=a40_0x41a968;log[_0x2719a0(0x20c)](_0x2719a0(0x205));const _0x583f55=this[_0x2719a0(0x1e5)][_0x2719a0(0x1ff)];execSync(_0x2719a0(0x1fe)+_0x583f55+'/'+this[_0x2719a0(0x1e6)]),execSync(_0x2719a0(0x1fe)+_0x583f55+_0x2719a0(0x201)),this[_0x2719a0(0x1f9)](this[_0x2719a0(0x1ef)]+_0x2719a0(0x208),_0x583f55+_0x2719a0(0x208)),this['_copyDirIfExists'](this[_0x2719a0(0x1fb)]+'/common/',_0x583f55+'/'+this[_0x2719a0(0x1e6)]+_0x2719a0(0x1e1)),this['_copyDirIfExists'](this['holder_dir']+_0x2719a0(0x1e4),_0x583f55+'/'+this[_0x2719a0(0x1e6)]+_0x2719a0(0x201));const _0x462dc2=this[_0x2719a0(0x204)][_0x2719a0(0x211)]||[];for(const _0x46d915 of _0x462dc2){this['_copyDir'](this[_0x2719a0(0x1ef)]+'/apps/'+_0x46d915+'/',_0x583f55+_0x2719a0(0x1e4)+_0x46d915+'/');}}[a40_0x41a968(0x217)](){const _0x4b2680=a40_0x41a968;log[_0x4b2680(0x20c)](_0x4b2680(0x21e));const {output_dir:_0x48efab}=this[_0x4b2680(0x1e5)];execSync(_0x4b2680(0x1ec),{'stdio':_0x4b2680(0x1dc),'cwd':_0x48efab});}[a40_0x41a968(0x209)](){const _0xf7535=a40_0x41a968,_0x48135e=this[_0xf7535(0x204)];_0x48135e[_0xf7535(0x1ee)]=_0x48135e[_0xf7535(0x1ee)]||_0xf7535(0x1e0),_0x48135e[_0xf7535(0x215)]=_0x48135e[_0xf7535(0x215)]||_0xf7535(0x1f3);const _0x16c2c4=_0x48135e[_0xf7535(0x1f1)]||{},_0x1fc8f6=Array['isArray'](_0x16c2c4[_0xf7535(0x1e3)])?_0x16c2c4[_0xf7535(0x1e3)]:_0x16c2c4[_0xf7535(0x1e3)]?[_0x16c2c4[_0xf7535(0x1e3)]]:[];_0x48135e['pkg']={'scripts':[_0xf7535(0x20a),..._0x16c2c4[_0xf7535(0x1f2)]||[]],'assets':[_0xf7535(0x210),'**/*.html',..._0x1fc8f6],'outputPath':_0xf7535(0x1fc)},_0x48135e['scripts']={..._0x48135e[_0xf7535(0x1f2)],'dist':_0xf7535(0x1eb)},writeFileSync(resolve(this[_0xf7535(0x1e8)],_0xf7535(0x1f0)),JSON[_0xf7535(0x21a)](_0x48135e));}[a40_0x41a968(0x1fc)](){const _0x2e542e=a40_0x41a968;this['removeTempFiles'](),this[_0x2e542e(0x212)](),this['copySharedFiles'](),this[_0x2e542e(0x20d)](),this[_0x2e542e(0x209)](),this[_0x2e542e(0x217)](),execSync('yarn\x20dist',{'stdio':'inherit','cwd':this[_0x2e542e(0x1e8)]});}[a40_0x41a968(0x1ea)](){const _0x5d4dfa=a40_0x41a968;execSync(_0x5d4dfa(0x1f7)+this[_0x5d4dfa(0x1f5)]+'\x20'+this[_0x5d4dfa(0x1e5)][_0x5d4dfa(0x20b)]+_0x5d4dfa(0x1e2));}[a40_0x41a968(0x1f4)](){const _0x150f72=a40_0x41a968;execSync('rm\x20-Rf\x20'+this[_0x150f72(0x1e5)][_0x150f72(0x20b)]+_0x150f72(0x1e2));}[a40_0x41a968(0x20d)](){const _0x5044f2=a40_0x41a968,_0x85a7a4={'name':_0x5044f2(0x1db),'private':!![],'workspaces':{'packages':[basename(this[_0x5044f2(0x1e8)]),_0x5044f2(0x214),_0x5044f2(0x206),this['holder_name']+'/*']},'author':_0x5044f2(0x1fd),'license':_0x5044f2(0x1ed)};writeFileSync(resolve(this[_0x5044f2(0x1e5)][_0x5044f2(0x1ff)],_0x5044f2(0x1f0)),JSON[_0x5044f2(0x21a)](_0x85a7a4));}}function a40_0x2f1a(){const _0x4a6103=['457144vGmoxa','/tmp/yfy_bot_workspace_dist','bots','inherit','6fvYaWQ','Coping\x20bot\x20files...','2027700zVBjoH','./index.js','/common/','/dist','assets','/apps/','opts','holder_name','rm\x20-Rf\x20','bot_dir','5ehlDMf','moveToBaseDir','pkg\x20--public-packages\x20\x22*\x22\x20.\x20--public','yarn\x20install','ISC','bin','workspace_dir','package.json','pkg_extras','scripts','./src/index.js','removeBaseDistDir','dist_dir','5365234PEOUEJ','mv\x20','copySharedFiles','_copyDirIfExists','385SYPSxI','holder_dir','dist','Alan\x20Bacelar\x20<alan@youfy.com.br>','mkdir\x20-p\x20','output_dir','getPackage','/apps','pkg_dir','cwd','pkg','Coping\x20shared\x20files...','apps/*','1101922xUbrSX','/shared/','changePkgForDist','**/*.js','base_dir','info','createWorkspacePkgJson','65470RPSfuf','name','./src/assets/**','apps','copySourceFiles','_copyDir','shared','main','exports','installDepedencies','109236idHYXc','109968NqZFnd','stringify','removeTempFiles','rsync\x20--recursive\x20--exclude\x20\x27node_modules\x27\x20--exclude\x20\x27.git\x27\x20','3yILtBz','Install\x20bot\x20dependecies...','error','927gIrCcT'];a40_0x2f1a=function(){return _0x4a6103;};return a40_0x2f1a();}module[a40_0x41a968(0x216)]=BotDistributor;