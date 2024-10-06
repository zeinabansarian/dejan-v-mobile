document.querySelectorAll('.toggle-button').forEach(btn => {
    btn.addEventListener('click', e => {
      e.target.parentElement.classList.toggle('share__wrapper--active');
      e.target.classList.toggle('toggle-button--active');
    });
  });


  const swiper = new Swiper('.swiper', {
    speed:1000,
  
    // Navigation arrows
    navigation: {
      nextEl: '.nextBtn',
      prevEl: '.nextprev',
    },
  
  });