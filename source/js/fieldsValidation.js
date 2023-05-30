// Compruebo que los campos nombre, apellido y correo estén completados
form.addEventListener("input", function () {
    let nombreVacio = nombre.value === ""
    let apellidoVacio = apellido.value === ""
    let correoVacio = correo.value === ""

    if (nombreVacio || apellidoVacio || correoVacio) {
        inputTickets(0)
        inputFieldPaymentOff()
        resetQuantity()
        resetCategory()
        backToEmailInput()
    }
    else {
        if (verifyEmail()){
            inputTickets(1)
        }
        else {
            inputTickets(0)
            inputFieldPaymentOff()
            backToEmailInput()
        }
    }
    // Resalto los campos que faltan completar
    nombreVacio ? nombre.classList.add("incomplete") : nombre.classList.remove("incomplete");
    apellidoVacio ? apellido.classList.add("incomplete") : apellido.classList.remove("incomplete");
    verifyEmail() ? correo.classList.remove("incomplete") : correo.classList.add("incomplete");
})

function backToEmailInput() {
    resumen.addEventListener("focus", function () {
        if (resumen.classList.contains("disabled"))
            correo.focus()
    })
}

function backToNameInput(){
    nombre.focus()
}

function backToLastNameInput(){
    apellido.focus()
}

function verifyEmail() {
    let correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (correoValido.test(correo.value))
        return true;
    return false;
}