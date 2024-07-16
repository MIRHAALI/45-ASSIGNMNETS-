function describe_city(city, country) {
    if (country === void 0) { country = 'Pakistan'; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
// Calling the function for three different cities
describe_city('Karachi'); // Default country (Pakistan)
describe_city('Lahore'); // Default country (Pakistan)
describe_city('New York', 'USA'); // Custom country
