const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');


function isLampBroken(){
    return lamp.src.indexOf('lamp_q') > -1
};

function lampOn(){
    if(!isLampBroken()){
        lamp.src = './img/lamp_a.jpg'
    }
};

function lampOff(){
    if(!isLampBroken()){
        lamp.src = './img/lamp_b.jpg'
    }
};

function lampBroken(){
    lamp.src = './img/lamp_q.jpg'
};



turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampBroken);
