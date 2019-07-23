function chessMove(currentPosition, positionTo) {
    //��������� ���-�� ���������
    if (arguments.length == 2) {
        //���� ���-�� ��������� ������ �����:
        // ��� �������� ���������� �������� ������� � ����������� ��������
        for (var i = 0; i < arguments.length; i++) {
            arguments[i] = arguments[i].toLowerCase();
        }
        //��������� ������������ ��������� ���������� ���������
        for (i = 0; i < arguments.length; i++) {
            if (!((arguments[i].charCodeAt(0) >= 97 && arguments[i].charCodeAt(0) <= 104) &&
                (arguments[i].charCodeAt(1) >= 49 && arguments[i].charCodeAt(1) <= 56))) {
                //� ������ �������� ��������� ���������� false
                return false;
            }
        }//���� ������ ���������� ���������� ��������� ����������� ����������� �� ���� ���
        return (Math.abs(currentPosition.charCodeAt(0) - positionTo.charCodeAt(0)) == Math.abs(currentPosition.charCodeAt(1) - positionTo.charCodeAt(1)));
    } else {
        // ���� ���-�� ��������� ������ ������� ���������� false
        return false;
    }
}