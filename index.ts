import express from "express";

const app = express();
const port = 8000;

app.get('/', (req, res)=> {
    res.send("hello ++++++");

})
app.get('/hi', (req, res)=> {
    res.send("hello ++");

})

app.listen(port, ()=> {
    console.log(`now listening on port ${port}`)
})