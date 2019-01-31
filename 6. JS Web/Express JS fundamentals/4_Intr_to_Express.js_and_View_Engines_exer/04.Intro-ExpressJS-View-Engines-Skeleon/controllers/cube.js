const CubeModel = require('../models/cubeModel');

const errorHandler = function(err,res){ //това е error handler, който събира накумп всичките грешки, които връща базата в един масив (в случая при валидацията). Ползва се обаче с then().catch() конструкцията
    let errors=[];
    for (const prop in err.errors) {
        errors.push(err.errors[prop].message)
    }
    res.locals.globalErrors = errors; //това е локален обект, до който handlebars има достъп и тук му задаваме стойнст - масив от грешки. В main.hbs този нов масив си го разпознава и рендерира
    res.render('create');
}

const createCube = function(req,res){
    res.render('create');
};

const saveToDb = function(req,res){
    
    // const {name, description, image, difficulty} = req.body;
    // console.log(req.body)
    
    // const dataToSave = new CubeModel({
    //     name,
    //     description,
    //     image,
    //     difficulty
    // });
    // dataToSave.save(()=>{
        // res.redirect('/')
    // })
    const cubeBody = req.body;
    CubeModel.create(cubeBody) //това е по-лесен начин от exec
        .then((c)=>{
            res.redirect('/')
        }).catch((err)=>{errorHandler(err, res)})   
    
};




module.exports = {
    createCube,
    saveToDb
}