
// Learned that query selector gets elements with rules
// Tried using getElementsByClassName, could not access .style
const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');

function getDate() {
  const fullTime = new Date();

  const hours = fullTime.getHours();
  const minutes = fullTime.getMinutes();
  const seconds = fullTime.getSeconds();

  const degreesForHours = ((hours / 30) * 360) - 90;
  const degreesForMinutes = ((minutes / 60) * 360) + 90;
  const degreesForSeconds = ((seconds / 60) * 360) + 90;

  hourHand.style.transform = `rotate(${degreesForHours}deg)`;
  minuteHand.style.transform = `rotate(${degreesForMinutes}deg)`;
  secondHand.style.transform = `rotate(${degreesForSeconds}deg)`;
}


setInterval(getDate, 1000);
