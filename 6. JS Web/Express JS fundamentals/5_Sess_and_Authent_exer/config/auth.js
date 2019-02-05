module.exports = {
    isAuthed: (req, res, next) => {//това е функция, която ние сме си написали, която ни казва, че ако не сме аутентикирани трябва да се прехвърлим и да се аутентикираме (редиректва към login)
        if (req.isAuthenticated()) {
            next();
        } else {
            res.redirect('/user/login');
        }
    },
    hasRole: (role) => (req, res, next) => {
        if (req.isAuthenticated() &&
            req.user.roles.indexOf(role) > -1) {
            next();
        } else {
            res.redirect('/user/login');
        }
    },
    isAnonymous: (req, res, next) => {//това е функция, която контролира, ако сме анонимни да не можем да достъваме отново регистрацията и логина. Тази функция си я викаме директно като параметър в routes
        if (!req.isAuthenticated()) {//req.isAuthenticated всъщност е метод на passport-a и тук сам проверява за нас дали сме и ако не сме дава next() към следващия, ако сме изпълнява else-а, което в сучая не ни допуска да си продължим в rout-a, който сме си цъкнали
            next();
        } else {
            res.redirect('/');
        }
    }
}