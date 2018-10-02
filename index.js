
//создал комнату
function matrixArray(rows, columns) {
    var arr = new Array();
    for (var i = 0; i < rows; i++) {
        arr[i] = new Array();
        for (var j = 0; j < columns; j++) {
            arr[i][j] = i;
        }
    }
    console.log(arr);
    return arr;
}
var myMatrix = matrixArray(7, 7);

(function(){ 
    
    for (i = 0; i <= myMatrix.length; i++) {
    document.querySelector('.grids').innerHTML = myMatrix.map(el => '<li class="element"></li>').join('');
    } 
    
})();


//Герой
var hero = document.querySelector('.hero');
myMatrix[0][0] = hero;




//switch(e.keyCode){
//         
//        case 37:  // если нажата клавиша влево
//                hero.indexOf = hero.indexOf - 1 ;
//            break;
//        
//        case 38:   // если нажата клавиша вверх
//                hero.indexOf = hero.indexOf - 1 ;
//            break;
//        
//        case 39:   // если нажата клавиша вправо
//                hero.indexOf = hero.indexOf + 1 ;
//            break;
//        
//        case 40:   // если нажата клавиша вниз
//                hero.indexOf = hero.indexOf + 1 ;
//            break;
//    };



