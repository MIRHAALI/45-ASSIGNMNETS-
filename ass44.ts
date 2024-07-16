function make_sandwich(...items: string[]): void {
    console.log(`You ordered a sandwich with the following items: ${items.join(', ')}.`);
}

// Calling the function with different numbers of arguments
make_sandwich('lettuce', 'tomato', 'turkey');
make_sandwich('cheese', 'ham');
make_sandwich('peanut butter', 'jelly', 'banana', 'honey');
