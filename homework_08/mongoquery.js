const MongoClient = require('mongodb').MongoClient

const client = new MongoClient('mongodb://localhost:27017', { useNewUrlParser: true })

function q() {
    client.connect(function (err) {
        const db = client.db('restaurants');
        const collection = db.collection('restaurants')

        // //question 8
        // const query8 = {
        //     "address.coord.0": { $lt: -95.754168 }
        // }
        // collection.find(query8).toArray((err, docArr) => {
        //     console.log("question 8", docArr)
        // })

        // //question 9
        // const query9 = {
        //     cuisine: {$ne: 'American '},
        //     "grades.score": {$gt: 70},
        //     "address.coord.0": {$lt: -65.754168}
        // }
        // collection.find(query9).toArray((err, docArr) => {
        //     console.log("question 9", docArr)
        // })

        //question 10
        // const query10 = {
        //     name: { $regex: /^Wil/}
        // }
        // const projection10 = {
        //     restaurant_id: 1,
        //     name: 1,
        //     district: 1,
        //     cuisine: 1
        // }
        // collection.find(query10).project(projection10).toArray((err, docArr) => {
        //     console.log("question 10", docArr)
        // })

        // const query11 = {
        //     name: { $regex: /ces$/}
        // }
        // const projection11 = {
        //     restaurant_id: 1,
        //     name: 1,
        //     district: 1,
        //     cuisine: 1
        // }
        // collection.find(query11).project(projection11).toArray((err, docArr) => {
        //     console.log("question 11", docArr)
        // })


        // const query12 = {
        //     name: { $regex: /Reg/}
        // }
        // const projection12 = {
        //     restaurant_id: 1,
        //     name: 1,
        //     district: 1,
        //     cuisine: 1
        // }
        // collection.find(query12).project(projection12).toArray((err, docArr) => {
        //     console.log("question 12", docArr)
        // })


        // const query13 = {
        //     district: "Bronx",
        //     cuisine: {$in: ['American ', 'Chinese']}
        // }
        // collection.find(query13).toArray((err, docArr) => {
        //     console.log("question 13", docArr)
        // })


        // const query14 = {
        //     district: { $in: ['Staten Island', 'Queens', 'Bronx', 'Brooklyn'] }
        // }
        // const projection14 = {
        //     restaurant_id: 1,
        //     district: 1,
        //     cuisine: 1
        // }
        // collection.find(query14).project(projection14).toArray((err, docArr) => {
        //     console.log("question 14", docArr)
        // })


        // const query15 = {
        //     district: { $nin: ['Staten Island', 'Queens', 'Bronx', 'Brooklyn'] }
        // }
        // const projection15 = {
        //     restaurant_id: 1,
        //     district: 1,
        //     cuisine: 1
        // }
        // collection.find(query15).project(projection15).toArray((err, docArr) => {
        //     console.log("question 15", docArr)
        // })

        const query16 = {
            "grades.score": {$lte: 10}
        }
        const projection16 = {
            restaurant_id: 1,
            district: 1,
            cuisine: 1
        }
        collection.find(query16).project(projection16).toArray((err, docArr) => {
            console.log("question 16", docArr)
        })
    })
}
q() 