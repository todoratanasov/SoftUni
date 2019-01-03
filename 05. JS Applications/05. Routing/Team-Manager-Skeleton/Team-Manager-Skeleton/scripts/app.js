$(() => {
    const app = Sammy('#main', function () {
        // неща, които аз съм правил:
        this.get('/index.html', displayHome);
        this.get('#/home', displayHome);

        function displayHome(context) {                 //context - от там ще взима инфото, за да налива

    context.loggedIn = sessionStorage.getItem('authtoken')!==null; // по този начин проверяваме дали имаме логнат в момента user
            //това loggedIn идва от home.hbs файла в if              така всъщност set-ваме true или false стойност на
                                                                    //loggedIn, за да се знае кое точно от .hbs if-a да се rend-не

    context.username = sessionStorage.getItem('username');          //същото като за loggedIn

    context.teamId = sessionStorage.getItem('teamId')!=='undefined'
            || sessionStorage.getItem('teamId')!==null;             //същото като за loggedIn


            this.loadPartials({                         //виждаме в пътя (в случая index.html и homе, кои partials трябват
                header: '/templates/common/header.hbs', //името е същото като на <header в .hbs файла
                                                        //задаваме и пътя до template файла (този .hbs)
                footer: './templates/common/footer.hbs'
            }).then(function () {                       //ако успешно load-не header and footer

                this.partial('./templates/home/home.hbs') //така му казваме къде да налее паршалите горе
            }).catch(auth.handleError)                    //имаме функция, която обработва всички грешки
        }
    });

    app.run();
});