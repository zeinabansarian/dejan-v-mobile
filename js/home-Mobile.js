
$('.Home-mobile').imagesLoaded( {

},  function() {
    $(document).ready(function() {
             
const lenis = new Lenis();
  
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
setTimeout(()=>{
    lenis.scrollTo(0,0);
  
  },100)
  setTimeout(()=>{
  
    lenis.stop();
  },1001)
  gsap.to('footer',{
    opacity:0,
    duration:.5
    })
 

    let lazyVideos = [...document.querySelectorAll("video.lazy")]
       
    if ("IntersectionObserver" in window) {
      let lazyVideoObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(video) {
          if (video.isIntersecting) {
            for (let source in video.target.children) {
              let videoSource = video.target.children[source];
              if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
                videoSource.src = videoSource.dataset.src;
              }
            }
   
            video.target.load();
            video.target.classList.remove("lazy");
            lazyVideoObserver.unobserve(video.target);
          }
        });
       });
   
   
      lazyVideos.forEach(function(lazyVideo) {
        lazyVideoObserver.observe(lazyVideo);
      });
      gsap.to(".Loading-Container svg", {
        opacity: 0,
        delay: 8,
        ease: "expo.in",
      });
      gsap.to(".Loading-Container", {
        opacity: 0,
        pointerEvents:'none',
        delay: 8,
        ease: "expo.in",
      });
    }

