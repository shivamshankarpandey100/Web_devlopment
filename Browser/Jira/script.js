const addBtn=document.querySelector(".add-btn");
const modalCont=document.querySelector(".modal-cont");

let addModal=false;
addBtn.addEventListener('click',function(){
    if(!addModal){
    modalCont.style.display="flex";
    addModal=!addModal;
    }
    else{
        modalCont.style.display="none";
        addModal=!addModal;
    }
})