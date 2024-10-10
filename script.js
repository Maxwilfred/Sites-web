// Initialisation des animations au défilement
AOS.init();

// Filtrage des projets par catégorie
const filterButtons = document.querySelectorAll('.filter-btn');
const projectItems = document.querySelectorAll('.project-item');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.getAttribute('data-filter');

    projectItems.forEach(item => {
      if (filter === 'all' || item.classList.contains(filter)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

// Mode sombre et clair
const toggleDarkMode = () => {
  document.body.classList.toggle('dark-mode');
};

// Ajout d'un bouton de bascule pour le mode sombre
const darkModeToggle = document.createElement('button');
darkModeToggle.innerText = 'Mode sombre';
darkModeToggle.classList.add('btn', 'btn-outline-primary', 'my-4');
darkModeToggle.addEventListener('click', toggleDarkMode);
document.body.appendChild(darkModeToggle);