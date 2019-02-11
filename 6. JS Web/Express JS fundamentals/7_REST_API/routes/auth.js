const router = require('express').Router();//по този начин ще закачаме на router-а пътищата тук, а те всъщност ще се разпределят в зависимост от това, което следва в URL-а след домейна. localhost:3000 + /auth директно идва тук и вече пишем като път само продължението след това
const { body } = require('express-validator/check');
const authController = require('../controllers/auth');
const User = require('../models/User');

router.post('/signup', 
  [
    // TODO: Add normalize email and check
    body('email')
      .isEmail()
      .withMessage('Please enter a valid email.')
      .custom((value, { req }) => {
        return User.findOne({ email: value }).then(userDoc => {
          if (userDoc) {
            return Promise.reject('E-Mail address already exists!');
          }
        })
      }),
    body('password')
      .trim()
      .isLength({ min: 5 })
      .withMessage('Please enter a valid password.'),
    body('name')
      .trim()
      .not()
      .isEmpty()
      .withMessage('Please enter a valid name.')
  ]
, authController.signUp);
router.post('/signin', authController.signIn);

module.exports = router;
