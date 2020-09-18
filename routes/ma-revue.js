const express = require('express')

const connection = require('../conf')
const router = express.Router()

router.get('/:id', (req, res) => {
  connection.query('SELECT id, title, number, price, image_name, description FROM revue WHERE revue.id = ?', [req.params.id], (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la connection')
    } else if (results.length === 0) {
      res.status(404).send('C\'est produit n\'est plus disponible')
    } else {
      res.json(results[0])
    }
  })
})

module.exports = router
