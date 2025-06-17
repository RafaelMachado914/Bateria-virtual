document.querySelector(".w").addEventListener("click", buttonClick3);
document.querySelector(".w").addEventListener("keydown", keyDown);

document.querySelector(".a").addEventListener("click", buttonClick4);
document.querySelector(".a").addEventListener("keydown", keyDown);

document.querySelector(".s").addEventListener("click", buttonClick5);
document.querySelector(".s").addEventListener("keydown", keyDown);

document.querySelector(".d").addEventListener("click", buttonClick6);
document.querySelector(".d").addEventListener("keydown", keyDown);

document.querySelector(".j").addEventListener("click", buttonClick);
document.querySelector(".j").addEventListener("keydown", keyDown);

document.querySelector(".k").addEventListener("click", buttonClick);
document.querySelector(".k").addEventListener("keydown", keyDown);

document.querySelector(".l").addEventListener("click", buttonClick);
document.querySelector(".l").addEventListener("keydown", keyDown);

function buttonClick(){
    var audio = new Audio("sons/crash.mp3");
    audio.play();
}

function buttonClick1(){
    var audio = new Audio("sons/kick-bass.mp3");
    audio.play();
}

function buttonClick2(){
    var audio = new Audio("sons/snare.mp3");
    audio.play();
}

function buttonClick3(){
    var audio = new Audio("sons/tom-1.mp3");
    audio.play();
}

function buttonClick4(){
    var audio = new Audio("sons/tom-2.mp3");
    audio.play();
}

function buttonClick5(){
    var audio = new Audio("sons/tom-3.mp3");
    audio.play();
}

function buttonClick6(){
    var audio = new Audio("sons/tom-4.mp3");
    audio.play();
}

function keyDown(event){
switch(event.key){
    case 'w':
        buttonClick3();
        break;

        case 'a':
        buttonClick4();
        break;

        case 's':
        buttonClick5();
        break;

        case 'd':
        buttonClick6();
        break;

        case 'j':
        buttonClick2();
        break;

        case 'k':
        buttonClick();
        break;

        case 'l':
        buttonClick1();
        break;

}
}













var resultado = diferente != diferete

var resultado = "diferente" != "diferente"