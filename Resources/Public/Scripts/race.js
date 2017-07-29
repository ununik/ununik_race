const storage = require('electron-json-storage');

function newRaceCheck(){
	createNewRace();
}

function createNewRace(){
	
	var race = {
		name: $( "#race_name" ).val()
	}
	storage.set('races', race, function(error) {
		  if (error) throw error;
	});

	getAllRaces()
	//console.log(getAllRaces());
}

function getAllRaces(){
	storage.get('races', function(error, data) {
		  if (error) throw error;
		 
		  console.log(data);
		});
}