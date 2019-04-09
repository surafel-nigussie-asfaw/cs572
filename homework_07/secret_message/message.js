const encryptor = require('simple-encryptor');
const MongoClient = require('mongodb').MongoClient;
const express = require('express')
const helmet = require('helmet')

const app = express()

app.use(helmet())
app.use(express.json());

const client = new MongoClient('mongodb://homework01:homework01@ds233806.mlab.com:33806/homework01');

app.get('/secret', (req, resp) => {
    console.log(req.body)
    try {
        client.connect(async function (err) {
            const db = await client.db('homework01')
            const collection = await db.collection('data')
            await collection.findOne({}, { _id: 0 }, function (err, doc) {
                const encrypt = encryptor(doc.key)
                resp.send(encrypt.decrypt(doc.message))
            })
        })
    } catch (e) {
        console.log(e)
    }
})

app.listen(3000, () => console.log("Listening 3000"))