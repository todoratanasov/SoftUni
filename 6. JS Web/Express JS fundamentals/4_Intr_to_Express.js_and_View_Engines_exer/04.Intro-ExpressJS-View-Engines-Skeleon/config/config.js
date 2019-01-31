module.exports = {
    development: {
        port: process.env.PORT || 3000, //тук сме подали, че ако качим някъде приложението то ще ползва дифолтния порт на средата, ако ли не ще ползва 3000
        dbPath: 'mongodb://localhost:27017/rubiks-db'//connection string-a към базата
    },
    production: {}//това е допънително, което се попълва при деплойнат app
};