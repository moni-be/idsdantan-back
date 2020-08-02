const express = require('express')

const connection = require('../conf')
const router = express.Router()

router.get('/', (req, res) => {
  connection.query('SELECT books.id, category_id,title, author,price, description, image_name FROM books', (err, results) => {
    if (err) {
      res.status(500).send('Erreur losr de la connection')
    } else {
      res.json(results)
    }
  })
})

router.get('/:id', (req, res) => {
  connection.query('SELECT id, category_id, title, number,price, description, image_name FROM books WHERE id= ?', [req.params.id], (err, results) => {
    if (err) {
      res.status(500).send('Erreur pendant la connection')
    } else {
      res.json(results)
    }
  })
})

module.exports = router
