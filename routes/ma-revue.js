const express = require('express')

const connection = require('../conf')
const router = express.Router()

router.get('/:id', (req, res) => {
  connection.query('SELECT revue.id, title, number, price, description, image_name, name FROM revue JOIN category_revue ON category_revue.id=revue.id  WHERE revue.id = ?', [req.params.id], (err, results) => {
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
