const header = document.querySelector("header")
const main = document.querySelector("main")
const footer = document.querySelector("footer")
const ticketSeccion = document.querySelector("#tickets")

const headerPlantilla = 
`
        <div class="container-xxl">
            <nav class="navbar navbar-expand-lg w-100">
                <div class="container-fluid">
                    <a class="navbar-brand text-white hover-overlay ripple" href="#">
                        <img class="navbar__img d-sm-inline-block d-none" src="./source/img/codoacodo.webp"
                            alt="logo_codo_a_codo">
                        Conf Bs As</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end text-center" id="navbarNav">
                        <ul class="navbar-nav d-flex">
                            <li class="nav-item">
                                <a class="nav-link text-white active link-info" aria-current="page"
                                    href="#conferencia">La
                                    conferencia</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-muted link-info" href="#oradores">Los oradores</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-muted link-info" href="#publi">El lugar y la fecha</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-muted link-info" href="#formulario">Conviértete en orador</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-success link-info" href="#tickets">Comprar tickets</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
`

const footerPlantilla = 

    `
<ul
class="d-flex justify-content-center align-items-center text-center flex-wrap flex-m-column gap-5 text-white m-0 p-0 list-unstyled ">
<li class="nav-item"><a class="nav-link text-white w-50px link-info" href="#">Preguntas frecuentes</a></li>
<li><a class="nav-link text-white w-50px link-info" href="#">Contáctanos</a></li>
<li><a class="nav-link text-white w-50px link-info" href="#">Prensa</a></li>
<li><a class="nav-link text-white w-50px link-info" href="#">Conferencias</a></li>
<li><a class="nav-link text-white w-50px link-info" href="#">Términos y condiciones</a></li>
<li><a class="nav-link text-white w-50px link-info" href="#">Privacidad</a></li>
<li><a class="nav-link text-white w-50px link-info" href="#">Estudiantes</a></li>
</ul>

`

const ticketsPlantilla = 
`

<div id="cards" class="row d-flex justify-content-evenly gap-2">

</div>
<p class="text-center text-uppercase">venta <br><span class="fs-1 fw-bold">valor de ticket $<span id="valorTicket"></span></span></p>
<form id="form" class="row align-items-center justify-content-center">
    <div id="campos" class="row">
        <div class="mb-3 col-sm-6">
            <input type="text" class="form-control nombre" id="nombre" aria-describedby="nombre"
                placeholder="Nombre" required>
        </div>
        <div class="mb-3 col-sm-6">
            <input type="text" class="form-control" id="apellido" placeholder="Apellido" required>
        </div>
        <div class="mb-3 col-sm-12">
            <input type="email" class="form-control" id="correo" placeholder="Correo" required>
        </div>
        <label for="cantidad" class="form-label col-sm-6">Cantidad
            <div class="mb-3 ">
                <input type="number" onkeypress="return event.charCode >= 48 && event.charCode <= 57" min="1" class="form-control" id="cantidad" aria-describedby="cantidad"
                    placeholder="cantidad">
            </div>
        </label>
        <label for="categoria" class="form-label col-sm-6">Categoria
            <div class="mb-3 ">
                <select id="categoria" class="form-select" name="categoria"
                    aria-label="Default seleccionar cateogria">
                    <option id="default" name="Estudiante" value="Estudiante" selected>Estudiante</option>
                    <option name="Trainee" value="Trainee">Trainee</option>
                    <option name="Junior" value="Junior">Junior</option>
                </select>
            </div>
        </label>
        <div class="mb-3 col-sm-12">
            <input type="email" class="form-control bg-celeste p-3" id="totalPagar"
                placeholder="Total a Pagar: $" disabled>
        </div>
        <div class="mb-3 col-sm-12 d-sm-flex gap-4">
            <button class="btn btn-green w-100 order-1 mb-1 text-white disabled" type="button"
                id="resumen">Resumen</button>
            <button class="btn btn-green w-100 mb-1 text-white disabled" type="reset"
                id="borrar">Borrar</button>
        </div>
    </div>
</form>


`

header.innerHTML = headerPlantilla
footer.innerHTML = footerPlantilla

// Evento



ticketSeccion.innerHTML = ticketsPlantilla
