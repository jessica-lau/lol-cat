var time = new Date().getHours();
var noon = 12;
var evening = 18;
var wakeup = 9;
var lunch = 12;
var nap = 15;
var party = 21;


var updateClock = function () {

	var messageText;
	var timeEventJS = document.getElementById("timeEvent");
	var loldog = document.getElementById("loldog");
	console.log(loldog);
	var image = "./img/dog-chilling.jpg";

	if (time == wakeup) {
		image = "./img/dog-wakeup.jpg";
		messageText = "Time to wake up!";
	}
	else if (time == lunch) {
		image = "./img/dog-lunch.jpg";
		messageText = "Time to eat some yummy lunch.";
	}
	else if (time == nap) {
		image = "./img/dog-nap.jpg";
		messageText = "Let's take a nap.";
	}
	else if (time == party) {
		image = "./img/dog-party.jpg";
		messageText = "I'm going to par-taaay!";
	}
	else if (time < noon) {
		image = "./img/dog-chilling.jpg";
		messageText = "Good morning sunshine!";
	}
	else if (time > evening) {
		image = "./img/dog-chilling.jpg";
		messageText = "Good evening! It's dinner time!";
	}
	else {
		image = "./img/dog-chilling.jpg";
		messageText = "Good afternoon!";
	}

	console.log(messageText);
	console.log(timeEventJS);
	timeEventJS.innerText = messageText;
	loldog.src = image;

	showCurrentTime();
};

var showCurrentTime = function () {
	// display the string on the webpage
	var clock = document.getElementById('clock');

	var currentTime = new Date();

	var hours = currentTime.getHours();
	var minutes = currentTime.getMinutes();
	var seconds = currentTime.getSeconds();
	var meridian = "AM";

	// Set hours 
	if (hours >= noon) {
		meridian = "PM";
	}
	if (hours > noon) {
		hours = hours - 12;
	}

	// Set Minutes
	if (minutes < 10) {
		minutes = "0" + minutes;
	}

	// Set Seconds
	if (seconds < 10) {
		seconds = "0" + seconds;
	}

	// put together the string that displays the time
	var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian;

	clock.innerText = clockTime;

};

var oneSecond = 1000;
updateClock();
setInterval(updateClock, oneSecond);

//add variable to get element from HTML
var partyButton = document.getElementById("partyTimeButton");

// set isPartyTime to false
var isPartyTime = false;

var partyEvent = function () {

	//check isPartyTime
	if (isPartyTime === false) {
		// if isPartyTime is false, change it to true 
		//so we know the button has been clicked
		isPartyTime = true;
		// set time to partyTime so the lolCat clock 
		//image and message update to the partyTime image and message
		time = party;
		partyButton.innerText = "Party Over";
		partyButton.style.backgroundColor = "#fe2e9a";

	} else {
		// if isPartyTime is true, change it to false to end the party
		isPartyTime = false;
		// set time back to the current time
		time = new Date().getHours();
		partyButton.innerText = "Party Time!";
		partyButton.style.backgroundColor = "#ff0000";
	}

};

partyButton.addEventListener("click", partyEvent);


var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var napTimeSelector = document.getElementById("napTimeSelector");

var wakeUpEvent = function () {
	wakeup = wakeUpTimeSelector.value;
};
var lunchTimeEvent = function () {
	lunch = lunchTimeSelector.value;
};
var napTimeEvent = function () {
	nap = napTimeSelector.value;
};

wakeUpTimeSelector.addEventListener("change", wakeUpEvent);
lunchTimeSelector.addEventListener("change", lunchTimeEvent);
napTimeSelector.addEventListener("change", napTimeEvent);