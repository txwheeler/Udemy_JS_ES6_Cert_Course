
let campTasks = new Map();

function addCamper(){
	let camperName = document.getElementById('camperName').value;
	let task = document.getElementById('campTasks').value;
	//console.log(campTasks)
	//check if the task has been assigned already...
	if(campTasks.size !== 0){
		found = 0;
		for(let r of campTasks.keys()){
			if(r == task){
				alert(task + ' has been assigned already.');
				return;
			}
		}

		for(let r of campTasks.values()){
			if(r == camperName){
				alert(camperName + ' has been assigned a task already.');
				return;
			}
		}

		campTasks.set(task, camperName);
		document.getElementById('camperName').value = '';
	}else{
		campTasks.set(task, camperName);
		document.getElementById('camperName').value = '';
	}
}

function showAll(){
	let out = '';
	out += '<table>';
	out += '<td>Tasks</td>';
	out += '<td>Camper</td>';	
	for(let r of campTasks.entries()){
		out += '<tr>';
		out += '<td><b>'+r[0]+'</b></td>';
		out += '<td>'+r[1]+'</td>';
		out += '</tr>';

	}
	out += '</table>';
	document.getElementById('output').innerHTML = out;
}
