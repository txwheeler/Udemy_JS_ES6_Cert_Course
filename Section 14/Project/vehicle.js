class Vehicle{
	constructor(make, model, color, topSpeed){
		this._make = make;
		this._model = model;
		this._color = color;
		this._direction = 0; // 0 North, 90 East, 180 South, 270 West
		this._currentSpeed = 0; 
		this._topSpeed = topSpeed;
		this._engineStarted = false;
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

	
		const info = `${this._make} ${this._model} is ${this._color}. 
		The current direction is ${currentDirection}, it is currently travling at ${this._currentSpeed} miles per hour. 
		${this._topSpeed} is the top speed.`
		console.log(info)

	}

	accelerate(speed){
		if(isNaN(speed)){
			console.log('no speed passed into accelerate');
			return;
		}

		let mySpeed = this._currentSpeed + speed;

		if(mySpeed > this._topSpeed){
			console.log('The speed would exceed the top speed');
			console.log('Current speed is ' + this._currentSpeed)
		}else{
			this._currentSpeed = mySpeed;
			console.log('Current speed is ' + this._currentSpeed)
		}

		
	}

	brake(speed){
		if(isNaN(speed)){
			console.log('no speed passed into brake');
			return;
		}

		let mySpeed = this._currentSpeed  - speed;
		
		if(mySpeed <= 0){
			this._currentSpeed = 0;
			console.log('The vehicle is stopped.')
		}else{
			this._currentSpeed = mySpeed;
			console.log('Current speed is ' + this._currentSpeed)
		}

	}

	turnOn(){
		if(this._engineStarted){
			console.log('Engine is already started.')
		}else{
			this._engineStarted = true;
			console.log('Engine has been started')
		}
	}

	turnOff(){
		if(this._engineStarted){
			this._engineStarted = false;
			console.log('Engine has been turned off.')
		}else{
			console.log('Engine is already off.')
		}
	}
	
	turnLeft(){
		let currentDirection = '';
		
		if(this._direction == 0){
			this._direction = 270;
			currentDirection = 'west';
		}else if(this._direction == 90){
			this._direction = 0;
			currentDirection = 'north';
		}else if(this._direction == 180){
			this._direction = 90;
			currentDirection = 'east';
		}else if(this._direction == 270){
			this._direction = 180;
			currentDirection = 'south';
		}
		console.log('The Car is currently heading ' + currentDirection);
	}

	turnRight(){
		let currentDirection = '';
		
		if(this._direction == 0){
			this._direction = 90;
			currentDirection = 'east';
		}else if(this._direction == 90){
			this._direction = 180;
			currentDirection = 'south';
		}else if(this._direction == 180){
			this._direction = 270;
			currentDirection = 'west';
		}else if(this._direction == 270){
			this._direction = 0;
			currentDirection = 'north';
		}
		console.log('The Car is currently heading ' + currentDirection);
	}
}
