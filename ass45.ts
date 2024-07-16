interface Car {
    manufacturer: string;
    model: string;
    [key: string]: any;  // Allowing arbitrary additional properties
}

function createCar(manufacturer: string, model: string, additionalInfo: Record<string, any> = {}): Car {
    const car: Car = { manufacturer, model, ...additionalInfo };
    return car;
}

// Calling the function with required information and additional properties
const car1 = createCar('Toyota', 'Camry', { color: 'red', year: 2022 });
const car2 = createCar('Tesla', 'Model S', { autopilot: true, color: 'black' });

// Printing the car objects to verify
console.log(car1);
console.log(car2);
