var router = require('express').Router()
var tickets = require('./tickets')
const cors = require('cors');
// Configura CORS para permitir solicitudes desde 'http://localhost:3000'
const corsOptions = {
    origin: 'http://localhost:3000',
};
router.use(cors(corsOptions));

router.use('/tickets', tickets)

router.get('/', function (req, res) {
    res.status(200).json({ message: 'Estás conectado a nuestra API' })
})

module.exports = router