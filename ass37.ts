function make_shirt(size: string = 'L', message: string = 'I love TypeScript'): void {
    console.log(`The shirt size is ${size} and it has the message: "${message}" printed on it.`);
}

// Creating a large shirt with the default message
make_shirt();

// Creating a medium shirt with the default message
make_shirt('M');

// Creating a small shirt with a custom message
make_shirt('S', 'Custom Message Here!');
