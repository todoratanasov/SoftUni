function acceptance() {
    let shippingCompany=document.getElementsByName("shippingCompany")[0].value;
    let productName=document.getElementsByName("productName")[0].value;
    let productQuantity=+document.getElementsByName("productQuantity")[0].value;
    let productScrape=+document.getElementsByName("productScrape")[0].value;

    if (productName!==""&&shippingCompany!==""&&productQuantity!==""&&productScrape!==""&&(Number(productQuantity)-Number(productScrape)>0)){

        let textToAdd=`[${shippingCompany}] ${productName} - ${Number(productQuantity)-Number(productScrape)} pieces`;
        let div=document.createElement("div");
        let paragraph=document.createElement("p");
        let container=document.getElementById("warehouse");
        paragraph.textContent=textToAdd;
        let button=document.createElement("button");
        button.setAttribute("type","button");
        button.text = "Out of stock";

        div.appendChild(paragraph);
        div.appendChild(button);
        container.appendChild(div);

        $("div div button").on("click", (event)=>{

            event.target.parentNode.remove();
        });
        document.getElementsByName("shippingCompany")[0].value="";
        document.getElementsByName("productName")[0].value="";
        document.getElementsByName("productQuantity")[0].value="";
        document.getElementsByName("productScrape")[0].value="";
    }
}