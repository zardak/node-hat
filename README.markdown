hat
===

Generate random IDs and avoid collisions.

![hat](http://substack.net/images/hat.png)

examples
========

hat
---

````javascript
var hat = require('hat');

var id = hat();
console.log(id);
````

output:

````
0c82a54f22f775a3ed8b97b2dea74036
````

rack
----

````javascript
var hat = require('hat');
var rack = hat.rack();

console.log(rack());
console.log(rack());
````

output:

````
1c24171393dc5de04ffcb21f1182ab28
fabe2323acc1b559dee43d4a1e16cbeb
````

methods
=======

var hat = require('hat');

hat(bits=128, base=16)
----------------------

Generate a random ID string with `bits` of data in a `base`.

Leading zeros are appended such that all outputs for a given number of bits have
equal length.

var rack = hat.rack(bits=128, base=16, expandBy)
------------------------------------------------

Make a new hat rack. Call `rack()` repeatedly to generate new IDs which are
checked for collisions.

If `expandBy` is specified, increment `bits` by this amount if too many
collisions occur. If `expandBy` isn't specified, `rack()` will throw if too many
collisions occur during generation.

Optionally call `var id = rack(data)` to store `data` at the new ID.

You can get the data out again with `rack.get(id)` and set the data with
`rack.set(id, value)`.

# how to make a hat

First you will need a large square of cloth or paper. These materials work well:

* large napkin
* newspaper

If you find yourself at a fancy restraurant, large napkins are in abundant
supply.

Fold the cloth along the diagonal. Bring the far ends perpendicular to the
diagonal up past the diagonal a short distance on each side. Fold one end back
in order to fold in the inner section of the hat then put the folded-out end
back like the other side. Now roll up each side of the hat from the bottom
several turns to keep it sturdy. Place the hat on your head and enjoy!
