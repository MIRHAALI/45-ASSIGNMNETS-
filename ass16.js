// Define initial guest list
var guestList = [
    "Isaac Newton", // Initial replacement guest
    "Leonardo da Vinci",
    "Marie Curie"
];
// Print initial invitations
console.log("Initial invitations:");
guestList.forEach(function (person) {
    console.log("Dear ".concat(person, ", you are invited to dinner tonight."));
});
// Simulate finding a bigger dinner table
console.log("\nWe found a bigger dinner table!\n");
// Add new guests
guestList.unshift("Galileo Galilei"); // Add new guest to the beginning
guestList.splice(2, 0, "Nikola Tesla"); // Add new guest to the middle
guestList.push("Stephen Hawking"); // Append new guest to the end
// Print updated invitations
console.log("Updated invitations:");
guestList.forEach(function (person) {
    console.log("Dear ".concat(person, ", you are invited to dinner tonight."));
});
