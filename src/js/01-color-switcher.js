/* basic function */
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
/* refs */
const refs = {
  btnStart: document.querySelector('[data-start]'),
  btnStop: document.querySelector('[data-stop]'),
};
const { btnStart, btnStop } = refs;

/* Script */
btnStop.disabled = true;
let timerId = null;

btnStart.addEventListener('click', onBtnStart);
btnStop.addEventListener('click', onBtnStop);

function onBtnStart() {
  document.body.style.backgroundColor = getRandomHexColor();
  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  btnStart.disabled = true;
  btnStop.disabled = false;
}
function onBtnStop() {
  clearTimeout(timerId);
  btnStart.disabled = false;
  btnStop.disabled = true;
}
