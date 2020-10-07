require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()

const routes = require('./routes/index')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cors('*'))

app.use('/livre', routes.livre)
app.use('/revue', routes.revue)
app.use('/mon-livre', routes.monLivre)
app.use('/ma-revue', routes.maRevue)
app.use('/livre/roman', routes.livre)

app.listen(process.env.PORT, (err) => {
  if (err) {
    console.log('Something wrong happened')
  } else {
    console.log(`server is listening on port ${process.env.PORT}`)
  }
})
