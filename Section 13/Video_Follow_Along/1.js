let person = {
	first: 'Mark',
	last: 'Lassoff',
	age: 44, 
	city: 'Norwalk',
	state: 'CT'
}

//before destructuring
console.log(person.first)
console.log('===================');
//destructiong
let {first, last, city, age, state} = person;
console.log(first);
console.log(last);
console.log(age);
console.log(city);
console.log(age);
console.log(state);

console.log('===================');

let company = {
	name: 'Framework Television',
	social: {
		twitter : 'https://twiter.com/fw_social',
		facebook: 'https://facebook.com/frameworktelevision'
	}
}

//old way
console.log(company.social.facebook);

//destructuring 
let {twitter, facebook} = company.social;

console.log(twitter);
console.log(facebook);