module.exports = {
    development: {
        port: process.env.PORT || 3000,
        dbPath: 'mongodb://localhost:27017/car-rental-db'//car-rental-db всъщност е колекцията в локалната база
    },
    production: {}
};