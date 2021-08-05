var database=require('../mysqlconnection');

exports.ordersitem=function(ordersitem){
    this.id=ordersitem.id;
    this.oid=ordersitem.oid;
    this.food_id=ordersitem.food_id;
    this.quantity=ordersitem.quantity;    
}


exports.getall=function(result){
database.query("select * from ordersitem",function(err,data){
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
exports.insert=function(neworderitem,result){
    database.query("insert into ordersitem set ?",neworderitem,function(err,data){
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
        database.query("select * from ordersitem where id= ? ",id,function(err,data){
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
    exports.update=function(id,newordersitem,result){
        database.query("UPDATE ordersitem SET quantity = ? WHERE Id = ?", [newordersitem , id],
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
exports.remove=function(id,result){
    database.query("delete from ordersitem WHERE Id = ? ", id,
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