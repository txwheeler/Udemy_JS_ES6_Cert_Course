const btnWeather = document.getElementById('btnWeather');
const txtCity = document.getElementById('txtCity');
const resultOut = document.getElementById('result');

btnWeather.onclick = function(){
	const city = txtCity.value;
	const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}`;
	fetch(url).then(response => {
		response.json().then(json => {
			let data = json;
			console.log(data)
			let output = formatResponse(data);
			resultOut.innerHTML = output;
		});
	});
}

function kelvinToFahrenheit(kTemp){
	const fTemp = kTemp * (9/5) - 459.67;
	return fTemp;
}

function msToMPH(ms){
	return ms * 2.237;
}

function formatResponse(data){
	let conditions = ""
	if(data.weather.length>1){
		for(var i = 0; i < data.weather.length; i++){
			conditions += data.weather[i].main;
			if (i != (data.weather.length -1)){
				conditions += " and ";
			}
		}
	}else{
		conditions += data.weather[0].main;
	}
	let out = `<h2>Current Condtions for ${data.name}</h2> \
	<p><strong>Temperature:</strong> ${Math.round(kelvinToFahrenheit(data.main.temp))}F<br/> \
	<p><strong>Humidity:</strong> ${data.main.humidity}%<br/> \
	<p><strong>Pressure:</strong> ${data.main.pressure}mb<br/> \
	<p><strong>Wind:</strong> ${data.wind.deg} degrees at ${msToMPH(Math.round(data.wind.speed))} MPH<br/> \ 
	<p>${conditions}</p>`;

	return(out);
}