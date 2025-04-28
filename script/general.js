window.onload = function(){
  if (!localStorage.getItem('theme')) {
    localStorage.setItem('theme', 'whiteTheme');
  }
  applyTheme();

  if (!localStorage.getItem('lang')) {
    localStorage.setItem('lang', 'ser');
  }
  applyLang();
}

document.addEventListener("DOMContentLoaded", function() {
  applyTheme();
  applyLang();
  document.body.style.display = 'flex';
});