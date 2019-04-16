const fs = require('fs')
const path = require('path')

fs.readFile(path.join(), 'utf8', function () {
    setTimeout(() => { console.log('timeout') }, 0);
    setImmediate(() => console.log('immediate'));
    process.nextTick(() => console.log('nexttick'));
})

//tick is already at the IO phase after loading the file