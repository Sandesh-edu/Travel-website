// starting of header and footer section JS file
const bars = document.querySelector(".bar"),
    close = document.querySelector(".close"),
    menu = document.querySelector(".menu");

bars.addEventListener("click", () => {
    menu.classList.add("active");
    gsap.from(".menu", {
        opacity: 0,
        duration: .3
    })

    gsap.from(".menu ul", {
        opacity: 0,
        x: -300
    })
});

close.addEventListener("click", () => {
    menu.classList.remove("active")
});

function animateContent(selector) {
    selector.forEach((selector) => {
        gsap.to(selector, {
            y: 30,
            duration: 0.1,
            opacity: 1,
            delay: 0.2,
            stagger: 0.2,
            ease: "power2.out",
        });
    });
}

bars.addEventListener("click", () => {
    console.log("bars clicked");
    menu.classList.add("active");
    gsap.from(".menu", {
        opacity: 0,
        duration: .3
    })

    gsap.from(".menu ul", {
        opacity: 0,
        x: -300
    })
});

animateContent([".home .content h5", ".home .content h1", ".home .content p", ".home .content .search"]);
// end of header and footer section JS file

// starting of destination section JS file
const destinations = document.querySelector(".destinations");
const destinationsBoxes = document.querySelectorAll(".destinations .gallery .box");

galleryAnimation(destinations, destinationsBoxes);

function galleryAnimation(triggerSelector, boxSelectors) {
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: triggerSelector,
      start: "top 50%",
      end: "top 100%",
      scrub: 3,
    },
  });

  boxSelectors.forEach((box) => {
    const direction = Math.random() < 0.5 ? -10 : 10;
    const xOffset = Math.random() * 500 * direction;

    timeline.fromTo(
      box,
      { x: xOffset, opacity: 0 },
      { x: 0, opacity: 1, duration: 1 }
    );
  });
}
// ending of destination section JS file