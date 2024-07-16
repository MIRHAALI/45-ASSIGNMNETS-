function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

// Array of magician names
const magicians = ['David Copperfield', 'Harry Houdini', 'Penn & Teller', 'Dynamo'];

// Calling the function to show magicians
show_magicians(magicians);
