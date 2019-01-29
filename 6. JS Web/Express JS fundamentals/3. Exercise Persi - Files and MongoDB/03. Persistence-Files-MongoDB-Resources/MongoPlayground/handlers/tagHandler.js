const formidable = require('formidable');
const Tag=require("mongoose").model('Tag') //този модел сме си го създали ние и сме го експортнали като модел в tagSchema.js
const util = require('util');

module.exports = (req, res) => {
  if (req.pathname === '/generateTag' && req.method === 'POST') {
    const form = new formidable.IncomingForm();
    form.parse(req, (err, fields, files)=>{
      if(err){
        throw err;
      }
      res.writeHead(200,{
        "content-type":"text/plain"
      });
      const name=fields.tagName;

      Tag.create({
        name,
        images:[]
      }).then(()=>{
        res.writeHead(302, {
          location: "/"
        });
        res.end();
      }).catch((err)=>{
        res.writeHead(500, {
          'content-type':"text/plain"
        });
        res.write("Server error 500");
        res.end();
      })
    })
    
    // form.parse(req, function(err, fields, files){
    //   res.writeHead(200, {"content-type":"text/plain"});
    //   res.write("received upload:\n\n");
    //   res.end(util.inspect({fields: fields, files:files}))
    // })
  } else {
    return true
  }
}
