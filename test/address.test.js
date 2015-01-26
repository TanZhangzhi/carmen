var address = require('../lib/pure/applyaddress.js');
var addressCluster = require('../lib/pure/addresscluster.js');
var test = require('tape');

test('address.matchSide', function(assert) {
    assert.deepEqual(address.matchSide(
        { "_center":[-77.031953,38.919952],"_id":75018674165319,"_lfromhn":["1618","2750","3000","3022","2900","1700","1624","","1600","2300","2800","2512","2400","2000","1924","1800","1820","2450","2100","2524","2500","1900","2700","2200","","1720","2600"],"_ltohn":["1620","2798","3020","3098","2998","1718","1698","","1616","2398","2898","2522","2448","2098","1998","1818","1898","2498","2198","2598","2510","1922","2748","2298","","1798","2698"],"_parityl":["E","E","E","E","E","E","E","","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","","E","E"],"_parityr":["O","O","O","O","O","O","","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O"],"_rangetype":"tiger","_rfromhn":["1623","2701","3001","3033","2851","1701","","2751","1601","2301","2801","2501","2351","2001","1921","1801","1825","2401","2101","2511","2427","1901","2651","2201","2565","1721","2601"],"_rtohn":["1699","2749","3031","3099","2999","1719","","2799","1621","2349","2849","2509","2399","2099","1999","1823","1899","2425","2199","2563","2499","1919","2699","2299","2599","1799","2649"],"_text":"14th St NW","abbrname":"14th St NW","_bbox":[-77.03261199999999,38.91112899999999,-77.03183899999996,38.92880499999998],"_geometry":{"type":"MultiLineString","coordinates":[[[-77.031949,38.911868],[-77.031953,38.912606]],[[-77.032242,38.924756],[-77.03225,38.924827],[-77.032309,38.925424],[-77.032316,38.925502]],[[-77.032518,38.927538],[-77.03259,38.928533]],[[-77.03259,38.928533],[-77.032612,38.928805]],[[-77.032407,38.926573],[-77.032518,38.927538]],[[-77.031953,38.912606],[-77.031952,38.913349]],[[-77.031949,38.911868],[-77.031953,38.912606]],[[-77.032316,38.925502],[-77.032331,38.925652],[-77.032339,38.925742]],[[-77.031952,38.911129],[-77.031949,38.911868]],[[-77.031941,38.920064],[-77.031932,38.920106],[-77.031866,38.920322],[-77.031853,38.920416],[-77.031844,38.920511],[-77.031841,38.920556],[-77.03184,38.920601]],[[-77.032339,38.925742],[-77.032407,38.926573]],[[-77.03201,38.922428],[-77.032038,38.922686]],[[-77.03184,38.920601],[-77.031839,38.92064],[-77.031839,38.92068],[-77.031841,38.920756],[-77.031865,38.920998],[-77.031873,38.921086]],[[-77.031951,38.916998],[-77.031952,38.918112]],[[-77.031952,38.916289],[-77.031951,38.916372],[-77.031951,38.916998]],[[-77.031951,38.914094],[-77.031952,38.91418],[-77.031953,38.91448],[-77.031952,38.914831]],[[-77.031952,38.914831],[-77.031952,38.915262],[-77.031956,38.915568]],[[-77.031873,38.921086],[-77.03193,38.92166]],[[-77.031952,38.918112],[-77.031951,38.919185]],[[-77.032038,38.922686],[-77.032072,38.923012],[-77.032132,38.923635]],[[-77.03193,38.92166],[-77.032002,38.922342],[-77.03201,38.922428]],[[-77.031956,38.915568],[-77.031952,38.916289]],[[-77.03222,38.924541],[-77.032242,38.924756]],[[-77.031951,38.919185],[-77.031952,38.919267],[-77.031953,38.919952],[-77.031952,38.919976],[-77.031948,38.92002],[-77.031941,38.920064]],[[-77.032132,38.923635],[-77.032143,38.923763]],[[-77.031952,38.913349],[-77.031954,38.913703],[-77.031951,38.914094]],[[-77.032143,38.923763],[-77.032193,38.924284],[-77.03222,38.924541]]]},"_zxy":["14/4686/6266","14/4686/6265"],"_extid":"addressitp.75018674165319","_tmpid":323909959},
        "right",
        {"lineDist":0.05149142157672657,"pt":{"type":"Feature","geometry":{"type":"Point","coordinates":[-77.03195179501776,38.913990382686116]},"properties":{"dist":0.003796989313476002,"travelled":0.04432977933096455,"index":1}},"startLine":{"type":"Feature","geometry":{"type":"Point","coordinates":[-77.031954,38.913703]},"properties":{}},"endLine":{"type":"Feature","geometry":{"type":"Point","coordinates":[-77.031951,38.914094]},"properties":{}},"i":25}
    ), 1789, "Right Side Match");

    assert.deepEqual(address.matchSide(
        { "_center":[-77.031953,38.919952],"_id":75018674165319,"_lfromhn":["1618","2750","3000","3022","2900","1700","1624","","1600","2300","2800","2512","2400","2000","1924","1800","1820","2450","2100","2524","2500","1900","2700","2200","","1720","2600"],"_ltohn":["1620","2798","3020","3098","2998","1718","1698","","1616","2398","2898","2522","2448","2098","1998","1818","1898","2498","2198","2598","2510","1922","2748","2298","","1798","2698"],"_parityl":["E","E","E","E","E","E","E","","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","","E","E"],"_parityr":["O","O","O","O","O","O","","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O"],"_rangetype":"tiger","_rfromhn":["1623","2701","3001","3033","2851","1701","","2751","1601","2301","2801","2501","2351","2001","1921","1801","1825","2401","2101","2511","2427","1901","2651","2201","2565","1721","2601"],"_rtohn":["1699","2749","3031","3099","2999","1719","","2799","1621","2349","2849","2509","2399","2099","1999","1823","1899","2425","2199","2563","2499","1919","2699","2299","2599","1799","2649"],"_text":"14th St NW","abbrname":"14th St NW","_bbox":[-77.03261199999999,38.91112899999999,-77.03183899999996,38.92880499999998],"_geometry":{"type":"MultiLineString","coordinates":[[[-77.031949,38.911868],[-77.031953,38.912606]],[[-77.032242,38.924756],[-77.03225,38.924827],[-77.032309,38.925424],[-77.032316,38.925502]],[[-77.032518,38.927538],[-77.03259,38.928533]],[[-77.03259,38.928533],[-77.032612,38.928805]],[[-77.032407,38.926573],[-77.032518,38.927538]],[[-77.031953,38.912606],[-77.031952,38.913349]],[[-77.031949,38.911868],[-77.031953,38.912606]],[[-77.032316,38.925502],[-77.032331,38.925652],[-77.032339,38.925742]],[[-77.031952,38.911129],[-77.031949,38.911868]],[[-77.031941,38.920064],[-77.031932,38.920106],[-77.031866,38.920322],[-77.031853,38.920416],[-77.031844,38.920511],[-77.031841,38.920556],[-77.03184,38.920601]],[[-77.032339,38.925742],[-77.032407,38.926573]],[[-77.03201,38.922428],[-77.032038,38.922686]],[[-77.03184,38.920601],[-77.031839,38.92064],[-77.031839,38.92068],[-77.031841,38.920756],[-77.031865,38.920998],[-77.031873,38.921086]],[[-77.031951,38.916998],[-77.031952,38.918112]],[[-77.031952,38.916289],[-77.031951,38.916372],[-77.031951,38.916998]],[[-77.031951,38.914094],[-77.031952,38.91418],[-77.031953,38.91448],[-77.031952,38.914831]],[[-77.031952,38.914831],[-77.031952,38.915262],[-77.031956,38.915568]],[[-77.031873,38.921086],[-77.03193,38.92166]],[[-77.031952,38.918112],[-77.031951,38.919185]],[[-77.032038,38.922686],[-77.032072,38.923012],[-77.032132,38.923635]],[[-77.03193,38.92166],[-77.032002,38.922342],[-77.03201,38.922428]],[[-77.031956,38.915568],[-77.031952,38.916289]],[[-77.03222,38.924541],[-77.032242,38.924756]],[[-77.031951,38.919185],[-77.031952,38.919267],[-77.031953,38.919952],[-77.031952,38.919976],[-77.031948,38.92002],[-77.031941,38.920064]],[[-77.032132,38.923635],[-77.032143,38.923763]],[[-77.031952,38.913349],[-77.031954,38.913703],[-77.031951,38.914094]],[[-77.032143,38.923763],[-77.032193,38.924284],[-77.03222,38.924541]]]},"_zxy":["14/4686/6266","14/4686/6265"],"_extid":"addressitp.75018674165319","_tmpid":323909959},
        "left",
        {"lineDist":0.05149142157672657,"pt":{"type":"Feature","geometry":{"type":"Point","coordinates":[-77.03195250715466,38.913897567510446]},"properties":{"dist":0.008056283111657007,"travelled":0.03791474058649927,"index":1}},"startLine":{"type":"Feature","geometry":{"type":"Point","coordinates":[-77.031954,38.913703]},"properties":{}},"endLine":{"type":"Feature","geometry":{"type":"Point","coordinates":[-77.031951,38.914094]},"properties":{}},"i":25}
    ), 1776, "Left Side Match");

    assert.end();
});

