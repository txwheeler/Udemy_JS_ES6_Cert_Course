class Bus extends Vehicle{
	constructor(make, model, color, topSpeed, numberOfSeats){
		super(make, model, color, topSpeed);
		this._numberOfSeats = numberOfSeats;		
	}

	info(){
		let currentDirection = ''
		if(this._direction == 0){
			currentDirection = 'north';
		}else if(this._direction == 90){
			currentDirection = 'east';
		}else if(this._direction == 180){
			currentDirection = 'south';
		}else if(this._direction == 270){
			currentDirection = 'west';
		}

	
		const info = `BUS!!! = ${this._make} ${this._model} is ${this._color}. 
		The current direction is ${currentDirection}, it is currently travling at ${this._currentSpeed} miles per hour. 
		${this._topSpeed} is the top speed. It is a bus with ${this._numberOfSeats} number of seats.`
		console.log(info)

	}

}