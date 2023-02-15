'use strict';

function sum(a, b, callback) {
    const result = a + b
    callback(result)
}

sum(2, 5, function(result) {
    console.log(result)
})