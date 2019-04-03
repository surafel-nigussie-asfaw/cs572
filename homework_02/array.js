Array.prototype.even = function () {
    const array = this;
    return new Promise(function (resolve, reject) {
        resolve(array.filter(e => e % 2 === 0));
    })
};

Array.prototype.odd = function () {
    const array = this;
    return new Promise(function (resolve, reject) {
        resolve(array.filter(e => e % 2 === 1));
    })
};

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log('start');
array.even()
    .then(e => console.log('even: ' + e))
    .catch(console.log);
array.odd()
    .then(e => console.log('odd: ' + e))
    .catch(console.log);
console.log('finish');