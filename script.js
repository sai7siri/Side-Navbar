const menu=document.querySelector(".menu");

const sideBar=document.querySelector(".sidebar");

const body =document.querySelector("body");

menu.addEventListener('click', ()=>{
   sideBar.classList.add("showView");
   body.style.backgroundColor="skyblue";

});


document.addEventListener('mouseup', (e)=>{

   if(!sideBar.contains(e.target)){
      sideBar.classList.remove("showView");
      body.style.backgroundColor="white";

   }
   

});