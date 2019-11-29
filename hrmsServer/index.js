const express = require('express')
require('./config/db/mongoose')
const adminseeding = require('./src/api/admin/adminseeder')


const app = express()
const port = process.env.PORT || 3000
const cors = require('cors')


app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(adminseeding)

app.listen(port, () => {
    console.log('Server is running at port ' + port)
})

