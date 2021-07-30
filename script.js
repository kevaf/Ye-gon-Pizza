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

function orderOnline(){
    var size = document.getElementById("crust1").value;
    var topping =document.getElementById("toppings1").value;
    var crust =document.getElementById("crust1").value;
}




});