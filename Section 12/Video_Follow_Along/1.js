//back tick - multiline strings

let poem = `Roses are red
Violets are blue 
I Like Chocolate
And so do you!`;

console.log(poem);
//document.getElementById('output').innerHTML = poem;

let employee = {
	name: 'John',
	position: 'Production Assistant',
	location: 'Norwalk, CT',
	age: 30
};

let employeeInfo = function(object){
	let out = `${object.name} is a ${object.position}
	in our ${object.location} location and is ${object.age} years
	old`;

	return out;
}

//string interpolation

console.log(`The employees name is ${employee.name}`);

let instructor = 'Brett'
console.log(`The instructor's name is ${instructor}`);

document.getElementById('output').innerHTML = employeeInfo(employee);