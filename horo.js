
module.exports = function (robot){ 
	robot.hear(/year(.*)/i, function(msg){
		var year = parseInt(msg.match[1]);
		var animal = getAnimal(year);
			return msg.send(":" + animal +":")

	});
};

var animal = ["rat", "ox", "tiger", "rabbit", "dragon", "snake", "horse", "goat", "monkey", "rooster", "dog", "pig"];
function getAnimal (year) {
	var index = (year - 1924) % 12; 
	return animal[index];	
}
