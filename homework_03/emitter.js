var EventEmitter = require('events');

class Gym extends EventEmitter {
    constructor() {
        super();
        setInterval(() => { this.emit('boom'); }, 1000);
    }
}

new Gym().on('boom', function () {
    console.log('Athlete is working.')
})