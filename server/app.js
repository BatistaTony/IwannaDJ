const express = require('express')
require('./database')

const app = express()

app.use(express.json())

app.use('/dj', require('./routes/dj'))


app.listen(5000, ()=>{
    console.log('server is running...')
})