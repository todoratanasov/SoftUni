const home = (function(){
    const index = function(ctx) {
        if (storage.getData('userInfo')!=null){
            $('#dashboard').show();
            $("#logged_user").text(storage.getData("userInfo").username)
            $('#logged').show();
            $('#logReg').hide();
            ctx.partial("views/home/home.hbs");
        } else {
            $('#logReg').show();
            $("#logged_user").text("");
            $('#dashboard').hide();
            $('#logged').hide();
            ctx.partial("views/home/home.hbs")
        }

    };

    return {
        index
    };
}());