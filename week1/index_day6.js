// middlewares
const express = require('express');
const cookieParser = require('cookie-parser'); //needed npm i cookie-parser first installed

const app = express();

app.use(express.json()); //allows to use middleware to see later json body of request (content type application/json is crucial)
app.use(express.static('public')); //allows to connect frontend to backend, it takes files from file named public
app.use(cookieParser()); //allows to send to us cookies to an object dedicated for them


app.post('/book', (req, res) => {
    console.log(req.body);
    console.log(req.cookies);
    res.send('ok.');
});

app.listen(3000);
