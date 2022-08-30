function a15_0x1a9d(_0x1dcea1, _0xde19a5) {
    const _0x424ec6 = a15_0x424e();
    return a15_0x1a9d = function (_0x1a9dd6, _0x3534c5) {
        _0x1a9dd6 = _0x1a9dd6 - 0x7f;
        let _0x4a7c94 = _0x424ec6[_0x1a9dd6];
        return _0x4a7c94;
    }, a15_0x1a9d(_0x1dcea1, _0xde19a5);
}
const a15_0x1a9f96 = a15_0x1a9d;
(function (_0xb4192d, _0x5a62c9) {
    const _0x516ddf = a15_0x1a9d, _0x59d5ef = _0xb4192d();
    while (!![]) {
        try {
            const _0x282ba2 = parseInt(_0x516ddf(0x9c)) / 0x1 * (parseInt(_0x516ddf(0x84)) / 0x2) + -parseInt(_0x516ddf(0x8b)) / 0x3 + parseInt(_0x516ddf(0x8c)) / 0x4 * (-parseInt(_0x516ddf(0x8d)) / 0x5) + parseInt(_0x516ddf(0x80)) / 0x6 * (parseInt(_0x516ddf(0x96)) / 0x7) + parseInt(_0x516ddf(0x85)) / 0x8 + parseInt(_0x516ddf(0x82)) / 0x9 + parseInt(_0x516ddf(0x86)) / 0xa;
            if (_0x282ba2 === _0x5a62c9)
                break;
            else
                _0x59d5ef['push'](_0x59d5ef['shift']());
        } catch (_0x13a24a) {
            _0x59d5ef['push'](_0x59d5ef['shift']());
        }
    }
}(a15_0x424e, 0x40e0b));
const {v4: uuidv4} = require('uuid'), MockState = require('./MockState');
class WorkObjectMock {
    static [a15_0x1a9f96(0x99)](_0x50e18c) {
        const _0x407228 = a15_0x1a9f96, _0x5e8621 = {
                'id': uuidv4(),
                ..._0x50e18c
            }, _0x552f5a = MockState[_0x407228(0x9b)]('work_objects', []);
        return _0x552f5a[_0x407228(0x95)](_0x5e8621), MockState['set'](_0x407228(0x87), _0x552f5a), _0x5e8621;
    }
    static async [a15_0x1a9f96(0x9a)](_0x392265) {
        const _0x50876b = a15_0x1a9f96;
        return _0x392265[_0x50876b(0x90)](_0x32c04e => {
            const _0x5168e7 = _0x50876b;
            return this[_0x5168e7(0x99)](_0x32c04e);
        });
    }
    static async [a15_0x1a9f96(0x93)](_0x3fa0a8, _0x519e5d) {
        const _0x13ad54 = a15_0x1a9f96, _0x186555 = MockState[_0x13ad54(0x9b)]('work_objects', []), _0x5425c4 = _0x186555['find'](_0x55c1f2 => _0x55c1f2['id'] === _0x3fa0a8);
        if (_0x5425c4)
            return _0x5425c4;
        this['create'](_0x519e5d);
    }
    static async ['_updateWorkObject'](_0x15e4f0, _0x49c8ab) {
        const _0x1b8b5e = a15_0x1a9f96, _0x29f267 = MockState[_0x1b8b5e(0x9b)](_0x1b8b5e(0x87), []), _0x566dd7 = _0x29f267[_0x1b8b5e(0x89)](_0x2629e9 => _0x2629e9['id'] === _0x15e4f0), _0x212d67 = _0x29f267[_0x566dd7];
        return Object[_0x1b8b5e(0x9d)](_0x212d67, _0x49c8ab), MockState['set']('work_objects', _0x29f267), _0x212d67;
    }
    static async ['init'](_0x5e0e2d) {
        const _0x5a7122 = a15_0x1a9f96;
        return this[_0x5a7122(0x88)](_0x5e0e2d, {
            'status': _0x5a7122(0x8a),
            'started_at': new Date()
        });
    }
    static async ['done'](_0x12f160, _0x235010) {
        const _0x247501 = a15_0x1a9f96;
        return this[_0x247501(0x88)](_0x12f160, {
            ..._0x235010,
            'status': _0x247501(0x8f),
            'done_at': new Date()
        });
    }
    static async [a15_0x1a9f96(0x91)](_0x167e2f, _0x4c6fc8) {
        const _0x47c954 = a15_0x1a9f96;
        return this[_0x47c954(0x88)](_0x167e2f, {
            'error': _0x4c6fc8,
            'status': _0x47c954(0x97),
            'done_at': new Date()
        });
    }
    static async ['failed'](_0x3abcf0, _0x6bbef7) {
        const _0x1790db = a15_0x1a9f96;
        return this[_0x1790db(0x88)](_0x3abcf0, {
            'error': _0x6bbef7,
            'status': 'FAILED',
            'done_at': new Date()
        });
    }
    static async [a15_0x1a9f96(0x7f)](_0x294071, _0x6902be) {
        const _0x2b0164 = a15_0x1a9f96;
        return this[_0x2b0164(0x88)](_0x294071, _0x6902be);
    }
    static async ['delete'](_0x38e974) {
        const _0x1476f2 = a15_0x1a9f96, _0x1e1641 = MockState[_0x1476f2(0x9b)]('work_objects', []), _0x1de606 = _0x1e1641[_0x1476f2(0x89)](_0x5b5432 => _0x5b5432['id'] === _0x38e974);
        delete _0x1e1641[_0x1de606], MockState[_0x1476f2(0x9e)](_0x1476f2(0x87), _0x1e1641);
    }
    static async [a15_0x1a9f96(0x83)](_0x5e7bfa, _0x506e72) {
        const _0x2ae8a7 = a15_0x1a9f96, _0x46cb3b = MockState[_0x2ae8a7(0x9b)]('work_objects', []);
        return _0x46cb3b[_0x2ae8a7(0x81)](_0x47a996 => (_0x47a996[_0x2ae8a7(0x94)] || _0x2ae8a7(0x98))[_0x2ae8a7(0x8e)]() === _0x506e72[_0x2ae8a7(0x8e)]()) || [];
    }
    static async [a15_0x1a9f96(0x92)]() {
        const _0x2ef4cf = a15_0x1a9f96;
        return MockState[_0x2ef4cf(0x9b)](_0x2ef4cf(0x87), []) || [];
    }
}
module['exports'] = WorkObjectMock;
function a15_0x424e() {
    const _0x415594 = [
        'DONE',
        'map',
        'notDone',
        'fetchAll',
        'findOrCreate',
        'status',
        'push',
        '483AJwyDS',
        'NOT_DONE',
        'PENDING',
        'create',
        'bulkCreate',
        'get',
        '2843wRowOl',
        'assign',
        'set',
        'update',
        '12186lNnkKN',
        'filter',
        '73143Dpjeml',
        'findByStatus',
        '28bGaNwX',
        '760880wzWiGz',
        '4479240nABrEm',
        'work_objects',
        '_updateWorkObject',
        'findIndex',
        'WORKING',
        '369177FiNkmE',
        '4504zIlYgc',
        '1520MiTCaJ',
        'toUpperCase'
    ];
    a15_0x424e = function () {
        return _0x415594;
    };
    return a15_0x424e();
}