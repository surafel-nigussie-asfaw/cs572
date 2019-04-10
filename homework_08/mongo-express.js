const MongoClient = require('mongodb').MongoClient
const express = require('express')

const client = new MongoClient('mongodb://localhost:27017', { useNewUrlParser: true })

const app = express()

app.use(express.json());

const CURRENT_LAT = 41.017654;
const CURRENT_LONG = -91.9665342;

app.post('/insert', (req, resp) => {
    client.connect((err) => {
        const db = client.db('locations')
        const col = db.collection('location')

       // col.createIndex({location: '2dsphere'})

        const location = {
            name: req.body.name,
            category: req.body.category,
            location: { type: "Point", coordinates: [req.body.location.longitude, req.body.location.latitude] }
        }


        col.insertOne(location, (err, docArr) => {
            resp.json(docArr)
            resp.end()
        })
    })
})

app.get('/search', async(req, res) => {
    const { name, category } = req.query;

    const query = {
        location: {
            $near: [ CURRENT_LONG, CURRENT_LAT ]
        }
    };

    if(name) query.name = name;
    if(category) query.category = category;

    const result = await collection.find(query).limit(3).toArray();

    res.json(result);
});

app.listen(3000, () => console.log("listeing at port 3000"))