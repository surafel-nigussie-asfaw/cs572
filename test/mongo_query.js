const MongoClient = require('mongodb').MongoClient

const client = new MongoClient('mongodb://localhost:21707')

client.connect((err) => {
    const db = client.db('')
    const collection = db.collection('')

    const query = {
        _id: 1,
        grade: 10
    }

    const patch_data = {
        $set: {
            city: 'Fairfield'
        },
        $set: {
            "location.$": 'North east'
        }
    }

    const delete_data = {
        $unset: {
            city: 1
        }
    }

    const increment_data = {
        $inc: {
            score: 1
        }
    }
    //$push, $pop, $pushAll, $pull, $pullAll, $addToSet, 

    collection.updateOne(query, data, { upsert: true })
})