function attachEvents() {
    $("#btnLoadTowns").on("click",renderTowns);
    let data={
        towns:[]
    };
    function renderTowns() {

        $("#towns").val().split(", ").forEach((x)=>{
            let obj={
                "town":x
            };
            data["towns"].push(obj)
        });

        $(function () {
            let source=$("#towns-template").html();

            let template=Handlebars.compile(source);
            console.log(template);
            $("#root").empty();
            $("#root").html(template(data));
            console.log(data);

        })

    }
}