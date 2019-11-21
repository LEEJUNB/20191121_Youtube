import express from "express"; 
const app = express();

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

export default app;
