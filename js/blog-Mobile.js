let header = document.querySelector('header')
header.classList.add('dark')
header.classList.add('darkLogo')
  // Enable Scroll

  const lenis = new Lenis()


  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  lenis.on('scroll',(e)=>{
    if(e.scroll > 0){
      header.classList.add('Gobottom')
      header.classList.remove('dark')
      header.classList.remove('darkLogo')
  
    }
    else{
      header.classList.remove('Gobottom')
      header.classList.add('dark')
  header.classList.add('darkLogo')
    }
    
    })
  requestAnimationFrame(raf)
  gsap.to('.Blog',{
    opacity:1,
    stagger:.2
  })
let btns = document.querySelectorAll('.Filters .ShowBTN')
btns.forEach(btn=>{
    btn.addEventListener('click',(e)=>{
        for(let h =0 ; h< btns.length ; h++){
            btns[h].classList.remove('active')
        }
        e.currentTarget.classList.add('active')

    })
})

let btnF = document.querySelectorAll('.Filteritem')
let catid
btnF[0].querySelector('.ShowBTN').classList.add('active')
btnF.forEach(b=>{
  b.addEventListener('click',(e)=>{
  catid = e.currentTarget.getAttribute('data-catid')
  btnF.forEach(b=>{
    b.classList.remove('active')
    b.querySelector('.ShowBTN').classList.remove('active')
  })
  e.currentTarget.classList.add('active')
  e.currentTarget.querySelector('.ShowBTN').classList.remove('active')
  var url = `/load-blog.inc?catid=${catid}`;
  $(".Articles").load(url);
  setTimeout(() => {
      gsap.to('.Blog',{
        opacity:1,
        stagger:.2
      })

  }, 1000);
  })
})
