$(() => {
    renderCatTemplate();

    function renderCatTemplate() {

        let source = $.get('catsTemplate.hbs').then(function (res) {

            let template = Handlebars.compile(res);

            $("#allCats").html(template({cats}));
            $(".btn").on("click", showStats);
        });


    };



});
function showStats(event) {
    if (event.target.textContent==="Show status code") {
        $(event.target).text("Hide status code");
        $(event.target.parentNode.children[1].style.display = "inline")
    } else {
        $(event.target).text("Show status code");
        $(event.target.parentNode.children[1].style.display = "none")
    }
}
