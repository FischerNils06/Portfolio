// Darkmode
const darkmode_btn = document.querySelector("#darkmode-btn");
darkmode_btn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        darkmode_btn.innerHTML = '☀';
    }
    else {
        darkmode_btn.innerHTML = '☾';
    }
});

// Caluclate age
const nameage = document.querySelector("#nameage");

const currentdate = new Date();
const currentyear = currentdate.getFullYear();
const currentmonth = currentdate.getMonth() + 1;
const currentday = currentdate.getDate();
const currenthour = currentdate.getHours();
const currentminute = currentdate.getMinutes();
const currentsecond = currentdate.getSeconds();
const currentage = currentyear - 2006
nameage.innerHTML = `Mein Name ist Nils Fischer und ich bin ${currentage} Jahre alt. Im Moment besuche ich die IMS an der Kantonsschule Hottingen und am Bildungszentrum Zürichsee in Horgen.`;
if (currentmonth == 1 && 22 <= currentday >= 1 ) {
    currentage = currentyear - 2007;
    nameage.innerHTML = `Mein Name ist Nils Fischer und ich bin ${currentage} Jahre alt. Im Moment besuche ich die IMS an der Kantonsschule Hottingen und am Bildungszentrum Zürichsee in Horgen.`;
   
}

// Breite Screen

const language = document.querySelector("#language");

const german = document.querySelector("#german");
const english = document.querySelector("#english");
const french = document.querySelector("#french");

function languagesize() {
    if (window.innerWidth < 450) {
        german.innerHTML = 'D';
        english.innerHTML = 'E';
        french.innerHTML = 'F';
    } else if (window.innerWidth < 600) {
        german.innerHTML = 'DE';
        english.innerHTML = 'EN';
        french.innerHTML = 'FR';
    }  else {
        german.innerHTML = 'Deutsch';
        english.innerHTML = 'English';
        french.innerHTML = 'Français';
    }
}

window.addEventListener('resize', languagesize);
window.addEventListener('load', languagesize);



// Sprachen





