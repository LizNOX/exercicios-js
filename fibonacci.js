let num1 = 0
let num2 = 1
let num3 = 0
let num4 = 610

const fibonacci = function (n) {
    for (; num3 < n;) {
        num3 = num1 + num2
        num1 = num2
        num2 = num3
        console.log(num3)
    }

    if (n == 0 || n == num3) {
        console.log(`O número informado pertence à sequência fibonacci: ${n}`)
    } else {
        console.log(`O número informado NÃO pertence à sequência fibonacci: ${n}`)
    }

}

fibonacci(num4)