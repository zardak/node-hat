kid
===

Generate random IDs.

example
=======

````javascript
var kid = require('kid');

var id = kid(128);
console.log(id);
````

output:

````
0c82a54f22f775a3ed8b97b2dea74036
````

methods
=======

var kid = require('kid');

kid(bits=128, base=16)
----------------------

Generate a random ID string with `bits` of data in a `base`.

Leading zeros are appended such that all outputs for a given number of bits have
equal length.
