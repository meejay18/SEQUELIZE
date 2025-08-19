const express = require('express')
const app = express()
const port = 4300
app.use(express.json())

const playerRoute = require('./route/playerRoute')

app.use(playerRoute)

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
