
var randomarr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

var wins = 0;
var losses = 0;
var guess = [];
var attempts = 12;

document.onkeyup = function (event) {

	var userGuess = event.key;

	var computerGuess = randomarr[Math.floor(Math.random() * randomarr.length)];

	var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];


	if (options.indexOf(userGuess) > -1) {

		if (userGuess === computerGuess) {
			wins++;
			attempts = 12;
			guess = [];
			alert("You're a mind reader! You Win!");
		}

		if (userGuess != computerGuess) {
			attempts--;
			guess.push(userGuess);
		}

		if (attempts === 0) {
			attempts = 12;
			losses++;
			guess = [];
			alert("You Lose! Click Ok to try again");


		}

		var html =
			"<h1> Psychic Game </h1>" +
			"<p>Rules: Choose a letter on your keyboard to guess one letter from the alphabet.</p>" +
          	"<p>Wins: " + wins + "</p>" +
			"<p>Losses: " + losses + "</p>" +
			"<p>Guesses Left: " + attempts + "</p>" +
			"<p>Your Guesses so far: " + guess.join(", ") + "</p>";

		document.querySelector("#textcontainer").innerHTML = html;


	}
};
