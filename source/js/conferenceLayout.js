const conferenceSection = document.querySelector("#conferenceSection");

const conferenceLayout = `
<div class="carousel-indicators">
                <button type="button" data-bs-target="#conferencia" data-bs-slide-to="0" class="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#conferencia" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#conferencia" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="./source/img/palacio_de_aguas_corrientes.webp" class="d-block w-100 opacity-50"
                        alt="buenos_aires">
                </div>
                <div class="carousel-item">
                    <img src="./source/img/plaza_san_juan.webp" class="d-block w-100 opacity-50" alt="buenos_aires">
                </div>
                <div class="carousel-item">
                    <img src="./source/img/obelisco.webp" class="d-block w-100 opacity-50" alt="buenos_aires">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#conferencia" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#conferencia" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            <div class="position-absolute bottom-25 start-50 text-end p-4 w-50 carousel-caption d-md-block hero__text">
                <h5 class="d-none d-md-block fs-2">Conf Bs As</h5>
                <p class="d-none d-md-block text-right">Bs As llega por primera vez a Argentina. Un evento para
                    compartir con nuestra comunidad el conoimiento y experiencia de los expertos que están creando el
                    futuro de Internet. Viven a conocer a miembros del evento, a otros estudiantes de Codo a Codo y los
                    oradores de primer nivel que tenemos para ti. Te esperamos!</p>
                <button type="button" class="btn btn-outline-light d-sm-inline-block d-none"
                    onclick="window.location.href='#formulario'">Quiero ser orador</button>
                <button type="button" class="btn btn-success d-sm-inline-block d-none"
                    onclick="window.location.href='#tickets'">Comprar tickets</button>
            </div>
            `
conferenceSection.innerHTML = conferenceLayout;