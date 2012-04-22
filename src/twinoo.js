//http://www.kongregate.com/games/zigah111/twinoo-the-brain-train

function getRandomOperator(operators) {
    var length = operators.length;
    var randomOperator = operators[Math.floor(Math.random() * length)];

    return randomOperator;
}

function getFirstNumber(operator) {
    if ('+' == operator) {
        return getRandomNumber({ limit: 8 });
    } else if ('-' == operator) {
        return getRandomNumber({ limit: 8, indexDelay: 2 });
    } else if ('*' == operator) {
        return getRandomNumber({ limit: 9 });
    } else if ('/' == operator) {
        return getRandomNumber({ limit: 8, indexDelay: 2 });
    }

    return null;
}

function getSecondNumber(firstNumber, operator) {
    if ('+' == operator) {
        return getRandomNumber({ limit: 9 - firstNumber });
    } else if ('-' == operator) {
        return getRandomNumber({ limit: 9 - (10 - firstNumber) });
    } else if ('*' == operator) {
        if (2 == firstNumber) {
            return getRandomNumber({ limit: 4 });
        } else if (3 == firstNumber) {
            return getRandomNumber({ limit: 3 });
        } else if (4 == firstNumber) {
            return getRandomNumber({ limit: 2 });
        }

        return 1;
    } else if ('/' == operator) {
        if (2 == firstNumber) {
            return getRandomNumber({ limit: 2 });
        } else if (3 == firstNumber) {
            var randomNumber = getRandomNumber({ limit: 3 });
            while (2 == randomNumber) {
                randomNumber = getRandomNumber({ limit: 3 });
            }

            return randomNumber;
        } else if (4 == firstNumber) {
            return getRandomNumber({ limit: 2 });
        } else if (5 == firstNumber) {
            var randomNumber = getRandomNumber({ limit: 5 });
            while (2 == randomNumber || 3 == randomNumber || 4 == randomNumber) {
                randomNumber = getRandomNumber({ limit: 5 });
            }

            return randomNumber;
        } else if (6 == firstNumber) {
            var randomNumber = getRandomNumber({ limit: 6 });
            while (5 == randomNumber || 4 == randomNumber) {
                randomNumber = getRandomNumber({ limit: 6 });
            }

            return randomNumber;
        } else if (7 == firstNumber) {
            var randomNumber = getRandomNumber({ limit: 5 });
            while (2 == randomNumber || 3 == randomNumber || 4 == randomNumber || 5 == randomNumber || 6 == randomNumber) {
                randomNumber = getRandomNumber({ limit: 5 });
            }

            return randomNumber;
        } else if (8 == firstNumber) {
            var randomNumber = getRandomNumber({ limit: 8 });
            while (3 == randomNumber || 5 == randomNumber || 6 == randomNumber || 7 == randomNumber) {
                randomNumber = getRandomNumber({ limit: 8 });
            }

            return randomNumber;
        } else if (9 == firstNumber) {
            var randomNumber = getRandomNumber({ limit: 9 });
            while (2 == randomNumber || 4 == randomNumber || 5 == randomNumber || 6 == randomNumber || 7 == randomNumber || 8 == randomNumber) {
                randomNumber = getRandomNumber({ limit: 9 });
            }

            return randomNumber;
        }
    }

    return null;
}

function getRandomNumber(params) {
    var o = {
        limit: 9,
        indexDelay: 1,
        except: null,
        prevRandomNumberId: "universalPrevRandomNumberId"
    }

    for (param in params) {
        o[param] = params[param];
    }

    if (1 == o.limit) {
        prevRandomNumber = -1;
        return 1;
    }

    var actualRandomNumber = Math.floor((Math.random() * o.limit) + o.indexDelay);

    while (window[o.prevRandomNumberId] == actualRandomNumber || (o.except && (actualRandomNumber == o.except))) {
        actualRandomNumber = Math.floor((Math.random() * o.limit) + o.indexDelay)
    }

    window[o.prevRandomNumberId] = actualRandomNumber;

    return actualRandomNumber;
}

function buildExpression(firstNumber, operator, secondNumber) {
    var answer = Number(eval(firstNumber.toString() + operator.toString() + secondNumber.toString()));

    return {
        firstNumber: firstNumber,
        operator: operator,
        secondNumber: secondNumber,
        correctAnswer: answer
    }
}