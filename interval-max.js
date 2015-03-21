var max = Math.max;
function interval_max(a, b, out) {
  out = out || [0, 0];
  out[0] = max(a[0], b[0])
  out[1] = max(a[1], b[1]);
  return out;
}

module.exports = interval_max;
