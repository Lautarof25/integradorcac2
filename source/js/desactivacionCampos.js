// Desactivo los campos cantidad, categoria y botones 
function inputTickets(accion) {
    if (accion == 0) {
        cantidad.disabled = true
        categoria.disabled = true
        resumen.classList.add("disabled")
        borrar.classList.add("disabled")
    } else {
        cantidad.disabled = false
        categoria.disabled = false
        resumen.classList.remove("disabled")
        borrar.classList.remove("disabled")
    }
}
// Ejecuto la función apenas carga la página
inputTickets(0)