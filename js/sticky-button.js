document.addEventListener('scroll', () => {
    const button = document.querySelector('.sticky-button');
    const carousel = document.querySelector('#carouselExampleAutoplaying');
    
    if (window.innerWidth < 768 && window.scrollY > carousel.offsetTop ) {
      button.classList.add('sticky');
    } else {
      button.classList.remove('sticky');
    }
  });