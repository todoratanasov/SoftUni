const user = (function(){
    const getLogin = function(ctx){
        ctx.partial('views/user/login.hbs');
    };

    const postLogin = function(ctx){
        let username = ctx.params.username;
        let password = ctx.params.password;

        userModel.login(username, password).done(function(data){
            storage.saveUser(data);
            notification.info("Login successful!")
            ctx.redirect('#/');
        }).catch(function () {
            notification.error("Error: Invalid credentials")
        });
    };

    const logout = function(ctx){
        userModel.logout().done(function(){
            storage.deleteUser();
            notification.info("Logout was successful!")
            ctx.redirect('#/login');
        });
    }

    const getRegister = function(ctx) {
        ctx.partial('views/user/register.hbs');
    };

    const postRegister = function(ctx) {
        userModel.register(ctx.params).done(function(data){
            storage.saveUser(data);
            notification.info("Registration successful!");
            ctx.redirect('#/');
        }).catch("Error: Invalid credentials.");
    }

    const initializeLogin = function(){
        if(userModel.isAuthorized()){

        }
    };

    return {
        getLogin,
        postLogin,
        logout,
        getRegister,
        postRegister,
        initializeLogin
    };
}());