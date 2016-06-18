var express = require('express');
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

var app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/', function(req, res) {
    var pageFile = __dirname + '/views/pages/index.html';
    res.sendFile(pageFile);
});

app.post('/api/fileanalyse', upload.single('f'), function(req,res){
    res.send({filename: req.file.originalname, filesize: req.file.size});
});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});


