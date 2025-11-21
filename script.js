const langToggle = document.getElementById('lang-toggle');
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const langText = document.querySelector('.lang-text');

// TEXTOS PARA TRADUCCIÓN
const translations = {
    es: {
        nav_home: "Inicio",
        nav_about: "Sobre mí",
        nav_projects: "Proyectos",
        nav_skills: "Habilidades",
        hero_title: "Desarrollador Web Front-end",
        hero_desc: "Creando experiencias digitales que cobran vida.",
        btn_projects: "Ver Proyectos",
        btn_contact: "Contactar",
        footer_rights: "Todos los derechos reservados."
    },
    en: {
        nav_home: "Home",
        nav_about: "About Me",
        nav_projects: "Projects",
        nav_skills: "Skills",
        hero_title: "Front-end Web Developer",
        hero_desc: "Creating digital experiences that come alive.",
        btn_projects: "View Projects",
        btn_contact: "Contact Me",
        footer_rights: "All rights reserved."
    }
};

let currentLang = 'es';

// FUNCIÓN CAMBIAR IDIOMA
langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'es' ? 'en' : 'es';
    langText.textContent = currentLang.toUpperCase();
    updateTexts();
});

function updateTexts() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            el.textContent = translations[currentLang][key];
        }
    });
}

// FUNCIÓN CAMBIAR TEMA
themeToggle.addEventListener('click', () => {
    if (body.getAttribute('data-theme') === 'light') {
        body.setAttribute('data-theme', 'dark');
        themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
    } else {
        body.setAttribute('data-theme', 'light');
        themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }
});