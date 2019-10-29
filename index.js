// implement your API here
const express = require('express');
const db = require('./data/db');
const server = express();

server.use(express.json());

server.get('/', (req, res)=> {
    res.send("Hello, Nurse!");
})

server.listen(7000, ()=> console.log('Server eavesdropping on port 7000'))