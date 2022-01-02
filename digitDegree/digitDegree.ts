export function digitDegree(n: number): number {
    let count = 0;

    if(n <= 9){
        return count;
    } else {
        while(true){
            count++
        }
    }
    return count;
}


console.log(digitDegree(5));
console.log(digitDegree(10));
console.log(digitDegree(91));