test('address.getReversePoint', function(assert) {
    //The most important part of these tests is that the distance travelled is correct
    //The actual point on the line returned can slightly vary

    //Patial route travelled
    assert.deepEqual(
        address.getReversePoint([-77.19932645559311,38.94770308373527], [[-77.19998091459274,38.9475549770314],[-77.19883829355238,38.94759461125006]], 'miles'),
        { endLine: { geometry: { coordinates: [ -77.19883829355238, 38.94759461125006 ], type: 'Point' }, properties: {}, type: 'Feature' }, lineDist: 0.06147950790879972, pt: { geometry: { coordinates: [ -77.19932038464033, 38.94757788890475 ], type: 'Point' }, properties: { dist: 0.008658996759104212, index: 0, travelled: 0.03554027081555206 }, type: 'Feature' }, startLine: { geometry: { coordinates: [ -77.19998091459274, 38.9475549770314 ], type: 'Point' }, properties: {}, type: 'Feature' } },
        "left centre side of line"
    );

    //Partial route travelled
    assert.deepEqual(
        address.getReversePoint([-77.1995061635971,38.94741938611567], [[-77.19998091459274,38.9475549770314],[-77.19883829355238,38.94759461125006]], 'miles'),
        { endLine: { geometry: { coordinates: [ -77.19883829355238, 38.94759461125006 ], type: 'Point' }, properties: {}, type: 'Feature' }, lineDist: 0.06147950790879972, pt: { geometry: { coordinates: [ -77.1995173939109, 38.947571055223044 ], type: 'Point' }, properties: { dist: 0.010499982934844238, index: 0, travelled: 0.024940051989783316 }, type: 'Feature' }, startLine: { geometry: { coordinates: [ -77.19998091459274, 38.9475549770314 ], type: 'Point' }, properties: {}, type: 'Feature' } },
        "right centre side of line");

    //No route Travelled
    assert.deepEqual(
        address.getReversePoint([-77.20057904720306,38.94761547135627], [[-77.19998091459274,38.9475549770314],[-77.19883829355238,38.94759461125006]], 'miles'),
        { endLine: { geometry: { coordinates: [ -77.19883829355238, 38.94759461125006 ], type: 'Point' }, properties: {}, type: 'Feature' }, lineDist: 0.06147950790879972, pt: { geometry: { coordinates: [ -77.19998091459274, 38.9475549770314 ], type: 'Point' }, properties: { dist: 0.03242169132910228, index: 0, travelled: 0 }, type: 'Feature' }, startLine: { geometry: { coordinates: [ -77.19998091459274, 38.9475549770314 ], type: 'Point' }, properties: {}, type: 'Feature' } },
        "before start of line");

    //Total route travelled
    assert.deepEqual(
        address.getReversePoint([-77.19858080148697,38.94759461125006], [[-77.19998091459274,38.9475549770314],[-77.19883829355238,38.94759461125006]], 'miles'),
        { endLine: { geometry: { coordinates: [ -77.19883829355238, 38.94759461125006 ], type: 'Point' }, properties: {}, type: 'Feature' }, lineDist: 0.06147950790879972, pt: { geometry: { coordinates: [ -77.19883829355238, 38.94759461125006 ], type: 'Point' }, properties: { dist: 0.013840773622621594, index: 0, travelled: 0.06147950790879972 }, type: 'Feature' }, startLine: { geometry: { coordinates: [ -77.19998091459274, 38.9475549770314 ], type: 'Point' }, properties: {}, type: 'Feature' } },
        "after end of line");

    assert.end();
});

