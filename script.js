 // variable for menuknap og menu
 var menu = document.querySelector(".menu")
 var menuknap = document.querySelector(".menuknap")

 window.addEventListener("load", sidenVises);

 function sidenVises() {
     console.log("sidenVises");
 }


 // ved klik på menuknap --> toggleMenuKnap
 menuknap.addEventListener("click", toggleMenuKnap)

 // vis menuen --> (trasnlateX(0%)) aktiveres
 function toggleMenuKnap() {
     console.log("toggleMenuKnap");
     menu.classList.toggle("menuknap_aktiv")
 }
