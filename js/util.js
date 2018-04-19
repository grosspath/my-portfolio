// toggle mechanism for side nav bar
let domEl = document.querySelector('.side__nav');
domEl.onclick = function(){
  domEl.classList.toggle('nav-open');
};
