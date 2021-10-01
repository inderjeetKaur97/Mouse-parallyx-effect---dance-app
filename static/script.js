
var mainSection=document.querySelector("#main-section");
localStorage.setItem('mainsection',mainSection.innerHTML);
var newMainSection= localStorage.getItem('newMainSection')
// var parser = new DOMParser();
// var doc = parser.parseFromString(newMainSection, 'text/html');
// var sonu = doc.body
// console.log("hello" + sonu)
if(window.location.pathname=="/contact-submit")
{
  var display = document.querySelector(".displaySuccess")
 document.querySelector(".displaySuccess").style.display="block";
}
closeBtn = document.querySelector(".close")
closeBtn.addEventListener("click",()=>{
  location.href='/'
})

document.addEventListener('mousemove',parallyx);
document.addEventListener('mousemove',parallyxbckcircle);
document.addEventListener('mousemove',parallyxfrntcircle);
document.addEventListener('mousemove',parallyxcrcircle);
function parallyx(e){
  document.querySelectorAll('.object').forEach(function(move){
    var moving_value = move.getAttribute('data-value')
    var x= (e.clientX * moving_value)/150;
    var y= (e.clientY * moving_value)/150;
    move.style.transform= `translate( ${x}px,${y}px )`
   
  })
}
function parallyxbckcircle(e){
  document.querySelectorAll('.bckcircle').forEach(function(move){
    var moving_value = move.getAttribute('data-value')
    var x= (e.clientX * moving_value)/1000;
    var y= (e.clientY * moving_value)/1000;
    move.style.transform= `translate( ${x}px,${y}px )`
   
  })
}
function parallyxfrntcircle(e){
  document.querySelectorAll('.frntcircle').forEach(function(move){
    var moving_value = move.getAttribute('data-value')
    var x= (e.clientX * moving_value)/800;
    var y= (e.clientY * moving_value)/800;
    move.style.transform= `translate( ${x}px,${y}px )`
   
  })
}
function parallyxcrcircle(e){
  document.querySelectorAll('.crcircle').forEach(function(move){
    var moving_value = move.getAttribute('data-value')
    var x= (e.clientX * moving_value)/800;
    var y= (e.clientY * moving_value)/800;
    move.style.transform= `translate( ${x}px,${y}px )`
   
  })
}

