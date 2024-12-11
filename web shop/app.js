const express = require('express')

const credentials = {
    userName: 'bob@gmail.com',
    password: '1234'
}

const app = express()

app.set('view engine', 'ejs')

app.listen(3000)

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index', { title: 'Products' })
})