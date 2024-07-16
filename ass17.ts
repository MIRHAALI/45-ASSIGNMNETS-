// Define initial guest list
let guestList: string[] = [
    "Galileo Galilei",
    "Isaac Newton",
    "Nikola Tesla",
    "Leonardo da Vinci",
    "Marie Curie",
    "Stephen Hawking"
];

// Print initial invitations
console.log("Initial invitations:");
guestList.forEach(person => {
    console.log(`Dear ${person}, you are invited to dinner tonight.`);
});

// Announce limitation of dinner table space
console.log("\nSorry, we can only invite two people for dinner.\n");

// Remove guests until only two remain
while (guestList.length > 2) {
    let removedPerson: string = guestList.pop()!;
    console.log(`Sorry ${removedPerson}, we can't invite you to dinner.`);
}

// Print invitations to the remaining two guests
console.log("\nInvitations to remaining guests:");
guestList.forEach(person => {
    console.log(`Dear ${person}, you are still invited to dinner tonight.`);
});

// Clear the list
guestList = [];

// Print the empty list to confirm
console.log("\nFinal guest list:");
console.log(guestList);
