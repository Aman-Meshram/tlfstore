var CUSTOMER=require("../modules/customermodule");

exports.getall=function(request,response){
    CUSTOMER.getall(function(err,data){
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
    var newcustomer=new CUSTOMER.customer(request.body);
      CUSTOMER.insert(newcustomer,function(err,data){
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
    CUSTOMER.getby(id,function(err,data){
        if(err){
            response.send(err);
        }
        else{
            response.send(data);
        }
    })
};
exports.update=function(request,response){
    var newcustomer=new CUSTOMER.customer(request.body);
    var id=newcustomer.id;
    console.log(id);
    CUSTOMER.update(id,newcustomer,function(err,data){
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
    CUSTOMER.remove(id,function(err,data){
        if(err){
            response.send(err);
        }
        else{
            response.send(data);
        }
    })
};