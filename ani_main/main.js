const hero = document.querySelector(".hero");
// const slider = document.querySelector(".slider");
const logo = document.querySelector("#logo");

const tl = new TimelineMax();

tl.fromTo(hero, 1.2, { width: "0%" }, { width: "150%", ease: Power2.easeInOut })
  //   .fromTo(
  //     slider,
  //     1.2,
  //     { x: "-100%" },
  //     { x: "0%", ease: Power2.easeInOut },
  //     "-=1.2"
  //   )
  .fromTo(logo, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-=0.5");
