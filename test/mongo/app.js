const MongoClient = require('mongodb').MongoClient

const client = new MongoClient('mongodb://localhost:27017', { useNewUrlParser: true })

async function getData() {
    await client.connect(async (err) => {
        if (!err) {
            const db = await client.db('myDB')
            const collection = await db.collection('myCollection')

            collection.insert({name: 'abel', age: 12})
            collection.insert({name: 'tom', age: 20})

            await collection.findOne({}, { name: 0 }, function (err, doc) {
                console.log('>>>FindOne: ', doc)
                client.close()
            })

            await collection.find({ name: 'abel' }, { sort: [['name', 'ascending']], limit: 5, skip: 5 }).project({ age: 0 }).toArray(function (err, docArr) {
                console.log(">>>Find: ", docArr)
                client.close()
            })

            await collection.find({ name: { $eq: 'abel' } }).toArray(function (err, docArr) {
                console.log(">>>Find Query: ", docArr)
                client.close()
            })

            await collection.find({ $or: [{age: {$eq: 12}}] }).toArray(function (err, docArr) {
                console.log(">>>Query: ", docArr)
                client.close()
            })

            console.log('Done...')
        } else {
            throw new Error('Error while connecting...');
        }
    })
}

getData()