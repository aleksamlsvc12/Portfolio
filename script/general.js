window.onload = function(){
  if (!localStorage.getItem('theme')) {
    localStorage.setItem('theme', 'whiteTheme');
  }
  applyTheme();
}

document.addEventListener("DOMContentLoaded", function() {
  applyTheme();
  document.body.style.display = 'flex';
});



