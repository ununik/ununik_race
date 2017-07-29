function getSettingsFor(setting) {
	storage.has(setting, function(error, hasKey) {
	  if (error) throw error;

	  if (!hasKey) {
		  switch(setting) {
		  	case 'sound':
		  		createSoundSettingsStructur();
		  		break;
		  }
	  }
	});
	
	storage.get(setting, function(error, data) {
		  if (error) throw error;

		  console.log(data);
		});
}

function createSoundSettingsStructur() {
	storage.set('sound', {
		foo: 'bardasdassd'
		}, function(error) {
		  if (error) throw error;
	});
}