var animal = ["rat", "ox", "tiger", "rabbit", "dragon", "snake", "horse", "goat", "monkey", "rooster", "dog", "pig"];
/* animals */

module.exports = function (robot){ 
	robot.respond(/year/i, function(msg){
		year = res.match[1]
		if animal is "rat" 
			return msg.send(":rat:");
	}
};


// create function to get animal 
function getAnimal (year) {
	var index = (year - 1984) % 12; 
	return animal[index];	
}