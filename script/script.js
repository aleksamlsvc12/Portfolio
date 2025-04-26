function darkTheme(){
  let body = document.getElementsByTagName('body')[0];

  let container = document.getElementById('container');
  let name = document.getElementById('name');
  let tabs = document.getElementsByClassName('tab');
  let title = document.getElementById('title');
  let titleDesc = document.getElementById('title-desc');
  let profile = document.getElementById('profile');

  let project = document.getElementsByClassName('project');
  let projectHeader = document.getElementsByClassName('project-header');

  let aboutDivs = document.getElementsByClassName('about-divs');
  let headerAbout = document.getElementsByClassName('header-about');
  let progressBar = document.getElementsByClassName('progress-bar');

  body.style.backgroundColor = 'black';

  if(title){
    title.style.color = 'white';
  }

  if(titleDesc){
    titleDesc.style.color = 'white';
  }

  if(profile){
    profile.style.boxShadow = '10px 10px 10px 4px rgba(255, 255, 255, 0.1)';
  }

  container.style.backgroundColor = 'rgb(20, 20, 20)';
  name.style.color = 'white';
  
  for(let i = 0; i<tabs.length;i++){
    tabs[i].style.color = 'white';
  }

  if(project){
    for(let i = 0; i<project.length;i++){
      project[i].style.boxShadow = '0 0 10px 2px rgba(255, 255, 255, 0.1)';
      projectHeader[i].style.color = 'white';
    }
  }

  if(aboutDivs){
    for(let i = 0; i<aboutDivs.length;i++){
      aboutDivs[i].style.boxShadow = '0 0 10px 2px rgba(255, 255, 255, 0.1)';
      headerAbout[i].style.color = 'white';
    }

    for(let i=0;i<progressBar.length;i++){
      progressBar[i].style.boxShadow = '0 0 10px 2px rgba(255, 255, 255, 0.1)';
    }
  }
}