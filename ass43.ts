function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

function make_great(magicians: string[]): string[] {
    // Create a new array to hold modified magician names
    const greatMagicians = magicians.map(magician => magician + ' the Great');
    return greatMagicians;
}

// Array of magician names
const originalMagicians = ['David Copperfield', 'Harry Houdini', 'Penn & Teller', 'Dynamo'];

// Creating a new array with the great names
const greatMagicians = make_great(originalMagicians);

// Displaying the original and modified names
console.log("Original Magicians:");
show_magicians(originalMagicians);

console.log("\nGreat Magicians:");
show_magicians(greatMagicians);
