function addClass(element,value){
	if(!element.className){
		element.className=value;
	}else{
		var newClass=element.className+" "+value;
		element.className=newClass;
	}
}