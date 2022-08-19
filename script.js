const time = document.getElementById("time");

setInterval(() => {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  let dayNight = "AM";

  if (hours > 12) {
    hours = hours - 12;
    dayNight = "PM";
  }

  let hoursDis = hours < 9 ? `0${hours}` : hours;
  let minDis = minutes < 9 ? `0${minutes}` : minutes;
  let secDis = seconds < 9 ? `0${seconds}` : seconds;

  time.textContent = `${hoursDis} : ${minDis} : ${secDis} ${dayNight}`;
});
