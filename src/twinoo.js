//http://www.kongregate.com/games/zigah111/twinoo-the-brain-train

var operators = ['+', '-', '/'];

function getRandomOperator(operators) {
    var length = operators.length;
    var randomOperator = operators[Math.floor(Math.random() * length)];

    return randomOperator;
}

function getRandomNumber() {
    return Math.floor((Math.random() * 9) + 1);
}

function getExpressionString(firstNumber, operator, secondNumber) {
    return (firstNumber.toString() + operator.toString() + secondNumber.toString());
}

function getAnswer(expression) {
    return eval(expression);
}