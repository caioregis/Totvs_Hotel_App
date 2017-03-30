var fs = require('fs');

module.exports.save = function(req, res) {
    var hotel = req.body;
    fs.writeFileSync('app/data/hotels/' + req.params.id + '.json', JSON.stringify(hotel));
    res.send(hotel);
}

module.exports.getAll = function(req, res) {
    var path = 'app/data/hotels/';

    var files = null;
    try {
        files = fs.readdirSync(path);
    }
    catch (e) {
        console.log(e)
        res.send('[]');
        res.end();
    }

    if(files.length == 0) {
        res.setHeader('Content-Type', 'application/json');
        res.send('[]');
        res.end();   
    } else {
        var results = "[";
        for (var i = 0; i < files.length; i++) {
            if (files[i].indexOf(".json") == files[i].length - 5) {
                results += fs.readFileSync(path + "/" + files[i]) + ",";
            }
        }
        results = results.substr(0, results.length - 1);
        results += "]";

        res.setHeader('Content-Type', 'application/json');
        res.send(results);
        res.end();    
    }
    
};