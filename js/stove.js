//left and right mounth
const leftMounth = document.getElementById('leftMounth');
const rightMounth = document.getElementById('rightMounth');

//glass
const glass = document.getElementById('glass');

//buttons
const btn = document.getElementsByClassName('btn');

// se for 0 está apagado, se não for, está acesso
let estadoforno = 1;

for (let i = 0; i <= (btn.length - 1); i++) {
    btn[i].addEventListener("click", function(){
        if (estadoforno == 0) {
            estadoforno = 1;
            glass.classList.remove('turnonglass');
        }
        else {
            glass.classList.add('turnonglass');
            estadoforno = 0;
        }
    })
}

let leftMounthState = 1;

for (let i = 0; i <= (btn.length - 1); i++) {
    btn[i].addEventListener("click", function(){
        if (leftMounthState == 0) {
            leftMounthState = 1;
            leftMounth.classList.remove('LturnMounth');
        }
        else {
            leftMounth.classList.add('LturnMounth');
            leftMounthState = 0;
        }
    })
}

let rightMounthState = 1;

for (let i = 0; i <= (btn.length - 1); i++) {
    btn[i].addEventListener("click", function(){
        if (rightMounthState == 0) {
            rightMounthState = 1;
            rightMounth.classList.remove('RturnMounth');
        }
        else {
            rightMounth.classList.add('RturnMounth');
            rightMounthState = 0;
        }
    })
}


