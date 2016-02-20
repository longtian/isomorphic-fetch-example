/**
 * Created by wyvern on 16/2/20.
 */

var fetch = require('isomorphic-fetch');

fetch('http://api.github.com/users/wyvernnot/repos')
    .then(res=>res.json())
    .then(res=>alert(res.length));

