/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(string) { 
  let intString = parseInt(string, 10)
  if (intString < 12 ) {
    return "Good Morning"
  } else if (intString > 12 && intString < 17) {
    return "Good Afternoon"
  } else {
    return "Good Evening"
  }
}
/* Write your implementation of displayMessage() */

function displayMessage(string) {
  let myId = document.querySelector("#greeting")
  myId.innerText = string
}