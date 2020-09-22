const express = require('express')

const connection = require('../conf')
const router = express.Router()

router.get('/', (req, res) => {
  connection.query('SELECT id,title, author, price, description,image_name, category_id FROM books WHERE category_id="2"', (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la connexion')
    } else if (results.length === 0) {
      res.status(404).send('Nous n\'avons pas ce produit !')
    } else {
      res.json(results)
    }
  })
})

module.exports = router
