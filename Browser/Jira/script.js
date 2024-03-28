const addBtn=document.querySelector(".add-btn");
const modalCont=document.querySelector(".modal-cont");
let colors=["lightpink","lightgreen","lightblue","black"];
let modalPriorityColor=colors[colors.length-1];//black
const allPriorityColors = document.querySelectorAll(".priority-color");
let textAreaCont = document.querySelector(".textarea-cont");

const mainCont=document.querySelector(".main-cont");

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


allPriorityColors.forEach(function(colorElement){
    colorElement.addEventListener("click",function(){
        allPriorityColors.forEach(function(priorityColorElem){
            priorityColorElem.classList.remove("active");
        });
        colorElement.classList.add("active");
        modalPriorityColor=colorElement.classList[0];
    });
});


modalCont.addEventListener("keydown",function(e){
    let key=e.key;
    if(key=="Shift"){
        console.log(modalPriorityColor);
        console.log(textAreaCont.value);
        createTicket(modalPriorityColor,textAreaCont.value);

        modalCont.style.display="none";
        isModalpresent=false;
    }
});

function createTicket(ticketColor, data){
    let ticketCont=document.createElement("div");//<div></div>
    ticketCont.setAttribute("class","ticket-cont");
    ticketCont.innerHTML=` 
    <div class="ticket-color ${ticketColor}"></div>
    <div class="ticket-id"></div>
    <div class="task-area">${data}</div>
    `;


    mainCont.appendChild(ticketCont);
    
}