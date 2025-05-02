function applyTheme() {
  let body = document.getElementsByTagName('body')[0];
  let container = document.getElementById('container');
  let name = document.getElementById('name');
  let tabs = document.getElementsByClassName('tab');
  let langButton = document.getElementsByClassName('lang')[0];
  let darkThemeButton = document.getElementsByClassName('dark-theme')[0];
  let github = document.getElementsByClassName('github')[0];
  let linkedin = document.getElementsByClassName('linkedin')[0];
  let email = document.getElementsByClassName('email')[0];

  let title = document.getElementById('title');
  let titleDesc = document.getElementById('title-desc');
  let profile = document.getElementById('profile');

  let project = document.getElementsByClassName('project');
  let projectHeader = document.getElementsByClassName('project-header');

  let aboutDivs = document.getElementsByClassName('about-divs');
  let headerAbout = document.getElementsByClassName('header-about');
  let progressBar = document.getElementsByClassName('progress-bar');

  let currentTheme = localStorage.getItem('theme');

  if (currentTheme === 'darkTheme') {
    body.style.backgroundColor = 'black';
    container.style.backgroundColor = 'rgb(20, 20, 20)';
    name.style.color = 'white';

    for(let i=0;i<tabs.length;i++){
      tabs[i].classList.add('darkTab');
      tabs[i].style.color = 'white';
    }

    langButton.classList.add('lang-white');
    darkThemeButton.classList.add('white-theme');

    github.style.backgroundImage = "url('icons/github-white.svg')";
    linkedin.style.backgroundImage = "url('icons/linkedin-white.svg')";
    email.style.backgroundImage = "url('icons/email-white.svg')";
    
    if(title) 
      title.style.color = 'white';

    if(titleDesc) 
      titleDesc.style.color = 'white';

    if(profile) 
      profile.style.boxShadow = '10px 10px 10px 4px rgba(255, 255, 255, 0.1)';
    
    if(project && projectHeader){
      for(let i = 0; i < project.length; i++) {
        project[i].style.boxShadow = '0 0 10px 2px rgba(255, 255, 255, 0.1)';
        projectHeader[i].style.color = 'white';
      }
    }

    if(aboutDivs && headerAbout && progressBar){
      for(let i = 0; i < aboutDivs.length; i++) {
        aboutDivs[i].style.boxShadow = '0 0 10px 2px rgba(255, 255, 255, 0.1)';
        headerAbout[i].style.color = 'white';
      }
      for(let i = 0; i < progressBar.length; i++) {
        progressBar[i].style.boxShadow = '0 0 10px 2px rgba(255, 255, 255, 0.1)';
      }
    }
  }else{
    body.style.backgroundColor = 'lightgray';
    container.style.backgroundColor = 'white';
    name.style.color = 'black';

    for(let i=0;i<tabs.length;i++){
      tabs[i].classList.remove('darkTab');
      tabs[i].style.color = 'black';
    }

    langButton.classList.remove('lang-white');
    darkThemeButton.classList.remove('white-theme');

    github.style.backgroundImage = "url('icons/github.svg')";
    linkedin.style.backgroundImage = "url('icons/linkedin.svg')";
    email.style.backgroundImage = "url('icons/email.svg')";
    
    if(title) 
      title.style.color = 'black';

    if(titleDesc) 
      titleDesc.style.color = 'black';

    if(profile) 
      profile.style.boxShadow = '10px 10px 10px 4px rgba(0, 0, 0, 0.1)';
    
    if(project && projectHeader){
      for(let i = 0; i < project.length; i++) {
        project[i].style.boxShadow = '0 0 10px 2px rgba(0, 0, 0, 0.1)';
        projectHeader[i].style.color = 'black';
      }
    }

    if(aboutDivs && headerAbout && progressBar){
      for(let i = 0; i < aboutDivs.length; i++) {
        aboutDivs[i].style.boxShadow = '0 0 10px 2px rgba(0, 0, 0, 0.1)';
        headerAbout[i].style.color = 'black';
      }
      for(let i = 0; i < progressBar.length; i++) {
        progressBar[i].style.boxShadow = '0 0 10px 2px rgba(0, 0, 0, 0.1)';
      }
    }
  }
}



