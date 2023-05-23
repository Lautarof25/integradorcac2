function calculoTicket(valor){
    // Hago el calculo sin descuento
    let resultadoSinDescuento = Number(cantidad.value) * Number(valor)
    // Hago el cálculo con descuento
    let resultadoFinal = categoria.value === "Estudiante"
        ?  resultadoSinDescuento * ((100 - estudiante) / 100)
        : categoria.value === "Trainee"
            ? resultadoSinDescuento * ((100 - trainee) / 100)
            : resultadoSinDescuento * ((100 - junior) / 100)
    return resultadoFinal
}

function resumenAPagar() {
    if (comprobarCantidad(cantidad))
        resultadoCorrecto(calculoTicket(valorTicketNumero))
    else
        resultadoIncorrecto()
}

function comprobarCantidad(cantidad) {
    // Devuelve true si el campo cantidad es correcto
    return cantidad.value >= 1 &&
        cantidad.value != "" &&
        Number.isInteger(Number(cantidad.value));
}