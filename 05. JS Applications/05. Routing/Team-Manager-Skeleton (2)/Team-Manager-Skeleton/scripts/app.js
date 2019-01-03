$(() => {
    const app = Sammy('#main', function () {
        // неща, които аз съм правил:
        this.use('Handlebars', 'hbs');

        //тук ще слуша за index-а.
        this.get('/index.html', displayHome);           //това всъщност се активира когато в rout-а горе (url) се зареди
                                                        //index-a и тогава пуска функцията

        this.get('#/home', displayHome);

        //тук му казваме да слуша за About
        this.get('#/about', function (context) {        //в header има <a href="#/about", което всъщност при кликане
                                                        //редиректва и this.get("#/about") улавя
            context.loggedIn = sessionStorage.getItem('authtoken')!==null;
            context.username = sessionStorage.getItem('username');
            this.loadPartials({
                header:'./templates/common/header.hbs',
                footer: './templates/common/footer.hbs'
            }).then(function () {
                this.partial('./templates/about/about.hbs')
            })
        });

        //тук ще слуша за login
        this.get('#/login', function (context) {
            context.loggedIn = sessionStorage.getItem('authtoken')!==null;
            context.username = sessionStorage.getItem('username');
            this.loadPartials({

                header:'./templates/common/header.hbs',
                footer: './templates/common/footer.hbs',
                loginForm: './templates/login/loginForm.hbs'
            }).then(function () {
                this.partial('./templates/login/loginPage.hbs')
            })
        });

        //тук за register
        this.get('#/register',function (context) {
            context.loggedIn = sessionStorage.getItem('authtoken')!==null;
            context.username = sessionStorage.getItem('username');
            this.loadPartials({
                header:'./templates/common/header.hbs',
                footer: './templates/common/footer.hbs',
                registerForm: './templates/register/registerForm.hbs'
            }).then(function () {
                this.partial('./templates/register/registerPage.hbs')
            })
        });

        //слушаме за POST заявка от register
        this.post('#/register',function (context) {
            let username = this.params.username;            //тези идват от name в input tag-a на register.hbs
            let password = this.params.password;            //и ще ни върне стойностите в тези полета
            let repeatPassword = this.params.repeatPassword;

            if (password!==repeatPassword){
                auth.showError('The password do not match')
            }else {
                auth.register(username,password)            //auth всъщност е файла, в който ще търси функцията
                    .then(function (response) {
                        auth.saveSession(response);
                        auth.showInfo('You\'ve got it');
                        displayHome(context);               //по този начин след регистрация ни редиректва в homepage
                    }).catch(auth.handleError)
            }
        });

        //слушаме за post на login

        this.post("#/login",function (context) {
            let username = this.params.username;
            let password = this.params.password;

            auth.login(username, password).then(function (response) {
                auth.saveSession(response);
                auth.showInfo("You've logged in");
                displayHome(context);
            }).catch(auth.handleError)
        });

        //правим get за logout

        this.get('#/logout', function (context) {
            auth.logout().then(function () {
                sessionStorage.clear();             //изтриваме sessionStorage
                auth.showInfo("You've logout");
                displayHome(context);
            })
        });

        //правим get за catalog

        this.get('#/catalog', showCatalog);

        //правим get за create

        this.get('#/create', function (context) {
            context.loggedIn = sessionStorage.getItem('authtoken')!==null;
            context.username = sessionStorage.getItem('username');

            this.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs',
                createForm:'./templates/create/createForm.hbs'
            }).then(function () {
                this.partial('./templates/create/createPage.hbs')
            })
        })

        function displayHome(context) {                 //context - от там ще взима инфото, за да налива

            context.loggedIn = sessionStorage.getItem('authtoken')!==null; // по този начин проверяваме дали имаме логнат в момента user
            //това loggedIn идва от home.hbs файла в if              така всъщност set-ваме true или false стойност на
            //loggedIn, за да се знае кое точно от .hbs if-a да се rend-не

            context.username = sessionStorage.getItem('username');          //същото като за loggedIn

            context.teamId = sessionStorage.getItem('teamId')!=='undefined'
                || sessionStorage.getItem('teamId')!==null;             //същото като за loggedIn


            context.loadPartials({                         //виждаме в пътя (в случая index.html и homе, кои partials трябват
                header: './templates/common/header.hbs', //името е същото като на <header в .hbs файла
                                                        //задаваме и пътя до template файла (този .hbs)
                footer: './templates/common/footer.hbs'
            }).then(function () {                       //ако успешно load-не header and footer

                this.partial('./templates/home/home.hbs') //така му казваме къде да налее паршалите горе
            }).catch(auth.handleError)                    //имаме функция, която обработва всички грешки
        }
    });
    function showCatalog(context) {
        context.loggedIn = sessionStorage.getItem('authtoken')!==null;
        context.username = sessionStorage.getItem('username');
        context.teamId = sessionStorage.getItem('teamId')!=='undefined'
            || sessionStorage.getItem('teamId')!==null;
        context.hasNoTeam = sessionStorage.getItem('teamId') !== null;

        this.loadPartials({
            header: './templates/common/header.hbs',
            footer: './templates/common/footer.hbs',
            team:'./templates/catalog/team.hbs'
        }).then(function () {
            teamsService.loadTeams().then((response) =>{
                context.teams = response;
                this.partial('./templates/catalog/teamCatalog.hbs');
            });


        })
    }

    app.run();
});