const mongoose = require('mongoose');
const encryption = require('../util/encryption');

const userSchema = new mongoose.Schema({
    username: { type: mongoose.Schema.Types.String, required: true, unique: true },
    hashedPass: { type: mongoose.Schema.Types.String, required: true },
    firstName: { type: mongoose.Schema.Types.String },
    lastName: { type: mongoose.Schema.Types.String },
    salt: { type: mongoose.Schema.Types.String, required: true },
    roles: [{ type: mongoose.Schema.Types.String }]//тук всъщност се пази ролята на потребителя - user, admin, student и пр. 
});

userSchema.method({
    authenticate: function (password) {
        return encryption.generateHashedPassword(this.salt, password) === this.hashedPass;
    }
});

const User = mongoose.model('User', userSchema);

User.seedAdmin = async () =>{//след като имаме създаден User модела му прикачаме тази функция(метод), който има за цел, ако нямаме потребител в самото начало да ни генерира такъв или нещо подобно
const users = await User.find() //по този начин ще намери всички потребители в базата
    //отново - ВИНАГИ когато е async да се прави try catch блок
    try{
        if(users.length>0){//ако има потребители дори един спира изпълнението
            return 
         }
         const salt = encryption.generateSalt();//библиотеката encryption ни генерира salt и ни връща стринг
         const hashedPass = encryption.generateHashedPassword(salt, 'admin123')//подаваме солта и парола 'admin123';
         //след като сме направили всичко създаваме user-а.
         return User.create({//връщаме като Promise, но и същевременно създаваме в базата първия admin user
             username: "admin",//попълваме ръчно както е по Schema
             hashedPass: hashedPass,
             firstName:"Pesho",
             salt:salt,
             lastName:"Georgiev",
             roles:['Admin']//подаваме към масива какви роли ще има този потребител
             //rents: [{type: Schema.Types.ObjectId, ref: "Rent"}] //това го създаваме, за да може когато user-a прави rent директно да му Push-ваме целия rent (закоментирал съм го и там)
         });
    }catch(err){
        console.log(err)
    }
        
    
}
module.exports = User;
