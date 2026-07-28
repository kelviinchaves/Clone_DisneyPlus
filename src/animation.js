console.log("GSAP carregou");

const gsap = window.gsap;

window.addEventListener("load", () => {

  gsap.from(".hero__content > *", {
    x: "-50vh",
    opacity: 0,
    duration: 2,
    stagger: 0.2,
    ease: "power3.out",
  });


  gsap.fromTo(".hero", {
    opacity: 0,
    backgroundPosition: "100% 0",
  }, {
    opacity: 1,
    backgroundPosition: "0% 0",
    duration: 5,
    ease: "power3.out"
  });

});