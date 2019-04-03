const dns = require('dns');
const { promisify } = require('util');

const resolve4Async = promisify(dns.resolve4);

async function resolve4AsyncFunc() {
    return await resolve4Async('www.mum.edu');
}

resolve4AsyncFunc()
    .then(obj => console.log(obj))
    .catch(obj => console.log(obj));