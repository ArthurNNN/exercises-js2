function setAlarm() {
  document.body.style.backgroundColor = 'white';
  let h1 = document.querySelector("#timeRemaining");
  let timeLeft = document.querySelector("#alarmSet").value.trim();
  const interval = setInterval(() => {
    h1.textContent = `Time Remaining: ${new Date((timeLeft - 1) * 1000).toISOString().substr(11, 8)}`;
    if (timeLeft === 1) {
      document.body.style.backgroundColor = 'red';
      playAlarm();
      clearInterval(interval);
    }
    timeLeft--;
  }, 1000);
}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
