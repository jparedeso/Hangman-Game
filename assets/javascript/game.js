
window.onload="myFunction()";
toastr.options = {
  "closeButton": false,
  "debug": false,
  "newestOnTop": false,
  "progressBar": false,
  "positionClass": "toast-top-full-width",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
};
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

var winCount = 0;
var lettersGuessed = [];
var remaining = 9;
var currentWord = [];
var audioCorrect = $("#myCorrect")[0];
var audioWrong = $("#myWrong")[0];
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
			audioCorrect.play();
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
			audioWrong.play();
			for (var j = 0; j < keys.length; j++) {
				if (lettersGuessed.indexOf(userChoice) === -1) {
					lettersGuessed.push(userChoice);
					document.getElementById("guessesRemaining").innerHTML = (remaining--)-1;
					if (remaining === 3) {
						toastr["warning"]("3 guesses Remaining!!");
						} else if (remaining === 2) {
						toastr["warning"]("2 more guesses!!");
						} else if (remaining === 1) {
						toastr["warning"]("Last guess!!!");
						} else if (remaining === 0) {
						toastr["error"]("You Lost. The word was " + currentCountry);
					}
					n++;
					(document.getElementById("myImage")).src = "assets/images/hangman" + n + ".png";
					document.getElementById("guessedLetters").innerHTML = lettersGuessed;
				}	
			}	
		}

		if ((currentWord.indexOf("_") === -1)) {
			Command: toastr["success"]("You Won!");
		}

		if (remaining === 0 || (currentWord.indexOf("_") === -1)) {
		lettersGuessed = [];
		document.getElementById("guessedLetters").innerHTML = lettersGuessed;
		remaining = 9;
		document.getElementById("guessesRemaining").innerHTML = remaining;
		currentWord = [];
		randomCountry();
		n = 0;
		(document.getElementById("myImage")).src = "assets/images/hangman" + n + ".png";
		}
	}
	
	else {
		Command: toastr["error"]("That is not a valid key.");
	}
	
};

// terminar reset y que no se repitan las letras adivinadas