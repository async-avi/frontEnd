let tl = gsap.timeline();

tl.from("nav h3", {
  y: -50,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
});
tl.from("footer", {
  y: 50,
  opacity: 0,
  duration: 0.5,
  stagger: 0.3,
});

tl.from("main h2", {
  x: -500,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
});

tl.from("img", {
  x: 500,
  opacity: 0,
  rotate: 180,
  stagger: 0.3,
});
