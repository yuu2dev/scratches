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
const quick = (arr = []) => {
    if (arr.length <= 1) {
        return arr
    }
    // 분할 함수
    const partition = (part_arr = []) => {
        let left = 1
        let right = part_arr.length - 1
        while (left < right) {
            while (left < part_arr.length && part_arr[left] < part_arr[0]) {
                left++
            }
            while (right > 0 && part_arr[right] >= part_arr[0]) {
                right--
            }
            if (left < right) {
                const tmp = part_arr[left]
                part_arr[left] = part_arr[right]
                part_arr[right] = tmp
            } else {
                const tmp = part_arr[0]
                part_arr[0] = part_arr[right]
                part_arr[right] = tmp
            }
        }
        return right
    }
    const pivot = partition(arr)
    const larr = []
    for (let i=0; i<pivot; i++) {
        larr.push(arr[i])
    }
    const rarr = []
    for (let i=pivot+1; i<arr.length; i++) {
        rarr.push(arr[i])
    }
    // 피봇 기준으로 반띵
    return [
        ...quick(larr),
        arr[pivot],
        ...quick(rarr)
    ]
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
console.log(
    '퀵 정렬',
    quick([30, 50, 17, 40, 88, 15, 44, 55, 22, 11, 66, 13, 85])
)