/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/
 const greet = (string) => { 
  let hour = string.split(":")[0]
   if (hour < 12){return "Good Morning"}
   if (hour < 17){return "Good Afternoon"}
   else {return "Good Evening"}
}


/* Write your implementation of displayMessage() */
 const displayMessage = (string) => {
     document.getElementById("greeting").innerText = string;    
}