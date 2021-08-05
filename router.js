const flowerconntroler=require('./controller/flowerconntroler');
const customerconntroler=require('./controller/customerconntroler');
const ordersconntroler=require('./controller/ordersconntroler');
const ordersitemconntroler=require('./controller/ordersitemconntroler');


module.exports=function(app){
    app.route("/api/flowers")
    .get(flowerconntroler.getall)             
     .post(flowerconntroler.insert)
     .put(flowerconntroler.update)  ;

     app.route("/api/flowers/:id")
.get(flowerconntroler.getByid)             
.delete(flowerconntroler.remove);
//===================================================================================


app.route("/api/customers/:id")
 .get(customerconntroler.getByid)            
  .delete(customerconntroler.remove);



  app.route("/api/customers")
  .get(customerconntroler.getall)             
   .post(customerconntroler.insert)
   .put(customerconntroler.update)  ;

   
//===================================================================================

  app.route("/api/orders")
  .get(ordersconntroler.getall)             
   .post(ordersconntroler.insert)
   .put(ordersconntroler.update)  ;

   app.route("/api/orders/:id")
 .get(ordersconntroler.getByid)            
  .delete(ordersconntroler.remove);
//===================================================================================


   app.route("/api/ordersitem")
   .get(ordersitemconntroler.getall)             
    .post(ordersitemconntroler.insert)
    .put(ordersitemconntroler.update)  ;

   app.route("/api/ordersitem/:id")
 .get(ordersitemconntroler.getByid)            
  .delete(ordersitemconntroler.remove);

}