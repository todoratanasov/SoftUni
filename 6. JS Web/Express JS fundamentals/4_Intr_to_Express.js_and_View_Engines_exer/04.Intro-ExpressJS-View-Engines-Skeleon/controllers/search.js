const CubeModel = require('../models/cubeModel');

function handleQueryErrors(from, to){
    
    let errors = [];
    if(!from||!to){
        errors.push('Please fill all difficulties')
    }

    if(from < 1|| from>6 ){
        errors.push('From must be between 1 and 6')
    }
    if(to<1||to>6){
        errors.push('To must be between 1 and 6')
    }
    if(from>to){
        errors.push('From must be less than to')
    };
    return errors;
}

const search = async function(req, res){
    let {name, from, to} = req.query;
    from = +from;
    to = +to;
    let errors=handleQueryErrors(from,to);
    if(errors.length>0){
        res.locals.globalErrors = handleQueryErrors(from,to);

        try{
            const cubeses = await CubeModel.find({});
            res.render('index',{cubes:cubeses});
            return;
        }catch(err){
            console.log(err)
        }       
        
    };

    if(name&&from&&to){
        CubeModel.find({}).where('difficulty').gte(from).lte(to).then((cubes)=>{
            const filtered = cubes.filter(c=>c.name.toLowerCase().includes(name.toLowerCase()));
            res.render('index',{cubes:filtered})
        })
    }
}

module.exports = {
    search
}