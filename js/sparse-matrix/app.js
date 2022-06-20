// 2차원 배열의 희소행렬 구하기
const convertSparseMatrix = (matrix = []) => {
    const sparseMatrix = [];
    let rowLen = 0;
    let colLen = 0;
    let cntAtr = 0;
    try {
        // 최대 행, 열 구하기
        rowLen = matrix.length;
        for (const i in matrix) {
            if (!Array.isArray(matrix[i])) {
                throw new Error(`배열이 아닙니다. (${i} 번째 행)`);
            }
            if (matrix[i].length > colLen) {
                colLen = matrix[i].length;
            }
            for (const j in matrix[i]) {
                const atr = parseInt(matrix[i][j]);
                if (Number.isNaN(atr)) {
                    throw new Error(
                        `정수가 아닙니다. (${i}번째 행의 ${j} 번째 열)`
                    );
                }
                if (atr !== 0) {
                    sparseMatrix.push([i, j, atr]);
                    cntAtr++;
                }
            }
        }
        // 첫번째 행은 행 번호, 열 번호, 0이 아닌 원소의 개수
        sparseMatrix.unshift([rowLen, colLen, cntAtr]);
        return sparseMatrix;
    } catch (error) {
        console.error(error);
        return false;
    }
};
const sparseMatrix = convertSparseMatrix([
    ["0", "20", "0", "0", "9", "0", "0", "11", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
]);
console.log(sparseMatrix);
