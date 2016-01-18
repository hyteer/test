var events=require('events');
var emitter=new events.EventEmitter();

emitter.on('testEvent',function(par1,par2){
	console.log('listener1',par1+par2);
});
emitter.emit('testEvent','QTP','Autorunner');