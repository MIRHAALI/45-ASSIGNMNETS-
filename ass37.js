function make_shirt(size, message) {
    if (size === void 0) { size = 'L'; }
    if (message === void 0) { message = 'I love TypeScript'; }
    console.log("The shirt size is ".concat(size, " and it has the message: \"").concat(message, "\" printed on it."));
}
// Creating a large shirt with the default message
make_shirt();
// Creating a medium shirt with the default message
make_shirt('M');
// Creating a small shirt with a custom message
make_shirt('S', 'Custom Message Here!');
