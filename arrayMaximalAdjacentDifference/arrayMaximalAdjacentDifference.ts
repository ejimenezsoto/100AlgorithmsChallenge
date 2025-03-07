export function arrayMaximalAdjacentDifference(inputArray: number[]): number {
    let maxDiff = Math.abs(inputArray[0] - inputArray[1]);
    for(let i=0;i<inputArray.length;i++){
        let absDiff = Math.abs(inputArray[i-1]-inputArray[i]);

        maxDiff = absDiff > maxDiff ? absDiff : maxDiff
    }

    return maxDiff;
}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));