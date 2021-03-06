const express = require('express');
const bodyParser = require('body-parser');

const hostname = '172.16.251.86';
const port = 4200;

const server = express();

server.listen(port, hostname, () => {
    console.log('server running at Http://${hostname}:${port}/');
});

server.use(express.static(__dirname + '/dist'))