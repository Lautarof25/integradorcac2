const ticketSection = document.querySelector("#tickets")

const ticketsLayout = 
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
                id="resumen" data-bs-toggle="modal" data-bs-target="#exampleModal">Resumen</button>
            <button class="btn btn-green w-100 mb-1 text-white disabled" type="reset"
                id="borrar">Borrar</button>
        </div>
    </div>
</form>


`

ticketSection.innerHTML = ticketsLayout;