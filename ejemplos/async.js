'use strict';

function writeAfter2Seconds(text, callback) {
    setTimeout( () => {
        console.log(text)
        callback()
    }, 2000)
}

console.log('init')
writeAfter2Seconds('Text 1', () => {
    writeAfter2Seconds('Text 2', () => {
        console.log('end')
    })
})

