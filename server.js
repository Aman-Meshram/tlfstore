const express=require('express');
const app=express();
var path=require('path');
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.get("/",function(req, res){
    res.sendFile("index.html");
});
var routes=require("./router");
routes(app);
app.listen(7878,()=>{ console.log("server started at port no 7878")

})