const express = require('express');

const router = express.Router();

const {
    calcularNomina
} = require('../controllers/calculo.controller');

router.post('/', calcularNomina);

module.exports = router;