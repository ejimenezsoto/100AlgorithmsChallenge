export function extractMatrixColumn(matrix: number[][], column: number): number[] {
     const matrixColum: number[] = [];

    matrix.forEach(row => matrixColum.push(row[column]))
     return matrixColum
}

console.log(extractMatrixColumn([[1, 1, 1, 2], [0, 5, 0, 4], [2, 1, 3, 6]], 2));