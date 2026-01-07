// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
  anchor.addEventListener('click',function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({behavior:'smooth'});
  });
});

// Header shrink on scroll
const header=document.querySelector('.header');
window.addEventListener('scroll',()=>{
  if(window.scrollY>50){header.style.padding='10px 20px';header.style.boxShadow='0 2px 12px rgba(0,0,0,0.2)';}
  else{header.style.padding='15px 20px';header.style.boxShadow='0 2px 8px rgba(0,0,0,0.1)';}
});
