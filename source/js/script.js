// modules
import mobileHeight from "./modules/mobile-height-adjust.js";
import slider from "./modules/slider.js";
import menu from "./modules/menu.js";
import footer from "./modules/footer.js";
import chat from "./modules/chat.js";
import result from "./modules/result.js";
import form from "./modules/form.js";
import social from "./modules/social.js";
import FullPageScroll from "./modules/full-page-scroll";
import {createAnimation} from "./modules/letters-animation.js";

// init modules
mobileHeight();
slider();
menu();
footer();
chat();
result();
form();
social();

const fullPageScroll = new FullPageScroll();
fullPageScroll.init();

window.addEventListener(`load`, () => {
  setTimeout(() => {
    document.body.classList.add(`loaded`);
  }, 200);
});

document.body.addEventListener(`screenChanged`, ({detail}) => {
  window.history.pushState(null, ``, `#${detail.screenName}`);
});

const nodes = document.querySelectorAll(`[data-split-letters="true"]`);
nodes.forEach((node) => createAnimation(node, {
  delay: parseFloat(node.dataset.delay, 10) || 0
}));
