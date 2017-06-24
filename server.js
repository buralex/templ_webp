var db = require('db');
    db.connect();
var User = require('./user');

var log = require('logger')(module);

function run() {
    var vasya = new User('vasya');
    var petya = new User('petya');
    vasya.hello(petya);

    log(db.getPhrase('run successful'));
}

if (module.parent) {
    exports.run = run;
} else {
    run();
}

