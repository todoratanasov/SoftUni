module.exports = {
  isAuthed: (req, res, next) => {
      if (req.user) {
          next();
      } else {
          res.redirect('/user/login');
      }
  },
  hasRole: (role) => (req, res, next) => {
      if (req.user &&
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