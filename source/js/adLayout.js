const adSection = document.querySelector("#publi")

const adLayout = `
<div class="container-xxl">
<div class="row row-cols-sm-2">
    <img class="p-0 object-fit-cover" src="./source/img/honolulu.webp" alt="honolulu">
    <div class="bg-darkBlue text-white p-3 vh-25">
        <h2>Bs As - Octubre</h2>
        <p>Buenos Aires es la provincia y localidad más grande del estado de Argentina. En los Estados
            Unidos, honolulu es la más sureña de entre las principales ciudades estadounidenses. Aunque
            el
            nombre de Honolulu se refiere al área urbana en la costa sureste de la isla de Oahu, la
            ciudad y
            el condado de Honolulu han formado una ciudad-condado consolidada que cubre toda la ciudad
            (aproximadamente 600 km de superficie).</p>
        <button type="button" class="btn btn-outline-light">Conocé más</button>
    </div>
</div>
</div>`

adSection.innerHTML = adLayout;