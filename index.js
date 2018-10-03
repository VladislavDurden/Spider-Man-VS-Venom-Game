// Создаем комнату
var i = 0;
while (i < 49) {
    i++;
    document.body.innerHTML = (
        "<div class=col></div></div>"
    ).repeat(i);

};

var elements = document.querySelectorAll('div.col');
console.log(elements);




// Перемещение героя
var push = function (num) {
    elements[num].innerHTML = '<img id="hero" src="hero.png">';
};

var start = 24;
push(start);

var del = function (num) {
    document.getElementById('hero').parentNode.removeChild(document.getElementById('hero'));
};

// Поворот картинки
var rotate = function (deg) {
    document.getElementById('hero').style.transform = 'rotate(' + deg + 'deg)';
};

// Управление с клавиатуры
document.addEventListener('keydown', event => {

    // если нажата клавиша влево
    if (event.keyCode === 37) {
        del(start);
        start--;
        push(start);
        rotate(-90);

    }
    // если нажата клавиша вправо
    else if (event.keyCode === 39) {
        del(start);
        start++;
        push(start);
        rotate(90);
    }
    // если нажата клавиша вверх
    else if (event.keyCode === 38) {
        del(start);
        for (i = 0; i < 7; i++) {
            start--;
        }
        push(start);
    }
    // если нажата клавиша вниз
    else if (event.keyCode === 40) {
        del(start);
        for (i = 0; i < 7; i++) {
            start++;
        }
        push(start);
        rotate(180);
    }

});
