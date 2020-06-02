import {animateDuration} from "../utils/animation";

function limitFPS(fn, fps = 60) {
  const fpsInterval = 1000 / fps;
  let then = Date.now();

  return (...args) => {
    const now = Date.now();
    const elapsed = now - then;

    if (elapsed > fpsInterval) {
      then = now - (elapsed % fpsInterval);

      fn(...args);
    }
  };
}

function randomBetween(min = 0, max = 1) {
  return Math.random() * (max - min) + min;
}

function animateCounter(node, values, delay, duration) {
  let i = 0;

  node.textContent = values[i++];
  setTimeout(() => {
    animateDuration(
        limitFPS(() => {
          if (i < values.length) {
            node.textContent = values[i++];
          }
        }, FPS),
        duration
    );
  }, delay);
}

const FPS = 12;
export default () => {
  const prize2 = document.getElementById(`prize2-count`);
  const prize2Delay = parseFloat(prize2.dataset.delay) * 1000;
  const prize2Values = [1, 2, 3, 4, 5, 6, 7];
  const prize2Duration = (1000 / FPS) * prize2Values.length;
  animateCounter(prize2, prize2Values, prize2Delay, prize2Duration);

  const prize3 = document.getElementById(`prize3-count`);
  const prize3Delay = parseFloat(prize3.dataset.delay) * 1000;
  const prize3Values = [
    11,
    ...Array.from({length: 5}).map(() => Math.floor(randomBetween(12, 800))),
    900,
  ].sort((a, b) => a - b);
  const prize3Duration = (1000 / FPS) * prize3Values.length;
  animateCounter(prize3, prize3Values, prize3Delay, prize3Duration);
};
