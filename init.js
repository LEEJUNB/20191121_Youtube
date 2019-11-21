import app from "./app"; //

const port = 3000;
const handle= () => {
    console.log(`Listening on : http://localhost:${port}`);
};
app.listen(port,handle);