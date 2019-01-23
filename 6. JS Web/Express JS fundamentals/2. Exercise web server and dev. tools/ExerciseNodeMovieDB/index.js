const http = require('http');
const url = require('url');
const fs = require('fs');
const db=require('./config/dataBase');
const handlers=require('./handlers/transit_handler');
const port = 8080;

http
    .createServer((req, res)=>{
        //SOFTUNI WAY
        // req.path=url.parse(req.url).pathname;

        // for(const handler in handlers){
        //     if(handler(req,res)===false){
        //         brake;
        //     }
        // }

        //MY WAY
        const parsedUrl = url.parse(req.url);
        const pathname = parsedUrl.pathname;
        

        if(req.method==="GET"){
            if(pathname==="/"){
                const index=fs.createReadStream("./views/home.html");                 
                
                res.writeHead(200,{
                    "Content-Type":"text/html"
                });

                index.pipe(res);
                
                return;
            }else if(pathname==="/public/css/main.css"){
                const css=fs.createReadStream("./public/css/main.css");

                res.writeHead(200,{
                    "Content-Type":"text/css"
                });
                css.pipe(res);
                
                return;
            }else if(pathname==='/favicon.ico'){
                const favicon=fs.createReadStream("./public/images/favicon.ico");

                res.writeHead(200,{
                    "Content-Type":"image/ico"
                });

                favicon.pipe(res);
                return;
            }else if(pathname==="/public/images/nodeLogo.png"){
                
            }
        }
        
    }).listen(port);
    console.log(`Web Server startet at port: ${port}`);