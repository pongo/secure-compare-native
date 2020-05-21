# secure-compare-native

Constant-time safe comparison using Node.js native [crypto.timingSafeEqual](https://nodejs.org/api/crypto.html#crypto_crypto_timingsafeequal_a_b).

### Installation

```
npm install secure-compare-native
```

### Usage

Strings:

```javascript
const { secureCompare } = require("secure-compare-native");

secureCompare("abc", "abc"); // true
secureCompare("hello", "abc"); // false
```

Buffers: 

```javascript
const { secureCompareBuffer } = require("secure-compare-native");

const buff1 = Buffer.from("abc");
const buff2 = Buffer.from("hello");

secureCompareBuffer(buff1, buff1); // true
secureCompareBuffer(buff2, buff1); // false
```

### Performance

* `secureCompare` is about twice slower than [secure-compare](https://www.npmjs.com/package/secure-compare) on Node v12.
* `secureCompareBuffer` is fast when you compare buffers. 

### License

MIT.
