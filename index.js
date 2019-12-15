/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
let var1 = document.querySelector("#greeting")
function greet(timeString) {
  let timeInt = parseInt(timeString)
  if (timeInt < 12) {
    return "Good Morning"
  }  else if (timeInt >= 12 && timeInt <= 17) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
  
}

/* Write your implementation of displayMessage() */
function displayMessage(stringArg) {
  var1.innerText = stringArg
}