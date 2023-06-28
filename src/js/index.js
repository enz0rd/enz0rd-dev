function toggleDarkMode() {
  const body = document.body;
  const elements = document.querySelectorAll('.postcard.light, postcard, p, body, .form-control-dark, .form-control-dark:focus, .text-small, .dropdown-toggle:not(:focus), .home-title, .dev, .nav-link, .title-text, .img-myself, .container div, .container .img-myself, .section-title, .blockabout, .blockabout-inner, .sosmed-horizontal a i, .rey-btn, .postcard.dark, .t-dark, .postcard h1, .postcard .h1, .postcard .small, .postcard .postcard__title, .postcard .postcard__img, .postcard .postcard__img_link, .postcard .postcard__bar, .postcard .postcard__text, .postcard .postcard__preview-txt, .postcard, .green .postcard__title, .green .postcard__bar, .postcard:before, .green:before, .postcard, .postcard__title, .postcard__bar, .postcard .red.play, .red .postcard__title, .red .postcard__bar, .red:before, .red:nth-child(2n)::before, .postcard .yellow.play, .yellow .postcard__title, .yellow .postcard__bar, .yellow:before, .yellow:nth-child(2n)::before, .btn, .btn a, .btn, .footer-page');
  const button = document.querySelector('.darkmode')

  if (button.textContent === 'Dark') {
    button.textContent = 'Light';
  } else {
    button.textContent = 'Dark';
  }
  button.classList.toggle('dark');
  if (body.classList.contains('bg-light')) {
    elements.forEach(element => {
      element.classList.remove('bg-light');
      element.classList.add('bg-dark');
      element.classList.toggle('dark');
    })
    body.classList.remove('bg-light');
    body.classList.add('bg-dark');
  } else {
    elements.forEach(element => {
      element.classList.remove('bg-dark');
      element.classList.add('bg-light');
      element.classList.toggle('dark');
    });
    body.classList.remove('bg-dark');
    body.classList.add('bg-light');
  }

}
