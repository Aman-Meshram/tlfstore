var database=require('../mysqlconnection');

exports.order=function(order){
    this.oid=order.oid;
    this.odate=order.odate;
    this.cid=order.cid;
    this.amount=order.amount;
}


exports.getall=function(result){
database.query("select * from orders",function(err,data){
    if(err){
        console.log(err,null)
        result(null,err)
    }
    else{
        console.log(data,null)
        result(null,data)
    }
})
}
exports.insert=function(neworder,result){
    database.query("insert into orders set ?",neworder,function(err,data){
        if(err){
            console.log(err,null)
            result(null,err)
        }
        else{
            console.log(data,null)
            result(null,data)
        }
    })
    };
    exports.getby=function(id,result){
        database.query("select * from orders where oid= ? ",id,function(err,data){
            if(err){
                console.log(err,null)
                result(null,err)
            }
            else{
                console.log(data,null)
                result(null,data)
            }
        })
    };
    exports.update=function(oid,neworder,result){
        database.query("UPDATE orders SET amount = ? WHERE oid = ?", [neworder.amount , oid],
        function (err, res) {
            if(err) {
                  console.log("error: ", err);
                  result(null, err);
              }
            else{   
              result(null, res);
              }
          }); 
};
exports.remove=function(oid,result){
    database.query("delete from orders WHERE oid = ? ",oid,
    function (err, res) {
        if(err) {
              console.log("error: ", err);
              result(null, err);
          }
        else{   
          result(null, res);
          }
      }); 
};