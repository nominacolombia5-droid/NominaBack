const {
    calcular
} = require('../services/calculo.service');

const calcularNomina = (req, res) => {

    try {

        const resultado = calcular(req.body);

        res.json(resultado);

    } catch (error) {

        res.status(500).json({
            mensaje: 'Error al calcular',
            error: error.message
        });

    }

};

module.exports = {
    calcularNomina
};