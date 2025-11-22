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
        footer_rights: "Todos los derechos reservados.",
        about_title: "Sobre Mí",
        about_intro: "Soy un apasionado <strong>desarrollador Back-end</strong> con una sólida vocación por construir la arquitectura digital que hace funcionar al mundo. Mi objetivo es crear soluciones robustas, escalables y eficientes que no solo cumplan con los requisitos técnicos, sino que también impulsen el éxito de cada proyecto.",
        about_timeline_title: "Mi Trayectoria",
        about_pro_exp_title: "Experiencia Profesional",
        about_pro_exp_desc: "He tenido el privilegio de colaborar en la creación de páginas web para diversas empresas, desarrollando sistemas back-end a medida que potencian sus operaciones y mejoran la experiencia del usuario final.",
        about_academic_title: "Proyectos Académicos Destacados",
        about_academic_desc: "Durante mi formación universitaria, participé activamente en proyectos desafiantes bajo la tutela del profesor <strong>Ibarra Napoleón</strong>. Estas experiencias, junto con la superación de talleres y parciales semestrales, forjaron mi capacidad para resolver problemas complejos y trabajar eficazmente en equipo.",
        about_learning_title: "Aprendizaje Continuo",
        about_learning_desc: "El mundo de la tecnología está en constante evolución, y yo con él. Me dedico a aprender y dominar nuevas tecnologías para mantenerme a la vanguardia del desarrollo de software.",
        skills_title: "Mis Habilidades",
        skills_intro_p1: "Mi enfoque se centra en la <strong>eficiencia y la calidad</strong>. Disfruto entregando trabajos a gran velocidad, pero nunca a costa del detalle. Cada línea de código está pensada para ser robusta, escalable y pulida.",
        skills_intro_p2: "Poseo una gran facilidad para comprender nuevos lenguajes y tecnologías. Aunque mi experiencia es focalizada, mi capacidad de aprendizaje rápido me permite adaptarme y ser productivo en cualquier entorno tecnológico.",
        skills_tech_title: "Tecnologías y Herramientas",
        projects_title: "Mis Proyectos",
        projects_intro: "Aquí hay una selección de proyectos en los que he trabajado. Cada uno representa un desafío único y una oportunidad para aprender y aplicar nuevas tecnologías.",
        project1_title: "Nombre del Proyecto 1",
        project1_desc: "Una breve descripción de lo que hace este proyecto, los problemas que resuelve y las tecnologías clave utilizadas.",
        project2_title: "Nombre del Proyecto 2",
        project2_desc: "Una breve descripción de lo que hace este proyecto, los problemas que resuelve y las tecnologías clave utilizadas."
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
        footer_rights: "All rights reserved.",
        about_title: "About Me",
        about_intro: "I am a passionate <strong>Back-end developer</strong> with a strong vocation for building the digital architecture that makes the world work. My goal is to create robust, scalable, and efficient solutions that not only meet technical requirements but also drive the success of each project.",
        about_timeline_title: "My Journey",
        about_pro_exp_title: "Professional Experience",
        about_pro_exp_desc: "I have had the privilege of collaborating on the creation of websites for various companies, developing custom back-end systems that power their operations and enhance the end-user experience.",
        about_academic_title: "Key Academic Projects",
        about_academic_desc: "During my university studies, I actively participated in challenging projects under the guidance of Professor <strong>Ibarra Napoleón</strong>. These experiences, along with successfully completing semester workshops and exams, forged my ability to solve complex problems and work effectively in a team.",
        about_learning_title: "Continuous Learning",
        about_learning_desc: "The world of technology is constantly evolving, and so am I. I am dedicated to learning and mastering new technologies to stay at the forefront of software development.",
        skills_title: "My Skills",
        skills_intro_p1: "My approach focuses on <strong>efficiency and quality</strong>. I enjoy delivering work at high speed, but never at the expense of detail. Every line of code is designed to be robust, scalable, and polished.",
        skills_intro_p2: "I have a great ability to understand new languages and technologies. Although my experience is focused, my rapid learning ability allows me to adapt and be productive in any technological environment.",
        skills_tech_title: "Technologies & Tools",
        projects_title: "My Projects",
        projects_intro: "Here is a selection of projects I have worked on. Each one represents a unique challenge and an opportunity to learn and apply new technologies.",
        project1_title: "Project Name 1",
        project1_desc: "A brief description of what this project does, the problems it solves, and the key technologies used.",
        project2_title: "Project Name 2",
        project2_desc: "A brief description of what this project does, the problems it solves, and the key technologies used."
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
            // Usamos innerHTML para que las etiquetas como <strong> funcionen
            el.innerHTML = translations[currentLang][key];
            // Actualizamos el data-text para el efecto glitch
            if (el.classList.contains('glitch-effect')) {
                el.setAttribute('data-text', el.textContent);
            }
        }
    });
}

// FUNCIÓN CAMBIAR TEMA
function applyTheme(theme) {
    body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    if (theme === 'light') {
        themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
        themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
}

themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    applyTheme(newTheme);
});

// Aplicar tema guardado al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'dark'; // 'dark' como predeterminado
    applyTheme(savedTheme);
    updateTexts(); // Asegurarse de que los textos se carguen con el idioma correcto
});

// --- ANIMACIONES CON SCROLL (INTERSECTION OBSERVER) ---

// Función para manejar la visibilidad de los elementos
const handleIntersection = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Animación especial para la línea de la timeline
            if (entry.target.id === 'experience-timeline') {
                const timelineBar = document.querySelector('.timeline::before');
                if (timelineBar) {
                    // Se asegura que el alto sea el del contenedor
                    timelineBar.style.height = entry.target.querySelector('.timeline').offsetHeight + 'px';
                }
            }
            
            // Dejar de observar el elemento una vez que es visible
            observer.unobserve(entry.target);
        }
    });
};

// Crear el observador
const observer = new IntersectionObserver(handleIntersection, {
    root: null, // viewport
    rootMargin: '0px',
    threshold: 0.2 // El elemento debe ser visible en un 20% para activar
});

// Observar todos los elementos que queremos animar
// Solo se ejecuta si estamos en la página sobremi.html
if (document.querySelector('.about-main')) {
    const animatedElements = document.querySelectorAll('#about-intro, #experience-timeline, .timeline-item');
    animatedElements.forEach(el => observer.observe(el));
}

if (document.querySelector('.skills-main')) {
    const animatedElements = document.querySelectorAll('#skills-intro, #tech-skills');
    animatedElements.forEach(el => observer.observe(el));
}

if (document.querySelector('.projects-main')) {
    const animatedElements = document.querySelectorAll('#projects-intro, #project-gallery');
    animatedElements.forEach(el => observer.observe(el));
}