function applyLang(){
  let tabs = document.getElementsByClassName('tab');
  
  let title = document.getElementById('title');
  let titleDesc = document.getElementById('title-desc');
  let txtButton = document.getElementById('download');
  let downloadLink = document.getElementsByClassName('download-link')[0];

  let statsBeginner = document.getElementsByClassName('stats-beginner');
  let statsIntermediate = document.getElementsByClassName('stats-intermediate');
  let statsAdvanced = document.getElementsByClassName('stats-advanced');
  let statsCompleted = document.getElementsByClassName('stats-completed');
  let statsDate = document.getElementsByClassName('stats-date');

  let headerAbout = document.getElementsByClassName('header-about');
  let txtAbout = document.getElementsByClassName('txt-about');
  let eduHeader = document.getElementsByClassName('edu-header');
  let eduDesc = document.getElementsByClassName('edu-desc');
  let skill = document.getElementsByClassName('skill');

  let currentLang = localStorage.getItem('lang');
  if(currentLang === 'ser'){
    tabs[0].innerHTML = 'Početna';
    tabs[1].innerHTML = 'Projekti';
    tabs[2].innerHTML = 'O meni';

    if(title)
      title.innerHTML = "Ja sam<span class = 'break-row color'>inženjer elektrotehnike i računarstva<span>"

    if(titleDesc)
      titleDesc.innerHTML = "Ja sam student završne godine Visoke škole elektrotehnike i računarstva, <span class = 'break-row'>smer Računarska tehnika.";

    if(txtButton)
      txtButton.innerHTML = `<img src="icons/doc.svg" alt="doc"> Preuzmi CV`;

    if(downloadLink){
      downloadLink.href = 'docs/cv-aleksa-milosevic-serbian.pdf';
    }

    if(statsBeginner){
      for(let i=0;i<statsBeginner.length;i++){
        statsBeginner[i].innerHTML = 'Početni nivo';
      }
    }

    if(statsIntermediate){
      for(let i=0;i<statsIntermediate.length;i++){
        statsIntermediate[i].innerHTML = 'Srednji nivo';
      }
    }

    if(statsAdvanced){
      for(let i=0;i<statsAdvanced.length;i++){
        statsAdvanced[i].innerHTML = 'Napredni nivo';
      }
    }

    if(statsCompleted){
      for(let i=0;i<statsCompleted.length;i++){
        statsCompleted[i].innerHTML = 'Završeno';
      }
    }

    if(statsDate.length>0){
        statsDate[0].innerHTML = '8/11/2024';
        statsDate[1].innerHTML = '4/4/2025';
        statsDate[2].innerHTML = '31/3/2025';
        statsDate[3].innerHTML = '9/4/2025';
        statsDate[4].innerHTML = '8/4/2025';
        statsDate[5].innerHTML = '4/4/2025';
        statsDate[6].innerHTML = '2/4/2025';
        statsDate[7].innerHTML = '24/10/2024';
    }

    if(headerAbout.length>0){
        headerAbout[0].innerHTML = 'O MENI';
        headerAbout[1].innerHTML = 'OBRAZOVANJE';
        headerAbout[2].innerHTML = 'VEŠTINE';
    }

    if(txtAbout.length>0){
      txtAbout[0].innerHTML = 'Zdravo, moje ime je Aleksa Milošević. Rođen sam 2004. godine i dolazim iz Mladenovca, grada blizu Beograda, Srbija. <span class="break-row margin">Strastven sam u vezi za web razvojem, posebno sa frontend tehnologijama poput HTML-a, CSS-a i JavaScript-a. Uživam u kreiranju čistih, korisnički prijateljskih interfejsa i stalnom unapređivanju svojih veština kroz lične projekte i kontinuirano učenje.</span><span class="break-row margin">Pored programiranja, aktivan sam član Akademskog kulturno-umetničkog društva „Branko Krsmanović“ i imam iskustva u radu sa decom. Odgovoran sam, prilagodljiv i jako motivisan rešavanjem problema i postizanjem značajnih ciljeva.</span>';
    }

    if(eduHeader.length>0){
      eduHeader[0].innerHTML = 'VISOKA ŠKOLA ELEKTROTEHNIKE I RAČUNARSTVA';
      eduHeader[1].innerHTML = 'TEHNIČKA ŠKOLA MLADENOVAC'
    }

    if(eduDesc.length>0){
      eduDesc[0].innerHTML = 'Računarska tehnika | Beograd | 2022 - trenutno';
      eduDesc[1].innerHTML = 'Elektrotehničar informacionih tehnologija | Mladenovac | 2018 - 2022';
    }

    if(skill.length>0){
      skill[0].innerHTML = 'Osnovne web tehnologije';
      skill[1].innerHTML = 'Kontrola verzija';
      skill[2].innerHTML = 'Baze podataka';
    }

  }else{
    tabs[0].innerHTML = 'Home';
    tabs[1].innerHTML = 'Projects';
    tabs[2].innerHTML = 'About';

    if(title)
      title.innerHTML = "I am an<span class = 'break-row color'>Electrical and Computer Engineer"

    if(titleDesc)
      titleDesc.innerHTML = "I am a final year student of the School of Electrical and Computer Engineering, <span class = 'break-row'>majoring in Computer Engineering.";
  
    if(txtButton)
      txtButton.innerHTML = `<img src="icons/doc.svg" alt="doc"> Download CV`;
  
    if(downloadLink){
      downloadLink.href = 'docs/cv-aleksa-milosevic-english.pdf';
    }

    if(statsBeginner){
      for(let i=0;i<statsBeginner.length;i++){
        statsBeginner[i].innerHTML = 'Beginner';
      }
    }

    if(statsIntermediate){
      for(let i=0;i<statsIntermediate.length;i++){
        statsIntermediate[i].innerHTML = 'Intermediate';
      }
    }

    if(statsAdvanced){
      for(let i=0;i<statsAdvanced.length;i++){
        statsAdvanced[i].innerHTML = 'Advanced';
      }
    }

    if(statsCompleted){
      for(let i=0;i<statsCompleted.length;i++){
        statsCompleted[i].innerHTML = 'Completed';
      }
    }

    if(statsDate.length>0){
        statsDate[0].innerHTML = changeDate('8/11/2024');
        statsDate[1].innerHTML = changeDate('4/4/2025');
        statsDate[2].innerHTML = changeDate('31/3/2025');
        statsDate[3].innerHTML = changeDate('9/4/2025');
        statsDate[4].innerHTML = changeDate('8/4/2025');
        statsDate[5].innerHTML = changeDate('4/4/2025');
        statsDate[6].innerHTML = changeDate('2/4/2025');
        statsDate[7].innerHTML = changeDate('24/10/2024');
    }

    if(headerAbout.length>0){
        headerAbout[0].innerHTML = 'ABOUT';
        headerAbout[1].innerHTML = 'EDUCATION';
        headerAbout[2].innerHTML = 'SKILLS';
    }

    if(txtAbout.length>0){
      txtAbout[0].innerHTML = "Hi, my name is Aleksa Milosevic. I was born in 2004 and I'm from Mladenovac, a city near Belgrade, Serbia. <span class='break-row margin'>I'm passionate about web development, especially frontend technologies like HTML, CSS, and JavaScript. I enjoy creating clean, user-friendly interfaces and constantly improving my skills through personal projects and continuous learning.</span><span class='break-row margin'>Aside from programming, I'm an active member of the Academic Cultural and Artistic Society “Branko Krsmanović” and have experience working with children. I'm responsible, adaptable, and highly motivated by problem-solving and achieving meaningful goals.</span>";
    }

    if(eduHeader.length>0){
      eduHeader[0].innerHTML = 'SCHOOL OF ELECTRICAL AND COMPUTER ENGINEERING';
      eduHeader[1].innerHTML = 'TECHNICAL SCHOOL MLADENOVAC'
    }

    if(eduDesc.length>0){
      eduDesc[0].innerHTML = 'Computer Engineering | Belgrade | 2022 - present';
      eduDesc[1].innerHTML = 'Electrical Technician in Information Technology | Mladenovac | 2018 - 2022';
    }

    if(skill.length>0){
      skill[0].innerHTML = 'Web Core Technologies';
      skill[1].innerHTML = 'Version Control';
      skill[2].innerHTML = 'Databases';
    }
  }
}

