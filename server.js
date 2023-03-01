const express = require('express');
const hbs =require('hbs');
var app =express();

app.use(express.static(__dirname + '/public'))
app.set('view engine', 'hbs');

hbs.registerPartials(__dirname+'/views/partials')


app.get('/',(req,res)=>{
res.render('home.hbs',{

    WelcomeMessage : 'صفحه اصلی سایت',
    getCurrentYear : new Date().getFullYear(),
    title : 'صفحه اصلی'

})
})
app.get('/about',(req,res)=>{
    
    res.render('about.hbs',{
        title : 'hashemi',
        year : new Date().getFullYear()
    })
    })

app.listen(3000,()=>{
console.log('server run on port 3000')

});