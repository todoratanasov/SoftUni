const formidable = require('formidable');
const Image=require('mongoose').model('Image');

function addImage(req,res){

const form=formidable.IncomingForm();

form.parse(req, (err, fields, files)=>{
  if(err){
    throw err;
  }
  const tags=fields.tagsId.split(",").reduce((acc,cur,index,array)=>{
    if(acc.includes(cur)||cur.length ===0){
      return acc;
    }else{
      acc.push(cur);
      return acc;
    }
  },[]);
  const image={
    url:fields.imageUrl,
    description:fields.description,
    tags
  };
  Image.create(image).then((image)=>{
    res.writeHead(302,{
      "location":"/"
    });
    res.end();
  }).catch(
    (err)=>{
      res.writeHead(500, {
        'content-type':"text/plain"
      });
      res.write("Server error 500");
      res.end();
    }
  )
})
  
}


module.exports = (req, res) => {
  if (req.pathname === '/addImage' && req.method === 'POST') {
    addImage(req, res)
  } else if (req.pathname === '/delete' && req.method === 'GET') {
    deleteImg(req, res)
  } else {
    return true
  }
}
