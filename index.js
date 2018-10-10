// Create a room
var i = 0;
while (i < 49) {
    i++;
    document.body.innerHTML = ("<div class=col></div></div>").repeat(i);
};
var elements = document.querySelectorAll('div.col');

// Hero movement
var push = function (num) {
    elements[num].innerHTML = '<img id="hero" src="hero.gif">';
};
var pushVenom = function(num){
    elements[num].innerHTML = '<img id="venom" src="venom.gif">';
}

var start = 0; //First hero position
var venomPos = Math.floor(1 + Math.random()*49); //First venom position

push(start);
pushVenom(venomPos);


var del = function (num) {
    document.getElementById('hero').parentNode.removeChild(document.getElementById('hero'));
};
var venomDel = function(num){
    document.getElementById('venom').parentNode.removeChild(document.getElementById('venom'));
}

// Picture rotation
var rotate = function (deg) {
    document.getElementById('hero').style.transform = 'rotate(' + deg + 'deg)';
};
var venomRotate = function (deg) {
    document.getElementById('venom').style.transform = 'rotate(' + deg + 'deg)';
};

var mirror = function () {
    document.getElementById('hero').style.transform = 'scaleX(-1)';
};
var venomMirror = function () {
    document.getElementById('venom').style.transform = 'scaleX(-1)';
};


// Move functions with border-stopers
var find = function (array, value) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] == value) return false;
    }
    return true;
};

const LEFT_BORDER = [0, 7, 14, 21, 28, 35, 42];
const TOP_BORDER = [0, 1, 2, 3, 4, 5, 6];
const RIGHT_BORDER = [6, 13, 20, 27, 34, 41, 48];
const BOTTOM_BORDER = [42, 43, 44, 45, 46, 47, 48];



//                                                                          SPIDY movement
function goLeft() {
    if (find(LEFT_BORDER, start)) {
        del(start);
        start--;
        push(start);
        mirror();
    } else {
        mirror();
    }
};

function goRight() {
    if (find(RIGHT_BORDER, start)) {
        del(start);
        start++;
        push(start);
        rotate(0);
    } else {
        rotate(0);
    }
};

function goUp() {
    if (find(TOP_BORDER, start)) {
        del(start);
        for (i = 0; i < 7; i++) {
            start--;
        }
        push(start);
        rotate(-90);

    } else {
        rotate(-90);
    }
};

function goDown() {
    if (find(BOTTOM_BORDER, start)) {
        del(start);
        for (i = 0; i < 7; i++) {
            start++;
        }
        push(start);
        rotate(90);

    } else {
        rotate(90);
    }
};
//                                                               VENOM movement
function goLeftVenom() {
    if (find(LEFT_BORDER, venomPos)) {
        venomDel(venomPos);
        venomPos--;
        pushVenom(venomPos);
        venomMirror();
        gameplay();
    } else {
        venomMirror();
        gameplay();
    }
};

function goRightVenom() {
    if (find(RIGHT_BORDER, venomPos)) {
        venomDel(venomPos);
        venomPos++;
        pushVenom(venomPos);
        venomRotate(0);
        gameplay();
    } else {
        venomRotate(0);
        gameplay();
    }
};

function goUpVenom() {
    if (find(TOP_BORDER, venomPos)) {
        venomDel(venomPos);
        for (i = 0; i < 7; i++) {
            venomPos--;
        }
        pushVenom(venomPos);
        venomRotate(-90);
        gameplay();

    } else {
        venomRotate(-90);
        gameplay();
    }
};

function goDownVenom() {
    if (find(BOTTOM_BORDER, venomPos)) {
        venomDel(venomPos);
        for (i = 0; i < 7; i++) {
            venomPos++;
        }
        pushVenom(venomPos);
        venomRotate(90);
        gameplay();

    } else {
        venomRotate(90);
        gameplay();
    }
};


//                                                                                           Random venom move generation
setInterval(function () {
    const ALL_GO_FUNCTIONS = [goDownVenom, goRightVenom, goUpVenom, goLeftVenom];
    var rand = Math.random() * ALL_GO_FUNCTIONS.length;
    rand = Math.floor(rand);
    ALL_GO_FUNCTIONS[rand]();
}, 300);

// Keyboard control
document.addEventListener('keydown', event => {
    // если нажата клавиша влево
    if (event.keyCode === 37) {
        goLeft();
        gameplay();
    }
    // если нажата клавиша вправо
    else if (event.keyCode === 39) {
        goRight();
        gameplay();
    }
    // если нажата клавиша вверх
    else if (event.keyCode === 38) {
        goUp();
        gameplay();
    }
    // если нажата клавиша вниз
    else if (event.keyCode === 40) {
        goDown();
        gameplay();
    }
});
 

//                                                                             GAMEPLAY


var gameplay = function(){
    if(start === venomPos){
        location.reload();
    }
};

