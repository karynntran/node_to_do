//include library
var readline = require("readline"),
	rl = readline.createInterface(process.stdin,process.stdout);

rl.setPrompt("$$ ");
rl.prompt();

var toDoList = [];

var commands = {
	ls: function(){
		console.log(toDoList);
	},
	add: function(item){
		toDoList.push(item);
	},
	rm: function(item){
		console.log("I want to remove", item, "!!");
	}
};

//on specifies what event you want to happen
rl.on('line', function(line){
	var words = line.split(' '),
		command = words.shift();
		argsStr = words.join(' ');

	commands[command](argsStr);	

	// console.log(words)

	// toDoList.push(line);
	// console.log(toDoList);
	rl.prompt();
});