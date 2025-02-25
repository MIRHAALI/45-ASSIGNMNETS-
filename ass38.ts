function describe_city(city: string, country: string = 'Pakistan'): void {
    console.log(`${city} is in ${country}.`);
}

// Calling the function for three different cities
describe_city('Karachi');           // Default country (Pakistan)
describe_city('Lahore');            // Default country (Pakistan)
describe_city('New York', 'USA');   // Custom country
