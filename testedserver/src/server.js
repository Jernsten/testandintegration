const express = require('express') // importera expressramverket till vår server applikation
const app = express() // en instans av expressservern att jobba med.

// Ta emot alla get-anrop till localhost:port/ här
app.get('/', (req, res) => {
    res.status(200).send('Welcome!!!!')
})

app.get('/ensidasomfinns', (req, res) => {
    res.status(200).send('I do exist!')
})

// starta servern, den lyssnar på port 3000
const server = app.listen(3000, () => {
    console.log('App is up at 3000')
})

module.exports = server