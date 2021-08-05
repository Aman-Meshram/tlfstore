var ORDERSITEM=require("../modules/orderitemmodule");

exports.getall=function(request,response){
    ORDERSITEM.getall(function(err,data){
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
    var neworderitem=new ORDERSITEM.ordersitem(request.body);
    ORDERSITEM.insert(neworderitem,function(err,data){
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
    var oiid=request.params.id;
    ORDERSITEM.getby(oiid,function(err,data){
        if(err){
            response.send(err);
        }
        else{
            response.send(data);
        }
    })
};
exports.update=function(request,response){
    var neworderitem=new ORDERSITEM.ordersitem(request.body);
    var id=neworderitem.id;
    console.log(id);
    ORDERSITEM.update(id,neworderitem,function(err,data){
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
    ORDERSITEM.remove(id,function(err,data){
        if(err){
            response.send(err);
        }
        else{
            response.send(data);
        }
    })
};