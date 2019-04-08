const { Observable } = require('rxjs')

const obj$ = Observable.create(function (observer) {
    observer.next('CS572')
    setTimeout(() => { observer.complete() }, 3000)
})

const subscription = obs$.subscribe(function (val) {
    console.log(val)
}, function (err) {
    console.log(err)
}, function () {
    console.log('done')
})