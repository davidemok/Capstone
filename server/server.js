const express = require("express")
const cors = require("cors")
const path = require('path')
const app = express()

app.use(cors())
app.use(express.json())

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '../client/index.html'))
// })
// app.get('/css', getCss)
// app.get('/js', getJava)

app.use(express.static('client'))

const port = process.env.PORT || 4000
app.listen(port, console.log(`Bubberduck, we are a go at 4000`))