exports.index=function(req,res){
	res.render('index',{'title':'Express'});
}
exports.yt=function(req,res){
	res.render('yt',{
	'title':'Testing tool',
	'yt':'Performance testing tool: Loadrunner'
	});	
}
