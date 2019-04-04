const http = require('http')
const { fork } = require('child_process')
const queryString = require('querystring')
const url = require('url')

http.createServer(function (req, resp) {
    resp.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });

    const urlData = url.parse(req.url)

    const { file } = queryString.parse(urlData.query)
    if (file) {
        const child_process = fork('readProcess.js', [file])

        child_process.send('start')

        child_process.on('message', function (chunk) {
            if (chunk === 'end')
                resp.end();
            else
                resp.write(chunk, "utf-8")
        })
    } else {
        resp.end()
    }
}).listen(1000);