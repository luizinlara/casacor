// ------------step-wizard-------------
$(document).ready(function () {
    $('input[name="celular"]').mask('(00) 00000-0000');
    $('.letras').on('input', function () {
        $(this).val(function (_, val) {
            return val.replace(/[^a-zA-Z\s]/g, '');
        });
    });


    $('.nav-tabs > li a[title]').tooltip();

    //Wizard
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {

        var target = $(e.target);

        if (target.parent().hasClass('disabled')) {
            return false;
        }
    });

    $(".next-step").click(function (e) {

        var active = $('.wizard .nav-tabs li.active');
        active.next().removeClass('disabled');
        nextTab(active);

    });
    $(".prev-step").click(function (e) {

        var active = $('.wizard .nav-tabs li.active');
        prevTab(active);

    });
});

function nextTab(elem) {
    $(elem).next().find('a[data-toggle="tab"]').click();
}

function prevTab(elem) {
    $(elem).prev().find('a[data-toggle="tab"]').click();
}


$('.nav-tabs').on('click', 'li', function () {
    $('.nav-tabs li.active').removeClass('active');
    $(this).addClass('active');
});


// Inicializar o Cropper.js


// Função para configurar o Cropper.js
function setupCropper(imageId, width, height) {
    console.log(imageId, width, height);

    var image = document.getElementById('image' + imageId);
    console.log(image)

    var cropper = new Cropper(image, {
        aspectRatio: width / height,
        viewMode: 3,
        dragMode: 'move',
    });

    document.getElementById(`cropButton${imageId}`).addEventListener('click', function () {
        var croppedCanvas = cropper.getCroppedCanvas({
            width: width,
            height: height,
        });
        document.getElementById(`img${imageId}`).src = croppedCanvas.toDataURL('image/jpeg')
        $(`input[name="cripImage${imageId}"]`).val(croppedCanvas.toDataURL('image/jpeg'))
        // console.log('Enviando imagem de ' + imageId + ' para o servidor.');
    });
}


document.querySelectorAll('input[type="file"]').forEach(function (input) {
    input.addEventListener('change', function (e) {
        var file = e.target.files[0];

        if (file) {
            var reader = new FileReader();
            reader.onload = function (event) {
                var imageContainerId = `imageContainer${e.target.id}`;
                var imageId = `image${e.target.id}`;
                document.getElementById(imageContainerId).innerHTML = `<img id="${imageId}" alt="Imagem para Recortar">`;
                document.getElementById(imageId).src = event.target.result;
                setupCropper(e.target.id, input.dataset.width, input.dataset.height); // Inicializar o Cropper.js com a nova imagem carregada
            };
            reader.readAsDataURL(file);
        }
    });
});

// formulario
document.getElementById('myForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(this);

    fetch('/backend/api.php', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert(data.msg);
                window.location.href = './'
            } else {
                console.error('Erro ao adicionar.');
            }
        })
        .catch(error => {
            console.error('Erro:', error);
        });
});

document.getElementById('cropButton3').addEventListener('click', () => {
    $(`#nomeCliente`).text($(`input[name="name"]`).val())
    $(`#cargoCliente`).text($(`input[name="empresa"]`).val())
})