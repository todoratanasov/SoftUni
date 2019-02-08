const ArticleModel = require('../models/Article');

module.exports = {
    articleGet: (req, res)=>{
        res.render('article/create');
    },
    articlePost: async(req, res)=>{
        req.body.date='10.02.2019'
        req.body.author = [];
        req.body.author.push(req.user.id);
        
        try{
            ArticleModel.create(req.body);
            res.redirect('/')
        }
        catch(err){
            console.log(err);
        }
        
    },
    articleDetailsGet:(req,res)=>{
        let articleId = req.params.id.toString().substr(1);
        ArticleModel.findById(articleId)
            .populate('author')
            .then((article)=>{
                let author = article.author[0]['fullName'];
                let array=[];
                array.push(article);
                let mapped = array.map((x)=>{
                    let id = x['_id']
                    let title = x['title'];
                    let content = x['content'];
                    let date = x['date'];
                    let author = x['author'][0]['fullName'];
                    let obj = {id,title,content,date,author};
                    return obj;
                });
                res.render('article/details', {mapped})
            })
            .catch((err=>{
                console.log(err)
            }))

       
    },
    articleEditGet: (req,res)=>{
        let articleId = req.params.id.toString().substr(1);
        ArticleModel.findById(articleId)
            .populate('author')
            .then((article)=>{
                let author = article.author[0]['fullName'];
                let array=[];
                array.push(article);
                let mapped = array.map((x)=>{
                    let id = x['_id']
                    let title = x['title'];
                    let content = x['content'];
                    let date = x['date'];
                    let author = x['author'][0]['fullName'];
                    let obj = {id,title,content,date,author};
                    return obj;
                });
                res.render('article/edit', {mapped})
            })
            .catch((err=>{
                console.log(err)
            }))
        
    },
    articleEditPost: (req,res)=>{
        let articleId=req.params.id.toString().substr(1);
        let {title,content} = req.body;

        ArticleModel.findById(articleId)
            .then((article)=>{
                article.title = title;
                article.content = content
                return article.save();
            })
            .then((article)=>{
                res.redirect('/');
            })
            .catch((err)=>{
                console.log(err)
            })
    },
    //todo само това остана да се оправи защото по този начин не трие(може би не подавам правилния тип параметър да видя документацията)
    articleDeleteGet: (req,res)=>{
        const articleId = req.params.id.toString().substr(1);
        ArticleModel.findById(articleId)
            .then((article)=>{
                res.render('article/delete', article)
            })
            .catch((err)=>{
                console.log(err)
            })
    },
    articleDeletePost: (req,res)=>{
        const articleId = req.params.id.toString().substr(1);
        
        ArticleModel.findById({_id:articleId})
        .then((article)=>{            
            return ArticleModel.findByIdAndRemove(article._id);
        })
        .then(()=>{
            //ВАЖНО. Ако трябва да държа във всеки един user кои статии има после трябва да изтрия и от този масив, в който държа id-та id-то на статията. Това става така в още един then():

            // req.user.articles.pull(articleId); идеята тук МАЙ, е че articles е масива, в базата с id-то на article, но passport ни го закача към req и тук просто си го ползваме, save-ваме и след това 
            // return req.user.save();
            res.redirect('/')
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}