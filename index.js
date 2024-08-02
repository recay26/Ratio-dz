const textElement = document.getElementById("id1"); 
const textArray = [ "We work 100% remotly","We Have clients from all over the world", "We have the best graphic designer", "We do print", "We have expert vidéo editors" , "We build prefect websites"]; // Replace with your desired text options

let currentTextIndex = 0;

function changeText() {
  textElement.textContent = textArray[currentTextIndex];
  currentTextIndex = (currentTextIndex + 1) % textArray.length; 
}

setInterval(changeText, 2000); 


