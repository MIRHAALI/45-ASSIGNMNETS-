function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("You ordered a sandwich with the following items: ".concat(items.join(', '), "."));
}
// Calling the function with different numbers of arguments
make_sandwich('lettuce', 'tomato', 'turkey');
make_sandwich('cheese', 'ham');
make_sandwich('peanut butter', 'jelly', 'banana', 'honey');
