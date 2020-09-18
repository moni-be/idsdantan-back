const express = require('express')

const connection = require('../conf')
const router = express.Router()

router.get('/:id', (req, res) => {
  connection.query('SELECT id, category_id, title, number,price, description, image_name FROM revue WHERE id = ?', [req.params.id], (err, results) => {
    if (err) {
      res.status(500).send('Erreur losr de la connection')
    } else if (results.length === 0) {
      res.status(404).send('C\'est produit n\'est plus disponible')
    } else {
      res.json(results)
    }
  })
})

module.exports = router