test('address.lineIntersects', function(assert){
    assert.deepEqual(address.lineIntersects(0, 0, 5, 5, 5, 0, 0, 5), [2.5, 2.5]);
    assert.equal(address.lineIntersects(0, 0, 0, 5, 5, 0, 5, 5), false);
    assert.end();
});

test('address.standardize', function(assert){
    assert.equal(address.standardize({ _rangetype: 'canvec'}), undefined);
    assert.equal(address.standardize({ _rangetype: 'tiger' }), undefined);
    assert.equal(address.standardize({
        _rangetype: 'tiger',
        _geometry: {
            type: "Point" }
        }), undefined);
    assert.deepEqual(address.standardize({
        _rangetype: 'tiger',
        _geometry: {
            type: "LineString",
            coordinates: [[1,2], [2,3]] }
        }), { lf: [], lines: [ [ [ 1, 2 ], [ 2, 3 ] ] ], lp: [], lt: [], rf: [], rp: [], rt: [] });
    assert.deepEqual(address.standardize({
        _rangetype: 'tiger',
        _geometry: {
            type: "MultiLineString",
            coordinates: [[[1,2], [2,3]], [[5,6], [8,10]]] }
        }), { lf: [], lines: [ [ [ 1, 2 ], [ 2, 3 ] ], [ [ 5, 6 ], [ 8, 10 ] ] ], lp: [], lt: [], rf: [], rp: [], rt: [] });
    assert.deepEqual(address.standardize({
        _rangetype: 'tiger',
        _parityl: "E",
        _parityr: "O",
        _ltohn: 2,
        _lfromhn: 4,
        _rtohn: 1,
        _rfromhn: 3,
        _geometry: {
            type: "LineString",
            coordinates: [[1,2], [2,3]] }
            }), { lf: [ 4 ], lines: [ [ [ 1, 2 ], [ 2, 3 ] ] ], lp: [ 'E' ], lt: [ 2 ], rf: [ 3 ], rp: [ 'O' ], rt: [ 1 ] });
    assert.deepEqual(address.standardize({
        _rangetype: 'tiger',
        _parityl: ["E", "E"],
        _parityr: ["O", "O"],
        _ltohn: [2, 6],
        _lfromhn: [4, 8],
        _rtohn: [1, 5],
        _rfromhn: [3, 7],
        _geometry: {
            type: "MultiLineString",
            coordinates: [[[1,2], [2,3]], [[5,6], [8,10]]] }
        }), { lf: [ 4, 8 ], lines: [ [ [ 1, 2 ], [ 2, 3 ] ], [ [ 5, 6 ], [ 8, 10 ] ] ], lp: [ 'E', 'E' ], lt: [ 2, 6 ], rf: [ 3, 7 ], rp: [ 'O', 'O' ], rt: [ 1, 5 ] });
    assert.end();
});

