import express  from 'express'; //module (type)

const app =express();

app.get('/book', async (req, res) => {
    res.send(" hello serever is ready to paly");
})

app.listen(3000,()=>{
    console.log("server is running on port 3000");
});