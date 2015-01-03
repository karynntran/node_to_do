var wakeUp = function(callback){
	console.log("I'm waking up");
	if (callback)
		if(typeof callback === 'function')
			callback();
};

var checkPhone = function(callback){
	console.log("Checking phone...");
	if (callback)
		if(typeof callback === 'function')
			callback();
};

var eatBreakfast = function(callback){
	console.log("Eat breakfast...");
	if (callback)
		if(typeof callback === 'function')
			callback();
};

wakeUp(function(){
	checkPhone(function(){
		eatBreakfast();
	});
});