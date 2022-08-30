const a40_0x25d12d = a40_0x15ed;
function a40_0x15ed(_0x33c248, _0x360406) {
    const _0x1d61ad = a40_0x1d61();
    return a40_0x15ed = function (_0x15ed70, _0x4da07b) {
        _0x15ed70 = _0x15ed70 - 0x16b;
        let _0x3a21c9 = _0x1d61ad[_0x15ed70];
        return _0x3a21c9;
    }, a40_0x15ed(_0x33c248, _0x360406);
}
(function (_0x125231, _0x2a5eb4) {
    const _0xa44eaa = a40_0x15ed, _0x3e2cd7 = _0x125231();
    while (!![]) {
        try {
            const _0x1e9553 = -parseInt(_0xa44eaa(0x185)) / 0x1 * (parseInt(_0xa44eaa(0x177)) / 0x2) + parseInt(_0xa44eaa(0x1a3)) / 0x3 * (parseInt(_0xa44eaa(0x1a5)) / 0x4) + -parseInt(_0xa44eaa(0x19a)) / 0x5 + parseInt(_0xa44eaa(0x190)) / 0x6 + parseInt(_0xa44eaa(0x1aa)) / 0x7 * (parseInt(_0xa44eaa(0x174)) / 0x8) + parseInt(_0xa44eaa(0x171)) / 0x9 + -parseInt(_0xa44eaa(0x17e)) / 0xa;
            if (_0x1e9553 === _0x2a5eb4)
                break;
            else
                _0x3e2cd7['push'](_0x3e2cd7['shift']());
        } catch (_0x584c01) {
            _0x3e2cd7['push'](_0x3e2cd7['shift']());
        }
    }
}(a40_0x1d61, 0x90f46));
const log = require('./logger'), findWorkspaceRoot = require('find-yarn-workspace-root'), {execSync} = require('child_process'), {resolve, basename} = require('path'), {writeFileSync, existsSync} = require('fs');
class BotDistributor {
    constructor(_0x28ae3c) {
        const _0x36465a = a40_0x15ed;
        this[_0x36465a(0x19c)] = {
            'base_dir': process[_0x36465a(0x189)](),
            'output_dir': '/tmp/yfy_bot_workspace_dist',
            ..._0x28ae3c
        }, this['pkg_dir'] = resolve(this[_0x36465a(0x19c)]['base_dir'], _0x36465a(0x1a1)), this[_0x36465a(0x17a)] = this[_0x36465a(0x186)](), this[_0x36465a(0x18b)] = findWorkspaceRoot(this['opts'][_0x36465a(0x16d)]) || this[_0x36465a(0x19c)][_0x36465a(0x16d)], this[_0x36465a(0x191)] = resolve(this[_0x36465a(0x19c)][_0x36465a(0x16d)], _0x36465a(0x179)), this[_0x36465a(0x19d)] = basename(this[_0x36465a(0x191)]), this['bot_dir'] = resolve(this['opts'][_0x36465a(0x184)], basename(this[_0x36465a(0x17a)]['name'])), this[_0x36465a(0x180)] = resolve(this[_0x36465a(0x17b)], 'dist');
    }
    ['getPackage']() {
        const _0x127436 = a40_0x15ed;
        try {
            return require(this.pkg_dir);
        } catch (_0x3a3125) {
            return console[_0x127436(0x170)](_0x127436(0x193)), {};
        }
    }
    ['_copyDir'](_0x3f1ff5, _0x523608, {cwd: _0x4d6a35} = {}) {
        const _0x5873eb = a40_0x15ed;
        execSync(_0x5873eb(0x178) + _0x3f1ff5 + '\x20' + _0x523608, {
            'stdio': _0x5873eb(0x17f),
            'cwd': _0x4d6a35
        });
    }
    ['_copyDirIfExists'](_0x3db3a0, _0x933b7f, _0x30e726) {
        const _0x2a4111 = a40_0x15ed;
        existsSync(_0x3db3a0) && this[_0x2a4111(0x183)](_0x3db3a0, _0x933b7f, _0x30e726);
    }
    [a40_0x25d12d(0x1ac)]() {
        const _0x345df6 = a40_0x25d12d, {output_dir: _0x934467} = this[_0x345df6(0x19c)];
        execSync('rm\x20-Rf\x20' + _0x934467), execSync(_0x345df6(0x187) + this[_0x345df6(0x180)]);
    }
    ['copySourceFiles']() {
        const _0x2569f7 = a40_0x25d12d;
        log[_0x2569f7(0x16c)](_0x2569f7(0x182)), execSync(_0x2569f7(0x198) + this[_0x2569f7(0x17b)]);
        const {base_dir: _0x4d861f} = this[_0x2569f7(0x19c)];
        this[_0x2569f7(0x183)]('*', this['bot_dir'], { 'cwd': _0x4d861f });
    }
    [a40_0x25d12d(0x18c)]() {
        const _0x1caa06 = a40_0x25d12d;
        log[_0x1caa06(0x16c)](_0x1caa06(0x18e));
        const _0xf38d9 = this['opts'][_0x1caa06(0x184)];
        execSync(_0x1caa06(0x198) + _0xf38d9 + '/' + this[_0x1caa06(0x19d)]), execSync(_0x1caa06(0x198) + _0xf38d9 + _0x1caa06(0x175)), this[_0x1caa06(0x173)](this[_0x1caa06(0x18b)] + _0x1caa06(0x19e), _0xf38d9 + '/shared/'), this[_0x1caa06(0x173)](this['holder_dir'] + _0x1caa06(0x176), _0xf38d9 + '/' + this[_0x1caa06(0x19d)] + '/common/'), this['_copyDirIfExists'](this[_0x1caa06(0x191)] + _0x1caa06(0x17c), _0xf38d9 + '/' + this[_0x1caa06(0x19d)] + _0x1caa06(0x175));
        const _0x430944 = this[_0x1caa06(0x17a)][_0x1caa06(0x192)] || [];
        for (const _0x1970aa of _0x430944) {
            this[_0x1caa06(0x183)](this['workspace_dir'] + _0x1caa06(0x17c) + _0x1970aa + '/', _0xf38d9 + _0x1caa06(0x17c) + _0x1970aa + '/');
        }
    }
    ['installDepedencies']() {
        const _0xf68ddf = a40_0x25d12d;
        log['info'](_0xf68ddf(0x1a8));
        const {output_dir: _0xb4d730} = this['opts'];
        execSync(_0xf68ddf(0x1a4), {
            'stdio': _0xf68ddf(0x17f),
            'cwd': _0xb4d730
        });
    }
    [a40_0x25d12d(0x1a2)]() {
        const _0x310b8e = a40_0x25d12d, _0x1be40b = this[_0x310b8e(0x17a)];
        _0x1be40b[_0x310b8e(0x181)] = _0x1be40b[_0x310b8e(0x181)] || './index.js', _0x1be40b[_0x310b8e(0x1ab)] = _0x1be40b[_0x310b8e(0x1ab)] || './src/index.js';
        const _0x333cff = _0x1be40b[_0x310b8e(0x172)] || {}, _0x4bda86 = Array[_0x310b8e(0x194)](_0x333cff[_0x310b8e(0x18d)]) ? _0x333cff[_0x310b8e(0x18d)] : _0x333cff['assets'] ? [_0x333cff[_0x310b8e(0x18d)]] : [];
        _0x1be40b[_0x310b8e(0x17a)] = {
            'scripts': [
                '**/*.js',
                ..._0x333cff[_0x310b8e(0x19f)] || []
            ],
            'assets': [
                _0x310b8e(0x195),
                _0x310b8e(0x196),
                ..._0x4bda86
            ],
            'outputPath': _0x310b8e(0x18a)
        }, _0x1be40b[_0x310b8e(0x19f)] = {
            ..._0x1be40b[_0x310b8e(0x19f)],
            'dist': _0x310b8e(0x16b)
        }, writeFileSync(resolve(this['bot_dir'], 'package.json'), JSON[_0x310b8e(0x188)](_0x1be40b));
    }
    [a40_0x25d12d(0x18a)]() {
        const _0x57e87a = a40_0x25d12d;
        this['removeTempFiles'](), this[_0x57e87a(0x1a6)](), this['copySharedFiles'](), this[_0x57e87a(0x1a9)](), this[_0x57e87a(0x1a2)](), this['installDepedencies'](), execSync(_0x57e87a(0x16e), {
            'stdio': _0x57e87a(0x17f),
            'cwd': this[_0x57e87a(0x17b)]
        });
    }
    ['moveToBaseDir']() {
        const _0x59253c = a40_0x25d12d;
        execSync(_0x59253c(0x17d) + this[_0x59253c(0x180)] + '\x20' + this['opts']['base_dir'] + _0x59253c(0x197));
    }
    [a40_0x25d12d(0x1a7)]() {
        const _0x461020 = a40_0x25d12d;
        execSync(_0x461020(0x187) + this[_0x461020(0x19c)][_0x461020(0x16d)] + _0x461020(0x197));
    }
    [a40_0x25d12d(0x1a9)]() {
        const _0x262256 = a40_0x25d12d, _0x8d9269 = {
                'name': _0x262256(0x19b),
                'private': !![],
                'workspaces': {
                    'packages': [
                        basename(this[_0x262256(0x17b)]),
                        'shared',
                        _0x262256(0x16f),
                        this[_0x262256(0x19d)] + '/*'
                    ]
                },
                'author': _0x262256(0x18f),
                'license': _0x262256(0x1a0)
            };
        writeFileSync(resolve(this['opts'][_0x262256(0x184)], _0x262256(0x1a1)), JSON[_0x262256(0x188)](_0x8d9269));
    }
}
module[a40_0x25d12d(0x199)] = BotDistributor;
function a40_0x1d61() {
    const _0x336812 = [
        'removeTempFiles',
        'pkg\x20--public-packages\x20\x22*\x22\x20.\x20--public',
        'info',
        'base_dir',
        'yarn\x20dist',
        'apps/*',
        'error',
        '4883724optwnM',
        'pkg_extras',
        '_copyDirIfExists',
        '8fNeMmC',
        '/apps',
        '/common/',
        '97488ZQmNXL',
        'rsync\x20--recursive\x20--exclude\x20\x27node_modules\x27\x20--exclude\x20\x27.git\x27\x20',
        '../',
        'pkg',
        'bot_dir',
        '/apps/',
        'mv\x20',
        '2749800nHgvnA',
        'inherit',
        'dist_dir',
        'bin',
        'Coping\x20bot\x20files...',
        '_copyDir',
        'output_dir',
        '17kFarpe',
        'getPackage',
        'rm\x20-Rf\x20',
        'stringify',
        'cwd',
        'dist',
        'workspace_dir',
        'copySharedFiles',
        'assets',
        'Coping\x20shared\x20files...',
        'Alan\x20Bacelar\x20<alan@youfy.com.br>',
        '1255470QFXQOZ',
        'holder_dir',
        'apps',
        'Package.json\x20not\x20found.\x20It\x20should\x20be\x20in\x20the\x20root\x20of\x20the\x20project.',
        'isArray',
        './src/assets/**',
        '**/*.html',
        '/dist',
        'mkdir\x20-p\x20',
        'exports',
        '1582230maCUZa',
        'bots',
        'opts',
        'holder_name',
        '/shared/',
        'scripts',
        'ISC',
        'package.json',
        'changePkgForDist',
        '198CVKWDS',
        'yarn\x20install',
        '67448GdrWLe',
        'copySourceFiles',
        'removeBaseDistDir',
        'Install\x20bot\x20dependecies...',
        'createWorkspacePkgJson',
        '1043245yZTwHF',
        'main'
    ];
    a40_0x1d61 = function () {
        return _0x336812;
    };
    return a40_0x1d61();
}