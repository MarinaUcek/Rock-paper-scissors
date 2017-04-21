function myFunction() {
	var userInput = prompt("Choose your weapon!\nRock, paper or scissors?").toLowerCase().trim();
	return userInput;
}

var user = myFunction();

if (user == "rock") {
	document.getElementById("user-rock").innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>';
} else if (user == "scissors") {
	document.getElementById("user-scissors").innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>';
} else if (user == "paper") {
	document.getElementById("user-paper").innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>';
} else if (user != "rock" && user != "scissors" && user != "paper") {
	document.getElementById("no-winner").innerHTML = '<i class="fa fa-close" aria-hidden="true"></i><p>Pogrešan unos! Prati uputstva! Klikni na: <strong>Igraj ponovo</strong></p>';	
}

var computer = Math.floor(Math.random() * 3 + 1);

if (computer === 1) {
	computer = "rock";
	document.getElementById("comp-rock").innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>';
} 
else if (computer === 2) {
	computer = "scissors";
	document.getElementById("comp-scissors").innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>';
} else {
	computer = "paper";
	document.getElementById("comp-paper").innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>';
}

if (user == computer) {
	document.getElementById("no-winner").innerHTML = '<i class="fa fa-bars" aria-hidden="true"></i><p>You chose the same! Try again</p>';
} else if ((user == "rock" && computer == "scissors") || (user == "scissors" && computer == "paper") || (user == "paper" && computer == "rock")) {
	document.getElementById("user-wins").innerHTML = '<i class="fa fa-smile-o" aria-hidden="true"></i><p>You won! That\'s just your luck! Let me see you again</p>';
	document.getElementById("comp-wins").innerHTML = '<i class="fa fa-frown-o" aria-hidden="true"></i><p>Buaaaaaaaa... :\'(!</p>';
} else if ((user == "rock" && computer == "paper") || (user == "scissors" && computer == "rock") || (user == "paper" && computer == "scissors")){
	document.getElementById("user-wins").innerHTML = '<i class="fa fa-frown-o" aria-hidden="true"></i><p>Wish you more luck next time!</p>';
	document.getElementById("comp-wins").innerHTML = '<i class="fa fa-smile-o" aria-hidden="true"></i><p>Computer wins! Brutality! Buahahaha</p>';
}
