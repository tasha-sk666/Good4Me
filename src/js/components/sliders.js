import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { isTablet } from './check-viewport';
Swiper.use([Navigation, Pagination, Autoplay]);

const swiperAbout = new Swiper(".about__swiper", {
  navigation: {
    nextEl: '.about-swiper-btn-next',
    prevEl: '.about-swiper-btn-prev',
  },
  pagination: {
    el: '.about-swiper-pagination',
    type: 'bullets',
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
  }
});

const swiperReviews = new Swiper(".reviews__swiper", {
  pagination: {
    el: '.reviews-swiper-pagination',
    type: 'bullets',
  },
  breakpoints: {
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
  }
});

const swiperGallery = new Swiper(".gallery__swiper", {
  spaceBetween: 42,
  slidesPerView: 'auto',
  loop: true,
  speed: 5000,
  autoplay: {
    delay: '0.1',
  },
});

const gallerySection = document.querySelector('.gallery');
let observer;

const handleIntersection = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      swiperGallery.autoplay.start();
      entry.target.classList.add('js-visible');
      observer.unobserve(gallerySection);
      observer.observe(gallerySection);
    } else {
      swiperGallery.autoplay.stop();
      entry.target.classList.remove('js-visible');
    }
  });
}

observer = new IntersectionObserver(handleIntersection, {
  threshold: 0.5,
});

observer.observe(gallerySection);

const initSwiperNews = () => {
  let swiperNews;

  if (isTablet()) {
    swiperNews = new Swiper('.news__swiper', {
      slidesPerView: 'auto',
      spaceBetween: 44,
    });
  } else {
    if (swiperNews) {
      swiperNews.destroy();
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initSwiperNews();
});

window.addEventListener("resize", () => {
  initSwiperNews();
});
