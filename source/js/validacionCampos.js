// Compruebo que los campos nombre, apellido y correo estén completados
form.addEventListener("keyup", function () {
    let nombreVacio = nombre.value === ""
    let apellidoVacio = apellido.value === ""
    let correoVacio = correo.value === ""

    if (nombreVacio || apellidoVacio || correoVacio) {
        inputTickets(0)
        totalPagarOff()
        resetCantidad()
        resetCategoria()
        volverACorreo()
    }
    else {
        if (validarEmail())
            inputTickets(1)
        else {
            inputTickets(0)
            totalPagarOff()
            volverACorreo()
        }
    }
    // Resalto los campos que faltan completar
    nombreVacio ? nombre.classList.add("incomplete") : nombre.classList.remove("incomplete");
    apellidoVacio ? apellido.classList.add("incomplete") : apellido.classList.remove("incomplete");
    validarEmail() ? correo.classList.remove("incomplete") : correo.classList.add("incomplete");
})

function volverACorreo() {
    resumen.addEventListener("focus", function () {
        if (resumen.classList.contains("disabled"))
            correo.focus()
    })
}

function validarEmail() {
    let correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (correoValido.test(correo.value))
        return true;
    return false;
}