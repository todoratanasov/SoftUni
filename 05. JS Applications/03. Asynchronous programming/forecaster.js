function attachEvents() {
    $("#submit").on("click",weather);
    let input="";
    let currentDiv=$("#current");
    let uppCommingDiv=$("#upcoming");

    function locationGet() {
        return new Promise((resolve,reject)=>{
            resolve($.get(
                "https://judgetests.firebaseio.com/locations.json"
            ).then((data)=>{
                return data.filter((x)=>{
                    if (x["name"]===input){
                        return x.code;
                    }
                });
            })
                )})
    }
    async function weather() {
        //праща заявка, за да взема кода на локацията
        //записвам кода в променлива, за да се използва от функцията, която ще опише
        //още тук хвърля грешка
        input=$("#location").val();



        let location=await locationGet();
        //за да го ползвам location[0].code

        $.get(`https://judgetests.firebaseio.com/forecast/today/${location[0].code}.json`)
            .then(current);

        $.get(`https://judgetests.firebaseio.com/forecast/upcoming/${location[0].code}.json `)
            .then(forecast);
    }
    function errorMsg() {
        //to do
        console.log("error")
    }
    function current(data) {
        $("#forecast").css("display","block");
        let symbol=symbolFunc(data["forecast"]["condition"]);

        let spanSymbol=$("<span>");
        spanSymbol.addClass("condition symbol");
        spanSymbol.text(symbol);
        currentDiv.append(spanSymbol);

        let spanCondition=$("<span class=\"condition\">");
        let place=$(`<span class="forecast-data">`);
        place.text(`${data.name}`);
        let spanT=$(`<span class="forecast-data">`);
        spanT.text(`${data["forecast"]["low"]+"°"}/${data["forecast"]["high"]+"°"}`);
        let condition=$(`<span class="forecast-data">`);
        condition.text(`${data["forecast"]["condition"]}`);

        spanCondition.append(place);
        spanCondition.append(spanT);
        spanCondition.append(condition);
        currentDiv.append(spanCondition);

    }
    function forecast(data) {
        let upcomingSpan=$("<span class=\"upcoming\">");
        data["forecast"].forEach((x)=>{
            upcoming(x);
        });
        function upcoming(obj){
            let symbol=$(`<span class=\"symbol\">`);
            symbol.text(`${symbolFunc(obj["condition"])}`);
            upcomingSpan.append(symbol);

            let temp=$(`<span class=\"forecast-data\">`);
            temp.text(`${obj["low"]+"°"}/${obj["high"]+"°"}`);
            upcomingSpan.append(temp);

            let spanText=$(`<span class="forecast-data">`);
            spanText.text(`${obj["condition"]}`);
            upcomingSpan.append(spanText);
            uppCommingDiv.append(upcomingSpan);
            upcomingSpan=$("<span class=\"upcoming\">")
        }


    }
    function symbolFunc(text) {
        if (text==="Sunny"){
            return "☀";
        }else if(text==="Partly sunny"){
            return "⛅";
        } else if (text==="Overcast") {
            return "☁";
        } else if (text==="Rain") {
            return "☂";
        }
    }

}