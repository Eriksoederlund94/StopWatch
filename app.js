window.onload = function () {

  let seconds = 00;
  let tens = 00;
  const appendSeconds = document.getElementById("seconds"); 
  const appendTens = document.getElementById("tens");
  const startButton = document.getElementById("start-button");
  const stopButton = document.getElementById("stop-button");
  const resetButton = document.getElementById("reset-button");
  let interval ; 

  startButton.onclick = function () {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
  }

  stopButton.onclick = function () {
    clearInterval(interval);
  }

  resetButton.onclick = function () {
    clearInterval(interval);
    tens = "00";
    seconds = "00";
    appendSeconds.innerHTML = seconds;
    appendTens.innerHTML = tens;
  }

  function startTimer () {
    tens++;

    if (tens < 9) {
      appendTens.innerHTML = "0" + tens;
    }

    if (tens > 9) {
      appendTens.innerHTML = tens;
    }

    if (tens > 99) {
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }

    if (seconds > 9) {
      appendSeconds.innerHTML = seconds;
    }
  }
}
