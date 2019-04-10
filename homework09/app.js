const MongoClient = require('mongodb').MongoClient

const client = new MongoClient('mongodb://localhost:27017', { useNewUrlParser: true })

client.connect(async (err) => {
    const db = await client.db('zips')
    const collection = await db.collection('zips')

    //question 1
    collection.aggregate([
        {
            $match: { state: 'DC' }
        },
        {
            $project: { _id: 0, zipcode: '$_id' }
        },
        {
            $sort: { zipcode: 1 }
        }
    ]).toArray((err, doc) => {
        console.log(doc)
    })

    //question 2
    collection.aggregate([
        {
            $match: { pop: { $lt: 5000 } }
        },
        {
            $sort: { pop: -1 }
        },
        {
            $project: { _id: 0, zipcode: '$_id' }
        }
    ]).toArray((err, doc) => {
        console.log(doc)
    })

    //question 3
    collection.aggregate([
        {
            $group: {
                _id: { state: '$state', city: '$city' },
                count_zipcode: { $sum: 1 }
            }
        },
        {
            $match: { count_zipcode: { $gt: 1 } }
        },
        {
            $sort: { '_id.state': 1, '_id.city': 1 }
        },
        {
            $project: {
                _id: 0,
                state: '$_id.state',
                city: '$_id.city'
            }
        }
    ]).toArray((err, doc) => {
        console.log(doc)
    })

    //question 4
    collection.aggregate([
        {
            $group: {
                _id: {
                    state: '$state',
                    city: '$city'
                },
                population: { $sum: '$pop' }
            }
        },
        {
            $sort: {
                population: 1
            }
        }
        ,
        {
            $group: {
                _id: { state: '$_id.state' },
                state: { $first: '$_id.state' },
                city: { $first: '$_id.city' },
                least_population: { $first: '$population' }
            }
        }
        ,
        {
            $project: {
                _id: 0,
                state: '$state',
                city: '$city',
                least_population: '$least_population'
            }
        }
    ]).toArray((err, arr) => {
        console.log(arr)
    })
})