const CubeModel = require('../models/cubeModel');

const showDetails = function(req, res){
    const cubeId = req.params.cubeId;
    
    const query = CubeModel.findById(cubeId.substr(1));
    
    query.exec((err,result)=>{
        if(err){
            throw err
        };
        res.render('details', {
            cube:result
        })
    })
};

module.exports = {
    showDetails
}