function calculateTicket(value) {
    // Hago el calculo sin descuento
    let totalWithoutDiscount = Number(cantidad.value) * Number(value)
    // Hago el cálculo con descuento
    let totalFinal = categoria.value === "Estudiante"
        ? totalWithoutDiscount * ((100 - estudiante) / 100)
        : categoria.value === "Trainee"
            ? totalWithoutDiscount * ((100 - trainee) / 100)
            : totalWithoutDiscount * ((100 - junior) / 100)
    return totalFinal
}

function summaryToPay() {
    if (checkQuantity(cantidad)) {
        if(cantidad.value == 1){
            var modalPOk =`
            <p>El total a pagar por <strong> ${cantidad.value} </strong>boleto es: $<strong>${calculateTicket(valueTicketToNumber)}</strong></p>
            <p>El resumen será enviado al email: <br><strong> ${correo.value}</strong></p>
            <p>A nombre de <strong> ${apellido.value}, ${nombre.value}</strong></p>
            
            `
        }else{
            var modalPOk =`
            <p>El total a pagar por <strong> ${cantidad.value} </strong>boletos es: $<strong>${calculateTicket(valueTicketToNumber)}</strong></p>
            <p>El resumen será enviado al email: <br><strong> ${correo.value}</strong></p>
            <p>A nombre de <strong> ${apellido.value}, ${nombre.value}</strong></p>
            
            `
        }
        correctResult(calculateTicket(valueTicketToNumber))
        modalTitle.innerHTML = modalTitleOk
        modalParragraph.innerHTML = modalPOk
        cleanAllFields()
    }
    else {
        modalTitle.innerHTML = modalTitleWrong
        modalParragraph.innerHTML = modalParragraphWrong
        wrongResult()
        cantidad.focus()
    }
}

function checkQuantity(cantidad) {
    // Devuelve true si el campo cantidad es correcto
    return cantidad.value >= 1 &&
        cantidad.value != "" && cantidad.value != 0;
}

const modalTitle = document.querySelector("#modalTitle")
const modalParragraph = document.querySelector("#modalParragraph")

let modalTitleOk =
    `
<h5 class="modal-title">🎉🎈¡Gracias por su compra!🎈🎉</h5>

    `

let modalTitleWrong =
    `
<h5 class="modal-title text-danger">😱❌¡Error!❌😱</h5>
       
`
let modalParragraphWrong = `
<p>Debe ingresar una cantidad válida</p>
`