'use strict';

function writeAfter2Seconds(text) {
    setTimeout( () => {
        console.log(text)
    }, 2000)
}

console.log('init')
writeAfter2Seconds('Text 1')
writeAfter2Seconds('Text 2')
console.log('end')