/**
 *
 * @param {Element} node
 * @param {Object} params
 * @param {number} params.delay
 * @param {number} params.interval
 */
export function createAnimation(node, params = {}) {
  const {delay = 0, interval = 0.05} = params;
  const text = node.textContent;
  const words = text.split(` `);

  const content = words.reduce((container, word, wIdx) => {
    const wordContainer = document.createElement(`span`);
    wordContainer.classList.add(`word`);

    const letters = word.split(``);
    const order = Object.keys(letters)
      .map(Number)
      .sort(() => Math.random() - 0.5);

    const wordInterval = delay + (letters.length / 2) * (letters.length - 1) * interval * (wIdx / words.length);

    letters.reduce((wc, letter, lIdx) => {
      const span = document.createElement(`span`);
      span.classList.add(`letter`);
      span.textContent = letter;
      span.style.animationDelay = wordInterval + order[lIdx] * interval + `s`;

      wc.appendChild(span);
      return wc;
    }, wordContainer);

    container.appendChild(wordContainer);
    return container;
  }, document.createDocumentFragment());

  node.innerHTML = ``;
  node.appendChild(content);
}
