document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    // --- TERMINAL TYPING ANIMATION ---
    const terminalTextSpan = document.getElementById('terminal-text');
    
    if (terminalTextSpan) {
        const textArray = [
            // Comandos solicitados
            "portfolio --version 1.1.0",
            "git status",
            "npm install --save-dev awesome-feature",
            "node server.js",
            "docker-compose up -d",
            // Comandos que ya tenías (sin duplicados)
            "python manage.py runserver",
            "git commit -m \"feat: Add new API endpoint\"",
            "mysql -u root -p",
            "SELECT * FROM users WHERE active=1;",
            "docker-compose up -d --build",
            "pip install -r requirements.txt",
            "npm run test",
            "ssh admin@192.168.1.101",
            "sudo systemctl restart nginx",
            "mvn clean package",
            "kubectl get pods -n production",
            "terraform apply -auto-approve",
            // Nuevos comandos agregados
            "ls -la /var/www", // Linux
            "php artisan migrate --seed", // PHP (Laravel)
            "dotnet run --project WebApp.csproj", // ASP.NET
            "psql -U postgres -d analytics_db", // Database (PostgreSQL)
            "javac -d bin src/com/company/Main.java", // Java
            "grep -r \"SECRET_KEY\" /etc/config/" // Linux
        ];
        const typingDelay = 100;
        const erasingDelay = 50;
        const newTextDelay = 2000; // Pausa antes de empezar a escribir nuevo texto
        let textArrayIndex = 0;
        let charIndex = 0;

        function type() {
            if (charIndex < textArray[textArrayIndex].length) {
                terminalTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
                charIndex++;
                setTimeout(type, typingDelay);
            } else {
                setTimeout(erase, newTextDelay);
            }
        }

        function erase() {
            if (charIndex > 0) {
                terminalTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
                charIndex--;
                setTimeout(erase, erasingDelay);
            } else {
                textArrayIndex = (textArrayIndex + 1) % textArray.length;
                setTimeout(type, typingDelay + 1100);
            }
        }

        setTimeout(type, newTextDelay + 250);
    }
});