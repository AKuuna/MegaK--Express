const express = require('express'); //we call a full module

const app = express();

console.log(app);

const allowedIps = ['localhost','127.0.0.1', '::1','::ffff:127.0.0.1']


app.get('/', (req) => { //this req is express object, not node object
    if(allowedIps.includes(req.ip)){
        console.log('Hello')
    } else {
        console.log('Not allowed!')
    }
    //console.log(req.hostname);
    //req.ip = ::1 IPv6 <=> 127.0.0.1 IPv4   //req.ips
    //
});

app.get('/hello', () => {
    console.log('Hello hello');
});

app.listen(3000);