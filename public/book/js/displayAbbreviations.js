function getAbbrList(){
	var abbr=document.getElementsByTagName('abbr');
	var newdl=document.createElement('dl');
	var newdt=document.createElement('dt');
	var newdd=document.createElement('dd');
	var defs=new Array();

	for (var i=0;i<abbr.length;i++){
		var def=abbr[i].getAttribute('title');
		var key=abbr[i].lastChild.nodeValue;
		defs[key]=def;
		
		
		/*
		newdd.innerHTML=def;
		newdt.innerHTML=key;
		newdl.appendChild(newdt);
		newdl.appendChild(newdd);*/
	}

	for (key in defs){
		var newdt=document.createElement('dt');
		var newdd=document.createElement('dd');
		newdt.innerHTML=key;
		newdd.innerHTML=defs[key];
		newdl.appendChild(newdt);
		newdl.appendChild(newdd);
	//	console.log(newdl.innerHTML);
	}
	//console.log(newdl.innerHTML);
	var header=document.createElement('h2');
	var headerTxt=document.createTextNode('Abbreviations');
	header.appendChild(headerTxt);
	//var test=document.getElementById('test');
	document.body.appendChild(header);
	document.body.appendChild(newdl);
}

//addLoadEvent(stripeTables);