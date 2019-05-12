//var Car = require('./car').CarClass;

require('./car');


//var bmw = new Car('BMW');
var bmw = new global.Car('BMW');
bmw.logName();
