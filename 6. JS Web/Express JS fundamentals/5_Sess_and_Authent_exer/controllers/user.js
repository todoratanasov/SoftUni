const encryption = require('../util/encryption'); //присвояваме си този моодул, защото ще му ползваме методите, за да си създадем паролата
const User = require('../models/User')

module.exports = {
    registerGet: (req, res) => {
        res.render('user/register')//тук си зареждаме registerform-а
    },
    registerPost: async (req, res) => {
       const userBody = req.body; //имаме си заради body-parser-a body-то и си го взимаме

       if(!userBody.username||!userBody.password||!userBody.repeatPassword){//валидираме си тук дали това, което е въвел потребителя е ок
            userBody.error = "Please fill all fields"//това някак ще напълни html-a с грешката
            res.render('user/register', userBody);  //самата форма е така направена, че да върне обратно информацията, която е попълнена при несъответствие. Да си видя html-a на формата, но слагаме value="username" (като username се съдържа в userBody или в каквото и друго да му подадем като обект нали и стига да има пропърти това в скобките {{това}})
            return;
       }
       if(userBody.password!==userBody.repeatPassword){
           userBody.error = "Both password should match";
           res.render('user/register', userBody);
           return;
       }

        const salt = encryption.generateSalt(); //с готовия метод на passport си генерираме salt
        const hashedPass = encryption.generateHashedPassword(salt, userBody.password); //подаваме на готовия метод да ни създаде хеширана парола
        
        try{
            const user = await User.create({
                username: userBody.username,
                hashedPass,
                firstName: userBody.firstName,
                lastName: userBody.lastName,
                salt:salt,
                role: ['User']
            });
            req.logIn(user, (err)=>{//тук ползваме готов метод на passport за login, който минава през passport.js -> passport.serializeUser функция, която запазва само userId-то в сесията и вече знае, че ние сме се аутентикирали
                if(err){
                    console.log(err);
                    res.render('user/register', userBody);
                    
                }else{
                    res.redirect('/')
                }
            })
        }catch(err){
            console.log(err)
        }
    },
    logout: (req, res) => {
        req.logout(); //това, чисто и просто чисти сесията и нищо повече
        res.redirect('/')
    },
    loginGet: (req, res) => {
        res.render('user/login');
    },
    loginPost: async (req, res) => {
        const userBody=req.body;

        try{
            const user = await User.findOne({username: userBody.username}); //тук си взимаме user-a от базата търейки го по username, който взимаме от парснатото боди закачено към request-a
            if(!user){
                userBody.error = "Username is invalid"; //закачаме грешката на userBody-то
                res.render("user/login", userBody); //рендерираме login view-то като, ако сме сложили value{{username}} където трябва подавайки му пак боди-то ще се запази входа
                return;
            }
            if(!user.authenticate(userBody.password)){//този метод сме го закачили направо на Schema-aта и той разхешира и връща дали съвпада паролата с user-a в базата
                userBody.error = 'password is invalid';
                res.render('user/login', userBody);
                return;
            }
            req.logIn(user, (err)=>{//тук ползваме готов метод на passport за login, който минава през passport.js -> passport.serializeUser функция, която запазва само userId-то в сесията и вече знае, че ние сме се аутентикирали. Подаваме го тук отново, ако са минали горе всичките валидации
                if(err){
                    console.log(err);
                    res.render('user/register', userBody);
                    
                }else{
                    res.redirect('/')
                }
            })

        }catch(err){
            userBody.error = "Something went wrong";
            res.render('user/register', userBody);
        }
    },
    myRents: (req, res)=>{
        Rent.find({user: req.user._id}) //по този начин ще върне масив от rent-овете на потребител с това id (в момента логнатото)
            .populate('car')    //ще го убедини с car
            .then((rents)=>{//всичките рентс вече имат в себе си обект, а не ID

            })
    }
};