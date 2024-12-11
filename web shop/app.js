const express = require('express')
const mysql = require('mysql2')

const app = express()

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'pasword',
    database: 'webshop'
})

db.connect((error)=> {
    if (error) {
        console.log('Error connecting to db',error)
        return
    }
    console.log('Db connection succesfull')
})

app.set('view engine', 'ejs')

app.listen(3000)

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    db.query('select * from products', (error, resoult)=> {
        if (error) {
            console.log('error selecting products', error)
        }
        console.log('products are:', resoult)
    })
    res.render('index', { title: 'Products' })
})