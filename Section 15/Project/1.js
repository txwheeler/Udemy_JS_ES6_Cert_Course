let w = '';
let h = '';
let url = '';

let img = null;
let node = document.getElementById('output');

function getImage(){
	//width
	//height

	w = document.getElementById('width').value;
	h = document.getElementById('height').value;
	if(isNaN(w) || w < 0 || w == ''){
		alert('Please set a width.');
		return;
	}

	if(isNaN(h) || h < 0 || h == ''){
		alert('Please set a height.');
		return;
	}	

	node.innerHTML = '';
	
	if(document.getElementById('grayScale').checked)
		url = 'https://picsum.photos/'+w+'/'+h+'/?random&grayscale';
	else
		url = 'https://picsum.photos/'+w+'/'+h+'/?random';

	let imgPromise = new Promise(function(resolve, reject){
		img = new Image();
		img.addEventListener('load', resolve(img));
		img.addEventListener('error', reject('Could not load image'));
		img.src = url;
	})

	imgPromise.then(function(fromResolve){
		console.log('The image has loaded. Yay!');
		
		node.appendChild(img)
	}).catch(function(fromReject){
		console.log(fromReject);
	})
}




