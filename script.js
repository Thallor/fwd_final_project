document.querySelectorAll('.accordion-label').forEach((label) => {
    label.addEventListener('click', () => {
      const content = label.nextElementSibling;
      content.style.display = content.style.display === 'block' ? 'none' : 'block';
      label.querySelector('.plus').textContent = content.style.display === 'block' ? '-' : '+';
    });
  });

  function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
}
