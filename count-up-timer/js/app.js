let timerIntervalId
let winTime, min, sec, seconds = 0

const timerEl = document.getElementById('timer')
const winBtn = document.getElementById('win-button')
const winMsg = document.getElementById('message')
const resetBtn = document.getElementById('reset-button')

winBtn.addEventListener('click', handleClickWin)
resetBtn.addEventListener('click', startTimer)

function startTimer() {

}

function handleClickWin() {

}

function tick() {
  seconds++
  renderTime()
}

function renderMessage() {

}

function renderTime() {

}

