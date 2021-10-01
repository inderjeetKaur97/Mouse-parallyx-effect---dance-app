const fs = require('fs')
const path=require('path')
const express = require('express')
const app = express()
const port= 800

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/sda-contact', {useNewUrlParser: true, useUnifiedTopology: true});
console.log("connected to db")


//mongoose schema define
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone:  Number,
  address: String,
  message: String
});

const contact_info = mongoose.model('contact', contactSchema);

//Express related statements
const publicPath = path.join(__dirname, "/static");
app.use(express.static(publicPath));
app.use(express.urlencoded())


//PUG related statements
app.set('view engine', 'pug')  //using pug (template engine in express) - set the template engine = pug
app.set('views',path.join(__dirname,'templates')) //set the template dir


//read the html file in index.pug
app.get('/', function (req, res) {         //whenever someone sends GET req do this
    res.status(200).render('home.pug')
  })
app.get('/contact-submit', function (req, res) {         //whenever someone sends GET req do this
    res.status(200).render('home.pug')
  })
app.get('/contact', function (req, res) {         //whenever someone sends GET req do this
    res.status(200).render('contact.pug')
  })

  // save to mongoDB database
app.post('/contact', function (req, res) {         //whenever someone sends POST req do this
     var myData = new contact_info(req.body)
     myData.save().then(()=>{
        // res.send("this item has been saved to the database")
        setTimeout(() => {
        res.redirect('/contact-submit')
        console.log(myData)
          
        }, 2000);

    }).catch(()=>{
      res.status(404).send("item was not saved to the data base")
    })
  })


//Listening at port statement or start the server
app.listen(port,()=>{
    console.log(`This app is listening at ${port}`)
})

