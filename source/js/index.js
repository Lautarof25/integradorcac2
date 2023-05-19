// 
let nombre = document.querySelector("#nombre")
let apellido = document.querySelector("#apellido")
let correo = document.querySelector("#correo")
let cantidad = document.querySelector("#cantidad")
let categoria = document.querySelector("#categoria")
let totalPagar = document.querySelector("#totalPagar")
const resumen = document.querySelector("#resumen")
const borrar = document.querySelector("#borrar")
const def = document.querySelector("#default")
const campos = document.querySelector('#campos')
// Desactivo los campos cantidad, categoria y botones 
cantidad.disabled = true
categoria.disabled = true
resumen.classList.add("cursor_not_allowed")
borrar.classList.add("cursor_not_allowed")
// Compruebo que los campos nombre, apellido y correo estén completados
campos.addEventListener("input", function () {
    let nombreVacio = nombre.value.trim() === ""
    let apellidoVacio = apellido.value.trim() === ""
    let correoVacio = correo.value.trim() === ""
    let correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nombreVacio && apellidoVacio && correoVacio) {
        if (correoValido.test(correo.value.trim())) {
            cantidad.disabled = true
            categoria.disabled = true
            resumen.classList.add("cursor_not_allowed")
            borrar.classList.add("cursor_not_allowed")
        }
    } else {
        cantidad.disabled = false
        categoria.disabled = false
        resumen.classList.remove("cursor_not_allowed")
        borrar.classList.remove("cursor_not_allowed")
    }
})

// Agrego el escuchador

function resumenAPagar() {
    // Hago el calculo sin descuento
    let resultadoSinDescuento = Number(cantidad.value) * 200
    // Hago el cálculo con descuento
    let resultadoFinal = categoria.value === "Estudiante"
        ? resultadoSinDescuento * 0.2
        : categoria.value === "Trainee"
            ? resultadoSinDescuento * 0.5
            : resultadoSinDescuento * 0.85
    if (comprobarCantidad(cantidad)) {
        resultadoCorrecto(resultadoFinal)
    }
    else {
        resultadoIncorrecto()
    }
}

function comprobarCantidad(cantidad) {
    // Devuelve true si el campo cantidad es correcto
    return cantidad.value >= 1 &&
        cantidad.value != "" &&
        Number.isInteger(Number(cantidad.value));
}

function resultadoCorrecto(valorFinal) {
    totalPagar.value = `Total a Pagar: $${valorFinal}`
    totalPagar.classList.add("bg-success", "text-white")
    totalPagar.classList.remove("bg-warning")
}

function resultadoIncorrecto() {
    totalPagar.placeholder = `Debe ingresar una cantidad correcta`
    totalPagar.classList.remove("bg-success", "text-white")
    totalPagar.classList.add("bg-warning")
}

function resetSinCategoria() {
    if (totalPagar.value != "") {
        totalPagar.value = ""
        totalPagar.classList.remove("bg-success", "text-white")
        totalPagar.classList.remove("bg-warning")
    }
}

function resetSinCantidad() {
    if (totalPagar.value != "") {
        totalPagar.value = ""
        totalPagar.classList.remove("bg-success", "text-white")
        totalPagar.classList.remove("bg-warning")
    }
}

function borrarCampos() {
    totalPagar.value = ""
    totalPagar.placeholder = "Total a Pagar: $"
    cantidad.value = ""
    categoria.value = def.value
    totalPagar.classList.remove("bg-success", "text-white")
    totalPagar.classList.remove("bg-warning")
}

resumen.addEventListener("click", resumenAPagar)
categoria.addEventListener("change", resetSinCategoria)
cantidad.addEventListener("change", resetSinCantidad)
borrar.addEventListener("click", borrarCampos)
