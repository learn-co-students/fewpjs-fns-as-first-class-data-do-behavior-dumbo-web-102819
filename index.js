/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function displayMessage(text){
	document.getElementById("greeting").innerText= text;
}

function greet(timeString){
	let time = timeString.split(":");
	const hour = time[0];

	if (hour < 12)
	{
		return "Good Morning";
	}
	else if (hour < 17)
	{
		return "Good Afternoon";
	}
	else
	{
		return "Good Evening";
	}
}