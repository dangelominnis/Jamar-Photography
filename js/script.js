window.addEventListener('scroll', function() {
    var scrollButton = document.querySelector('.scroll-top-button');
    if (window.pageYOffset > 100) {
      scrollButton.classList.add('show');
    } else {
      scrollButton.classList.remove('show');
    }
  });
  