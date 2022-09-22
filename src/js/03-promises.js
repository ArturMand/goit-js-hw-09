import { Notify } from 'notiflix/build/notiflix-notify-aio';

/* Refs */
const refs = {
  delay: document.querySelector('input[name="delay"]'),
  step: document.querySelector('input[name="step"]'),
  amount: document.querySelector('input[name="amount"]'),
  btnCreatePromise: document.querySelector('button[type="submit"]'),
};

/* Variables */
const { delay, step, amount, btnCreatePromise } = refs;

/* Script */

btnCreatePromise.addEventListener('click', e => {
  startCreatePromise(e);
});

function startCreatePromise(e) {
  e.preventDefault();
  const firstDelay = Number(delay.value);
  const delayStep = Number(step.value);
  const amountInputUser = amount.value;
  for (let i = 0; i < amountInputUser; i += 1) {
    createPromise(1 + i, firstDelay + i * delayStep)
      .then(({ position, delay }) => onSuccess({ position, delay }))
      .catch(({ position, delay }) => onError({ position, delay }));
  }
}

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    getPromiseFromBackend(position, delay, resolve, reject);
  });
  return promise;
}

function getPromiseFromBackend(position, delay, resolve, reject) {
  setTimeout(() => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      resolve({ position, delay });
    } else {
      reject({ position, delay });
    }
  }, delay);
}

function onSuccess({ position, delay }) {
  Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
}

function onError({ position, delay }) {
  Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
}
