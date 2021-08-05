var database=require('../mysqlconnection');

exports.flower=function(flower){
    this.id=flower.id;
    this.fname=flower.fname;
    this.description=flower.descriptio;
    this.quantity=flower.quantity;
    this.unitprice=flower.unitprice;
    this.likes=flower.likes;
}


exports.getall=function(result){
database.query("select * from flowers",function(err,data){
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
exports.insert=function(newflower,result){
    database.query("insert into flowers set ?",newflower,function(err,data){
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
        database.query("select * from flowers where id= ? ",id,function(err,data){
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
    exports.update=function(id,newflower,result){
        database.query("UPDATE flowers SET fname = ? WHERE Id = ?", [newflower.fname , id],
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
    database.query("delete from flowers WHERE Id = ? ", id,
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