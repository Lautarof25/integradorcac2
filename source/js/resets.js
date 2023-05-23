function resetCategoria() {
    categoria.value = def.value
    categoria.disabled = true
}
function resetCantidad() {
    cantidad.value = ""
    cantidad.disabled = true
}

function totalPagarOff() {
    totalPagar.value = ""
    totalPagar.placeholder = "Total a Pagar: $"
    totalPagar.classList.remove("bg-success", "text-white")
    totalPagar.classList.remove("bg-warning")
}