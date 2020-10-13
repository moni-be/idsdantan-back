const express = require('express')

const connection = require('../conf')
const router = express.Router()

router.get('/', (req, res) => {
  connection.query('SELECT id, category_id,title, author, price, description,image_name FROM books', (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la connection')
    } else {
      res.json(results)
    }
  })
})

router.get('/categorie/:id', (req, res) => {
  connection.query('SELECT name FROM category', [req.params.id], (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la connexion')
    } else if (results.length === 0) {
      res.status(404).send('Nous n\'avons pas cette categorie!')
    } else {
      res.json(results)
    }
  })
})

router.get('/conte', (req, res) => {
  connection.query('SELECT id,title, author, price, description,image_name, category_id FROM books WHERE category_id="1"', (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la connexion')
    } else if (results.length === 0) {
      res.status(404).send('Nous n\'avons plus de produits de ce genre !')
    } else {
      res.json(results)
    }
  })
})

router.get('/roman', (req, res) => {
  connection.query('SELECT id,title, author, price, description,image_name, category_id FROM books WHERE category_id="2"', (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la connexion')
    } else if (results.length === 0) {
      res.status(404).send('Nous n\'avons pas des romans !')
    } else {
      res.json(results)
    }
  })
})

router.get('/livre-reference', (req, res) => {
  connection.query('SELECT id,title, author, price, description,image_name, category_id FROM books WHERE category_id="4"', (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la connexion')
    } else if (results.length === 0) {
      res.status(404).send('Nous n\'avons pas ce genre !')
    } else {
      res.json(results)
    }
  })
})

module.exports = router
