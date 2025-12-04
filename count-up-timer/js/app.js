let timerIntervalId
let winTime, min, sec, seconds = 0

const timerEl = document.getElementById('timer')
const winBtn = document.getElementById('win-button')
const winMsg = document.getElementById('message')
const resetBtn = document.getElementById('reset-button')

winBtn.addEventListener('click', handleClickWin)
resetBtn.addEventListener('click', startTimer)

function handleClickWin() {
  confetti.start(500)
  let message
  winTime = seconds
  if (min < 1) { message = `YAY! You won in ${sec} seconds!`}
  else if (min < 2) { message = `YAY! You won in ${min} minute and ${sec} seconds!`}
  else { message = `YAY! You won in ${min} minutes and ${sec} seconds!`}
  renderMessage(message)
}

function startTimer() {
  if (timerIntervalId) {
    seconds = 0
    clearInterval(timerIntervalId)
    renderMessage('PRESS THE BUTTON TO WIN!!!')
  }
  renderTime()
  timerIntervalId = setInterval(tick, 1000)
}

function tick() {
  seconds++
  renderTime()
}

function renderMessage(message) {
  winMsg.textContent = message
}

function renderTime() {
  min = Math.floor(seconds / 60)
  sec = seconds % 60
  if (sec < 10) { 
    timerEl.textContent = `${min}:0${sec}`
  } else {
    timerEl.textContent = `${min}:${sec}`
  }
}

