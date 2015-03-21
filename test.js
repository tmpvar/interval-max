var test = require('tape');
var imax = require('./interval-max');

test('b > a', function(t) {
  t.deepEqual(
    imax([1, 2], [3, 4]),
    [3, 4],
    'b is largest'
  );
  t.end();
});

test('b >= a', function(t) {
  t.deepEqual(
    imax([1, 2], [2, 4]),
    [2, 4],
    'b is largest'
  );
  t.end();
});

test('a > b', function(t) {
  t.deepEqual(
    imax([3, 4], [1, 2]),
    [3, 4],
    'a is largest'
  );
  t.end();
});

test('a >= b', function(t) {
  t.deepEqual(
    imax([2, 4], [1, 2]),
    [2, 4],
    'a is largest'
  );
  t.end();
});

test('lower b in a', function(t) {
  t.deepEqual(
    imax([1, 3], [2, 4]),
    [2, 4]
  );
  t.end();
});

test('lower a in b', function(t) {
  t.deepEqual(
    imax([2, 4], [1, 3]),
    [2, 4]
  );
  t.end();
});

test('b contained in a', function(t) {
  t.deepEqual(
    imax([0, 4], [1, 3]),
    [1, 4]
  );
  t.end();
});

test('a contained in b', function(t) {
  t.deepEqual(
    imax([1, 3], [0, 4]),
    [1, 4]
  );
  t.end();
});

test('accepts out param', function(t) {
  var out = [0, 0];
  var r = imax([1, 3], [0, 4], out);

  t.equal(r, out);
  t.deepEqual(r, [1, 4]);
  t.end();
});

test('creates out if not provided', function(t) {
  var a = [4, 5];
  var r = imax(a, [0, 3]);

  t.notEqual(r, a);
  t.deepEqual(r, [4, 5]);
  t.end();
});
