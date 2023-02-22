export function setupCounter(element) {
  const setCounter = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = '#' + randomColor;
  }
  element.addEventListener('click', setCounter)
}
