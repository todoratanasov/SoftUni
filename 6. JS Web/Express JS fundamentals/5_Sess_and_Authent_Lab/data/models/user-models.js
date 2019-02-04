const {Schema, model}=require('mongoose');
const jwt = require('jsonwebtoken'); //тук си присвояваме това, кеото ще ни подписва и верифицира. Преди това се инсталира с npm install --save jsonwebtoken
const bcrypt = require('bcryptjs'); //това ни трябва, за да се криптира паролата преди да бъде запазена
const UserSchema = new Schema({ //създаваме си model-а на потребителя ни. По този начин ще си го запазваме в базата
    email: {type: String, unique:true, required:true},
    password:{type: String, required:true, minlength:6},
    tokens:[{ //token-а ще ни съдържа информация за signaturet-то и пр. и е масив като за да го попълваме ще си ползваме един създаден от нас метод по-долу като за целта ще ни трябва библиотека - npm install --save jsonwebtoken
        _id:{
            type:String
        }
    }]
});



UserSchema.methods.generateAuthToken = function () {//по този начин ние си прикачаме към модела методи. В случая не е arrow функция, защото искаме да ползваме this от scope-а на това, на което извикваме метода
const user = this; //присвояваме на user контекста

const token = jwt.sign({_id:user._id.toHexString()}, 'secret'); //тук си създаваме с метода sign token-а и 'secret' в случая се явява тайната дума, по която ще хешира

user.tokens.push(token);                        //тук казвам, че като извикаме метода ще ни го push-не в масива, който ни tokens в model-а
return user.save()                             //по този начин си запазваме token-а
    .then(()=>token)
    .catch((err)=>console.error(err));
};

function hashPassword(password){ //с тази функция криптираме паролата
    return new Promise((resolve, reject)=>{
        bcrypt.genSalt(10, (err,salt)=>{
            if(err){
                reject(err);
            };
            bcrypt.hash(password,salt, (err,hash)=>{
                if(err){
                    reject(err);
                }

                resolve(hash)
            })
        })
    })
}
UserSchema.pre('save',function(next){
    var user = this;
    next();
});

UserSchema.statics.findByToken = function(token){ //на схемата със statics можем да прикачаме статични методи. В случая правим такъв, който ще ни обръща hash-натата парола, за да можем да я верифицираме
    const User = this;
    let decodedToken;

    try{                    //всичко, което може да fail-не си го слагаме в такъв блок
        decodedToken = jwt.verify(token, 'secret') //jwt-то има метод verify, който приемайки token-а и подавайки му първоначалната сикрет дума (в случая secret) връща дехеширания token, който си има първоначалните пропъртита (като обект)
    }catch(err){
        Promise.reject(err);
    }

    return User.findOne({   //по този начин този статичен метод връща user _id-то в токен-а
        _id:decodedToken._id
    })
}



UserSchema.pre('save', function (next) { //.pre метода ни позволява да се закачим преди някои event-и 'save' в случая е event-a който казваме, че искаме да се изпълни функцията преди него
    var user = this;
    if(user.isModified('password')){
        hashPassword(user.password)
            .then((hashedPassword)=>user.password = hashedPassword)
            .then(()=>next());
    }else{
        next();
    }
  })
const User = model('User', UserSchema);
module.exports = User;