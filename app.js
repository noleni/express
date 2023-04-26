const express = require('express');
const path = require('path');
const rootDir = require('./helper/path')

const app = express();

// configuring type of views files
app.set('view engine', 'ejs');

const shopRouter = require('./routes/shop')
const adminData = require('./routes/admin')

app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({extended: true}));

app.use('/admin', adminData.routes)
app.use(shopRouter)

app.use((req, res, next) => {
  res.status(404).render('404', {pageTitle : "404", path : ""})
})

app.listen(3000)
