//http://www.kongregate.com/games/zigah111/twinoo-the-brain-train

var operators = ['+', '-', '*', '/'];

function getRandomOperator(operators) {
    var length = operators.length;
    var randomOperator = operators[Math.floor(Math.random() * length)];

    return randomOperator;
}

function getFirstNumber(operator) {
    if (operator == '+') {
        return Math.floor((Math.random() * 8) + 1);
    } else if (operator == '-') {
        return Math.floor((Math.random() * 9) + 1);
    } else if (operator == '*') {
        return Math.floor((Math.random() * 9) + 1);
    } else if (operator == '/') {
        return Math.floor((Math.random() * 9) + 1);
    }

    return null;
}

function getSecondNumber(firstNumber, operator) {
    if (operator == '+') {
        return Math.floor((Math.random() * (9 - firstNumber)) + 1);
    }

    return null;
}

function getExpressionString(firstNumber, operator, secondNumber) {
    return (firstNumber.toString() + operator.toString() + secondNumber.toString());
}

function getAnswer(expression) {
    return eval(expression);
}