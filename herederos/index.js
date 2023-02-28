let menu = document.querySelector(".menu");
const btnLine1 = document.getElementById("l1");
const btnLine2 = document.getElementById("l2"); 
const btnLine3 = document.getElementById("l3");
const $firstEvent = document.querySelector(".first-event");
const $secondtEvent = document.querySelector(".second-event");
const $thirdEvent = document.querySelector(".third-event");
const btnform = document.querySelector(".btn-form");
let $input = document.querySelector(".msg");
document.addEventListener('click', e => {
   if(e.target.matches("* #btn")){
      menu.classList.toggle('active');
      btnLine1.classList.toggle("activeL1");
      btnLine2.classList.toggle("activeL2");
      btnLine3.classList.toggle("activeL3");
   }
   if(e.target.matches(".btn-form")){
    btnform.setAttribute("href", `https://wa.me/50496027464?text=${$input. value}`);   
   }
});
function load(entradas,obser) {
   entradas.forEach(el => {
      if(el.isIntersecting){
         el.target.classList.add("entrada");
      }else{
         el.target.classList.remove("entrada");
      }
   })
   
}
const obser = new IntersectionObserver(load,{
   root:null,
   rootMargin: "0px 0px 0px 0px",
   threshold: 1.0
});
let objetos = [
   $firstEvent,
   $secondtEvent,
   $thirdEvent
];
objetos.forEach(el => {
   obser.observe(el)
});

// let $eventTittle = document.getElementById("event_tittle");
// let $eventInfo = document.getElementById("event_info");


// document.addEventListener('click', e => {
//    if(e.target.matches("#btn")){
//       menu.classList.toggle("active");
//       // btnLine1.classList.toggle("activeL1");
//       // btnLine2.classList.toggle("activeL2");
//       // btnLine3.classList.toggle("activeL3");
//    }
//    if($input.value=== "H"){
//    btnform.removeAttribute("href");
//    alert("no puede enviar un mensaje vacio")
//    }else{
//       btnform.setAttribute("href", `https://wa.me/50496027464?text=${$input. value}`);
//       $input.value="";
//    }
// });

