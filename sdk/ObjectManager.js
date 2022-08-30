const a66_0x108509 = a66_0x5177;
(function (_0x209e9c, _0x4e6e4c) {
    const _0xe68144 = a66_0x5177, _0x24efe0 = _0x209e9c();
    while (!![]) {
        try {
            const _0x32bfca = -parseInt(_0xe68144(0xb5)) / 0x1 * (parseInt(_0xe68144(0xc2)) / 0x2) + parseInt(_0xe68144(0xb2)) / 0x3 + -parseInt(_0xe68144(0xc9)) / 0x4 * (-parseInt(_0xe68144(0xba)) / 0x5) + parseInt(_0xe68144(0xb4)) / 0x6 * (parseInt(_0xe68144(0xce)) / 0x7) + -parseInt(_0xe68144(0xd4)) / 0x8 * (parseInt(_0xe68144(0xbf)) / 0x9) + parseInt(_0xe68144(0xc1)) / 0xa * (-parseInt(_0xe68144(0xcc)) / 0xb) + -parseInt(_0xe68144(0xd2)) / 0xc;
            if (_0x32bfca === _0x4e6e4c)
                break;
            else
                _0x24efe0['push'](_0x24efe0['shift']());
        } catch (_0x1a5e61) {
            _0x24efe0['push'](_0x24efe0['shift']());
        }
    }
}(a66_0x144b, 0x33d26));
const WorkObject = require('./WorkObject'), WorkObjectApi = require('../api/WorkObject'), Status = require('../helpers/Status'), statusMethods = [
        a66_0x108509(0xb8),
        'Done',
        a66_0x108509(0xbb)
    ];
function a66_0x5177(_0x2a51ef, _0x437ea1) {
    const _0x144bd3 = a66_0x144b();
    return a66_0x5177 = function (_0x5177ad, _0x35d2b0) {
        _0x5177ad = _0x5177ad - 0xb2;
        let _0x1714ad = _0x144bd3[_0x5177ad];
        return _0x1714ad;
    }, a66_0x5177(_0x2a51ef, _0x437ea1);
}
function a66_0x144b() {
    const _0x4849f5 = [
        '812390RbKpvk',
        '1598DiuKdo',
        'bulkCreate',
        'bind',
        'length',
        'create',
        'WORKING',
        'fetchByStatus',
        '547544CvgJdJ',
        'findByStatus',
        'map',
        '11EgvLXJ',
        'findOrCreate',
        '42fHPcLK',
        'exports',
        '_parse2WorkObject',
        'push',
        '2729292hWdSXP',
        'isArray',
        '1142728yfXdPD',
        '1059438rjgeMO',
        'slice',
        '74418XgBmSC',
        '47OSSMVd',
        'Payload\x20must\x20be\x20a\x20object:\x20{}',
        'job',
        'Pending',
        'toLowerCase',
        '10UmSMHL',
        'Failed',
        'fetch',
        'bot',
        'fetchAll',
        '9gDmiox',
        'forEach'
    ];
    a66_0x144b = function () {
        return _0x4849f5;
    };
    return a66_0x144b();
}
class ObjectManager {
    constructor(_0x62aeb5) {
        const _0x293bcf = a66_0x108509;
        Object['assign'](this, _0x62aeb5), statusMethods[_0x293bcf(0xc0)](_0x652a6b => this[_0x293bcf(0xbc) + _0x652a6b] = this[_0x293bcf(0xc8)][_0x293bcf(0xc4)](this, _0x652a6b[_0x293bcf(0xb9)]()));
    }
    [a66_0x108509(0xd0)](_0x2f62df) {
        const _0x4815d1 = a66_0x108509;
        if (Array[_0x4815d1(0xd3)](_0x2f62df))
            return _0x2f62df['map'](_0x35ce42 => new WorkObject(_0x35ce42));
        return new WorkObject(_0x2f62df);
    }
    async ['fetchAll'](_0x213468) {
        const _0x43e47a = a66_0x108509, _0x36091b = await WorkObjectApi[_0x43e47a(0xbe)](this['bot']['id'], _0x213468);
        return this['_parse2WorkObject'](_0x36091b);
    }
    async ['fetchByStatus'](_0x3076f3) {
        const _0x5bd0f6 = a66_0x108509, _0xe98876 = await WorkObjectApi[_0x5bd0f6(0xca)](this['job']['id'], _0x3076f3);
        return this[_0x5bd0f6(0xd0)](_0xe98876);
    }
    async [a66_0x108509(0xc3)](_0x549269, _0x2c761b, _0x5932dc = {}) {
        const _0x591443 = a66_0x108509, {
                chunk_size: chunk_size = 0x64
            } = _0x5932dc, _0x5cf678 = _0x549269[_0x591443(0xcb)](_0x41c7a3 => {
                const _0x5f06e4 = _0x591443;
                return {
                    ..._0x2c761b,
                    'payload': _0x41c7a3,
                    'bot_id': this['bot']['id'],
                    'job_id': this[_0x5f06e4(0xb7)]['id']
                };
            }), _0x3c2529 = [];
        for (let _0x3922a9 = 0x0; _0x3922a9 < _0x5cf678[_0x591443(0xc5)]; _0x3922a9 += chunk_size) {
            const _0x15a9d = _0x5cf678[_0x591443(0xb3)](_0x3922a9, _0x3922a9 + chunk_size), _0x58f4a0 = await WorkObjectApi[_0x591443(0xc3)](_0x15a9d);
            _0x3c2529[_0x591443(0xd1)](..._0x58f4a0);
        }
        return this[_0x591443(0xd0)](_0x3c2529);
    }
    async [a66_0x108509(0xc6)](_0x4dab43, _0x15b700) {
        const _0x1a3f2d = a66_0x108509;
        if (Array[_0x1a3f2d(0xd3)](_0x4dab43))
            throw new Error(_0x1a3f2d(0xb6));
        const _0x2aa817 = await WorkObjectApi[_0x1a3f2d(0xc6)]({
            'status': Status[_0x1a3f2d(0xc7)],
            ..._0x15b700,
            'payload': _0x4dab43,
            'bot_id': this[_0x1a3f2d(0xbd)]['id'],
            'job_id': this[_0x1a3f2d(0xb7)]['id']
        });
        return this[_0x1a3f2d(0xd0)](_0x2aa817);
    }
    async ['findOrCreate'](_0x2eae14, _0x22a06e, _0x29c1d0) {
        const _0x915551 = a66_0x108509, _0xc7ed57 = await WorkObjectApi[_0x915551(0xcd)](_0x2eae14, {
                ..._0x29c1d0,
                'payload': _0x22a06e,
                'bot_id': this[_0x915551(0xbd)]['id'],
                'job_id': this[_0x915551(0xb7)]['id']
            });
        return this[_0x915551(0xd0)](_0xc7ed57);
    }
}
module[a66_0x108509(0xcf)] = ObjectManager;