/**
 * 2024.05.25
 * @author minsa
 * n > 1 보다 크다고 가정
 */

/** 선택 정렬 */
const selection = (arr) => {
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

const result = selection([30, 20, 40, 35, 5, 10, 45, 50, 25, 15])
console.log(result)