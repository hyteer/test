function moveElement(ID,finalX,finalY,interval,callback){
	if(!document.getElementById){return false;}
	if(!document.getElementsByTagName){return false;}
	if(!document.getElementById(ID)){return false;}
	var elem=document.getElementById(ID);
	var xpos=parseInt(elem.style.left);
	var ypos=parseInt(elem.style.top);
	if( xpos==finalX && ypos==finalY){ flag="done"; return true;}
	if( xpos<finalX ){ xpos++;}
	if( xpos>finalX ){ xpos--;}
	if( ypos<finalY ){ ypos++;}
	if( ypos>finalY ){ ypos--;}
	elem.style.left=xpos+"px";
	elem.style.top=ypos+"px";
	var repeat = "moveElement('"+ID+"',"+finalX+","+finalY+","+interval+")";
	movement = setTimeout(repeat, interval);
	console.log("flag="+flag);
	return flag;
}