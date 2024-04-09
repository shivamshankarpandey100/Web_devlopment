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
let removeBtn=document.querySelector(".remove-btn");


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
    let id= ticketId || uid.rnd() ;//uid.rnd gives the random tickets Id which length is 10
    let ticketCont=document.createElement("div");//<div></div>
    ticketCont.setAttribute("class","ticket-cont");
    ticketCont.innerHTML=` 
    <div class="ticket-color ${ticketColor}"></div>
    <div class="ticket-id">${id}</div>
    <div class="task-area">${data}</div>
    `;


    mainCont.appendChild(ticketCont);
    handleRemoval(ticketCont, id);
    handleColor(ticketCont, id);
    handleLock(ticketCont, id);

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
    toolboxColors[i].addEventListener("dblclick",function(){
        let allTickets=document.querySelectorAll(".ticket-cont");
        for(let i=0;i<allTickets.length;i++){
            allTickets[i].remove();
        }
        //Display all Tickets
        ticketsArr.forEach(function(ticketObj){
            createTicket(
                ticketObj.ticketColor,
                 ticketObj.data,
                 ticketObj.ticketId
                 );
        })
    })
}

//remove clicking actvated or de-activated button Styling
let removeBtnActive=false;
removeBtn.addEventListener("click",function(){
    if(removeBtnActive){
        removeBtn.style.color="white";
    }else{
        removeBtn.style.color="red";
    }
    removeBtnActive=!removeBtnActive;
});
function handleRemoval(ticket, id){
    ticket.addEventListener("click",function(){
        if (!removeBtnActive) return;
        //local Storage remove
        let idx=getTicketIdx(id);
        ticketsArr.splice(idx,1);
        //remove from browser storage
        localStorage.setItem("tickets", JSON.stringify(ticketsArr));
        // remove from frontend
        ticket.remove();
});
}

function getTicketIdx(id){
   let ticketIdx=ticketsArr.findIndex(function(ticketObj){
        return ticketObj.ticketId == id;
   })
   return ticketIdx;
}


// changed priority colors of the tickets
function handleColor(ticket, id){
    let ticketColorStrip=ticket.querySelector(".ticket-color");

    ticketColorStrip.addEventListener("click",function(){
        let currticketColor=ticketColorStrip.classList[1];
        let currticketColorIdx=colors.indexOf(currticketColor);

           let newTicketColorIdx = currticketColorIdx+1;
           newTicketColorIdx=newTicketColorIdx%colors.length;
            let newticketColor=colors[newTicketColorIdx];

            ticketColorStrip.classList.remove(currticketColor);
            ticketColorStrip.classList.add(newticketColor);



            //local storage update
        let ticketIdx=getTicketIdx(id);
        ticketsArr[ticketIdx].ticketColor=newticketColor;
        localStorage.setItem("tickets",JSON.stringify(ticketsArr));

        });

}

// lock and unlock handling
function handleLock(ticket,id){

}




