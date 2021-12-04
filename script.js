let ellement = ["1", "2"];

let btn = document.getElementById("btn");
let text = document.getElementById("text");

var stringConstructor = "test".constructor;

btn.addEventListener("click", function() {
    ellement = text.value.split(";");
    var w_p = null
    var o_w_p = w_p
    if(typeof w_p == 'string'){
        w_p = null;
        for (let index = 0; index < ellement.length; index++) {
            if(ellement[index] === o_w_p){
                w_p = index;
                break;
            }
            
        }
    }
    if(w_p == null){
        w_p = getRandomInt(ellement.length);
    }
    n=-w_p+4-26;
    n_s=n;
    start_time = Date.now();
    boucle();
})

const text_area = [];

for (let index = 0; index < 9; index++) {
    text_area.push(document.getElementById((index+1).toString()));
}


function set(){
    for (let index = 0; index < 9; index++) {
        text_area[index].innerText = ellement[verif(index-n)];
    }
}


function doAdelay(time, func){
    setTimeout(func,time*1000);
};

function verif(n){
    if(n<0){
        return verif(n+ellement.length);
    }else if(n>=ellement.length) {
        return verif(n-ellement.length);
    }
    return n
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function boucle(){
    t=(Date.now()-start_time)/1000;
    n += 1;
    s = (t**(1/2))/4;
    set();
    if(n<n_s+26){
        doAdelay(s, boucle);
    }else{
        n=n_s+26;
        set();
        doAdelay(0.7, function () {
            text_area[4].classList.add('winner');
        })
    }
}
