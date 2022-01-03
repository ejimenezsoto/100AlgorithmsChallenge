export function largestNumber(n: number): number {

    let number = '';

    for(let i=0;i<n;i++){
        number += '9';
    }

    return parseInt(number)
}

console.log(largestNumber(4));