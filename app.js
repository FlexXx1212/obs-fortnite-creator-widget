var main, subElem, subButton, subButtonText, pointer, mouseClick;

function setup() {
    main = document.getElementById("main");
    subElem = document.getElementById("subText");
    subButton = document.getElementById("subButton");
    subButtonText = document.getElementById("subButtonText");
    pointer = document.getElementById("pointer");

    mouseClick = new Audio('mouse_click.mp3');
    mouseClick.volume = 0.1;

    animate();
}



function animate() {
    main.classList.remove('shrunk');
    main.classList.add('grow');

    setTimeout(function(){
        pointer.style.visibility = "visible";
        pointer.classList.add("flyIn");
    },500);

    setTimeout(function(){
        subButton.classList.add("clicked");
        subButtonText.classList.add("clicked");
        subButtonText.innerText = "ABONNIERT";
        mouseClick.play();
    },2000);

    setTimeout(function(){
        pointer.classList.remove("flyIn");
        pointer.classList.add("flyOut");
    },3000);

    setTimeout(function(){
        main.classList.remove('grow');
        main.classList.add('shrunk');
    },4000);
}

setup();
