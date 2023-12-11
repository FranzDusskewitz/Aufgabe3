const express = require('express');
const port=process.env.PORT || 5000;

const app = express();

app.use(express.json());

app.use(express.urlencoded());

app.use(express.static('public'));

app.get('/form',(req,res)=>{

    res.sendFile(__dirname + '/public/index.html');

})

app.post('/formPost',(req,res)=>{

    const data = req.body ;
    preisself = data.self * 15;
    preisref = data.referenz * 20;
    preiskoch = data.kochbuch * 25;
    data.question;
    mwst = 1.19

    gesamtpreis = preisself + preisref + preiskoch;
    res.send("Preis:" + gesamtpreis * mwst)

})

app.listen(port,()=>{
    console.log(`Server started at http://localhost:${port}`)
});
