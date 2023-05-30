// Datos de las tarjetas
const discounts = {
    estudiante: 80,
    trainee: 50,
    junior: 15
}

const { estudiante, trainee, junior } = discounts;

let index = 0;

border = ["border-info", "border-primary", "border-warning"]
colors = ["bg-info","bg-primary","bg-warning"]

let htmlCards = ""
for (const [formacion, porcentaje] of Object.entries(discounts)) {
    let capitalize = formacion.charAt(0).toUpperCase() + formacion.slice(1)
    htmlCards +=
        `
    <div id="${index}" class="btn card cardClass text-center bg-transparent rounded-0 ${border[index]} mb-3 card-w " data-aos="flip-down">
        <div class="card-body text-secondary">
            <h5 class="card-title">${capitalize}</h5>
            <p class="card-text text-dark">Tienen un descuento</p>
        </div>
        <p class="fw-bold p-2">${porcentaje}%</p>
        <p class="text-muted fs-10">* presentar documentación</p>
    </div>
`
    index++
}

cards.innerHTML = htmlCards

const valueTicketToNumber = valorTicket.innerText = 200;

let cardClass = document.querySelectorAll(".cardClass")

cardClass.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "scale(1.1, 1.1)"
    })
})

cardClass.forEach(card => {
    card.addEventListener("mouseleave", () => {
        card.style.transform = "scale(1, 1)"
    })
})

cardClass.forEach(card => {
    card.addEventListener("click", () => {
        categoria.options[card.id].selected = true
    })
})