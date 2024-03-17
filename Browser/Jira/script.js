const addBtn=document.querySelector(".add-btn");
const modalCont=document.querySelector(".modal-cont");

let isModalpresent=false;
addBtn.addEventListener('click',function(){
    if(!isModalpresent){
    modalCont.style.display="flex";
    
    }
    else{
        modalCont.style.display="none";
        
    }
    isModalpresent=!isModalpresent;
})

const allPriorityColors=document.querySelectorAll(".priority-color");
allPriorityColors.forEach(function(colorElement){
    colorElement.addEventListener('click',function(){
        allPriorityColors.forEach(function(priorityColorElem){
            priorityColorElem.classList.remove("active");
        });
        colorElement.classList.add("active");
    });
});