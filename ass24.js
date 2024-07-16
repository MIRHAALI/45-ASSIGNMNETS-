// Tests for equality and inequality with strings
var fruit = 'apple';
console.log("Is fruit == 'apple'? I predict True.");
console.log(fruit == 'apple');
console.log("Is fruit != 'orange'? I predict True.");
console.log(fruit != 'orange');
// Tests using the toLowerCase() function
var city = 'New York';
console.log("Is city.toLowerCase() == 'new york'? I predict True.");
console.log(city.toLowerCase() == 'new york');
// Numerical tests
var number1 = 42;
var number2 = 30;
console.log("Is number1 > number2? I predict True.");
console.log(number1 > number2);
console.log("Is number1 < number2? I predict False.");
console.log(number1 < number2);
console.log("Is number1 >= number2? I predict True.");
console.log(number1 >= number2);
console.log("Is number1 <= number2? I predict False.");
console.log(number1 <= number2);
// Tests using "and" and "or" operators
var sunny = true;
var warm = true;
console.log("Is sunny && warm? I predict True.");
console.log(sunny && warm);
console.log("Is sunny || !warm? I predict True.");
console.log(sunny || !warm);
// Test whether an item is in an array
var colors = ['red', 'green', 'blue'];
console.log("Is 'blue' in colors? I predict True.");
console.log(colors.includes('blue'));
// Test whether an item is not in an array
console.log("Is 'yellow' not in colors? I predict True.");
console.log(!colors.includes('yellow'));
