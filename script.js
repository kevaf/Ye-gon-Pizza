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
   const pizzaCrustPriceMedium=[150, 250, 50, 60, 80]
   const pizzaCrustPriceSmall=[100, 150, 30, 20, 50]
   const pizzaToppings=["Pepperoni", "Mushrooms", "Onions", "Sausage", "Extra-Cheese"];
   const pizzaToppingtPriceLarge=[200, 300, 100, 120, 150];
   const pizzaToppingPriceMedium=[150, 250, 50, 60, 80]
   const pizzaToppingPriceSmall=[100, 150, 30, 20, 50]
   if(size=="" || topping=="" ||crust=="" || document.getElementById("qty").value.length==0){
       alert("Ensure All Options Are Selected to make order")
   }
   else if(quantity<1){
       alert("Enter Number of Pizzas")
   }
// Small pizza orders for Cheese-Stuffed
   if(size=="small" && topping=="Pepperoni" && crust=="Cheese-stuffed"){
       document.getElementById("ordersize").innerHTML=(pizzaSize[0])
       document.getElementById("crustorder").innerHTML=(pizzaCrust[0])
       document.getElementById("toppingsorder").innerHTML=(pizzaToppings[0])
       document.getElementById("qtyorder").innerHTML=(quantity)
       document.getElementById("totalorder").innerHTML=((pizzaSizePrice[0]+pizzaCrustPriceSmall[0]+pizzaToppingPriceSmall[0])*(quantity))
   }
   else if(size=="small" && topping=="Mushrooms" && crust=="Cheese-stuffed"){
    document.getElementById("ordersize").innerHTML=(pizzaSize[0])
    document.getElementById("crustorder").innerHTML=(pizzaCrust[0])
    document.getElementById("toppingsorder").innerHTML=(pizzaToppings[1])
    document.getElementById("qtyorder").innerHTML=(quantity)
    document.getElementById("totalorder").innerHTML=((pizzaSizePrice[0]+pizzaCrustPriceSmall[0]+pizzaToppingPriceSmall[1])*(quantity))
}
   else if(size=="small" && topping=="Onions" && crust=="Cheese-stuffed"){
    document.getElementById("ordersize").innerHTML=(pizzaSize[0])
    document.getElementById("crustorder").innerHTML=(pizzaCrust[0])
    document.getElementById("toppingsorder").innerHTML=(pizzaToppings[2])
    document.getElementById("qtyorder").innerHTML=(quantity)
    document.getElementById("totalorder").innerHTML=((pizzaSizePrice[0]+pizzaCrustPriceSmall[0]+pizzaToppingPriceSmall[2])*(quantity))
}
else if(size=="small" && topping=="Sausages" && crust=="Cheese-stuffed"){
    document.getElementById("ordersize").innerHTML=(pizzaSize[0])
    document.getElementById("crustorder").innerHTML=(pizzaCrust[0])
    document.getElementById("toppingsorder").innerHTML=(pizzaToppings[3])
    document.getElementById("qtyorder").innerHTML=(quantity)
    document.getElementById("totalorder").innerHTML=((pizzaSizePrice[0]+pizzaCrustPriceSmall[0]+pizzaToppingPriceSmall[3])*(quantity))
}
else if(size=="small" && topping=="Extra-Cheese" && crust=="Cheese-stuffed"){
    document.getElementById("ordersize").innerHTML=(pizzaSize[0])
    document.getElementById("crustorder").innerHTML=(pizzaCrust[0])
    document.getElementById("toppingsorder").innerHTML=(pizzaToppings[4])
    document.getElementById("qtyorder").innerHTML=(quantity)
    document.getElementById("totalorder").innerHTML=((pizzaSizePrice[0]+pizzaCrustPriceSmall[0]+pizzaToppingPriceSmall[4])*(quantity))
}
// Small pizza orders for Pizza-Bagels
if(size=="small" && topping=="Pepperoni" && crust=="Pizza-Bagels"){
    document.getElementById("ordersize").innerHTML=(pizzaSize[0])
    document.getElementById("crustorder").innerHTML=(pizzaCrust[1])
    document.getElementById("toppingsorder").innerHTML=(pizzaToppings[0])
    document.getElementById("qtyorder").innerHTML=(quantity)
    document.getElementById("totalorder").innerHTML=((pizzaSizePrice[0]+pizzaCrustPriceSmall[1]+pizzaToppingPriceSmall[0])*(quantity))
}
else if(size=="small" && topping=="Mushrooms" && crust=="Pizza-Bagels"){
 document.getElementById("ordersize").innerHTML=(pizzaSize[0])
 document.getElementById("crustorder").innerHTML=(pizzaCrust[1])
 document.getElementById("toppingsorder").innerHTML=(pizzaToppings[1])
 document.getElementById("qtyorder").innerHTML=(quantity)
 document.getElementById("totalorder").innerHTML=((pizzaSizePrice[0]+pizzaCrustPriceSmall[1]+pizzaToppingPriceSmall[1])*(quantity))
}
else if(size=="small" && topping=="Onions" && crust=="Pizza-Bagels"){
 document.getElementById("ordersize").innerHTML=(pizzaSize[0])
 document.getElementById("crustorder").innerHTML=(pizzaCrust[1])
 document.getElementById("toppingsorder").innerHTML=(pizzaToppings[2])
 document.getElementById("qtyorder").innerHTML=(quantity)
 document.getElementById("totalorder").innerHTML=((pizzaSizePrice[0]+pizzaCrustPriceSmall[1]+pizzaToppingPriceSmall[2])*(quantity))
}
else if(size=="small" && topping=="Sausages" && crust=="Pizza-Bagels"){
 document.getElementById("ordersize").innerHTML=(pizzaSize[0])
 document.getElementById("crustorder").innerHTML=(pizzaCrust[1])
 document.getElementById("toppingsorder").innerHTML=(pizzaToppings[3])
 document.getElementById("qtyorder").innerHTML=(quantity)
 document.getElementById("totalorder").innerHTML=((pizzaSizePrice[0]+pizzaCrustPriceSmall[1]+pizzaToppingPriceSmall[3])*(quantity))
}
else if(size=="small" && topping=="Extra-Cheese" && crust=="Pizza-Bagels"){
 document.getElementById("ordersize").innerHTML=(pizzaSize[0])
 document.getElementById("crustorder").innerHTML=(pizzaCrust[1])
 document.getElementById("toppingsorder").innerHTML=(pizzaToppings[4])
 document.getElementById("qtyorder").innerHTML=(quantity)
 document.getElementById("totalorder").innerHTML=((pizzaSizePrice[0]+pizzaCrustPriceSmall[1]+pizzaToppingPriceSmall[4])*(quantity))
}
// Small pizza orders for Flatbread
if(size=="small" && topping=="Pepperoni" && crust=="Flatbread"){
    document.getElementById("ordersize").innerHTML=(pizzaSize[0])
    document.getElementById("crustorder").innerHTML=(pizzaCrust[2])
    document.getElementById("toppingsorder").innerHTML=(pizzaToppings[0])
    document.getElementById("qtyorder").innerHTML=(quantity)
    document.getElementById("totalorder").innerHTML=((pizzaSizePrice[0]+pizzaCrustPriceSmall[1]+pizzaToppingPriceSmall[0])*(quantity))
}
else if(size=="small" && topping=="Mushrooms" && crust=="Flatbread"){
 document.getElementById("ordersize").innerHTML=(pizzaSize[0])
 document.getElementById("crustorder").innerHTML=(pizzaCrust[2])
 document.getElementById("toppingsorder").innerHTML=(pizzaToppings[1])
 document.getElementById("qtyorder").innerHTML=(quantity)
 document.getElementById("totalorder").innerHTML=((pizzaSizePrice[0]+pizzaCrustPriceSmall[2]+pizzaToppingPriceSmall[1])*(quantity))
}
else if(size=="small" && topping=="Onions" && crust=="Flatbread"){
 document.getElementById("ordersize").innerHTML=(pizzaSize[0])
 document.getElementById("crustorder").innerHTML=(pizzaCrust[2])
 document.getElementById("toppingsorder").innerHTML=(pizzaToppings[2])
 document.getElementById("qtyorder").innerHTML=(quantity)
 document.getElementById("totalorder").innerHTML=((pizzaSizePrice[0]+pizzaCrustPriceSmall[2]+pizzaToppingPriceSmall[2])*(quantity))
}
else if(size=="small" && topping=="Sausages" && crust=="Flatbread"){
 document.getElementById("ordersize").innerHTML=(pizzaSize[0])
 document.getElementById("crustorder").innerHTML=(pizzaCrust[2])
 document.getElementById("toppingsorder").innerHTML=(pizzaToppings[3])
 document.getElementById("qtyorder").innerHTML=(quantity)
 document.getElementById("totalorder").innerHTML=((pizzaSizePrice[0]+pizzaCrustPriceSmall[2]+pizzaToppingPriceSmall[3])*(quantity))
}
else if(size=="small" && topping=="Extra-Cheese" && crust=="Flatbread"){
 document.getElementById("ordersize").innerHTML=(pizzaSize[0])
 document.getElementById("crustorder").innerHTML=(pizzaCrust[2])
 document.getElementById("toppingsorder").innerHTML=(pizzaToppings[4])
 document.getElementById("qtyorder").innerHTML=(quantity)
 document.getElementById("totalorder").innerHTML=((pizzaSizePrice[0]+pizzaCrustPriceSmall[2]+pizzaToppingPriceSmall[4])*(quantity))
}
// Small pizza orders for Crispy
if(size=="small" && topping=="Pepperoni" && crust=="Crispy"){
    document.getElementById("ordersize").innerHTML=(pizzaSize[0])
    document.getElementById("crustorder").innerHTML=(pizzaCrust[3])
    document.getElementById("toppingsorder").innerHTML=(pizzaToppings[0])
    document.getElementById("qtyorder").innerHTML=(quantity)
    document.getElementById("totalorder").innerHTML=((pizzaSizePrice[0]+pizzaCrustPriceSmall[3]+pizzaToppingPriceSmall[0])*(quantity))
}
else if(size=="small" && topping=="Mushrooms" && crust=="Crispy"){
 document.getElementById("ordersize").innerHTML=(pizzaSize[0])
 document.getElementById("crustorder").innerHTML=(pizzaCrust[3])
 document.getElementById("toppingsorder").innerHTML=(pizzaToppings[1])
 document.getElementById("qtyorder").innerHTML=(quantity)
 document.getElementById("totalorder").innerHTML=((pizzaSizePrice[0]+pizzaCrustPriceSmall[3]+pizzaToppingPriceSmall[1])*(quantity))
}
else if(size=="small" && topping=="Onions" && crust=="Crispy"){
 document.getElementById("ordersize").innerHTML=(pizzaSize[0])
 document.getElementById("crustorder").innerHTML=(pizzaCrust[3])
 document.getElementById("toppingsorder").innerHTML=(pizzaToppings[2])
 document.getElementById("qtyorder").innerHTML=(quantity)
 document.getElementById("totalorder").innerHTML=((pizzaSizePrice[0]+pizzaCrustPriceSmall[3]+pizzaToppingPriceSmall[2])*(quantity))
}
else if(size=="small" && topping=="Sausages" && crust=="Crispy"){
 document.getElementById("ordersize").innerHTML=(pizzaSize[0])
 document.getElementById("crustorder").innerHTML=(pizzaCrust[3])
 document.getElementById("toppingsorder").innerHTML=(pizzaToppings[3])
 document.getElementById("qtyorder").innerHTML=(quantity)
 document.getElementById("totalorder").innerHTML=((pizzaSizePrice[0]+pizzaCrustPriceSmall[3]+pizzaToppingPriceSmall[3])*(quantity))
}
else if(size=="small" && topping=="Extra-Cheese" && crust=="Crispy"){
 document.getElementById("ordersize").innerHTML=(pizzaSize[0])
 document.getElementById("crustorder").innerHTML=(pizzaCrust[3])
 document.getElementById("toppingsorder").innerHTML=(pizzaToppings[4])
 document.getElementById("qtyorder").innerHTML=(quantity)
 document.getElementById("totalorder").innerHTML=((pizzaSizePrice[0]+pizzaCrustPriceSmall[3]+pizzaToppingPriceSmall[4])*(quantity))
}
// Small pizza orders for Gluten-Free
if(size=="small" && topping=="Pepperoni" && crust=="Gluten-Free"){
    document.getElementById("ordersize").innerHTML=(pizzaSize[0])
    document.getElementById("crustorder").innerHTML=(pizzaCrust[4])
    document.getElementById("toppingsorder").innerHTML=(pizzaToppings[0])
    document.getElementById("qtyorder").innerHTML=(quantity)
    document.getElementById("totalorder").innerHTML=((pizzaSizePrice[0]+pizzaCrustPriceSmall[4]+pizzaToppingPriceSmall[0])*(quantity))
}
else if(size=="small" && topping=="Mushrooms" && crust=="Gluten-Free"){
 document.getElementById("ordersize").innerHTML=(pizzaSize[0])
 document.getElementById("crustorder").innerHTML=(pizzaCrust[4])
 document.getElementById("toppingsorder").innerHTML=(pizzaToppings[1])
 document.getElementById("qtyorder").innerHTML=(quantity)
 document.getElementById("totalorder").innerHTML=((pizzaSizePrice[0]+pizzaCrustPriceSmall[4]+pizzaToppingPriceSmall[1])*(quantity))
}
else if(size=="small" && topping=="Onions" && crust=="Gluten-Free"){
 document.getElementById("ordersize").innerHTML=(pizzaSize[0])
 document.getElementById("crustorder").innerHTML=(pizzaCrust[4])
 document.getElementById("toppingsorder").innerHTML=(pizzaToppings[2])
 document.getElementById("qtyorder").innerHTML=(quantity)
 document.getElementById("totalorder").innerHTML=((pizzaSizePrice[0]+pizzaCrustPriceSmall[4]+pizzaToppingPriceSmall[2])*(quantity))
}
else if(size=="small" && topping=="Sausages" && crust=="Gluten-Free"){
 document.getElementById("ordersize").innerHTML=(pizzaSize[0])
 document.getElementById("crustorder").innerHTML=(pizzaCrust[4])
 document.getElementById("toppingsorder").innerHTML=(pizzaToppings[3])
 document.getElementById("qtyorder").innerHTML=(quantity)
 document.getElementById("totalorder").innerHTML=((pizzaSizePrice[0]+pizzaCrustPriceSmall[4]+pizzaToppingPriceSmall[3])*(quantity))
}
else if(size=="small" && topping=="Extra-Cheese" && crust=="Gluten-Free"){
 document.getElementById("ordersize").innerHTML=(pizzaSize[0])
 document.getElementById("crustorder").innerHTML=(pizzaCrust[4])
 document.getElementById("toppingsorder").innerHTML=(pizzaToppings[4])
 document.getElementById("qtyorder").innerHTML=(quantity)
 document.getElementById("totalorder").innerHTML=((pizzaSizePrice[0]+pizzaCrustPriceSmall[4]+pizzaToppingPriceSmall[4])*(quantity))
}

   
 

}