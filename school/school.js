/**
 * Created by f on 2016/4/7.
 */
var clazz = require('./clazz');

function add(c){
    var t = c.teacher;
    var s = c.students;
    clazz.add(t,s);
}

exports.addClazz = add;
