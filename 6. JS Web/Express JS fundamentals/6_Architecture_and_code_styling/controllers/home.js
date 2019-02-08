const ArticleModel = require('../models/Article');

module.exports = {
  index: (req, res) => {
        ArticleModel.find({})
        .populate('author')
        .then((articles)=>{
          // let author = articles[0]['author'][0]['fullName'];
          // articles[0]['author'][0] = author;   
          let mapped = articles.map((x)=>{
            let id=x['id'];
            let title = x['title'];
            let content = x['content'];
            let author = x['author'][0]['fullName'];
            let mappedObj = {id,title,content,author};
            return mappedObj;
          })
                  
          
          res.render('home/index', {article: mapped});
              
        })
        .catch((err)=>{
          console.log(err)
        })          
        
        
    
  }
}
