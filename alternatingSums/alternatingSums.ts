export function alternatingSums(a: number[]): number[] {
    let evenSum = 0;
    let oddSum = 0;

    a.forEach((num,index) => {
        if(index % 2 === 0){
            evenSum += num
        } else{
            oddSum += num
        }
    })
    return [evenSum,oddSum]
}

console.log(alternatingSums([50, 60, 60, 45, 70]))