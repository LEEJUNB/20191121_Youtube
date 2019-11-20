const express = require('express');
const app = express();

const port = 3000;

function handle(){
    console.log(`Listening on : http://localhost:${port}`);
}

function handle2(req,res){
    res.send('Listeng~~');
    console.log(`Listening on : http://localhost:${port}`);
}
app.get('/',handle2);
app.listen(port,handle);