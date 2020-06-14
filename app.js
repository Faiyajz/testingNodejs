
//use path module
const path = require('path');
//use express module
const express = require('express');
//use hbs view engine
const hbs = require('hbs');

//use bodyParser middleware
const bodyParser = require('body-parser');
const app = express();

//set dynamic views file
app.set('views',path.join(__dirname,'views'));

//set view engine
app.set('view engine','hbs');

app.use(bodyParser.urlencoded({ extended: false }));
//set public folder as static folder for static file
app.use(express.static('public'));

//route for home page
app.get('/',(req,res)=>{
    //render index.hbs file
    res.render('index',{
        name:"Faiyaj Zaman"
    });
});

//route for home with params name

// app.get('/:name',(req, res)=>{
//     //render index.hbs file
//     res.render('index',{
//         name:req.params.name
//     });
// });

//route for showing form
app.get('/post',(req,res)=>{
    //render form.hbs file
    res.render('form');
});

//route for submit form by using post method
app.post('/post',(req,res)=>{
    res.render('index',{
        //get value from textname
        name:req.body.textname
    });
});


//route for about page 
app.get('/about',(req,res)=>{
    res.send('This is about page');
});

app.listen(8000,()=>{
    console.log('Server is running on port 8000');
});