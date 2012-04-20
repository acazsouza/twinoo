//http://www.kongregate.com/games/zigah111/twinoo-the-brain-train

/*var operators = ['+', '-', '*', '/'];

function getRandomOperator(operators) {
    var length = operators.length;
    var randomOperator = operators[Math.floor(Math.random() * length)];

    return randomOperator;
}*/

function getFirstNumber(operator) {
    if (operator == '+') {
        return getRandomNumber(8);
    } else if (operator == '-') {
        return getRandomNumber(9);
    } else if (operator == '*') {
        return getRandomNumber(9);
    } else if (operator == '/') {
        return getRandomNumber(9);
    }

    return null;
}

function getSecondNumber(firstNumber, operator) {
    if (operator == '+') {
        return getRandomNumber(9 - firstNumber);
    } else if (operator == '-') {
        return getRandomNumber();
    }

    return null;
}

function getRandomNumber(limit) {
    if (!limit)
        limit = 9;

    return Math.floor((Math.random() * limit) + 1);
}

/*function getExpressionString(firstNumber, operator, secondNumber) {
    return (firstNumber.toString() + operator.toString() + secondNumber.toString());
}

function getAnswer(expression) {
    return eval(expression);
}*/