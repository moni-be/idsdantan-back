const express = require('express')

const connection = require('../conf')
const router = express.Router()

router.get('/:id', (req, res) => {
  connection.query('SELECT books.id, title, author,price, description, image_name,name FROM books JOIN category category ON category.id=books.id  WHERE books.id= ?', [req.params.id], (err, results) => {
    if (err) {
      console.log(err)
      res.status(500).send('Erreur de connection')
    } else if (results === 0) {
      res.status(404).send('C\'est produit n\'est plus disponible')
    } else {
      res.json(results[0])
    }
  })
})

module.exports = router
