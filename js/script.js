const navbar = document.querySelector('.navbar');

window.onscroll = function () {
  scrolJos();
};

function scrolJos() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    navbar.classList.add('bg-light');
  } else {
    navbar.classList.remove('bg-light');
  }
}
