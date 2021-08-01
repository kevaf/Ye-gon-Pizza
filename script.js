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
});

$("#btnd").click(function(){
    $(".list").hide();
    $(".order").show();
});
$("#orderbtn").click(function(){
    $(".order").hide();
    $(".delivery").show();
})
});

function orderOnline(){
    var size = document.getElementById("size").value;
    var topping =document.getElementById("toppings1").value;
    var crust =document.getElementById("crust1").value;
    var quantity=parseInt(document.getElementById("qty").value);

   const pizzaSize=["Small", "Medium", "Large"];
   const pizzaSizePrice=[550,700,1200]
   const pizzaCrust=["Cheese-Stuffed", "Pizza-Bagels", "Flatbread", "Crispy", "Gluten-Free"];
   const pizzaCrustPriceLarge=[200, 300, 100, 120, 150];
   const pizzaCrustPriceMedium=[200, 300, 100, 120, 150]
   const pizzaToppings=["Pepperoni", "Mushrooms", "Onions", "Sausage", "Extra-Cheese"];
   
   if(size=="" || topping=="" ||crust=="" || document.getElementById("qty").value.length==0){
       alert("Ensure All Options Are Selected to make order")
   }
   else if(quantity<1){
       alert("Enter Number of Pizzas")
   }

   if(size=="small" && topping=="Pepperoni" && crust=="Cheese-stuffed"){
       document.getElementById("ordersize").innerHTML=(pizzaSize[0])
       document.getElementById("crustorder").innerHTML=(pizzaCrust[0])
       document.getElementById("toppingsorder").innerHTML=(pizzaToppings[0])
       document.getElementById("qtyorder").innerHTML=(quantity)
   }
   else if(size=="small" && topping=="Mushrooms" && crust=="Cheese-stuffed"){
    document.getElementById("ordersize").innerHTML=(pizzaSize[0])
    document.getElementById("crustorder").innerHTML=(pizzaCrust[0])
    document.getElementById("toppingsorder").innerHTML=(pizzaToppings[1])
    document.getElementById("qtyorder").innerHTML=(quantity)
}
   else if(size=="small" && topping=="Onions" && crust=="Cheese-stuffed"){
    document.getElementById("ordersize").innerHTML=(pizzaSize[0])
    document.getElementById("crustorder").innerHTML=(pizzaCrust[0])
    document.getElementById("toppingsorder").innerHTML=(pizzaToppings[2])
    document.getElementById("qtyorder").innerHTML=(quantity)
}
else if(size=="small" && topping=="Sausages" && crust=="Cheese-stuffed"){
    document.getElementById("ordersize").innerHTML=(pizzaSize[0])
    document.getElementById("crustorder").innerHTML=(pizzaCrust[0])
    document.getElementById("toppingsorder").innerHTML=(pizzaToppings[3])
    document.getElementById("qtyorder").innerHTML=(quantity)
}
else if(size=="small" && topping=="Extra-Cheese" && crust=="Cheese-stuffed"){
    document.getElementById("ordersize").innerHTML=(pizzaSize[0])
    document.getElementById("crustorder").innerHTML=(pizzaCrust[0])
    document.getElementById("toppingsorder").innerHTML=(pizzaToppings[4])
    document.getElementById("qtyorder").innerHTML=(quantity)
}
//    else if(size=="Medium" || topping=="Pepperoni" || crust=="Cheese-stuffed"){
//     document.getElementById("ordersize").innerHTML=(pizzaSize[1])
//     document.getElementById("crustorder").innerHTML=(pizzaCrust[1])
//     document.getElementById("toppingsorder").innerHTML=(pizzaToppings[1])
//     document.getElementById("qtyorder").innerHTML=(quantity)
// }
   
 

}