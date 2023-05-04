const {URLSearchParams} = require ('url');

function generateQueryString(params) {
    const qs = new URLSearchParams(params);
    `${qs}`.replace(/\+/g,'%20'); //regex, find all (g) + and replace them
}

console.log(`http://localhost/?${generateQueryString({
    name: 'Alex & Jacob'
})}`)

//building parameters
// const qs = new URLSearchParams({
//     name: Alex & Jacob
// });

console.log(`http://localhost:3000/?${qs.toString()}`);