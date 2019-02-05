const passport = require('passport');
const LocalPassport = require('passport-local');
const User = require('mongoose').model('User');

module.exports = () => {
    passport.use(new LocalPassport((username, password, done) => { //така си създаваме нов local паспорт. done е callback който сигнализира дали автентикацията е съксес или фейл
        User.findOne({ username: username }).then(user => {//1. намираме в базата съответния потребител

            if (!user) return done(null, false);//ако не намери потребителя в базата 
            if (!user.authenticate(password)) return done(null, false);//ако паролата в базата не е същата
            return done(null, user);//ако всичко е наред връщаме callback-a заедно с потребителя
        });
    }));

    passport.serializeUser((user, done) => {//друга функция, която вече взима потребителя
        if (user) return done(null, user._id);//казваме запази ни в сесията неговия user._id
    });

    passport.deserializeUser((id, done) => {//по този начин в req passport-a ни вкарва данните на user-а
        User.findById(id).then(user => {
            if (!user) return done(null, false);
            return done(null, user);        
        });
    });
};