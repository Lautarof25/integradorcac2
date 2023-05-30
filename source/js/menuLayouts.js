const linksItems = document.getElementsByClassName("linkItem")

for (let i = 0; i < linksItems.length; i++) {
    linksItems[i].addEventListener("click", function (e) {
        printTemplateWithId(e.target.id)
    })
}

function printTemplateWithId(id){
    switch (id) {
        case "speakers":
        case "conference":
        case "contact_form":
        case "place_date":
            conferenceSection.innerHTML = conferenceLayout;
            speakerSection.innerHTML = speakerLayout;
            adSection.innerHTML = adLayout;
            contactSection.innerHTML = contactLayout; 
            ticketSection.innerHTML = "";
            break;
        case "ticketLayout":
            conferenceSection.innerHTML = "";
            speakerSection.innerHTML = "";
            adSection.innerHTML = "";
            contactSection.innerHTML = ""; 
            ticketSection.innerHTML = ticketsLayout;
            break;
    }
}


/*
conferenceSection.innerHTML = conferenceLayout;
speakerSection.innerHTML = speakerLayout;
adSection.innerHTML = adLayout;
contactSection.innerHTML = contactLayout;
ticketSection.innerHTML = ticketsLayout;
*/

