function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
function make_great(magicians) {
    // Create a new array to hold modified magician names
    var greatMagicians = magicians.map(function (magician) { return magician + ' the Great'; });
    return greatMagicians;
}
// Array of magician names
var originalMagicians = ['David Copperfield', 'Harry Houdini', 'Penn & Teller', 'Dynamo'];
// Creating a new array with the great names
var greatMagicians = make_great(originalMagicians);
// Displaying the original and modified names
console.log("Original Magicians:");
show_magicians(originalMagicians);
console.log("\nGreat Magicians:");
show_magicians(greatMagicians);
