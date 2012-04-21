//http://www.kongregate.com/games/zigah111/twinoo-the-brain-train

var operators = ['+', '+', '+', '+', '-', '-', '-', '/', '/', '*'];

function getRandomOperator(operators) {
    var length = operators.length;
    var randomOperator = operators[Math.floor(Math.random() * length)];

    return randomOperator;
}

function getFirstNumber(operator) {
    if ('+' == operator) {
        return getRandomNumber(8);
    } else if ('-' == operator) {
        return getRandomNumber(9);
    } else if ('*' == operator) {
        return getRandomNumber(9);
    } else if ('/' == operator) {
        return getRandomNumber(7, 2);
    }

    return null;
}

function getSecondNumber(firstNumber, operator) {
    if ('+' == operator) {
        return getRandomNumber(9 - firstNumber);
    } else if ('-' == operator) {
        if (9 == firstNumber)
            return getRandomNumber(8);
        else {
            var randomNumber = getRandomNumber(9);
            while (firstNumber == randomNumber) {
                randomNumber = getRandomNumber(9);
            }

            return randomNumber;
        }
    } else if ('*' == operator) {
        if (2 == firstNumber) {
            return getRandomNumber(4);
        } else if (3 == firstNumber) {
            return getRandomNumber(3);
        } else if (4 == firstNumber) {
            return getRandomNumber(2);
        }

        return 1;
    }

    return null;
}

window.prevRandomNumber = -1;
function getRandomNumber(limit, indexDelay) {
    //limit = Number(limit);
    if (!limit) limit = 9;
    if (!indexDelay) indexDelay = 1;

    if (1 == limit) {
        window.prevRandomNumber = -1;
        return 1;
    }

    var actualRandomNumber = Math.floor((Math.random() * limit) + indexDelay);

    while (window.prevRandomNumber == actualRandomNumber) {
        actualRandomNumber = Math.floor((Math.random() * limit) + indexDelay)
    }

    window.prevRandomNumber = actualRandomNumber;

    return actualRandomNumber;
}

/*function getExpressionString(firstNumber, operator, secondNumber) {
    return (firstNumber.toString() + operator.toString() + secondNumber.toString());
}

function getAnswer(expression) {
    return eval(expression);
}*/