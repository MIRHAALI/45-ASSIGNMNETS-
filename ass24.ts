// Tests for equality and inequality with strings
let fruit: string = 'apple';
console.log(`Is fruit == 'apple'? I predict True.`);
console.log(fruit == 'apple');

console.log(`Is fruit != 'orange'? I predict True.`);
console.log(fruit != 'orange');

// Tests using the toLowerCase() function
let city: string = 'New York';
console.log(`Is city.toLowerCase() == 'new york'? I predict True.`);
console.log(city.toLowerCase() == 'new york');

// Numerical tests
let number1: number = 42;
let number2: number = 30;

console.log(`Is number1 > number2? I predict True.`);
console.log(number1 > number2);

console.log(`Is number1 < number2? I predict False.`);
console.log(number1 < number2);

console.log(`Is number1 >= number2? I predict True.`);
console.log(number1 >= number2);

console.log(`Is number1 <= number2? I predict False.`);
console.log(number1 <= number2);

// Tests using "and" and "or" operators
let sunny: boolean = true;
let warm: boolean = true;

console.log(`Is sunny && warm? I predict True.`);
console.log(sunny && warm);

console.log(`Is sunny || !warm? I predict True.`);
console.log(sunny || !warm);

// Test whether an item is in an array
let colors: string[] = ['red', 'green', 'blue'];

console.log(`Is 'blue' in colors? I predict True.`);
console.log(colors.includes('blue'));

// Test whether an item is not in an array
console.log(`Is 'yellow' not in colors? I predict True.`);
console.log(!colors.includes('yellow'));
