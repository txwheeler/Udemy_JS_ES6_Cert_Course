var userList = {
	'people': [
   
		{ 	firstName: 'Fred',
			lastName: 'Smith',
			dateOfBirth: 1980,
			spokenLanguages: {
				native: 'English',
				fluent: 'Spanish',
				intermediate: 'Chinese' 
			}
		},
		{ 
			firstName: 'Monica',
			lastName: 'Taylor',
			dateOfBirth: 1975,
			spokenLanguages: {
				native: 'Spanish',
				fluent: 'English',
				intermediate: 'French' 
			}
		},
		{ 
			firstName: 'Maurice',
			lastName: 'Edelson',
			dateOfBirth: 1992,
			spokenLanguages: {
				native: 'English',
				fluent: 'Spanish',
			} 
		},
		{ 
			firstName: 'Kelly',
			lastName: 'Lang',
			dateOfBirth: 1982,
			spokenLanguages: {
				native: 'English',
				fluent: 'German',
				intermediate: 'Dutch' 
			}
		}
   	]
};



//console.log(firstName)
let out = `<table border=2>
	<tr>
		<td><b>First Name</b></td>
		<td><b>Last Name</b></td>
		<td><b>Birth Year</b></td>
		<td><b>Native Language</b></td>
		<td><b>Fluent Language</b></td>
		<td><b>Intermediate Language</b></td>
	</tr>
	`
for(var x = 0; x < userList.people.length; x++){
	//console.log(x)
	let {firstName, lastName, dateOfBirth} = userList.people[x];
	//console.log(firstName)
	let {native, fluent, intermediate} = userList.people[x].spokenLanguages;
	//console.log(native);
	//console.log(fluent);
	//console.log(intermediate);
	//console.log('=======')
	out+= `
		<tr>
			<td>${firstName}</td>
			<td>${lastName}</td>
			<td>${dateOfBirth}</td>
			<td>${native}</td>
			<td>${fluent}</td>
			<td>${intermediate ? intermediate:''}</td>
		</tr>
	`
}


out += `</table>`
document.getElementById('output').innerHTML = out;