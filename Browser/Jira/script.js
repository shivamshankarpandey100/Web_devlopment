// var uid = new ShortUniqueId();
const uid = new ShortUniqueId({ length: 10 });
const addBtn=document.querySelector(".add-btn");
const modalCont=document.querySelector(".modal-cont");
let colors=["lightpink","lightgreen","lightblue","black"];
let modalPriorityColor=colors[colors.length-1];//black
const allPriorityColors = document.querySelectorAll(".priority-color");
let textAreaCont = document.querySelector(".textarea-cont");
const mainCont=document.querySelector(".main-cont");
let ticketsArr=[];
let toolboxColors=document.querySelectorAll(".color ");

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
        textAreaCont.value="";
        allPriorityColors.forEach(function(colorElem){
            colorElem.classList.remove("active");
        });
        
    }
});

function createTicket(ticketColor, data ,ticketId){
    let id=ticketId || uid.rnd() ;//uid.rnd gives the random tickets Id which length is 10
    let ticketCont=document.createElement("div");//<div></div>
    ticketCont.setAttribute("class","ticket-cont");
    ticketCont.innerHTML=` 
    <div class="ticket-color ${ticketColor}"></div>
    <div class="ticket-id">${id}</div>
    <div class="task-area">${data}</div>
    `;


    mainCont.appendChild(ticketCont);

    //if ticket is being created for the first time, then ticketId would be undefinrd
    if(!ticketId){
    ticketsArr.push(
        {
            ticketColor,
            data,
            ticketId: id
        }
    );
    localStorage.setItem("tickets",JSON.stringify(ticketsArr));
    }
    
}

if(localStorage.getItem("tickets")){
    ticketsArr=JSON.parse(localStorage.getItem("tickets"));
    ticketsArr.forEach(function(ticketObj){
        createTicket(ticketObj.ticketColor, ticketObj.data,ticketObj.ticketId);
    })
}

for(let i=0;i<toolboxColors.length;i++){
    toolboxColors[i].addEventListener("click",function(){
        let currToolBoxcolor=toolboxColors[i].classList[0];

        let filterdTickets=ticketsArr.filter(function(ticketObj){
            if(currToolBoxcolor==ticketObj.ticketColor) return ticketObj;
            // return currToolBoxcolor=ticketObj.ticketColor;
        });

        let allTickets=document.querySelectorAll(".ticket-cont");
        for(let i=0;i<allTickets.length;i++){
            allTickets[i].remove();
        }

        filterdTickets.forEach(function(ticketObj){
            createTicket(
                ticketObj.ticketColor,
                 ticketObj.data,
                 ticketObj.ticketId
                 );
        })

    })
}





