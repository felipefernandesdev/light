const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');
function lampadaQuebrada(){
    return lamp.src.indexOf('quebrada') > -1
};
function lampadaLigada(){
    if(!lampadaQuebrada()){
        lamp.src='./img/acesa.jpg'
    }
};
function lampadaDesligada(){
    if(!lampadaQuebrada()){
        lamp.src='./img/apagada.jpg'
    }
};
function lampadaQuebrando(){
    lamp.src='./img/quebrada.jpg'
};
turnOn.addEventListener('click', lampadaLigada);
turnOff.addEventListener('click', lampadaDesligada);
lamp.addEventListener('dblclick', lampadaQuebrando);