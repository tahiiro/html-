function changeUp(name){

	for (var i = 9; i >= 1; i--) {
		document.getElementById(i).innerHTML = '<img id="'+i+'"  src="images/m_photo'+i+'.png" alt="Le titre de la photo '+i+'" onclick="changeUp('+i+')"/>';
	}

	document.getElementById(name).innerHTML = '<img style="border: solid 2px #888999;" id="'+name+'"  src="images/m_photo'+name+'.png" alt="Le titre de la photo '+name+'" onclick="changeUp('+name+')"/>';
	document.getElementById('big_pict').innerHTML = '<div id="big_pict"><img  src="images/photo'+name+'.png" alt="Photo 2 en taille normale" /></div>';
	document.getElementById('title').innerHTML = '<dt id="title">Titre de la photo '+name+'</dt>';
}