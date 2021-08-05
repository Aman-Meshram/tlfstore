var database=require('../mysqlconnection');

exports.customer=function(customer){
    this.id=customer.id;
    this.firstname=customer.firstname;
    this.lastname=customer.lastname;
    this.email=customer.email;
    this.contactno=customer.contactno;
    
}


exports.getall=function(result){
database.query("select * from customers",function(err,data){
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
exports.insert=function(newcustomer,result){
    database.query("insert into customers set ?",newcustomer,function(err,data){
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
        database.query("select * from customers where id= ? ",id,function(err,data){
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
    exports.update=function(id,newcustomer,result){
        database.query("UPDATE customers SET firstname = ? WHERE Id = ?", [newcustomer.firstname , id],
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
    database.query("delete from customers WHERE Id = ? ", id,
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