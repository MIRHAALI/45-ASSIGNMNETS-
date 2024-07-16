let animals: string[] = ['Dog', 'Cat', 'Rabbit'];

// Printing the name of each animal using a for loop
console.log("Printing animal names:");
for (let animal of animals) {
    console.log(animal);
}

// Printing a statement about each animal
console.log("\nPrinting statements about each animal:");
for (let animal of animals) {
    console.log(`A ${animal.toLowerCase()} would make a great pet.`);
}

// Additional line outside the loop
console.log("\nAny of these animals would make a great pet!");
