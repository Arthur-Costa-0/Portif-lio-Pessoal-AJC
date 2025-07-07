// Decidi usar smooth scroll para links internos para deixar tudo em apenas uma página.
document.querySelectorAll('.site-nav a').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const headerHeight = document.querySelector('.site-header').offsetHeight;
    const targetPos = document.getElementById(targetId).offsetTop - headerHeight;

    window.scrollTo({
      top: targetPos,
      behavior: 'smooth'});});});