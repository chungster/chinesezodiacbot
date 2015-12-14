
module.exports = function (robot){ 
	robot.hear(/birthyear(.*)/i, function(msg){
			return msg.send("you are a "+ ":rat:")

	});
};

var animal = ["rat", "ox", "tiger", "rabbit", "dragon", "snake", "horse", "goat", "monkey", "rooster", "dog", "pig"];
function getAnimal (year) {
	var index = (year - 1984) % 12; 
	return animal[index];	
}

			// return msg.send(":ox:")
			// return msg.send(":tiger:")
			// return msg.send(":rabbit:")
			// return msg.send(":dragon:")
			// return msg.send(":snake:")
			// return msg.send(":horse:")
			// return msg.send(":goat:")
			// return msg.send(":monkey:")
			// return msg.send(":rooster:")
			// return msg.send(":dog:")
			// return msg.send(":pig:")