var pizzas = ['Pepperoni', 'Margherita', 'Supreme'];
// Printing the name of each pizza using a for loop
console.log("Printing pizza names:");
for (var _i = 0, pizzas_1 = pizzas; _i < pizzas_1.length; _i++) {
    var pizza = pizzas_1[_i];
    console.log(pizza);
}
// Printing a sentence about liking each pizza
console.log("\nPrinting sentences about liking each pizza:");
for (var _a = 0, pizzas_2 = pizzas; _a < pizzas_2.length; _a++) {
    var pizza = pizzas_2[_a];
    console.log("I like ".concat(pizza, " pizza."));
}
// Additional line outside the loop
console.log("\nI really love pizza!");
