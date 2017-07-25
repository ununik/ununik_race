function getSettingsFor(setting) {

	alert(dir);
	
	$.getJSON( "../../Settings/" + setting + ".json" , function( result ){
        alert(result);
    });
	alert(dir);
}