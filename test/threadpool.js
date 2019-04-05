const crypto = require('crypto');

const start_time = Date.now();

//set UV_THREADPOOL_SIZE = 2 && node threadpool.js
//set UV_THREADPOOL_SIZE = 5 && node threadpool.js

//

crypto.pbkdf2("A", "B", 100000, 512, 'sha512', () => {
    console.log(`1. ${Date.now() - start_time}`);
});
crypto.pbkdf2("A", "B", 100000, 512, 'sha512', () => {
    console.log(`2. ${Date.now() - start_time}`);
});
crypto.pbkdf2("A", "B", 100000, 512, 'sha512', () => {
    console.log(`3. ${Date.now() - start_time}`);
});
crypto.pbkdf2("A", "B", 100000, 512, 'sha512', () => {
    console.log(`4. ${Date.now() - start_time}`);
});
crypto.pbkdf2("A", "B", 100000, 512, 'sha512', () => {
    console.log(`5. ${Date.now() - start_time}`);
});
crypto.pbkdf2("A", "B", 100000, 512, 'sha512', () => {
    console.log(`6. ${Date.now() - start_time}`);
});
crypto.pbkdf2("A", "B", 100000, 512, 'sha512', () => {
    console.log(`7. ${Date.now() - start_time}`);
});