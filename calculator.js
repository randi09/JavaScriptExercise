function calculate(operator, number1, number2) {
    if (operator == "multiply") {
    answer = number1 * number2
    console.log(`You chose ${operator} and your answer is ${answer}`)
} else if (operator == "divide") {
    answer = number1 / number2
    console.log(`You chose ${operator} and your answer is ${answer}`)
} else if (operator == "subtract") {
    answer = number1 - number2
    console.log(`You chose ${operator} and your answer is ${answer}`)
} else if (operator == "addition") {
    answer = number1 + number2
    console.log(`You chose ${operator} and your answer is ${answer}`)
} else {
    console.log("Error")
}
}
calculate("multiply", 15, 5)

calculate("divide", 55, 5)

calculate("subtract", 60, 10)

calculate("addition", 30, 5)
