/**
 * Created by alex on 24.06.2017.
 */
var db = require('db');
var log = require('logger')(module);


function User(name) {
    this.name = name;
}

User.prototype.hello = function(who) {
    log(db.getPhrase('hello') + who.name);
};

module.exports = User;
//console.log(module);