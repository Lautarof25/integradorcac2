function resetCategory() {
    categoria.value = def.value
    categoria.disabled = true
}
function resetQuantity() {
    cantidad.value = ""
    cantidad.disabled = true
}

function inputFieldPaymentOff() {
    totalPagar.value = ""
    totalPagar.placeholder = "Total a Pagar: $"
    totalPagar.classList.remove("bg-success", "text-white")
    totalPagar.classList.remove("bg-warning")
}