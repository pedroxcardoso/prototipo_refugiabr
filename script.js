function myFunction() {
    var element = document.body;
    var box = document.querySelector('.central-login');
    element.classList.toggle("dark-mode");
 
    box.style.boxShadow = '0 0 1rem var(--color-light)';
  }