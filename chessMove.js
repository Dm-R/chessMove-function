function chessMove(currentPosition, positionTo) {
    //ѕровер€ем кол-во координат
    if (arguments.length == 2) {
        //≈сли кол-во координат задано верно:
        // ƒл€ удобства вычислений приводим символы к одинаковому регистру
        for (var i = 0; i < arguments.length; i++) {
            arguments[i] = arguments[i].toLowerCase();
        }
        //ѕровер€ем соответствие координат допустимым значени€м
        for (i = 0; i < arguments.length; i++) {
            if (!((arguments[i].charCodeAt(0) >= 97 && arguments[i].charCodeAt(0) <= 104) &&
                (arguments[i].charCodeAt(1) >= 49 && arguments[i].charCodeAt(1) <= 56))) {
                //¬ случае неверных координат возвращаем false
                return false;
            }
        }//≈сли заданы корректные координаты провер€ем возможность перемещени€ за один ход
        return (Math.abs(currentPosition.charCodeAt(0) - positionTo.charCodeAt(0)) == Math.abs(currentPosition.charCodeAt(1) - positionTo.charCodeAt(1)));
    } else {
        // ≈сли кол-во координат задано неверно возвращаем false
        return false;
    }
}