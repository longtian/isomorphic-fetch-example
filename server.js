/**
 * Created by wyvern on 16/2/20.
 */


var API = require('./sdk');

API.repos('oneapm')
    .then(function(res){
        console.log('result length:%d',res.length);
    })
    .catch(function(err){
        console.error(err);
    })