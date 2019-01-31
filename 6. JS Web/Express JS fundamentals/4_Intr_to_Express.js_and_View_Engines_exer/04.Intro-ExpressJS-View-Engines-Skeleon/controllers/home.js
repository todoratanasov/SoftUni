const CubeModel = require('../models/cubeModel');

const homeGet = function(req,res){

    const query = CubeModel.find({});

    query.exec((err, result)=>{
        if(err){
            throw err
        };
        res.render("index", {
            cubes:result
        }) //тук ще рендерира main.hbs и в тялото на main tag-a - {{{body}}} ще налее index.hbs;  
    })
    //res.locals.globalError = 'Something went wrong';//locals е като грубо казано сесия, която можем да пратим на handlebars и той си следи за появата на това (в случая globalError е undefined, но като има съдържание ще активира #if-а в темплейта)
      
};
const about = function(req,res){
    res.render('about');
}

module.exports ={
    homeGet,
    about
}