<div align="center">
  <h1 style="text-align: center">easy-math.js</h1>
	<div>
		<img width="500" src="https://user-images.githubusercontent.com/10891613/82399383-9a682380-9a87-11ea-8fba-a2d21a8356ac.png" alt="Awesome Node.js">
	</div>
	<hr>
	<a href="https://travis-ci.com/kingzez/easy-math.js">
		<img src="https://travis-ci.com/kingzez/easy-math.js.svg?branch=master" alt="build">
	</a>
	<a href="https://www.npmjs.com/package/easy-math.js">
		<img src="https://img.shields.io/npm/v/easy-math.js.svg" alt="npm">
	</a>
	<a href="https://www.npmjs.com/package/easy-math.js">
		<img src="https://img.shields.io/npm/l/easy-math.js.svg" alt="license">
	</a>
	<a href="https://www.npmjs.com/package/easy-math.js">
		<img src="https://flat.badgen.net/npm/dt/easy-math.js" alt="download">
	</a>
	<br>
  <p>easy-math.js include addition multiplication subtraction division with typescript.</p>
</div>

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
import { add } from 'easy-math.js'

add(0.1, 0.2) // 0.3
```

### Methods


- addition

```js
// 0.1 + 0.2 = 0.30000000000000004
add(0.1, 0.2) // 0.3
```


- multiplication

```js
// 0.3 * 0.75 = 0.22499999999999998
multiply(0.3, 0.75) // 0.225
```

- subtraction

```js
// 1.5 - 1.2 = 0.30000000000000004
subtract(1.5, 1.2) // 0.3
```

- division

```js
// 0.3 / 0.1 = 2.9999999999999996
divide(0.3, 0.1) // 3
```

### Test

use avajs test
