const express = require('express')

const connection = require('../conf')
const router = express.Router()

router.get('/', (req, res) => {
  connection.query('SELECT id, category_id, title, number,price, description, image_name FROM revue', (err, results) => {
    if (err) {
      res.status(500).send('Erreur losr de la connection')
    } else {
      res.json(results)
    }
  })
})

module.exports = router
