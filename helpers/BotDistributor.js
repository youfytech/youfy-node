const a40_0x14253b=a40_0x40ac;(function(_0x6b44b9,_0x2f0af2){const _0x4c727f=a40_0x40ac,_0x5d6d1c=_0x6b44b9();while(!![]){try{const _0x21d770=-parseInt(_0x4c727f(0x159))/0x1+parseInt(_0x4c727f(0x13e))/0x2*(parseInt(_0x4c727f(0x144))/0x3)+parseInt(_0x4c727f(0x15b))/0x4*(parseInt(_0x4c727f(0x14f))/0x5)+parseInt(_0x4c727f(0x11b))/0x6+parseInt(_0x4c727f(0x146))/0x7+parseInt(_0x4c727f(0x137))/0x8*(-parseInt(_0x4c727f(0x14a))/0x9)+parseInt(_0x4c727f(0x126))/0xa;if(_0x21d770===_0x2f0af2)break;else _0x5d6d1c['push'](_0x5d6d1c['shift']());}catch(_0x592851){_0x5d6d1c['push'](_0x5d6d1c['shift']());}}}(a40_0x390c,0x99d80));function a40_0x390c(){const _0x4e90a7=['pkg\x20--public-packages\x20\x22*\x22\x20.\x20--public','/common/','bin','3358568ghCZKS','_copyDirIfExists','bots','/shared/','holder_dir','ISC','info','2FCfvhf','Install\x20bot\x20dependecies...','rm\x20-Rf\x20','/apps','_copyDir','package.json','313188kcqvjV','copySharedFiles','97006NKRYeb','removeBaseDistDir','bot_dir','workspace_dir','9nJXwca','stringify','shared','apps','mkdir\x20-p\x20','3556195wwivRj','Package.json\x20not\x20found.\x20It\x20should\x20be\x20in\x20the\x20root\x20of\x20the\x20project.','./src/index.js','/apps/','removeTempFiles','dist','dist_dir','**/*.html','rsync\x20--recursive\x20--exclude\x20\x27node_modules\x27\x20--exclude\x20\x27.git\x27\x20','scripts','627126lQGKQU','changePkgForDist','4PboEZF','getPackage','output_dir','4847250hcxHHK','cwd','moveToBaseDir','Alan\x20Bacelar\x20<alan@youfy.com.br>','pkg','holder_name','assets','pkg_dir','error','opts','mv\x20','397230wouNAa','main','apps/*','./index.js','copySourceFiles','/dist','inherit','Coping\x20bot\x20files...','base_dir','exports','yarn\x20dist','createWorkspacePkgJson','installDepedencies','name'];a40_0x390c=function(){return _0x4e90a7;};return a40_0x390c();}function a40_0x40ac(_0x2cc630,_0x59f82b){const _0x390ce0=a40_0x390c();return a40_0x40ac=function(_0x40ac2f,_0x40f92b){_0x40ac2f=_0x40ac2f-0x11b;let _0x2d8185=_0x390ce0[_0x40ac2f];return _0x2d8185;},a40_0x40ac(_0x2cc630,_0x59f82b);}const log=require('./logger'),findWorkspaceRoot=require('find-yarn-workspace-root'),{execSync}=require('child_process'),{resolve,basename}=require('path'),{writeFileSync,existsSync}=require('fs');class BotDistributor{constructor(_0xa1cc5a){const _0x42a591=a40_0x40ac;this[_0x42a591(0x124)]={'base_dir':process[_0x42a591(0x11c)](),'output_dir':'/tmp/yfy_bot_workspace_dist',..._0xa1cc5a},this[_0x42a591(0x122)]=resolve(this['opts'][_0x42a591(0x12e)],'package.json'),this[_0x42a591(0x11f)]=this[_0x42a591(0x15c)](),this[_0x42a591(0x149)]=findWorkspaceRoot(this[_0x42a591(0x124)][_0x42a591(0x12e)])||this[_0x42a591(0x124)][_0x42a591(0x12e)],this[_0x42a591(0x13b)]=resolve(this[_0x42a591(0x124)]['base_dir'],'../'),this['holder_name']=basename(this[_0x42a591(0x13b)]),this[_0x42a591(0x148)]=resolve(this[_0x42a591(0x124)][_0x42a591(0x15d)],basename(this[_0x42a591(0x11f)][_0x42a591(0x133)])),this[_0x42a591(0x155)]=resolve(this['bot_dir'],_0x42a591(0x154));}['getPackage'](){const _0x4da063=a40_0x40ac;try{return require(this.pkg_dir);}catch(_0x49c77d){return console[_0x4da063(0x123)](_0x4da063(0x150)),{};}}[a40_0x14253b(0x142)](_0x5ec1a9,_0x167533,{cwd:_0x4bcf47}={}){const _0x2ec792=a40_0x14253b;execSync(_0x2ec792(0x157)+_0x5ec1a9+'\x20'+_0x167533,{'stdio':_0x2ec792(0x12c),'cwd':_0x4bcf47});}[a40_0x14253b(0x138)](_0x48b2cc,_0x25c805,_0x61c907){existsSync(_0x48b2cc)&&this['_copyDir'](_0x48b2cc,_0x25c805,_0x61c907);}['removeTempFiles'](){const _0x27c0c1=a40_0x14253b,{output_dir:_0xe5f9d}=this[_0x27c0c1(0x124)];execSync(_0x27c0c1(0x140)+_0xe5f9d),execSync(_0x27c0c1(0x140)+this[_0x27c0c1(0x155)]);}['copySourceFiles'](){const _0x352034=a40_0x14253b;log[_0x352034(0x13d)](_0x352034(0x12d)),execSync(_0x352034(0x14e)+this['bot_dir']);const {base_dir:_0x2fcc83}=this['opts'];this['_copyDir']('*',this[_0x352034(0x148)],{'cwd':_0x2fcc83});}[a40_0x14253b(0x145)](){const _0x5f258b=a40_0x14253b;log[_0x5f258b(0x13d)]('Coping\x20shared\x20files...');const _0xed658d=this['opts'][_0x5f258b(0x15d)];execSync(_0x5f258b(0x14e)+_0xed658d+'/'+this[_0x5f258b(0x120)]),execSync(_0x5f258b(0x14e)+_0xed658d+_0x5f258b(0x141)),this[_0x5f258b(0x138)](this[_0x5f258b(0x149)]+_0x5f258b(0x13a),_0xed658d+_0x5f258b(0x13a)),this[_0x5f258b(0x138)](this['holder_dir']+_0x5f258b(0x135),_0xed658d+'/'+this[_0x5f258b(0x120)]+'/common/'),this[_0x5f258b(0x138)](this[_0x5f258b(0x13b)]+_0x5f258b(0x152),_0xed658d+'/'+this['holder_name']+_0x5f258b(0x141));const _0x1897d6=this[_0x5f258b(0x11f)][_0x5f258b(0x14d)]||[];for(const _0x19059c of _0x1897d6){this[_0x5f258b(0x142)](this[_0x5f258b(0x149)]+_0x5f258b(0x152)+_0x19059c+'/',_0xed658d+_0x5f258b(0x152)+_0x19059c+'/');}}[a40_0x14253b(0x132)](){const _0x208540=a40_0x14253b;log['info'](_0x208540(0x13f));const {output_dir:_0x19071e}=this[_0x208540(0x124)];execSync('yarn\x20install',{'stdio':'inherit','cwd':_0x19071e});}[a40_0x14253b(0x15a)](){const _0x396e11=a40_0x14253b,_0x51b80a=this['pkg'];_0x51b80a[_0x396e11(0x136)]=_0x51b80a['bin']||_0x396e11(0x129),_0x51b80a[_0x396e11(0x127)]=_0x51b80a['main']||_0x396e11(0x151);const _0x37e8d3=_0x51b80a['pkg_extras']||{},_0xb0ebcf=Array['isArray'](_0x37e8d3['assets'])?_0x37e8d3['assets']:_0x37e8d3[_0x396e11(0x121)]?[_0x37e8d3[_0x396e11(0x121)]]:[];_0x51b80a[_0x396e11(0x11f)]={'scripts':['**/*.js',..._0x37e8d3[_0x396e11(0x158)]||[]],'assets':['./src/assets/**',_0x396e11(0x156),..._0xb0ebcf],'outputPath':_0x396e11(0x154)},_0x51b80a[_0x396e11(0x158)]={..._0x51b80a['scripts'],'dist':_0x396e11(0x134)},writeFileSync(resolve(this[_0x396e11(0x148)],'package.json'),JSON['stringify'](_0x51b80a));}[a40_0x14253b(0x154)](){const _0x5bb79d=a40_0x14253b;this[_0x5bb79d(0x153)](),this[_0x5bb79d(0x12a)](),this[_0x5bb79d(0x145)](),this['createWorkspacePkgJson'](),this[_0x5bb79d(0x15a)](),this[_0x5bb79d(0x132)](),execSync(_0x5bb79d(0x130),{'stdio':'inherit','cwd':this[_0x5bb79d(0x148)]});}[a40_0x14253b(0x11d)](){const _0x1ded89=a40_0x14253b;execSync(_0x1ded89(0x125)+this['dist_dir']+'\x20'+this[_0x1ded89(0x124)][_0x1ded89(0x12e)]+_0x1ded89(0x12b));}[a40_0x14253b(0x147)](){const _0x4773f6=a40_0x14253b;execSync(_0x4773f6(0x140)+this[_0x4773f6(0x124)][_0x4773f6(0x12e)]+_0x4773f6(0x12b));}[a40_0x14253b(0x131)](){const _0x40576e=a40_0x14253b,_0x4b3fd1={'name':_0x40576e(0x139),'private':!![],'workspaces':{'packages':[basename(this[_0x40576e(0x148)]),_0x40576e(0x14c),_0x40576e(0x128),this['holder_name']+'/*']},'author':_0x40576e(0x11e),'license':_0x40576e(0x13c)};writeFileSync(resolve(this[_0x40576e(0x124)][_0x40576e(0x15d)],_0x40576e(0x143)),JSON[_0x40576e(0x14b)](_0x4b3fd1));}}module[a40_0x14253b(0x12f)]=BotDistributor;