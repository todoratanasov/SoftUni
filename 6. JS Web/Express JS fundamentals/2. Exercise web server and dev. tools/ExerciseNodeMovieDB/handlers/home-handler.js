const fs = require('fs');

module.exports = (req, res) => {
    if (req.path.startsWith('../views/home.html') && req.method === 'GET') {
        fs.readFile('../views/home.html', () => {
            if (err) {
                console.log("Error");
                return;
            }
            res.writeHead(200, {
                "Content-Type": 'text/html'
            });
            res.write(data);
            res.end();
        })
    } else {
        return true;
    }
}