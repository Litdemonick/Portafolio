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
        hero_title: "Desarrollador Web Back-end",
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
        projects_search_placeholder: "Buscar por tecnología, nombre...",
        projects_no_results: "No se encontraron proyectos que coincidan con la búsqueda.",
        project1_title: "Estructura y Jerarquía Visual",
        project1_desc: "Investigación sobre UI/UX, agrupación de elementos, espacio en blanco y técnicas como Card Sorting.",
        project2_title: "API REST con Node.js",
        project2_desc: "Backend para una aplicación de e-commerce con autenticación y pasarela de pago.",
        project3_title: "Sistema de Gestión de Blog",
        project3_desc: "Plataforma de blogging completa creada con Django, con panel de administración y roles de usuario.",
        project4_title: "Microservicio con Spring Boot",
        project4_desc: "Microservicio para gestión de inventario, contenedorizado con Docker y desplegado en AWS.",
        project5_title: "Modelo de IA para Clasificación",
        project5_desc: "Entrenamiento de un modelo de IA para clasificar imágenes usando TensorFlow y Python.",
        tag_research: "Investigación",
        btn_details: "Ver Detalles",
        btn_demo: "Demo",
        page_title_p1: "Investigación UI/UX | Carlos Miranda",
        p1_category: "Investigación Universitaria • DSW4",
        p1_title: "Estructura y Jerarquía Visual en el Diseño y sus Técnicas Aplicadas",
        p1_date: "22 Agosto 2025",
        p1_intro: "Esta investigación aborda los fundamentos críticos para crear interfaces de usuario efectivas. Analizamos cómo la mente humana procesa la información visual y qué técnicas modernas se utilizan para estructurar aplicaciones de software intuitivas.",
        p1_fig1_caption: "Estructura visual aplicada al desarrollo de software.",
        p1_h2_1: "1. Estructura y Jerarquía Visual",
        p1_p1: "El diseño no es solo estética; es comunicación. Para que una interfaz funcione, debe guiar al usuario sin esfuerzo a través del contenido.",
        p1_card1_title: "Agrupación de Elementos",
        p1_card1_desc: "Basado en los principios de la Gestalt, los elementos relacionados deben estar visualmente próximos. Esto reduce la carga cognitiva y ayuda al usuario a entender qué controles pertenecen a qué función.",
        p1_card2_title: "Jerarquía Visual",
        p1_card2_desc: "Utilizamos tamaño, color, contraste y tipografía para indicar la importancia. Un título grande (H1) atrae la vista primero; un texto gris y pequeño pasa a segundo plano.",
        p1_fig2_caption: "Comparación de buena vs mala jerarquía.",
        p1_h3_1: "El Poder del Espacio en Blanco",
        p1_p2: "El espacio negativo (o blanco) no es espacio vacío; es un elemento activo de diseño. Permite que el contenido 'respire', mejora la legibilidad y separa secciones lógicas sin necesidad de usar líneas divisorias pesadas.",
        p1_h2_2: "2. Técnicas Empleadas en el Diseño",
        p1_p3: "Para llevar la teoría a la práctica, utilizamos metodologías estandarizadas en la industria del desarrollo de software.",
        p1_tech1_title: "Categorización en Tarjetas (Card Sorting)",
        p1_tech1_desc: "Una técnica de investigación de usuarios donde los participantes organizan temas en categorías que tienen sentido para ellos. Es fundamental para diseñar la arquitectura de información y los menús de navegación.",
        p1_tech2_title: "Wireframing (Esquematización)",
        p1_tech2_desc: "El 'plano arquitectónico' de la aplicación. Son bocetos de baja fidelidad que definen la estructura y el flujo sin distraerse con colores o imágenes. Permite iterar rápido antes de escribir código.",
        p1_tech3_title: "Prototipado",
        p1_tech3_desc: "Modelos interactivos de alta o media fidelidad que simulan el funcionamiento final de la aplicación. Permiten realizar pruebas de usabilidad antes de la fase de desarrollo.",
        p1_download_title: "Documentación Original",
        p1_download_desc: "Puedes leer el trabajo de investigación completo presentado en la Universidad Tecnológica de Panamá aquí:",
        p1_download_btn: "Descargar PDF Completo",
        p1_back_btn: "Volver a Proyectos"
    },
    en: {
        nav_home: "Home",
        nav_about: "About Me",
        nav_projects: "Projects",
        nav_skills: "Skills",
        hero_title: "Back-end Web Developer",
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
        projects_search_placeholder: "Search by technology, name...",
        projects_no_results: "No projects found matching the search.",
        project1_title: "Visual Structure & Hierarchy",
        project1_desc: "Research on UI/UX, element grouping, white space, and techniques like Card Sorting.",
        project2_title: "REST API with Node.js",
        project2_desc: "Backend for an e-commerce application with authentication and payment gateway.",
        project3_title: "Blog Management System",
        project3_desc: "Complete blogging platform created with Django, with an admin panel and user roles.",
        project4_title: "Microservice with Spring Boot",
        project4_desc: "Inventory management microservice, containerized with Docker and deployed on AWS.",
        project5_title: "AI Classification Model",
        project5_desc: "Training an AI model to classify images using TensorFlow and Python.",
        tag_research: "Research",
        btn_details: "View Details",
        btn_demo: "Demo",
        page_title_p1: "UI/UX Research | Carlos Miranda",
        p1_category: "University Research • DSW4",
        p1_title: "Visual Structure and Hierarchy in Design and its Applied Techniques",
        p1_date: "August 22, 2025",
        p1_intro: "This research addresses the critical foundations for creating effective user interfaces. We analyze how the human mind processes visual information and what modern techniques are used to structure intuitive software applications.",
        p1_fig1_caption: "Visual structure applied to software development.",
        p1_h2_1: "1. Visual Structure and Hierarchy",
        p1_p1: "Design is not just aesthetics; it is communication. For an interface to work, it must guide the user effortlessly through the content.",
        p1_card1_title: "Element Grouping",
        p1_card1_desc: "Based on Gestalt principles, related elements should be visually close. This reduces cognitive load and helps the user understand which controls belong to which function.",
        p1_card2_title: "Visual Hierarchy",
        p1_card2_desc: "We use size, color, contrast, and typography to indicate importance. A large title (H1) attracts the eye first; small, gray text takes a backseat.",
        p1_fig2_caption: "Comparison of good vs. bad hierarchy.",
        p1_h3_1: "The Power of White Space",
        p1_p2: "Negative (or white) space is not empty space; it is an active design element. It allows content to 'breathe', improves readability, and separates logical sections without needing heavy dividing lines.",
        p1_h2_2: "2. Techniques Used in Design",
        p1_p3: "To put theory into practice, we use standardized methodologies from the software development industry.",
        p1_tech1_title: "Card Sorting",
        p1_tech1_desc: "A user research technique where participants organize topics into categories that make sense to them. It is essential for designing information architecture and navigation menus.",
        p1_tech2_title: "Wireframing",
        p1_tech2_desc: "The 'architectural blueprint' of the application. They are low-fidelity sketches that define the structure and flow without being distracted by colors or images. It allows for quick iteration before writing code.",
        p1_tech3_title: "Prototyping",
        p1_tech3_desc: "Interactive models of medium or high fidelity that simulate the final operation of the application. They allow for usability testing before the development phase.",
        p1_download_title: "Original Document",
        p1_download_desc: "You can read the full research paper presented at the Technological University of Panama here:",
        p1_download_btn: "Download Full PDF",
        p1_back_btn: "Back to Projects"
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
            // Actualizar placeholder si existe
            const placeholderKey = el.getAttribute('data-i18n-placeholder');
            if (placeholderKey && translations[currentLang][placeholderKey]) {
                el.setAttribute('placeholder', translations[currentLang][placeholderKey]);
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