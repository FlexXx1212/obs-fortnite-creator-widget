var main, creatorCode, pointer, mouseClick, btnOK, keypress, currentDelay, creatorCodeText;

function setup() {
    main = document.getElementById("main");
    creatorCode = document.getElementById("creatorCode");
    pointer = document.getElementById("pointer");
    btnOK = document.getElementById("btnOK");

    mouseClick = new Audio('mouse_click.mp3');
    keypress = new Audio('keypress.mp3');
    mouseClick.volume = 0.1;
    keypress.volume = 0.1;

    var params = getParameters();

    creatorCodeText = (typeof params.code === "undefined") ? "FLEXNIKO" : params.code;

    setTimeout(animate, 300);
}

function getParameters() {
    var parameterFragments = location.search.substr(1).split("&");
    var parameters = {}
    for (var i = 0; i < parameterFragments.length; i++) {
        var splittedParameter = parameterFragments[i].split("=");
        parameters[splittedParameter[0]] = decodeURIComponent(splittedParameter[1]);
    }
    return parameters;
}

function typeCreatorCode(code) {
    for (var i = 0; i < code.length; i++) {
        currentDelay += 200;
        setTimeout(setCreatorDigit.bind(null, code[i], i === 0), currentDelay);
    }
}

function setCreatorDigit(digit, overwrite) {
    keypress.currentTime = 0;
    keypress.play();
    if (overwrite)
        creatorCode.innerText = digit;
    else
        creatorCode.innerText += digit;
}

function animate() {
    main.classList.remove('shrunk');
    main.classList.add('grow');

    currentDelay = 600;

    typeCreatorCode(creatorCodeText);

    setTimeout(function () {
        pointer.style.visibility = "visible";
        pointer.classList.add("flyIn");
    }, currentDelay += 500);

    setTimeout(function () {
        btnOK.classList.add("clicked");
        btnOK.classList.add("clicked-grow");
        mouseClick.play();
    }, currentDelay += 500);
    setTimeout(function () {
        btnOK.classList.remove("clicked-grow");
        mouseClick.play();
    }, currentDelay += 200);

    setTimeout(function () {
        pointer.classList.remove("flyIn");
        pointer.classList.add("flyOut");
    }, currentDelay += 300);

    setTimeout(function () {
        main.classList.remove('grow');
        main.classList.add('shrunk');
    }, currentDelay += 1000);
}

setup();
