const contactSection = document.querySelector("#contactSection")

const contactLayout = 

`
<p class="text-center text-uppercase">Conviértete en un <br><span class="fs-1">orador</span></p>
<p class="text-center">Anótate como orador para dar una <a
        href="https://www.yoscoaching.com/blog/que-es-la-presentacion-ignite-y-como-se-hace-guia-de-5-pasos-para-crear-la-tuya/"
        target="_blank" class="text-dark"> charla ignite</a></a>. Cuéntanos de qué
    quieres hablar!</p>
<form class="row align-items-center">
    <div class="mb-3 col-sm-6">
        <input type="text" class="form-control" id="nombreOr" aria-describedby="nombre"
            placeholder="Nombre">
    </div>
    <div class="mb-3 col-sm-6">
        <input type="text" class="form-control" id="apellidoOr" placeholder="Apellido">
    </div>
    <div class="mb-3">
        <textarea style="height: 150px;" class="form-control" placeholder="Sobre qué quieres hablar?"
            id="floatingTextarea"></textarea>
        <div id="recomendacion" class="form-text">Recuerda incluir un título para tu charla.</div>
    </div>
    <div class="mb-3">
        <button class="btn btn-green col-12 text-white" type="button">Enviar</button>
    </div>
</form>
`

contactSection.innerHTML = contactLayout;