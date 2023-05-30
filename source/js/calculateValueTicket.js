function calculateTicket(value){
    // Hago el calculo sin descuento
    let totalWithoutDiscount = Number(cantidad.value) * Number(value)
    // Hago el cálculo con descuento
    let totalFinal = categoria.value === "Estudiante"
        ?  totalWithoutDiscount * ((100 - estudiante) / 100)
        : categoria.value === "Trainee"
            ? totalWithoutDiscount * ((100 - trainee) / 100)
            : totalWithoutDiscount * ((100 - junior) / 100)
    return totalFinal
}

function summaryToPay() {
    if (!checkQuantity(cantidad)){
        wrongResult()
    }
    else{
        correctResult(calculateTicket(valueTicketToNumber))
        modalQuantity.innerHTML = cantidad.value
        modalTotal.innerHTML = calculateTicket(valueTicketToNumber)
        setTimeout(() => {
            cleanAllFields()
          }, 3000);
    }
}

function checkQuantity(cantidad) {
    // Devuelve true si el campo cantidad es correcto
    return cantidad.value >= 1 &&
        cantidad.value != "" &&
        Number.isInteger(Number(cantidad.value));
}

const modalQuantity = document.querySelector("#modalQuantity")
const modalTotal = document.querySelector("#modalTotal")