test('address.det2D', function(assert) {
    assert.equal(address.det2D([0,0], [1,2], [3,4]), -2);
    assert.equal(address.det2D([0,0], [2,1], [-1,3]), 7);
    assert.equal(address.det2D([1,1], [0,1], [2,3]), -2);
    assert.equal(address.det2D([2,2], [0,-1], [-3,1]), -13);
    assert.end();
});

test('address.sign', function(assert) {
    assert.equal(address.sign(5), 1);
    assert.equal(address.sign(-5), -1);
    assert.equal(address.sign(0), 0);
    assert.end();
});

test('address.parseSemiNumber', function(assert) {
    assert.equal(address.parseSemiNumber('5'), 5);
    assert.equal(address.parseSemiNumber('5b'), 5);
    assert.equal(address.parseSemiNumber('asdf'), null);
    assert.end();
});

test('address.calculateDistance', function(assert) {
    assert.equal(address.calculateDistance([[0,0],[1,1]]), Math.sqrt(2));
    assert.equal(address.calculateDistance([[0,0],[0,0]]), 0);
    assert.end();
});

test('address.setPoint', function(assert) {
    assert.deepEqual(address.setPoint(2,0,8,[[0,0],[1,0]],false), {
        type: 'Point',
        coordinates:[0.25,0]
    }, 'x2, forward');
    assert.deepEqual(address.setPoint(2,8,0,[[0,0],[1,0]],false), {
        type: 'Point',
        coordinates:[0.75,0]
    }, 'x2, reverse');
    assert.deepEqual(address.setPoint(2,8,0,[[0,0],[0,0]],false), {
        type: 'Point',
        coordinates:[0,0]
    }, 'x2, identity (line)');
    assert.deepEqual(address.setPoint(0,0,0,[[0,0],[1,0]],false), {
        type: 'Point',
        coordinates:[0,0]
    }, 'x2, identity (address)');
   assert.deepEqual(address.setPoint(3,0,12,[[0,0],[1,0],[2,0]],false), {
        type: 'Point',
        coordinates:[0.5,0]
    }, 'x3, forward');
    assert.deepEqual(address.setPoint(9,0,12,[[0,0],[1,0],[2,0]],false), {
        type: 'Point',
        coordinates:[1.5,0]
    }, 'x3, reverse');
    assert.deepEqual(address.setPoint(9,0,12,[[0,0],[0,0],[0,0]],false), {
        type: 'Point',
        coordinates:[0,0]
    }, 'x3, identity (line)');
    assert.deepEqual(address.setPoint(0,0,0,[[0,0],[1,0],[2,0]],false), {
        type: 'Point',
        coordinates:[0,0]
    }, 'x3, identity (address)');
    assert.end();
});

