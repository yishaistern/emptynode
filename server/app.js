const Promise = require('promise');

const methods = {};

methods.first = function(one, two) {
    return one + two;
}

methods.second = function(str) {
    return new Promise(function(resolve, reject) {
        resolve('i got the sring: ' + str);
    });
}

exports.running = methods;