const express = require('express');

const app = express();

const shopRouter = require('./routes/shop')
const adminRoutes = require('./routes/admin')

app.use(express.urlencoded({extended: true}));

app.use('/admin', adminRoutes)
app.use(shopRouter)

app.use((req, res, next) => {
  res.status(404).send('<h1>Page not found</h1>')
})

app.listen(3000)
