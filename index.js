// Create a room
var i = 0;
while (i < 49) {
    i++;
    document.body.innerHTML = ("<div class=col></div></div>").repeat(i);
};
var elements = document.querySelectorAll('div.col');

// Hero movement
var push = function (num) {
    elements[num].innerHTML = '<img id="hero" src="hero.png">';
};
var start = 0; //First hero position
push(start);

var del = function (num) {
    document.getElementById('hero').parentNode.removeChild(document.getElementById('hero'));
};

// Picture rotation
var rotate = function (deg) {
    document.getElementById('hero').style.transform = 'rotate(' + deg + 'deg)';
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

function goLeft() {
    if (find(LEFT_BORDER, start)) {
        del(start);
        start--;
        push(start);
        rotate(-90);
    } else {
        rotate(-90);
    }
};

function goRight() {
    if (find(RIGHT_BORDER, start)) {
        del(start);
        start++;
        push(start);
        rotate(90);
    } else {
        rotate(90);
    }
};

function goUp() {
    if (find(TOP_BORDER, start)) {
        del(start);
        for (i = 0; i < 7; i++) {
            start--;
        }
        push(start);

    } else {
        rotate(0);
    }
};

function goDown() {
    if (find(BOTTOM_BORDER, start)) {
        del(start);
        for (i = 0; i < 7; i++) {
            start++;
        }
        push(start);
        rotate(180);

    } else {
        rotate(180);
    }
};


// Random move generation
setInterval(function () {
    const ALL_GO_FUNCTIONS = [goDown, goRight, goUp, goLeft];
    var rand = Math.random() * ALL_GO_FUNCTIONS.length;
    rand = Math.floor(rand);
    ALL_GO_FUNCTIONS[rand]();
}, 1000);

// Keyboard control
document.addEventListener('keydown', event => {
    // если нажата клавиша влево
    if (event.keyCode === 37) {
        goLeft();
    }
    // если нажата клавиша вправо
    else if (event.keyCode === 39) {
        goRight();
    }
    // если нажата клавиша вверх
    else if (event.keyCode === 38) {
        goUp();
    }
    // если нажата клавиша вниз
    else if (event.keyCode === 40) {
        goDown();
    }
});
