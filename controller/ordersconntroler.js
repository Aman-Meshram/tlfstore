var ORDERS=require("../modules/ordersmodule");

exports.getall=function(request,response){
    ORDERS.getall(function(err,data){
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
    var neworder=new ORDERS.order(request.body);
    ORDERS.insert(neworder,function(err,data){
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
    ORDERS.getby(id,function(err,data){
        if(err){
            response.send(err);
        }
        else{
            response.send(data);
        }
    })
};
exports.update=function(request,response){
    var neworder=new ORDERS.order(request.body);
    var oid=neworder.oid;
    console.log(oid);
    ORDERS.update(oid,neworder,function(err,data){
        if(err){
            response.send(err);
        }
        else{
            response.send(data);
        }
    })
};
exports.remove=function(request,response){
    var oid=request.params.id;
    ORDERS.remove(oid,function(err,data){
        if(err){
            response.send(err);
        }
        else{
            response.send(data);
        }
    })
};