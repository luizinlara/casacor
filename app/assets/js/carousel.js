function atualizarCarrossel(data) {
     let carrousel = $('.carousel-inner')
    data.forEach((d, i) => {
        carrousel.append(`
        <div class="carousel-item ${i === 0 ? 'active' : ''}">
                <div class="content-6-mian ">
                    <div class="container py-lg-5 py-md-4">
                        <div class="row">
                            <div class="col-lg-6">
                                <img src="${d.imagem1}" class="w-100 shadowslide" alt="Arte"/>
                            </div>
                            <div class="col-lg-6 p-5">
                                <h2 class="slideh3">
                                    ${d.nome}
                                </h2>
                                <p>${d.cargo}</p>
                                <div class="hrdiv pt-5 pb-2">
                                    <h3 class="color-e"><b>Casa</b>cor - Corpo e Morada</h3>
                                </div>
                            </div>
                        </div>
                        <div class="row pt-4">
                            <div class="col-lg-2">

                                <div class="slideVerticalCircle"></div>

                            </div>
                            <div class="col-lg-3 py-lg-0 py-5">
                                <img src="${d.imagem2}" class="w-100 shadowslide" alt="Arte"/>
                            </div>
                            <div class="col-lg-3 py-lg-0  py-5">
                                <img src="${d.imagem3}" class="w-100 shadowslide" alt="Arte"/>
                            </div>
                            <div class="col-lg-3">
                                <div class="div-circles">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`)
    })
}

function atualizarDados() {
    $('.carousel-inner').html('')
    fetch('https://gardentec.000webhostapp.com/backend/api.php')
        .then(response => response.json())
        .then(data => {
            atualizarCarrossel(data);
        })
        .catch(error => {
            console.error('Erro ao buscar dados da API: ' + error);
        });
}

window.onload = atualizarDados;
setInterval(atualizarDados, 300000);