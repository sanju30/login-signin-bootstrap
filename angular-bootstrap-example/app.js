//importing modules
var express = require('express');

var mongoose = require('mongoose');

var bodyparser = require('body-parser');

var cors = require('cors');

var path = require('path');

var app = express();

const route = require('C:/Users/sanjana.k/angular-bootstrap-example/src/routes/route');

//connect to mongoDB

mongoose.connect('mongodb://localhost:27017/ANGULAR-BOOTSTRAP-EXAMPLE');

 

//on connection

mongoose.connection.on('connected',()=>{

    console.log('Connected to database mongodb @ 27017');

});

 

mongoose.connection.on('error',(err)=>{

    if(err)

    {

        console.log('Error in db connection: '+err);

    }

});

 // api and express .
const port = 5000;
//adding middleware -cors
app.use(cors());
//body - parser
app.use(bodyparser.json());
//static files
app.use(express.static(path.join(__dirname,'public')));
//routes
app.use('/api',route);
//testing server
app.get('/',(req,res)=>{res.send('foobar');})
app.listen(port,()=>{

    console.log('Server started at port '+port);

});