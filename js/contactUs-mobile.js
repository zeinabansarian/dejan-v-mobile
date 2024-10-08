gsap.registerPlugin(ScrollTrigger);
let mainSlide = document.querySelectorAll(".mainSlide");
let lastIndex = 0;
let slide1 = document.querySelector(".slide-1");
let slide2 = document.querySelector(".slide-2");
let inner1 = document.querySelector(".inner1");
let gsapFlag = 0;
let countFlag = true;
let openFom= document.querySelector(".openFom")
let formPopUp= document.querySelector(".formPopUp")
let closePopForm= document.querySelector(".closePopForm")
let darkFlag=true;
let darkSections = document.querySelectorAll(".darkSection");
let scrollContainer = document.querySelector(".scrollContainer")
// document.querySelector("footer").classList.add("section10")
const mainSwiper = new Swiper(".mainSwiper", {
  // Optional parameters
  allowTouchMove: false,
  direction: "vertical",
  mousewheel: true,
  allowTouchMove: true,
  speed: 1500,
  effect: "creative",
  creativeEffect: {
    prev: {
      translate: ["200%", 0],
    },
    next: {
      translate: [0, "200%", 0],
    },
  },
  on: {
    
    slideChange: function () {
      setTimeout(() => {
     

        if (this.activeIndex == 0) {
        //   let newH=document.querySelector("header");
        //   newH.classList.remove("dark");
        //   newH.classList.remove("darkLogo");
        } else {
        //   let newH=document.querySelector("header");
        //   newH.classList.add("dark");
        //   newH.classList.add("darkLogo");


        mainSwiper.allowTouchMove=false

        }
      }, 600);

      
      setTimeout(() => {
        if (darkFlag) {
          darkSections.forEach((element) => {
            gsap.to(element, {
              scrollTrigger: {
                trigger: element,
                end: "top -50%",
                start: "top 50%",
                scroller: ".scrollContainer",
                scrub: true,
                // markers: true,
                onEnter: () => {
                //   let newH=document.querySelector("header");
                //   newH.classList.remove("dark");
                //   newH.classList.remove("darkLogo");
                },
                onLeave: () => {
                //   let newH=document.querySelector("header");
                //   newH.classList.add("dark");
                //   newH.classList.add("darkLogo");
                },
                onEnterBack: () => {
                //   let newH=document.querySelector("header");
                //   newH.classList.remove("dark");
                //   newH.classList.remove("darkLogo");
                },
                onLeaveBack: () => {
                //   let newH=document.querySelector("header");
                //   newH.classList.add("dark");
                //   newH.classList.add("darkLogo");
                },
              },
            });
          });
          darkFlag=false
        }
      }, 1000);
      setTimeout(() => {
        if (countFlag) {
          const counters = document.querySelectorAll(".counter span");

          counters.forEach((counter) => {
            counter.innerText = "0";
            const updateCounter = () => {
              const target = +counter.getAttribute("data-target");
              const count = +counter.innerText;
              const increment = target / 200;
              if (count < target) {
                counter.innerText = `${Math.ceil(count + increment)}`;
                setTimeout(updateCounter, 1);
              } else counter.innerText = target;
            };
            updateCounter();
          });

          countFlag = false;
        }
      }, 1500);
   
    },
  },
});

mainSwiper.on("slideChangeTransitionStart", function (params) {
  if (mainSwiper.activeIndex < lastIndex) {
    console.log("up");
    slide1.classList.remove("slideUp");

    setTimeout(() => {
      slide1.classList.remove("firsIndex");
      slide2.classList.remove("secondDelay");
    }, 1800);
    lastIndex = mainSwiper.activeIndex;
  } else {
    console.log("down");
    lastIndex = mainSwiper.activeIndex;
    setTimeout(() => {
      slide1.classList.add("slideUp");
      slide2.classList.add("secondDelay");
      setTimeout(() => {
        slide1.classList.add("firsIndex");
      }, 1000);
    }, 1500);
  }
});

const lenis = new Lenis({
  wrapper: document.getElementById("scrollContainer"),
  content: document.querySelector(".innerSlide"),
  duration: 2,
});

lenis.on("scroll", (e) => {


});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

slide2.addEventListener("scroll", function (params) {
  let scrollTInner = $(".scrollContainer").scrollTop();
    
  if (scrollTInner > 10) {
    setTimeout(() => {
      mainSwiper.mousewheel.disable();
      mainSwiper.allowTouchMove=false
    }, 200);
  } else {
    setTimeout(() => {
      mainSwiper.mousewheel.enable();
      mainSwiper.allowTouchMove =true
    }, 200);
  }
});



scrollContainer.addEventListener('swiped', function(e) {
    console.log(e.detail.dir); // swipe direction
    let scrollTInner = $(".scrollContainer").scrollTop();
    if (e.detail.dir=="down"&&scrollTInner==0) {
      setTimeout(() => {
        
        mainSwiper.slideTo(0)    
      }, 200);
    }
  });


  let closeM = document.querySelector('.MapPOP .Closemap')
let mapBTN = document.querySelector(' .Pointer ')
let mapPop = document.querySelector('.MapPOP')
mapBTN.addEventListener('click',()=>{
  mapPop.classList.toggle('open')
})
closeM.addEventListener('click',()=>{
  mapPop.classList.toggle('open')
})






openFom.addEventListener("click" ,function (params) {
    formPopUp.classList.add("activePop")
  })

  closePopForm.addEventListener("click" ,function (params) {
    formPopUp.classList.remove("activePop")
  })
