/*console.log("1");
setTimeout(function(){
	console.log("2")
}, 3000);

console.log("3")
setTimeout(function(){
	console.log("4")
}, 1000);*/


/*let promiseToClean = new Promise(function(resolve, reject){
	//cleaning
	let isClean = false;

	if(isClean){
		resolve("Clean!");
	}else{
		reject('Not Clean!')
	}
});

promiseToClean.then(function(fromResolve){
	console.log('The room is ' + fromResolve)
}).catch(function(fromReject){
	console.log(fromReject)
})*/


let img = null;
let imgPromise = new Promise(function(resolve, reject){
	img = new Image();
	img.addEventListener('load', resolve(img));
	img.addEventListener('error', reject('Could not load image'));
	img.src = "http://thecatapi.com/api/images/get?format=src&type=jpg&size=medium";
})


imgPromise.then(function(fromResolve){
	console.log('The image has loaded. Yay!');
	let node = document.getElementById('output');
	node.appendChild(img)
}).catch(function(fromReject){
	console.log(fromReject);
})
