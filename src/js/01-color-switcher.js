let timeoutId = null;

refs = {
    btnStart: document.querySelector('[data-start]'),
    btnStop: document.querySelector('[data-stop]')
}


refs.btnStart.addEventListener('click', onSwitcherStartClick);
refs.btnStop.addEventListener('click', onSwitcherStopClick);

function onSwitcherStartClick() {
    if (refs.btnStop) {
        refs.btnStart.disabled = true;
    }
    timeoutId = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
    },1000)
}

function onSwitcherStopClick() {
    clearInterval(timeoutId);
    refs.btnStart.removeAttribute('disabled');
}




function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}