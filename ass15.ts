// Define initial guest list
let guestList: string[] = [
    "Albert Einstein",
    "Leonardo da Vinci",
    "Marie Curie"
];

// Print initial invitations
guestList.forEach(person => {
    console.log(`Dear ${person}, you are invited to dinner tonight.`);
});

// Simulate a guest who can't make it
let guestWhoCantMakeIt: string = "Albert Einstein";
console.log(`${guestWhoCantMakeIt} can't make it to dinner.\n`);

// Replace with a new guest
let newGuest: string = "Isaac Newton";
let indexOfGuestWhoCantMakeIt: number = guestList.indexOf(guestWhoCantMakeIt);
if (indexOfGuestWhoCantMakeIt !== -1) {
    guestList[indexOfGuestWhoCantMakeIt] = newGuest;
    console.log(`We're inviting ${newGuest} instead!\n`);
}

// Print updated invitations
guestList.forEach(person => {
    console.log(`Dear ${person}, you are invited to dinner tonight.`);
});
