import {animateDuration} from "../utils/animation";

export default () => {
  const container = document.getElementById(`game-counter`);
  const [minutes, seconds] = container.querySelectorAll(`span`);
  let timer = null;

  document.body.addEventListener(`screenChanged`, ({detail}) => {
    if (detail.screenName === `game`) {
      let remaining = 5 * 60 * 1000;

      timer = animateDuration((elapsed) => {
        const time = new Date(Math.floor(remaining - elapsed));
        minutes.textContent = time.getMinutes().toString().padStart(2, `0`);
        seconds.textContent = time.getSeconds().toString().padStart(2, `0`);
      }, remaining);
    } else if (timer) {
      timer.cancel();
    }
  });
};
