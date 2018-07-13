const tester = require('./app');
const express = require('express');
const bodyPars = require ('body-parser');

const listener = express();
listener.use(bodyPars());
console.log(tester.running.first(1.16, 2));


listener.get('/hello' , function(request, response) {
    response.send('hy');
});

listener.post('/hellopost' , function(request, response) {
    console.log(request.body);
    tester.running.second(request.body.name).then(function(data) {
        response.send(data);
    })
});


listener.listen(4005, function() {
    console.log('listening at 4005');
});