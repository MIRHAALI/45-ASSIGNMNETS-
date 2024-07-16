// Define initial guest list
var guestList = [
    "Albert Einstein",
    "Leonardo da Vinci",
    "Marie Curie"
];
// Print initial invitations
guestList.forEach(function (person) {
    console.log("Dear ".concat(person, ", you are invited to dinner tonight."));
});
// Simulate a guest who can't make it
var guestWhoCantMakeIt = "Albert Einstein";
console.log("".concat(guestWhoCantMakeIt, " can't make it to dinner.\n"));
// Replace with a new guest
var newGuest = "Isaac Newton";
var indexOfGuestWhoCantMakeIt = guestList.indexOf(guestWhoCantMakeIt);
if (indexOfGuestWhoCantMakeIt !== -1) {
    guestList[indexOfGuestWhoCantMakeIt] = newGuest;
    console.log("We're inviting ".concat(newGuest, " instead!\n"));
}
// Print updated invitations
guestList.forEach(function (person) {
    console.log("Dear ".concat(person, ", you are invited to dinner tonight."));
});
