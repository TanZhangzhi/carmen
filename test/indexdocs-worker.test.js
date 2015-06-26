var worker = require('../lib/indexer/indexdocs-worker.js');
var grid = require('../lib/util/grid.js');
var tape = require('tape');
var termops = require('../lib/util/termops.js');
var token = require('../lib/util/token.js');

tape('worker.loadDoc', function(assert) {
    var token_replacer = token.createReplacer({});
    var patch;
    var tokens;
    var freq;
    var zoom;
    var doc;
    var err;

    patch = { grid:{}, docs:[] };
    freq = {};
    tokens = ['main', 'st'];
    zoom = 6;
    doc = {
        _id: 1,
        _text: 'main st',
        _center: [0, 0],
        _zxy: ['6/32/32'],
        _score: 100
    };

    freq[0] = [101, 200];
    freq[termops.encodeTerm(tokens[0])] = [1];
    freq[termops.encodeTerm(tokens[1])] = [100];

    // Indexes single doc.
    err = worker.loadDoc(patch, doc, freq, zoom, token_replacer);
    assert.ifError(err);
    assert.deepEqual(Object.keys(patch.grid).length, 8);
    assert.deepEqual(patch.grid[Object.keys(patch.grid)[0]].length, 1);
    assert.deepEqual(grid.decode(patch.grid[Object.keys(patch.grid)[0]][0]), {
        id: 1,
        relev: 1,
        score: 4, // scales score based on max score value (100)
        x: 32,
        y: 32
    });
    assert.deepEqual(patch.docs.length, 1);
    assert.deepEqual(patch.docs[0], doc);

    assert.end();
});

tape('worker.verifyCenter', function(assert) {
    assert.equal(worker.verifyCenter([0,0], [[0,0,0]]), true, 'center in tiles');
    assert.equal(worker.verifyCenter([0,-45], [[0,0,1],[1,0,1]]), false, 'center outside tiles');
    assert.end();
});

tape('worker.runChecks', function(assert) {
    assert.equal(worker.runChecks({
    }), 'doc has no _id');
    assert.equal(worker.runChecks({
        _id:1
    }), 'doc has no _text on _id:1');
    assert.equal(worker.runChecks({
        _id:1,
        _text:'Main Street'
    }), 'doc has no _center or _geometry on _id:1');
    assert.equal(worker.runChecks({
        _id:1,
        _text:'Main Street',
        _center:[0,0]
    }), 'index has no zoom on _id:1');
    assert.equal(worker.runChecks({
        _id:1,
        _text:'Main Street',
        _center:[0,0]
    }, -1), 'zoom must be greater than 0 --- zoom was -1 on _id:1');
    assert.equal(worker.runChecks({
        _id:1,
        _text:'Main Street',
        _center:[0,0]
    }, 15), 'zoom must be less than 15 --- zoom was 15 on _id:1');
    assert.equal(worker.runChecks({
        _id:1,
        _text:'Main Street',
        _center:[0,0],
        _geometry: { type: 'Polygon', coordinates: [new Array(60e3)] }
    }, 12), 'Polygons may not have more than 50k vertices. Simplify your polygons, or split the polygon into multiple parts.');
    assert.equal(worker.runChecks({
        _id:1,
        _text:'Main Street',
        _center:[0,0],
        _geometry: { type: 'MultiPolygon', coordinates: [[new Array(30e3)],[new Array(30e3)]] }
    }, 12), 'Polygons may not have more than 50k vertices. Simplify your polygons, or split the polygon into multiple parts.');
    assert.equal(worker.runChecks({
        _id:1,
        _text:'Main Street',
        _center:[0,0],
        _geometry: { type: 'Point', coordinates: [0,0] }
    }, 12), '');
    assert.end();
});

