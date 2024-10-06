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
let closeSearch = document.querySelector('header .CloseSearch')
let Searchs = document.querySelector('header .searchs')
let input = document.querySelector('.InputBox')
searchIcon.addEventListener('click',()=>{
    input.classList.add('OpenS')
    searchIcon.classList.add('OpenS')
    Searchs.classList.add('OpenS')

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
    input.classList.toggle('OpenS')
    searchIcon.classList.toggle('OpenS')
    Searchs.classList.toggle('OpenS')
})

const host = {
    debug: false,
    settings:{
              'connection.web.trust_login': 'https://basispanel.ir/apicms', 
          'connection.web.basiscore': 'https://basispanel.ir/apicms', 
          'connection.web.media': 'https://basispanel.ir/apicms', 
          'default.dbsource.verb': 'post', 
          'default.call.verb': 'get', 
          'default.viewCommand.groupColumn': 'prpid', 
              "default.dmnid":'4876',
              "default.binding.regex":"\\{##([^#]*)##\\}"
          }
  }

  
function onSource(args) { 
    const captcha = document.querySelector("input[name='captcha']").value; 
    const captchaid = document.querySelector("input[name='captchaid']").value; 
    console.log(captcha);
    const stringJson = JSON.stringify(args.source?.rows[0]); 
    $bc.setSource('edit.object', { 
        value: stringJson, 
        captcha: captcha, 
        captchaid: captchaid ,
  
    }) 
    console.log('sourcd',stringJson);
  } 
  
  
  async function OnProcessesEditObjectFn(args) {
    const response = args.response;
  const json = await response.json();
  
  console.log(json);
  if (json.errorid == 6) {
              console.log('با موفقیت ثبت شذ');
              document.querySelector('.main-container').querySelector('span').innerHTML='پیام شما با موفقیت ثبت شد'
              document.querySelector('.main-container').classList.add('SEND')
    setTimeout(()=>{
      document.querySelector('.main-container').classList.remove('SEND')
    },2000)
            
  
  }

  if (json.errorid == 4) {
     console.log(json);
     document.querySelector('.main-container').querySelector('span').innerHTML='  کپچا اشتباه وارد شده  '
     document.querySelector('.main-container').classList.add('SEND')
setTimeout(()=>{
document.querySelector('.main-container').classList.remove('SEND')
},2000)
  }
  
  }


function rendered(){
  setTimeout(()=>{
    let a =document.querySelectorAll('footer [data-bc-schema-column] [data-bc-question]')  
    let parent = document.querySelector('footer [data-bc-schema-column]')
    let child1 = document.createElement('div')
    child1.classList.add('child-1')
    let child2 = document.createElement('div')
    child2.classList.add('child-2')
    let child3 = document.createElement('div')
    child3.classList.add('child-3')
    let child4 = document.createElement('div')
    child4.classList.add('child-4')
    parent.insertBefore(child1, $('[data-bc-schema-column]').children('[data-bc-question]')[0]);
    parent.insertBefore(child2, child1);
    parent.insertBefore(child3, child2);
    parent.insertBefore(child4, child3);
    child1.appendChild($('[data-bc-schema-column]').children('[data-bc-question]')[0])
    child2.appendChild($('[data-bc-schema-column]').children('[data-bc-question]')[0])
    child3.appendChild($('[data-bc-schema-column]').children('[data-bc-question]')[0])
    child3.appendChild($('[data-bc-schema-column]').children('[data-bc-question]')[0])
    child4.appendChild($('[data-bc-schema-column]').children('[data-bc-question]')[0])
    child4.appendChild($('[data-bc-schema-column]').children('[data-bc-question]')[0])

    let name = child2.children[0].querySelector('input')
    let email = child3.children[0].querySelector('input')
    let phone = child3.children[1].querySelector('input')
    let texta = child4.children[0].querySelector('textarea')

    $(name).attr('placeholder','  نام و نام‌خانوادگی ');
    $(email).attr('placeholder','ایمیل  ');
    $(phone).attr('placeholder','  تلفن همراه  ');
    $(texta).attr('placeholder','  پیغام');
    let inputFile =document.querySelector('footer input[type="file"]');
    inputFile.setAttribute('id','file-upload')
    let label = document.createElement('label')
    let icon = document.createElement('span')
    let icon2 = document.createElement('span')
    icon.classList.add('iccon')
    icon2.classList.add('name')
    label.appendChild(icon)
    label.appendChild(icon2)
    icon.innerHTML = `<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 7.14114V8.42857C1 8.58012 1.0602 8.72547 1.16737 8.83263C1.27453 8.9398 1.41988 9 1.57143 9H8.42857C8.58012 9 8.72547 8.9398 8.83263 8.83263C8.9398 8.72547 9 8.58012 9 8.42857V7.14114M5 1.5V6.5M7 3L5 1L3 3" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`
icon2.innerHTML = 'آپلود فایل'
    label.setAttribute('for','file-upload')
    label.setAttribute('class','Upload')

    child4.appendChild(label);
   let isEmpty=false
   let buttons = document.querySelector('.schemaBtn')
  let inputs = document.querySelectorAll('footer input[type="text"]')
  buttons.addEventListener('click',()=>{
    console.log('vkkkk');
    inputs.forEach(input=>{
      console.log(input.value);
        if(input.value == ""){
           isEmpty = true
            console.log('فیلد را پرکنید');
        }
      })
    if(isEmpty){
      isEmpty = false
      document.querySelector('.main-container').querySelector('span').innerHTML='  فیلدها را پرکنید '
      document.querySelector('.main-container').classList.add('SEND')
 setTimeout(()=>{
 document.querySelector('.main-container').classList.remove('SEND')
 },2000)
    }
  })

   console.log('rendered');

        
      },100)
 





}
let closeM = document.querySelector('.MapPOP .Closemap')
let mapBTN = document.querySelector(' .Pointer ')
let mapPop = document.querySelector('.MapPOP')
mapBTN.addEventListener('click',()=>{
  mapPop.classList.toggle('open')
})
closeM.addEventListener('click',()=>{
  mapPop.classList.toggle('open')
})
