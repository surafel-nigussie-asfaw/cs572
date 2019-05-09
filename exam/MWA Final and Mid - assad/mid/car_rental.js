const express = require('express')

const app = express()

app.use(express.json())
app.use()

const data = []

app.get('/rent', (req, resp) => {
    resp.status(200).json(data.find(x => x.id === req.params.id))
    resp.end()
})

app.post('/rent', (req, resp) => {
    data.push(req.body)
    resp.status(200).json(req.body)
    resp.end()
})

app.put('/rent', (req, resp) => {
    resp.status(200).json()
    resp.end()
})

app.delete('/rent', (req, resp) => {
    resp.status(200).json('success')
    resp.end()
})

app.listen(3000, () => {
    console.log("Listening at 3000...")
})