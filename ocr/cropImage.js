const a51_0x411647=a51_0x3529;function a51_0x3529(_0x551d73,_0x56cc48){const _0x5d449e=a51_0x5d44();return a51_0x3529=function(_0x3529fc,_0x1e8602){_0x3529fc=_0x3529fc-0xd7;let _0x37f7c7=_0x5d449e[_0x3529fc];return _0x37f7c7;},a51_0x3529(_0x551d73,_0x56cc48);}(function(_0x4a4607,_0x2b063e){const _0x47efd7=a51_0x3529,_0x1fb9e2=_0x4a4607();while(!![]){try{const _0x78f969=parseInt(_0x47efd7(0xe9))/0x1*(parseInt(_0x47efd7(0xe8))/0x2)+-parseInt(_0x47efd7(0xf1))/0x3*(-parseInt(_0x47efd7(0xd7))/0x4)+parseInt(_0x47efd7(0xe0))/0x5+-parseInt(_0x47efd7(0xd8))/0x6*(parseInt(_0x47efd7(0xef))/0x7)+-parseInt(_0x47efd7(0xdb))/0x8+parseInt(_0x47efd7(0xdd))/0x9+-parseInt(_0x47efd7(0xd9))/0xa;if(_0x78f969===_0x2b063e)break;else _0x1fb9e2['push'](_0x1fb9e2['shift']());}catch(_0x59f3a7){_0x1fb9e2['push'](_0x1fb9e2['shift']());}}}(a51_0x5d44,0x9b767));const os=require('os'),{resolve}=require('path'),jimp=require('jimp'),{promisify}=require('util'),sizeOf=promisify(require('image-size')),apply_factor=(_0x4b23e4,_0x2c6256)=>Math['round'](parseInt(_0x4b23e4)*_0x2c6256);module[a51_0x411647(0xec)]=async function cropImage(_0x1eb5b8,_0x5f1473,_0x51db60={}){const _0x625dfe=a51_0x411647,_0xf4c104={'output_dir':os[_0x625dfe(0xe1)](),'file_width':0x9af,..._0x51db60},_0x18ce28=resolve(_0xf4c104['output_dir'],_0x1eb5b8['id']+_0x625dfe(0xeb)),_0x4690d2=await sizeOf(_0x5f1473)||{'width':0x0,'height':0x0},_0x46ec65=_0x4690d2[_0x625dfe(0xe6)]/_0xf4c104[_0x625dfe(0xe5)],_0x191fa7=_0x1eb5b8[_0x625dfe(0xee)]||{},_0x3d75ae=_0x191fa7[_0x625dfe(0xe7)]||_0x1eb5b8[_0x625dfe(0xed)]||_0x625dfe(0xf2),_0x2a7a71=_0x3d75ae[_0x625dfe(0xe3)](','),_0x2e66a8=apply_factor(_0x2a7a71[0x0],_0x46ec65),_0x1f050e=apply_factor(_0x2a7a71[0x1],_0x46ec65),_0x24ad36=apply_factor(_0x2a7a71[0x2],_0x46ec65),_0x525a79=apply_factor(_0x2a7a71[0x3],_0x46ec65),_0x34d32f=Math[_0x625dfe(0xea)](_0x24ad36-_0x2e66a8),_0x2e7ce4=Math[_0x625dfe(0xea)](_0x525a79-_0x1f050e),_0x334f06=0x1;try{const _0xc90fce=await jimp[_0x625dfe(0xdc)](_0x5f1473);return await _0xc90fce['crop'](_0x2e66a8,_0x1f050e,_0x34d32f,_0x2e7ce4),await _0xc90fce['resize'](Math[_0x625dfe(0xf0)](_0x34d32f*_0x334f06),Math[_0x625dfe(0xf0)](_0x2e7ce4*_0x334f06)),await _0xc90fce[_0x625dfe(0xdf)](_0x18ce28),await timer[_0x625dfe(0xe2)](0x12c),_0x18ce28;}catch(_0x984516){console[_0x625dfe(0xda)](_0x625dfe(0xe4),_0x984516[_0x625dfe(0xde)]);}return null;};function a51_0x5d44(){const _0x46649c=['message','write','754430dVDhFR','tmpdir','sleep','split','[CROP\x20ERROR]','file_width','width','coords','1902854GLoXyB','1cQswEo','abs','.jpg','exports','coordinates','payload','105EzmYOE','round','626490zZGpSp','0,0,0,0','12NuCqUv','50766rrRlrU','7080820FkrjWA','warn','3452952kBAdYh','read','1571292MuxKHT'];a51_0x5d44=function(){return _0x46649c;};return a51_0x5d44();}