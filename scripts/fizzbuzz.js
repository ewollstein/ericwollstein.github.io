
function loopNum() {
	var msg = ""
	for (let i = 1; i < 126; i++) {
		msg += i + ") Sentinel Stats!" + '<br>';
		if ( i === 125) {
			break;}
		console.log(msg);
		};
	document.getElementById("sentinelStats").innerHTML = msg;
};

function updateWelcome() {
	var firstName = document.getElementById("firstname").value;
	var lastName = document.getElementById("lastname").value;
	var middleInitial = document.getElementById("middleinitial").value;
	var fullName = firstName + middleInitial + lastName;
	var newWelcome = 'Hello, ' + firstName + ' ' + middleInitial + '. ' + lastName + ', Welcome to Sentinel Stats.com!';
	//var newHowManyInput = 'Ok, ' + firstName + ', how many times would you like to run the Fizz Buzz test?';//
	document.getElementById("hello").innerHTML = newWelcome;
//	document.getElementById("howManyInput").innerHTML = newHowManyInput;//
	console.log(newWelcome);
	console.log(firstName);
	console.log(middleInitial);
	console.log(lastName);
	console.log(fullName);
	console.log(firstName + " " + middleInitial + ". " + lastName);
	var child = document.getElementById("welcome");
	var parent = document.getElementById("homeGreeting");
	parent.removeChild(child);
};

function iterateLoop() {
	var fizzBuzzTwo = "";
	var x = 3;
	var y = 5;
	var howMany = document.getElementById("howmany").value;
	for (let i = 1; i <= howMany; i++) {
		if (i % y === 0 && i % x === 0) {
		fizzBuzzTwo += i + ") Fizz Buzz" + '<br>';
		console.log(fizzBuzzTwo);
		} else if (i % y === 0) {
			fizzBuzzTwo += i + ") Buzz" + '<br>';
			console.log(fizzBuzzTwo);
			} else if (i % x === 0) {
				fizzBuzzTwo += i + ") Fizz" + '<br>';
				console.log(fizzBuzzTwo);
				} else if(i % y > 0 && i % x > 0) {
					fizzBuzzTwo += i + ") Sentinel Stats!" + '<br>';
					console.log(fizzBuzzTwo);
					} else if ( i > howMany) {
						break;}		
	};
	document.getElementById("sentinelStats").innerHTML = fizzBuzzTwo;
	console.log(howMany);
};

function iterateLoopOddEven() {
	var oddEven = "";
	var howMany = document.getElementById("howmany").value;
	for (let i = 1; i <= howMany; i++) {
		if (i % 2 === 0) {
			oddEven += i + ") Sentinel Stats: Even" + '<br>';
			console.log("Even");
			} else if (i % 2 > 0) {
				oddEven += i + ") Sentinel Stats: Odd" + '<br>';
				console.log("Odd");
			} else if (i > howMany) {
				break;}
	};
	document.getElementById("sentinelStats").innerHTML = oddEven;
	console.log(oddEven);
};