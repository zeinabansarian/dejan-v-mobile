gsap.registerPlugin(ScrollTrigger)

let filters = document.querySelectorAll(".filters li")

let projectBox = document.querySelectorAll(".projectBox")

projectBox.forEach(element => {
    gsap.from(element.querySelector("img"),{
        scrollTrigger: {
            trigger: element,
            start: "top 50%",
            end: "bottom bottom",
      
            // markers: true,
          },
          scale:1.2,
          duration:0.8,

    })
});