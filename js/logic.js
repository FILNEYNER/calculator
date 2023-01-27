import { print } from './utils/print.js'
const main = () => {
    let firstNumber = '';
    let secontNumber = '';
    let sign = '';
    let finish = false;

    const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
    const action = ['-', '+', 'x', '/']

    return (key) => {

        if(key === 'АС'){
            firstNumber = '';
            secontNumber = '';
            sign = '';
            finish = false;
            print('0')
        }

        if(key === 'С'){
            firstNumber = '';
            print('0')
        }

        if(digit.includes(key)){
            if(firstNumber === '' && sign === ''){
                secontNumber += key
                print(secontNumber)
            }
            else if (firstNumber !== '' && secontNumber !== '' && finish){
                firstNumber = key
                finish = false
                print(firstNumber)
            }
            else{
                firstNumber += key
                print(firstNumber)
            }
            return
        }

        if(action.includes(key)){
            sign = key
            print(sign)
            return
        }

        if(key === '='){
            if(firstNumber === '') firstNumber = secontNumber
            switch(sign){
                case "":
                    break;
                case "+":
                    secontNumber = (+secontNumber) +(+firstNumber)
                    break;
                case "-":
                    secontNumber = secontNumber - firstNumber
                    break;
                case "x":
                    secontNumber = secontNumber * firstNumber
                    break;
                case "/":
                    if(firstNumber === '0'){
                        print('Ошибка')
                        firstNumber = '';
                        secontNumber = '';
                        sign = '';
                        return
                    }
                    secontNumber = secontNumber / firstNumber
                    break;
            }
            finish = true
            print(secontNumber)
        }
    }
}

export default main