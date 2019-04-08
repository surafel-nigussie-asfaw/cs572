const express = require('express');
const axios = require('axios');

const app = express();

app.disable('x-powered-by')

app.enable('trust proxy')

app.enable('strict routing')

app.enable('trust proxy');//proxy forwarding

app.enable('case sensitive routing');//capital letter and small letters different

app.get('/', (req, res) => {
    res.send('welcome');
    res.end()
});

app.get('/users', (req, res) => {
    getUsers()
        .then(response => {
            res.setHeader('Last-Mofified', new Date())
            res.setHeader('Cache-Control', 'private, max-age=86400')
            res.setHeader('If-Modified-Since', new Date())
            res.setHeader('Link', '<http://localhost:3000/users> rel="first"')
            res.write(JSON.stringify(response.data), "utf-8");
            res.end()
        })
        .catch(error => {
            console.log(error);
        })
});

async function getUsers() {
    try {
        return await axios.get('https://randomuser.me/api/?results=10');
    } catch (error) {
        console.log(error);
    }
}

app.listen(3000, () => console.error('listening to 3000'));