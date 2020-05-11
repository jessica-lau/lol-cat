var time = new Date().getHours();
var noon = 12;
var evening = 18;
var wakeup = 9;
var lunch = 12;
var nap = 15;
var party = 21;
var messageText;
var timeEventJS = document.getElementById("timeEvent");

if (time == wakeup) {
	messageText = "Time to wake up!";
	}
	else if (time == lunch) {
	messageText = "Time to eat some yummy lunch.";
	}
	else if (time == nap) {
	messageText = "Let's take a nap.";
	}
	else if (time == party) {
	messageText = "I'm going to par-taaay!";
	}
	else if (time < noon) {
	messageText = "Good morning sunshine!";
	}
	else if (time > evening) {
	messageText = "Good evening! It's dinner time!";
	}
	else {
	messageText = "Good afternoon!";
	}

console.log(messageText);

timeEvent.innerText = messageText;