import { Notify } from 'notiflix/build/notiflix-notify-aio';

/* Refs */
const refs = {
  form: document.querySelector('form'),
};

/* Script */

refs.form.addEventListener('submit', startCreatePromise);

function startCreatePromise(e) {
  e.preventDefault();
  const { delay, step, amount } = e.target.elements;
  let firstDelay = Number(delay.value);
  const delayStep = Number(step.value);
  const amountInputUser = Number(amount.value);
  for (let i = 1; i <= amountInputUser; i += 1) {
    createPromise(i, firstDelay)
      .then(onSuccess)
      .catch(onError);
    firstDelay += delayStep;
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
  refs.form.removeEventListener()
}

function onSuccess({ position, delay }) {
  Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
}

function onError({ position, delay }) {
  Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
}
