let header = document.querySelector('header')
header.classList.add('dark')
header.classList.add('darkLogo')
  // Enable Scroll

  const lenis = new Lenis()


  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  
  requestAnimationFrame(raf)
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
document.querySelectorAll('.sharee').forEach(btn => {
  btn.addEventListener('click', e => {
    e.target.parentElement.classList.toggle('share__wrapper--active');
    e.target.classList.toggle('toggle-button--active');
  });
});

  // share blog
  let whatsapp = document.querySelector('.share__wrapper .whatsapp')
  let twitter = document.querySelector('.share__wrapper .twitter')
  let instagram = document.querySelector('.share__wrapper .instagram')
  let proLink = document.querySelector('.bloglink').getAttribute('datalink')
 console.log('link',proLink);
 let url = window.location.href 
  whatsapp.setAttribute('href',`https://api.whatsapp.com/send?text=${proLink}`)
  instagram.setAttribute('href',`https://www.instagram.com/?url=${proLink}`)
  twitter.setAttribute('href',`"https://twitter.com/intent/tweet?url=${proLink}`)

