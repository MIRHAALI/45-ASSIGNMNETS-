let pizzas: string[] = ['Pepperoni', 'Margherita', 'Supreme'];

// Printing the name of each pizza using a for loop
console.log("Printing pizza names:");
for (let pizza of pizzas) {
    console.log(pizza);
}

// Printing a sentence about liking each pizza
console.log("\nPrinting sentences about liking each pizza:");
for (let pizza of pizzas) {
    console.log(`I like ${pizza} pizza.`);
}

// Additional line outside the loop
console.log("\nI really love pizza!");
 