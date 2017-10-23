const panels = document.querySelectorAll('.panel');
function toggleOpen() {
  this.classList.toggle('open');
}
function toggleActive(evt) {
  if (evt.propertyName.includes('flex')) this.classList.toggle('open-active');
}
panels.forEach((panel) => {
  panel.addEventListener('click', toggleOpen);
  panel.addEventListener('transitionend', toggleActive);
});
