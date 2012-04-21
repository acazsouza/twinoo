//http://www.kongregate.com/games/zigah111/twinoo-the-brain-train

/*var operators = ['+', '-', '*', '/'];

function getRandomOperator(operators) {
    var length = operators.length;
    var randomOperator = operators[Math.floor(Math.random() * length)];

    return randomOperator;
}*/

function getFirstNumber(operator) {
    if ('+' == operator) {
        return getRandomNumber(8);
    } else if ('-' == operator) {
        return getRandomNumber(9);
    } else if ('*' == operator) {
        return getRandomNumber(9);
    } else if ('/' == operator) {
        return getRandomNumber(9);
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
    }

    return null;
}

window.prevRandomNumber = -1;
function getRandomNumber(limit) {
    //limit = Number(limit);
    if (!limit) limit = 9;

    if (1 == limit) {
        window.prevRandomNumber = -1;
        return 1;
    } 

    var actualRandomNumber = Math.floor((Math.random() * limit) + 1);

    while (window.prevRandomNumber == actualRandomNumber) {
        actualRandomNumber = Math.floor((Math.random() * limit) + 1)
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