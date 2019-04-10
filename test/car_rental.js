const MongoClient = require('mongodb').MongoClient

const client = new MongoClient('mongodb://localhost:27017')

client.connect((err) => {
    const db = client.db('rental')
    const collection = db.collection('cars')

    const query = {
        //'rental_details.rental_start_date': '2018-04-29T16:18:35.634Z'
    }

    collection.find(query)
    .sort({
        'rental_details.rental_price': 1
    })
    .toArray((err, docArr) => {
        console.log(docArr[0])
    })

    collection.update({}, {$set: {name: 12}})//add column
})