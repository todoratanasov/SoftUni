const fs = require('fs');

let storage={};

module.exports={
    put: (key, value)=>{
        if(typeof key==="string"){
            if(!storage.hasOwnProperty(key)){
                storage[key]=value;
            }else{
                throw new Error("The key already exist!")
            }
        }else{
            throw new Error("The key should be a string!")
        }
    },
    get: (key)=>{
        if(typeof key==="string"){
            if(storage.hasOwnProperty(key)){
                return storage[key];
            }else{
                throw new Error("The key does not exist!")
            }
        }else{
            throw new Error("The key should be a string!")
        }
    },
    getAll:()=>{
        if(Object.keys(storage).length===0){
            throw new Error("mistake")
        }else{
            return storage
        }
    },
    update:(key,value)=>{
        if(typeof key!=="string"){
            throw new Error("Is not a key")
        }else{
            storage[key]=value;
        }
    },
    delete:(key)=>{
        if(typeof key!=="string"){
            throw new Error("Is not a string")
        }else{
            delete storage[key]
        }
    },
    clear:()=>{
        storage={}
    },
    save:()=>{
        fs.writeFileSync("storage.json",JSON.stringify(storage),"utf-8")
    },
    load:()=>{
        if(fs.existsSync("storage.json")){
            let data=fs.readFileSync("storage.json");
            storage=JSON.parse(data);
        }
    }
}