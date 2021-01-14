const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello World - Annie App!')
})

app.get('/about', (req, res) => {
    res.send("This is an example for node-express.")
  })
  
  app.get('/contact', (req, res) => {
    res.send("contact for help")
  })
  
  app.get('/help/:id', (req, res) => {
    res.send(`For any further assistance.. ${req.params.id}`)
  })
  

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})