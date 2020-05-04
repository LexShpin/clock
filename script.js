// Vars
const secondHand = document.querySelector(".second-hand");
const minutesHand = document.querySelector(".min-hand");
const hoursHand = document.querySelector(".hour-hand");

// Functions
function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondDegrees = (seconds / 60) * 360 + 90;
  const minutes = now.getMinutes();
  const minutesDegrees = (minutes / 60) * 360 + 90;
  const hours = now.getHours();
  const hoursDegrees = (hours / 12) * 360 + 90;

  secondHand.style = `transform: rotate(${secondDegrees}deg)`;
  minutesHand.style = `transform: rotate(${minutesDegrees}deg)`;
  hoursHand.style = `transform: rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);
