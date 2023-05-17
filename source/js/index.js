
// Traigo el campo cantidad 
let cantidad = document.querySelector("#cantidad")
// Traigo el campo categoría y su valor
let categoria = document.querySelector("#categoria")
// Traigo el campo total a pagar y su valor
let totalPagar = document.querySelector("#totalPagar")
// Traigo el botón resumen
const resumen = document.querySelector("#resumen")
// Traigo el botón borrar
const borrar = document.querySelector("#borrar")
// Traigo el id default de cateogría
const def = document.querySelector("#default").value
// Agrego el escuchador

function resumenAPagar() {
    // Hago el calculo
    let resultadoSinDescuento = Number(cantidad.value) * 200
    // Hago el cálculo con descuento
    let resultadoFinal = categoria.value === "Estudiante"
        ? resultadoSinDescuento * 0.2
        : categoria.value === "Trainee"
            ? resultadoSinDescuento * 0.5
            : resultadoSinDescuento * 0.85
    if (cantidad.value != 0 || cantidad.value != "") {
        totalPagar.value = `Total a Pagar: $${resultadoFinal}`
        totalPagar.classList.add("bg-success", "text-white")
        totalPagar.classList.remove("bg-warning")
    }
    else {
        totalPagar.placeholder = `Debe ingresar una cantidad`
        totalPagar.classList.remove("bg-success", "text-white")
        totalPagar.classList.add("bg-warning")
    }
}


function resetCantidad(){
    totalPagar.placeholder = "Total a Pagar: $"
    totalPagar.value = ""
    cantidad.value = ""
    totalPagar.classList.remove("bg-success", "text-white")
    totalPagar.classList.remove("bg-warning")
}

function borrarCampos() {
    totalPagar.placeholder = "Total a Pagar: $"
    totalPagar.value = ""
    cantidad.value = ""
    categoria.value = def
    totalPagar.classList.remove("bg-success", "text-white")
    totalPagar.classList.remove("bg-warning")
}

resumen.addEventListener("click", resumenAPagar)
categoria.addEventListener("change", resetCantidad)
borrar.addEventListener("click", borrarCampos)