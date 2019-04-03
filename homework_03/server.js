const fs = require('fs');
const http = require('http');
const { promisify } = require('util');
const readFileAsync = promisify(fs.readFile);

http.createServer(function (req, res) {
    fs.readFileSync(__dirname + '/Mr.Nobody.2009.Extended.1080p.BluRay.x264.YIFY.mkv');
}).listen(1000);

http.createServer(function (req, res) {
    readFileAsync(__dirname + '/Mr.Nobody.2009.Extended.1080p.BluRay.x264.YIFY.mkv')
        .then(console.log('success'))
        .catch(console.log);
}).listen(2000);

http.createServer(function (req, res) {
    fs.createReadStream(__dirname + '/Mr.Nobody.2009.Extended.1080p.BluRay.x264.YIFY.mkv').pipe(res);
}).listen(3000);