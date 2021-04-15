//sets can have dupes

let songs = new Set();
songs.add('Don\'t Stop Believing');
songs.add('Eye of the Tiger');
songs.add('Every Breath You Take');

let gpas = new Set([4.0, 2.23, 3.82, 2.225, 3.12]);

let states = new Set().add('Connecticut').add('Texas').add('New York').add('Illinois').add('Florida');

if(states.has('Connecticut')){
	alert('Present!');
}

gpas.delete(4.0);

for(let state of states.values()){
	alert(state)
}