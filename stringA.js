let str1 = "Abacaxi"

const testeA = function(str) {
    let count = 0
    let str2 = str.toLowerCase()

    if (str2.includes("a")) {
        for (let i = 0; i < str.length; i++) {
            if (str2.charAt(i) == "a") {
                count++
            }
        }

        console.log(`A string informada possui ${count} letras A`)

    } else {
        console.log("A string informada não possui letra A")
    }
}

testeA(str1)