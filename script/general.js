window.onload = function(){
  document.body.style.display = 'flex';

  applyTheme();
  applyLang();

  if (!localStorage.getItem('theme')) {
    localStorage.setItem('theme', 'whiteTheme');
  }
  
  if (!localStorage.getItem('lang')) {
    localStorage.setItem('lang', 'ser');
  }
  
  let contact = document.getElementsByClassName('contact');
  let desc = document.getElementById('desc');
  let project = document.getElementsByClassName('project');
  let aboutDivs = document.getElementsByClassName('about-divs');

  for(let i=0;i<contact.length;i++){
    contact[i].classList.add('block-click');
    contact[i].addEventListener('animationend',()=>{
      contact[i].classList.remove('block-click');
    });
  }

  if(desc){
    desc.classList.add('block-click');
    desc.addEventListener('animationend', ()=>{
      desc.classList.remove('block-click');
    });
  }

  
  for(let i=0;i<project.length;i++){
    project[i].classList.add('block-click');
    project[i].addEventListener('animationend',()=>{
      project[i].classList.remove('block-click');
    });
  }
  

  if(aboutDivs[1]){
    aboutDivs[1].classList.add('block-click');
    aboutDivs[1].addEventListener('animationend',()=>{
      aboutDivs[1].classList.remove('block-click');
    });
  }
}

