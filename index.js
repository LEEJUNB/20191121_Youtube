import express from "express"; 
const app = express();
const port = 3000;

const handle= () => {
    console.log(`Listening on : http://localhost:${port}`);
};

const handle2 = (req,res) => {
    res.send('Listeng~~');
    console.log(`Listening on : http://localhost:${port}`);
};
app.get('/',handle2);
app.listen(port,handle);