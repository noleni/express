const express = require('express');
const path = require('path');
const rootDir = require('./helper/path')

const app = express();

const shopRouter = require('./routes/shop')
const adminRoutes = require('./routes/admin')

app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({extended: true}));

app.use('/admin', adminRoutes)
app.use(shopRouter)

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, 'views', '404error.html'))
})

app.listen(3000)
