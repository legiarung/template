require('dotenv').config()
const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')
const connectDB = require('./config/db')


const users = require('./server/routes/users')
const login = require('./server/routes/login')
const accessToken = require('./server/routes/accessToken')

const food = require('./server/routes/food')

// const admin = require('./server/routes/admin')

// set up express app
const app = express();
app.use(cors())

// Khoi dong bodyParser middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Khoi dong express middleware
app.use(express.json())

// Ket noi co so du lieu
connectDB()

// set up home route

app.use('/users', users)
app.use('/login', login)
app.use('/accessToken', accessToken)
app.use('/food', food)

const PORT = 5000

app.listen(PORT, () => {
    console.log(`Our server is running on port ${PORT}`);
});