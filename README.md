# require-nested

*NodeJS module for requiring modules inside modules.*

## Usage example

```js
var rn = require('require-nested');
var handlebars = rn('email-templates', 'handlebars');
// `handlebars` is now the instance that `email-tempaltes` uses.
```
