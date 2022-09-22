import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

/* basic function */
function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}
/* refs */
const refs = {
  inputValidDate: document.querySelector('#datetime-picker'),
  timerHtml: document.querySelector('.timer'),
  btnStart: document.querySelector('button[data-start]'),
  second: document.querySelector('span[data-seconds]'),
  minute: document.querySelector('span[data-minutes]'),
  hour: document.querySelector('span[data-hours]'),
  day: document.querySelector('span[data-days]'),
};
/* Variables */
const { inputValidDate, timerHtml, btnStart, day, hour, minute, second } = refs;
const flatpickrSetting = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onChange(selectedDates) {
    const { defaultDate } = this.config;
    if (selectedDates[0] < defaultDate) {
      Notify.failure('Please choose a date in the future');
      btnStart.disabled = true;
    } else {
      Notify.success('Date is correct');
      btnStart.disabled = false;
    }
  },
};
/* Script */
btnStart.disabled = true;
let timerId = null;

flatpickr(inputValidDate, flatpickrSetting);

btnStart.addEventListener('click', startTimer);

function startTimer() {
  timerId = setInterval(() => {
    const timerData = new Date(inputValidDate.value) - new Date();

    btnStart.disabled = true;

    if (timerData >= 0) {
      const timeObject = convertMs(timerData);

      day.textContent = ` ${addLeadingZero(timeObject.days)} : `;
      hour.textContent = `${addLeadingZero(timeObject.hours)} :`;
      minute.textContent = `${addLeadingZero(timeObject.minutes)} :`;
      second.textContent = addLeadingZero(timeObject.seconds);

      if (timerData <= 10000) {
        timerHtml.style.color = 'red';
      }
    } else {
      Notify.success('Countdown finished');
      timerHtml.style.color = 'black';
      clearInterval(timerId);
    }
  }, 1000);
}
