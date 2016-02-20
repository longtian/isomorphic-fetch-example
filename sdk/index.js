/**
 * Created by wyvern on 16/2/20.
 */

var fetch = require('isomorphic-fetch');

var repos = function(name){
    return fetch('https://api.github.com/users/'+name+'/repos')
        .then(function(res){
            return res.json();
        });
}

exports.repos=repos;