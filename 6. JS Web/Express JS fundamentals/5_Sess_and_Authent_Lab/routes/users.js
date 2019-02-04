var express = require('express');
var router = express.Router();
const User = require('../data/models/user-models')

router
.get('/profile', (req,res)=>{
  const token = req.header('x-auth');   //по този начин си проверяваме дали в header-ите имаме точно този хедър и него ще ползваме за auth

  if(!token){
    res.redirect('/users/login');
    return;
  }
  User.findByToken(token)     //викам си тук метода findByToken, който връща промис
    .then((user)=>{
      res.render('profile', user) //подаваме промиса за рендване
  })
    .catch((err)=>{
      res.status(400).send();
    })  
})
.get('/login', function(req, res, next) {
  res.render('login')
})
.get('/register', (req,res)=>{
  res.render('register')
})
.post('/register',(req, res)=>{
  const{email, password} = req.body; //прихващаме си от заявката паролата и юзъра

  if(email.length && password.length){
    const user = new User({ //ползваме си модела, за да си създадем узъра
      email,
      password
    });
    user.save()//запазваме си юзъра
      .then(()=>{
        user.generateAuthToken() //след като сме го запазили тогава си викаме метода, който сме закачили към model-а, за да ни закачи допълнитено token-a
        .then((token)=>{        //метода, който сме си създали ни връща като Promise токена
          res.header('x-auth', token).redirect('/users/profile'); //създаваме си наш header с име 'x-auth' от токена и го връщаме. И после ще си го хващаме и чрез него ще валидираме дали това е user-a 
        })
        .catch(err=>res.status(400).send())
      })
      .catch(err=>res.status(400).send())
  }else{

  }  
  //res.send({email,password})
})

module.exports = router;
