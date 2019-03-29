var main, creatorCode, pointer, mouseClick, btnOK, keypress;

function setup() {
    main = document.getElementById("main");
    creatorCode = document.getElementById("creatorCode");
    pointer = document.getElementById("pointer");
    btnOK = document.getElementById("btnOK");

    mouseClick = new Audio('mouse_click.mp3');
    keypress = new Audio('keypress.mp3');
    mouseClick.volume = 0.1;
    keypress.volume = 0.1;

    setTimeout(animate,300);
}



function animate() {
    main.classList.remove('shrunk');
    main.classList.add('grow');

    setTimeout(function(){keypress.play(); creatorCode.innerText = "F"; },600);
    setTimeout(function(){keypress.currentTime = 0; keypress.play(); creatorCode.innerText = "FL"; },800);
    setTimeout(function(){keypress.currentTime = 0;keypress.play(); creatorCode.innerText = "FLE"; },1000);
    setTimeout(function(){keypress.currentTime = 0;keypress.play(); creatorCode.innerText = "FLEX"; },1200);
    setTimeout(function(){keypress.currentTime = 0;keypress.play(); creatorCode.innerText = "FLEXN"; },1400);
    setTimeout(function(){keypress.currentTime = 0;keypress.play(); creatorCode.innerText = "FLEXNI"; },1600);
    setTimeout(function(){keypress.currentTime = 0;keypress.play(); creatorCode.innerText = "FLEXNIK"; },1800);
    setTimeout(function(){keypress.currentTime = 0;keypress.play(); creatorCode.innerText = "FLEXNIKO"; },2000);

    setTimeout(function(){
        pointer.style.visibility = "visible";
        pointer.classList.add("flyIn");
    },2500);

    setTimeout(function(){
        btnOK.classList.add("clicked");
        btnOK.classList.add("clicked-grow");
        mouseClick.play();
    },3000);
    setTimeout(function(){
        btnOK.classList.remove("clicked-grow");
        //btnOK.classList.add("clicked-normal");
        mouseClick.play();
    },3200);

    setTimeout(function(){
        pointer.classList.remove("flyIn");
        pointer.classList.add("flyOut");
    },3500);

    setTimeout(function(){
        main.classList.remove('grow');
        main.classList.add('shrunk');
    },4500);
}

setup();