function changeDate(date){
  const [d,m,y] = date.split('/');
  return `${m}/${d}/${y}`;
}



function darkTheme(){
  if(localStorage.getItem('theme') === 'whiteTheme'){
    localStorage.setItem('theme','darkTheme');
  }else{
    localStorage.setItem('theme','whiteTheme');
  }
  applyTheme();
}



function changeLang(){
  if(localStorage.getItem('lang') === 'ser'){
    localStorage.setItem('lang','eng');
  }else{
    localStorage.setItem('lang','ser');
  }
  applyLang();
}



function link(site) {
  const sites = {
    'YouTube': 'https://aleksamlsvc12.github.io/Youtube/',
    'To-Do List': 'https://aleksamlsvc12.github.io/To-Do-List/',
    'Reveal Cards': 'https://aleksamlsvc12.github.io/Reveal-Cards/',
    'Profile Card': 'https://aleksamlsvc12.github.io/Profile-Card/',
    'Pagination': 'https://aleksamlsvc12.github.io/Pagination/',
    'Foto Gallery': 'https://aleksamlsvc12.github.io/Foto-Gallery/',
    'Form Validation': 'https://aleksamlsvc12.github.io/Form-Validation/',
    'Calculator': 'https://aleksamlsvc12.github.io/Calculator/'
  };

  if (sites[site]) {
    window.location.href = sites[site];
  }
}