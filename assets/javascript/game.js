var userKey = [
	"m", "n", "b", "v", "c", "x", "z", "a", "s", "d", "f", "g", "h", "j", "k", "l", "p", "o", "i", "u", "y", "t", "r", "e", "w", "q", " "
];

var countries = [
	{
		name: "Argentina",
		continent: "South America"
	},
	
	{
		name: "Brazil",
		continent: "South America"
	},
	
	{
		name: "Peru",
		continent: "South America"
	},

	{
		name: "Bolivia",
		continent: "South America"
	},

	{
		name: "Colombia",
		continent: "South America"
	},

	{
		name: "Panama",
		continent: "Central America"
	},

	{
		name: "Costa Rica",
		continent: "Central America"
	},

	{
		name: "Nicaragua",
		continent: "Central America"
	},

	{
		name: "El Salvador",
		continent: "Central America"
	},

	{
		name: "Guatemala",
		continent: "Central America"
	},

	{
		name: "United States of America",
		continent: "North America"
	},

	{
		name: "Canada",
		continent: "North America"
	},

	{
		name: "Ghana",
		continent: "Africa"
	},

	{
		name: "Botswana",
		continent: "Africa"
	},

	{
		name: "Rwanda",
		continent: "Africa"
	},

	{
		name: "Sierra Leone",
		continent: "Africa"
	},

	{
		name: "Zimbabwe",
		continent: "Africa"
	},

	{
		name: "Afghanistan",
		continent: "Asia and Oceania"
	},

	{
		name: "Japan",
		continent: "Asia and Oceania"
	},

	{
		name: "Thailand",
		continent: "Asia and Oceania"
	},

	{
		name: "Mongolia",
		continent: "Asia and Oceania"
	},

	{
		name: "India",
		continent: "Asia and Oceania"
	},

	{
		name: "Belgium",
		continent: "Europe"
	},

	{
		name: "Croatia",
		continent: "Europe"
	},

	{
		name: "Germany",
		continent: "Europe"
	},

	{
		name: "Herzegovina",
		continent: "Europe"
	},
	{
		name: "Switzerland",
		continent: "Europe"
	}
];

var winCount = 0;
var lettersGuessed = [];
var remaining = 9;


function randomCountry() {
	currentCountry = countries[math.floor(math.random() * countries.length)].name;
	keys = currentCountry.split("");

}




document.onkeyup = function(event) {
	userChoice = (event.key).toLowerCase();
};




function restar()  {

}

function winTracker() {
	var wins = document.getElementById("wins");
	winCount++;
	wins.innerHTML = winCount; 
}

function guesses() {
	var guessesRemaining = document.getElementById("guessesRemaining");
	remaining--;
	guessesRemaining.innerHTML = remaining; 
}