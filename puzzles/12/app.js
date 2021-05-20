window.addEventListener("load",iniciar, false);

function iniciar(){

    var imgOrigen = document.getElementById("origen").getElementsByTagName("img");
    var imgDestino = document.getElementById("destino").getElementsByTagName("div");

    piezas(imgOrigen);

    for (let i = 0; i < imgOrigen.length; i++) {
        imgOrigen[i].addEventListener("dragstart",arrastrado,false);
    }

    for (let i = 0; i < imgDestino.length; i++) {
        imgDestino[i].addEventListener("dragenter",function(e){e.preventDefault();},false);
        imgDestino[i].addEventListener("dragover",function(e){e.preventDefault();},false);
        imgDestino[i].addEventListener("drop",function(e){soltado(e,i);},false);
    }


}

//Indica el elemento arrastrado y hace posible el translado de la información
function arrastrado(e){

    var elemento = e.target.id;
    e.dataTransfer.setData('Text', elemento);

}

//Verifica que la imagen seleccionada y arrastrada es la correcta para la posición indicada de destino
function soltado(e,destino){

    e.preventDefault();
    
    var elementoArrastrado = e.dataTransfer.getData('Text');
    var posicionDestino = destino+1;

    if(elementoArrastrado == posicionDestino){

        document.getElementById("destino").getElementsByTagName("div")[destino].appendChild(document.getElementById(elementoArrastrado));

    }


}

//Inserta aleatoriamente todas las imagenes correspondientes a las piezas
function piezas(imgOrigenP){

    var srcsOrigen = [1,2,3,4,5,6,7,8,9,10,11,12];

    shuffle(srcsOrigen);

    for(let i = 0;i<imgOrigenP.length;i++){

        imgOrigenP[i].setAttribute("src","../../imgs/12/"+srcsOrigen[i]+".jpg");
        imgOrigenP[i].setAttribute("id",srcsOrigen[i]);

    }

}

//Orden aleatorio automático de un array
function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}