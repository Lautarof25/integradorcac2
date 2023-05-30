const header = document.querySelector("header")
const main = document.querySelector("main")
const footer = document.querySelector("footer")

const headerLayout =
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
                            <a id="conference" class="linkItem nav-link text-white active link-info" aria-current="page"
                                href="#conferenceSection">La
                                conferencia</a>
                        </li>
                        <li class="nav-item">
                            <a id="speakers" class="linkItem nav-link text-muted link-info" href="#speakerSection">Los oradores</a>
                        </li>
                        <li class="nav-item">
                            <a id="place_date" class="linkItem nav-link text-muted link-info" href="#publi">El lugar y la fecha</a>
                        </li>
                        <li class="nav-item">
                            <a id="contact_form" class="linkItem nav-link text-muted link-info" href="#contactSection">Conviértete en orador</a>
                        </li>
                        <li class="nav-item">
                            <a id="ticketLayout" class="linkItem nav-link text-success link-info" href="#tickets">Comprar tickets</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
`

const footerLayout =

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

header.innerHTML = headerLayout
footer.innerHTML = footerLayout