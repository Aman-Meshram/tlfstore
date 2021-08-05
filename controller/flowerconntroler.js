var FLOWER=require("../modules/flowermodule");

exports.getall=function(request,response){
    FLOWER.getall(function(err,data){
        if(err){
            response.send("err")
        }
        else
        {
            response.send(data);
        }
    })
}
exports.insert=function(request,response){
    var newflower=new FLOWER.flower(request.body);
      FLOWER.insert(newflower,function(err,data){
        if(err){
            response.send("err")
        }
        else
        {
            response.send(data);
        }

      })
};

exports.getByid=function(request,response){
    var id=request.params.id;
    FLOWER.getby(id,function(err,data){
        if(err){
            response.send(err);
        }
        else{
            response.send(data);
        }
    })
};
exports.update=function(request,response){
    var newflower=new FLOWER.flower(request.body);
    var id=newflower.id;
    console.log(id);
    FLOWER.update(id,newflower,function(err,data){
        if(err){
            response.send(err);
        }
        else{
            response.send(data);
        }
    })
};
exports.remove=function(request,response){
    var id=request.params.id;
    FLOWER.remove(id,function(err,data){
        if(err){
            response.send(err);
        }
        else{
            response.send(data);
        }
    })
};
