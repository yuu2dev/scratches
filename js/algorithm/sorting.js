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
/** 버블 정렬 개선 - 이미 자리바꿨으면 스킵 */
const bubble_renewal = (arr = []) => {
    for (let i=0; i<arr.length-1; i++) {
        // 정렬되었다고 가정한다
        let sorted = true
        for (j=0; j<arr.length-1; j++) {
            if (arr[j] > arr[j+1]) {
                const tmp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = tmp
                // 자리 바꿈이 발생하면 정렬 되지 않은 상태라고 간주
                sorted = false
            }
        }
        if (sorted == true) {
            break
        }
    }
    return arr
}
/** 삽입 정렬 */
const insertion = (arr = []) => {
    for (let i=1; i < arr.length; i++) {
        let value = arr[i]
        for (j=i; j > 0 && arr[j-1] > value; j--) {
            arr[j] = arr[j-1]
        }
        arr[j]= value
    }
    return arr
}
/** 셸 정렬 */
const shell = (arr = []) => {
    for (let d = Math.floor(arr.length / 2); d >= 1; d = Math.floor(d / 2)) {
        for (i = d; i < arr.length; i++) {
            let value = arr[i]
            for (j = i; j >= d && arr[j - d] > value; j = j - d) {
                arr[j] = arr[j - d]
            }
            arr[j] = value
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
console.log(
    '버블정렬 개선',
    bubble_renewal([30, 20, 40, 35, 5, 10, 45, 50, 25, 15])
)
console.log(
    '삽입정렬',
    insertion([30, 20, 40, 35, 5, 10, 45, 50, 25, 15])
)
console.log(
    '셸 정렬',
    shell([30, 50, 10, 40, 75, 20, 45, 55, 25, 35, 65, 80, 15, 60, 5, 70])
)