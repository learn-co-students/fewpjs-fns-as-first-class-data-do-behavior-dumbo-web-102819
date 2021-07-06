/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(time) {

 let hour = time.split(':')

 if (parseInt(hour[0], 10 ) < 12)
 {return "Good Morning"}; 
  if ((parseInt(hour[0], 10) >= 12) &&  (parseInt(hour[0], 10) < 17))
  { return "Good Afternoon" }; 
  if (parseInt(hour[0], 10) >= 17 ) 
  { return "Good Evening" };

}

function displayMessage(newGreeting) {
  document.querySelector('#greeting').innerText = newGreeting;
  
}
/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
