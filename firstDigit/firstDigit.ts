export function firstDigit(inputString: string): string {
    const numbers = ['1','2','3','4','5','6','7','8','9','0'];
    const splitInput = inputString.split('');

    for(let i=0;i<numbers.length;i++){
        if(inputString.includes(numbers[i])){
            return numbers[i]
        }
    }
}

console.log(firstDigit('var_1__Int'));
console.log(firstDigit('q2q-q'));
console.log(firstDigit('0ss'));
