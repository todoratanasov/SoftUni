function realEstateAgency () {
    document.getElementsByName("regOffer")[0].addEventListener("click",registration);
    document.getElementsByName("findOffer")[0].addEventListener("click",find);
    let theCommision=0;

    function registration() {
        let apartmentRent=document.getElementsByName("apartmentRent")[0].value;
        let apartmentType=document.getElementsByName("apartmentType")[0].value;
        let agencyCommission=document.getElementsByName("agencyCommission")[0].value;
        let toAppend=document.getElementById("building");
        if (apartmentRent>0&&agencyCommission>=0&&agencyCommission<=100&&apartmentType!==""&&apartmentType.includes(":")===false){
            let container=document.createElement("div");
            container.setAttribute("class","apartment");

            let rent=document.createElement("p");
            rent.innerHTML=`Rent: ${apartmentRent}`;
            container.appendChild(rent);

            let type=document.createElement("p");
            type.innerHTML=`Type: ${apartmentType}`;
            container.appendChild(type);

            let commission=document.createElement("p");
            commission.innerHTML=`Commission: ${agencyCommission}`;
            container.appendChild(commission);

            toAppend.appendChild(container)

            document.getElementById("message").textContent="Your offer was created successfully.";
            document.getElementsByName("apartmentRent")[0].value="";
            document.getElementsByName("apartmentType")[0].value="";
            document.getElementsByName("agencyCommission")[0].value="";
        } else  {
            console.log("no")
            document.getElementById("message").textContent="Your offer registration went wrong, try again.";
            document.getElementsByName("apartmentRent")[0].value="";
            document.getElementsByName("apartmentType")[0].value="";
            document.getElementsByName("agencyCommission")[0].value="";
        }

    }
    function find() {
        let building=document.querySelectorAll(".apartment")

        let familyBudget=+document.getElementsByName("familyBudget")[0].value;
        let familyApartmentType=document.getElementsByName("familyApartmentType")[0].value;
        let familyName=document.getElementsByName("familyName")[0].value;

        if (familyBudget>0&&familyApartmentType!==""&&familyName!==""){
            for (const apart of building) {

                let price=+apart.childNodes[0].textContent.substring(6);
                let appType=apart.childNodes[1].textContent.substring(6);
                let appCommission=+apart.childNodes[2].textContent.substring(12);

                let finalCommision=(price*appCommission/100)*2;

                let finalPrice=price+(price*appCommission/100);

                if (finalPrice<=familyBudget&&appType===familyApartmentType){
                    apart.setAttribute("style","border: 2px solid red");

                    apart.removeChild(apart.childNodes[0]);
                    apart.childNodes[0].textContent=`${familyName}`;
                    apart.childNodes[1].textContent="live here now";
                    let button=document.createElement("button");
                    button.textContent="MoveOut";



                    apart.appendChild(button);

                    $("#building button").on("click", (event)=>{
                        document.getElementById("message").textContent=`They had found cockroaches in ${event.target.parentNode.childNodes[0].textContent}\'s apartment`
                        event.target.parentNode.remove();

                    });

                    theCommision+=finalCommision;


                    document.getElementById("message").textContent="Enjoy your new home! :))";
                    document.getElementsByName("familyBudget")[0].value="";
                    document.getElementsByName("familyApartmentType")[0].value="";
                    document.getElementsByName("familyName")[0].value="";
                    document.getElementsByTagName("h1")[0].textContent=`Agency profit: ${Math.round(theCommision)} lv.`
                    return;
                }else {
                    document.getElementsByName("familyBudget")[0].value="";
                    document.getElementsByName("familyApartmentType")[0].value="";
                    document.getElementsByName("familyName")[0].value="";
                    document.getElementById("message").textContent="We were unable to find you a home, so sorry 😞"
                }


            }
        }


    }