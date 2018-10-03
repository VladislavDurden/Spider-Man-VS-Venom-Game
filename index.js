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

var find =  function(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] == value) return false;
  }
  return true;
};

// Управление с клавиатуры
document.addEventListener('keydown', event => {
    
    const LEFT_BORDER =[0,7,14,21,28,35,42];
    const TOP_BORDER =[0,1,2,3,4,5,6];
    const RIGHT_BORDER=[6,13,20,27,34,41,48];
    const BOTTOM_BORDER=[42,43,44,45,46,47,48];
    
    

    // если нажата клавиша влево
    if (event.keyCode === 37) {
        
        if(find(LEFT_BORDER, start)){
            del(start);
            start--;
            push(start);
            rotate(-90);
        } else{
            rotate(-90);
        }
        
    }
    // если нажата клавиша вправо
    else if (event.keyCode === 39) {
        
        if(find(RIGHT_BORDER, start)){
            del(start);
            start++;
            push(start);
            rotate(90);
        } else{
            rotate(90);
        }
    }
    // если нажата клавиша вверх
    else if (event.keyCode === 38) {
        if(find(TOP_BORDER, start)){
            del(start);
            for (i = 0; i < 7; i++) {
            start--;
        }
            push(start);
            
        } else{
            rotate(0);
        }
    }
    
    
    
    // если нажата клавиша вниз
    else if (event.keyCode === 40) {
        if(find(BOTTOM_BORDER, start)){
            del(start);
            for (i = 0; i < 7; i++) {
            start++;
        }
            push(start);
            rotate(180);
            
        } else{
            rotate(180);
        }
    }

});
