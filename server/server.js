const express = require('express');
const app = express();
const expressValidator = require('express-validator');
const hbs = require('express-hbs');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const client = require('./routes/client.route');


app.use(express.static('public'));

app.engine('hbs', hbs.express4({
   partialsDir: __dirname + '/views/partials'
 }));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());
app.use(cookieParser());
app.use(session({secret: 'tax', saveUninitialized: false, resave: false}));
app.use('/signUp',client);

const PORT = process.env.PORT || 3000;





















app.listen(PORT, function(req, res){
   console.log('Server is running on PORT: ',PORT);
});