# Easy-math.js

easy-math.js include addition multiplication subtraction division with typescript

## Usage

### Add easy-math.js to your project

To install, run:

```console
$ npm i -S easy-math.js
```

### Include easy-math.js

You can obtain easy-math.js directly in project with require('easy-math.js')

```js
var emjs = require('easy-math.js')

emjs.add(0.1, 0.2) // 0.3
```

And you can use ES6 import

```js
const { add } from 'easy-math.js'

add(0.1, 0.2) // 0.3
//or
0.1.add(0.2) // 0.3
```

### Methods


- addition

```js
// 0.1 + 0.2 = 0.30000000000000004
add(0.1, 0.2) // 0.3

0.1.add(0.2) // 0.3
```


- multiplication
```js
// 0.3 * 0.75 = 0.22499999999999998
multiply(0.3, 0.75) // 0.225

0.3.mul(0.75) //0.225
```

- subtraction
```js
// 1.5 - 1.2 = 0.30000000000000004
subtract(1.5, 1.2) // 0.3

1.5.sub(1.2) // 0.3
```

- division
```js
// 0.3 / 0.1 = 2.9999999999999996
divide(0.3, 0.1) // 3

0.3.div(0.1) // 3

```

### Test

use avajs test
