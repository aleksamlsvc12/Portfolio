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