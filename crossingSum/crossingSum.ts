export function crossingSum(matrix: number[][], a: number, b: number): number {
     const columTotal = matrix[a].reduce((a,b) => a+b);
    let rowTotal = 0;

    for(let i=0;i<matrix.length;i++){
        rowTotal += i !== a ? matrix[i][b] : 0;
    }

    return columTotal + rowTotal
}

console.log(crossingSum([[1, 1, 1, 1], 
                         [2, 2, 2, 2], 
                         [3, 3, 3, 3]], 1, 3));