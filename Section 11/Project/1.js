let numbers = new Set()
.add("B1")
.add("B2")
.add("B3")
.add("B4")
.add("B5")
.add("B6")
.add("B7")
.add("B8")
.add("B9")
.add("B10")
.add("B11")
.add("B12")
.add("B13")
.add("B14")
.add("B15")
.add("I16")
.add("I17")
.add("I18")
.add("I19")
.add("I20")
.add("I21")
.add("I22")
.add("I23")
.add("I24")
.add("I25")
.add("I26")
.add("I27")
.add("I28")
.add("I29")
.add("I30")
.add("N31")
.add("N32")
.add("N33")
.add("N35")
.add("N35")
.add("N36")
.add("N37")
.add("N38")
.add("N39")
.add("N40")
.add("N41")
.add("N42")
.add("N43")
.add("N44")
.add("N45")
.add("G46")
.add("G47")
.add("G48")
.add("G49")
.add("G50")
.add("G51")
.add("G52")
.add("G53")
.add("G54")
.add("G55")
.add("G56")
.add("G57")
.add("G58")
.add("G59")
.add("G60")
.add("O61")
.add("O62")
.add("O63")
.add("O64")
.add("O65")
.add("O66")
.add("O67")
.add("O68")
.add("O69")
.add("O70")
.add("O71")
.add("O72")
.add("O73")
.add("O74")
.add("O75")

let results = new Set();

let randomNumber = (number) => Math.floor(Math.random() * number) + 1;

//console.log(randomNumber(74))
//console.log('====')
//console.log(numbers.floor());
//console.log(numbers.size);
//console.log(randomNumber(numbers.size))

function getNextBingoNumber(){
	if(results.size == numbers.size){
		return -1;
	}
	//alert('next bingo number');
	let myNum = randomNumber(numbers.size)
	let bingoNumber = "";
	if(myNum <= 15){
		bingoNumber = 'B'+myNum;
	}else if(myNum >= 16 && myNum <= 30){
		bingoNumber = 'I'+myNum;
	}else if(myNum >= 31 && myNum <= 45){
		bingoNumber = 'N'+myNum;
	}else if(myNum >= 46 && myNum <= 60){
		bingoNumber = 'G'+myNum;
	}else if(myNum >= 61 && myNum <= 75){
		bingoNumber = 'O'+myNum;
	}

	if(results.has(bingoNumber)){
		console.log('im here!!')
		return getNextBingoNumber();
		
	}else{
		results.add(bingoNumber);
		return bingoNumber;
	}
}

function setupBingo(){
	let displayNumber = getNextBingoNumber();
	if(displayNumber == -1){
		document.getElementById('nextBingoNumber').innerHTML = 'NO MORE NUMBERS TO BE CALLED';
	}else{
		document.getElementById('nextBingoNumber').innerHTML = displayNumber;
	}
}

function showBingoResults(){
	let output = "";
	for(let r of results){
		output += r + '<br>'
	}
	document.getElementById('output').innerHTML = output;
	results.clear();
}



setupBingo();