export default () => {
  let showResultEls = document.querySelectorAll(`.js-show-result`);
  let results = Array.from(document.querySelectorAll(`.screen--result`));

  if (results.length) {
    showResultEls.forEach((result) => {
      result.addEventListener(`click`, () => {
        let targetId = result.getAttribute(`data-target`);

        results.forEach((el) => {
          el.classList.remove(`screen--show`);
          el.classList.add(`screen--hidden`);
        });

        let targetEl = results.find((el) => el.getAttribute(`id`) === targetId);

        targetEl.classList.add(`screen--show`);
        targetEl.classList.remove(`screen--hidden`);

        targetEl.querySelectorAll(`.result__title path`).forEach((element) => {
          const length = element.getTotalLength();
          element.setAttribute(`stroke-dashoffset`, length);
          element.setAttribute(`stroke-dasharray`, length);
        });

        targetEl.querySelector(`.result__title path animate`).beginElement();
      });
    });

    let playBtn = document.querySelector(`.js-play`);
    if (playBtn) {
      playBtn.addEventListener(`click`, function () {
        results.forEach((el) => {
          el.classList.remove(`screen--show`);
          el.classList.add(`screen--hidden`);
        });
        document.getElementById(`messages`).innerHTML = ``;
        document.getElementById(`message-field`).focus();
      });
    }
  }
};
