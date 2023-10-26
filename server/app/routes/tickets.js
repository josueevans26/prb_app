var router = require('express').Router()
const ticketsController = require('../controllers/TicketsController')

router.get('/search', function (req, res) {
    res.json({ message: 'Vas a buscar un ticket' })
})
router.get('/', function (req, res) {
    // res.json({ message: 'Estás conectado a la API. Recurso: tickets' })
    ticketsController.getTickets((err, result) => {
        if (err) {
            return res.status(404).json({ error: 'Error al obtener tickets' })
        }
        res.status(200).json({ message: 'Tickets recuperados', result: result })
    })
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
    // res.json({ message: 'Vas a actualizar la ticket con id ' + req.params.id })
    ticketsController.updateTicket(req.params.id, req.body, (err, updates) => {
        if (err) {
            return res.status(500).json({ error: 'Error al actualizar el ticket' })
        }
        res.status(200).json({ message: 'Ticket actualizado', updates: updates });
    })
})
router.delete('/:id', function (req, res) {
    // res.json({ message: 'Vas a borrar la ticket con id ' + req.params.id })
    ticketsController.deleteTicket(req.params.id, (err, borrar) => {
        if (err) {
            return res.status(500).json({ error: 'Error al actualizar el ticket' })
        }
        res.status(200).json({ message: 'Ticket eliminado', borrar: borrar });
    })
})
module.exports = router