function tocaSom (selectorAudio) {
    const elemento = document.querySelector(selectorAudio);

    if (elemento != null && elemento.localName === 'audio'){
        elemento.play(); 
    }
    else{
        alert('Elemento não encontrado'); //ou console.log('elemento nao encontrado')
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador ++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function() {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function(event) {
        if(event.code === 'Space' || event.code === 'Enter'){
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }

}