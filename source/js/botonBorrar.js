function borrarCampos() {
    totalPagarOff()
    resetCantidad()
    resetCategoria()
    resumen.classList.add("disabled")
    borrar.classList.add("disabled")
    nombreClase.focus()
}