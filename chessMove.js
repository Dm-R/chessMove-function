function chessMove(currentPosition, positionTo) {
    //Проверяем кол-во координат
    if (arguments.length == 2) {
        //Если кол-во координат задано верно:
        // Для удобства вычислений приводим символы к одинаковому регистру
        for (var i = 0; i < arguments.length; i++) {
            arguments[i] = arguments[i].toLowerCase();
        }
        //Проверяем соответствие координат допустимым значениям
        for (i = 0; i < arguments.length; i++) {
            if (!((arguments[i].charCodeAt(0) >= 97 && arguments[i].charCodeAt(0) <= 104) &&
                (arguments[i].charCodeAt(1) >= 49 && arguments[i].charCodeAt(1) <= 56))) {
                //В случае неверных координат возвращаем false
                return false;
            }
        }//Если заданы корректные координаты проверяем возможность перемещения за один ход
        return (Math.abs(currentPosition.charCodeAt(0) - positionTo.charCodeAt(0)) == Math.abs(currentPosition.charCodeAt(1) - positionTo.charCodeAt(1)));
    } else {
        // Если кол-во координат задано неверно возвращаем false
        return false;
    }
}