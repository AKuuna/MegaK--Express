const express = require('express'); //we call a full module

const app = express();


app.all('/', (req) => {
    console.log(req.method);
});

app.get('/curious', (req) => {
    const {url, originalUrl, path} = req;
    console.log({url, originalUrl, path});
});

app.get('/curious', (req) => {
    console.log(req.protocol === 'https');
});

//http://127.0.0.1:3000/curious

app.listen(3000);