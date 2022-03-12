const hamburger = document.querySelector('.hamburger')
const nav_links = document.querySelector('.nav-links')

hamburger.addEventListener('click', () => {
      nav_links.classList.toggle('active');
})