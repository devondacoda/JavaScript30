document.addEventListener('DOMContentLoaded', function() {
  function pauseAndResetLoops(item, audioElement) {
    if (item.classList.contains('loop')) {
      audioElement.pause();
      item.classList.remove('loop');
    } else {audioElement.currentTime = 0;
      audioElement.play();
      item.classList.add('playing');
      item.classList.add('loop');
    }
  }

  function playWhenPressed(event) {
    const audio = document.querySelector(`audio[data-key='${event.keyCode}']`);
    const key = document.querySelector(`.key[data-key='${event.keyCode}']`);
    if (!audio) return;
    if (key.id.length > 1) {
      pauseAndResetLoops(key, audio);
    } else {
      audio.currentTime = 0;
      audio.play();
      key.classList.add('playing');
    }
  }

  function playWhenClicked(event) {
    const target = document.getElementById(event.target.parentElement.id);
    const targetKey = target.getAttribute('data-key');
    const audio = document.querySelector(`audio[data-key='${targetKey}']`);
    const key = document.querySelector(`.key[data-key='${targetKey}']`);
    if (!audio) return;
    if (target.id.length > 1) {
      pauseAndResetLoops(key, audio);
    } else {
      audio.currentTime = 0;
      audio.play();
      key.classList.add('playing');
    }
  }

  function removeTransition(event) {
    if (event.propertyName !== 'transform') return;
    this.classList.remove('playing');
  }

  const keysDiv = document.getElementsByClassName('keys');
  const loopsDiv = document.getElementsByClassName('loops');

  keysDiv[0].addEventListener('click', playWhenClicked);
  loopsDiv[0].addEventListener('click', playWhenClicked);
  window.addEventListener('keydown', playWhenPressed);

  const keys = document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
});
