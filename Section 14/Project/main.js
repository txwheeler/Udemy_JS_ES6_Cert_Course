let car1 = new Vehicle('Ford', 'F250', 'black', 125);

car1.turnOn();
car1.turnOn();
car1.turnOff();
car1.turnOff();
car1.info();
car1.accelerate(40)
car1.accelerate(40)
car1.info();
car1.accelerate(40)
car1.accelerate(40)
car1.brake(40)
car1.brake(5)
car1.info();
car1.brake(5);
car1.turnLeft();
car1.turnLeft();
car1.turnLeft();
car1.turnLeft();
car1.info();
car1.turnRight();
car1.turnRight();
car1.turnRight();
car1.turnRight();
car1.brake(80)

let bus = new Bus('Ford', 'E200', 'yellow', '100',23);

bus.info();
bus.brake(5);


let ambulance = new Ambulance('Ford', 'F550', 'white', 100);

ambulance.turnSirenOff();
ambulance.turnSirenOn();
ambulance.turnSirenOn();
ambulance.turnSirenOff();