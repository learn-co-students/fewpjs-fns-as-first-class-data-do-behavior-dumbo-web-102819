/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

function greet(str) {
  let splitStrArray = str.split(':')
  let hour = parseInt(splitStrArray[0])
  if(hour < 12) {
    return "Good Morning"
  } else if(hour > 12 && hour < 17) {
    return "Good Afternoon"
  } else {
    return "Good Evening"
  }
}

function displayMessage(message) {
  let content = document.querySelector('h1#greeting')
  debugger
  content.innerText = `${message}`
}
/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

/* Write your implementation of displayMessage() */
