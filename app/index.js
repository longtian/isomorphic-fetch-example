/**
 * Created by wyvern on 16/2/20.
 */

var api = require('../sdk');
api.repos('oneapm')
 .then(function(res){
     alert(res.length);
 })