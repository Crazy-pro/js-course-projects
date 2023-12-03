const defaultResult = 0

let currentResult = defaultResult

currentResult = (currentResult + 10) * 8 / 2 - 3**3

let calculationDescription = `(${defaultResult} + 10) * 8 / 2 

                                - 3**3 =`

let errorMessage = 'An error \n' + // \n \' \" \\ \r  \t
                   'occured!'

outputResult(currentResult, calculationDescription)