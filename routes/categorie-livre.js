const express = require('express')

const connection = require('../conf')
const router = express.Router()

router.get('/:id', (req, res) => {
  connection.query('SELECT name FROM category WHERE category.id=?', [req.params.id], (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la connexion')
    } else if (results.length === 0) {
      res.status(404).send('Nous n\'avons pas cette categorie !')
    } else {
      res.json(results)
    }
  })
})

module.exports = router
