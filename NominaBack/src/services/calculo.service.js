const calcular = (datos) => {

    const salario = Number(datos.salario);

    const saludEmpleado = salario * 0.04;
    const pensionEmpleado = salario * 0.04;

    const saludEmpresa = salario * 0.085;
    const pensionEmpresa = salario * 0.12;

    const neto = salario - saludEmpleado - pensionEmpleado;

    return {

        salario,

        trabajador: {
            salud: saludEmpleado,
            pension: pensionEmpleado
        },

        empresa: {
            salud: saludEmpresa,
            pension: pensionEmpresa
        },

        netoRecibido: neto
    };

};

module.exports = {
    calcular
};