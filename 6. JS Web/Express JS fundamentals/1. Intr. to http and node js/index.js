const storage = require("./storage");
storage.put("cat","dog");
storage.put("dog","cat");
console.log(storage.getAll());
storage.update("cat","chiken")
console.log(storage.getAll());
storage.delete("dog");
console.log(storage.getAll());
storage.save();
storage.load();
console.log(storage.getAll());
storage.put("donkey","horse");
storage.save();