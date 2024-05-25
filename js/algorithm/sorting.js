/**
 * 2024.05.25
 * @author minsa
 * n > 1 보다 크다고 가정
 */

/** 선택 정렬 */
const selection = (arr = []) => {
    // n-1 반복
    for (let i=0; i<arr.length - 1; i++) {
        let min = i
        for (j=i+1; j < arr.length; j++) {
            // 최솟값 보다 크다면 ?
            if (arr[min] > arr[j]) {
                min = j
                // 자리 바꿈
            }
        }
        const tmp = arr[i]
        arr[i] = arr[min]
        arr[min] = tmp
    }
    return arr
}
/** 버블 정렬 */
const bubble = (arr = []) => {
    for (let i=0; i<arr.length-1; i++) {
        for (j=0; j<arr.length-1; j++) {
            if (arr[j] > arr[j+1]) {
                const tmp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = tmp
            }
        }
    }
    return arr
}
console.log(
    '선택정렬', 
    selection([30, 20, 40, 35, 5, 10, 45, 50, 25, 15])
)
console.log(
    '버블정렬',
    bubble([30, 20, 40, 35, 5, 10, 45, 50, 25, 15])
)

