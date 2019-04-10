const MongoClient = require('mongodb').MongoClient

const client = new MongoClient('mongodb://localhost:27017', { useNewUrlParser: true })

    (function () {
        client.connect(function (err) {
            const db = client.db('restaurants');
            const collection = db.collection('restaurants')

            //question 1
            collection.find().toArray((err, doc) => {
                console.log("question 1", doc)
            })

            //question 2
            const projection2 = {
                restaurant_id: 1,
                name: 1,
                district: 1,
                cuisine: 1
            }

            collection.find().project(projection2).toArray((err, doc) => {
                console.log("question 2", doc)
            })

            //question 3 
            const projection3 = {
                restaurant_id: 1,
                name: 1,
                district: 1,
                cuisine: 1,
                _id: 0
            }

            collection.find().project(projection3).toArray((err, doc) => {
                console.log("question 3", doc)
            })

            //question 4
            const projection4 = {
                restaurant_id: 1,
                name: 1,
                district: 1,
                zipcode: 1,
                _id: 0
            }

            collection.find().project(projection4).toArray((err, doc) => {
                console.log("question 4", doc)
            })

            //question 5
            const query5 = {
                district: 'Bronx'
            }

            collection.find(query5).toArray((err, doc) => {
                console.log("question 5", doc)
            })

            //question 6
            const query6 = {
                district: 'Bronx'
            }

            collection.find(query6).limit(5).toArray((err, doc) => {
                console.log("question 6", doc)
            })

            //question 7 
            const query7 = {
                district: 'Bronx'
            }

            collection.find(query7).skip(5).limit(5).toArray((err, doc) => {
                console.log("question 7", doc)
            })

            //question 8
            const query8 = {
                "address.coord.0": { $lt: -95.754168 }
            }
            collection.find(query8).toArray((err, docArr) => {
                console.log("question 8", docArr)
            })

            //question 9
            const query9 = {
                cuisine: { $ne: 'American ' },
                "grades.score": { $gt: 70 },
                "address.coord.0": { $lt: -65.754168 }
            }
            collection.find(query9).toArray((err, docArr) => {
                console.log("question 9", docArr)
            })

            //question 10
            const query10 = {
                name: { $regex: /^Wil/ }
            }
            const projection10 = {
                restaurant_id: 1,
                name: 1,
                district: 1,
                cuisine: 1
            }
            collection.find(query10).project(projection10).toArray((err, docArr) => {
                console.log("question 10", docArr)
            })

            //question 11
            const query11 = {
                name: { $regex: /ces$/ }
            }
            const projection11 = {
                restaurant_id: 1,
                name: 1,
                district: 1,
                cuisine: 1
            }
            collection.find(query11).project(projection11).toArray((err, docArr) => {
                console.log("question 11", docArr)
            })

            //question 12
            const query12 = {
                name: { $regex: /Reg/ }
            }
            const projection12 = {
                restaurant_id: 1,
                name: 1,
                district: 1,
                cuisine: 1
            }
            collection.find(query12).project(projection12).toArray((err, docArr) => {
                console.log("question 12", docArr)
            })

            //question 13
            const query13 = {
                district: "Bronx",
                cuisine: { $in: ['American ', 'Chinese'] }
            }
            collection.find(query13).toArray((err, docArr) => {
                console.log("question 13", docArr)
            })

            //question 14
            const query14 = {
                district: { $in: ['Staten Island', 'Queens', 'Bronx', 'Brooklyn'] }
            }
            const projection14 = {
                restaurant_id: 1,
                district: 1,
                cuisine: 1
            }
            collection.find(query14).project(projection14).toArray((err, docArr) => {
                console.log("question 14", docArr)
            })

            //question 15
            const query15 = {
                district: { $nin: ['Staten Island', 'Queens', 'Bronx', 'Brooklyn'] }
            }
            const projection15 = {
                restaurant_id: 1,
                district: 1,
                cuisine: 1
            }
            collection.find(query15).project(projection15).toArray((err, docArr) => {
                console.log("question 15", docArr)
            })

            //question 16
            const query16 = {
                "grades.score": { $lte: 10 }
            }
            const projection16 = {
                restaurant_id: 1,
                district: 1,
                cuisine: 1
            }
            collection.find(query16).project(projection16).toArray((err, docArr) => {
                console.log("question 16", docArr)
            })

            //question 17
            const query17 = {
                $and: [{ "address.coord.1": { $gt: 42 } }, { "address.coord.1": { $lt: 52 } }]
            }
            const projection17 = {
                restaurant_id: 1,
                name: 1,
                address: 1
            }
            collection.find(query17).project(projection17).toArray((err, docArr) => {
                console.log("question 17", docArr)
            })

            //question 18
            const options18 = {
                name: 1
            }

            collection.find().sort(options18).toArray((err, docArr) => {
                console.log("question 18", docArr)
            })

            //question 19
            const options19 = {
                name: -1
            }

            collection.find().sort(options19).toArray((err, docArr) => {
                console.log("question 19", docArr)
            })

            //question 20
            const options20 = {
                cuisine: 1,
                district: -1
            }

            collection.find().sort(options20).toArray((err, docArr) => {
                console.log("question 20", docArr)
            })

            //question 21
            const query21 = {
                "address.street": { $exists: true }
            }

            collection.find(query21).toArray((err, docArr) => {
                console.log("question 21", docArr)
            })

            //question 22
            const query22 = {
                "address.coord": { $type: 'double' }
            }

            collection.find(query22).toArray((err, docArr) => {
                console.log("question 22", docArr)
            })

            //question 23
            const query23 = {
                name: { $regex: /^Mad/ }
            }

            const projection = {
                name: 1,
                district: 1,
                "address.coord": 1,
                cuisine: 1
            }

            collection.find(query23).project(projection).toArray((err, docArr) => {
                console.log("question 23", docArr[0])
            })
        })
    })()

