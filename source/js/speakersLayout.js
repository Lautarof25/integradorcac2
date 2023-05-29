const speakerSection = document.querySelector("#speakerSection");

const speakerLayout = `
 <p class="text-center text-uppercase">Conoce a los <br><span class="fs-1">oradores</span></p>
<div class="row row-cols-1 row-cols-md-3 g-3">
    <div class="col">
        <div class="card" data-aos="fade-down-right">
            <img src="./source/img/steve_jobs.webp" class="card-img-top" alt="steve_jobs">
            <div class="card-body">
                <button type="button" class="btn btn-warning btn-sm">JavaScript</button>
                <button type="button" class="btn btn-info btn-sm">React</button>
                <h5 class="card-title">Steve Jobs</h5>
                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
                    consequatur. Incidunt tenetur pariatur voluptas? Hic.</p>
            </div>
        </div>
    </div>
    <div class="col">
        <div class="card" data-aos="fade-up-right">
            <img src="./source/img/bill_gates.webp" class="card-img-top" alt="bill_gates">
            <div class="card-body">
                <button type="button" class="btn btn-warning btn-sm">JavaScript</button>
                <button type="button" class="btn btn-info btn-sm">React</button>
                <h5 class="card-title">Bill Gates</h5>
                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
                    consequatur. Incidunt tenetur pariatur voluptas? Hic.</p>
            </div>
        </div>
    </div>
    <div class="col">
        <div class="card" data-aos="fade-up-left">
            <img src="./source/img/ada_lovelace.webp" class="card-img-top" alt="ada_lovelace">
            <div class="card-body">
                <button type="button" class="btn btn-secondary btn-sm">Negocios</button>
                <button type="button" class="btn btn-danger btn-sm">Startups</button>
                <h5 class="card-title">Ada Lovelace</h5>
                <p class="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut officia
                    et
                    impedit aspernatur voluptatum quis.</p>
            </div>
        </div>
    </div>
</div>
`
speakerSection.innerHTML = speakerLayout;