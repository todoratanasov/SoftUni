const homeController = require("../controllers/home");
const cubeController = require("../controllers/cube");
const detailsController = require('../controllers/details');
const searchController = require('../controllers/search')
module.exports = app => {
    // TODO
    app.get('/', homeController.homeGet);
    app.get('/create', cubeController.createCube);
    app.post('/create', cubeController.saveToDb);
    app.get('/about', homeController.about);
    app.get('/details/:cubeId', detailsController.showDetails);
    app.get('/search', searchController.search)
};