test('address interpolation - noop', function(t) {
    t.deepEqual(undefined, address({ _rangetype:'' }, 100));
    t.deepEqual(undefined, address({ _rangetype:'tiger' }, 100));
    t.deepEqual(undefined, address({ _rangetype:'tiger', _geometry: { type:'Point', coordinates:[-78,40] } }, 100));
    t.end();
});

 test('address interpolation - parity: even + both', function(t) {
    t.deepEqual({
        type:'Point',
        coordinates:[0,9]
    }, address({
        _rangetype:'tiger',
        _lfromhn: '0',
        _ltohn: '100',
        _geometry: {
            type:'LineString',
            coordinates:[[0,0],[0,100]]
        }
    }, 9));
     t.end();
});

test('address point clustering', function(t) {
    t.deepEqual(
        addressCluster(
            {
                _cluster: {
                    9: { type: "Point", coordinates: [1,1] },
                    10: { type: "Point", coordinates: [2,2] },
                    7: { type: "Point", coordinates: [0,0] }
                }
            }, 9),
        {
            type:'Point',
            coordinates:[1,1]
        });
    t.end();
});

test('reverse address point clustering', function(t) {
    t.deepEqual(
        addressCluster.reverse(
            {
                _text: "test",
                _cluster: {
                    9: { type: "Point", coordinates: [1,3] },
                    10: { type: "Point", coordinates: [2,4] },
                    7: { type: "Point", coordinates: [0,1] }
                },
                _geometry: { text: "MultiPoint Here" }
            }, [1,3]),
        {
            _cluster: { 10: { coordinates: [ 2, 4 ], type: 'Point' }, 7: { coordinates: [ 0, 1 ], type: 'Point' }, 9: { coordinates: [ 1, 3 ], type: 'Point' } },
            _geometry: { coordinates: [ 1, 3 ], type: 'Point' },
            _text: '9 test' });
    t.end();
});

test('address point clustering invalid coords', function(t) {
    t.deepEqual(
        addressCluster(
            {
                _cluster: {
                    9: { type: "Point", coordinates: [1,1,1] },
                    10: { type: "Point", coordinates: [2,2,2] },
                    7: { type: "Point", coordinates: [0,0,0] }
                }
            }, 9),
        undefined);
    t.end();
});

test('address point clustering not point', function(t) {
    t.deepEqual(
        addressCluster(
            {
                _cluster: {
                    9: { "type": "Polygon",
                        "coordinates": [
                            [
                                [
                                    -17.2265625,
                                    8.407168163601076
                                ],
                                [
                                    -17.2265625,
                                    53.9560855309879
                                ],
                                [
                                    34.80468749999999,
                                    53.9560855309879
                                ],
                                [
                                    34.80468749999999,
                                    8.407168163601076
                                ],
                                [
                                    -17.2265625,
                                    8.407168163601076
                                ]
                            ]
                        ] }
                }
            }, 9),
        undefined);
    t.end();
});

test('address point clustering fail', function(t) {
    t.deepEqual(
        addressCluster(
            {
                _cluster: {
                    9: { type: "Point", coordinates: [1,1] },
                    10: { type: "Point", coordinates: [2,2] },
                    7: { type: "Point", coordinates: [0,0] }
                }
            }, 11),
        undefined);
    t.end();
});

