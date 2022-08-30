(function (_0x138ab5, _0x356eca) {
    const _0x1ed029 = a14_0x4a86, _0x2f0966 = _0x138ab5();
    while (!![]) {
        try {
            const _0x477e13 = -parseInt(_0x1ed029(0x16b)) / 0x1 * (-parseInt(_0x1ed029(0x166)) / 0x2) + -parseInt(_0x1ed029(0x168)) / 0x3 * (-parseInt(_0x1ed029(0x16a)) / 0x4) + -parseInt(_0x1ed029(0x161)) / 0x5 * (parseInt(_0x1ed029(0x15e)) / 0x6) + -parseInt(_0x1ed029(0x163)) / 0x7 * (-parseInt(_0x1ed029(0x165)) / 0x8) + -parseInt(_0x1ed029(0x167)) / 0x9 + parseInt(_0x1ed029(0x164)) / 0xa + -parseInt(_0x1ed029(0x15f)) / 0xb;
            if (_0x477e13 === _0x356eca)
                break;
            else
                _0x2f0966['push'](_0x2f0966['shift']());
        } catch (_0x188c83) {
            _0x2f0966['push'](_0x2f0966['shift']());
        }
    }
}(a14_0x1377, 0xa0253));
const defaultData = require('./defaultData'), DataState = require('../../sdk/DataState'), Config = require('../../sdk/Config');
function a14_0x1377() {
    const _0x504a94 = [
        '28232611nPKVxg',
        'get',
        '5thomQU',
        'jobId',
        '30751iHhsVd',
        '8357730rxPIfm',
        '1912KSaLid',
        '8GHbFih',
        '2206413eGPKan',
        '3autZVD',
        'now',
        '4577808TMkavI',
        '142831mwEFgG',
        'mock-state-',
        '802578AUMBvx'
    ];
    a14_0x1377 = function () {
        return _0x504a94;
    };
    return a14_0x1377();
}
function a14_0x4a86(_0x1b71f0, _0x48a8ae) {
    const _0x13779c = a14_0x1377();
    return a14_0x4a86 = function (_0x4a8663, _0x109099) {
        _0x4a8663 = _0x4a8663 - 0x15d;
        let _0x4f9c56 = _0x13779c[_0x4a8663];
        return _0x4f9c56;
    }, a14_0x4a86(_0x1b71f0, _0x48a8ae);
}
class MockState extends DataState {
    constructor() {
        const _0x39e992 = a14_0x4a86, _0x1ec7d7 = Config[_0x39e992(0x160)](_0x39e992(0x162), Date[_0x39e992(0x169)]());
        super(_0x39e992(0x15d) + _0x1ec7d7, {
            ...defaultData,
            'work_objects': []
        });
    }
}
module['exports'] = new MockState();