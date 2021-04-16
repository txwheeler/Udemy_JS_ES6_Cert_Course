const HEADER = 'How to do the Floss Dance';
let validationPassed = 1;

let clothing = '';
let body = '';
let body2 = '';
let verb = '';
let body3 = '';
let verb2 = '';
let noun = '';
let noun2 = '';
let verb3 = '';
let htmlOut = '';
let consoleOut = '';

function doValidation(){
	clothing = document.getElementById('clothing').value;
	if(clothing.trim() == ''){
		alert('Please enter a clothing item.');
		document.getElementById('clothing').focus();
		return 0;
	}
	
	body = document.getElementById('body').value;
	if(body.trim() == ''){
		alert('Please enter a body part.');
		document.getElementById('body').focus();
		return 0;
	}	

	body2 = document.getElementById('body2').value;
	if(body2.trim() == ''){
		alert('Please enter a body part.');
		document.getElementById('body2').focus();
		return 0;
	}	
		
	verb = document.getElementById('verb').value;
	if(verb.trim() == ''){
		alert('Please enter a verb.');
		document.getElementById('verb').focus();
		return 0;
	}	

	body3 = document.getElementById('body3').value;
	if(body3.trim() == ''){
		alert('Please enter body part.');
		document.getElementById('body3').focus();
		return 0;
	}	

	verb2 = document.getElementById('verb2').value;
	if(verb2.trim() == ''){
		alert('Please enter a verb.');
		document.getElementById('verb2').focus();
		return 0;
	}	

	noun = document.getElementById('noun').value;
	if(noun.trim() == ''){
		alert('Please enter a noun.');
		document.getElementById('noun').focus();
		return 0;
	}

	noun2 = document.getElementById('noun2').value;
	if(noun2.trim() == ''){
		alert('Please enter a noun.');
		document.getElementById('noun2').focus();
		return 0;
	}

	verb3 = document.getElementById('verb3').value;
	if(verb3.trim() == ''){
		alert('Please enter a verb.');
		document.getElementById('verb3').focus();
		return 0;
	}
	return 1;
}

let displayOutput = function(){
	validationPassed = doValidation();
	if(validationPassed == 0){
		return;
	}
	
	htmlOut = `${HEADER}<br>
	1) Put on some Music<br>
	2) Put on a ${clothing}<br>
	3) Stand with your ${body} ever so slightly bent<br>
	4) Put your hands in fist<br>
	5) Place your ${body2}, relaxed at the side of your body<br>
	6) Begin to ${verb} your ${body3} left and right around your torso in the opposite direction to your hips<br>
	7) Keep doing it and increse speed and ${verb2} ${noun} occasionally for effect<br>
	After building confidence, you can also ${noun} ${verb3} with your arms if desired, but this is not mandatory`;

	document.getElementById('output').innerHTML = htmlOut;

	consoleOut = `${HEADER}
1) Put on some Music
2) Put on a ${clothing}
3) Stand with your ${body} ever so slightly bent
4) Put your hands in fist
5) Place your ${body2}, relaxed at the side of your body
6) Begin to ${verb} your ${body3} left and right around your torso in the opposite direction to your hips
7) Keep doing it and increse speed and ${verb2} ${noun} occasionally for effect
After building confidence, you can also ${noun} ${verb3} with your arms if desired, but this is not mandatory`;
	
	console.log(consoleOut)
}

