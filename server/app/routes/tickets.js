var router = require('express').Router()
// const db = require('../db')
const ticketsController = require('../controllers/TicketsController')

router.get('/search', function (req, res) {
    res.json({ message: 'Vas a buscar un ticket' })
})
router.get('/', function (req, res) {
    res.json({ message: 'Estás conectado a la API. Recurso: tickets' })
})
router.get('/:id', function (req, res) {
    res.json({ message: 'Vas a obtener la ticket con id ' + req.params.id })
})
router.post('/', function (req, res) {
    ticketsController.createTicket(req.body, (err, insertId) => {
        if (err) {
            return res.status(500).json({ error: 'Error al crear el ticket' });
        }
        res.status(201).json({ message: 'Ticket creado', id: insertId });
    });
})
router.put('/:id', function (req, res) {
    res.json({ message: 'Vas a actualizar la ticket con id ' + req.params.id })
})
router.delete('/:id', function (req, res) {
    res.json({ message: 'Vas a borrar la ticket con id ' + req.params.id })
})
module.exports = router