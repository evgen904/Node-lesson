function Car(carName) {
    this.CarName = carName || 'Unknown name';
}

Car.prototype.logName = function () {
    console.log('Car name is: ', this.CarName);
};


// локальнаяя функция
function callConsole(arguments) {
    console.log(arguments);
}

// module.exports = {
//     Car: Car
// };


// локальный экспорт
//module.exports.CarClass = Car;



global.Car = Car;

