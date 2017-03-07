/**
 * Created by 1jiaqi3 on 3/6/2017.
 */
'use strict';

let express         = require('express'),
    bodyParser      = require('body-parser'),
    path            = require('path');

let app = express();

let staticPath = path.join(__dirname, '../../public');
let viewPath = path.join(__dirname, '../../src/server/views');

app.set('view engine', 'pug');
app.set('views', viewPath);
app.use(express.static(staticPath));
app.use(bodyParser.json({}));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
    res.render('base', {
        title: 'Landing'
    });
});

let server = app.listen(8080, function () {
    console.log('Example app listening on ' + server.address().port);
});