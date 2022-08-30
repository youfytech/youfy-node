const a18_0x2e3ad0 = a18_0x2efe;
(function (_0x5d4120, _0x534992) {
    const _0x2ab900 = a18_0x2efe, _0x1a2cd7 = _0x5d4120();
    while (!![]) {
        try {
            const _0x46e58e = -parseInt(_0x2ab900(0x1f5)) / 0x1 + parseInt(_0x2ab900(0x1ea)) / 0x2 + -parseInt(_0x2ab900(0x1ed)) / 0x3 * (-parseInt(_0x2ab900(0x1ef)) / 0x4) + -parseInt(_0x2ab900(0x1e9)) / 0x5 + -parseInt(_0x2ab900(0x1f2)) / 0x6 + parseInt(_0x2ab900(0x1e8)) / 0x7 + -parseInt(_0x2ab900(0x1e7)) / 0x8;
            if (_0x46e58e === _0x534992)
                break;
            else
                _0x1a2cd7['push'](_0x1a2cd7['shift']());
        } catch (_0x10498a) {
            _0x1a2cd7['push'](_0x1a2cd7['shift']());
        }
    }
}(a18_0x5322, 0x1fa15));
function a18_0x5322() {
    const _0x3a12aa = [
        '1808359DkpYYD',
        '1152850QIgcNf',
        '354330QlTGhd',
        'packageable',
        'state_dir',
        '616359ENFGSK',
        'exports',
        '4LFKUtz',
        'get',
        'Show\x20bot\x20information',
        '259872tGWgut',
        'isProduction',
        'isHeadless',
        '82943ieYCge',
        'getId',
        'cwd',
        'name',
        '1236584HGwvNj'
    ];
    a18_0x5322 = function () {
        return _0x3a12aa;
    };
    return a18_0x5322();
}
function a18_0x2efe(_0x2e0340, _0x1dacd2) {
    const _0x5322c8 = a18_0x5322();
    return a18_0x2efe = function (_0x2efed9, _0x58fb31) {
        _0x2efed9 = _0x2efed9 - 0x1e4;
        let _0x5a9d2c = _0x5322c8[_0x2efed9];
        return _0x5a9d2c;
    }, a18_0x2efe(_0x2e0340, _0x1dacd2);
}
const os = require('os'), Package = require('../../sdk/Package'), DataState = require('../../sdk/DataState'), Utils = require('../../sdk/Utils'), {resolve} = require('path'), Device = require('../../helpers/Device'), command = async () => {
        const _0x5be47e = a18_0x2efe, _0x1a6440 = new DataState(), _0x4cfeb0 = _0x1a6440[_0x5be47e(0x1ec)], _0x121504 = {
                'ID': Package[_0x5be47e(0x1f0)]('id'),
                'Name': Package[_0x5be47e(0x1f0)](_0x5be47e(0x1e6)),
                'Packageable': Package[_0x5be47e(0x1f0)](_0x5be47e(0x1eb), ![]),
                'Production': Utils[_0x5be47e(0x1f3)](),
                'Headless': Utils[_0x5be47e(0x1f4)](),
                'Entry\x20point': resolve(process[_0x5be47e(0x1e5)](), Package['get']('main')),
                'Temp\x20Directory': os['tmpdir'](),
                'State\x20Directory': _0x4cfeb0,
                'Device\x20ID': Device[_0x5be47e(0x1e4)]()
            };
        console['table'](_0x121504);
    };
module[a18_0x2e3ad0(0x1ee)] = [
    'info',
    a18_0x2e3ad0(0x1f1),
    () => {
    },
    command
];