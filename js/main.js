let dark= document.getElementById("dark-mode");
let darkProject=document.getElementsByClassName("project__text");

console.log(darkProject)


function start(){

}

    
    let titulo=document.querySelector(".hero__title");
    let strText= titulo.textContent;
 
    let letras=strText.split("");
    titulo.textContent="";


    for (let i = 0; i < letras.length; i++) {
        titulo.innerHTML+= ` <span>${letras[i]}</span> ` 
       }
   
   
   let char=0;
   let timer= setInterval(on,100);
   
   function on(){
       const spans=titulo.querySelectorAll('span')[char];
       spans.classList.add("fading");
       char++;
       if(char === letras.length){
           complete();
           return;
       }
   }
   
   function complete(){
       clearInterval(timer);
       timer=null;
       
   }
   





dark.addEventListener("click" ,()=>{
   
document.body.style.backgroundColor="#18191A";
document.body.style.color="white";

for (let i = 0; i < darkProject.length; i++) {
    darkProject[i].style.backgroundColor="#18191A";
    
}

})







