var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function createCar(manufacturer, model, additionalInfo) {
    if (additionalInfo === void 0) { additionalInfo = {}; }
    var car = __assign({ manufacturer: manufacturer, model: model }, additionalInfo);
    return car;
}
// Calling the function with required information and additional properties
var car1 = createCar('Toyota', 'Camry', { color: 'red', year: 2022 });
var car2 = createCar('Tesla', 'Model S', { autopilot: true, color: 'black' });
// Printing the car objects to verify
console.log(car1);
console.log(car2);
