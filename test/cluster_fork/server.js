const http = require('http');
const pid = process.pid;

http.createServer((req, res) => {
    res.end(`Handled by process ${pid}`);
}).listen(8000, () => {
    console.log(`Started process ${pid}`)
});