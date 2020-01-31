function Pizza() {
	this.toppingsPizza = toppingsPizza;
	this.sizePizza = sizePizza;
}

Pizza.prototype.completePizza = function() {
	return this.toppingsPizza + " " + this.sizePizza;
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

pizzas.forEach(function(pizza) {
  pizza.toppings.forEach(function(topping) {
		console.log(topping.name);
	});
});