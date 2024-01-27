// gsap.to(".content h1", {
//   x: -2000,
//   scrollTrigger: {
//     markers: true,
//     start: "top 0",
//     end: "top -100%",
//     trigger: ".div2",
//     scroller: "body",
//     scrub: 0.5,
//     pin: true,
//   },
// });

gsap.to(".div2 h1", {
  x: "-200%",
  scrollTrigger: {
    trigger: ".div2",
    markers: true,
    start: "top 0",
    end: "top -100%",
    pin: true,
    scrub: 2,
  },
});
