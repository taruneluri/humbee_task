var express=require('express');
var app=express();
app.use(express.static('pages'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/pages/index.html');
})
app.listen(3000,()=>{console.log("server started")});