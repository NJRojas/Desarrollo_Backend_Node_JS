'use strict';

const EventEmitter = require('events')
const emisor = new EventEmitter()

emisor.on('phone call', function(caller) {
    if (caller === 'my boss') {
        // ignore
        return;
    }
    console.log('ring ring')
})


emisor.once('phone call', function() {
    console.log('brr brr')
})

emisor.emit('phone call', 'my boss')
emisor.emit('phone call')
emisor.emit('phone call')