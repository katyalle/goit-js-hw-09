const bodyEl = document.querySelector('body');
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

startBtn.addEventListener('click', onStart);

let onInterval = false;
stopBtn.disabled = true;

function onStart() {
    const timerId = setInterval(() => {
        bodyEl.style.backgroundColor = getRandomHexColor();
        onInterval = true;
        console.log('I am ON');

        if (onInterval) {
            startBtn.disabled = true;
            stopBtn.disabled = false;
        }

        stopBtn.addEventListener('click', onStop);
        function onStop() {
            clearInterval(timerId);
            onInterval = false;
            startBtn.disabled = false;
            stopBtn.disabled = true;
        }
    }, 1000);
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
