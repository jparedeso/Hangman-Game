
var userKey = ["m", "n", "b", "v", "c", "x", "z", "a", "s", "d", "f", "g", "h", "j", "k", "l", "p", "o", "i", "u", "y", "t", "r", "e", "w", "q", " "];

var countries = [
	{
		name: "argentina",
		continent: "South America"
	},
	
	{
		name: "brazil",
		continent: "South America"
	},
	
	{
		name: "peru",
		continent: "South America"
	},

	{
		name: "bolivia",
		continent: "South America"
	},

	{
		name: "colombia",
		continent: "South America"
	},

	{
		name: "panama",
		continent: "Central America"
	},

	{
		name: "costa rica",
		continent: "Central America"
	},

	{
		name: "nicaragua",
		continent: "Central America"
	},

	{
		name: "el salvador",
		continent: "Central America"
	},

	{
		name: "guatemala",
		continent: "Central America"
	},

	{
		name: "united states of america",
		continent: "North America"
	},

	{
		name: "canada",
		continent: "North America"
	},

	{
		name: "ghana",
		continent: "Africa"
	},

	{
		name: "botswana",
		continent: "Africa"
	},

	{
		name: "rwanda",
		continent: "Africa"
	},

	{
		name: "sierra leone",
		continent: "Africa"
	},

	{
		name: "zimbabwe",
		continent: "Africa"
	},

	{
		name: "afghanistan",
		continent: "Asia and Oceania"
	},

	{
		name: "japan",
		continent: "Asia and Oceania"
	},

	{
		name: "thailand",
		continent: "Asia and Oceania"
	},

	{
		name: "mongolia",
		continent: "Asia and Oceania"
	},

	{
		name: "india",
		continent: "Asia and Oceania"
	},

	{
		name: "belgium",
		continent: "Europe"
	},

	{
		name: "croatia",
		continent: "Europe"
	},

	{
		name: "germany",
		continent: "Europe"
	},

	{
		name: "herzegovina",
		continent: "Europe"
	},
	{
		name: "switzerland",
		continent: "Europe"
	}
];

var winCount = -0;
var lettersGuessed = [];
var remaining = 9;
var currentWord = [];
n = 0;

function randomCountry() {
	currentCountry = countries[Math.floor(Math.random() * countries.length)].name;
	keys = currentCountry.split("");
	
	for (var i = 0; i < keys.length; i++) {
		currentWord.push("_");
	}
	document.getElementById("current").innerHTML = currentWord.join(" ");
	console.log(currentWord);
}

randomCountry();
document.getElementById("wins").innerHTML = winCount;
document.getElementById("guessesRemaining").innerHTML = remaining;
document.onkeyup = function(event) {
	userChoice = (event.key).toLowerCase();
	if (userKey.indexOf(userChoice) !== -1) {

		if (keys.indexOf(userChoice) >= 0) {
			
			for (var i = 0; i < keys.length; i++) {
				if (userChoice === keys[i]) {
					currentWord[i] = userChoice; 
				}
			document.getElementById("current").innerHTML = currentWord.join(" ");
			if (currentWord.indexOf("_") === -1) {
				winCount++;
				document.getElementById("wins").innerHTML = winCount;
			}
			}	

		} else {
			for (var j = 0; j < keys.length; j++) {
				if (lettersGuessed.indexOf(userChoice) === -1) {
					lettersGuessed.push(userChoice);
					document.getElementById("guessesRemaining").innerHTML = (remaining--)-1;
					if (remaining === 3) {
						alert("3 guesses remaining!");
						} else if (remaining === 2) {
						alert("2 more chances!!");
						} else if (remaining === 1) {
						alert("Last chance!!!");
						} else if (remaining === 0) {
						alert ("You lost. The word was " + currentCountry + ".");
					}
					n++;
					(document.getElementById("myImage")).src = "assets/images/hangman" + n + ".png";
					document.getElementById("guessedLetters").innerHTML = lettersGuessed;
				}	
			}	
		}

		if (remaining === 0 || (currentWord.indexOf("_") === -1)) {
		randomCountry();
		lettersGuessed = [];
		remaining = 9;
		currentWord = [];
		}
	}
	
	else {
		alert("That is not a valid key");
	}
	
};

// terminar reset y que no se repitan las letras adivinadas