const mongoose = require('mongoose');
const User = require('../models/User');//require-ваме User-а, за да ползваме функцията, която при първа конекция с базата ще потърси и евентуално създаде първия потребител 
mongoose.Promise = global.Promise;
module.exports = config => {
    mongoose.connect(config.dbPath, {
        useNewUrlParser: true
    });       
    const db = mongoose.connection;
    db.once('open', err => {
        if (err) {
            console.log(err);
        } 
        User.seedAdmin() //извикваме функцията, която създава admin-а
            .then(()=>{
                console.log('Database ready')
            })
            .catch((err)=>{
                console.log("Something went wrong")
            })
    });

    db.on('error', reason => {
        console.log(reason);
    });
};