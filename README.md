# interval-max

compute the MAX interval of two intervals

extracted from [Implicit Solid Modeling Using Interval Methods](https://github.com/tmpvar/interval-min/files/76491/Implicit.Solid.Modeling.Using.Interval.Methods.pdf)

## install

`npm install interval-max`

## use

Intervals are represented by a 2 component array (e.g. `[0, 1]`)

```javacript
var imax = require('interval-max');

console.log(imax([0, 2], [3, 4]));
// outputs: [3, 4]
```

### api signature

__imax__(`a`, `b`, `out`)

* `a` is the first interval
* `b` is the second interval
* `out` is an optional 2 part araray. Provide this to avoid generating garbage
* returns: 2 part array


## license

[MIT](LICENSE.txt)
