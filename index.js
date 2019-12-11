/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(time) {
  const hour = parseInt(time.split(":")[0])

  if (hour < 12) {

    return "Good Morning"
  }
  else if (hour < 17 && hour > 12) {

    return "Good Afternoon"
  }
  else if (hour > 17) {

    return "Good Evening"
  }

}

/* Write your implementation of displayMessage() */
const input = document.getElementById('input');
input.addEventListener('click', function(event) {
  alert('I was clicked!');
});

function displayMessage(greet) {

const input = document.getElementById('greeting');
input.innerText = greet
}