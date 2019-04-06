const express = require('express');
const axios = require('axios');

const app = express();

app.set('x-powered-by', false);//mention framework

app.set('strict routing', true);//trailing slashes

app.enable('trust proxy');//proxy forwarding

app.enable('case sensitive routing');//capital letter and small letters different

app.get('/', (req, res) => {
    res.send('welcome');
    res.end()
});

app.get('/users', (req, res) => {
    getUsers()
        .then(response => {
            // res.setHeader('Last-Modified', new Date());
            // res.setHeader('Cache-Control', 'private, max-age=86400');
            // res.setHeader('If-Modified-Since', new Date());
            // res.setHeader('Link', '<http://localhost:3000/users?p=1> rel="first"')
            //res.send(JSON.stringify(response), "utf-8");
            res.status(200).send(response)
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