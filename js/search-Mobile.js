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
  // SEARCH
let searchIcon23 = document.querySelector('.Search-Container .searchIcon2')
searchIcon23.addEventListener('click',()=>{
  console.log('clicked');
  let input = document.querySelector('input#search2')
  if(input.value == ''){
    return
     }
   else{
       console.log('val',input.value);
       var url = `/loadSearch-mobile.inc?q=${input.value}`;
       $(".loaded").load(url);}

})


let menuC = document.querySelector('header .Menu-Container')
let OPbtn = document.querySelector('header .Toggles')
let CLbtn = document.querySelector('header .Close')
OPbtn.addEventListener('click',()=>{
    menuC.classList.add('Open')
    setTimeout(() => {
        gsap.to('header ul .Menu-Link',{
            opacity:1,
            duration:.8,
            ease:'none'
        })
    }, 100);
})
CLbtn.addEventListener('click',()=>{
    gsap.to('header ul .Menu-Link',{
        opacity:0,
    })
    setTimeout(() => {
        menuC.classList.remove('Open')
    }, 100);
   
})
let searchIcon = document.querySelector('header .searchIconHeader')
let closeSearch = document.querySelector('header .searchs .CloseSearch')
let Searchs = document.querySelector('header .searchs')
let input = document.querySelector('header .InputBox')
let searchIcon2 = document.querySelector('header .searchIconHeader2')
searchIcon2.addEventListener('click',()=>{
  if(searchIcon.classList.contains('OpenS')){
      let inputt = document.querySelector('header input#search')
      console.log('val',inputt.value);
      if(inputt.value == ''){
          return
           }
         else{
             console.log('val',input.value);
             setTimeout(()=>{
            window.location.href = `/search.bc?q=${inputt.value}`
             },1000)}
  }
  else{
      let inputt = document.querySelector('header input#search')
      console.log('val',inputt.value);
      if(inputt.value == ''){
          return
           }
         else{
             console.log('val',inputt.value);
             setTimeout(()=>{
            window.location.href = `/search.bc?q=${inputt.value}`
             },1000)}
  }
})
searchIcon.addEventListener('click',()=>{
    input.classList.add('OpenS')
    searchIcon.classList.add('OpenS')
    Searchs.classList.add('OpenS')


})
let inputt = document.querySelector('header input#search')
inputt.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      // Cancel the default action, if needed
      if(inputt.value != ''){
        event.preventDefault();
      console.log('clicked');
  console.log('val',inputt );
  console.log('val',inputt.value);
    window.location.href = `/search.bc?q=${inputt.value}`
  setTimeout(() => {
   
  }, 1000);
      }
  
  
    }
  });
closeSearch.addEventListener('click',()=>{
  console.log('click');
  
    input.classList.remove('OpenS')
    searchIcon.classList.remove('OpenS')
    Searchs.classList.remove('OpenS')
})
