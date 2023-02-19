const express = require('express');
const mongoose = require('mongoose')
const entryRoutes = require('./Routes/Entry-routes');

const app = express();

const dbUrl = "mongodb+srv://student:phantompain@cluster0.nvcdey7.mongodb.net/node-db?retryWrites=true&w=majority"
mongoose.connect(dbUrl)
                .then(result => app.listen(3000))
                .catch(err => console.log(err));

app.use(express.static('public'))
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs')



app.get('/', (req,res) => {
 
    res.redirect('/entries')
})


app.get('/about', (req,res) => {
    res.render('about',{title:'about'});
})

app.use(entryRoutes);

app.use((req,res) => {
    res.render('404', {title:'Error Page'});
})  