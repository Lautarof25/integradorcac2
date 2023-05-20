// 
let nombre = document.querySelector("#nombre")
let nombreClase = document.querySelector(".nombre")
let apellido = document.querySelector("#apellido")
let correo = document.querySelector("#correo")
let cantidad = document.querySelector("#cantidad")
let categoria = document.querySelector("#categoria")
let totalPagar = document.querySelector("#totalPagar")
const resumen = document.querySelector("#resumen")
const borrar = document.querySelector("#borrar")
const def = document.querySelector("#default")
const campos = document.querySelector('#campos')
const form = document.querySelector("#form")
// Desactivo los campos cantidad, categoria y botones 
function camposTickets(accion) {
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
camposTickets(0)
// Compruebo que los campos nombre, apellido y correo estén completados
form.addEventListener("keydown", function () {
    let nombreVacio = nombre.value === ""
    let apellidoVacio = apellido.value === ""
    let correoVacio = correo.value === ""

    if (nombreVacio || apellidoVacio || correoVacio) {
        camposTickets(0)
        totalPagarOff()
        resetCantidad()
        resetCategoria()
        volverACorreo()
    }
    else{
        if (validarEmail()) 
            camposTickets(1)
        else {
            camposTickets(0)
            totalPagarOff()
            volverACorreo()
        }
    }
    // Resalto los campos que faltan completar
    nombreVacio ? nombre.classList.add("incomplete") : nombre.classList.remove("incomplete");
    apellidoVacio ? apellido.classList.add("incomplete") : apellido.classList.remove("incomplete");
    validarEmail() ? correo.classList.remove("incomplete") : correo.classList.add("incomplete");
})

function volverACorreo(){
    resumen.addEventListener("focus", function(){
        if(resumen.classList.contains("disabled"))
            correo.focus()
    })
}

function validarEmail() {
    let correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (correoValido.test(correo.value))
        return true;
    return false;
}

function resumenAPagar() {
    // Hago el calculo sin descuento
    let resultadoSinDescuento = Number(cantidad.value) * 200
    // Hago el cálculo con descuento
    let resultadoFinal = categoria.value === "Estudiante"
        ? resultadoSinDescuento * 0.2
        : categoria.value === "Trainee"
            ? resultadoSinDescuento * 0.5
            : resultadoSinDescuento * 0.85
    if (comprobarCantidad(cantidad))
        resultadoCorrecto(resultadoFinal)
    else 
        resultadoIncorrecto()
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
    totalPagar.placeholder = "Debe ingresar una cantidad válida"
    totalPagar.classList.remove("bg-success", "text-white")
    totalPagar.classList.add("bg-warning")
    cantidad.value = ""
    cantidad.focus()
}

function resetSinCategoria() {
    if (totalPagar.value != "")
        totalPagarOff()
}

function resetSinCantidad() {
    if (totalPagar.value != "")
        totalPagarOff()
}

function borrarCampos() {
    totalPagarOff()
    resetCantidad()
    resetCategoria()
    resumen.classList.add("disabled")
    borrar.classList.add("disabled")
    nombreClase.focus()
}

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

resumen.addEventListener("click", resumenAPagar)
categoria.addEventListener("change", resetSinCategoria)
cantidad.addEventListener("change", resetSinCantidad)
borrar.addEventListener("click", borrarCampos)