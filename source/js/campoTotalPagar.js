function resultadoCorrecto(valorFinal) {
    totalPagar.value = `Total a Pagar: $${valorFinal}`
    totalPagar.classList.add("bg-success", "text-white")
    totalPagar.classList.remove("bg-warning")
}

function resultadoIncorrecto() {
    totalPagar.placeholder = "Debe ingresar una cantidad válida"
    totalPagar.classList.remove("bg-success", "text-white")
    totalPagar.classList.add("bg-warning")
    cantidad.value = ""
    cantidad.focus()
}