const fs = require('fs')
const path = require('path')

const fileName = process.argv[process.argv.length - 1]

fs.createReadStream(path.join(__dirname, fileName), { encoding: 'utf8' })
    .on('data', (chunk) => {
        process.send(chunk);
    })
    .on('end', () => {
        process.send('end');
    });