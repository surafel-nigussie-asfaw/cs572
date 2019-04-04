const os = require('os');

(function () {
    console.log('Checking your system...')

    if ((os.totalmem * 1e-9) < 4) {
        console.log('This app needs atleast 4 GB of RAM.')
        return;
    }

    if (os.cpus().length < 2) {
        console.log('Processor is not supported.');
        return;
    }

    console.log('System is checked successfully.')
})()