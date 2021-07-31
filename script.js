$(document).ready(function(){
$("#ps").click(function(){
    $('#pizzasize').toggle();
    $('#crust').hide();
    $('#toppings').hide();
});
$("#crs").click(function(){
    $('#crust').toggle();
    $('#pizzasize').hide();
    $('#toppings').hide();
});
$("#topp").click(function(){
    $('#toppings').toggle();
    $('#pizzasize').hide();
    $('#crust').hide();
})
});

function orderOnline(){
    var size = document.getElementById("size").value;
    var topping =document.getElementById("toppings1").value;
    var crust =document.getElementById("crust1").value;
    var quantity=parseInt(document.getElementById("qty").value);

   const pizzaSize=["Small", "Medium", "Large"];
   const pizzaCrust=["Pizza-Bagels", "Cheese-Stuffed", "Flatbread", "Crispy", "Gluten-Free"];
   const pizzaToppings=["Pepperoni", "Mushrooms", "Onions", "Sausage", "Extra-Cheese"];
   
   if(size=="" || topping=="" ||crust=="" || document.getElementById("qty").value.length==0){
       alert("Ensure All Options Are Selected to make order")
   }
   else if(quantity<1){
       alert("Enter Number of Pizzas")
   }
   
 

}