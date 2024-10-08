let lastIndex = 0;
let slide01 = document.querySelector(".slide01");
let slide02 = document.querySelector(".slide02");
let inner1 = document.querySelector(".inner1");
let mainSection = document.querySelectorAll(".mainSection");
var mainSwiper = new Swiper(".mainSwiper", {
  direction: "vertical",
  speed: 1500,
  allowTouchMove: true,
  mousewheel: {
    invert: false,
  },
  grabCursor: false,
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
      if (this.activeIndex == 0) {
        document.querySelector("header").classList.remove("blackHeader")
      } else {
        document.querySelector("header").classList.add("blackHeader")
      }
    },
  },
});
function activeHeightSet() {
  var activeHt = $(".swiper-slide-active .mainImg").height();

  eventActiveHt(activeHt);

  scrollUp();
}

function eventActiveHt(activeHt) {
  if (mainSwiper.activeIndex == 1) {
    // mainSwiper.mousewheel.disable();
    mainSwiper.allowTouchMove = false;
  }

  if (mainSwiper.activeIndex < lastIndex) {
    console.log("up");
    // UP
    $(".slide01").removeClass("slideUp");
    slide01.classList.remove("slideUp");
    setTimeout(() => {
      slide01.classList.remove("firstIndex");
      slide02.classList.remove("secondDelay");
      inner1.classList.remove("innerUp");
    }, 1700);

    lastIndex = mainSwiper.activeIndex;
  } else {
    //  DOWN
    setTimeout(() => {
      slide01.classList.add("slideUp");
      slide02.classList.add("secondDelay");
      inner1.classList.add("innerUp");
      setTimeout(() => {
        slide01.classList.add("firstIndex");
      }, 1000);
    }, 1500);
    lastIndex = mainSwiper.activeIndex;
  }
  console.log();
  $(".swiper-container").stop(true).animate(
    { duration: 1000 },

    1000
  );
}

function scrollUp() {
  $("body, html").stop(true).animate(
    {
      scrollTop: "0",
      duration: 1000,
    },

    1000
  );
}

mainSwiper.on("slideChangeTransitionStart", activeHeightSet);

var Scrollbar = window.Scrollbar;

var mainscrollbarOptions = {
  dumping: 0.08,
};

const scrollbar = Scrollbar.init(
  document.querySelector(".scrollContainer"),
  mainscrollbarOptions
);
ScrollTrigger.scrollerProxy(".scrollContainer ", {
  scrollTop(value) {
    if (arguments.length) {
      scrollbar.update();
      scrollbar.scrollTop = value;
    }
    return scrollbar.scrollTop;
  },
});
const scroller = document.querySelector(".scrollContainer");
let scrollBar;

let space = document.querySelectorAll(".space");

scrollbar.addListener(({ offset }) => {
  ScrollTrigger.update;
  scrollbar.update();

  if ($(window).width() >= 576) {
    ScrollTrigger.defaults({ scroller: scroller });
  }
  if (offset.y > 10) {
    setTimeout(() => {
      mainSwiper.mousewheel.disable();
      mainSwiper.allowTouchMove = false;
    }, 200);
  } else {
    setTimeout(() => {
      mainSwiper.mousewheel.enable();
      mainSwiper.allowTouchMove = true;
    }, 200);
  }
});

const swiper = new Swiper(".historySlider", {
  // Optional parameters
  centeredSlides: true,
  speed: 500,
  // If we need pagination
  pagination: {
    el: ".historyPagination",
    clickable:true
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  on: {
    init: function (swiper) {
      let activeI = this.activeIndex;
      let slideL = this.slides.length;
      if (activeI < 10) {
        activeI = `0${activeI + 1}`;
      }
      if (slideL < 10) {
        slideL = `0${slideL}`;
      }
      console.log(activeI);
      $(`.historyDatas .fraction span:first-child`).text(activeI);
      $(`.historyDatas .fraction span:last-child`).text(slideL);
    },
    slideChange: function () {
      let activeI = this.activeIndex;
      if (activeI < 10) {
        activeI = `0${activeI + 1}`;
      }
      $(`.historyDatas .fraction span:first-child`).text(activeI);
    },
  },
});

