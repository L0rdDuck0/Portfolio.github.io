const translations = {
    'fr': {
        // Navigation
        'nav-home': 'Accueil',
        'nav-about': 'A propos',
        'nav-portfolio': 'Portfolio',
        'nav-contact': 'Contact',

        // Hero section
        'hero-subtitle': '3ième année de réseaux et télécommunication',
        'hero-title': 'Bonjour, Je suis Pierre Cayambo de l\'IUT de Terre-Sainte',

        // About section
        'about-title': 'A propos',
        'about-subtitle': 'Qui suis-je',
        'about-text-1': 'Bienvenue sur mon portfolio ! Je m\'appelle Pierre Cayambo je suis étudiant en troisième année à l\'institut universitaire technologique. J\'ai créé ce portfolio afin de vous offrir une vision détaillée de mon parcours, mes compétences ainsi que de mes réalisations.',
        'about-text-2': 'Passionné par les nouvelles technologies, j\'ai décidé de poursuivre dans cette voie en pratiquant l\'informatique dans ma vie professionnelle. Ce parcours va me permettre de développer des compétences dans des domaines variés de l\'informatique. Relever des défis dans ce domaine et répondre aux enjeux offerts par les innovations technologiques, tel est mon objectif dans le monde professionnel.',
        'about-cv-fr': 'Pour en savoir plus je vous invite à télécharger mon CV',
        'about-cv-en': 'Download my English CV',

        // Skills section
        'skills-title': 'Mes compétences',
        'skills-intro-1': 'Je suis motivé pour développer mes compétences et évoluer professionnellement,',
        'skills-intro-2': 'Je sais travailler en groupe mais je reste surtout très curieux sur le monde du numérique.',

        // Programming Skills
        'skills-prog-title': 'Compétences en programmation',
        'skills-c-title': 'C',
        'skills-c-desc': '(Débutant) : J\'ai réalisé un projet de bataille navale, consultable parmi mes premiers travaux. De plus, j\'ai travaillé sur des exercices pratiques pour renforcer mes fondamentaux en programmation en C.',
        'skills-python-title': 'Python',
        'skills-python-desc': '(Débutant) : Mon dernier projet consistait à développer des applications communicantes, En parallèle, j\'ai revisité les bases du langage pour renforcer ma compréhension globale.',
        'skills-cpp-title': 'C++',
        'skills-cpp-desc': '(Débutant) : J\'ai dirigé plusieurs projets, notamment dans le domaine de l\'Arduino, et j\'ai également conduit un projet axé sur la collecte et le traitement de données issues de l\'IoT.',

        // Network Skills
        'skills-network-title': 'Compétences en réseau',
        'skills-network-arch': 'Architecture réseau (Packet Tracer)',
        'skills-network-arch-desc': 'Conception et simulation d\'architectures réseau - Configuration et gestion des périphériques réseau',
        'skills-network-config': 'Configuration Physique des Réseaux',
        'skills-network-config-desc': 'Configuration de périphériques Cisco et Huawei - Configuration et gestion des protocoles réseau',
        'skills-network-ip': 'Adressage IPv4 / IPv6',
        'skills-network-ip-desc': 'Configuration et gestion des adresses IP',
        'skills-network-server': 'Serveur Web & Serveur FTP',
        'skills-network-server-desc': 'Configuration et gestion de serveurs web (Apache, Nginx) - Administration de serveurs FTP (vsftpd) - Contrôle d\'accès et sécurisation des transferts de fichiers',
        'skills-network-firewall': 'Pare-feu (Pfsense)',
        'skills-network-firewall-desc': 'Installation et gestion de pare-feu avec Pfsense - Configuration des règles de sécurité et gestion des accès',
        'skills-network-wireshark': 'Analyse de trame (Wireshark)',
        'skills-network-wireshark-desc': 'Utilisation avancée de Wireshark pour l\'analyse réseau - Détection des anomalies de trafic et résolution des problèmes de connectivité',

        // Cybersecurity Skills
        'skills-security-title': 'Compétences en cybersécurité',
        'skills-security-pentest': 'Pentesting',
        'skills-security-pentest-desc': 'Réalisation de tests d\'intrusion pour évaluer la sécurité des systèmes - Utilisation d\'outils populaires tels que Metasploit, Burp Suite, et Nmap',
        'skills-security-exp': 'Expérience individuelle',
        'skills-security-exp-desc': 'Hack The Box - TryHackMe - Ozint - RootMe',

        // Portfolio section
        'portfolio-title': 'Portfolio',
        'portfolio-intro': 'Dans cette partie du Portfolio, j\'aborderai les différents projets que je réaliserai durant les prochaines années.',
        'portfolio-all': 'Tous les projets',
        'portfolio-first': 'Projet de 1ère année',
        'portfolio-second': 'Projet de 2ième année',
        'portfolio-third': 'Projet de 3ième année',
        'project-more': 'Cliquer pour en savoir plus',
        'project-year': 'Année : ',
        'project-objective': 'Objectif projet',
        'project-info': 'Informations',

        // Projets spécifiques
        'project-battleship-title': 'Projet bataille navale',
        'project-battleship-desc': 'Réalisation d\'un jeu de bataille navale en réseau livrable en 3 versions en se basant sur du code C déjà existant du client/serveur il a fallu réaliser une transmission de données numérique',
        'project-battleship-info': 'Nous avons dû réaliser ce projet en plusieurs séances',

        'project-portfolio-title': 'Portfolio',
        'project-portfolio-desc': 'Pour ce projet j\'ai créé ce portfolio afin de vous offrir une vision détaillée de mon parcours, mes compétences ainsi que de mes réalisations.',
        'project-portfolio-info': 'Il y a aussi eu une utilisation de Git lab pour la gestion du portfolio',

        'project-integrative-title': 'Projet intégratif',
        'project-integrative-desc': 'Dans le cadre de la SAE 2.04, j\'ai pris en charge le déploiement complet du réseau d\'une petite entreprise, en configurant l\'accès au système d\'information pour les nouveaux utilisateurs. J\'ai également mis en place un système de partage de documents sur le réseau local.',
        'project-integrative-info': 'Pour répondre à la prise en compte de deux succursales, un serveur Windows, un serveur UNIX, des postes clients Windows et la suite de collaboration Zimbra.',

        'project-cisco-title': 'Projet de migration Equipement vers CISCO',
        'project-cisco-desc': 'Le projet consistait à analyser la topologie d\'un schéma avec des périphériques Alcatel et de reproduire cette même topologie mais avec des périphériques Cisco à l\'aide du logiciel Packet Tracer.',
        'project-cisco-info': 'Nous pouvons voir l\'interprétation de ces deux topologies qui fonctionnent dans un sens et dans l\'autre.',

        // Contact section
        'contact-title': 'Contact',
        'contact-text-1': 'Envoyez-moi un e-mail pour tout renseignement complémentaire ou bien,',
        'contact-text-2': 'vous pouvez également m\'envoyer un message via mes contacts ci-dessous',

        // Footer
        'footer-copyright': 'Copyright © 2023 Portfolio. Tous droits réservés.'
    },
    'en': {
        // Navigation
        'nav-home': 'Home',
        'nav-about': 'About',
        'nav-portfolio': 'Portfolio',
        'nav-contact': 'Contact',

        // Hero section
        'hero-subtitle': '3rd year of Networks and Telecommunications',
        'hero-title': 'Hello, I\'m Pierre Cayambo from IUT de Terre-Sainte',

        // About section
        'about-title': 'About',
        'about-subtitle': 'Who am I',
        'about-text-1': 'Welcome to my portfolio! My name is Pierre Cayambo and I am a third-year student at the University Institute of Technology. I created this portfolio to give you a detailed view of my background, skills, and achievements.',
        'about-text-2': 'Passionate about new technologies, I decided to pursue this path by practicing computer science in my professional life. This path will allow me to develop skills in various fields of computer science. Taking on challenges in this field and addressing the issues posed by technological innovations is my goal in the professional world.',
        'about-cv-fr': 'To learn more, I invite you to download my CV',
        'about-cv-en': 'Download my English CV',

        // Skills section
        'skills-title': 'MY SKILLS',
        'skills-intro-1': 'I am motivated to develop my skills and grow professionally,',
        'skills-intro-2': 'I can work in a team but I am especially curious about the digital world.',

        // Programming Skills
        'skills-prog-title': 'Programming Skills',
        'skills-c-title': 'C',
        'skills-c-desc': '(Beginner): I completed a battleship project, viewable among my first works. Additionally, I worked on practical exercises to strengthen my fundamentals in C programming.',
        'skills-python-title': 'Python',
        'skills-python-desc': '(Beginner): My latest project involved developing communicative applications. In parallel, I revisited the language basics to strengthen my overall understanding.',
        'skills-cpp-title': 'C++',
        'skills-cpp-desc': '(Beginner): I led several projects, particularly in the Arduino field, and also conducted a project focused on collecting and processing IoT data.',

        // Network Skills
        'skills-network-title': 'Network Skills',
        'skills-network-arch': 'Network Architecture (Packet Tracer)',
        'skills-network-arch-desc': 'Network architecture design and simulation - Network device configuration and management',
        'skills-network-config': 'Physical Network Configuration',
        'skills-network-config-desc': 'Cisco and Huawei device configuration - Network protocol configuration and management',
        'skills-network-ip': 'IPv4 / IPv6 Addressing',
        'skills-network-ip-desc': 'Configuration and management of IP addresses',
        'skills-network-server': 'Web Server & FTP Server',
        'skills-network-server-desc': 'Web server configuration and management (Apache, Nginx) - FTP server administration (vsftpd) - Access control and file transfer security',
        'skills-network-firewall': 'Firewall (Pfsense)',
        'skills-network-firewall-desc': 'Firewall installation and management with Pfsense - Security rules configuration and access management',
        'skills-network-wireshark': 'Frame Analysis (Wireshark)',
        'skills-network-wireshark-desc': 'Advanced use of Wireshark for network analysis - Detection of traffic anomalies and resolution of connectivity issues',

        // Cybersecurity Skills
        'skills-security-title': 'Cybersecurity Skills',
        'skills-security-pentest': 'Pentesting',
        'skills-security-pentest-desc': 'Conducting penetration tests to assess system security - Using popular tools such as Metasploit, Burp Suite, and Nmap',
        'skills-security-exp': 'Individual Experience',
        'skills-security-exp-desc': 'Hack The Box - TryHackMe - Ozint - RootMe',

        // Portfolio section
        'portfolio-title': 'Portfolio',
        'portfolio-intro': 'In this part of the Portfolio, I will discuss the various projects I will undertake in the coming years.',
        'portfolio-all': 'All Projects',
        'portfolio-first': 'First Year Project',
        'portfolio-second': 'Second Year Project',
        'portfolio-third': 'Third Year Project',
        'project-more': 'Click to learn more',
        'project-year': 'Year: ',
        'project-objective': 'Project Objective',
        'project-info': 'Information',

        // Specific Projects
        'project-battleship-title': 'Battleship Project',
        'project-battleship-desc': 'Development of a networked battleship game delivered in 3 versions based on existing C code for client/server, requiring implementation of digital data transmission',
        'project-battleship-info': 'We had to complete this project over several sessions',

        'project-portfolio-title': 'Portfolio',
        'project-portfolio-desc': 'For this project, I created this portfolio to give you a detailed view of my background, skills, and achievements.',
        'project-portfolio-info': 'GitLab was also used for portfolio management',

        'project-integrative-title': 'Integrative Project',
        'project-integrative-desc': 'As part of SAE 2.04, I took charge of the complete deployment of a small business network, configuring information system access for new users. I also implemented a document sharing system on the local network.',
        'project-integrative-info': 'To address the needs of two branch offices, a Windows server, a UNIX server, Windows client workstations, and the Zimbra collaboration suite.',

        'project-cisco-title': 'Equipment Migration Project to CISCO',
        'project-cisco-desc': 'The project involved analyzing the topology of a diagram with Alcatel devices and reproducing the same topology but with Cisco devices using Packet Tracer software.',
        'project-cisco-info': 'We can see the interpretation of these two topologies working in both directions.',

        // Contact section
        'contact-title': 'Contact',
        'contact-text-1': 'Send me an email for any additional information or,',
        'contact-text-2': 'you can also send me a message via my contacts below',

        // Footer
        'footer-copyright': 'Copyright © 2023 Portfolio. All Rights Reserved.'
    }
};

let currentLang = 'fr';

function translatePage() {
    const targetLang = currentLang === 'fr' ? 'en' : 'fr';
    
    // Traduire tous les éléments avec data-translate
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[targetLang][key]) {
            element.textContent = translations[targetLang][key];
        }
    });

    // Mettre à jour le texte du bouton
    const translateBtn = document.getElementById('translate-button');
    if (translateBtn) {
        translateBtn.textContent = targetLang === 'fr' ? 'English' : 'Français';
    }

    currentLang = targetLang;
}

// Initialiser le bouton de traduction
document.addEventListener('DOMContentLoaded', () => {
    const translateBtn = document.getElementById('translate-button');
    if (translateBtn) {
        translateBtn.addEventListener('click', (e) => {
            e.preventDefault();
            translatePage();
        });
    }
});
