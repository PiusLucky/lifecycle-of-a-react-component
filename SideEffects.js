let number = 0;

const updateNumber = () => {
    number = number + 1
    return number
}


updateNumber() // number global variable changes to 1
updateNumber() // number global variable changes to 2