let slideinner = document.querySelector(".Section-3");
      setTimeout(() => {
        const interleaveOffset = 0.5;
        // main slider
        
        let swiperMin = new Swiper('.swiper-Container', {
          loop: false,
          direction: "vertical",
          autoplay: false,
          speed: 1000,
          grabCursor: false,
          watchSlidesProgress: true,
          touchReleaseOnEdges : true,
          releaseOnEdges : true,
            mousewheel: true,
              pagination: {
                el: '.swiper-Container > .swiper-pagination',
                clickable: true,
                type: 'bullets',
                renderBullet: function (index, className) {
                    console.log(className);
                return '<span class="' + className + '">'  +'<span class="inner"></span>'+ '</span>';
            
                }
              },
              on: {
                init:function(){
                 let swiper= this
                 let slidess = swiper.slides
                 console.log(slidess);
                 for(let g= 0 ; g < slidess.length ; g++){
                    slidess[g].setAttribute('data-index',g)
                 }
                },
                progress: function() {
                  let swiper = this;
                  for (let i = 0; i < swiper.slides.length; i++) {
                    let slideProgress = swiper.slides[i].progress;
                    let innerOffset = swiper.height * interleaveOffset;
                    let innerTranslate = slideProgress * innerOffset;
                    TweenMax.set(swiper.slides[i].querySelector(".slide-inner"), {
                      y: innerTranslate,
                    });
                  }
                },
                setTransition: function(slider, speed) {
                  let swiper = this;
                  for (let i = 0; i < swiper.slides.length; i++) {
                    swiper.slides[i].style.transition = speed + "ms";
                    swiper.slides[i].querySelector(".slide-inner").style.transition =
                      speed + "ms";
                      swiper.slides[i].style.transform='scale(.85)'
                      if(swiper.slides[i].classList.contains('swiper-slide-active')){
                        swiper.slides[i].style.transform='scale(1)'
                      }
                  }
        
                },
                slideChange: function (e) {
                    let swiper = this;
                 let active =  e.slides[swiper.activeIndex]
                //  if(e.slides[swiper.activeIndex].classList.contains('proj')){
                //     document.querySelector('header').classList.add('dark')
                //     document.querySelector('header').classList.add('darkLogo')
                //  }
                //  if(e.slides[swiper.activeIndex].classList.contains('Section-1')){
                //     document.querySelector('header').classList.remove('dark')
                //     document.querySelector('header').classList.remove('darkLogo')

                //  }
                //  if(e.slides[swiper.activeIndex].classList.contains('Section-2')){
                //     document.querySelector('header').classList.add('dark')
                //     document.querySelector('header').classList.add('darkLogo')
                //  }
                //  if(e.slides[swiper.activeIndex].classList.contains('blog')){
                //     document.querySelector('header').classList.remove('dark')
                //     document.querySelector('header').classList.remove('darkLogo')
                //  }
                 swiper.params.touchReleaseOnEdges = false;
                 swiper.params.mousewheel.releaseOnEdges = false;
                  },
                  reachEnd: function () {
                    let swiper = this;
                    setTimeout(function () {
                        // swiper.mousewheel.disable();
                        swiper.params.touchReleaseOnEdges = true;
                        swiper.params.mousewheel.releaseOnEdges = true;
                        gsap.to('footer',{
                          opacity:1,
                          duration:.5
                          })
                        lenis.start();
                      console.log("end"); 
                    }, 500);
                  },
                  touchEnd :function(){
                    // swiper.mousewheel.disable();
                    gsap.to('footer',{
                      opacity:1,
                      duration:.5
                      })
                    lenis.start();
                  console.log("end"); 
                  },
                  touchStart:function(){

                  },
                  reachBeginning: function () {
                    let swiper = this;
                    console.log("begin");
                    lenis.scrollTo('.sec-1');
            
                    setTimeout(function () {
                      // swiperMin.mousewheel.enable();
                        swiper.params.touchReleaseOnEdges = true;
                        swiper.params.mousewheel.releaseOnEdges = true;
                        lenis.stop();
                    }, 500);
                  },
              }
            });

            onEnter=()=>{
                console.log('onEnter');
                }
                onEnterBack=()=>{
                    console.log('onEnterBack');
                    
                    }
                onLeave=()=>{
                console.log('onLeave');
                        
                 }
                 onLeaveBack=()=>{
                 console.log('onLeaveBack');
                 setTimeout(()=> {
                    // swiperMin.mousewheel.enable();
                    swiperMin.params.touchReleaseOnEdges = true
                    swiperMin.params.mousewheel.releaseOnEdges = true;
                    gsap.to('footer',{
                      opacity:0,
                      duration:.5
                      })
                    lenis.stop();
                },100);           
                 }
                gsap.to('.swiper-Container',{
                scrollTrigger:{
                    trigger:'.Home-mobile',
                    start:'top top',
                    end:'bottom bottom',
                    scrub:true,
                    onEnter: () =>onEnter(),
                    onEnterBack: () =>onEnterBack(),
                    onLeave: () => onLeave(),
                    onLeaveBack: () =>onLeaveBack(),
                }
                })
                setTimeout(() => {
                  // banner slider
                  let SwiperBanner= new Swiper ('.swiper-banner', {
                    slidesPerView: 1,
                    spaceBetween: 0,
                    effect:'fade' ,
                    loop:true,
                    fadeEffect: {
                      crossFade: true,
                    },
                    autoplay: {
                      delay:6000,
                      // delay:7000,
                      // disableOnInteraction: false,
                    },
                   speed:6000,
                    pagination: {
                        el: '.Section-1 .swiper-pagination',
                        clickable: true,
                        type: 'bullets',
                        renderBullet: function (index, className) {
                        return '<span class="' + className + '">'  + '</span>';
                    
                        }
                      },
                    }) 
             }, 4000);
       
                
// projects hover
let projects = document.querySelectorAll('.Project')
projects.forEach(p=>{
    p.addEventListener('mouseenter',(e)=>{
        for(let i=0 ; i<projects.length ; i++){
            projects[i].classList.add('hide')
          }
          e.currentTarget.classList.add('onn')
    })
    p.addEventListener('mouseleave',(e)=>{
        for(let i=0 ; i<projects.length ; i++){
            projects[i].classList.remove('onn')
            projects[i].classList.remove('hide')

          }

    })
})
      }, 6000);
 
    })

})
