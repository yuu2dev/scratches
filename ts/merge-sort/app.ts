const nums: number[] = [20, 25, 35, 50, 40, 10, 30, 25]
const mergeSort = (arr: number[] = []): number[] => {
    if (arr.length <= 0) {
        return arr
    }
    const mid = Math.floor(arr.length / 2)
    if (mid <= 0) {
        return arr
    }
    const brr = mergeSort(arr.slice(0, mid))
    const crr = mergeSort(arr.slice(mid, arr.length))
    arr = merge(brr, crr)
    return arr
}
const merge = (brr: number[] = [], crr: number[] = []): number[] => {
    const arr: number[] = []
    let b = 0
    let c = 0
    let k = 0
    while (b < brr.length && c < crr.length) {
        if (brr[b] <= crr[c]) {
            arr[k] = brr[b]
            b++
        } else {
            arr[k] = crr[c]
            c++
        }
        k++
    }
    for (; b < brr.length; b++) {
        arr[k] = brr[b]
        k++
    }
    for (; c < crr.length; c++) {
        arr[k] = crr[c]
        k++
    }
    return arr
}

const mergedNums: number[] = mergeSort(nums)
console.log(mergedNums)
