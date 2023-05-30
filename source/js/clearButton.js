function cleanFields() {
    inputFieldPaymentOff()
    resetQuantity()
    resetCategory()
    resumen.classList.add("disabled")
    borrar.classList.add("disabled")
    nombreClase.focus()
}

function cleanAllFields(){
    inputFieldPaymentOff()
    resetQuantity()
    resetCategory()
    resumen.classList.add("disabled")
    borrar.classList.add("disabled")
    nombre.value = ""
    apellido.value = ""
    correo.value = ""
}