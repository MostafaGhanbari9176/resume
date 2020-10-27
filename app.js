const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')


const app = express()

app.set('views', 'views')
app.set('view engine', 'ejs')


app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')))
app.use(express.static(path.join(__dirname, '/node_modules//@fortawesome/fontawesome-free')))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.render('./index', {pageTitle: "MostafaGhanbari"})
})

app.listen(8083)