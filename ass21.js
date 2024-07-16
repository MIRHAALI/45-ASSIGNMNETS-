// Define an array of country objects
var countries = [
    { name: "USA", capital: "Washington, D.C.", population: 331449281 },
    { name: "China", capital: "Beijing", population: 1444216107 },
    { name: "India", capital: "New Delhi", population: 1393409038 },
    { name: "Brazil", capital: "Brasília", population: 213993437 },
    { name: "Russia", capital: "Moscow", population: 145912025 }
];
// Print information about each country
console.log("Countries Information:");
countries.forEach(function (country) {
    console.log("Country: ".concat(country.name, ", Capital: ").concat(country.capital, ", Population: ").concat(country.population));
});
