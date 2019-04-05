const express = require('express')
const axios = require('axios')

const app = express()

app.set('x-powered-by', false)

app.set('strict routing', true)

app.enable('case sensitive routing')

app.get('/', (req, res) => {
    res.send('welcome')
    res.end()
})

app.get('/users', (req, res) => {
    getUsers()
        .then(response => {
            res.write(JSON.stringify(response.data), "utf-8");
            res.end()
        })
        .catch(error => {
            console.log(error);
        })
})

async function getUsers() {
    try {
        return await axios.get('https://randomuser.me/api/?results=10');
    } catch (error) {
        console.log(error);
    }
}

app.listen(3000, () => console.error('listening to 3000'))