import vars from '../_vars';
import AccentTypographyBuild from "./accent-typography";
import { disableScroll } from "./disable-scroll";
import { enableScroll } from "./enable-scroll";

disableScroll();
const animationPreloaderTextLine = new AccentTypographyBuild(`.preloader__text`, 500, `active`, `transform`);

const preloaderHide = () => {
  const preloader = document.querySelector('.preloader');

  if (preloader) {
    preloader.classList.add('preloader-animation');
    animationPreloaderTextLine.runAnimation();

    setTimeout(() => {
      preloader.classList.remove('preloader-animation');
      preloader.classList.add('preloader-none');
      enableScroll();
    }, 1800);
    
    setTimeout(() => {
      animationPreloaderTextLine.destroyAnimation();
      vars.bodyEl.classList.add('page-loaded');
    }, 2100);
  }
}

window.addEventListener("load", () => {
  preloaderHide();
});
