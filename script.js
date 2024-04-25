// const endTime = new Date(2024, 4, 1, 3, 0, 0);
// const countdownElement = document.getElementById('countdown');
// function updateCountdown() {
//   const currentTime = new Date();
//   const difference = endTime - currentTime;
//   const days = Math.floor(difference / (1000 * 60 * 60 * 24));
//   const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
//   const seconds = Math.floor((difference % (1000 * 60)) / 1000);
//   countdownElement.innerHTML = `${days} D ${hours} H ${minutes} M ${seconds} S`;
//   if (difference <= 0) {
//     clearInterval(timer);
//     countdownElement.innerHTML = "Countdown over!";
//   }
// }
// updateCountdown();
// const timer = setInterval(updateCountdown, 1000);

const endTime = new Date(2024, 4, 1, 3, 0, 0);
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

function updateCountdown() {
  const currentTime = new Date();
  const difference = endTime - currentTime;
  if (difference <= 0) {
    clearInterval(timer);
    countdownElement.innerHTML = "Countdown over!";
    return;
  }
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  
  daysElement.textContent = days;
  hoursElement.textContent = hours;
  minutesElement.textContent = minutes;
  secondsElement.textContent = seconds;
}

updateCountdown();
const timer = setInterval(updateCountdown, 1000);
