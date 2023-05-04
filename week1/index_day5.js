//Task 1
//App that is able to take 2 numbers from path. Then sum it and show the result in the browser. 
//Parameters will be brouhght back as strings, there will be a need to parse.
const express = require('express');

const app = express();

app.get('/:numA/:numB', (req,res) => {  // parameters are used with : 
    //console.log(req.params);
    const { numA, numB} = req.params;
    const sum = Number(numA) + Number(numB);
    res.send(`${sum}`); // needs to be sent as string
});

app.listen(3000);

//Task 2
// 3 paths app,
//1: '/name/set/:name' - remeber given name and shows it in a browser
//2: '/name/show' - shows given earlier name
//3: '/name/check' - shows info if name is already saved or not


const express = require('express');
const {readFile, writeFile} = require('fs').promises;

const app1 = express();

let name;

app1.get('/name/set/:name', async (req,res) => {
    name = req.params.name;
    await writeFile('name.txt',name,'utf-8');
    res.send(name);

});

app1.get('/name/show', async (req, res) => {
    const name = await readFile('name.txt', 'utf-8');
    res.send(name);    
});

app1.get('/name/check', async (req, res) => {
    try{
    await readFile('name.txt', 'utf-8');
    res.send('There is already name stored.')
    } catch(e) {
        res.send('There is no name stored.'); 
    }
});


app1.listen(3000);