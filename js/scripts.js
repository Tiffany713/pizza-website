//Business Logic for Pizza

function Pizza() {
	this.toppingsPizza = [];
	this.sizePizza = sizePizza;
}

function toppingsPizza() {
	this.olives = olives;
	this.spinach = spinach;
	this.greenPepper = greenPepper;
	this.pepperoni = pepperoni
	this.mushrooms = mushrooms
	this.onions = onions
	this.pineapple = pineapple
	this.sausage = sausage
	this.extraCheese = extraCheese;
	this.jalapeno = jalapeno
}

function sizesPizza() {
	this.small = small;
	this.medium = medium;
	this.large = large;
	this.extraLarge = extraLarge;
}


// List of Toppings

var olives = {name: "Olives", price: 1.00};
var spinach = {name: "Spinach", price: 1.00};
var greenPepper = {name: "Green Pepper Bell", price: 1.00};
var pepperoni = {name: "Pepperoni", price: 1.00};
var mushrooms = {name: "Mushrooms", price: 1.00};
var onions = {name: "Onions", price: 1.00};
var pineapple = {name: "Pinapple", price: 1.00};
var sausage = {name: "Sausage"};
var extraCheese = {name: "Extra Cheese", price: 1.00};
var jalapeno = {name: "Jalapeno", price: 1.00};

// List of Sizes
var small = {name: "Small"};
var medium = {name: "Medium", price: 2.00};
var large = {name: "Large", price: 3.00};
var extraLarge = {name: "Extra Large"};

//Nesting each object within another object
var toppingsPizza = {name: "Toppings", toppings: [olives, spinach, greenPepper, pepperoni, mushrooms, onions, pineapple, sausage, extraCheese, jalapeno]};

var sizePizza = {name: "Sizes", sizes: [small, medium, large, extraLarge]};

var pizzas = [toppingsPizza, sizePizza];


Pizza.prototype.completePizza = function() {
	this.cost = cost;

	var cost = 0;

	if (this.sizePizza[i].sizes === "small") {
		cost +=7;
	} else if (this.sizePizza[i].sizes === "medium") {
		cost +=10;
	} else if (this.sizePizza[i].sizes === "large") {
		cost +=13;
	} else (this.sizePizza[i].sizes === "extraLarge") {
		cost +=16;
	
	}
	this.toppingsPizza.forEach(function() {
		cost += 1;

	}
} 

console.log(completePizza);
console.log(sizePizza);
console.log(toppingsPizza);

// User Interface

$(document).ready(function()	{
	$("form#pizzaOrder").submit(function(event) {
		event.PreventDefault();
		var = ().val();
	});
});