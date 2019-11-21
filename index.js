import express from "express"; 
const app = express();
const port = 3000;

const handle= () => {
    console.log(`Listening on : http://localhost:${port}`);
};

const between = (res,req,next) => {
    res.send("beettttttwwweeeen!!!");
    next();
};

const handle2 = (req,res) => {
    res.send('Listeng~~');
    console.log(`Listening on : http://localhost:${port}`);
};

app.use(between);
app.get('/',handle2);
app.listen(port,handle);