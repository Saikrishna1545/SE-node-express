const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello world from SaiKrishnas app!')
})

app.get('/about', (req, res) => {
    res.send('Heroku app')
  })

  app.get('/contact', (req, res) => {
    res.send('s538340@nwmissouri.edu')
  })

  app.get('/help', (req, res) => {
    res.send('Contact me for any help')
  })



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})