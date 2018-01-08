
var userKey = ["m", "n", "b", "v", "c", "x", "z", "a", "s", "d", "f", "g", "h", "j", "k", "l", "p", "o", "i", "u", "y", "t", "r", "e", "w", "q", " "];

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

var winCount = -1;
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


function winTracker() {
	var wins = document.getElementById("wins");
	winCount++;
	wins.innerHTML = winCount; 
}

document.onkeyup = function(event) {

	userChoice = (event.key).toLowerCase();
	if (userKey.indexOf(userChoice) !== -1) {

		if (keys.indexOf(userChoice) >= 0) {
			
			for (var i = 0; i < keys.length; i++) {
				if (userChoice === keys[i]) {
					currentWord[i] = userChoice; 
				}
			document.getElementById("current").innerHTML = currentWord.join(" ");
			}	

		} else {
			lettersGuessed.push(userChoice);
			document.getElementById("guessesRemaining").innerHTML = remaining--;
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
	else {
		alert("That is not a valid key");
	}
	
};

randomCountry();
winTracker();

// create single function, work on key event


lettersGuessed.push(userChoice);
			document.getElementById("guessesRemaining").innerHTML = remaining--;
			if (remaining === 3) {
				alert("3 guesses remaining!");
				} else if (remaining === 2) {
				alert("2 more chances!!");
				} else if (remaining === 1) {
				alert("Last chance!!!");
				} else if (remaining === 0) {
				alert ("You lost.");
			}
			n++;
			(document.getElementById("myImage")).src = "assets/images/hangman" + n + ".png";
			document.getElementById("guessedLetters").innerHTML = lettersGuessed;