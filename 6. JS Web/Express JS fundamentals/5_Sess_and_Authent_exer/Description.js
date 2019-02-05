//PASPORT

//1. За да се ползва му трябват:

//passport --save --save-exact
//body-parser
//cookie-parser
//express-session
//passport-local

//app.use... всичкото горе както си е плюс:
    //app.use(passport.initialize());
    //app.use(passport.session());

//2. Още при създаването на Schema-та си правим неща, които ще работят за аутентикация с паспорт:

const userSchema = new mongoose.Schema({
    username: { type: mongoose.Schema.Types.String, required: true, unique: true },
    hashedPass: { type: mongoose.Schema.Types.String, required: true },
    firstName: { type: mongoose.Schema.Types.String },
    lastName: { type: mongoose.Schema.Types.String },
    salt: { type: mongoose.Schema.Types.String, required: true },
    roles: [{ type: mongoose.Schema.Types.String }]//тук всъщност се пази ролята на потребителя - user, admin, student и пр. и се пази в масив от стринг и после middleware го проверява
});

//3. всичко се изнася в отделен файл що касае passport

////////// TIP////////
//DEBUGGER през VS Code - от буболечката -> горе на play-а падащото меню – Add configuraton -> отваря се json и долу в дясно в синьо add configuration, избираме nodemon setup и след това там където се стартира файла просто изписваме точно името на файла и готово
////////// /TIP ////////
