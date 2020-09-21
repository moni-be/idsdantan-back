const express = require('express')

const connection = require('../conf')
const router = express.Router()

router.get('/', (req, res) => {
  connection.query('SELECT id,title, author,price, description, image_name, category_id FROM books', (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la connection')
    } else {
      res.json(results)
    }
  })
})

module.exports = router