test('parity: even + even', function(t) {
    t.deepEqual({
        type:'Point',
        coordinates:[0,10]
    }, address({
        _rangetype:'tiger',
        _lfromhn: '0',
        _ltohn: '100',
        _parityl: 'E',
        _geometry: {
            type:'LineString',
            coordinates:[[0,0],[0,100]]
        }
    }, 10));
    t.end();
});

test('parity: even + odd', function(t) {
    t.deepEqual({
        coordinates: [ 0, 9 ],
        omitted: true, // because parity does not match
        type: 'Point'
    }, address({
        _rangetype:'tiger',
        _lfromhn: '0',
        _ltohn: '100',
        _parityl: 'E',
        _geometry: {
            type:'LineString',
            coordinates:[[0,0],[0,100]]
        }
    }, 9));
    t.end();
});

test('parity: odd + both', function(t) {
    t.deepEqual({
        type:'Point',
        coordinates:[0,9]
    }, address({
        _rangetype:'tiger',
        _lfromhn: '1',
        _ltohn: '101',
        _parityl: 'B',
        _geometry: {
            type:'LineString',
            coordinates:[[0,1],[0,101]]
        }
    }, 9));
    t.end();
});

test('parity: odd + odd', function(t) {
    t.deepEqual({
        type:'Point',
        coordinates:[0,9]
    }, address({
        _rangetype:'tiger',
        _lfromhn: '1',
        _ltohn: '101',
        _parityl: 'O',
        _geometry: {
            type:'LineString',
            coordinates:[[0,1],[0,101]]
        }
    }, 9));
    t.end();
});

test('parity: odd + even', function(t) {
    t.deepEqual({
        coordinates: [ 0, 9 ],
        omitted: true, // because parity does not match
        type: 'Point'
    }, address({
        _rangetype:'tiger',
        _lfromhn: '1',
        _ltohn: '101',
        _parityl: 'E',
        _geometry: {
            type:'LineString',
            coordinates:[[0,1],[0,101]]
        }
    }, 9));
    t.end();
});

test('reverse', function(t) {
    t.deepEqual({
        type: 'Point',
        coordinates: [0,90]
    }, address({
        _rangetype:'tiger',
        _lfromhn: '100',
        _ltohn: '0',
        _parityl: 'E',
        _geometry: {
            type:'LineString',
            coordinates:[[0,0],[0,100]]
        }
    }, 10));
    t.end();
});

test('seminumber', function(t) {
    t.deepEqual({
        type: 'Point',
        coordinates: [0,10]
    }, address({
        _rangetype:'tiger',
        _lfromhn: 'G-0',
        _ltohn: 'G-100',
        _parityl: 'E',
        _geometry: {
            type:'LineString',
            coordinates:[[0,0],[0,100]]
        }
    }, 10));
    t.end();
});

test('multi', function(t) {
    t.deepEqual([0,40.981964], address({
        _rangetype: 'tiger',
        _lfromhn: ['1002','2'],
        _ltohn: ['1998','1000'],
        _rfromhn: ['1001','1'],
        _rtohn: ['1999','999'],
        _parityr: ['O','O'],
        _parityl: ['E','E'],
        _geometry: {
            type:'MultiLineString',
            coordinates:[
                [[0,0],[0,10]],
                [[0,40],[0,50]]
            ]
        }
    }, 100).coordinates);
    t.end();
});

test('nearest', function(t) {
    t.deepEqual(address({
        _rangetype:'tiger',
        _lfromhn: '1000',
        _ltohn: '1100',
        _geometry: {
            type:'LineString',
            coordinates:[[0,0],[0,100]]
        }
    }, 900), {
        coordinates: [ 0, 0 ],
        omitted: true, // because nearest endpoint match
        type: 'Point'
    }, 'nearest startpoint');

    t.deepEqual(address({
        _rangetype:'tiger',
        _lfromhn: '1000',
        _ltohn: '1100',
        _geometry: {
            type:'LineString',
            coordinates:[[0,0],[0,100]]
        }
    }, 1200), {
        coordinates: [ 0, 100 ],
        omitted: true, // because nearest endpoint match
        type: 'Point'
    }, 'nearest endpoint');

    t.deepEqual(address({
        _rangetype:'tiger',
        _lfromhn: '1000',
        _ltohn: '1100',
        _geometry: {
            type:'LineString',
            coordinates:[[0,0],[0,100]]
        }
    }, 2000),
    undefined,
    'outside threshold');
    t.end();
});
