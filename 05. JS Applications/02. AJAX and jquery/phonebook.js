function attachEvents() {
    let btnLoad=$("#btnLoad").on("click",loading);
    let btnCreate=$("#btnCreate").on("click",createEntry);
    
    let urlGet="https://phonebook-nakov.firebaseio.com/phonebook/";
    let container=$("#phonebook");


    let loadEntris=(receive)=>{
        for (let receiveElement in receive) {
            let deleteButton=$(`<button>[Delete]</button>`);
            let li=$('<li>');
            li.text(`${receive[receiveElement]["person"]}: ${receive[receiveElement]["phone"]} `);


            deleteButton.on("click",()=>{
                $.ajax({
                    method: "DELETE",
                    url: urlGet + "/" + receiveElement + ".json"
                }).then(function () {
                    li.remove()
                })
            });
            li.append(deleteButton);
            container.append(li);
        }
    };

    function loading() {
        $.get(urlGet+".json")
            .then(loadEntris)
    }
    function createEntry() {
        let person=$("#person").val();
        let phone=$("#phone").val();

       $.ajax({
           method: "POST",
           url: urlGet+".json",
           data: JSON.stringify({person,phone})
       }).then(function () {
           $("#person").val("");
           $("#phone").val("");
           loading();
       })
    };

    }

