const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://leo4109:Mvb6o4ctyoPN33Zn@cluster0.kmzo06u.mongodb.net/', {
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))

app.get('/', (req, res) => res.send('Hello World'))

app.listen(port, () => 
    console.log(`Example app listening on port ${port}`))

