window.addEventListener("load", () => {
  gsap.from(".hero__content > *", {
    x: '-50vh',
    opacity: 0,
    duration: 2,
    stagger: 0.3,
    ease: "power3.out",

    
  });
});

gsap.fromTo(".hero",  {
  opacity: 0,
  backgroundPosition: "100vh",
  
  
}, {
  opacity: 1,
  backgroundPosition: "0",
  duration: 3,
  ease: "power3.out"
})


