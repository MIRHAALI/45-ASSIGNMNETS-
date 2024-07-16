function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] += ' the Great';
    }
}
// Array of magician names
var magicians = ['David Copperfield', 'Harry Houdini', 'Penn & Teller', 'Dynamo'];
// Calling make_great to modify the magician names
make_great(magicians);
// Calling show_magicians to display the modified names
show_magicians(magicians);
