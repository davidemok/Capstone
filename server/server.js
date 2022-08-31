require('dotenv').config()
const express = require("express")
const app = express()
const cors = require("cors")
const path = require('path')
const {SERVER_PORT} = process.env

app.use(cors())
app.use(express.json())

const { seed, add1, add2, add3, add4, add5, add6, fetchCart, updateProduct, deleteProduct } = require("./controller/controller")

app.use(express.static('client'))

app.post('/seed', seed)
app.get('/add1', add1)
app.get('/add2', add2)
app.get('/add3', add3)
app.get('/add4', add4)
app.get('/add5', add5)
app.get('/add6', add6)
app.get('/cart', fetchCart)
app.put('/cart/:id', updateProduct)
app.delete('/cart/:id', deleteProduct)

app.listen(SERVER_PORT, console.log(`Bubberduck, we are a go at ${SERVER_PORT}`))