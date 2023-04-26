const express = require('express');
const path = require('path');

const app = express();

const errorsController = require('./controllers/errors')

// configuring type of views files
app.set('view engine', 'ejs');

const shopRouter = require('./routes/shop')
const adminRoutes = require('./routes/admin')

app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({extended: true}));

app.use('/admin', adminRoutes)
app.use(shopRouter)

app.use(errorsController.get404)

app.listen(3000)
