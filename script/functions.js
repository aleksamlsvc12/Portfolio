function applyTheme() {
  let body = document.getElementsByTagName('body')[0];
  let container = document.getElementById('container');
  let name = document.getElementById('name');
  let tabs = document.getElementsByClassName('tab');
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
    }

    for(let i = 0; i < tabs.length; i++) {
      tabs[i].style.color = 'white';
    }

    darkThemeButton.classList.add('white-theme');

    github.style.backgroundImage = "url('../icons/github-white.svg')";
    linkedin.style.backgroundImage = "url('../icons/linkedin-white.svg')";
    email.style.backgroundImage = "url('../icons/email-white.svg')";
    
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
    }

    for(let i = 0; i < tabs.length; i++) {
      tabs[i].style.color = 'black';
    }

    darkThemeButton.classList.remove('white-theme');

    github.style.backgroundImage = "url('../icons/github.svg')";
    linkedin.style.backgroundImage = "url('../icons/linkedin.svg')";
    email.style.backgroundImage = "url('../icons/email.svg')";
    
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

function applyLang(){
  let tabs = document.getElementsByClassName('tab');
  
  let title = document.getElementById('title');
  let titleDesc = document.getElementById('title-desc');
  let txtButton = document.getElementById('download');

  let statsBeginner = document.getElementsByClassName('stats-beginner');
  let statsIntermediate = document.getElementsByClassName('stats-intermediate');
  let statsAdvanced = document.getElementsByClassName('stats-advanced');
  let statsCompleted = document.getElementsByClassName('stats-completed');
  let statsDate = document.getElementsByClassName('stats-date');

  let currentLang = localStorage.getItem('lang');
  if(currentLang === 'ser'){
    tabs[0].innerHTML = 'Početna';
    tabs[1].innerHTML = 'Projekti';
    tabs[2].innerHTML = 'O meni';

    if(title)
      title.innerHTML = "Ja sam<span class = 'break-row color'>inženjer elektrotehnike i računarstva<span>"

    if(titleDesc)
      titleDesc.innerHTML = "Ja sam student završne godine Visoke škole elektrotehnike i računarstva,<span class = 'break-row'>smer Računarska tehnika.";

    if(txtButton)
      txtButton.innerHTML = `<img src="../icons/doc.svg" alt="doc"> Preuzmi CV`;

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

    if(statsDate){
      for(let i=0; i<statsDate.length;i++){
        statsDate[0].innerHTML = '8/11/2024';
        statsDate[1].innerHTML = '4/4/2025';
        statsDate[2].innerHTML = '31/3/2025';
        statsDate[3].innerHTML = '9/4/2025';
        statsDate[4].innerHTML = '8/4/2025';
        statsDate[5].innerHTML = '4/4/2025';
        statsDate[6].innerHTML = '2/4/2025';
        statsDate[7].innerHTML = '24/10/2024';
      }
    }

  }else{
    tabs[0].innerHTML = 'Home';
    tabs[1].innerHTML = 'Projects';
    tabs[2].innerHTML = 'About';

    if(title)
      title.innerHTML = "I am an<span class = 'break-row color'>Electrical and Computer Engineer"

    if(titleDesc)
      titleDesc.innerHTML = "I am a final year student of the School of Electrical and Computer Engineering,<span class = 'break-row'>majoring in Computer Engineering.";
  
    if(txtButton)
      txtButton.innerHTML = `<img src="../icons/doc.svg" alt="doc"> Download CV`;
  
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

    if(statsDate){
      for(let i=0;i<statsDate.length;i++){
        statsDate[0].innerHTML = changeDate('8/11/2024');
        statsDate[1].innerHTML = changeDate('4/4/2025');
        statsDate[2].innerHTML = changeDate('31/3/2025');
        statsDate[3].innerHTML = changeDate('9/4/2025');
        statsDate[4].innerHTML = changeDate('8/4/2025');
        statsDate[5].innerHTML = changeDate('4/4/2025');
        statsDate[6].innerHTML = changeDate('2/4/2025');
        statsDate[7].innerHTML = changeDate('24/10/2024');
      }
    }
  }
}

function changeDate(date){
  const [d,m,y] = date.split('/');
  return `${m}/${d}/${y}`;
}