language.addEventListener('change', () => {
    const selectedValue = language.options[language.selectedIndex].value;
    const languagetitle = document.getElementById("languagetitle");
    const td1 = document.getElementById("td1");
    const td2 = document.getElementById("td2");
    const td3 = document.getElementById("td3");
    const td4 = document.getElementById("td4");
    const td5 = document.getElementById("td5");
    const td6 = document.getElementById("td6");
    const kub = document.getElementById("kub");
    const doc = document.getElementById("doc");
    const nintendosite = document.getElementById("nintendosite");
    const whiteboard = document.getElementById("whiteboard");
    const jumpnrun = document.getElementById("jumpnrun");
    const quickpacman = document.getElementById("quickpacman");
    const telephone = document.getElementById("telephone");
    const button = document.getElementById("button");
    const exe = document.getElementById("exe");
    const myprojectst = document.getElementById("myprojectst");
    const contactt = document.getElementById("contactt");
    const programmingt = document.getElementById("programmingt");
    const titlelink = document.getElementById("titlelink");
    const projectlink = document.getElementById("projectlink");
    const contactlink = document.getElementById("contactlink");

    if (selectedValue == "german") {
        nameage.innerHTML = `Mein Name ist Nils Fischer und ich bin ${currentage} Jahre alt. Im Moment besuche ich die IMS an der Kantonsschule Hottingen und am Bildungszentrum Zürichsee in Horgen.`;
        languagetitle.innerHTML = 'Sprache';
        td1.innerHTML = 'Deutsch';
        td2.innerHTML = 'Muttersprache';
        td3.innerHTML = 'Englisch';
        td4.innerHTML = 'Niveau B2 in Vorbereitung auf Cambridge Advanced (C1)';
        td5.innerHTML = 'Französisch';
        td6.innerHTML = 'Niveau B1';
        kub.innerHTML = 'Kubernetes (Konsole)';
        doc.innerHTML = 'Docker (Konsole)';
        nintendosite.innerHTML = 'Die Nintendo Webseite wurde als Schulprojekt im Fach Projekte Wirtschaft und Recht programmiert.';
        whiteboard.innerHTML = 'Das Whiteboard ist ein fortlaufendes Projekt, zu dem immer mehr funktionen dazukommen. Es kommen alle paar Wochen neue Funktionen dazu oder werden überarbeitet.';
        jumpnrun.innerHTML = 'Das angefangene Jump-n-Run-Game ist immernoch in bearbeitung. Das Ziel ist das Spiel Richtig Spielen zu können und dass es die Highscores per Backend in einer DB speichert.';
        quickpacman.innerHTML = 'Quick-Pac-Man ist mit pygame programmiert und mein neustes Projekt. Es wurde in den Sommerferien programmiert.';
        telephone.innerHTML = 'Telefon: +41 76 471 15 66';
        button.innerHTML = 'E-Mail Senden';
        exe.innerHTML = 'Das exe-file ist unter Release im File game.zip';
        myprojectst.innerHTML = 'Meine Projekte';
        contactt.innerHTML = 'Kontakt';
        programmingt.innerHTML = 'IT - Fähigkeiten';
        titlelink.innerHTML = 'Startseite';
        projectlink.innerHTML = 'Projekte';
        contactlink.innerHTML = 'Kontakt';

    } else if (selectedValue == "english") {
        nameage.innerHTML = `My name is Nils Fischer and I am ${currentage} years old. I currently attend the IMS at the Kantonsschule Hottingen and at the Bildungszentrum Zürichsee in Horgen.`;
        languagetitle.innerHTML = 'Language'; 
        td1.innerHTML = 'German';
        td2.innerHTML = 'Native language';
        td3.innerHTML = 'English';
        td4.innerHTML = 'Level B2 in preparation for Cambridge Advanced (C1)';
        td5.innerHTML = 'French';
        td6.innerHTML = 'Level B1';
        kub.innerHTML = 'Kubernetes (Console)';
        doc.innerHTML = 'Docker (Console)';
        nintendosite.innerHTML = 'The Nintendo website was programmed as a school project in the subject Projects in Economics and Law.';
        whiteboard.innerHTML = 'The Whiteboard is an ongoing project, to which more and more functions are added. New functions are added or revised every few weeks.';
        jumpnrun.innerHTML = 'The started Jump-n-Run-Game is still in progress. The goal is to play the game correctly and to save the highscores via backend in a DB.';
        quickpacman.innerHTML = 'Quick-Pac-Man is programmed with pygame and my newest project. It was programmed during the summer holidays. '
        telephone.innerHTML = 'Phone: +41 76 471 15 66';
        button.innerHTML = 'Send E-Mail';
        exe.innerHTML = 'The exe-file is under Release in the file game.zip';
        myprojectst.innerHTML = 'My Projects';
        contactt.innerHTML = 'Contact';
        programmingt.innerHTML = 'IT - Skills';
        titlelink.innerHTML = 'Home';
        projectlink.innerHTML = 'Projects';
        contactlink.innerHTML = 'Contact';

    } else if (selectedValue == "french") {
        nameage.innerHTML = `Je m'appelle Nils Fischer et j'ai ${currentage} ans. Je fréquente actuellement l'IMS au Kantonsschule Hottingen et au Bildungszentrum Zürichsee à Horgen.`;
        languagetitle.innerHTML = 'Langue';
        td1.innerHTML = 'Allemand';
        td2.innerHTML = 'Langue maternelle';
        td3.innerHTML = 'Anglais';
        td4.innerHTML = 'Niveau B2 en préparation pour Cambridge Advanced (C1)';
        td5.innerHTML = 'Français';
        td6.innerHTML = 'Niveau B1';
        kub.innerHTML = 'Kubernetes (Console)';
        doc.innerHTML = 'Docker (Console)';
        nintendosite.innerHTML = 'Le site Nintendo a été programmé comme projet scolaire dans le cadre du cours Projets en économie et droit.';
        whiteboard.innerHTML = 'Le Whiteboard est un projet en cours, auquel de plus en plus de fonctions sont ajoutées. De nouvelles fonctions sont ajoutées ou révisées toutes les quelques semaines.';
        jumpnrun.innerHTML = 'Le jeu Jump-n-Run a commencé et est toujours en cours. Le but est de jouer correctement au jeu et de sauvegarder les meilleurs scores via backend dans une DB.';
        quickpacman.innerHTML = 'Quick-Pac-Man est programmé avec pygame et mon nouveau projet. Il a été programmé pendant les vacances d\'été.';
        telephone.innerHTML = 'Téléphone: +41 76 471 15 66';
        button.innerHTML = 'Envoyer un E-Mail';
        exe.innerHTML = 'Le fichier exe se trouve sous Release dans le fichier game.zip';
        myprojectst.innerHTML = 'Mes Projets';
        contactt.innerHTML = 'Contact';
        programmingt.innerHTML = 'Compétences en informatique';
        titlelink.innerHTML = 'Page d\'accueil';
        projectlink.innerHTML = 'Projets';
        contactlink.innerHTML = 'Contact';

    }
    
    

});

