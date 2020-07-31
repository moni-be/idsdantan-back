require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()

const routes = require('./routes/index')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cors('*'))

app.use('/livres', routes.livres)
app.use('/revues', routes.revues)
app.use('/mon-livre', routes.monLivre)
app.use('/ma-revue', routes.maRevue)

app.listen(process.env.PORT, (err) => {
  if (err) {
    console.log('Something wrong happened')
  } else {
    console.log(`server is listening on port ${process.env.PORT}`)
  }
})
