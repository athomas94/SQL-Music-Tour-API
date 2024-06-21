// DEPENDENCIES
const express = require('express')
const { Sequelize } = require('sequelize');
const app = express()

// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Tour API'
    })
})

//DATABASE
const { sequelize } = require('./models')
// const sequelize = new Sequelize(process.env.DB_CONNECTION)
const connectionTest = async () => {
try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    } catch (error) {
    console.error('Unable to connect to the database:', error);
    }
}

//CONTROLLERS
const bandsController = require('./controllers/bands_controller')
app.use('/bands', bandsController)

const stagesController = require('./controllers/stage_controller')
app.use('/stages', stagesController)

const eventsController = require('./controllers/event_controller')
app.use('/events', eventsController)

// LISTEN
connectionTest()
app.listen(process.env.PORT, () => {
    console.log(`🎸 Rockin' on port: ${process.env.PORT}`)
})