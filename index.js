/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  let timeSplit = time.split(":").map(elem => {
    return parseInt(elem);
  });

  if(timeSplit[0] > 17) {
    return "Good Evening"
  } else if(timeSplit[0] > 12 && timeSplit[0] < 17) {
    return "Good Afternoon"
  } else {
    return "Good Morning"
  }
}

/* Write your implementation of displayMessage() */
function displayMessage(string) {
  let target = document.getElementById("greeting");
  target.innerText = string;
}
