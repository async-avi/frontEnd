gsap.to(".div2 h1", {
  x: "-200%",
  scrollTrigger: {
    trigger: ".div2",
    start: "top 0",
    end: "top -200%",
    pin: true,
    scrub: 2,
  },
});
